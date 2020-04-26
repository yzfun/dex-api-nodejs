# CetLiteForCoinExChain.TendermintApi

All URIs are relative to *https://dex-api.coinex.org/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBlock**](TendermintApi.md#getBlock) | **GET** /blocks/{height} | Get a block at a certain height
[**getLatestBlock**](TendermintApi.md#getLatestBlock) | **GET** /blocks/latest | Get the latest block
[**getLatestValidatorSet**](TendermintApi.md#getLatestValidatorSet) | **GET** /validatorsets/latest | Get the latest validator set
[**getNodeInfo**](TendermintApi.md#getNodeInfo) | **GET** /node_info | The properties of the connected node
[**getSyncing**](TendermintApi.md#getSyncing) | **GET** /syncing | Syncing state of node
[**getValidatorSet**](TendermintApi.md#getValidatorSet) | **GET** /validatorsets/{height} | Get a validator set a certain height

<a name="getBlock"></a>
# **getBlock**
> BlockQuery getBlock(height)

Get a block at a certain height

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.TendermintApi();
let height = new CetLiteForCoinExChain.BigDecimal(); // BigDecimal | Block height

apiInstance.getBlock(height, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **height** | **BigDecimal**| Block height | 

### Return type

[**BlockQuery**](BlockQuery.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLatestBlock"></a>
# **getLatestBlock**
> BlockQuery getLatestBlock()

Get the latest block

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.TendermintApi();
apiInstance.getLatestBlock((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BlockQuery**](BlockQuery.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLatestValidatorSet"></a>
# **getLatestValidatorSet**
> Object getLatestValidatorSet()

Get the latest validator set

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.TendermintApi();
apiInstance.getLatestValidatorSet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNodeInfo"></a>
# **getNodeInfo**
> Object getNodeInfo()

The properties of the connected node

Information about the connected node

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.TendermintApi();
apiInstance.getNodeInfo((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSyncing"></a>
# **getSyncing**
> getSyncing()

Syncing state of node

Get if the node is currently syning with other nodes

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.TendermintApi();
apiInstance.getSyncing((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
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

<a name="getValidatorSet"></a>
# **getValidatorSet**
> Object getValidatorSet(height)

Get a validator set a certain height

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.TendermintApi();
let height = new CetLiteForCoinExChain.BigDecimal(); // BigDecimal | Block height

apiInstance.getValidatorSet(height, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **height** | **BigDecimal**| Block height | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json
