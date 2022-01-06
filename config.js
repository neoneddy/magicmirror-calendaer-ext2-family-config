/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
    address: "0.0.0.0",     // Address to listen on, can be:
                            // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
                            // - another specific IPv4/6 to listen on a specific interface
                            // - "0.0.0.0", "::" to listen on any interface
                            // Default, when address config is left out or empty, is "localhost"
    port: 8080,
    basePath: "/",  // The URL path where MagicMirror is hosted. If you are using a Reverse proxy
                    // you must set the sub path here. basePath must end with a /
    ipWhitelist: [],    // Set [] to allow all IP addresses
                                                            // or add a specific IPv4 of 192.168.1.5 :
                                                            // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
                                                            // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
                                                            // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

    useHttps: false,        // Support HTTPS or not, default "false" will use HTTP
    httpsPrivateKey: "",    // HTTPS private key path, only require when useHttps is true
    httpsCertificate: "",   // HTTPS Certificate path, only require when useHttps is true

    language: "en",
    locale: "en-US",
    logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
    timeFormat: 12,
    units: "imperial",
    // serverOnly:  true/false/"local" ,
    // local for armv6l processors, default
    //   starts serveronly and then starts chrome browser
    // false, default for all NON-armv6l devices
    // true, force serveronly mode, because you want to.. no UI on this device

    modules: [
        {
            module: "alert",
        },
        {
            module: "updatenotification",
            position: "top_bar"
        },
        {
            module: "clock",
            position: "top_left"
        },
        
        
        {
            module: "weather",
            position: "top_center",
            config: {
                weatherProvider: "openweathermap",
                type: "current",
                location: "Ham Lake",
                locationID: "5018651", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
                apiKey: "7c64339ebe816e07945fe518ee3833a5"
            }
        },
        {
            module: "weather",
            position: "top_right",
            header: "Weather Forecast",
            config: {
                weatherProvider: "openweathermap",
                type: "forecast",
                location: "Ham Lake",
                locationID: "5018651", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
                apiKey: "7c64339ebe816e07945fe518ee3833a5"
            }
        },
        {
            module: 'MMM-CalendarExt2',
            
            config: {
                rotateInterval: 0,  //rotate between scenes default = 60*1000; 0 disables
                updateInterval: 5*60*1000,  //If not auto-rotated
                firstDrawingDelay: 10*1000, //delay to allow calendar parsing
                calendars : [
                {
                    url: "{{{Replace with your ical feed}}}",
                    name: "Austin Hockey",
                    className: "austin",
                },
                {
                    url: "{{{Replace with your ical feed}}}",
                    name: "Shawn Generals",
                    className: "shawn",
                },
                   {
                    url: "https://www.ahahockey.com/schedule/feed/get/ical?filter=team&team=38&feed=true",
                    name: "Zephyrs",
                    className: "shawn",
                },
              
                  {
                    url: "{{{Replace with your ical feed}}}",
                    name: "Shawn Bon Fire",
                    className: "shawn",
                },
                {
                    url: "{{{Replace with your ical feed}}}",
                    name: "Family",
                    className: "family",
                },
                 {
                    url: "{{{Replace with your ical feed}}}",
                    name: "Lucy",
                    className: "lucy",
                },
                 {
                    url: "https://www.officeholidays.com/ics-all/usa",
                    name: "Holiday",
                    className: "holiday",
                },
                     {
                    url: "{{{Replace with your ical feed}}}",
                    name: "Levi",
                    className: "levi",
                },
                     {
                    url: "{{{Replace with your ical feed}}}",
                    name: "Amelia",
                    className: "amelia",
                },
                     {
                    url: "{{{Replace with your ical feed}}}",
                    name: "Austin",
                    className: "austin",
                },
                  
                
                
                ],
                views: [
                {
                    mode: "week",
                    slotCount: "3",
                    maxItems: "1000",
                    hideOverflow: false,
                    slotMaxHeight: "133px",
                    monthFormat: "MMMM YYYY",
                    position: 'bottom_bar',
                    timeFormat: "h:mm a",
                },
                ],
                scenes: [
                {
                    name: "DEFAULT",
                },
                ],
            },
        },
        
    
    ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}

