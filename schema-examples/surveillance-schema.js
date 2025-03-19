/**
 * Example OpenAPI schema for Surveillance collection
 * Generated from Solr schema and enhanced with descriptions
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Surveillance:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the surveillance record (UUID)
 *           example: "550e8400-e29b-41d4-a716-446655440000"
 *         taxon_lineage_ids:
 *           type: array
 *           description: Array of taxonomy IDs in the lineage
 *           items:
 *             type: string
 *           example: ["2697049", "2697049", "10239", "2559587", "76804", "11308"]
 *         project_identifier:
 *           type: string
 *           description: Identifier for the research project
 *           example: "BVBRC_SURV_2021"
 *         contributing_institution:
 *           type: string
 *           description: Institution that contributed the surveillance data
 *           example: "Centers for Disease Control and Prevention"
 *         sample_identifier:
 *           type: string
 *           description: Identifier for the sample
 *           example: "SARS-CoV-2-CDC-001"
 *         sample_accession:
 *           type: string
 *           description: Accession number for the sample
 *           example: "SRX9876543"
 *         sample_material:
 *           type: string
 *           description: Type of material sampled
 *           example: "Nasopharyngeal swab"
 *         sample_transport_medium:
 *           type: string
 *           description: Medium used to transport the sample
 *           example: "Viral transport medium"
 *         collection_date:
 *           type: string
 *           format: date
 *           description: Date when the sample was collected
 *           example: "2021-03-15"
 *         collection_year:
 *           type: string
 *           description: Year of sample collection
 *           example: "2021"
 *         collection_season:
 *           type: string
 *           description: Season when sample was collected
 *           example: "Spring"
 *         collection_country:
 *           type: string
 *           description: Country where the sample was collected
 *           example: "United States"
 *         collection_state_province:
 *           type: string
 *           description: State or province of sample collection
 *           example: "California"
 *         collection_city:
 *           type: string
 *           description: City of sample collection
 *           example: "San Francisco"
 *         collection_latitude:
 *           type: number
 *           format: float
 *           description: Latitude of sample collection location
 *           example: 37.7749
 *         collection_longitude:
 *           type: number
 *           format: float
 *           description: Longitude of sample collection location
 *           example: -122.4194
 *         pathogen_test_type:
 *           type: array
 *           description: Type of test performed to detect pathogen
 *           items:
 *             type: string
 *           example: ["PCR", "Sequencing"]
 *         pathogen_test_result:
 *           type: array
 *           description: Result of pathogen test
 *           items:
 *             type: string
 *           example: ["Positive", "Detected"]
 *         species:
 *           type: string
 *           description: Species of the pathogen
 *           example: "SARS-CoV-2"
 *         strain:
 *           type: string
 *           description: Strain designation
 *           example: "B.1.1.7"
 *         sequence_accession:
 *           type: array
 *           description: Accession numbers for sequences
 *           items:
 *             type: string
 *           example: ["MT123456", "MT123457"]
 *         genome_id:
 *           type: array
 *           description: Genome identifier in BV-BRC
 *           items:
 *             type: string
 *           example: ["2697049.123"]
 *         host_identifier:
 *           type: string
 *           description: Identifier for the host
 *           example: "PATIENT_XYZ123"
 *         host_species:
 *           type: string
 *           description: Species of the host
 *           example: "Homo sapiens"
 *         host_common_name:
 *           type: string
 *           description: Common name of the host
 *           example: "Human"
 *         host_age:
 *           type: string
 *           description: Age of the host
 *           example: "45"
 *         host_sex:
 *           type: string
 *           description: Sex of the host
 *           example: "Male"
 *         host_health:
 *           type: string
 *           description: Health status of the host
 *           example: "Symptomatic"
 *         symptoms:
 *           type: array
 *           description: Symptoms observed in the host
 *           items:
 *             type: string
 *           example: ["Fever", "Cough", "Fatigue"]
 *         hospitalized:
 *           type: string
 *           description: Whether the host was hospitalized
 *           example: "Yes"
 *         disease_status:
 *           type: string
 *           description: Status of the disease
 *           example: "Active"
 *         disease_severity:
 *           type: string
 *           description: Severity of the disease
 *           example: "Moderate"
 *         treatment:
 *           type: array
 *           description: Treatments administered
 *           items:
 *             type: string
 *           example: ["Remdesivir", "Dexamethasone"]
 *         vaccination_type:
 *           type: string
 *           description: Type of vaccination received
 *           example: "mRNA"
 *         vaccine_manufacturer:
 *           type: array
 *           description: Manufacturer of the vaccine
 *           items:
 *             type: string
 *           example: ["Pfizer", "BioNTech"]
 */