# QueryMultiPostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Queries** | Pointer to [**[]QueryMultiPostRequestQueriesInner**](QueryMultiPostRequestQueriesInner.md) |  | [optional] 

## Methods

### NewQueryMultiPostRequest

`func NewQueryMultiPostRequest() *QueryMultiPostRequest`

NewQueryMultiPostRequest instantiates a new QueryMultiPostRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewQueryMultiPostRequestWithDefaults

`func NewQueryMultiPostRequestWithDefaults() *QueryMultiPostRequest`

NewQueryMultiPostRequestWithDefaults instantiates a new QueryMultiPostRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQueries

`func (o *QueryMultiPostRequest) GetQueries() []QueryMultiPostRequestQueriesInner`

GetQueries returns the Queries field if non-nil, zero value otherwise.

### GetQueriesOk

`func (o *QueryMultiPostRequest) GetQueriesOk() (*[]QueryMultiPostRequestQueriesInner, bool)`

GetQueriesOk returns a tuple with the Queries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueries

`func (o *QueryMultiPostRequest) SetQueries(v []QueryMultiPostRequestQueriesInner)`

SetQueries sets Queries field to given value.

### HasQueries

`func (o *QueryMultiPostRequest) HasQueries() bool`

HasQueries returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


