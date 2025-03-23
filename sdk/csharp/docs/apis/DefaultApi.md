# Org.OpenAPITools.Api.DefaultApi

All URIs are relative to *http://localhost:3001*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**AcceptGet**](DefaultApi.md#acceptget) | **GET** /accept | Auto-generated summary for GET accept |
| [**ApiGet**](DefaultApi.md#apiget) | **GET** /api | Auto-generated summary for GET /api |
| [**CollectionGet**](DefaultApi.md#collectionget) | **GET** /:collection | Auto-generated summary for GET /:collection |
| [**ContentDirectoryGet**](DefaultApi.md#contentdirectoryget) | **GET** /contentDirectory | Auto-generated summary for GET contentDirectory |
| [**ContentIdGet**](DefaultApi.md#contentidget) | **GET** /content/{id} | Retrieve content by ID |
| [**ContentTypeGet**](DefaultApi.md#contenttypeget) | **GET** /content-type | Auto-generated summary for GET content-type |
| [**DataPost**](DefaultApi.md#datapost) | **POST** /data | Add a new dataset entry |
| [**DataTypeGet**](DefaultApi.md#datatypeget) | **GET** /data/type | Retrieve available data types |
| [**DistinctCollectionFieldGet**](DefaultApi.md#distinctcollectionfieldget) | **GET** /distinct/:collection/:field | Auto-generated summary for GET /distinct/:collection/:field |
| [**DistributeURLGet**](DefaultApi.md#distributeurlget) | **GET** /distributeURL | Auto-generated summary for GET distributeURL |
| [**DocGet**](DefaultApi.md#docget) | **GET** /doc | Retrieve API documentation |
| [**DownloadGet**](DefaultApi.md#downloadget) | **GET** /download | Download a file |
| [**ExperimentGet**](DefaultApi.md#experimentget) | **GET** /experiment | Auto-generated summary for GET /experiment |
| [**ExperimentIdGet**](DefaultApi.md#experimentidget) | **GET** /experiment/:id | Auto-generated summary for GET /experiment/:id |
| [**ExperimentIdIdListIdListGet**](DefaultApi.md#experimentididlistidlistget) | **GET** /experiment/:id/id-list/:id_list | Auto-generated summary for GET /experiment/:id/id-list/:id_list |
| [**ExperimentIdIdListIdListIdsGet**](DefaultApi.md#experimentididlistidlistidsget) | **GET** /experiment/:id/id-list/:id_list/ids | Auto-generated summary for GET /experiment/:id/id-list/:id_list/ids |
| [**FeatureTypeGet**](DefaultApi.md#featuretypeget) | **GET** /feature_type | Auto-generated summary for GET feature_type |
| [**Genome2697049107626TrackListGet**](DefaultApi.md#genome2697049107626tracklistget) | **GET** /genome/2697049.107626/trackList | Auto-generated summary for GET /genome/2697049.107626/trackList |
| [**GenomeIdFeaturesSeqAccessionGet**](DefaultApi.md#genomeidfeaturesseqaccessionget) | **GET** /genome/:id/features/:seq_accession | Auto-generated summary for GET /genome/:id/features/:seq_accession |
| [**GenomeIdNamesGet**](DefaultApi.md#genomeidnamesget) | **GET** /genome/:id/names/ | Auto-generated summary for GET /genome/:id/names/ |
| [**GenomeIdRefseqsGet**](DefaultApi.md#genomeidrefseqsget) | **GET** /genome/:id/refseqs | Auto-generated summary for GET /genome/:id/refseqs |
| [**GenomeIdStatsGlobalGet**](DefaultApi.md#genomeidstatsglobalget) | **GET** /genome/:id/stats/global | Auto-generated summary for GET /genome/:id/stats/global |
| [**GenomeIdStatsRegionFeatureDensitiesSequenceIdGet**](DefaultApi.md#genomeidstatsregionfeaturedensitiessequenceidget) | **GET** /genome/:id/stats/regionFeatureDensities/:sequence_id | Auto-generated summary for GET /genome/:id/stats/regionFeatureDensities/:sequence_id |
| [**GenomeIdStatsRegionSequenceIdGet**](DefaultApi.md#genomeidstatsregionsequenceidget) | **GET** /genome/:id/stats/region/:sequence_id | Auto-generated summary for GET /genome/:id/stats/region/:sequence_id |
| [**GenomeIdTrackListGet**](DefaultApi.md#genomeidtracklistget) | **GET** /genome/:id/trackList | Auto-generated summary for GET /genome/:id/trackList |
| [**GenomeIdTracksGet**](DefaultApi.md#genomeidtracksget) | **GET** /genome/:id/tracks | Auto-generated summary for GET /genome/:id/tracks |
| [**Get**](DefaultApi.md#get) | **GET** /* | Auto-generated summary for GET * |
| [**HpiSearchGet**](DefaultApi.md#hpisearchget) | **GET** /hpi/search | Search HPI data |
| [**HttpPortGet**](DefaultApi.md#httpportget) | **GET** /http_port | Auto-generated summary for GET http_port |
| [**IdGet**](DefaultApi.md#idget) | **GET** /:id | Auto-generated summary for GET /:id |
| [**IndexerPost**](DefaultApi.md#indexerpost) | **POST** /indexer | Trigger data indexing |
| [**JbrowseAPIRootGet**](DefaultApi.md#jbrowseapirootget) | **GET** /jbrowseAPIRoot | Auto-generated summary for GET jbrowseAPIRoot |
| [**JbrowseGet**](DefaultApi.md#jbrowseget) | **GET** /jbrowse | Retrieve JBrowse data |
| [**PermissionsGenomeGet**](DefaultApi.md#permissionsgenomeget) | **GET** /permissions/genome | Check genome permissions |
| [**Post**](DefaultApi.md#post) | **POST** /* | Auto-generated summary for POST * |
| [**PublicURLGet**](DefaultApi.md#publicurlget) | **GET** /publicURL | Auto-generated summary for GET publicURL |
| [**QueryMultiPost**](DefaultApi.md#querymultipost) | **POST** /query/multi | Execute multiple queries |
| [**QueueDirectoryGet**](DefaultApi.md#queuedirectoryget) | **GET** /queueDirectory | Auto-generated summary for GET queueDirectory |
| [**RedisGet**](DefaultApi.md#redisget) | **GET** /redis | Auto-generated summary for GET redis |
| [**RootGet**](DefaultApi.md#rootget) | **GET** / | Auto-generated summary for GET / |
| [**RootPost**](DefaultApi.md#rootpost) | **POST** / | Auto-generated summary for POST / |
| [**RpcPost**](DefaultApi.md#rpcpost) | **POST** /rpc | Execute an RPC request |
| [**SolrGet**](DefaultApi.md#solrget) | **GET** /solr | Auto-generated summary for GET solr |
| [**SubsystemSummaryGenomeIdGet**](DefaultApi.md#subsystemsummarygenomeidget) | **GET** /subsystem_summary/:genome_id | Auto-generated summary for GET /subsystem_summary/:genome_id |
| [**SummaryByTaxonTaxonIdGet**](DefaultApi.md#summarybytaxontaxonidget) | **GET** /summary_by_taxon/:taxon_id | Auto-generated summary for GET /summary_by_taxon/:taxon_id |
| [**TargetIdPatch**](DefaultApi.md#targetidpatch) | **PATCH** /:target_id | Auto-generated summary for PATCH /:target_id |
| [**TargetIdPost**](DefaultApi.md#targetidpost) | **POST** /:target_id | Auto-generated summary for POST /:target_id |
| [**TaxonCategoryGet**](DefaultApi.md#taxoncategoryget) | **GET** /taxon_category/ | Auto-generated summary for GET /taxon_category/ |
| [**TypeGet**](DefaultApi.md#typeget) | **GET** /type | Auto-generated summary for GET type |
| [**TypePost**](DefaultApi.md#typepost) | **POST** /:type | Auto-generated summary for POST /:type |

<a id="acceptget"></a>
# **AcceptGet**
> void AcceptGet ()

Auto-generated summary for GET accept

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class AcceptGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET accept
                apiInstance.AcceptGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.AcceptGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AcceptGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET accept
    apiInstance.AcceptGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.AcceptGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="apiget"></a>
# **ApiGet**
> void ApiGet ()

Auto-generated summary for GET /api

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class ApiGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET /api
                apiInstance.ApiGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.ApiGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ApiGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET /api
    apiInstance.ApiGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.ApiGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="collectionget"></a>
# **CollectionGet**
> void CollectionGet ()

Auto-generated summary for GET /:collection

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class CollectionGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET /:collection
                apiInstance.CollectionGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.CollectionGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CollectionGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET /:collection
    apiInstance.CollectionGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.CollectionGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="contentdirectoryget"></a>
# **ContentDirectoryGet**
> void ContentDirectoryGet ()

Auto-generated summary for GET contentDirectory

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class ContentDirectoryGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET contentDirectory
                apiInstance.ContentDirectoryGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.ContentDirectoryGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ContentDirectoryGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET contentDirectory
    apiInstance.ContentDirectoryGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.ContentDirectoryGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="contentidget"></a>
# **ContentIdGet**
> void ContentIdGet (string id)

Retrieve content by ID

Fetches content details based on a given ID.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class ContentIdGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);
            var id = "id_example";  // string | ID of the content

            try
            {
                // Retrieve content by ID
                apiInstance.ContentIdGet(id);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.ContentIdGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ContentIdGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve content by ID
    apiInstance.ContentIdGetWithHttpInfo(id);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.ContentIdGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | ID of the content |  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully retrieved content |  -  |
| **404** | Content not found |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="contenttypeget"></a>
# **ContentTypeGet**
> void ContentTypeGet ()

Auto-generated summary for GET content-type

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class ContentTypeGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET content-type
                apiInstance.ContentTypeGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.ContentTypeGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ContentTypeGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET content-type
    apiInstance.ContentTypeGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.ContentTypeGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="datapost"></a>
# **DataPost**
> void DataPost (DataPostRequest dataPostRequest)

Add a new dataset entry

Creates a new dataset entry in the API.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DataPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);
            var dataPostRequest = new DataPostRequest(); // DataPostRequest | 

            try
            {
                // Add a new dataset entry
                apiInstance.DataPost(dataPostRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.DataPost: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DataPostWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Add a new dataset entry
    apiInstance.DataPostWithHttpInfo(dataPostRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.DataPostWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **dataPostRequest** | [**DataPostRequest**](DataPostRequest.md) |  |  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successfully created dataset |  -  |
| **400** | Invalid data format |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="datatypeget"></a>
# **DataTypeGet**
> List&lt;string&gt; DataTypeGet ()

Retrieve available data types

Returns a list of all data types available in the API.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DataTypeGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Retrieve available data types
                List<string> result = apiInstance.DataTypeGet();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.DataTypeGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DataTypeGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve available data types
    ApiResponse<List<string>> response = apiInstance.DataTypeGetWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.DataTypeGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

**List<string>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully retrieved data types |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="distinctcollectionfieldget"></a>
# **DistinctCollectionFieldGet**
> void DistinctCollectionFieldGet ()

Auto-generated summary for GET /distinct/:collection/:field

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DistinctCollectionFieldGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET /distinct/:collection/:field
                apiInstance.DistinctCollectionFieldGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.DistinctCollectionFieldGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DistinctCollectionFieldGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET /distinct/:collection/:field
    apiInstance.DistinctCollectionFieldGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.DistinctCollectionFieldGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="distributeurlget"></a>
# **DistributeURLGet**
> void DistributeURLGet ()

Auto-generated summary for GET distributeURL

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DistributeURLGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET distributeURL
                apiInstance.DistributeURLGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.DistributeURLGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DistributeURLGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET distributeURL
    apiInstance.DistributeURLGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.DistributeURLGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="docget"></a>
# **DocGet**
> void DocGet ()

Retrieve API documentation

Serves API documentation in JSON format.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DocGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Retrieve API documentation
                apiInstance.DocGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.DocGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DocGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve API documentation
    apiInstance.DocGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.DocGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully retrieved documentation |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="downloadget"></a>
# **DownloadGet**
> void DownloadGet (string fileId)

Download a file

Allows downloading files from the API using a file ID.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DownloadGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);
            var fileId = "fileId_example";  // string | ID of the file to download

            try
            {
                // Download a file
                apiInstance.DownloadGet(fileId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.DownloadGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DownloadGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Download a file
    apiInstance.DownloadGetWithHttpInfo(fileId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.DownloadGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **fileId** | **string** | ID of the file to download |  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | File downloaded successfully |  -  |
| **404** | File not found |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="experimentget"></a>
# **ExperimentGet**
> void ExperimentGet ()

Auto-generated summary for GET /experiment

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class ExperimentGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET /experiment
                apiInstance.ExperimentGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.ExperimentGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ExperimentGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET /experiment
    apiInstance.ExperimentGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.ExperimentGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="experimentidget"></a>
# **ExperimentIdGet**
> void ExperimentIdGet ()

Auto-generated summary for GET /experiment/:id

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class ExperimentIdGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET /experiment/:id
                apiInstance.ExperimentIdGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.ExperimentIdGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ExperimentIdGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET /experiment/:id
    apiInstance.ExperimentIdGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.ExperimentIdGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="experimentididlistidlistget"></a>
# **ExperimentIdIdListIdListGet**
> void ExperimentIdIdListIdListGet ()

Auto-generated summary for GET /experiment/:id/id-list/:id_list

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class ExperimentIdIdListIdListGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET /experiment/:id/id-list/:id_list
                apiInstance.ExperimentIdIdListIdListGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.ExperimentIdIdListIdListGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ExperimentIdIdListIdListGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET /experiment/:id/id-list/:id_list
    apiInstance.ExperimentIdIdListIdListGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.ExperimentIdIdListIdListGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="experimentididlistidlistidsget"></a>
# **ExperimentIdIdListIdListIdsGet**
> void ExperimentIdIdListIdListIdsGet ()

Auto-generated summary for GET /experiment/:id/id-list/:id_list/ids

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class ExperimentIdIdListIdListIdsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET /experiment/:id/id-list/:id_list/ids
                apiInstance.ExperimentIdIdListIdListIdsGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.ExperimentIdIdListIdListIdsGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ExperimentIdIdListIdListIdsGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET /experiment/:id/id-list/:id_list/ids
    apiInstance.ExperimentIdIdListIdListIdsGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.ExperimentIdIdListIdListIdsGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="featuretypeget"></a>
# **FeatureTypeGet**
> void FeatureTypeGet ()

Auto-generated summary for GET feature_type

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class FeatureTypeGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET feature_type
                apiInstance.FeatureTypeGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.FeatureTypeGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the FeatureTypeGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET feature_type
    apiInstance.FeatureTypeGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.FeatureTypeGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="genome2697049107626tracklistget"></a>
# **Genome2697049107626TrackListGet**
> void Genome2697049107626TrackListGet ()

Auto-generated summary for GET /genome/2697049.107626/trackList

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class Genome2697049107626TrackListGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET /genome/2697049.107626/trackList
                apiInstance.Genome2697049107626TrackListGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.Genome2697049107626TrackListGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the Genome2697049107626TrackListGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET /genome/2697049.107626/trackList
    apiInstance.Genome2697049107626TrackListGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.Genome2697049107626TrackListGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="genomeidfeaturesseqaccessionget"></a>
# **GenomeIdFeaturesSeqAccessionGet**
> void GenomeIdFeaturesSeqAccessionGet ()

Auto-generated summary for GET /genome/:id/features/:seq_accession

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GenomeIdFeaturesSeqAccessionGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET /genome/:id/features/:seq_accession
                apiInstance.GenomeIdFeaturesSeqAccessionGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.GenomeIdFeaturesSeqAccessionGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GenomeIdFeaturesSeqAccessionGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET /genome/:id/features/:seq_accession
    apiInstance.GenomeIdFeaturesSeqAccessionGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.GenomeIdFeaturesSeqAccessionGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="genomeidnamesget"></a>
# **GenomeIdNamesGet**
> void GenomeIdNamesGet ()

Auto-generated summary for GET /genome/:id/names/

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GenomeIdNamesGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET /genome/:id/names/
                apiInstance.GenomeIdNamesGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.GenomeIdNamesGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GenomeIdNamesGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET /genome/:id/names/
    apiInstance.GenomeIdNamesGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.GenomeIdNamesGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="genomeidrefseqsget"></a>
# **GenomeIdRefseqsGet**
> void GenomeIdRefseqsGet ()

Auto-generated summary for GET /genome/:id/refseqs

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GenomeIdRefseqsGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET /genome/:id/refseqs
                apiInstance.GenomeIdRefseqsGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.GenomeIdRefseqsGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GenomeIdRefseqsGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET /genome/:id/refseqs
    apiInstance.GenomeIdRefseqsGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.GenomeIdRefseqsGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="genomeidstatsglobalget"></a>
# **GenomeIdStatsGlobalGet**
> void GenomeIdStatsGlobalGet ()

Auto-generated summary for GET /genome/:id/stats/global

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GenomeIdStatsGlobalGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET /genome/:id/stats/global
                apiInstance.GenomeIdStatsGlobalGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.GenomeIdStatsGlobalGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GenomeIdStatsGlobalGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET /genome/:id/stats/global
    apiInstance.GenomeIdStatsGlobalGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.GenomeIdStatsGlobalGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="genomeidstatsregionfeaturedensitiessequenceidget"></a>
# **GenomeIdStatsRegionFeatureDensitiesSequenceIdGet**
> void GenomeIdStatsRegionFeatureDensitiesSequenceIdGet ()

Auto-generated summary for GET /genome/:id/stats/regionFeatureDensities/:sequence_id

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GenomeIdStatsRegionFeatureDensitiesSequenceIdGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET /genome/:id/stats/regionFeatureDensities/:sequence_id
                apiInstance.GenomeIdStatsRegionFeatureDensitiesSequenceIdGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.GenomeIdStatsRegionFeatureDensitiesSequenceIdGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GenomeIdStatsRegionFeatureDensitiesSequenceIdGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET /genome/:id/stats/regionFeatureDensities/:sequence_id
    apiInstance.GenomeIdStatsRegionFeatureDensitiesSequenceIdGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.GenomeIdStatsRegionFeatureDensitiesSequenceIdGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="genomeidstatsregionsequenceidget"></a>
# **GenomeIdStatsRegionSequenceIdGet**
> void GenomeIdStatsRegionSequenceIdGet ()

Auto-generated summary for GET /genome/:id/stats/region/:sequence_id

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GenomeIdStatsRegionSequenceIdGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET /genome/:id/stats/region/:sequence_id
                apiInstance.GenomeIdStatsRegionSequenceIdGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.GenomeIdStatsRegionSequenceIdGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GenomeIdStatsRegionSequenceIdGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET /genome/:id/stats/region/:sequence_id
    apiInstance.GenomeIdStatsRegionSequenceIdGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.GenomeIdStatsRegionSequenceIdGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="genomeidtracklistget"></a>
# **GenomeIdTrackListGet**
> void GenomeIdTrackListGet ()

Auto-generated summary for GET /genome/:id/trackList

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GenomeIdTrackListGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET /genome/:id/trackList
                apiInstance.GenomeIdTrackListGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.GenomeIdTrackListGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GenomeIdTrackListGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET /genome/:id/trackList
    apiInstance.GenomeIdTrackListGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.GenomeIdTrackListGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="genomeidtracksget"></a>
# **GenomeIdTracksGet**
> void GenomeIdTracksGet ()

Auto-generated summary for GET /genome/:id/tracks

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GenomeIdTracksGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET /genome/:id/tracks
                apiInstance.GenomeIdTracksGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.GenomeIdTracksGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GenomeIdTracksGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET /genome/:id/tracks
    apiInstance.GenomeIdTracksGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.GenomeIdTracksGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="get"></a>
# **Get**
> void Get ()

Auto-generated summary for GET *

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET *
                apiInstance.Get();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.Get: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET *
    apiInstance.GetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.GetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="hpisearchget"></a>
# **HpiSearchGet**
> HpiSearchGet200Response HpiSearchGet (string term = null)

Search HPI data

Fetches data from the HPI search API using a search term.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class HpiSearchGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);
            var term = "term_example";  // string | Search term for querying HPI data. (optional) 

            try
            {
                // Search HPI data
                HpiSearchGet200Response result = apiInstance.HpiSearchGet(term);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.HpiSearchGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the HpiSearchGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Search HPI data
    ApiResponse<HpiSearchGet200Response> response = apiInstance.HpiSearchGetWithHttpInfo(term);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.HpiSearchGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **term** | **string** | Search term for querying HPI data. | [optional]  |

### Return type

[**HpiSearchGet200Response**](HpiSearchGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully retrieved HPI search results |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="httpportget"></a>
# **HttpPortGet**
> void HttpPortGet ()

Auto-generated summary for GET http_port

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class HttpPortGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET http_port
                apiInstance.HttpPortGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.HttpPortGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the HttpPortGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET http_port
    apiInstance.HttpPortGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.HttpPortGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="idget"></a>
# **IdGet**
> void IdGet ()

Auto-generated summary for GET /:id

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class IdGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET /:id
                apiInstance.IdGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.IdGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the IdGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET /:id
    apiInstance.IdGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.IdGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="indexerpost"></a>
# **IndexerPost**
> void IndexerPost ()

Trigger data indexing

Initiates the indexing process for the API database.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class IndexerPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Trigger data indexing
                apiInstance.IndexerPost();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.IndexerPost: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the IndexerPostWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Trigger data indexing
    apiInstance.IndexerPostWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.IndexerPostWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Indexing started successfully |  -  |
| **500** | Error starting indexing |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="jbrowseapirootget"></a>
# **JbrowseAPIRootGet**
> void JbrowseAPIRootGet ()

Auto-generated summary for GET jbrowseAPIRoot

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class JbrowseAPIRootGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET jbrowseAPIRoot
                apiInstance.JbrowseAPIRootGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.JbrowseAPIRootGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the JbrowseAPIRootGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET jbrowseAPIRoot
    apiInstance.JbrowseAPIRootGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.JbrowseAPIRootGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="jbrowseget"></a>
# **JbrowseGet**
> void JbrowseGet (string genomeId)

Retrieve JBrowse data

Fetches genomic visualization data for JBrowse.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class JbrowseGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);
            var genomeId = "genomeId_example";  // string | Genome ID for JBrowse

            try
            {
                // Retrieve JBrowse data
                apiInstance.JbrowseGet(genomeId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.JbrowseGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the JbrowseGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve JBrowse data
    apiInstance.JbrowseGetWithHttpInfo(genomeId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.JbrowseGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **genomeId** | **string** | Genome ID for JBrowse |  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully retrieved JBrowse data |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="permissionsgenomeget"></a>
# **PermissionsGenomeGet**
> void PermissionsGenomeGet (string genomeId)

Check genome permissions

Returns access permissions for a given genome.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class PermissionsGenomeGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);
            var genomeId = "genomeId_example";  // string | ID of the genome

            try
            {
                // Check genome permissions
                apiInstance.PermissionsGenomeGet(genomeId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.PermissionsGenomeGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the PermissionsGenomeGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Check genome permissions
    apiInstance.PermissionsGenomeGetWithHttpInfo(genomeId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.PermissionsGenomeGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **genomeId** | **string** | ID of the genome |  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully retrieved permissions |  -  |
| **403** | Access denied |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="post"></a>
# **Post**
> void Post ()

Auto-generated summary for POST *

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class PostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for POST *
                apiInstance.Post();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.Post: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the PostWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for POST *
    apiInstance.PostWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.PostWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="publicurlget"></a>
# **PublicURLGet**
> void PublicURLGet ()

Auto-generated summary for GET publicURL

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class PublicURLGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET publicURL
                apiInstance.PublicURLGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.PublicURLGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the PublicURLGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET publicURL
    apiInstance.PublicURLGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.PublicURLGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="querymultipost"></a>
# **QueryMultiPost**
> void QueryMultiPost (QueryMultiPostRequest queryMultiPostRequest)

Execute multiple queries

Submits multiple queries to the API and returns combined results.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class QueryMultiPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);
            var queryMultiPostRequest = new QueryMultiPostRequest(); // QueryMultiPostRequest | 

            try
            {
                // Execute multiple queries
                apiInstance.QueryMultiPost(queryMultiPostRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.QueryMultiPost: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the QueryMultiPostWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Execute multiple queries
    apiInstance.QueryMultiPostWithHttpInfo(queryMultiPostRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.QueryMultiPostWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **queryMultiPostRequest** | [**QueryMultiPostRequest**](QueryMultiPostRequest.md) |  |  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully executed queries |  -  |
| **400** | Invalid query format |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="queuedirectoryget"></a>
# **QueueDirectoryGet**
> void QueueDirectoryGet ()

Auto-generated summary for GET queueDirectory

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class QueueDirectoryGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET queueDirectory
                apiInstance.QueueDirectoryGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.QueueDirectoryGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the QueueDirectoryGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET queueDirectory
    apiInstance.QueueDirectoryGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.QueueDirectoryGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="redisget"></a>
# **RedisGet**
> void RedisGet ()

Auto-generated summary for GET redis

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RedisGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET redis
                apiInstance.RedisGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.RedisGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RedisGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET redis
    apiInstance.RedisGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.RedisGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="rootget"></a>
# **RootGet**
> void RootGet ()

Auto-generated summary for GET /

Returns general information about the API.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RootGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET /
                apiInstance.RootGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.RootGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RootGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET /
    apiInstance.RootGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.RootGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="rootpost"></a>
# **RootPost**
> void RootPost ()

Auto-generated summary for POST /

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RootPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for POST /
                apiInstance.RootPost();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.RootPost: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RootPostWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for POST /
    apiInstance.RootPostWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.RootPostWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="rpcpost"></a>
# **RpcPost**
> void RpcPost (RpcPostRequest rpcPostRequest)

Execute an RPC request

Handles remote procedure calls (RPC) for various API functions.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RpcPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);
            var rpcPostRequest = new RpcPostRequest(); // RpcPostRequest | 

            try
            {
                // Execute an RPC request
                apiInstance.RpcPost(rpcPostRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.RpcPost: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RpcPostWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Execute an RPC request
    apiInstance.RpcPostWithHttpInfo(rpcPostRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.RpcPostWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **rpcPostRequest** | [**RpcPostRequest**](RpcPostRequest.md) |  |  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully executed RPC call |  -  |
| **400** | Invalid request format |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="solrget"></a>
# **SolrGet**
> void SolrGet ()

Auto-generated summary for GET solr

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class SolrGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET solr
                apiInstance.SolrGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.SolrGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SolrGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET solr
    apiInstance.SolrGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.SolrGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="subsystemsummarygenomeidget"></a>
# **SubsystemSummaryGenomeIdGet**
> void SubsystemSummaryGenomeIdGet ()

Auto-generated summary for GET /subsystem_summary/:genome_id

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class SubsystemSummaryGenomeIdGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET /subsystem_summary/:genome_id
                apiInstance.SubsystemSummaryGenomeIdGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.SubsystemSummaryGenomeIdGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SubsystemSummaryGenomeIdGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET /subsystem_summary/:genome_id
    apiInstance.SubsystemSummaryGenomeIdGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.SubsystemSummaryGenomeIdGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="summarybytaxontaxonidget"></a>
# **SummaryByTaxonTaxonIdGet**
> void SummaryByTaxonTaxonIdGet ()

Auto-generated summary for GET /summary_by_taxon/:taxon_id

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class SummaryByTaxonTaxonIdGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET /summary_by_taxon/:taxon_id
                apiInstance.SummaryByTaxonTaxonIdGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.SummaryByTaxonTaxonIdGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SummaryByTaxonTaxonIdGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET /summary_by_taxon/:taxon_id
    apiInstance.SummaryByTaxonTaxonIdGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.SummaryByTaxonTaxonIdGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="targetidpatch"></a>
# **TargetIdPatch**
> void TargetIdPatch ()

Auto-generated summary for PATCH /:target_id

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class TargetIdPatchExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for PATCH /:target_id
                apiInstance.TargetIdPatch();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.TargetIdPatch: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the TargetIdPatchWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for PATCH /:target_id
    apiInstance.TargetIdPatchWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.TargetIdPatchWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="targetidpost"></a>
# **TargetIdPost**
> void TargetIdPost ()

Auto-generated summary for POST /:target_id

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class TargetIdPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for POST /:target_id
                apiInstance.TargetIdPost();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.TargetIdPost: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the TargetIdPostWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for POST /:target_id
    apiInstance.TargetIdPostWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.TargetIdPostWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="taxoncategoryget"></a>
# **TaxonCategoryGet**
> void TaxonCategoryGet ()

Auto-generated summary for GET /taxon_category/

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class TaxonCategoryGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET /taxon_category/
                apiInstance.TaxonCategoryGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.TaxonCategoryGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the TaxonCategoryGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET /taxon_category/
    apiInstance.TaxonCategoryGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.TaxonCategoryGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="typeget"></a>
# **TypeGet**
> void TypeGet ()

Auto-generated summary for GET type

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class TypeGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for GET type
                apiInstance.TypeGet();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.TypeGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the TypeGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for GET type
    apiInstance.TypeGetWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.TypeGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="typepost"></a>
# **TypePost**
> void TypePost ()

Auto-generated summary for POST /:type

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class TypePostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3001";
            var apiInstance = new DefaultApi(config);

            try
            {
                // Auto-generated summary for POST /:type
                apiInstance.TypePost();
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.TypePost: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the TypePostWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Auto-generated summary for POST /:type
    apiInstance.TypePostWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.TypePostWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

