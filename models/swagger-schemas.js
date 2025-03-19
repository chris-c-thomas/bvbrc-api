/**
 * This file is auto-generated from Solr schema files.
 * Do not edit directly.
 */

/**
 * @openapi
 * components:
 *   schemas:
*     Antibiotics:
*       type: object
*       properties:
*         pubchem_cid:
*           type: string
*           description: pubchem_cid field
*         pubchem_cid_i:
*           type: integer
*           description: pubchem_cid_i field
*         cas_id:
*           type: string
*           description: cas_id field
*         antibiotic_name:
*           type: string
*           description: antibiotic_name field
*         synonyms:
*           type: array
*           items:
*             type: string
*           description: synonyms field
*         molecular_formula:
*           type: string
*           description: molecular_formula field
*         molecular_weight:
*           type: string
*           description: molecular_weight field
*         inchi_key:
*           type: string
*           description: inchi_key field
*         canonical_smiles:
*           type: string
*           description: canonical_smiles field
*         isomeric_smiles:
*           type: string
*           description: isomeric_smiles field
*         description:
*           type: array
*           items:
*             type: string
*           description: description field
*         pharmacology:
*           type: array
*           items:
*             type: string
*           description: pharmacology field
*         pharmacological_classes:
*           type: array
*           items:
*             type: string
*           description: pharmacological_classes field
*         mechanism_of_action:
*           type: array
*           items:
*             type: string
*           description: mechanism_of_action field
*         drugbank_interactions:
*           type: array
*           items:
*             type: string
*           description: drugbank_interactions field
*         atc_classification:
*           type: array
*           items:
*             type: string
*           description: atc_classification field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*
*     Bioset:
*       type: object
*       properties:
*         bioset_id:
*           type: string
*           description: bioset_id field
*         study_name:
*           type: string
*           description: study_name field
*         study_title:
*           type: string
*           description: study_title field
*         study_description:
*           type: string
*           description: study_description field
*         study_pi:
*           type: string
*           description: study_pi field
*         study_institution:
*           type: string
*           description: study_institution field
*         exp_id:
*           type: string
*           description: exp_id field
*         exp_name:
*           type: string
*           description: exp_name field
*         exp_title:
*           type: string
*           description: exp_title field
*         exp_type:
*           type: string
*           description: exp_type field
*         bioset_name:
*           type: string
*           description: bioset_name field
*         bioset_description:
*           type: string
*           description: bioset_description field
*         bioset_type:
*           type: string
*           description: bioset_type field
*         analysis_method:
*           type: string
*           description: analysis_method field
*         bioset_criteria:
*           type: string
*           description: bioset_criteria field
*         result_type:
*           type: string
*           description: result_type field
*         protocol:
*           type: array
*           items:
*             type: string
*           description: protocol field
*         bioset_result:
*           type: array
*           items:
*             type: string
*           description: bioset_result field
*         organism:
*           type: string
*           description: organism field
*         strain:
*           type: string
*           description: strain field
*         taxon_id:
*           type: integer
*           description: taxon_id field
*         taxon_lineage_ids:
*           type: array
*           items:
*             type: string
*           description: taxon_lineage_ids field
*         genome_id:
*           type: array
*           items:
*             type: string
*           description: genome_id field
*         analysis_group_1:
*           type: string
*           description: analysis_group_1 field
*         analysis_group_2:
*           type: string
*           description: analysis_group_2 field
*         treatment_type:
*           type: string
*           description: treatment_type field
*         treatment_name:
*           type: string
*           description: treatment_name field
*         treatment_amount:
*           type: string
*           description: treatment_amount field
*         treatment_duration:
*           type: string
*           description: treatment_duration field
*         entity_type:
*           type: string
*           description: entity_type field
*         entity_count:
*           type: string
*           description: entity_count field
*         additional_metadata:
*           type: array
*           items:
*             type: string
*           description: additional_metadata field
*         additional_data:
*           type: array
*           items:
*             type: string
*           description: additional_data field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*
*     Bioset_result:
*       type: object
*       properties:
*         id:
*           type: string
*           description: id field
*         exp_id:
*           type: string
*           description: exp_id field
*         exp_name:
*           type: string
*           description: exp_name field
*         exp_title:
*           type: string
*           description: exp_title field
*         exp_type:
*           type: string
*           description: exp_type field
*         bioset_id:
*           type: string
*           description: bioset_id field
*         bioset_name:
*           type: string
*           description: bioset_name field
*         bioset_description:
*           type: string
*           description: bioset_description field
*         bioset_type:
*           type: string
*           description: bioset_type field
*         result_type:
*           type: string
*           description: result_type field
*         organism:
*           type: string
*           description: organism field
*         strain:
*           type: string
*           description: strain field
*         taxon_id:
*           type: integer
*           description: taxon_id field
*         genome_id:
*           type: array
*           items:
*             type: string
*           description: genome_id field
*         treatment_type:
*           type: string
*           description: treatment_type field
*         treatment_name:
*           type: string
*           description: treatment_name field
*         treatment_amount:
*           type: string
*           description: treatment_amount field
*         treatment_duration:
*           type: string
*           description: treatment_duration field
*         entity_type:
*           type: string
*           description: entity_type field
*         entity_id:
*           type: string
*           description: entity_id field
*         entity_name:
*           type: string
*           description: entity_name field
*         feature_id:
*           type: string
*           description: feature_id field
*         patric_id:
*           type: string
*           description: patric_id field
*         locus_tag:
*           type: string
*           description: locus_tag field
*         gene_id:
*           type: string
*           description: gene_id field
*         protein_id:
*           type: string
*           description: protein_id field
*         uniprot_id:
*           type: string
*           description: uniprot_id field
*         other_ids:
*           type: array
*           items:
*             type: string
*           description: other_ids field
*         gene:
*           type: string
*           description: gene field
*         product:
*           type: string
*           description: product field
*         counts:
*           type: number
*           description: counts field
*         fpkm:
*           type: number
*           description: fpkm field
*         tpm:
*           type: number
*           description: tpm field
*         log2_fc:
*           type: number
*           description: log2_fc field
*         other_value:
*           type: number
*           description: other_value field
*         p_value:
*           type: number
*           description: p_value field
*         z_score:
*           type: number
*           description: z_score field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*
*     Enzyme_class_ref:
*       type: object
*       properties:
*         ec_number:
*           type: string
*           description: ec_number field
*         ec_description:
*           type: string
*           description: ec_description field
*         go:
*           type: array
*           items:
*             type: string
*           description: go field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*
*     Epitope:
*       type: object
*       properties:
*         epitope_id:
*           type: string
*           description: epitope_id field
*         epitope_type:
*           type: string
*           description: epitope_type field
*         epitope_sequence:
*           type: string
*           description: epitope_sequence field
*         organism:
*           type: string
*           description: organism field
*         taxon_id:
*           type: integer
*           description: taxon_id field
*         taxon_lineage_ids:
*           type: array
*           items:
*             type: string
*           description: taxon_lineage_ids field
*         taxon_lineage_names:
*           type: array
*           items:
*             type: string
*           description: taxon_lineage_names field
*         protein_name:
*           type: string
*           description: protein_name field
*         protein_id:
*           type: string
*           description: protein_id field
*         protein_accession:
*           type: string
*           description: protein_accession field
*         start:
*           type: integer
*           description: start field
*         end:
*           type: integer
*           description: end field
*         host_name:
*           type: array
*           items:
*             type: string
*           description: host_name field
*         total_assays:
*           type: integer
*           description: total_assays field
*         assay_results:
*           type: array
*           items:
*             type: string
*           description: assay_results field
*         bcell_assays:
*           type: string
*           description: bcell_assays field
*         tcell_assays:
*           type: string
*           description: tcell_assays field
*         mhc_assays:
*           type: string
*           description: mhc_assays field
*         comments:
*           type: array
*           items:
*             type: string
*           description: comments field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*
*     Epitope_assay:
*       type: object
*       properties:
*         assay_id:
*           type: string
*           description: assay_id field
*         assay_type:
*           type: string
*           description: assay_type field
*         epitope_id:
*           type: string
*           description: epitope_id field
*         epitope_type:
*           type: string
*           description: epitope_type field
*         epitope_sequence:
*           type: string
*           description: epitope_sequence field
*         organism:
*           type: string
*           description: organism field
*         taxon_id:
*           type: integer
*           description: taxon_id field
*         taxon_lineage_ids:
*           type: array
*           items:
*             type: string
*           description: taxon_lineage_ids field
*         taxon_lineage_names:
*           type: array
*           items:
*             type: string
*           description: taxon_lineage_names field
*         protein_name:
*           type: string
*           description: protein_name field
*         protein_id:
*           type: string
*           description: protein_id field
*         protein_accession:
*           type: string
*           description: protein_accession field
*         pdb_id:
*           type: string
*           description: pdb_id field
*         start:
*           type: integer
*           description: start field
*         end:
*           type: integer
*           description: end field
*         host_name:
*           type: string
*           description: host_name field
*         host_taxon_id:
*           type: string
*           description: host_taxon_id field
*         assay_group:
*           type: string
*           description: assay_group field
*         assay_method:
*           type: string
*           description: assay_method field
*         assay_result:
*           type: string
*           description: assay_result field
*         assay_measurement:
*           type: string
*           description: assay_measurement field
*         assay_measurement_unit:
*           type: string
*           description: assay_measurement_unit field
*         mhc_allele:
*           type: string
*           description: mhc_allele field
*         mhc_allele_class:
*           type: string
*           description: mhc_allele_class field
*         pmid:
*           type: string
*           description: pmid field
*         authors:
*           type: string
*           description: authors field
*         title:
*           type: string
*           description: title field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*
*     Experiment:
*       type: object
*       properties:
*         exp_id:
*           type: string
*           description: exp_id field
*         study_name:
*           type: string
*           description: study_name field
*         study_title:
*           type: string
*           description: study_title field
*         study_description:
*           type: string
*           description: study_description field
*         study_pi:
*           type: string
*           description: study_pi field
*         study_institution:
*           type: string
*           description: study_institution field
*         exp_name:
*           type: string
*           description: exp_name field
*         exp_title:
*           type: string
*           description: exp_title field
*         exp_description:
*           type: string
*           description: exp_description field
*         exp_poc:
*           type: string
*           description: exp_poc field
*         experimenters:
*           type: string
*           description: experimenters field
*         public_repository:
*           type: string
*           description: public_repository field
*         public_identifier:
*           type: string
*           description: public_identifier field
*         pmid:
*           type: string
*           description: pmid field
*         doi:
*           type: string
*           description: doi field
*         exp_type:
*           type: string
*           description: exp_type field
*         measurement_technique:
*           type: string
*           description: measurement_technique field
*         detection_instrument:
*           type: string
*           description: detection_instrument field
*         exp_protocol:
*           type: array
*           items:
*             type: string
*           description: exp_protocol field
*         organism:
*           type: array
*           items:
*             type: string
*           description: organism field
*         strain:
*           type: array
*           items:
*             type: string
*           description: strain field
*         taxon_id:
*           type: array
*           items:
*             type: integer
*           description: taxon_id field
*         taxon_lineage_ids:
*           type: array
*           items:
*             type: string
*           description: taxon_lineage_ids field
*         genome_id:
*           type: array
*           items:
*             type: string
*           description: genome_id field
*         treatment_type:
*           type: array
*           items:
*             type: string
*           description: treatment_type field
*         treatment_name:
*           type: array
*           items:
*             type: string
*           description: treatment_name field
*         treatment_amount:
*           type: array
*           items:
*             type: string
*           description: treatment_amount field
*         treatment_duration:
*           type: array
*           items:
*             type: string
*           description: treatment_duration field
*         samples:
*           type: integer
*           description: samples field
*         biosets:
*           type: integer
*           description: biosets field
*         additional_metadata:
*           type: array
*           items:
*             type: string
*           description: additional_metadata field
*         additional_data:
*           type: array
*           items:
*             type: string
*           description: additional_data field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*
*     Feature_sequence:
*       type: object
*       properties:
*         md5:
*           type: string
*           description: md5 field
*         sequence_type:
*           type: string
*           description: sequence_type field
*         sequence:
*           type: string
*           description: sequence field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*
*     Gene_ontology_ref:
*       type: object
*       properties:
*         go_id:
*           type: string
*           description: go_id field
*         go_name:
*           type: string
*           description: go_name field
*         ontology:
*           type: string
*           description: ontology field
*         definition:
*           type: string
*           description: definition field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*
*     Genome:
*       type: object
*       properties:
*         genome_id:
*           type: string
*           description: genome_id field
*         p2_genome_id:
*           type: integer
*           description: p2_genome_id field
*         genome_name:
*           type: string
*           description: genome_name field
*         common_name:
*           type: string
*           description: common_name field
*         organism_name:
*           type: string
*           description: organism_name field
*         other_names:
*           type: array
*           items:
*             type: string
*           description: other_names field
*         taxon_id:
*           type: integer
*           description: taxon_id field
*         taxon_lineage_ids:
*           type: array
*           items:
*             type: string
*           description: taxon_lineage_ids field
*         taxon_lineage_names:
*           type: array
*           items:
*             type: string
*           description: taxon_lineage_names field
*         superkingdom:
*           type: string
*           description: superkingdom field
*         kingdom:
*           type: string
*           description: kingdom field
*         phylum:
*           type: string
*           description: phylum field
*         class:
*           type: string
*           description: class field
*         order:
*           type: string
*           description: order field
*         family:
*           type: string
*           description: family field
*         genus:
*           type: string
*           description: genus field
*         species:
*           type: string
*           description: species field
*         genome_status:
*           type: string
*           description: genome_status field
*         strain:
*           type: string
*           description: strain field
*         serovar:
*           type: string
*           description: serovar field
*         biovar:
*           type: string
*           description: biovar field
*         pathovar:
*           type: string
*           description: pathovar field
*         mlst:
*           type: string
*           description: mlst field
*         segment:
*           type: string
*           description: segment field
*         subtype:
*           type: string
*           description: subtype field
*         h_type:
*           type: integer
*           description: h_type field
*         n_type:
*           type: integer
*           description: n_type field
*         h1_clade_global:
*           type: array
*           items:
*             type: string
*           description: h1_clade_global field
*         h1_clade_us:
*           type: array
*           items:
*             type: string
*           description: h1_clade_us field
*         h3_clade:
*           type: array
*           items:
*             type: string
*           description: h3_clade field
*         h5_clade:
*           type: array
*           items:
*             type: string
*           description: h5_clade field
*         ph1n1_like:
*           type: string
*           description: ph1n1_like field
*         lineage:
*           type: string
*           description: lineage field
*         clade:
*           type: string
*           description: clade field
*         subclade:
*           type: string
*           description: subclade field
*         other_typing:
*           type: array
*           items:
*             type: string
*           description: other_typing field
*         culture_collection:
*           type: string
*           description: culture_collection field
*         type_strain:
*           type: string
*           description: type_strain field
*         reference_genome:
*           type: string
*           description: reference_genome field
*         completion_date:
*           type: string
*           description: completion_date field
*         publication:
*           type: string
*           description: publication field
*         authors:
*           type: string
*           description: authors field
*         bioproject_accession:
*           type: string
*           description: bioproject_accession field
*         biosample_accession:
*           type: string
*           description: biosample_accession field
*         assembly_accession:
*           type: string
*           description: assembly_accession field
*         sra_accession:
*           type: string
*           description: sra_accession field
*         ncbi_project_id:
*           type: string
*           description: ncbi_project_id field
*         refseq_project_id:
*           type: string
*           description: refseq_project_id field
*         genbank_accessions:
*           type: string
*           description: genbank_accessions field
*         refseq_accessions:
*           type: string
*           description: refseq_accessions field
*         sequencing_centers:
*           type: string
*           description: sequencing_centers field
*         sequencing_status:
*           type: string
*           description: sequencing_status field
*         sequencing_platform:
*           type: string
*           description: sequencing_platform field
*         sequencing_depth:
*           type: string
*           description: sequencing_depth field
*         assembly_method:
*           type: string
*           description: assembly_method field
*         chromosomes:
*           type: integer
*           description: chromosomes field
*         plasmids:
*           type: integer
*           description: plasmids field
*         segments:
*           type: integer
*           description: segments field
*         contigs:
*           type: integer
*           description: contigs field
*         genome_length:
*           type: integer
*           description: genome_length field
*         gc_content:
*           type: number
*           description: gc_content field
*         contig_l50:
*           type: integer
*           description: contig_l50 field
*         contig_n50:
*           type: integer
*           description: contig_n50 field
*         patric_cds:
*           type: integer
*           description: patric_cds field
*         refseq_cds:
*           type: integer
*           description: refseq_cds field
*         trna:
*           type: integer
*           description: trna field
*         rrna:
*           type: integer
*           description: rrna field
*         mat_peptide:
*           type: integer
*           description: mat_peptide field
*         cds:
*           type: integer
*           description: cds field
*         cds_ratio:
*           type: number
*           description: cds_ratio field
*         hypothetical_cds:
*           type: integer
*           description: hypothetical_cds field
*         hypothetical_cds_ratio:
*           type: number
*           description: hypothetical_cds_ratio field
*         partial_cds:
*           type: integer
*           description: partial_cds field
*         partial_cds_ratio:
*           type: number
*           description: partial_cds_ratio field
*         plfam_cds:
*           type: integer
*           description: plfam_cds field
*         plfam_cds_ratio:
*           type: number
*           description: plfam_cds_ratio field
*         core_families:
*           type: integer
*           description: core_families field
*         core_family_ratio:
*           type: number
*           description: core_family_ratio field
*         missing_core_family_ids:
*           type: array
*           items:
*             type: string
*           description: missing_core_family_ids field
*         coarse_consistency:
*           type: number
*           description: coarse_consistency field
*         fine_consistency:
*           type: number
*           description: fine_consistency field
*         checkm_completeness:
*           type: number
*           description: checkm_completeness field
*         checkm_contamination:
*           type: number
*           description: checkm_contamination field
*         genome_quality_flags:
*           type: array
*           items:
*             type: string
*           description: genome_quality_flags field
*         genome_quality:
*           type: string
*           description: genome_quality field
*         nearest_genomes:
*           type: array
*           items:
*             type: string
*           description: nearest_genomes field
*         outgroup_genomes:
*           type: array
*           items:
*             type: string
*           description: outgroup_genomes field
*         isolation_site:
*           type: string
*           description: isolation_site field
*         isolation_source:
*           type: string
*           description: isolation_source field
*         isolation_comments:
*           type: string
*           description: isolation_comments field
*         collection_date:
*           type: string
*           description: collection_date field
*         collection_year:
*           type: integer
*           description: collection_year field
*         season:
*           type: string
*           description: season field
*         isolation_country:
*           type: string
*           description: isolation_country field
*         state_province:
*           type: string
*           description: state_province field
*         geographic_group:
*           type: string
*           description: geographic_group field
*         geographic_location:
*           type: string
*           description: geographic_location field
*         latitude:
*           type: string
*           description: latitude field
*         longitude:
*           type: string
*           description: longitude field
*         altitude:
*           type: string
*           description: altitude field
*         depth:
*           type: string
*           description: depth field
*         other_environmental:
*           type: array
*           items:
*             type: string
*           description: other_environmental field
*         host_name:
*           type: string
*           description: host_name field
*         host_common_name:
*           type: string
*           description: host_common_name field
*         host_scientific_name:
*           type: string
*           description: host_scientific_name field
*         host_gender:
*           type: string
*           description: host_gender field
*         host_age:
*           type: string
*           description: host_age field
*         host_health:
*           type: string
*           description: host_health field
*         host_group:
*           type: string
*           description: host_group field
*         lab_host:
*           type: string
*           description: lab_host field
*         passage:
*           type: string
*           description: passage field
*         body_sample_site:
*           type: string
*           description: body_sample_site field
*         body_sample_subsite:
*           type: string
*           description: body_sample_subsite field
*         other_clinical:
*           type: array
*           items:
*             type: string
*           description: other_clinical field
*         antimicrobial_resistance:
*           type: array
*           items:
*             type: string
*           description: antimicrobial_resistance field
*         antimicrobial_resistance_evidence:
*           type: string
*           description: antimicrobial_resistance_evidence field
*         phenotype:
*           type: array
*           items:
*             type: string
*           description: phenotype field
*         gram_stain:
*           type: string
*           description: gram_stain field
*         cell_shape:
*           type: string
*           description: cell_shape field
*         motility:
*           type: string
*           description: motility field
*         sporulation:
*           type: string
*           description: sporulation field
*         temperature_range:
*           type: string
*           description: temperature_range field
*         optimal_temperature:
*           type: string
*           description: optimal_temperature field
*         salinity:
*           type: string
*           description: salinity field
*         oxygen_requirement:
*           type: string
*           description: oxygen_requirement field
*         habitat:
*           type: string
*           description: habitat field
*         disease:
*           type: array
*           items:
*             type: string
*           description: disease field
*         additional_metadata:
*           type: array
*           items:
*             type: string
*           description: additional_metadata field
*         comments:
*           type: array
*           items:
*             type: string
*           description: comments field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*         public:
*           type: boolean
*           description: public field
*         owner:
*           type: string
*           description: owner field
*         user_read:
*           type: array
*           items:
*             type: string
*           description: user_read field
*         user_write:
*           type: array
*           items:
*             type: string
*           description: user_write field
*
*     Genome_amr:
*       type: object
*       properties:
*         id:
*           type: string
*           description: id field
*         genome_id:
*           type: string
*           description: genome_id field
*         genome_name:
*           type: string
*           description: genome_name field
*         taxon_id:
*           type: integer
*           description: taxon_id field
*         antibiotic:
*           type: string
*           description: antibiotic field
*         resistant_phenotype:
*           type: string
*           description: resistant_phenotype field
*         measurement:
*           type: string
*           description: measurement field
*         measurement_sign:
*           type: string
*           description: measurement_sign field
*         measurement_value:
*           type: string
*           description: measurement_value field
*         measurement_unit:
*           type: string
*           description: measurement_unit field
*         laboratory_typing_method:
*           type: string
*           description: laboratory_typing_method field
*         laboratory_typing_method_version:
*           type: string
*           description: laboratory_typing_method_version field
*         laboratory_typing_platform:
*           type: string
*           description: laboratory_typing_platform field
*         vendor:
*           type: string
*           description: vendor field
*         computational_method:
*           type: string
*           description: computational_method field
*         computational_method_version:
*           type: string
*           description: computational_method_version field
*         computational_method_performance:
*           type: string
*           description: computational_method_performance field
*         testing_standard:
*           type: string
*           description: testing_standard field
*         testing_standard_year:
*           type: integer
*           description: testing_standard_year field
*         source:
*           type: string
*           description: source field
*         pmid:
*           type: array
*           items:
*             type: integer
*           description: pmid field
*         evidence:
*           type: string
*           description: evidence field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*         public:
*           type: boolean
*           description: public field
*         owner:
*           type: string
*           description: owner field
*         user_read:
*           type: array
*           items:
*             type: string
*           description: user_read field
*         user_write:
*           type: array
*           items:
*             type: string
*           description: user_write field
*
*     Genome_feature:
*       type: object
*       properties:
*         genome_id:
*           type: string
*           description: genome_id field
*         genome_name:
*           type: string
*           description: genome_name field
*         taxon_id:
*           type: integer
*           description: taxon_id field
*         sequence_id:
*           type: string
*           description: sequence_id field
*         accession:
*           type: string
*           description: accession field
*         annotation:
*           type: string
*           description: annotation field
*         feature_type:
*           type: string
*           description: feature_type field
*         feature_id:
*           type: string
*           description: feature_id field
*         p2_feature_id:
*           type: integer
*           description: p2_feature_id field
*         alt_locus_tag:
*           type: string
*           description: alt_locus_tag field
*         patric_id:
*           type: string
*           description: patric_id field
*         brc_id:
*           type: string
*           description: brc_id field
*         refseq_locus_tag:
*           type: string
*           description: refseq_locus_tag field
*         protein_id:
*           type: string
*           description: protein_id field
*         gene_id:
*           type: integer
*           description: gene_id field
*         uniprotkb_accession:
*           type: string
*           description: uniprotkb_accession field
*         pdb_accession:
*           type: array
*           items:
*             type: string
*           description: pdb_accession field
*         start:
*           type: integer
*           description: start field
*         end:
*           type: integer
*           description: end field
*         strand:
*           type: string
*           description: strand field
*         location:
*           type: string
*           description: location field
*         segments:
*           type: array
*           items:
*             type: string
*           description: segments field
*         codon_start:
*           type: integer
*           description: codon_start field
*         na_length:
*           type: integer
*           description: na_length field
*         aa_length:
*           type: integer
*           description: aa_length field
*         na_sequence_md5:
*           type: string
*           description: na_sequence_md5 field
*         aa_sequence_md5:
*           type: string
*           description: aa_sequence_md5 field
*         gene:
*           type: string
*           description: gene field
*         product:
*           type: string
*           description: product field
*         figfam_id:
*           type: string
*           description: figfam_id field
*         plfam_id:
*           type: string
*           description: plfam_id field
*         pgfam_id:
*           type: string
*           description: pgfam_id field
*         sog_id:
*           type: string
*           description: sog_id field
*         og_id:
*           type: string
*           description: og_id field
*         go:
*           type: array
*           items:
*             type: string
*           description: go field
*         property:
*           type: array
*           items:
*             type: string
*           description: property field
*         notes:
*           type: array
*           items:
*             type: string
*           description: notes field
*         classifier_score:
*           type: number
*           description: classifier_score field
*         classifier_round:
*           type: integer
*           description: classifier_round field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*         public:
*           type: boolean
*           description: public field
*         owner:
*           type: string
*           description: owner field
*         user_read:
*           type: array
*           items:
*             type: string
*           description: user_read field
*         user_write:
*           type: array
*           items:
*             type: string
*           description: user_write field
*
*     Genome_sequence:
*       type: object
*       properties:
*         genome_id:
*           type: string
*           description: genome_id field
*         genome_name:
*           type: string
*           description: genome_name field
*         taxon_id:
*           type: integer
*           description: taxon_id field
*         sequence_id:
*           type: string
*           description: sequence_id field
*         p2_sequence_id:
*           type: integer
*           description: p2_sequence_id field
*         accession:
*           type: string
*           description: accession field
*         gi:
*           type: integer
*           description: gi field
*         sequence_type:
*           type: string
*           description: sequence_type field
*         sequence_status:
*           type: string
*           description: sequence_status field
*         mol_type:
*           type: string
*           description: mol_type field
*         topology:
*           type: string
*           description: topology field
*         description:
*           type: string
*           description: description field
*         chromosome:
*           type: string
*           description: chromosome field
*         plasmid:
*           type: string
*           description: plasmid field
*         segment:
*           type: string
*           description: segment field
*         gc_content:
*           type: number
*           description: gc_content field
*         length:
*           type: integer
*           description: length field
*         sequence_md5:
*           type: string
*           description: sequence_md5 field
*         sequence:
*           type: string
*           description: sequence field
*         release_date:
*           type: string
*           description: release_date field
*         version:
*           type: integer
*           description: version field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*         public:
*           type: boolean
*           description: public field
*         owner:
*           type: string
*           description: owner field
*         user_read:
*           type: array
*           items:
*             type: string
*           description: user_read field
*         user_write:
*           type: array
*           items:
*             type: string
*           description: user_write field
*
*     Id_ref:
*       type: object
*       properties:
*         id:
*           type: string
*           description: id field
*         uniprotkb_accession:
*           type: string
*           description: uniprotkb_accession field
*         id_type:
*           type: string
*           description: id_type field
*         id_value:
*           type: string
*           description: id_value field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*
*     Misc_niaid_sgc:
*       type: object
*       properties:
*         target_id:
*           type: string
*           description: target_id field
*         target_status:
*           type: string
*           description: target_status field
*         selection_criteria:
*           type: string
*           description: selection_criteria field
*         genus:
*           type: string
*           description: genus field
*         species:
*           type: string
*           description: species field
*         strain:
*           type: string
*           description: strain field
*         has_clones:
*           type: string
*           description: has_clones field
*         has_proteins:
*           type: string
*           description: has_proteins field
*         gene_symbol_collection:
*           type: array
*           items:
*             type: string
*           description: gene_symbol_collection field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*
*     Pathway:
*       type: object
*       properties:
*         id:
*           type: string
*           description: id field
*         genome_id:
*           type: string
*           description: genome_id field
*         genome_name:
*           type: string
*           description: genome_name field
*         taxon_id:
*           type: integer
*           description: taxon_id field
*         sequence_id:
*           type: string
*           description: sequence_id field
*         accession:
*           type: string
*           description: accession field
*         annotation:
*           type: string
*           description: annotation field
*         feature_id:
*           type: string
*           description: feature_id field
*         alt_locus_tag:
*           type: string
*           description: alt_locus_tag field
*         refseq_locus_tag:
*           type: string
*           description: refseq_locus_tag field
*         patric_id:
*           type: string
*           description: patric_id field
*         gene:
*           type: string
*           description: gene field
*         product:
*           type: string
*           description: product field
*         ec_number:
*           type: string
*           description: ec_number field
*         ec_description:
*           type: string
*           description: ec_description field
*         pathway_id:
*           type: string
*           description: pathway_id field
*         pathway_name:
*           type: string
*           description: pathway_name field
*         pathway_class:
*           type: string
*           description: pathway_class field
*         genome_ec:
*           type: string
*           description: genome_ec field
*         pathway_ec:
*           type: string
*           description: pathway_ec field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*         public:
*           type: boolean
*           description: public field
*         owner:
*           type: string
*           description: owner field
*         user_read:
*           type: array
*           items:
*             type: string
*           description: user_read field
*         user_write:
*           type: array
*           items:
*             type: string
*           description: user_write field
*
*     Pathway_ref:
*       type: object
*       properties:
*         id:
*           type: string
*           description: id field
*         pathway_id:
*           type: string
*           description: pathway_id field
*         pathway_name:
*           type: string
*           description: pathway_name field
*         pathway_class:
*           type: string
*           description: pathway_class field
*         ec_number:
*           type: string
*           description: ec_number field
*         ec_description:
*           type: string
*           description: ec_description field
*         map_type:
*           type: string
*           description: map_type field
*         map_name:
*           type: string
*           description: map_name field
*         map_location:
*           type: array
*           items:
*             type: string
*           description: map_location field
*         occurrence:
*           type: integer
*           description: occurrence field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*
*     Ppi:
*       type: object
*       properties:
*         id:
*           type: string
*           description: id field
*         interactor_a:
*           type: string
*           description: interactor_a field
*         interactor_type_a:
*           type: string
*           description: interactor_type_a field
*         interactor_desc_a:
*           type: string
*           description: interactor_desc_a field
*         domain_a:
*           type: string
*           description: domain_a field
*         taxon_id_a:
*           type: integer
*           description: taxon_id_a field
*         genome_id_a:
*           type: string
*           description: genome_id_a field
*         genome_name_a:
*           type: string
*           description: genome_name_a field
*         feature_id_a:
*           type: string
*           description: feature_id_a field
*         refseq_locus_tag_a:
*           type: string
*           description: refseq_locus_tag_a field
*         gene_a:
*           type: string
*           description: gene_a field
*         interactor_b:
*           type: string
*           description: interactor_b field
*         interactor_type_b:
*           type: string
*           description: interactor_type_b field
*         interactor_desc_b:
*           type: string
*           description: interactor_desc_b field
*         domain_b:
*           type: string
*           description: domain_b field
*         taxon_id_b:
*           type: integer
*           description: taxon_id_b field
*         genome_id_b:
*           type: string
*           description: genome_id_b field
*         genome_name_b:
*           type: string
*           description: genome_name_b field
*         feature_id_b:
*           type: string
*           description: feature_id_b field
*         refseq_locus_tag_b:
*           type: string
*           description: refseq_locus_tag_b field
*         gene_b:
*           type: string
*           description: gene_b field
*         category:
*           type: string
*           description: category field
*         interaction_type:
*           type: array
*           items:
*             type: string
*           description: interaction_type field
*         detection_method:
*           type: array
*           items:
*             type: string
*           description: detection_method field
*         evidence:
*           type: array
*           items:
*             type: string
*           description: evidence field
*         pmid:
*           type: array
*           items:
*             type: string
*           description: pmid field
*         source_db:
*           type: array
*           items:
*             type: string
*           description: source_db field
*         source_id:
*           type: array
*           items:
*             type: string
*           description: source_id field
*         score:
*           type: array
*           items:
*             type: string
*           description: score field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*
*     Protein_family_ref:
*       type: object
*       properties:
*         family_id:
*           type: string
*           description: family_id field
*         family_type:
*           type: string
*           description: family_type field
*         family_product:
*           type: string
*           description: family_product field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*
*     Protein_feature:
*       type: object
*       properties:
*         id:
*           type: string
*           description: id field
*         genome_id:
*           type: string
*           description: genome_id field
*         genome_name:
*           type: string
*           description: genome_name field
*         taxon_id:
*           type: integer
*           description: taxon_id field
*         feature_id:
*           type: string
*           description: feature_id field
*         patric_id:
*           type: string
*           description: patric_id field
*         refseq_locus_tag:
*           type: string
*           description: refseq_locus_tag field
*         aa_sequence_md5:
*           type: string
*           description: aa_sequence_md5 field
*         gene:
*           type: string
*           description: gene field
*         product:
*           type: string
*           description: product field
*         interpro_id:
*           type: string
*           description: interpro_id field
*         interpro_description:
*           type: string
*           description: interpro_description field
*         feature_type:
*           type: string
*           description: feature_type field
*         source:
*           type: string
*           description: source field
*         source_id:
*           type: string
*           description: source_id field
*         description:
*           type: string
*           description: description field
*         classification:
*           type: array
*           items:
*             type: string
*           description: classification field
*         score:
*           type: number
*           description: score field
*         e_value:
*           type: string
*           description: e_value field
*         evidence:
*           type: string
*           description: evidence field
*         publication:
*           type: array
*           items:
*             type: string
*           description: publication field
*         start:
*           type: integer
*           description: start field
*         end:
*           type: integer
*           description: end field
*         segments:
*           type: array
*           items:
*             type: string
*           description: segments field
*         length:
*           type: integer
*           description: length field
*         sequence:
*           type: string
*           description: sequence field
*         comments:
*           type: array
*           items:
*             type: string
*           description: comments field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*
*     Protein_structure:
*       type: object
*       properties:
*         pdb_id:
*           type: string
*           description: pdb_id field
*         title:
*           type: string
*           description: title field
*         organism_name:
*           type: array
*           items:
*             type: string
*           description: organism_name field
*         taxon_id:
*           type: array
*           items:
*             type: integer
*           description: taxon_id field
*         taxon_lineage_ids:
*           type: array
*           items:
*             type: string
*           description: taxon_lineage_ids field
*         taxon_lineage_names:
*           type: array
*           items:
*             type: string
*           description: taxon_lineage_names field
*         genome_id:
*           type: string
*           description: genome_id field
*         feature_id:
*           type: string
*           description: feature_id field
*         patric_id:
*           type: string
*           description: patric_id field
*         uniprotkb_accession:
*           type: array
*           items:
*             type: string
*           description: uniprotkb_accession field
*         gene:
*           type: array
*           items:
*             type: string
*           description: gene field
*         product:
*           type: array
*           items:
*             type: string
*           description: product field
*         sequence_md5:
*           type: array
*           items:
*             type: string
*           description: sequence_md5 field
*         sequence:
*           type: array
*           items:
*             type: string
*           description: sequence field
*         alignments:
*           type: array
*           items:
*             type: string
*           description: alignments field
*         method:
*           type: array
*           items:
*             type: string
*           description: method field
*         resolution:
*           type: string
*           description: resolution field
*         pmid:
*           type: array
*           items:
*             type: string
*           description: pmid field
*         institution:
*           type: string
*           description: institution field
*         authors:
*           type: array
*           items:
*             type: string
*           description: authors field
*         release_date:
*           type: string
*           description: release_date field
*         file_path:
*           type: string
*           description: file_path field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*
*     Sequence_feature:
*       type: object
*       properties:
*         id:
*           type: string
*           description: id field
*         genome_id:
*           type: string
*           description: genome_id field
*         genome_name:
*           type: string
*           description: genome_name field
*         taxon_id:
*           type: integer
*           description: taxon_id field
*         genbank_accession:
*           type: string
*           description: genbank_accession field
*         subtype:
*           type: string
*           description: subtype field
*         segment:
*           type: string
*           description: segment field
*         feature_id:
*           type: string
*           description: feature_id field
*         patric_id:
*           type: string
*           description: patric_id field
*         refseq_locus_tag:
*           type: string
*           description: refseq_locus_tag field
*         aa_sequence_md5:
*           type: string
*           description: aa_sequence_md5 field
*         gene:
*           type: string
*           description: gene field
*         product:
*           type: string
*           description: product field
*         sf_id:
*           type: string
*           description: sf_id field
*         sf_name:
*           type: string
*           description: sf_name field
*         sf_category:
*           type: string
*           description: sf_category field
*         source:
*           type: string
*           description: source field
*         source_id:
*           type: string
*           description: source_id field
*         source_accession:
*           type: array
*           items:
*             type: string
*           description: source_accession field
*         source_strain:
*           type: string
*           description: source_strain field
*         source_aa_sequence:
*           type: string
*           description: source_aa_sequence field
*         source_sf_location:
*           type: string
*           description: source_sf_location field
*         evidence_code:
*           type: string
*           description: evidence_code field
*         publication:
*           type: array
*           items:
*             type: string
*           description: publication field
*         start:
*           type: integer
*           description: start field
*         end:
*           type: integer
*           description: end field
*         segments:
*           type: array
*           items:
*             type: string
*           description: segments field
*         length:
*           type: integer
*           description: length field
*         sf_sequence:
*           type: string
*           description: sf_sequence field
*         sf_sequence_md5:
*           type: string
*           description: sf_sequence_md5 field
*         aa_variant:
*           type: string
*           description: aa_variant field
*         variant_types:
*           type: string
*           description: variant_types field
*         additional_metadata:
*           type: array
*           items:
*             type: string
*           description: additional_metadata field
*         comments:
*           type: array
*           items:
*             type: string
*           description: comments field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*
*     Sequence_feature_vt:
*       type: object
*       properties:
*         id:
*           type: string
*           description: id field
*         sf_id:
*           type: string
*           description: sf_id field
*         sf_name:
*           type: string
*           description: sf_name field
*         sf_category:
*           type: string
*           description: sf_category field
*         sfvt_id:
*           type: string
*           description: sfvt_id field
*         sfvt_genome_count:
*           type: string
*           description: sfvt_genome_count field
*         sfvt_genome_ids:
*           type: array
*           items:
*             type: string
*           description: sfvt_genome_ids field
*         sf_sequence:
*           type: string
*           description: sf_sequence field
*         sf_sequence_md5:
*           type: string
*           description: sf_sequence_md5 field
*         sfvt_sequence:
*           type: string
*           description: sfvt_sequence field
*         sfvt_sequence_md5:
*           type: string
*           description: sfvt_sequence_md5 field
*         sfvt_variations:
*           type: string
*           description: sfvt_variations field
*         additional_metadata:
*           type: array
*           items:
*             type: string
*           description: additional_metadata field
*         comments:
*           type: array
*           items:
*             type: string
*           description: comments field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*
*     Serology:
*       type: object
*       properties:
*         id:
*           type: string
*           description: id field
*         taxon_lineage_ids:
*           type: array
*           items:
*             type: string
*           description: taxon_lineage_ids field
*         project_identifier:
*           type: string
*           description: project_identifier field
*         contributing_institution:
*           type: string
*           description: contributing_institution field
*         sample_identifier:
*           type: string
*           description: sample_identifier field
*         sample_accession:
*           type: string
*           description: sample_accession field
*         host_identifier:
*           type: string
*           description: host_identifier field
*         host_type:
*           type: array
*           items:
*             type: string
*           description: host_type field
*         host_species:
*           type: string
*           description: host_species field
*         host_common_name:
*           type: string
*           description: host_common_name field
*         host_sex:
*           type: string
*           description: host_sex field
*         host_age:
*           type: string
*           description: host_age field
*         host_age_group:
*           type: string
*           description: host_age_group field
*         host_health:
*           type: string
*           description: host_health field
*         collection_country:
*           type: string
*           description: collection_country field
*         collection_state:
*           type: string
*           description: collection_state field
*         collection_city:
*           type: string
*           description: collection_city field
*         collection_date:
*           type: string
*           description: collection_date field
*         collection_year:
*           type: string
*           description: collection_year field
*         geographic_group:
*           type: string
*           description: geographic_group field
*         test_type:
*           type: string
*           description: test_type field
*         test_antigen:
*           type: string
*           description: test_antigen field
*         test_result:
*           type: string
*           description: test_result field
*         test_interpretation:
*           type: string
*           description: test_interpretation field
*         positive_definition:
*           type: string
*           description: positive_definition field
*         test_pathogen:
*           type: string
*           description: test_pathogen field
*         strain:
*           type: string
*           description: strain field
*         serotype:
*           type: array
*           items:
*             type: string
*           description: serotype field
*         virus_identifier:
*           type: string
*           description: virus_identifier field
*         genbank_accession:
*           type: array
*           items:
*             type: string
*           description: genbank_accession field
*         additional_metadata:
*           type: array
*           items:
*             type: string
*           description: additional_metadata field
*         comments:
*           type: array
*           items:
*             type: string
*           description: comments field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*
*     Sp_gene:
*       type: object
*       properties:
*         id:
*           type: string
*           description: id field
*         genome_id:
*           type: string
*           description: genome_id field
*         genome_name:
*           type: string
*           description: genome_name field
*         taxon_id:
*           type: integer
*           description: taxon_id field
*         feature_id:
*           type: string
*           description: feature_id field
*         alt_locus_tag:
*           type: string
*           description: alt_locus_tag field
*         refseq_locus_tag:
*           type: string
*           description: refseq_locus_tag field
*         patric_id:
*           type: string
*           description: patric_id field
*         gene:
*           type: string
*           description: gene field
*         product:
*           type: string
*           description: product field
*         property:
*           type: string
*           description: property field
*         source:
*           type: string
*           description: source field
*         property_source:
*           type: string
*           description: property_source field
*         source_id:
*           type: string
*           description: source_id field
*         organism:
*           type: string
*           description: organism field
*         function:
*           type: string
*           description: function field
*         classification:
*           type: array
*           items:
*             type: string
*           description: classification field
*         antibiotics_class:
*           type: string
*           description: antibiotics_class field
*         antibiotics:
*           type: array
*           items:
*             type: string
*           description: antibiotics field
*         pmid:
*           type: array
*           items:
*             type: string
*           description: pmid field
*         assertion:
*           type: string
*           description: assertion field
*         query_coverage:
*           type: integer
*           description: query_coverage field
*         subject_coverage:
*           type: integer
*           description: subject_coverage field
*         identity:
*           type: integer
*           description: identity field
*         e_value:
*           type: string
*           description: e_value field
*         same_species:
*           type: integer
*           description: same_species field
*         same_genus:
*           type: integer
*           description: same_genus field
*         same_genome:
*           type: integer
*           description: same_genome field
*         evidence:
*           type: string
*           description: evidence field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*         public:
*           type: boolean
*           description: public field
*         owner:
*           type: string
*           description: owner field
*         user_read:
*           type: array
*           items:
*             type: string
*           description: user_read field
*         user_write:
*           type: array
*           items:
*             type: string
*           description: user_write field
*
*     Sp_gene_evidence:
*       type: object
*       properties:
*         id:
*           type: string
*           description: id field
*         property:
*           type: string
*           description: property field
*         source:
*           type: string
*           description: source field
*         source_id:
*           type: string
*           description: source_id field
*         pmid:
*           type: string
*           description: pmid field
*         assertion:
*           type: string
*           description: assertion field
*         classification:
*           type: string
*           description: classification field
*         specific_organism:
*           type: string
*           description: specific_organism field
*         specific_host:
*           type: string
*           description: specific_host field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*
*     Sp_gene_ref:
*       type: object
*       properties:
*         id:
*           type: string
*           description: id field
*         property:
*           type: string
*           description: property field
*         source:
*           type: string
*           description: source field
*         source_id:
*           type: string
*           description: source_id field
*         gene_name:
*           type: string
*           description: gene_name field
*         locus_tag:
*           type: string
*           description: locus_tag field
*         gene_id:
*           type: string
*           description: gene_id field
*         gi:
*           type: string
*           description: gi field
*         genus:
*           type: string
*           description: genus field
*         species:
*           type: string
*           description: species field
*         organism:
*           type: string
*           description: organism field
*         product:
*           type: string
*           description: product field
*         function:
*           type: string
*           description: function field
*         classification:
*           type: array
*           items:
*             type: string
*           description: classification field
*         antibiotics_class:
*           type: string
*           description: antibiotics_class field
*         antibiotics:
*           type: array
*           items:
*             type: string
*           description: antibiotics field
*         pmid:
*           type: array
*           items:
*             type: string
*           description: pmid field
*         assertion:
*           type: string
*           description: assertion field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*
*     Spike_lineage:
*       type: object
*       properties:
*         id:
*           type: string
*           description: id field
*         country:
*           type: string
*           description: country field
*         region:
*           type: string
*           description: region field
*         month:
*           type: string
*           description: month field
*         total_isolates:
*           type: integer
*           description: total_isolates field
*         lineage_count:
*           type: integer
*           description: lineage_count field
*         prevalence:
*           type: number
*           description: prevalence field
*         growth_rate:
*           type: number
*           description: growth_rate field
*         lineage:
*           type: string
*           description: lineage field
*         sequence_features:
*           type: array
*           items:
*             type: string
*           description: sequence_features field
*         lineage_of_concern:
*           type: string
*           description: lineage_of_concern field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*
*     Spike_variant:
*       type: object
*       properties:
*         id:
*           type: string
*           description: id field
*         country:
*           type: string
*           description: country field
*         region:
*           type: string
*           description: region field
*         month:
*           type: string
*           description: month field
*         total_isolates:
*           type: integer
*           description: total_isolates field
*         lineage_count:
*           type: integer
*           description: lineage_count field
*         prevalence:
*           type: number
*           description: prevalence field
*         growth_rate:
*           type: number
*           description: growth_rate field
*         aa_variant:
*           type: string
*           description: aa_variant field
*         sequence_features:
*           type: array
*           items:
*             type: string
*           description: sequence_features field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*
*     Strain:
*       type: object
*       properties:
*         id:
*           type: string
*           description: id field
*         taxon_id:
*           type: integer
*           description: taxon_id field
*         taxon_lineage_ids:
*           type: array
*           items:
*             type: string
*           description: taxon_lineage_ids field
*         taxon_lineage_names:
*           type: array
*           items:
*             type: string
*           description: taxon_lineage_names field
*         family:
*           type: string
*           description: family field
*         genus:
*           type: string
*           description: genus field
*         species:
*           type: string
*           description: species field
*         strain:
*           type: string
*           description: strain field
*         subtype:
*           type: string
*           description: subtype field
*         h_type:
*           type: integer
*           description: h_type field
*         n_type:
*           type: integer
*           description: n_type field
*         genome_ids:
*           type: array
*           items:
*             type: string
*           description: genome_ids field
*         genbank_accessions:
*           type: array
*           items:
*             type: string
*           description: genbank_accessions field
*         segment_count:
*           type: integer
*           description: segment_count field
*         status:
*           type: string
*           description: status field
*         host_group:
*           type: string
*           description: host_group field
*         host_common_name:
*           type: string
*           description: host_common_name field
*         host_name:
*           type: string
*           description: host_name field
*         lab_host:
*           type: string
*           description: lab_host field
*         passage:
*           type: string
*           description: passage field
*         geographic_group:
*           type: string
*           description: geographic_group field
*         isolation_country:
*           type: string
*           description: isolation_country field
*         collection_year:
*           type: integer
*           description: collection_year field
*         collection_date:
*           type: string
*           description: collection_date field
*         season:
*           type: string
*           description: season field
*         1_pb2:
*           type: array
*           items:
*             type: string
*           description: 1_pb2 field
*         2_pb1:
*           type: array
*           items:
*             type: string
*           description: 2_pb1 field
*         3_pa:
*           type: array
*           items:
*             type: string
*           description: 3_pa field
*         4_ha:
*           type: array
*           items:
*             type: string
*           description: 4_ha field
*         5_np:
*           type: array
*           items:
*             type: string
*           description: 5_np field
*         6_na:
*           type: array
*           items:
*             type: string
*           description: 6_na field
*         7_mp:
*           type: array
*           items:
*             type: string
*           description: 7_mp field
*         8_ns:
*           type: array
*           items:
*             type: string
*           description: 8_ns field
*         s:
*           type: array
*           items:
*             type: string
*           description: s field
*         m:
*           type: array
*           items:
*             type: string
*           description: m field
*         l:
*           type: array
*           items:
*             type: string
*           description: l field
*         other_segments:
*           type: array
*           items:
*             type: string
*           description: other_segments field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*         public:
*           type: boolean
*           description: public field
*         owner:
*           type: string
*           description: owner field
*         user_read:
*           type: array
*           items:
*             type: string
*           description: user_read field
*         user_write:
*           type: array
*           items:
*             type: string
*           description: user_write field
*
*     Structured_assertion:
*       type: object
*       properties:
*         id:
*           type: string
*           description: id field
*         feature_id:
*           type: string
*           description: feature_id field
*         patric_id:
*           type: string
*           description: patric_id field
*         refseq_locus_tag:
*           type: string
*           description: refseq_locus_tag field
*         source:
*           type: string
*           description: source field
*         property:
*           type: string
*           description: property field
*         value:
*           type: string
*           description: value field
*         comment:
*           type: string
*           description: comment field
*         pmid:
*           type: string
*           description: pmid field
*         evidence_code:
*           type: string
*           description: evidence_code field
*         score:
*           type: string
*           description: score field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*         public:
*           type: boolean
*           description: public field
*         owner:
*           type: string
*           description: owner field
*         user_read:
*           type: array
*           items:
*             type: string
*           description: user_read field
*         user_write:
*           type: array
*           items:
*             type: string
*           description: user_write field
*
*     Subsystem:
*       type: object
*       properties:
*         id:
*           type: string
*           description: id field
*         genome_id:
*           type: string
*           description: genome_id field
*         genome_name:
*           type: string
*           description: genome_name field
*         taxon_id:
*           type: integer
*           description: taxon_id field
*         feature_id:
*           type: string
*           description: feature_id field
*         refseq_locus_tag:
*           type: string
*           description: refseq_locus_tag field
*         patric_id:
*           type: string
*           description: patric_id field
*         gene:
*           type: string
*           description: gene field
*         product:
*           type: string
*           description: product field
*         role_id:
*           type: string
*           description: role_id field
*         role_name:
*           type: string
*           description: role_name field
*         subsystem_id:
*           type: string
*           description: subsystem_id field
*         subsystem_name:
*           type: string
*           description: subsystem_name field
*         superclass:
*           type: string
*           description: superclass field
*         class:
*           type: string
*           description: class field
*         subclass:
*           type: string
*           description: subclass field
*         active:
*           type: string
*           description: active field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*         public:
*           type: boolean
*           description: public field
*         owner:
*           type: string
*           description: owner field
*         user_read:
*           type: array
*           items:
*             type: string
*           description: user_read field
*         user_write:
*           type: array
*           items:
*             type: string
*           description: user_write field
*
*     Subsystem_ref:
*       type: object
*       properties:
*         id:
*           type: string
*           description: id field
*         subsystem_id:
*           type: string
*           description: subsystem_id field
*         subsystem_name:
*           type: string
*           description: subsystem_name field
*         superclass:
*           type: string
*           description: superclass field
*         class:
*           type: string
*           description: class field
*         subclass:
*           type: string
*           description: subclass field
*         description:
*           type: string
*           description: description field
*         pmid:
*           type: array
*           items:
*             type: string
*           description: pmid field
*         role_id:
*           type: array
*           items:
*             type: string
*           description: role_id field
*         role_name:
*           type: array
*           items:
*             type: string
*           description: role_name field
*         notes:
*           type: array
*           items:
*             type: string
*           description: notes field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*
*     Surveillance:
*       type: object
*       properties:
*         id:
*           type: string
*           description: id field
*         taxon_lineage_ids:
*           type: array
*           items:
*             type: string
*           description: taxon_lineage_ids field
*         project_identifier:
*           type: string
*           description: project_identifier field
*         contributing_institution:
*           type: string
*           description: contributing_institution field
*         sample_identifier:
*           type: string
*           description: sample_identifier field
*         sample_accession:
*           type: string
*           description: sample_accession field
*         sample_material:
*           type: string
*           description: sample_material field
*         sample_transport_medium:
*           type: string
*           description: sample_transport_medium field
*         sample_receipt_date:
*           type: string
*           description: sample_receipt_date field
*         submission_date:
*           type: string
*           description: submission_date field
*         last_update_date:
*           type: string
*           description: last_update_date field
*         longitudinal_study:
*           type: string
*           description: longitudinal_study field
*         embargo_end_date:
*           type: string
*           description: embargo_end_date field
*         collector_name:
*           type: array
*           items:
*             type: string
*           description: collector_name field
*         collector_institution:
*           type: string
*           description: collector_institution field
*         contact_email_address:
*           type: string
*           description: contact_email_address field
*         collection_date:
*           type: string
*           description: collection_date field
*         collection_year:
*           type: string
*           description: collection_year field
*         collection_season:
*           type: string
*           description: collection_season field
*         days_elapsed_to_sample_collection:
*           type: string
*           description: days_elapsed_to_sample_collection field
*         collection_country:
*           type: string
*           description: collection_country field
*         collection_state_province:
*           type: string
*           description: collection_state_province field
*         collection_city:
*           type: string
*           description: collection_city field
*         collection_poi:
*           type: string
*           description: collection_poi field
*         collection_latitude:
*           type: number
*           description: collection_latitude field
*         collection_longitude:
*           type: number
*           description: collection_longitude field
*         geographic_group:
*           type: string
*           description: geographic_group field
*         pathogen_test_type:
*           type: array
*           items:
*             type: string
*           description: pathogen_test_type field
*         pathogen_test_result:
*           type: array
*           items:
*             type: string
*           description: pathogen_test_result field
*         pathogen_test_interpretation:
*           type: array
*           items:
*             type: string
*           description: pathogen_test_interpretation field
*         species:
*           type: string
*           description: species field
*         pathogen_type:
*           type: string
*           description: pathogen_type field
*         subtype:
*           type: string
*           description: subtype field
*         strain:
*           type: string
*           description: strain field
*         sequence_accession:
*           type: array
*           items:
*             type: string
*           description: sequence_accession field
*         genome_id:
*           type: array
*           items:
*             type: string
*           description: genome_id field
*         host_identifier:
*           type: string
*           description: host_identifier field
*         host_id_type:
*           type: string
*           description: host_id_type field
*         host_species:
*           type: string
*           description: host_species field
*         host_common_name:
*           type: string
*           description: host_common_name field
*         host_group:
*           type: string
*           description: host_group field
*         host_sex:
*           type: string
*           description: host_sex field
*         host_age:
*           type: string
*           description: host_age field
*         host_race:
*           type: array
*           items:
*             type: string
*           description: host_race field
*         host_ethnicity:
*           type: array
*           items:
*             type: string
*           description: host_ethnicity field
*         host_height:
*           type: string
*           description: host_height field
*         host_weight:
*           type: string
*           description: host_weight field
*         host_habitat:
*           type: string
*           description: host_habitat field
*         host_natural_state:
*           type: string
*           description: host_natural_state field
*         host_capture_status:
*           type: string
*           description: host_capture_status field
*         host_health:
*           type: string
*           description: host_health field
*         exposure:
*           type: array
*           items:
*             type: string
*           description: exposure field
*         duration_of_exposure:
*           type: array
*           items:
*             type: string
*           description: duration_of_exposure field
*         exposure_type:
*           type: array
*           items:
*             type: string
*           description: exposure_type field
*         use_of_personal_protective_equipment:
*           type: array
*           items:
*             type: string
*           description: use_of_personal_protective_equipment field
*         primary_living_situation:
*           type: string
*           description: primary_living_situation field
*         nursing_home_residence:
*           type: string
*           description: nursing_home_residence field
*         daycare_attendance:
*           type: string
*           description: daycare_attendance field
*         travel_history:
*           type: array
*           items:
*             type: string
*           description: travel_history field
*         profession:
*           type: string
*           description: profession field
*         education:
*           type: string
*           description: education field
*         pregnancy:
*           type: string
*           description: pregnancy field
*         trimester_of_pregnancy:
*           type: string
*           description: trimester_of_pregnancy field
*         breastfeeding:
*           type: string
*           description: breastfeeding field
*         hospitalized:
*           type: string
*           description: hospitalized field
*         hospitalization_duration:
*           type: string
*           description: hospitalization_duration field
*         intensive_care_unit:
*           type: string
*           description: intensive_care_unit field
*         chest_imaging_interpretation:
*           type: string
*           description: chest_imaging_interpretation field
*         ventilation:
*           type: string
*           description: ventilation field
*         oxygen_saturation:
*           type: string
*           description: oxygen_saturation field
*         ecmo:
*           type: string
*           description: ecmo field
*         dialysis:
*           type: string
*           description: dialysis field
*         disease_status:
*           type: string
*           description: disease_status field
*         days_elapsed_to_disease_status:
*           type: string
*           description: days_elapsed_to_disease_status field
*         disease_severity:
*           type: string
*           description: disease_severity field
*         alcohol_or_other_drug_dependence:
*           type: string
*           description: alcohol_or_other_drug_dependence field
*         tobacco_use:
*           type: string
*           description: tobacco_use field
*         packs_per_day_for_how_many_years:
*           type: string
*           description: packs_per_day_for_how_many_years field
*         chronic_conditions:
*           type: array
*           items:
*             type: string
*           description: chronic_conditions field
*         maintenance_medication:
*           type: array
*           items:
*             type: string
*           description: maintenance_medication field
*         types_of_allergies:
*           type: array
*           items:
*             type: string
*           description: types_of_allergies field
*         influenza_like_illness_over_the_past_year:
*           type: string
*           description: influenza_like_illness_over_the_past_year field
*         infections_within_five_years:
*           type: array
*           items:
*             type: string
*           description: infections_within_five_years field
*         human_leukocyte_antigens:
*           type: string
*           description: human_leukocyte_antigens field
*         symptoms:
*           type: array
*           items:
*             type: string
*           description: symptoms field
*         onset_hours:
*           type: string
*           description: onset_hours field
*         sudden_onset:
*           type: string
*           description: sudden_onset field
*         diagnosis:
*           type: array
*           items:
*             type: string
*           description: diagnosis field
*         pre_visit_medications:
*           type: array
*           items:
*             type: string
*           description: pre_visit_medications field
*         post_visit_medications:
*           type: array
*           items:
*             type: string
*           description: post_visit_medications field
*         treatment:
*           type: array
*           items:
*             type: string
*           description: treatment field
*         initiation_of_treatment:
*           type: array
*           items:
*             type: string
*           description: initiation_of_treatment field
*         duration_of_treatment:
*           type: array
*           items:
*             type: string
*           description: duration_of_treatment field
*         treatment_dosage:
*           type: array
*           items:
*             type: string
*           description: treatment_dosage field
*         treatment_type:
*           type: array
*           items:
*             type: string
*           description: treatment_type field
*         vaccination_type:
*           type: string
*           description: vaccination_type field
*         days_elapsed_to_vaccination:
*           type: array
*           items:
*             type: string
*           description: days_elapsed_to_vaccination field
*         source_of_vaccine_information:
*           type: array
*           items:
*             type: string
*           description: source_of_vaccine_information field
*         vaccine_lot_number:
*           type: array
*           items:
*             type: string
*           description: vaccine_lot_number field
*         vaccine_manufacturer:
*           type: array
*           items:
*             type: string
*           description: vaccine_manufacturer field
*         vaccine_dosage:
*           type: array
*           items:
*             type: string
*           description: vaccine_dosage field
*         other_vaccinations:
*           type: string
*           description: other_vaccinations field
*         comments:
*           type: array
*           items:
*             type: string
*           description: comments field
*         additional_metadata:
*           type: array
*           items:
*             type: string
*           description: additional_metadata field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*
*     Taxonomy:
*       type: object
*       properties:
*         taxon_id:
*           type: string
*           description: taxon_id field
*         taxon_id_i:
*           type: integer
*           description: taxon_id_i field
*         taxon_name:
*           type: string
*           description: taxon_name field
*         taxon_rank:
*           type: string
*           description: taxon_rank field
*         other_names:
*           type: array
*           items:
*             type: string
*           description: other_names field
*         genetic_code:
*           type: integer
*           description: genetic_code field
*         lineage:
*           type: string
*           description: lineage field
*         lineage_ids:
*           type: array
*           items:
*             type: integer
*           description: lineage_ids field
*         lineage_names:
*           type: array
*           items:
*             type: string
*           description: lineage_names field
*         lineage_ranks:
*           type: array
*           items:
*             type: string
*           description: lineage_ranks field
*         parent_id:
*           type: integer
*           description: parent_id field
*         division:
*           type: string
*           description: division field
*         description:
*           type: string
*           description: description field
*         genomes:
*           type: integer
*           description: genomes field
*         genomes_f:
*           type: string
*           description: genomes_f field
*         genome_count:
*           type: integer
*           description: genome_count field
*         genome_length_mean:
*           type: number
*           description: genome_length_mean field
*         genome_length_sd:
*           type: number
*           description: genome_length_sd field
*         cds_mean:
*           type: number
*           description: cds_mean field
*         cds_sd:
*           type: number
*           description: cds_sd field
*         hypothetical_cds_ratio_mean:
*           type: number
*           description: hypothetical_cds_ratio_mean field
*         hypothetical_cds_ratio_sd:
*           type: number
*           description: hypothetical_cds_ratio_sd field
*         plfam_cds_ratio_mean:
*           type: number
*           description: plfam_cds_ratio_mean field
*         plfam_cds_ratio_sd:
*           type: number
*           description: plfam_cds_ratio_sd field
*         core_families:
*           type: integer
*           description: core_families field
*         core_family_ids:
*           type: array
*           items:
*             type: string
*           description: core_family_ids field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*
*     Transcriptomics_experiment:
*       type: object
*       properties:
*         eid:
*           type: string
*           description: eid field
*         eid_i:
*           type: integer
*           description: eid_i field
*         expid:
*           type: integer
*           description: expid field
*         accession:
*           type: string
*           description: accession field
*         institution:
*           type: string
*           description: institution field
*         pi:
*           type: string
*           description: pi field
*         author:
*           type: string
*           description: author field
*         pmid:
*           type: string
*           description: pmid field
*         release_date:
*           type: string
*           description: release_date field
*         title:
*           type: string
*           description: title field
*         description:
*           type: string
*           description: description field
*         organism:
*           type: array
*           items:
*             type: string
*           description: organism field
*         strain:
*           type: array
*           items:
*             type: string
*           description: strain field
*         mutant:
*           type: array
*           items:
*             type: string
*           description: mutant field
*         timeseries:
*           type: string
*           description: timeseries field
*         condition:
*           type: array
*           items:
*             type: string
*           description: condition field
*         samples:
*           type: integer
*           description: samples field
*         platforms:
*           type: integer
*           description: platforms field
*         genes:
*           type: integer
*           description: genes field
*         genome_ids:
*           type: array
*           items:
*             type: string
*           description: genome_ids field
*         additional_metadata:
*           type: array
*           items:
*             type: string
*           description: additional_metadata field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*
*     Transcriptomics_gene:
*       type: object
*       properties:
*         id:
*           type: string
*           description: id field
*         eid:
*           type: integer
*           description: eid field
*         pid:
*           type: integer
*           description: pid field
*         genome_id:
*           type: string
*           description: genome_id field
*         feature_id:
*           type: string
*           description: feature_id field
*         alt_locus_tag:
*           type: string
*           description: alt_locus_tag field
*         refseq_locus_tag:
*           type: string
*           description: refseq_locus_tag field
*         patric_id:
*           type: string
*           description: patric_id field
*         accession:
*           type: string
*           description: accession field
*         expname:
*           type: string
*           description: expname field
*         pmid:
*           type: string
*           description: pmid field
*         organism:
*           type: string
*           description: organism field
*         strain:
*           type: string
*           description: strain field
*         mutant:
*           type: string
*           description: mutant field
*         condition:
*           type: string
*           description: condition field
*         timepoint:
*           type: string
*           description: timepoint field
*         avg_intensity:
*           type: number
*           description: avg_intensity field
*         log_ratio:
*           type: number
*           description: log_ratio field
*         z_score:
*           type: number
*           description: z_score field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*
*     Transcriptomics_sample:
*       type: object
*       properties:
*         eid:
*           type: integer
*           description: eid field
*         expid:
*           type: integer
*           description: expid field
*         accession:
*           type: string
*           description: accession field
*         pid:
*           type: string
*           description: pid field
*         pid_i:
*           type: integer
*           description: pid_i field
*         samples:
*           type: string
*           description: samples field
*         expname:
*           type: string
*           description: expname field
*         channels:
*           type: string
*           description: channels field
*         platform:
*           type: string
*           description: platform field
*         release_date:
*           type: string
*           description: release_date field
*         pmid:
*           type: string
*           description: pmid field
*         organism:
*           type: string
*           description: organism field
*         strain:
*           type: string
*           description: strain field
*         mutant:
*           type: string
*           description: mutant field
*         condition:
*           type: string
*           description: condition field
*         timepoint:
*           type: string
*           description: timepoint field
*         expmean:
*           type: number
*           description: expmean field
*         expstddev:
*           type: number
*           description: expstddev field
*         genes:
*           type: integer
*           description: genes field
*         sig_log_ratio:
*           type: number
*           description: sig_log_ratio field
*         sig_z_score:
*           type: number
*           description: sig_z_score field
*         genome_ids:
*           type: array
*           items:
*             type: string
*           description: genome_ids field
*         additional_metadata:
*           type: array
*           items:
*             type: string
*           description: additional_metadata field
*         text:
*           type: array
*           items:
*             type: string
*           description: text field
*         date_inserted:
*           type: string
*           description: date_inserted field
*         date_modified:
*           type: string
*           description: date_modified field
*
 */
