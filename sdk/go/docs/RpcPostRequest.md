# RpcPostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Method** | Pointer to **string** |  | [optional] 
**Params** | Pointer to **map[string]interface{}** |  | [optional] 

## Methods

### NewRpcPostRequest

`func NewRpcPostRequest() *RpcPostRequest`

NewRpcPostRequest instantiates a new RpcPostRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRpcPostRequestWithDefaults

`func NewRpcPostRequestWithDefaults() *RpcPostRequest`

NewRpcPostRequestWithDefaults instantiates a new RpcPostRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMethod

`func (o *RpcPostRequest) GetMethod() string`

GetMethod returns the Method field if non-nil, zero value otherwise.

### GetMethodOk

`func (o *RpcPostRequest) GetMethodOk() (*string, bool)`

GetMethodOk returns a tuple with the Method field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMethod

`func (o *RpcPostRequest) SetMethod(v string)`

SetMethod sets Method field to given value.

### HasMethod

`func (o *RpcPostRequest) HasMethod() bool`

HasMethod returns a boolean if a field has been set.

### GetParams

`func (o *RpcPostRequest) GetParams() map[string]interface{}`

GetParams returns the Params field if non-nil, zero value otherwise.

### GetParamsOk

`func (o *RpcPostRequest) GetParamsOk() (*map[string]interface{}, bool)`

GetParamsOk returns a tuple with the Params field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParams

`func (o *RpcPostRequest) SetParams(v map[string]interface{})`

SetParams sets Params field to given value.

### HasParams

`func (o *RpcPostRequest) HasParams() bool`

HasParams returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


