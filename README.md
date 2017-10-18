# JSON helper

Pack of json helpers

## Usage

```
const json = require('json-helper');
```

<a name="module_json"></a>

## json

* [json](#module_json)
    * [parseList(content, strict)](#exp_module_json--parseList) ⇒ <code>Array.&lt;\*&gt;</code> ⏏
    * [readSync(path)](#exp_module_json--readSync) ⇒ <code>\*</code> ⏏
    * [readAsync(path)](#exp_module_json--readAsync) ⇒ <code>Promise.&lt;\*&gt;</code> ⏏
    * [readListSync(path, strict)](#exp_module_json--readListSync) ⇒ <code>Array.&lt;\*&gt;</code> ⏏
    * [readListAsync(path, strict)](#exp_module_json--readListAsync) ⇒ <code>Promise.&lt;Array.&lt;\*&gt;&gt;</code> ⏏
    * [writeSync(path, data)](#exp_module_json--writeSync) ⏏
    * [writeAsync(path, data)](#exp_module_json--writeAsync) ⇒ <code>Promise</code> ⏏
    * [writeListSync(path, data)](#exp_module_json--writeListSync) ⏏
    * [writeListAsync(path, data)](#exp_module_json--writeListAsync) ⇒ <code>Promise</code> ⏏
    * [appendListSync(path, data)](#exp_module_json--appendListSync) ⏏
    * [appendListAsync(path, data)](#exp_module_json--appendListAsync) ⇒ <code>Promise</code> ⏏

<a name="exp_module_json--parseList"></a>

### parseList(content, strict) ⇒ <code>Array.&lt;\*&gt;</code> ⏏
Parse JSON-list

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>string</code> |  |
| strict | <code>boolean</code> | Strict mode, only the list is allowed |

<a name="exp_module_json--readSync"></a>

### readSync(path) ⇒ <code>\*</code> ⏏
Reads a file with JSON and returns an object

**Kind**: Exported function  

| Param | Type |
| --- | --- |
| path | <code>string</code> | 

<a name="exp_module_json--readAsync"></a>

### readAsync(path) ⇒ <code>Promise.&lt;\*&gt;</code> ⏏
Reads a file with JSON and returns an object

**Kind**: Exported function  

| Param | Type |
| --- | --- |
| path | <code>string</code> | 

<a name="exp_module_json--readListSync"></a>

### readListSync(path, strict) ⇒ <code>Array.&lt;\*&gt;</code> ⏏
Reads a file with JSON-list or JSON (if not strict) and returns an object

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> |  |
| strict | <code>boolean</code> | Strict mode, only the list is allowed |

<a name="exp_module_json--readListAsync"></a>

### readListAsync(path, strict) ⇒ <code>Promise.&lt;Array.&lt;\*&gt;&gt;</code> ⏏
Reads a file with JSON-list or JSON (if not strict) and returns an object

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> |  |
| strict | <code>boolean</code> | Strict mode, only the list is allowed |

<a name="exp_module_json--writeSync"></a>

### writeSync(path, data) ⏏
Writes data to JSON file

**Kind**: Exported function  

| Param | Type |
| --- | --- |
| path | <code>string</code> | 
| data | <code>\*</code> | 

<a name="exp_module_json--writeAsync"></a>

### writeAsync(path, data) ⇒ <code>Promise</code> ⏏
Writes data to JSON file

**Kind**: Exported function  

| Param | Type |
| --- | --- |
| path | <code>string</code> | 
| data | <code>\*</code> | 

<a name="exp_module_json--writeListSync"></a>

### writeListSync(path, data) ⏏
Writes Array to JSON-list file

**Kind**: Exported function  

| Param | Type |
| --- | --- |
| path | <code>string</code> | 
| data | <code>Array.&lt;\*&gt;</code> | 

<a name="exp_module_json--writeListAsync"></a>

### writeListAsync(path, data) ⇒ <code>Promise</code> ⏏
Writes Array to JSON-list file

**Kind**: Exported function  

| Param | Type |
| --- | --- |
| path | <code>string</code> | 
| data | <code>Array.&lt;\*&gt;</code> | 

<a name="exp_module_json--appendListSync"></a>

### appendListSync(path, data) ⏏
Appends data to JSON-list file

**Kind**: Exported function  

| Param | Type |
| --- | --- |
| path | <code>string</code> | 
| data | <code>\*</code> | 

<a name="exp_module_json--appendListAsync"></a>

### appendListAsync(path, data) ⇒ <code>Promise</code> ⏏
Appends data to JSON-list file

**Kind**: Exported function  

| Param | Type |
| --- | --- |
| path | <code>string</code> | 
| data | <code>\*</code> | 

