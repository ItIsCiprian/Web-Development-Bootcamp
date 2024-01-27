var OmnitureSetting = new function(){
    var _self=this;
    var _config={};

    this.init=function(config){
        _config={
            prodSKU: config.prodSKU,
            assetID: config.assetID,
            customerID: config.customerID,
            location: "US"
        };
        _config.siteType=getSiteType();

        HAF.config.global.assetID = _config.assetID;
        HAF.config.global.siteType = _config.siteType;
        
        // Do not track preview pages
        var trackingDisableParam = HAF.config.global.trackingDisableParam || "preview";
        var trackingDisabled = HAF.s.Util.getQueryParam(trackingDisableParam);
        if ((trackingDisabled && trackingDisabled.toLowerCase() == "true") ||
            (document.URL.indexOf("runtime-lambda.hibuwebsites.com") > -1) ||
            (document.URL.indexOf("/home/ed/site/") > -1) ||
            (window.Parameters.SiteAlias && (document.URL.indexOf("/site/"+window.Parameters.SiteAlias) > -1))) {
        	HAF.config.omniture.enabled = false;
        	console.log("Tracking disabled");
        } else {
        	_self.setProps(_config);
        }
    };

    this.setProps=function (config){
      
        var pageViewEvent = {};
        pageViewEvent.key = 'OMT_1';
        pageViewEvent.value = {};
        pageViewEvent.value[YellProps.PROD_SKU.omniture] = config.prodSKU;
        pageViewEvent.value[YellProps.GEO_LOCATION.omniture] = config.location;
        pageViewEvent.value[YellProps.SITE_TYPE.omniture] = config.siteType;
        pageViewEvent.value[YellProps.ASSET_ID.omniture] = config.assetID;
        pageViewEvent.value[YellProps.CUSTOMER_ID.omniture] = config.customerID;
        pageViewEvent.value[YellEvars.ASSET_ID.omniture] = config.assetID;
        pageViewEvent.value[YellEvars.SITE_TYPE.omniture] = config.siteType;
        var pagename = document.location.href;
        var referrer = document.referrer;
        let date = new Date();
        var pageLoadTime = date.getTime();
        let non_website_url = 0;
        if (!(window.Parameters.HomeUrl && pagename.includes(window.Parameters.HomeUrl))) {
            non_website_url = 1;
            pageViewEvent.value[YellProps.MALICIOUS_INTENT_FLAG.omniture] = 1;
            pageViewEvent.value[YellEvars.MALICIOUS_INTENT_FLAG.omniture] = 1;
        }
        console.log("Page Name: " + pagename);
        console.log("Referrer: " + referrer);

        if ( window.Parameters && window.Parameters.InitialPageAlias==YellEvars.ERROR_PAGE_FLAG.param) {
        	pageViewEvent.value[YellProps.ERROR_PAGE_FLAG.omniture] = 1;
            pageViewEvent.value[YellEvars.ERROR_PAGE_FLAG.omniture] = 1;
        }

        var campaignId = HAF.s.Util.getQueryParam("cid") || HAF.s.Util.getQueryParam("CID") || HAF.s.Util.getQueryParam("cam") || HAF.s.Util.getQueryParam("CAM") ;
        if (campaignId) {
            var exp_sec = 604800; //7 days
            var camp_val = campaignId + ":" + HAF.config.global.assetID;
            HAF.Storage.createCookie("campaignId", camp_val, exp_sec);
        }
        
        
        if (typeof document.forms[0] !== 'undefined') {

            const forms = document.forms;

            for (var jj=0; jj < forms.length; jj++) {
                var form = forms[jj];
            if ( form.id ) {
                var formId = 0;
                for (var ii = 0; ii < form.elements.length; ii++) {
                    var field = form.elements[ii];

                    if ((field.name) && (/^label\-dmform\-/.test(field.name))) { //&& (field.value!=="Free Text")
                        inputName = field.name.replace("label-", "");
                        var nameField = ':input[name=' + inputName + ']';

                        if ($(nameField).val() !== undefined) {
                            formId++;
                        }
                    }
                }

                if (formId > 1) {
                    addDynamicField(form, formId++, 'siteType', _config.siteType)
                    //addDynamicField(form, formId++, 'PageUrl', pagename)
                    addDynamicField(form, formId++, 'NoneWebsiteUrl', non_website_url);
                    addDynamicField(form, formId++, 'PageLoadTime', pageLoadTime);
                    addDynamicField(form, formId++, 'Hibu Name Field', '');

                    //var campaignId = s.Util.getQueryParam("cid") || s.Util.getQueryParam("CID") || s.Util.getQueryParam("cam") || s.Util.getQueryParam("CAM") ;
                    var campaignCache = HAF.Storage.readCookie("campaignId");
                    var campaignId = "";
                    var assetId = "";

                    if (campaignCache) {
                        var campAssetId = campaignCache.split(":");
                        campaignId = campAssetId[0];
                        assetId = campAssetId[1];
                    }

                    if (campaignId && (assetId == HAF.config.global.assetID) ) {
                        addDynamicField(form, formId++, 'campaignId', campaignId);

                    /*
                    var form = document.forms[0];

                    var formId = 0;
                    for (var ii = 0; ii < form.elements.length; ii++) {
                        var field = form.elements[ii];

                        if ((field.name) && (/^label\-dmform\-/.test(field.name))) { //&& (field.value!=="Free Text")
                            inputName = field.name.replace("label-", "");
                            var nameField = ':input[name=' + inputName + ']';
                            if ($(nameField).val() !== undefined) {
                                formId++;
                            }


                        }

                    }*/

                    /*
                    var formNameId =  "";
                    var formLabelId = "";
                    for (var formId = 0; formId < $( ":input" ).length; formId++) {

                        formNameId =  'dmform-' + formId;
                        formLabelId = 'label-' + formNameId;
                        var nameField = 'input[name=' + formLabelId + ']';
                        if ($(nameField).val() == undefined ) {
                            break;
                        } else {
                            console.log(nameField + " = " + $(nameField).val());
                        }
                    }*/


                }
        	}
        	}
        	
            }
        }
        
        // check InSITE-VIEW enabled
        //var inSite = s.Util.getQueryParam(YellEvars.INSITE_VIEW.param);
        //if (inSite.toLowerCase() == "true") {
    	//   pageViewEvent.value[YellEvars.INSITE_VIEW.omniture] = YellEvars.INSITE_VIEW.name;
        //}
        
        
        // @Note: We do track inSiteView events via DuDa JS API, this is no longer needed. C.T.
        //$.each(_dm_insite, function(idx, rule) {
        //	pageViewEvent.value[YellEvars.INSITE_VIEW.omniture] = YellEvars.INSITE_VIEW.name + "_" + rule.ruleType + '__' + rule.ruleId + '_old';
       	//});
        
        var keyWord = HAF.s.Util.getQueryParam(YellEvars.CAMPAIGN_KEYWORD.param);
        var adGroup = HAF.s.Util.getQueryParam(YellEvars.CAMPAIGN_ADGROUP.param);
        if (keyWord) {
            pageViewEvent.value[YellEvars.CAMPAIGN_KEYWORD.omniture] = keyWord;
        }
        if (adGroup) {
            pageViewEvent.value[YellEvars.CAMPAIGN_ADGROUP.omniture] = adGroup;
        }
        var clickAttribution = HAF.s.Util.getQueryParam(YellEvars.CLICK_ATTRIBUTION.param);
        if (clickAttribution) {
        	pageViewEvent.value[YellEvars.CLICK_ATTRIBUTION.omniture] = clickAttribution;
        }
        
        HAF.OmTracking.onView(pageViewEvent);
    }


    function addDynamicField(form, formId, fieldLabel, fieldValue) {
        let labelId = formId;
        if (formId < 10) {
            labelId = '0' + formId;
        }

        var fieldTypeLabel = 'label-dmform-' + labelId;
        formNameId =  'dmform-' + labelId;

        $('<input>', {
            type: 'hidden',
            name: fieldTypeLabel,
            value: fieldLabel
        }).appendTo(form);

        $('<input>', {
            type: 'hidden',
            id: 'pageUrl',
            name: formNameId,
            value: fieldValue
        }).appendTo(form);


    }

    function getSiteType () {
        var siteType="web";
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            siteType="mobile";
        }
        return siteType;
    }

};

//put this here to make sure it runs after above code been loaded
dmAPI.runOnReady('omni-analytics', function(){
    OmnitureSetting.init(hibuWebsiteConfig);
});
