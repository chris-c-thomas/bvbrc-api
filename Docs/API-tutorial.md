# BV-BRC API Tutorial

This document provides comprehensive examples for using the Bacterial and Viral Bioinformatics Resource Center (BV-BRC) API. You can use `curl` for these examples or any HTTP client software.

## Table of Contents

1. [Authentication](#authentication)
2. [Basic Data Retrieval](#basic-data-retrieval)
   - [REST Style](#rest-style)
   - [RQL Queries](#rql-queries)
   - [Solr Queries](#solr-queries)
3. [Working with Specific Data Types](#working-with-specific-data-types)
   - [Genomes](#genomes)
   - [Genome Features](#genome-features)
   - [Pathways](#pathways)
   - [Taxonomy](#taxonomy)
   - [Specialty Genes](#specialty-genes)
   - [Protein Families](#protein-families)
4. [Advanced Features](#advanced-features)
   - [Faceting](#faceting)
   - [Sorting and Pagination](#sorting-and-pagination)
   - [Field Selection](#field-selection)
   - [Response Format Examples](#response-format-examples)
5. [Common Use Cases](#common-use-cases)
   - [Getting Genome Metadata](#getting-genome-metadata)
   - [Retrieving Genomic Sequences](#retrieving-genomic-sequences)
   - [Searching for Antibiotic Resistance Genes](#searching-for-antibiotic-resistance-genes)
   - [Querying Taxonomy Data](#querying-taxonomy-data)
   - [Cross-collection Queries](#cross-collection-queries)

## Authentication

To access private data or to bypass rate limits, you need to authenticate:

```bash
# Get authentication token
curl -X POST -H 'Content-Type:application/x-www-form-urlencoded' \
  'https://user.bv-brc.org/authenticate' \
  -d 'username=YOUR_USERNAME' -d 'password=YOUR_PASSWORD'
```

This returns a token string:
```
un=user@bvbrc.org|tokenid=1c04a34e-d351-4a79-b24c-123456789abc
```

Use this token in subsequent requests:
```bash
curl -H "Accept: application/json" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -H "Authorization: Bearer un=user@bvbrc.org|tokenid=1c04a34e-d351-4a79-b24c-123456789abc" \
  "https://www.bv-brc.org/api/genome/83332.12"
```

## Basic Data Retrieval

### REST Style

Direct resource access by ID:

```bash
# Get a specific genome by ID
curl -H "Accept: application/json" \
  "https://www.bv-brc.org/api/genome/83332.12"

# Get a specific genomic feature by ID
curl -H "Accept: application/json" \
  "https://www.bv-brc.org/api/genome_feature/RefSeq.83332.12.NC_000962.CDS.1001.1960.fwd"

# Get a specific pathway by ID
curl -H "Accept: application/json" \
  "https://www.bv-brc.org/api/pathway/00010"
```

### RQL Queries

Resource Query Language (RQL) provides a flexible way to query data:

```bash
# Simple equality query
curl -H "Accept: application/json" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/genome/?eq(genome_id,83332.12)"

# Multiple conditions with AND
curl -H "Accept: application/json" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/genome_feature/?and(eq(genome_id,83332.12),eq(feature_type,CDS))"

# Using OR for multiple possible values
curl -H "Accept: application/json" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/genome/?or(eq(genome_id,83332.12),eq(genome_id,224308.127))"

# Using IN for multiple values
curl -H "Accept: application/json" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/genome/?in(genome_id,(83332.12,224308.127))"

# For larger queries, use POST instead of GET
curl -H "Accept: application/json" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  -X POST -d "in(genome_id,(83332.12,224308.127,511145.183))" \
  "https://www.bv-brc.org/api/genome/"
```

### Solr Queries

Apache Solr query syntax provides another way to query data:

```bash
# Simple query
curl -H "Accept: application/json" \
  -H "Content-Type: application/solrquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/genome/?q=genome_id:83332.12"

# Multiple conditions
curl -H "Accept: application/json" \
  -H "Content-Type: application/solrquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/genome_feature/?q=genome_id:83332.12 AND feature_type:CDS"

# Using POST for more complex queries
curl -H "Accept: application/json" \
  -H "Content-Type: application/solrquery+x-www-form-urlencoded" \
  -X POST -d "q=genome_id:83332.12&fq=genome_status:Complete&sort=genome_name asc&rows=10" \
  "https://www.bv-brc.org/api/genome/"
```

## Working with Specific Data Types

### Genomes

```bash
# Get all complete bacterial genomes from a specific genus
curl -H "Accept: application/json" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/genome/?and(eq(genome_status,Complete),eq(genus,Escherichia))&limit(10)"

# Get genomes with specific host
curl -H "Accept: application/json" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/genome/?eq(host_name,Homo sapiens)&limit(10)"

# Get genomes with GC content in a specific range
curl -H "Accept: application/json" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/genome/?and(gt(gc_content,65),lt(gc_content,75))&limit(10)"
```

### Genome Features

```bash
# Get all CDS features from a genome
curl -H "Accept: application/json" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/genome_feature/?and(eq(genome_id,83332.12),eq(feature_type,CDS))&limit(10)"

# Get features by product name
curl -H "Accept: application/json" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/genome_feature/?and(eq(genome_id,83332.12),contains(product,polymerase))&limit(10)"

# Get features by gene name
curl -H "Accept: application/json" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/genome_feature/?and(eq(genome_id,83332.12),eq(gene,rpoB))&limit(10)"
```

### Pathways

```bash
# Get all pathways for a specific genome
curl -H "Accept: application/json" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/pathway/?eq(genome_id,83332.12)&limit(10)"

# Get pathways by name
curl -H "Accept: application/json" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/pathway/?contains(pathway_name,glycolysis)&limit(10)"
```

### Taxonomy

```bash
# Get taxonomy information for a specific taxon ID
curl -H "Accept: application/json" \
  "https://www.bv-brc.org/api/taxonomy/83332"

# Get all genera in a family
curl -H "Accept: application/json" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/taxonomy/?and(eq(taxon_rank,genus),eq(family,Bacillaceae))&limit(50)"
```

### Specialty Genes

```bash
# Get antibiotic resistance genes
curl -H "Accept: application/json" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/sp_gene/?and(eq(property,Antibiotic Resistance),eq(genome_id,83332.12))&limit(10)"

# Get virulence factors
curl -H "Accept: application/json" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/sp_gene/?and(eq(property,Virulence Factor),eq(genome_id,83332.12))&limit(10)"
```

### Protein Families

```bash
# Get protein families for a genome
curl -H "Accept: application/json" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/protein_family/?eq(genome_id,83332.12)&limit(10)"

# Get specific protein family details
curl -H "Accept: application/json" \
  "https://www.bv-brc.org/api/protein_family/PGF_00000001"
```

## Advanced Features

### Faceting

Faceting allows you to categorize search results:

```bash
# Using Solr syntax
curl -H "Accept: application/solr+json" \
  -H "Content-Type: application/solrquery+x-www-form-urlencoded" \
  -X POST -d "q=genome_id:83332.12&rows=0&facet=true&facet.field=feature_type&json.nl=map" \
  "https://www.bv-brc.org/api/genome_feature/"

# Equivalent RQL syntax
curl -H "Accept: application/solr+json" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  -X POST -d "eq(genome_id,83332.12)&facet((field,feature_type))&limit(0)&json(nl,map)" \
  "https://www.bv-brc.org/api/genome_feature/"
```

This returns results like:
```json
{
    "facet_counts": {
        "facet_fields": {
            "feature_type": {
                "CDS": 4000,
                "rRNA": 3,
                "tRNA": 45
            }
        }
    }
}
```

### Sorting and Pagination

```bash
# Sort by genome name (ascending)
curl -H "Accept: application/json" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/genome/?eq(genus,Escherichia)&sort(+genome_name)&limit(10)"

# Sort by genome size (descending)
curl -H "Accept: application/json" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/genome/?eq(genus,Escherichia)&sort(-genome_length)&limit(10)"

# Pagination with limit and offset
curl -H "Accept: application/json" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/genome/?eq(genus,Escherichia)&limit(10,20)"
```

### Field Selection

```bash
# Select only specific fields
curl -H "Accept: application/json" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/genome/?eq(genome_id,83332.12)&select(genome_id,genome_name,taxon_id,gc_content)"
```

### Response Format Examples

```bash
# JSON format (default)
curl -H "Accept: application/json" \
  "https://www.bv-brc.org/api/genome/83332.12"

# CSV format
curl -H "Accept: text/csv" \
  "https://www.bv-brc.org/api/genome/83332.12"

# TSV format
curl -H "Accept: text/tsv" \
  "https://www.bv-brc.org/api/genome/83332.12"

# Excel format
curl -H "Accept: application/vnd.openxmlformats" -o genome.xlsx \
  "https://www.bv-brc.org/api/genome/83332.12"

# DNA FASTA format
curl -H "Accept: application/dna+fasta" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/genome_feature/?and(eq(genome_id,83332.12),eq(feature_type,CDS))&limit(5)"

# Protein FASTA format
curl -H "Accept: application/protein+fasta" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/genome_feature/?and(eq(genome_id,83332.12),eq(feature_type,CDS))&limit(5)"
```

## Common Use Cases

### Getting Genome Metadata

```bash
# Get metadata for a specific genome
curl -H "Accept: application/json" \
  "https://www.bv-brc.org/api/genome/83332.12"

# Get a list of genomes by taxonomy
curl -H "Accept: application/json" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/genome/?and(eq(taxon_lineage_ids,83332),eq(genome_status,Complete))&limit(10)"

# Get genomes with specific isolation source
curl -H "Accept: application/json" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/genome/?and(contains(isolation_source,sputum),eq(host_name,Homo sapiens))&limit(10)"
```

### Retrieving Genomic Sequences

```bash
# Get nucleotide sequence for a gene
curl -H "Accept: application/dna+fasta" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/genome_feature/?and(eq(genome_id,83332.12),eq(gene,rpoB))"

# Get protein sequence for a gene
curl -H "Accept: application/protein+fasta" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/genome_feature/?and(eq(genome_id,83332.12),eq(gene,rpoB))"

# Get all CDS sequences from a genome
curl -H "Accept: application/dna+fasta" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/genome_feature/?and(eq(genome_id,83332.12),eq(feature_type,CDS))&limit(10)"
```

### Searching for Antibiotic Resistance Genes

```bash
# Get antibiotic resistance genes for a genome
curl -H "Accept: application/json" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/sp_gene/?and(eq(property,Antibiotic Resistance),eq(genome_id,83332.12))&limit(50)"

# Get antibiotic resistance genes by specific evidence
curl -H "Accept: application/json" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/sp_gene/?and(eq(property,Antibiotic Resistance),eq(evidence,Literature))&limit(10)"

# Get resistance genes for a specific antibiotic
curl -H "Accept: application/json" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/sp_gene/?and(eq(property,Antibiotic Resistance),contains(product,rifampicin))&limit(10)"
```

### Querying Taxonomy Data

```bash
# Get taxonomy information
curl -H "Accept: application/json" \
  "https://www.bv-brc.org/api/taxonomy/83332"

# Get all species in a genus
curl -H "Accept: application/json" \
  -H "Content-Type: application/rqlquery+x-www-form-urlencoded" \
  "https://www.bv-brc.org/api/taxonomy/?and(eq(taxon_rank,species),eq(genus,Mycobacterium))&limit(100)"

# Get taxonomy categories
curl -H "Accept: application/json" \
  "https://www.bv-brc.org/api/taxon_category/"
```

### Cross-collection Queries

```bash
# Get genome summary for a taxon
curl -H "Accept: application/json" \
  "https://www.bv-brc.org/api/summary_by_taxon/83332"

# Get distinct values for a field
curl -H "Accept: application/json" \
  "https://www.bv-brc.org/api/distinct/genome/host_name?q=*:*"

# Get subsystem summary for a genome
curl -H "Accept: application/json" \
  "https://www.bv-brc.org/api/subsystem_summary/83332.12"
```

## Summary of Header Options

### Accept Headers
- `application/json`: JSON formatted results
- `application/solr+json`: JSON format with full Solr response (includes facets)
- `text/csv`: Comma-separated values
- `text/tsv`: Tab-delimited values
- `application/vnd.openxmlformats`: Excel format
- `application/dna+fasta`: DNA sequences in FASTA format
- `application/protein+fasta`: Protein sequences in FASTA format

### Content-Type Headers
- `application/x-www-form-urlencoded`: Standard form encoding
- `application/rqlquery+x-www-form-urlencoded`: For RQL queries
- `application/solrquery+x-www-form-urlencoded`: For Solr queries

### Authorization Header
- For authenticated requests: `Authorization: Bearer un=user@bvbrc.org|tokenid=1c04a34e-d351-4a79-b24c-123456789abc`