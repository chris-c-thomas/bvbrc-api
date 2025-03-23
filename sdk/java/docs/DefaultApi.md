# DefaultApi

All URIs are relative to *http://localhost:3001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**acceptGet**](DefaultApi.md#acceptGet) | **GET** /accept | Auto-generated summary for GET accept |
| [**apiGet**](DefaultApi.md#apiGet) | **GET** /api | Auto-generated summary for GET /api |
| [**collectionGet**](DefaultApi.md#collectionGet) | **GET** /:collection | Auto-generated summary for GET /:collection |
| [**contentDirectoryGet**](DefaultApi.md#contentDirectoryGet) | **GET** /contentDirectory | Auto-generated summary for GET contentDirectory |
| [**contentIdGet**](DefaultApi.md#contentIdGet) | **GET** /content/{id} | Retrieve content by ID |
| [**contentTypeGet**](DefaultApi.md#contentTypeGet) | **GET** /content-type | Auto-generated summary for GET content-type |
| [**dataPost**](DefaultApi.md#dataPost) | **POST** /data | Add a new dataset entry |
| [**dataTypeGet**](DefaultApi.md#dataTypeGet) | **GET** /data/type | Retrieve available data types |
| [**distinctCollectionFieldGet**](DefaultApi.md#distinctCollectionFieldGet) | **GET** /distinct/:collection/:field | Auto-generated summary for GET /distinct/:collection/:field |
| [**distributeURLGet**](DefaultApi.md#distributeURLGet) | **GET** /distributeURL | Auto-generated summary for GET distributeURL |
| [**docGet**](DefaultApi.md#docGet) | **GET** /doc | Retrieve API documentation |
| [**downloadGet**](DefaultApi.md#downloadGet) | **GET** /download | Download a file |
| [**experimentGet**](DefaultApi.md#experimentGet) | **GET** /experiment | Auto-generated summary for GET /experiment |
| [**experimentIdGet**](DefaultApi.md#experimentIdGet) | **GET** /experiment/:id | Auto-generated summary for GET /experiment/:id |
| [**experimentIdIdListIdListGet**](DefaultApi.md#experimentIdIdListIdListGet) | **GET** /experiment/:id/id-list/:id_list | Auto-generated summary for GET /experiment/:id/id-list/:id_list |
| [**experimentIdIdListIdListIdsGet**](DefaultApi.md#experimentIdIdListIdListIdsGet) | **GET** /experiment/:id/id-list/:id_list/ids | Auto-generated summary for GET /experiment/:id/id-list/:id_list/ids |
| [**featureTypeGet**](DefaultApi.md#featureTypeGet) | **GET** /feature_type | Auto-generated summary for GET feature_type |
| [**genome2697049107626TrackListGet**](DefaultApi.md#genome2697049107626TrackListGet) | **GET** /genome/2697049.107626/trackList | Auto-generated summary for GET /genome/2697049.107626/trackList |
| [**genomeIdFeaturesSeqAccessionGet**](DefaultApi.md#genomeIdFeaturesSeqAccessionGet) | **GET** /genome/:id/features/:seq_accession | Auto-generated summary for GET /genome/:id/features/:seq_accession |
| [**genomeIdNamesGet**](DefaultApi.md#genomeIdNamesGet) | **GET** /genome/:id/names/ | Auto-generated summary for GET /genome/:id/names/ |
| [**genomeIdRefseqsGet**](DefaultApi.md#genomeIdRefseqsGet) | **GET** /genome/:id/refseqs | Auto-generated summary for GET /genome/:id/refseqs |
| [**genomeIdStatsGlobalGet**](DefaultApi.md#genomeIdStatsGlobalGet) | **GET** /genome/:id/stats/global | Auto-generated summary for GET /genome/:id/stats/global |
| [**genomeIdStatsRegionFeatureDensitiesSequenceIdGet**](DefaultApi.md#genomeIdStatsRegionFeatureDensitiesSequenceIdGet) | **GET** /genome/:id/stats/regionFeatureDensities/:sequence_id | Auto-generated summary for GET /genome/:id/stats/regionFeatureDensities/:sequence_id |
| [**genomeIdStatsRegionSequenceIdGet**](DefaultApi.md#genomeIdStatsRegionSequenceIdGet) | **GET** /genome/:id/stats/region/:sequence_id | Auto-generated summary for GET /genome/:id/stats/region/:sequence_id |
| [**genomeIdTrackListGet**](DefaultApi.md#genomeIdTrackListGet) | **GET** /genome/:id/trackList | Auto-generated summary for GET /genome/:id/trackList |
| [**genomeIdTracksGet**](DefaultApi.md#genomeIdTracksGet) | **GET** /genome/:id/tracks | Auto-generated summary for GET /genome/:id/tracks |
| [**get**](DefaultApi.md#get) | **GET** /* | Auto-generated summary for GET * |
| [**hpiSearchGet**](DefaultApi.md#hpiSearchGet) | **GET** /hpi/search | Search HPI data |
| [**httpPortGet**](DefaultApi.md#httpPortGet) | **GET** /http_port | Auto-generated summary for GET http_port |
| [**idGet**](DefaultApi.md#idGet) | **GET** /:id | Auto-generated summary for GET /:id |
| [**indexerPost**](DefaultApi.md#indexerPost) | **POST** /indexer | Trigger data indexing |
| [**jbrowseAPIRootGet**](DefaultApi.md#jbrowseAPIRootGet) | **GET** /jbrowseAPIRoot | Auto-generated summary for GET jbrowseAPIRoot |
| [**jbrowseGet**](DefaultApi.md#jbrowseGet) | **GET** /jbrowse | Retrieve JBrowse data |
| [**permissionsGenomeGet**](DefaultApi.md#permissionsGenomeGet) | **GET** /permissions/genome | Check genome permissions |
| [**post**](DefaultApi.md#post) | **POST** /* | Auto-generated summary for POST * |
| [**publicURLGet**](DefaultApi.md#publicURLGet) | **GET** /publicURL | Auto-generated summary for GET publicURL |
| [**queryMultiPost**](DefaultApi.md#queryMultiPost) | **POST** /query/multi | Execute multiple queries |
| [**queueDirectoryGet**](DefaultApi.md#queueDirectoryGet) | **GET** /queueDirectory | Auto-generated summary for GET queueDirectory |
| [**redisGet**](DefaultApi.md#redisGet) | **GET** /redis | Auto-generated summary for GET redis |
| [**rootGet**](DefaultApi.md#rootGet) | **GET** / | Auto-generated summary for GET / |
| [**rootPost**](DefaultApi.md#rootPost) | **POST** / | Auto-generated summary for POST / |
| [**rpcPost**](DefaultApi.md#rpcPost) | **POST** /rpc | Execute an RPC request |
| [**solrGet**](DefaultApi.md#solrGet) | **GET** /solr | Auto-generated summary for GET solr |
| [**subsystemSummaryGenomeIdGet**](DefaultApi.md#subsystemSummaryGenomeIdGet) | **GET** /subsystem_summary/:genome_id | Auto-generated summary for GET /subsystem_summary/:genome_id |
| [**summaryByTaxonTaxonIdGet**](DefaultApi.md#summaryByTaxonTaxonIdGet) | **GET** /summary_by_taxon/:taxon_id | Auto-generated summary for GET /summary_by_taxon/:taxon_id |
| [**targetIdPatch**](DefaultApi.md#targetIdPatch) | **PATCH** /:target_id | Auto-generated summary for PATCH /:target_id |
| [**targetIdPost**](DefaultApi.md#targetIdPost) | **POST** /:target_id | Auto-generated summary for POST /:target_id |
| [**taxonCategoryGet**](DefaultApi.md#taxonCategoryGet) | **GET** /taxon_category/ | Auto-generated summary for GET /taxon_category/ |
| [**typeGet**](DefaultApi.md#typeGet) | **GET** /type | Auto-generated summary for GET type |
| [**typePost**](DefaultApi.md#typePost) | **POST** /:type | Auto-generated summary for POST /:type |


<a id="acceptGet"></a>
# **acceptGet**
> acceptGet()

Auto-generated summary for GET accept

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.acceptGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#acceptGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="apiGet"></a>
# **apiGet**
> apiGet()

Auto-generated summary for GET /api

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.apiGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#apiGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="collectionGet"></a>
# **collectionGet**
> collectionGet()

Auto-generated summary for GET /:collection

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.collectionGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#collectionGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="contentDirectoryGet"></a>
# **contentDirectoryGet**
> contentDirectoryGet()

Auto-generated summary for GET contentDirectory

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.contentDirectoryGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#contentDirectoryGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="contentIdGet"></a>
# **contentIdGet**
> contentIdGet(id)

Retrieve content by ID

Fetches content details based on a given ID.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    String id = "id_example"; // String | ID of the content
    try {
      apiInstance.contentIdGet(id);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#contentIdGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| ID of the content | |

### Return type

null (empty response body)

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

<a id="contentTypeGet"></a>
# **contentTypeGet**
> contentTypeGet()

Auto-generated summary for GET content-type

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.contentTypeGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#contentTypeGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="dataPost"></a>
# **dataPost**
> dataPost(dataPostRequest)

Add a new dataset entry

Creates a new dataset entry in the API.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    DataPostRequest dataPostRequest = new DataPostRequest(); // DataPostRequest | 
    try {
      apiInstance.dataPost(dataPostRequest);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#dataPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **dataPostRequest** | [**DataPostRequest**](DataPostRequest.md)|  | |

### Return type

null (empty response body)

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

<a id="dataTypeGet"></a>
# **dataTypeGet**
> List&lt;String&gt; dataTypeGet()

Retrieve available data types

Returns a list of all data types available in the API.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      List<String> result = apiInstance.dataTypeGet();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#dataTypeGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**List&lt;String&gt;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully retrieved data types |  -  |

<a id="distinctCollectionFieldGet"></a>
# **distinctCollectionFieldGet**
> distinctCollectionFieldGet()

Auto-generated summary for GET /distinct/:collection/:field

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.distinctCollectionFieldGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#distinctCollectionFieldGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="distributeURLGet"></a>
# **distributeURLGet**
> distributeURLGet()

Auto-generated summary for GET distributeURL

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.distributeURLGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#distributeURLGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="docGet"></a>
# **docGet**
> docGet()

Retrieve API documentation

Serves API documentation in JSON format.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.docGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#docGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully retrieved documentation |  -  |

<a id="downloadGet"></a>
# **downloadGet**
> downloadGet(fileId)

Download a file

Allows downloading files from the API using a file ID.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    String fileId = "fileId_example"; // String | ID of the file to download
    try {
      apiInstance.downloadGet(fileId);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#downloadGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **fileId** | **String**| ID of the file to download | |

### Return type

null (empty response body)

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

<a id="experimentGet"></a>
# **experimentGet**
> experimentGet()

Auto-generated summary for GET /experiment

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.experimentGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#experimentGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="experimentIdGet"></a>
# **experimentIdGet**
> experimentIdGet()

Auto-generated summary for GET /experiment/:id

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.experimentIdGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#experimentIdGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="experimentIdIdListIdListGet"></a>
# **experimentIdIdListIdListGet**
> experimentIdIdListIdListGet()

Auto-generated summary for GET /experiment/:id/id-list/:id_list

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.experimentIdIdListIdListGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#experimentIdIdListIdListGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="experimentIdIdListIdListIdsGet"></a>
# **experimentIdIdListIdListIdsGet**
> experimentIdIdListIdListIdsGet()

Auto-generated summary for GET /experiment/:id/id-list/:id_list/ids

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.experimentIdIdListIdListIdsGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#experimentIdIdListIdListIdsGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="featureTypeGet"></a>
# **featureTypeGet**
> featureTypeGet()

Auto-generated summary for GET feature_type

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.featureTypeGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#featureTypeGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="genome2697049107626TrackListGet"></a>
# **genome2697049107626TrackListGet**
> genome2697049107626TrackListGet()

Auto-generated summary for GET /genome/2697049.107626/trackList

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.genome2697049107626TrackListGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#genome2697049107626TrackListGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="genomeIdFeaturesSeqAccessionGet"></a>
# **genomeIdFeaturesSeqAccessionGet**
> genomeIdFeaturesSeqAccessionGet()

Auto-generated summary for GET /genome/:id/features/:seq_accession

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.genomeIdFeaturesSeqAccessionGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#genomeIdFeaturesSeqAccessionGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="genomeIdNamesGet"></a>
# **genomeIdNamesGet**
> genomeIdNamesGet()

Auto-generated summary for GET /genome/:id/names/

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.genomeIdNamesGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#genomeIdNamesGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="genomeIdRefseqsGet"></a>
# **genomeIdRefseqsGet**
> genomeIdRefseqsGet()

Auto-generated summary for GET /genome/:id/refseqs

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.genomeIdRefseqsGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#genomeIdRefseqsGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="genomeIdStatsGlobalGet"></a>
# **genomeIdStatsGlobalGet**
> genomeIdStatsGlobalGet()

Auto-generated summary for GET /genome/:id/stats/global

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.genomeIdStatsGlobalGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#genomeIdStatsGlobalGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="genomeIdStatsRegionFeatureDensitiesSequenceIdGet"></a>
# **genomeIdStatsRegionFeatureDensitiesSequenceIdGet**
> genomeIdStatsRegionFeatureDensitiesSequenceIdGet()

Auto-generated summary for GET /genome/:id/stats/regionFeatureDensities/:sequence_id

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.genomeIdStatsRegionFeatureDensitiesSequenceIdGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#genomeIdStatsRegionFeatureDensitiesSequenceIdGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="genomeIdStatsRegionSequenceIdGet"></a>
# **genomeIdStatsRegionSequenceIdGet**
> genomeIdStatsRegionSequenceIdGet()

Auto-generated summary for GET /genome/:id/stats/region/:sequence_id

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.genomeIdStatsRegionSequenceIdGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#genomeIdStatsRegionSequenceIdGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="genomeIdTrackListGet"></a>
# **genomeIdTrackListGet**
> genomeIdTrackListGet()

Auto-generated summary for GET /genome/:id/trackList

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.genomeIdTrackListGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#genomeIdTrackListGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="genomeIdTracksGet"></a>
# **genomeIdTracksGet**
> genomeIdTracksGet()

Auto-generated summary for GET /genome/:id/tracks

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.genomeIdTracksGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#genomeIdTracksGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="get"></a>
# **get**
> get()

Auto-generated summary for GET *

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.get();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#get");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="hpiSearchGet"></a>
# **hpiSearchGet**
> HpiSearchGet200Response hpiSearchGet(term)

Search HPI data

Fetches data from the HPI search API using a search term.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    String term = "term_example"; // String | Search term for querying HPI data.
    try {
      HpiSearchGet200Response result = apiInstance.hpiSearchGet(term);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#hpiSearchGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **term** | **String**| Search term for querying HPI data. | [optional] |

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

<a id="httpPortGet"></a>
# **httpPortGet**
> httpPortGet()

Auto-generated summary for GET http_port

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.httpPortGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#httpPortGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="idGet"></a>
# **idGet**
> idGet()

Auto-generated summary for GET /:id

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.idGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#idGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="indexerPost"></a>
# **indexerPost**
> indexerPost()

Trigger data indexing

Initiates the indexing process for the API database.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.indexerPost();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#indexerPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

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

<a id="jbrowseAPIRootGet"></a>
# **jbrowseAPIRootGet**
> jbrowseAPIRootGet()

Auto-generated summary for GET jbrowseAPIRoot

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.jbrowseAPIRootGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#jbrowseAPIRootGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="jbrowseGet"></a>
# **jbrowseGet**
> jbrowseGet(genomeId)

Retrieve JBrowse data

Fetches genomic visualization data for JBrowse.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    String genomeId = "genomeId_example"; // String | Genome ID for JBrowse
    try {
      apiInstance.jbrowseGet(genomeId);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#jbrowseGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **genomeId** | **String**| Genome ID for JBrowse | |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully retrieved JBrowse data |  -  |

<a id="permissionsGenomeGet"></a>
# **permissionsGenomeGet**
> permissionsGenomeGet(genomeId)

Check genome permissions

Returns access permissions for a given genome.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    String genomeId = "genomeId_example"; // String | ID of the genome
    try {
      apiInstance.permissionsGenomeGet(genomeId);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#permissionsGenomeGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **genomeId** | **String**| ID of the genome | |

### Return type

null (empty response body)

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

<a id="post"></a>
# **post**
> post()

Auto-generated summary for POST *

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.post();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#post");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="publicURLGet"></a>
# **publicURLGet**
> publicURLGet()

Auto-generated summary for GET publicURL

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.publicURLGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#publicURLGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="queryMultiPost"></a>
# **queryMultiPost**
> queryMultiPost(queryMultiPostRequest)

Execute multiple queries

Submits multiple queries to the API and returns combined results.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    QueryMultiPostRequest queryMultiPostRequest = new QueryMultiPostRequest(); // QueryMultiPostRequest | 
    try {
      apiInstance.queryMultiPost(queryMultiPostRequest);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#queryMultiPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **queryMultiPostRequest** | [**QueryMultiPostRequest**](QueryMultiPostRequest.md)|  | |

### Return type

null (empty response body)

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

<a id="queueDirectoryGet"></a>
# **queueDirectoryGet**
> queueDirectoryGet()

Auto-generated summary for GET queueDirectory

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.queueDirectoryGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#queueDirectoryGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="redisGet"></a>
# **redisGet**
> redisGet()

Auto-generated summary for GET redis

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.redisGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#redisGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="rootGet"></a>
# **rootGet**
> rootGet()

Auto-generated summary for GET /

Returns general information about the API.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.rootGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#rootGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="rootPost"></a>
# **rootPost**
> rootPost()

Auto-generated summary for POST /

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.rootPost();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#rootPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="rpcPost"></a>
# **rpcPost**
> rpcPost(rpcPostRequest)

Execute an RPC request

Handles remote procedure calls (RPC) for various API functions.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    RpcPostRequest rpcPostRequest = new RpcPostRequest(); // RpcPostRequest | 
    try {
      apiInstance.rpcPost(rpcPostRequest);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#rpcPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **rpcPostRequest** | [**RpcPostRequest**](RpcPostRequest.md)|  | |

### Return type

null (empty response body)

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

<a id="solrGet"></a>
# **solrGet**
> solrGet()

Auto-generated summary for GET solr

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.solrGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#solrGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="subsystemSummaryGenomeIdGet"></a>
# **subsystemSummaryGenomeIdGet**
> subsystemSummaryGenomeIdGet()

Auto-generated summary for GET /subsystem_summary/:genome_id

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.subsystemSummaryGenomeIdGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#subsystemSummaryGenomeIdGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="summaryByTaxonTaxonIdGet"></a>
# **summaryByTaxonTaxonIdGet**
> summaryByTaxonTaxonIdGet()

Auto-generated summary for GET /summary_by_taxon/:taxon_id

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.summaryByTaxonTaxonIdGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#summaryByTaxonTaxonIdGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="targetIdPatch"></a>
# **targetIdPatch**
> targetIdPatch()

Auto-generated summary for PATCH /:target_id

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.targetIdPatch();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#targetIdPatch");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="targetIdPost"></a>
# **targetIdPost**
> targetIdPost()

Auto-generated summary for POST /:target_id

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.targetIdPost();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#targetIdPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="taxonCategoryGet"></a>
# **taxonCategoryGet**
> taxonCategoryGet()

Auto-generated summary for GET /taxon_category/

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.taxonCategoryGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#taxonCategoryGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="typeGet"></a>
# **typeGet**
> typeGet()

Auto-generated summary for GET type

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.typeGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#typeGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a id="typePost"></a>
# **typePost**
> typePost()

Auto-generated summary for POST /:type

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3001");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.typePost();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#typePost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

