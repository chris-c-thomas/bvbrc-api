/**
 * Swagger configuration file
 */
module.exports = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'BV-BRC API',
      version: '1.9.2',
      description: `Bacterial and Viral Bioinformatics Resource Center (BV-BRC) API provides access to 
        various bioinformatics data including genomes, features, annotations, and more. 
        This API supports multiple query formats including REST, RQL, and Apache Solr.`,
      contact: {
        name: 'BV-BRC Support',
        url: 'https://www.bv-brc.org/contact'
      },
      license: {
        name: 'BSD-3-Clause'
      }
    },
    servers: [
      {
        url: 'https://www.bv-brc.org/api',
        description: 'Production API server'
      },
      {
        url: 'https://www.bv-brc.org/api/dev',
        description: 'Development API server'
      }
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Authentication token retrieved from /authenticate endpoint'
        }
      }
    },
    tags: [
      {
        name: 'genome',
        description: 'Access to genome data'
      },
      {
        name: 'genome_feature',
        description: 'Access to genomic features'
      },
      {
        name: 'pathway',
        description: 'Access to pathway data'
      },
      {
        name: 'specialty_gene',
        description: 'Access to specialty gene data'
      },
      {
        name: 'taxonomy',
        description: 'Access to taxonomic data'
      }
    ]
  },
  apis: [
    './routes/*.js',
    './middleware/*.js',
    './models/*.js',
    './swagger-annotations.js'
  ]
}