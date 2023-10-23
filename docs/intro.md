---
slug: intro
title: Weather Station API
authors:
  - name: Riyad Parvez
    title: Senior Software Engineer
    url: https://github.com/riyadparvez
    image_url: https://github.com/JoelMarcey.png
tags: [api]
---


## Overview

### Authentication and Authorization

The API client needs to provide the `client_id` in the query string for authentication in [user token endpoint](#get-user-token).
`client_id` will be provided to the client.

[User token endpoint](#get-user-token) will provide JWT token and the client make request on behalf of a user by including the bearer token in the `Authorization` HTTP header.
`Authorization: Bearer AbCdEf123456`

`client_id` is also encoded in JWT token and Ukko verifies the `client_id` for authorization purpose in every request when a token is provided.


### Error Reporting and Debugging

We strongly recommend setting `X-REQUEST-ID` header to UUID in each request. This will help us debug requests that failed. `X-REQUEST-ID` header will also be set in response.


### Data Format

Timestamp should be in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format and in UTC timezone.

Phone number should be E.164 compliant i.e with `+{country_code}`. E.g., `+1234567890`.

**IMPORTANT**

`+` is a special symbol in the HTTP url scheme. How the `+` symbol is encoded varies from HTTP clients and programming libraries. 

In short try both options:
* URL encoded `%2b1234567890`. Notice `+` is replaced by the URL encoded version `%2b`.
* Regular `+1234567890`. Your HTTP client or the programming library may do URL encoding by default.

For the sake of brevity and readability we will only use `+1234567890` format in the rest of the documentation.

Please see [URL encoding](https://en.wikipedia.org/wiki/URL_encoding) for details.


## Endpoints

### Get User Token
`GET https://external.ukkoag.com/v0.1/token?email=abcd@xyz.com&client_id=sdfdsfsdf`

OR

`GET https://external.ukkoag.com/v0.1/token?phone_number=+123&client_id=sdfdsfsdf`

#### Request
```
User's email OR phone number need to be specified in the query string. The API will return error (`4xx`) if both the email address and phone number are specified in the query string.

Please refer to [Data Format](#data-format) section to how to properly format the data.
```

#### Response
```
User uuid and bearer token for the user. The client shall store the token and use it to make future requests on behalf of the user.
```

```json
{
    "token": "bearer token representing a user for future requests",
    "user_uuid": "string"
}
```


### Get Weather Stations

`GET https://external.ukkoag.com/v0.1/user/<user_uuid>/weather_stations`

#### Request
```
user_uuid: `user_uuid` provided in the response of Get User Token endpoint.
```

#### Response
```
Returns all the accessible weather stations for the user.
```

```json
[   
    {
        "uuid": "string",
        "name": "string",
        "latitude": "",
        "longitude": "",
        "installed_timestamp": "ISO format. UTC timezone",
        "last_sent_payload": "ISO format. UTC timezone",
    },
    {
        "uuid": "string",
        "name": "string",
        "latitude": "",
        "longitude": "",
        "installed_timestamp": "ISO format. UTC timezone",
        "last_sent_payload": "ISO format. UTC timezone",
    }
]
```


### Get Hourly Weather Readings

`GET https://external.ukkoag.com/v0.1/weather/<station_uuid>?start_timestamp=iso_format&end_timestamp=iso_format`

#### Request
```
station_uuid: Readings for the weather station
Must include the JWT token obtained for the user in the bearer authentication header of the request.

Returns hourly weather data between `start_timestamp` and `end_timestamp`. Both ends are INCLUSIVE.
`end_timestamp` can be nullable. In that case the API will return all the data upto the current hour.
If both `start_timestamp` and `end_timestamp` are absent, then the readings for the most recent
24 hours will be returned.
```

#### Response
```
`uuid`: ID of the weather station.

Hourly aggregated weather readings in UTC timezone.

NOTE: Weather readings are NOT guaranteed to be immutable or non-nullable. Most recent 24 hours of readings are subject to change anytime.
Readings past 24 hours from current how can also change. Although it should be a rare event.

We strongly recommend the client to retrieve the most recent 24 hours of weather readings.
```

```json
{
    "uuid": "string",
    "readings": [
        {
            "timestamp": "ISO format. UTC timezone. Hourly",
            "temperature": "Celsius",
            "relative_humidity": "Percentage",
            "water_event": "mm",
            "wind_speed": "meter/second",
            "wind_direction": "degree"
        },
        {
            "timestamp": "ISO format. UTC timezone. Hourly",
            "temperature": "Celsius",
            "relative_humidity": "Percentage",
            "water_event": "mm",
            "wind_speed": "meter/second",
            "wind_direction": "degree"
        }

    ]
}
```
