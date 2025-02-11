---
slug: proposed
title: Analytics API
authors:
  - name: Riyad Parvez
    title: Senior Software Engineer
    url: https://github.com/riyadparvez
    image_url: https://github.com/JoelMarcey.png
tags: [api]
---

## IMPORTANT

This is a proposed API spec. The actual API spec might differ from this, although not heavily.


## Overview

### Authentication

The given `api_key` for the client should be set in query paramters in every request.


### Rate Limit / Resource Limit / Pagination

Right now to keep implementation simple we will not implement any pagination or rate/resource limit.


### Error Reporting and Debugging

We strongly recommend setting `X-REQUEST-ID` header to UUID in each request. This will help us debug requests that failed. `X-REQUEST-ID` header will also be set in response.


### Data Format

Timestamps and dates should be in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
The API follows this convention: timestamps are in UTC timezone and dates (usually denoted by `local_date`) are in local timezone.


## Endpoints


### Get Fields

`GET https://external.ukkoag.com/v0.1/field`


#### Response
```
Returns all the accessible fields.
```

```json
[   
    {
        "uuid": "string",
        "name": "string",
        "latitude": "",
        "longitude": "",
        "crop": "string",
        "created_timestamp": "ISO format. UTC timezone",
        "planting_date": "ISO format. Local timezone",
        "subscribed_models": [
            "Lateblight",
            "Earlyblight"
        ]
    },
    {
        "uuid": "string",
        "name": "string",
        "latitude": "",
        "longitude": "",
        "crop": "string",
        "created_timestamp": "ISO format. UTC timezone",
        "planting_date": "ISO format. Local timezone",
        "subscribed_models": [
            "Lateblight",
            "Earlyblight"
        ]
    }
]
```


### Create a field

`POST https://external.ukkoag.com/v0.1/field`


#### Request
```json
{
    "name": "string",
    "latitude": "",
    "longitude": "",
    "crop": "string",
    "planting_date": "ISO format. Local timezone",
}
```

### Update a field

`PATCH https://external.ukkoag.com/v0.1/field/<field_uuid>`


#### Request
```json
{
    "name": "string",
    "latitude": "",
    "longitude": "",
    "crop": "string",
    "planting_date": "ISO format. Local timezone",
}
```

### Delete a field

`DELETE https://external.ukkoag.com/v0.1/field/<field_id>`



### Get Advisories

`GET https://external.ukkoag.com/v0.1/disease/advisories/<field_id>/<model_name>?start_date=iso_format&end_date=iso_format`

#### Request
```
model_name:
NOT optional. Must be one of the values in `subscribed_models` array the response of get fields endpoint.

start_date:
OPTIONAL.
end_date:
OPTIONAL.

If both start_date and end_date are missing, advisories from current date to the future dates (the actual number of days predicted ahead varies by disease models) will be returned.
```

#### Response
```
One advisory per day.

* HIGH: 
* MEDIUM: 
* LOW: 
* DISABLED: can be for different reasons such as planting date, crop or cultivars input are missing.
```

```json
{
    "field_id": "",
    "model": "",
    "advisories": [
        {
            "local_date": "",
            "urgency": "HIGH/MEDIUM/LOW/DISABLED",
            "risk": "float"
        },
        {
            "local_date": "",
            "urgency": "HIGH/MEDIUM/LOW/DISABLED",
            "risk": "float"
        }
    ]
}
```
