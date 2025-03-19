/**
 * Example OpenAPI schema for Antibiotics collection
 * Generated from Solr schema and enhanced with descriptions
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Antibiotics:
 *       type: object
 *       required:
 *         - pubchem_cid
 *       properties:
 *         pubchem_cid:
 *           type: string
 *           description: PubChem Compound ID - unique identifier for the antibiotic
 *           example: "2764"
 *         pubchem_cid_i:
 *           type: integer
 *           description: PubChem Compound ID as integer
 *           example: 2764
 *         cas_id:
 *           type: string
 *           description: Chemical Abstracts Service registry number
 *           example: "59-67-6"
 *         antibiotic_name:
 *           type: string
 *           description: Primary name of the antibiotic compound
 *           example: "Tetracycline"
 *         synonyms:
 *           type: array
 *           description: Alternative names for the antibiotic
 *           items:
 *             type: string
 *           example: ["Achromycin", "Tetracyn"]
 *         molecular_formula:
 *           type: string
 *           description: Chemical formula of the compound
 *           example: "C22H24N2O8"
 *         molecular_weight:
 *           type: string
 *           description: Molecular weight of the compound
 *           example: "444.435 g/mol"
 *         inchi_key:
 *           type: string
 *           description: International Chemical Identifier key
 *           example: "XFTMVBXSHXAKGQ-UHFFFAOYSA-N"
 *         canonical_smiles:
 *           type: string
 *           description: Simplified Molecular Input Line Entry System notation
 *           example: "CC1=C2C(=O)C3=C(C(=O)C(C(N)=O)=C(O)C3=O)C(O)=C2C(C)(O)C=C1O"
 *         isomeric_smiles:
 *           type: string
 *           description: SMILES notation with isomeric specification
 *           example: "CC1=C2C(=O)C3=C(C(=O)C(C(N)=O)=C(O)C3=O)C(O)=C2C(C)(O)C=C1O"
 *         description:
 *           type: array
 *           description: General description of the antibiotic
 *           items:
 *             type: string
 *           example: ["Tetracycline is a broad-spectrum antibiotic that inhibits bacterial protein synthesis."]
 *         pharmacology:
 *           type: array
 *           description: Pharmacological information
 *           items:
 *             type: string
 *           example: ["Tetracycline binds to the 30S ribosomal subunit, preventing the binding of aminoacyl tRNA to the mRNA-ribosome complex."]
 *         pharmacological_classes:
 *           type: array
 *           description: Classification of the antibiotic
 *           items:
 *             type: string
 *           example: ["Tetracycline Antibiotics", "Protein Synthesis Inhibitors"]
 *         mechanism_of_action:
 *           type: array
 *           description: How the antibiotic works at molecular level
 *           items:
 *             type: string
 *           example: ["Inhibits bacterial protein synthesis by preventing the association of aminoacyl-tRNA with the bacterial ribosome."]
 *         drugbank_interactions:
 *           type: array
 *           description: Known drug interactions
 *           items:
 *             type: string
 *           example: ["Calcium decreases tetracycline absorption", "Contraindicated with isotretinoin"]
 *         atc_classification:
 *           type: array
 *           description: Anatomical Therapeutic Chemical classification
 *           items:
 *             type: string
 *           example: ["J01AA07"]
 */