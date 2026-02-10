const databasesComparison = {
    title: "SQL vs NoSQL Databases - Based on Angela Yu's The Complete Full-Stack Web Development Bootcamp",
    overview:
      "In Angela Yu's course, databases are introduced first with SQL (using SQLite/MySQL/PostgreSQL) for structured, relational data, and later with NoSQL (MongoDB) for flexible, document-based storage. The comparison emphasizes when to choose each based on data structure, scalability, and project needs.",
    sql: {
      full_name: "Structured Query Language (Relational Databases)",
      description:
        "SQL databases store data in tables with rows and columns, enforcing a fixed schema. Relationships are defined using foreign keys, and queries use the standardized SQL language.",
      key_features: [
        "Rigid schema (must define structure upfront)",
        "ACID compliance (Atomicity, Consistency, Isolation, Durability)",
        "Supports complex JOINs for relational queries",
        "Vertical scaling (scale by adding power to a single server)",
        "Strong consistency",
      ],
      examples_from_course: ["SQLite (used early for simple apps)", "MySQL", "PostgreSQL"],
      advantages: [
        "Great for structured data with clear relationships (e.g., users → orders → products)",
        "Powerful querying with JOINs",
        "Data integrity enforced by schema",
        "Mature and widely supported",
      ],
      disadvantages: [
        "Schema changes are difficult/costly",
        "Horizontal scaling is harder",
        "Less flexible for unstructured or rapidly changing data",
      ],
      best_for:
        "Applications needing complex queries, transactions, and data integrity (e.g., banking, e-commerce backends)",
    },
    nosql: {
      full_name: "Not Only SQL (Non-Relational Databases)",
      description:
        "NoSQL databases store data in flexible formats (documents, key-value pairs, graphs, etc.) without a fixed schema. In the course, MongoDB is used as a document store where data is saved as JSON-like BSON documents.",
      key_features: [
        "Dynamic/flexible schema (add fields anytime)",
        "BASE properties (Basically Available, Soft state, Eventual consistency)",
        "No JOINs needed (data often denormalized)",
        "Horizontal scaling (scale by adding servers)",
        "Eventual consistency",
      ],
      examples_from_course: ["MongoDB (primary NoSQL taught)", "Mongoose (ODM for Node.js)"],
      advantages: [
        "Very flexible for evolving data structures",
        "Excellent horizontal scaling for big data",
        "Faster development (especially with JavaScript/JSON)",
        "Handles unstructured/semi-structured data well",
      ],
      disadvantages: [
        "No standard query language",
        "Eventual consistency can lead to temporary inconsistencies",
        "Complex queries (like JOINs) require application-level logic",
        "Potential data duplication (denormalization)",
      ],
      best_for:
        "Applications with unstructured data, rapid iteration, or massive scale (e.g., social media feeds, real-time analytics, content management)",
    },
    direct_comparison: {
      data_model: {
        sql: "Tables with rows and columns (relational)",
        nosql: "Documents, key-value, graph, column-family (non-relational)",
      },
      schema: {
        sql: "Fixed/strict",
        nosql: "Dynamic/flexible",
      },
      scaling: {
        sql: "Vertical (bigger server)",
        nosql: "Horizontal (more servers)",
      },
      queries: {
        sql: "Standardized SQL with JOINs",
        nosql: "Varies by database (e.g., MongoDB query language)",
      },
      consistency: {
        sql: "Strong (ACID)",
        nosql: "Eventual (BASE)",
      },
    },
    course_takeaway:
      "Start with SQL for structured apps and clear relationships. Switch to (or add) MongoDB/NoSQL when you need flexibility, speed of development, or massive scalability. Many modern full-stack apps use both (polyglot persistence).",
  };
  
  // Example usage:
  // console.log(databasesComparison.sql.advantages);
  // Or export it in a Node.js module, etc.
  