import Period from "./Period"

interface Properties {
    periods: Period[]
}

export default interface WeatherResponse {
    properties: Properties
}
