import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import { Button, Grid } from '@mui/material';

function AutoFillInputFlightList(props) {

    const inputHandler = (e) => {
        if(props.label === "From") {
            props.onChange(e);
        }
        if(props.label === "To"){
            props.onChange(e);
        }
    }

    const filterOptions = createFilterOptions({
        matchFrom: 'any',
        limit: 50,
      });

    return (
        <>
            <Autocomplete
                id={props.label}
                disablePortal
                onChange={inputHandler}
                className={props.className}
                options={top100Films}
                renderInput={(params) => <TextField {...params} label={props.label}/>}
                getOptionLabel={(option) => `${option.label} ${option.city}`}
                renderOption={(props, option) => (
                    <Box component="li" sx={{}} {...props}>
                        
                        <Grid container spacing={2}>
                            <Grid item xs={12} sx={{fontWeight: 'bolder', paddingTop: '15px'}}>
                                {option.label} {option.city}, {option.countryCode}
                            </Grid>
                        </Grid>

                         
                    </Box>
                )}
                filterOptions={filterOptions}
            />


                {/* <Autocomplete
                    disablePortal
                    id={props.label}
                    options={top100Films}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label={props.label} />}
                    /> */}

        </>
    );
}

const top100Films = [
    {
      "label": "AGR",
      "city": "Agra",
      "countryCode": "IN"
    },
    {
      "label": "AGX",
      "city": "Agatti Island",
      "countryCode": "IN"
    },
    {
      "label": "AIP",
      "city": "Adampur",
      "countryCode": "IN"
    },
    {
      "label": "AJL",
      "city": "Aizawl",
      "countryCode": "IN"
    },
    {
      "label": "AKD",
      "city": "Akola",
      "countryCode": "IN"
    },
    {
      "label": "AMD",
      "city": "Ahmedabad",
      "countryCode": "IN"
    },
    {
      "label": "ATQ",
      "city": "Amritsar",
      "countryCode": "IN"
    },
    {
      "label": "BBI",
      "city": "Bhubaneshwar",
      "countryCode": "IN"
    },
    {
      "label": "BDQ",
      "city": "Vadodara",
      "countryCode": "IN"
    },
    {
      "label": "BEK",
      "city": "Bareli",
      "countryCode": "IN"
    },
    {
      "label": "BEP",
      "city": "Bellary",
      "countryCode": "IN"
    },
    {
      "label": "BHJ",
      "city": "Bhuj",
      "countryCode": "IN"
    },
    {
      "label": "BHO",
      "city": "Bhopal",
      "countryCode": "IN"
    },
    {
      "label": "BHU",
      "city": "Bhavnagar",
      "countryCode": "IN"
    },
    {
      "label": "BKB",
      "city": "Bikaner",
      "countryCode": "IN"
    },
    {
      "label": "BLR",
      "city": "Bangalore",
      "countryCode": "IN"
    },
    {
      "label": "BOM",
      "city": "Mumbai",
      "countryCode": "IN"
    },
    {
      "label": "BPM",
      "city": "Hyderabad",
      "countryCode": "IN"
    },
    {
      "label": "BUP",
      "city": "Bhatinda",
      "countryCode": "IN"
    },
    {
      "label": "CBD",
      "city": "Car Nicobar",
      "countryCode": "IN"
    },
    {
      "label": "CCJ",
      "city": "Calicut",
      "countryCode": "IN"
    },
    {
      "label": "CCU",
      "city": "Kolkata",
      "countryCode": "IN"
    },
    {
      "label": "CDP",
      "city": "Cuddapah",
      "countryCode": "IN"
    },
    {
      "label": "CJB",
      "city": "Coimbatore",
      "countryCode": "IN"
    },
    {
      "label": "COH",
      "city": "Cooch Behar",
      "countryCode": "IN"
    },
    {
      "label": "COK",
      "city": "Kochi",
      "countryCode": "IN"
    },
    {
      "label": "DAE",
      "city": "Daparizo",
      "countryCode": "IN"
    },
    {
      "label": "DAI",
      "city": "Darjeeling",
      "countryCode": "IN"
    },
    {
      "label": "DBD",
      "city": "Dhanbad",
      "countryCode": "IN"
    },
    {
      "label": "DED",
      "city": "Dehra Dun",
      "countryCode": "IN"
    },
    {
      "label": "DEL",
      "city": "Delhi",
      "countryCode": "IN"
    },
    {
      "label": "DEP",
      "city": "Deparizo",
      "countryCode": "IN"
    },
    {
      "label": "DHM",
      "city": "Dharamsala",
      "countryCode": "IN"
    },
    {
      "label": "DIB",
      "city": "Dibrugarh",
      "countryCode": "IN"
    },
    {
      "label": "DIU",
      "city": "Diu",
      "countryCode": "IN"
    },
    {
      "label": "DMU",
      "city": "Dimapur",
      "countryCode": "IN"
    },
    {
      "label": "GAU",
      "city": "Guwahati",
      "countryCode": "IN"
    },
    {
      "label": "GAY",
      "city": "Gaya",
      "countryCode": "IN"
    },
    {
      "label": "GOI",
      "city": "Goa",
      "countryCode": "IN"
    },
    {
      "label": "GOP",
      "city": "Gorakhpur",
      "countryCode": "IN"
    },
    {
      "label": "GUX",
      "city": "Guna",
      "countryCode": "IN"
    },
    {
      "label": "GWL",
      "city": "Gwalior",
      "countryCode": "IN"
    },
    {
      "label": "HBX",
      "city": "Hubli",
      "countryCode": "IN"
    },
    {
      "label": "HJR",
      "city": "Khajuraho",
      "countryCode": "IN"
    },
    {
      "label": "HSS",
      "city": "Hissar",
      "countryCode": "IN"
    },
    {
      "label": "HYD",
      "city": "Hyderabad",
      "countryCode": "IN"
    },
    {
      "label": "IDR",
      "city": "Indore",
      "countryCode": "IN"
    },
    {
      "label": "IMF",
      "city": "Imphal",
      "countryCode": "IN"
    },
    {
      "label": "ISK",
      "city": "Nasik",
      "countryCode": "IN"
    },
    {
      "label": "IXA",
      "city": "Agartala",
      "countryCode": "IN"
    },
    {
      "label": "IXB",
      "city": "Bagdogra",
      "countryCode": "IN"
    },
    {
      "label": "IXC",
      "city": "Chandigarh",
      "countryCode": "IN"
    },
    {
      "label": "IXD",
      "city": "Allahabad",
      "countryCode": "IN"
    },
    {
      "label": "IXE",
      "city": "Mangalore",
      "countryCode": "IN"
    },
    {
      "label": "IXG",
      "city": "Belgaum",
      "countryCode": "IN"
    },
    {
      "label": "IXH",
      "city": "Kailashahar",
      "countryCode": "IN"
    },
    {
      "label": "IXI",
      "city": "Lilabari",
      "countryCode": "IN"
    },
    {
      "label": "IXJ",
      "city": "Jammu",
      "countryCode": "IN"
    },
    {
      "label": "IXK",
      "city": "Keshod",
      "countryCode": "IN"
    },
    {
      "label": "IXL",
      "city": "Leh",
      "countryCode": "IN"
    },
    {
      "label": "IXM",
      "city": "Madurai",
      "countryCode": "IN"
    },
    {
      "label": "IXN",
      "city": "Khowai",
      "countryCode": "IN"
    },
    {
      "label": "IXP",
      "city": "Pathankot",
      "countryCode": "IN"
    },
    {
      "label": "IXQ",
      "city": "Kamalpur",
      "countryCode": "IN"
    },
    {
      "label": "IXR",
      "city": "Ranchi",
      "countryCode": "IN"
    },
    {
      "label": "IXS",
      "city": "Silchar",
      "countryCode": "IN"
    },
    {
      "label": "IXT",
      "city": "Pasighat",
      "countryCode": "IN"
    },
    {
      "label": "IXU",
      "city": "Aurangabad",
      "countryCode": "IN"
    },
    {
      "label": "IXV",
      "city": "Along",
      "countryCode": "IN"
    },
    {
      "label": "IXW",
      "city": "Jamshedpur",
      "countryCode": "IN"
    },
    {
      "label": "IXY",
      "city": "Kandla",
      "countryCode": "IN"
    },
    {
      "label": "IXZ",
      "city": "Port Blair",
      "countryCode": "IN"
    },
    {
      "label": "JAI",
      "city": "Jaipur",
      "countryCode": "IN"
    },
    {
      "label": "JDH",
      "city": "Jodhpur",
      "countryCode": "IN"
    },
    {
      "label": "JGA",
      "city": "Jamnagar",
      "countryCode": "IN"
    },
    {
      "label": "JGB",
      "city": "Jagdalpur",
      "countryCode": "IN"
    },
    {
      "label": "JLR",
      "city": "Jabalpur",
      "countryCode": "IN"
    },
    {
      "label": "JRH",
      "city": "Jorhat",
      "countryCode": "IN"
    },
    {
      "label": "JSA",
      "city": "Jaisalmer",
      "countryCode": "IN"
    },
    {
      "label": "KLH",
      "city": "Kolhapur",
      "countryCode": "IN"
    },
    {
      "label": "KNU",
      "city": "Kanpur",
      "countryCode": "IN"
    },
    {
      "label": "KQH",
      "city": "KISHANGARH",
      "countryCode": "IN"
    },
    {
      "label": "KTU",
      "city": "Kota",
      "countryCode": "IN"
    },
    {
      "label": "KUU",
      "city": "Kulu",
      "countryCode": "IN"
    },
    {
      "label": "LDA",
      "city": "Malda",
      "countryCode": "IN"
    },
    {
      "label": "LKO",
      "city": "Lucknow",
      "countryCode": "IN"
    },
    {
      "label": "ltu",
      "city": "latur",
      "countryCode": "IN"
    },
    {
      "label": "LUH",
      "city": "Ludhiana",
      "countryCode": "IN"
    },
    {
      "label": "MAA",
      "city": "Chennai",
      "countryCode": "IN"
    },
    {
      "label": "MOH",
      "city": "Mohanbari",
      "countryCode": "IN"
    },
    {
      "label": "MYQ",
      "city": "Mysore",
      "countryCode": "IN"
    },
    {
      "label": "MZA",
      "city": "Muzaffarnagar",
      "countryCode": "IN"
    },
    {
      "label": "MZU",
      "city": "Muzaffarpur",
      "countryCode": "IN"
    },
    {
      "label": "NAG",
      "city": "Nagpur",
      "countryCode": "IN"
    },
    {
      "label": "NDC",
      "city": "Nanded",
      "countryCode": "IN"
    },
    {
      "label": "NMB",
      "city": "Daman",
      "countryCode": "IN"
    },
    {
      "label": "NVY",
      "city": "Neyveli",
      "countryCode": "IN"
    },
    {
      "label": "OMN",
      "city": "Osmanabad",
      "countryCode": "IN"
    },
    {
      "label": "PAB",
      "city": "Bilaspur",
      "countryCode": "IN"
    },
    {
      "label": "PAT",
      "city": "Patna",
      "countryCode": "IN"
    },
    {
      "label": "PBD",
      "city": "Porbandar",
      "countryCode": "IN"
    },
    {
      "label": "PGH",
      "city": "Pantnagar",
      "countryCode": "IN"
    },
    {
      "label": "PNQ",
      "city": "Pune",
      "countryCode": "IN"
    },
    {
      "label": "PNY",
      "city": "Pondicherry",
      "countryCode": "IN"
    },
    {
      "label": "PUT",
      "city": "Puttaparthi",
      "countryCode": "IN"
    },
    {
      "label": "PYB",
      "city": "Jeypore",
      "countryCode": "IN"
    },
    {
      "label": "PYG",
      "city": "Pakyong",
      "countryCode": "IN"
    },
    {
      "label": "QJU",
      "city": "Jullundur",
      "countryCode": "IN"
    },
    {
      "label": "QNB",
      "city": "Anand",
      "countryCode": "IN"
    },
    {
      "label": "QNF",
      "city": "Faridabad",
      "countryCode": "IN"
    },
    {
      "label": "QNW",
      "city": "Nawanshahar",
      "countryCode": "IN"
    },
    {
      "label": "RAJ",
      "city": "Rajkot",
      "countryCode": "IN"
    },
    {
      "label": "RDP",
      "city": "Durgapur",
      "countryCode": "IN"
    },
    {
      "label": "REW",
      "city": "Rewa",
      "countryCode": "IN"
    },
    {
      "label": "RGH",
      "city": "Balurghat",
      "countryCode": "IN"
    },
    {
      "label": "RJA",
      "city": "Rajahmundry",
      "countryCode": "IN"
    },
    {
      "label": "RJI",
      "city": "Rajouri",
      "countryCode": "IN"
    },
    {
      "label": "RMD",
      "city": "Ramagundam",
      "countryCode": "IN"
    },
    {
      "label": "RNK",
      "city": "SURFACE",
      "countryCode": "IN"
    },
    {
      "label": "RPR",
      "city": "Raipur",
      "countryCode": "IN"
    },
    {
      "label": "RRK",
      "city": "Rourkela",
      "countryCode": "IN"
    },
    {
      "label": "RTC",
      "city": "Ratnagiri",
      "countryCode": "IN"
    },
    {
      "label": "RUP",
      "city": "Rupsi",
      "countryCode": "IN"
    },
    {
      "label": "SAG",
      "city": "Shirdi",
      "countryCode": "IN"
    },
    {
      "label": "SHL",
      "city": "Shillong",
      "countryCode": "IN"
    },
    {
      "label": "SLV",
      "city": "Simla",
      "countryCode": "IN"
    },
    {
      "label": "SSE",
      "city": "Sholapur",
      "countryCode": "IN"
    },
    {
      "label": "STV",
      "city": "Surat",
      "countryCode": "IN"
    },
    {
      "label": "SXR",
      "city": "Srinagar",
      "countryCode": "IN"
    },
    {
      "label": "SXV",
      "city": "Salem",
      "countryCode": "IN"
    },
    {
      "label": "TCR",
      "city": "Tuticorin",
      "countryCode": "IN"
    },
    {
      "label": "TEI",
      "city": "Tezu",
      "countryCode": "IN"
    },
    {
      "label": "TEZ",
      "city": "Tezpur",
      "countryCode": "IN"
    },
    {
      "label": "TIR",
      "city": "Tirupati",
      "countryCode": "IN"
    },
    {
      "label": "TJV",
      "city": "Thanjavur",
      "countryCode": "IN"
    },
    {
      "label": "TNI",
      "city": "Satna",
      "countryCode": "IN"
    },
    {
      "label": "TRV",
      "city": "Trivandrum",
      "countryCode": "IN"
    },
    {
      "label": "TRZ",
      "city": "Tiruchirapally",
      "countryCode": "IN"
    },
    {
      "label": "UDR",
      "city": "Udaipur",
      "countryCode": "IN"
    },
    {
      "label": "VDY",
      "city": "Vidyanagar",
      "countryCode": "IN"
    },
    {
      "label": "VGA",
      "city": "Vijayawada",
      "countryCode": "IN"
    },
    {
      "label": "VIZ",
      "city": "Vizag",
      "countryCode": "IN"
    },
    {
      "label": "VNS",
      "city": "Varanasi",
      "countryCode": "IN"
    },
    {
      "label": "VTZ",
      "city": "Vishakhapatnam",
      "countryCode": "IN"
    },
    {
      "label": "WGC",
      "city": "Warrangal",
      "countryCode": "IN"
    },
    {
      "label": "XXB",
      "city": "Bhadohi",
      "countryCode": "IN"
    },
    {
      "label": "ZER",
      "city": "Zero",
      "countryCode": "IN"
    },{
      "label": "AAA",
      "city": "Anaa",
      "countryCode": "PF"
  },
  {
      "label": "AAB",
      "city": "Arrabury",
      "countryCode": "AU"
  },
  {
      "label": "AAC",
      "city": "Al Arish",
      "countryCode": "EG"
  },
  {
      "label": "AAD",
      "city": "Ad Dabbah",
      "countryCode": "SD"
  },
  {
      "label": "AAE",
      "city": "Annaba",
      "countryCode": "DZ"
  },
  {
      "label": "AAF",
      "city": "Apalachicola",
      "countryCode": "US"
  },
  {
      "label": "AAG",
      "city": "Arapoti",
      "countryCode": "BR"
  },
  {
      "label": "AAH",
      "city": "Aachen",
      "countryCode": "DE"
  },
  {
      "label": "AAI",
      "city": "Arraias",
      "countryCode": "BR"
  },
  {
      "label": "AAJ",
      "city": "Awaradam",
      "countryCode": "SR"
  },
  {
      "label": "AAK",
      "city": "Aranuka",
      "countryCode": "KI"
  },
  {
      "label": "AAL",
      "city": "Aalborg",
      "countryCode": "DK"
  },
  {
      "label": "AAM",
      "city": "Mala Mala",
      "countryCode": "ZA"
  },
  {
      "label": "AAN",
      "city": "Al Ain",
      "countryCode": "AE"
  },
  {
      "label": "AAO",
      "city": "Anaco",
      "countryCode": "VE"
  },
  {
      "label": "AAP",
      "city": "Houston",
      "countryCode": "US"
  },
  {
      "label": "AAQ",
      "city": "Anapa",
      "countryCode": "RU"
  },
  {
      "label": "AAR",
      "city": "Aarhus",
      "countryCode": "DK"
  },
  {
      "label": "AAS",
      "city": "Apalapsili",
      "countryCode": "ID"
  },
  {
      "label": "AAT",
      "city": "Altay",
      "countryCode": "CN"
  },
  {
      "label": "AAU",
      "city": "Asau",
      "countryCode": "WS"
  },
  {
      "label": "AAV",
      "city": "Alah",
      "countryCode": "PH"
  },
  {
      "label": "AAW",
      "city": "Abbottabad",
      "countryCode": "PK"
  },
  {
      "label": "AAX",
      "city": "Araxa",
      "countryCode": "BR"
  },
  {
      "label": "AAY",
      "city": "Al Ghaydah",
      "countryCode": "YE"
  },
  {
      "label": "AAZ",
      "city": "Quetzaltenango",
      "countryCode": "GT"
  },
  {
      "label": "ABA",
      "city": "Abakan",
      "countryCode": "RU"
  },
  {
      "label": "ABC",
      "city": "def",
      "countryCode": "AF"
  },
  {
      "label": "ABD",
      "city": "Abadan",
      "countryCode": "IR"
  },
  {
      "label": "ABE",
      "city": "Allentown",
      "countryCode": "US"
  },
  {
      "label": "ABF",
      "city": "Abaiang",
      "countryCode": "KI"
  },
  {
      "label": "ABG",
      "city": "Abingdon",
      "countryCode": "AU"
  },
  {
      "label": "ABH",
      "city": "Alpha",
      "countryCode": "AU"
  },
  {
      "label": "ABI",
      "city": "Abilene",
      "countryCode": "US"
  },
  {
      "label": "ABJ",
      "city": "Abidjan",
      "countryCode": "CI"
  },
  {
      "label": "ABK",
      "city": "Kabri Dar",
      "countryCode": "ET"
  },
  {
      "label": "ABL",
      "city": "Ambler",
      "countryCode": "US"
  },
  {
      "label": "ABM",
      "city": "Bamaga",
      "countryCode": "AU"
  },
  {
      "label": "ABN",
      "city": "Albina",
      "countryCode": "SR"
  },
  {
      "label": "ABO",
      "city": "Aboisso",
      "countryCode": "CI"
  },
  {
      "label": "ABP",
      "city": "Atkamba",
      "countryCode": "PG"
  },
  {
      "label": "ABQ",
      "city": "Albuquerque",
      "countryCode": "US"
  },
  {
      "label": "ABR",
      "city": "Aberdeen",
      "countryCode": "US"
  },
  {
      "label": "ABS",
      "city": "Abu Simbel",
      "countryCode": "EG"
  },
  {
      "label": "ABT",
      "city": "Al Baha",
      "countryCode": "SA"
  },
  {
      "label": "ABU",
      "city": "Atambua",
      "countryCode": "ID"
  },
  {
      "label": "ABV",
      "city": "Abuja",
      "countryCode": "NG"
  },
  {
      "label": "ABW",
      "city": "Abau",
      "countryCode": "PG"
  },
  {
      "label": "ABX",
      "city": "Albury",
      "countryCode": "AU"
  },
  {
      "label": "ABY",
      "city": "Albany",
      "countryCode": "US"
  },
  {
      "label": "ABZ",
      "city": "Aberdeen",
      "countryCode": "GB"
  },
  {
      "label": "ACA",
      "city": "Acapulco",
      "countryCode": "MX"
  },
  {
      "label": "ACB",
      "city": "Bellaire",
      "countryCode": "US"
  },
  {
      "label": "ACC",
      "city": "Accra",
      "countryCode": "GH"
  },
  {
      "label": "ACD",
      "city": "Acandi",
      "countryCode": "CO"
  },
  {
      "label": "ACE",
      "city": "Lanzarote",
      "countryCode": "ES"
  },
  {
      "label": "ACH",
      "city": "Altenrhein",
      "countryCode": "CH"
  },
  {
      "label": "ACI",
      "city": "Alderney",
      "countryCode": "GB"
  },
  {
      "label": "ACJ",
      "city": "Aruja",
      "countryCode": "BR"
  },
  {
      "label": "ACK",
      "city": "Nantucket",
      "countryCode": "US"
  },
  {
      "label": "ACL",
      "city": "Aguaclara",
      "countryCode": "CO"
  },
  {
      "label": "ACM",
      "city": "Arica",
      "countryCode": "CO"
  },
  {
      "label": "ACN",
      "city": "Ciudad Acuna",
      "countryCode": "MX"
  },
  {
      "label": "ACO",
      "city": "Ascona",
      "countryCode": "CH"
  },
  {
      "label": "ACR",
      "city": "Araracuara",
      "countryCode": "CO"
  },
  {
      "label": "ACS",
      "city": "Achinsk",
      "countryCode": "RU"
  },
  {
      "label": "ACT",
      "city": "Waco",
      "countryCode": "US"
  },
  {
      "label": "ACU",
      "city": "Achutupo",
      "countryCode": "PA"
  },
  {
      "label": "ACV",
      "city": "Arcata",
      "countryCode": "US"
  },
  {
      "label": "ADA",
      "city": "Adana",
      "countryCode": "TR"
  },
  {
      "label": "ADD",
      "city": "Addis Ababa",
      "countryCode": "ET"
  },
  {
      "label": "ADE",
      "city": "Aden",
      "countryCode": "YE"
  },
  {
      "label": "ADF",
      "city": "Adiyaman",
      "countryCode": "TR"
  },
  {
      "label": "ADG",
      "city": "Adrian",
      "countryCode": "US"
  },
  {
      "label": "ADH",
      "city": "Aldan",
      "countryCode": "RU"
  },
  {
      "label": "ADI",
      "city": "Arandis",
      "countryCode": "NA"
  },
  {
      "label": "ADK",
      "city": "Adak Island",
      "countryCode": "US"
  },
  {
      "label": "ADL",
      "city": "Adelaide",
      "countryCode": "AU"
  },
  {
      "label": "ADM",
      "city": "Ardmore",
      "countryCode": "US"
  },
  {
      "label": "ADN",
      "city": "Andes",
      "countryCode": "CO"
  },
  {
      "label": "ADO",
      "city": "Andamooka",
      "countryCode": "AU"
  },
  {
      "label": "ADP",
      "city": "Anuradhapura",
      "countryCode": "LK"
  },
  {
      "label": "ADQ",
      "city": "Kodiak",
      "countryCode": "US"
  },
  {
      "label": "ADR",
      "city": "Andrews",
      "countryCode": "US"
  },
  {
      "label": "ADT",
      "city": "Ada",
      "countryCode": "US"
  },
  {
      "label": "ADU",
      "city": "Ardabil",
      "countryCode": "IR"
  },
  {
      "label": "ADV",
      "city": "Andover",
      "countryCode": "GB"
  },
  {
      "label": "ADW",
      "city": "Camp Springs",
      "countryCode": "US"
  },
  {
      "label": "ADX",
      "city": "St Andrews",
      "countryCode": "GB"
  },
  {
      "label": "ADY",
      "city": "Alldays",
      "countryCode": "ZA"
  },
  {
      "label": "ADZ",
      "city": "San Andres Island",
      "countryCode": "CO"
  },
  {
      "label": "AEA",
      "city": "Abemama Atoll",
      "countryCode": "KI"
  },
  {
      "label": "AED",
      "city": "Aleneva",
      "countryCode": "US"
  },
  {
      "label": "AEG",
      "city": "Aek Godang",
      "countryCode": "ID"
  },
  {
      "label": "AEH",
      "city": "Abecher",
      "countryCode": "TD"
  },
  {
      "label": "AEK",
      "city": "Aseki",
      "countryCode": "PG"
  },
  {
      "label": "AEL",
      "city": "Albert Lea",
      "countryCode": "US"
  },
  {
      "label": "AEO",
      "city": "Aioun El Atrouss",
      "countryCode": "MR"
  },
  {
      "label": "AER",
      "city": "Adler Sochi",
      "countryCode": "RU"
  },
  {
      "label": "AES",
      "city": "Aalesund",
      "countryCode": "NO"
  },
  {
      "label": "AET",
      "city": "Allakaket",
      "countryCode": "US"
  },
  {
      "label": "AEX",
      "city": "Alexandria",
      "countryCode": "US"
  },
  {
      "label": "AEY",
      "city": "Akureyri",
      "countryCode": "IS"
  },
  {
      "label": "AFA",
      "city": "San Rafael",
      "countryCode": "AR"
  },
  {
      "label": "AFD",
      "city": "Port Alfred",
      "countryCode": "ZA"
  },
  {
      "label": "AFI",
      "city": "Amalfi",
      "countryCode": "CO"
  },
  {
      "label": "AFL",
      "city": "Alta Floresta",
      "countryCode": "BR"
  },
  {
      "label": "AFN",
      "city": "Jaffrey",
      "countryCode": "US"
  },
  {
      "label": "AFO",
      "city": "Afton",
      "countryCode": "US"
  },
  {
      "label": "AFR",
      "city": "Afore",
      "countryCode": "PG"
  },
  {
      "label": "AFT",
      "city": "Afutara",
      "countryCode": "SB"
  },
  {
      "label": "AFY",
      "city": "Afyon",
      "countryCode": "TR"
  },
  {
      "label": "AGA",
      "city": "Agadir",
      "countryCode": "MA"
  },
  {
      "label": "AGD",
      "city": "Anggi",
      "countryCode": "ID"
  },
  {
      "label": "AGE",
      "city": "Wangerooge",
      "countryCode": "DE"
  },
  {
      "label": "AGF",
      "city": "Agen",
      "countryCode": "FR"
  },
  {
      "label": "AGG",
      "city": "Angoram",
      "countryCode": "PG"
  },
  {
      "label": "AGH",
      "city": "Helsingborg",
      "countryCode": "SE"
  },
  {
      "label": "AGI",
      "city": "Wageningen",
      "countryCode": "SR"
  },
  {
      "label": "AGJ",
      "city": "Aguni",
      "countryCode": "JP"
  },
  {
      "label": "AGK",
      "city": "Kagua",
      "countryCode": "PG"
  },
  {
      "label": "AGL",
      "city": "Wanigela",
      "countryCode": "PG"
  },
  {
      "label": "AGM",
      "city": "Tasiilaq",
      "countryCode": "GL"
  },
  {
      "label": "AGN",
      "city": "Angoon",
      "countryCode": "US"
  },
  {
      "label": "AGO",
      "city": "Magnolia",
      "countryCode": "US"
  },
  {
      "label": "AGP",
      "city": "Malaga",
      "countryCode": "ES"
  },
  {
      "label": "AGQ",
      "city": "Agrinion",
      "countryCode": "GR"
  },
  {
      "label": "AGS",
      "city": "Augusta",
      "countryCode": "US"
  },
  {
      "label": "AGT",
      "city": "Ciudad Del Este",
      "countryCode": "PY"
  },
  {
      "label": "AGU",
      "city": "Aguascalientes",
      "countryCode": "MX"
  },
  {
      "label": "AGV",
      "city": "Acarigua",
      "countryCode": "VE"
  },
  {
      "label": "AGW",
      "city": "Agnew",
      "countryCode": "AU"
  },
  {
      "label": "AGY",
      "city": "Argyle Downs",
      "countryCode": "AU"
  },
  {
      "label": "AGZ",
      "city": "Aggeneys",
      "countryCode": "ZA"
  },
  {
      "label": "AHB",
      "city": "Abha",
      "countryCode": "SA"
  },
  {
      "label": "AHC",
      "city": "Herlong",
      "countryCode": "US"
  },
  {
      "label": "AHE",
      "city": "Ahe",
      "countryCode": "PF"
  },
  {
      "label": "AHF",
      "city": "Arapahoe",
      "countryCode": "US"
  },
  {
      "label": "AHH",
      "city": "Amery",
      "countryCode": "US"
  },
  {
      "label": "AHI",
      "city": "Amahai",
      "countryCode": "ID"
  },
  {
      "label": "AHL",
      "city": "Aishalton",
      "countryCode": "GY"
  },
  {
      "label": "AHN",
      "city": "Athens",
      "countryCode": "US"
  },
  {
      "label": "AHO",
      "city": "Alghero",
      "countryCode": "IT"
  },
  {
      "label": "AHS",
      "city": "Ahuas",
      "countryCode": "HN"
  },
  {
      "label": "AHT",
      "city": "Amchitka",
      "countryCode": "US"
  },
  {
      "label": "AHU",
      "city": "Al Hoceima",
      "countryCode": "MA"
  },
  {
      "label": "AHY",
      "city": "Ambatolahy",
      "countryCode": "MG"
  },
  {
      "label": "AHZ",
      "city": "Alpe D'Huez",
      "countryCode": "FR"
  },
  {
      "label": "AIA",
      "city": "Alliance",
      "countryCode": "US"
  },
  {
      "label": "AIB",
      "city": "Anita Bay",
      "countryCode": "US"
  },
  {
      "label": "AIC",
      "city": "Airok",
      "countryCode": "MH"
  },
  {
      "label": "AID",
      "city": "Anderson",
      "countryCode": "US"
  },
  {
      "label": "AIE",
      "city": "Aiome",
      "countryCode": "PG"
  },
  {
      "label": "AIF",
      "city": "Assis",
      "countryCode": "BR"
  },
  {
      "label": "AIG",
      "city": "Yalinga",
      "countryCode": "CF"
  },
  {
      "label": "AII",
      "city": "Alisabieh",
      "countryCode": "DJ"
  },
  {
      "label": "AIK",
      "city": "Aiken",
      "countryCode": "US"
  },
  {
      "label": "AIL",
      "city": "Ailigandi",
      "countryCode": "PA"
  },
  {
      "label": "AIM",
      "city": "Ailuk Island",
      "countryCode": "MH"
  },
  {
      "label": "AIN",
      "city": "Wainwright",
      "countryCode": "US"
  },
  {
      "label": "AIO",
      "city": "Atlantic",
      "countryCode": "US"
  },
  {
      "label": "AIR",
      "city": "Aripuana",
      "countryCode": "BR"
  },
  {
      "label": "AIS",
      "city": "Arorae Island",
      "countryCode": "KI"
  },
  {
      "label": "AIT",
      "city": "Aitutaki",
      "countryCode": "CK"
  },
  {
      "label": "AIU",
      "city": "Atiu Island",
      "countryCode": "CK"
  },
  {
      "label": "AIV",
      "city": "Aliceville",
      "countryCode": "US"
  },
  {
      "label": "AIW",
      "city": "Ai Ais",
      "countryCode": "NA"
  },
  {
      "label": "AIY",
      "city": "Atlantic Cty",
      "countryCode": "US"
  },
  {
      "label": "AIZ",
      "city": "Kaiser Lake Ozark",
      "countryCode": "US"
  },
  {
      "label": "AJA",
      "city": "Ajaccio",
      "countryCode": "FR"
  },
  {
      "label": "AJF",
      "city": "Jouf",
      "countryCode": "SA"
  },
  {
      "label": "AJI",
      "city": "Agri",
      "countryCode": "TR"
  },
  {
      "label": "AJJ",
      "city": "Akjoujt",
      "countryCode": "MR"
  },
  {
      "label": "AJN",
      "city": "Anjouan",
      "countryCode": "KM"
  },
  {
      "label": "AJO",
      "city": "Aljouf",
      "countryCode": "YE"
  },
  {
      "label": "AJR",
      "city": "Arvidsjaur",
      "countryCode": "SE"
  },
  {
      "label": "AJS",
      "city": "Abreojos",
      "countryCode": "MX"
  },
  {
      "label": "AJU",
      "city": "Aracaju",
      "countryCode": "BR"
  },
  {
      "label": "AJY",
      "city": "Agades",
      "countryCode": "NE"
  },
  {
      "label": "AKA",
      "city": "Ankang",
      "countryCode": "CN"
  },
  {
      "label": "AKB",
      "city": "Atka",
      "countryCode": "US"
  },
  {
      "label": "AKE",
      "city": "Akieni",
      "countryCode": "GA"
  },
  {
      "label": "AKF",
      "city": "Kufrah",
      "countryCode": "LY"
  },
  {
      "label": "AKG",
      "city": "Anguganak",
      "countryCode": "PG"
  },
  {
      "label": "AKI",
      "city": "Akiak",
      "countryCode": "US"
  },
  {
      "label": "AKJ",
      "city": "Asahikawa",
      "countryCode": "JP"
  },
  {
      "label": "AKL",
      "city": "Auckland",
      "countryCode": "NZ"
  },
  {
      "label": "AKM",
      "city": "Zakouma",
      "countryCode": "TD"
  },
  {
      "label": "AKN",
      "city": "King Salmon",
      "countryCode": "US"
  },
  {
      "label": "AKO",
      "city": "Akron",
      "countryCode": "US"
  },
  {
      "label": "AKP",
      "city": "Anaktuvuk",
      "countryCode": "US"
  },
  {
      "label": "AKQ",
      "city": "Astraksetra",
      "countryCode": "ID"
  },
  {
      "label": "AKR",
      "city": "Akure",
      "countryCode": "NG"
  },
  {
      "label": "AKS",
      "city": "Auki",
      "countryCode": "SB"
  },
  {
      "label": "AKU",
      "city": "Aksu",
      "countryCode": "CN"
  },
  {
      "label": "AKV",
      "city": "Akulivik",
      "countryCode": "CA"
  },
  {
      "label": "AKX",
      "city": "Aktyubinsk",
      "countryCode": "KZ"
  },
  {
      "label": "AKY",
      "city": "Sittwe",
      "countryCode": "MM"
  },
  {
      "label": "ALA",
      "city": "Almaty",
      "countryCode": "KZ"
  },
  {
      "label": "ALB",
      "city": "Albany",
      "countryCode": "US"
  },
  {
      "label": "ALC",
      "city": "Alicante",
      "countryCode": "ES"
  },
  {
      "label": "ALD",
      "city": "Alerta",
      "countryCode": "PE"
  },
  {
      "label": "ALE",
      "city": "Alpine",
      "countryCode": "US"
  },
  {
      "label": "ALF",
      "city": "Alta",
      "countryCode": "NO"
  },
  {
      "label": "ALG",
      "city": "Algiers",
      "countryCode": "DZ"
  },
  {
      "label": "ALH",
      "city": "Albany",
      "countryCode": "AU"
  },
  {
      "label": "ALI",
      "city": "Alice",
      "countryCode": "US"
  },
  {
      "label": "ALJ",
      "city": "Alexander Bay",
      "countryCode": "ZA"
  },
  {
      "label": "ALK",
      "city": "Asela",
      "countryCode": "ET"
  },
  {
      "label": "ALL",
      "city": "Albenga",
      "countryCode": "IT"
  },
  {
      "label": "ALM",
      "city": "Alamogordo",
      "countryCode": "US"
  },
  {
      "label": "ALN",
      "city": "Alton",
      "countryCode": "US"
  },
  {
      "label": "ALO",
      "city": "Waterloo",
      "countryCode": "US"
  },
  {
      "label": "ALP",
      "city": "Aleppo",
      "countryCode": "SY"
  },
  {
      "label": "ALQ",
      "city": "Alegrete",
      "countryCode": "BR"
  },
  {
      "label": "ALR",
      "city": "Alexandra",
      "countryCode": "NZ"
  },
  {
      "label": "ALS",
      "city": "Alamosa",
      "countryCode": "US"
  },
  {
      "label": "ALT",
      "city": "Alenquer",
      "countryCode": "BR"
  },
  {
      "label": "ALU",
      "city": "Alula",
      "countryCode": "SO"
  },
  {
      "label": "ALV",
      "city": "Andorra",
      "countryCode": "AD"
  },
  {
      "label": "ALW",
      "city": "Walla Walla",
      "countryCode": "US"
  },
  {
      "label": "ALX",
      "city": "Alexander City",
      "countryCode": "US"
  },
  {
      "label": "ALY",
      "city": "Alexandria",
      "countryCode": "EG"
  },
  {
      "label": "AMA",
      "city": "Amarillo",
      "countryCode": "US"
  },
  {
      "label": "AMB",
      "city": "Ambilobe",
      "countryCode": "MG"
  },
  {
      "label": "AMC",
      "city": "Am Timan",
      "countryCode": "TD"
  },
  {
      "label": "AME",
      "city": "Alto Molocue",
      "countryCode": "MZ"
  },
  {
      "label": "AMF",
      "city": "Ama",
      "countryCode": "PG"
  },
  {
      "label": "AMG",
      "city": "Amboin",
      "countryCode": "PG"
  },
  {
      "label": "AMH",
      "city": "Arba Mintch",
      "countryCode": "ET"
  },
  {
      "label": "AMI",
      "city": "Mataram",
      "countryCode": "ID"
  },
  {
      "label": "AMJ",
      "city": "Almenara",
      "countryCode": "BR"
  },
  {
      "label": "AML",
      "city": "Puerto Armuellas",
      "countryCode": "PA"
  },
  {
      "label": "AMM",
      "city": "Amman",
      "countryCode": "JO"
  },
  {
      "label": "AMN",
      "city": "Alma",
      "countryCode": "US"
  },
  {
      "label": "AMO",
      "city": "Mao",
      "countryCode": "TD"
  },
  {
      "label": "AMP",
      "city": "Ampanihy",
      "countryCode": "MG"
  },
  {
      "label": "AMQ",
      "city": "Ambon",
      "countryCode": "ID"
  },
  {
      "label": "AMR",
      "city": "Arno",
      "countryCode": "MH"
  },
  {
      "label": "AMS",
      "city": "Amsterdam",
      "countryCode": "NL"
  },
  {
      "label": "AMT",
      "city": "Amata",
      "countryCode": "AU"
  },
  {
      "label": "AMU",
      "city": "Amanab",
      "countryCode": "PG"
  },
  {
      "label": "AMV",
      "city": "Amderma",
      "countryCode": "RU"
  },
  {
      "label": "AMW",
      "city": "Ames",
      "countryCode": "US"
  },
  {
      "label": "AMX",
      "city": "Ammaroo",
      "countryCode": "AU"
  },
  {
      "label": "AMY",
      "city": "Ambatomainty",
      "countryCode": "MG"
  },
  {
      "label": "AMZ",
      "city": "Ardmore",
      "countryCode": "NZ"
  },
  {
      "label": "ANA",
      "city": "Anaheim",
      "countryCode": "US"
  },
  {
      "label": "ANB",
      "city": "Anniston",
      "countryCode": "US"
  },
  {
      "label": "ANC",
      "city": "Anchorage",
      "countryCode": "US"
  },
  {
      "label": "AND",
      "city": "Anderson",
      "countryCode": "US"
  },
  {
      "label": "ANE",
      "city": "Angers",
      "countryCode": "FR"
  },
  {
      "label": "ANF",
      "city": "Antofagasta",
      "countryCode": "CL"
  },
  {
      "label": "ANG",
      "city": "Angouleme",
      "countryCode": "FR"
  },
  {
      "label": "ANH",
      "city": "Anuha Island Resort",
      "countryCode": "SB"
  },
  {
      "label": "ANI",
      "city": "Aniak",
      "countryCode": "US"
  },
  {
      "label": "ANJ",
      "city": "Zanaga",
      "countryCode": "CG"
  },
  {
      "label": "ANK",
      "city": "Ankara",
      "countryCode": "TR"
  },
  {
      "label": "ANL",
      "city": "Andulo",
      "countryCode": "AO"
  },
  {
      "label": "ANM",
      "city": "Antalaha",
      "countryCode": "MG"
  },
  {
      "label": "ANN",
      "city": "Annette Island",
      "countryCode": "US"
  },
  {
      "label": "ANO",
      "city": "Angoche",
      "countryCode": "MZ"
  },
  {
      "label": "ANP",
      "city": "Annapolis",
      "countryCode": "US"
  },
  {
      "label": "ANQ",
      "city": "Angola",
      "countryCode": "US"
  },
  {
      "label": "ANR",
      "city": "Antwerp",
      "countryCode": "BE"
  },
  {
      "label": "ANS",
      "city": "Andahuaylas",
      "countryCode": "PE"
  },
  {
      "label": "ANT",
      "city": "St Anton",
      "countryCode": "AT"
  },
  {
      "label": "ANU",
      "city": "Antigua",
      "countryCode": "AG"
  },
  {
      "label": "ANV",
      "city": "Anvik",
      "countryCode": "US"
  },
  {
      "label": "ANW",
      "city": "Ainsworth",
      "countryCode": "US"
  },
  {
      "label": "ANX",
      "city": "Andenes",
      "countryCode": "NO"
  },
  {
      "label": "ANY",
      "city": "Anthony",
      "countryCode": "US"
  },
  {
      "label": "ANZ",
      "city": "Angus Downs",
      "countryCode": "AU"
  },
  {
      "label": "AOA",
      "city": "Aroa",
      "countryCode": "PG"
  },
  {
      "label": "AOB",
      "city": "Annanberg",
      "countryCode": "PG"
  },
  {
      "label": "AOC",
      "city": "Altenburg",
      "countryCode": "DE"
  },
  {
      "label": "AOD",
      "city": "Abou Deia",
      "countryCode": "TD"
  },
  {
      "label": "AOE",
      "city": "Eskisehir",
      "countryCode": "TR"
  },
  {
      "label": "AOG",
      "city": "Anshan",
      "countryCode": "CN"
  },
  {
      "label": "AOH",
      "city": "Lima",
      "countryCode": "US"
  },
  {
      "label": "AOI",
      "city": "Ancona",
      "countryCode": "IT"
  },
  {
      "label": "AOJ",
      "city": "Aomori",
      "countryCode": "JP"
  },
  {
      "label": "AOK",
      "city": "Karpathos",
      "countryCode": "GR"
  },
  {
      "label": "AOL",
      "city": "Paso De Los Libres",
      "countryCode": "AR"
  },
  {
      "label": "AON",
      "city": "Arona",
      "countryCode": "PG"
  },
  {
      "label": "AOO",
      "city": "Altoona",
      "countryCode": "US"
  },
  {
      "label": "AOR",
      "city": "Alor Setar",
      "countryCode": "MY"
  },
  {
      "label": "AOS",
      "city": "Amook",
      "countryCode": "US"
  },
  {
      "label": "AOT",
      "city": "Aosta",
      "countryCode": "IT"
  },
  {
      "label": "AOU",
      "city": "Attopeu",
      "countryCode": "LA"
  },
  {
      "label": "APB",
      "city": "Apolo",
      "countryCode": "BO"
  },
  {
      "label": "APC",
      "city": "Napa",
      "countryCode": "US"
  },
  {
      "label": "APE",
      "city": "San Juan Aposento",
      "countryCode": "PE"
  },
  {
      "label": "APF",
      "city": "Naples",
      "countryCode": "US"
  },
  {
      "label": "APG",
      "city": "Aberdeen",
      "countryCode": "US"
  },
  {
      "label": "APH",
      "city": "Bowling Green",
      "countryCode": "US"
  },
  {
      "label": "API",
      "city": "Apiay",
      "countryCode": "CO"
  },
  {
      "label": "APK",
      "city": "Apataki",
      "countryCode": "PF"
  },
  {
      "label": "APL",
      "city": "Nampula",
      "countryCode": "MZ"
  },
  {
      "label": "APN",
      "city": "Alpena",
      "countryCode": "US"
  },
  {
      "label": "APO",
      "city": "Apartado",
      "countryCode": "CO"
  },
  {
      "label": "APP",
      "city": "Asapa",
      "countryCode": "PG"
  },
  {
      "label": "APQ",
      "city": "Arapiraca",
      "countryCode": "BR"
  },
  {
      "label": "APR",
      "city": "April River",
      "countryCode": "PG"
  },
  {
      "label": "APS",
      "city": "Anapolis",
      "countryCode": "BR"
  },
  {
      "label": "APT",
      "city": "Jasper",
      "countryCode": "US"
  },
  {
      "label": "APU",
      "city": "Apucarana",
      "countryCode": "BR"
  },
  {
      "label": "APV",
      "city": "Apple Valley",
      "countryCode": "US"
  },
  {
      "label": "APW",
      "city": "Apia",
      "countryCode": "WS"
  },
  {
      "label": "APX",
      "city": "Arapongas",
      "countryCode": "BR"
  },
  {
      "label": "APY",
      "city": "Alto Parnaiba",
      "countryCode": "BR"
  },
  {
      "label": "APZ",
      "city": "Zapala",
      "countryCode": "AR"
  },
  {
      "label": "AQA",
      "city": "Araraquara",
      "countryCode": "BR"
  },
  {
      "label": "AQB",
      "city": "Quiche",
      "countryCode": "GT"
  },
  {
      "label": "AQG",
      "city": "Anqing",
      "countryCode": "CN"
  },
  {
      "label": "AQI",
      "city": "Qaisumah",
      "countryCode": "SA"
  },
  {
      "label": "AQJ",
      "city": "Aqaba",
      "countryCode": "JO"
  },
  {
      "label": "AQM",
      "city": "Ariquemes",
      "countryCode": "BR"
  },
  {
      "label": "AQP",
      "city": "Arequipa",
      "countryCode": "PE"
  },
  {
      "label": "AQS",
      "city": "Saqani",
      "countryCode": "FJ"
  },
  {
      "label": "AQY",
      "city": "Alyeska",
      "countryCode": "US"
  },
  {
      "label": "ARA",
      "city": "New Iberia",
      "countryCode": "US"
  },
  {
      "label": "ARB",
      "city": "Ann Arbor",
      "countryCode": "US"
  },
  {
      "label": "ARC",
      "city": "Arctic Village",
      "countryCode": "US"
  },
  {
      "label": "ARD",
      "city": "Alor Island",
      "countryCode": "ID"
  },
  {
      "label": "ARE",
      "city": "Arecibo",
      "countryCode": "PR"
  },
  {
      "label": "ARF",
      "city": "Acaricuara",
      "countryCode": "CO"
  },
  {
      "label": "ARG",
      "city": "Walnut Ridge",
      "countryCode": "US"
  },
  {
      "label": "ARH",
      "city": "Arkhangelsk",
      "countryCode": "RU"
  },
  {
      "label": "ARI",
      "city": "Arica",
      "countryCode": "CL"
  },
  {
      "label": "ARJ",
      "city": "Arso",
      "countryCode": "ID"
  },
  {
      "label": "ARK",
      "city": "Arusha",
      "countryCode": "TZ"
  },
  {
      "label": "ARL",
      "city": "Arly",
      "countryCode": "BF"
  },
  {
      "label": "ARM",
      "city": "Armidale",
      "countryCode": "AU"
  },
  {
      "label": "ARO",
      "city": "Arboletas",
      "countryCode": "CO"
  },
  {
      "label": "ARP",
      "city": "Aragip",
      "countryCode": "PG"
  },
  {
      "label": "ARQ",
      "city": "Arauquita",
      "countryCode": "CO"
  },
  {
      "label": "ARR",
      "city": "Alto Rio Senguerr",
      "countryCode": "AR"
  },
  {
      "label": "ARS",
      "city": "Aragarcas",
      "countryCode": "BR"
  },
  {
      "label": "ART",
      "city": "Watertown",
      "countryCode": "US"
  },
  {
      "label": "ARU",
      "city": "Aractuba",
      "countryCode": "BR"
  },
  {
      "label": "ARV",
      "city": "Minocqua",
      "countryCode": "US"
  },
  {
      "label": "ARW",
      "city": "Arad",
      "countryCode": "RO"
  },
  {
      "label": "ARX",
      "city": "Asbury Park",
      "countryCode": "US"
  },
  {
      "label": "ARY",
      "city": "Ararat",
      "countryCode": "AU"
  },
  {
      "label": "ARZ",
      "city": "N'Zeto",
      "countryCode": "AO"
  },
  {
      "label": "ASA",
      "city": "Assab",
      "countryCode": "ER"
  },
  {
      "label": "ASB",
      "city": "Ashgabad",
      "countryCode": "TM"
  },
  {
      "label": "ASC",
      "city": "Ascension",
      "countryCode": "BO"
  },
  {
      "label": "ASD",
      "city": "Andros Town",
      "countryCode": "BS"
  },
  {
      "label": "ASE",
      "city": "Aspen",
      "countryCode": "US"
  },
  {
      "label": "ASF",
      "city": "Astrakhan",
      "countryCode": "RU"
  },
  {
      "label": "ASG",
      "city": "Ashburton",
      "countryCode": "NZ"
  },
  {
      "label": "ASH",
      "city": "Nashua",
      "countryCode": "US"
  },
  {
      "label": "ASI",
      "city": "Georgetown",
      "countryCode": "SH"
  },
  {
      "label": "ASJ",
      "city": "Amami O Shima",
      "countryCode": "JP"
  },
  {
      "label": "ASK",
      "city": "Yamoussoukro",
      "countryCode": "CI"
  },
  {
      "label": "ASL",
      "city": "Marshall",
      "countryCode": "US"
  },
  {
      "label": "ASM",
      "city": "Asmara",
      "countryCode": "ER"
  },
  {
      "label": "ASN",
      "city": "Talladega",
      "countryCode": "US"
  },
  {
      "label": "ASO",
      "city": "Asosa",
      "countryCode": "ET"
  },
  {
      "label": "ASP",
      "city": "Alice Springs",
      "countryCode": "AU"
  },
  {
      "label": "ASQ",
      "city": "Austin",
      "countryCode": "US"
  },
  {
      "label": "ASR",
      "city": "Kayseri",
      "countryCode": "TR"
  },
  {
      "label": "AST",
      "city": "Astoria",
      "countryCode": "US"
  },
  {
      "label": "ASU",
      "city": "Asuncion",
      "countryCode": "PY"
  },
  {
      "label": "ASV",
      "city": "Amboseli",
      "countryCode": "KE"
  },
  {
      "label": "ASW",
      "city": "Aswan",
      "countryCode": "EG"
  },
  {
      "label": "ASX",
      "city": "Ashland",
      "countryCode": "US"
  },
  {
      "label": "ASY",
      "city": "Ashley",
      "countryCode": "US"
  },
  {
      "label": "ASZ",
      "city": "Asirim",
      "countryCode": "PG"
  },
  {
      "label": "ATA",
      "city": "Anta",
      "countryCode": "PE"
  },
  {
      "label": "ATB",
      "city": "Atbara",
      "countryCode": "SD"
  },
  {
      "label": "ATC",
      "city": "Arthur's Town",
      "countryCode": "BS"
  },
  {
      "label": "ATD",
      "city": "Atoifi",
      "countryCode": "SB"
  },
  {
      "label": "ATE",
      "city": "Antlers",
      "countryCode": "US"
  },
  {
      "label": "ATF",
      "city": "Ambato",
      "countryCode": "EC"
  },
  {
      "label": "ATG",
      "city": "Attock",
      "countryCode": "PK"
  },
  {
      "label": "ATH",
      "city": "Athens",
      "countryCode": "GR"
  },
  {
      "label": "ATI",
      "city": "Artigas",
      "countryCode": "UY"
  },
  {
      "label": "ATJ",
      "city": "Antsirabe",
      "countryCode": "MG"
  },
  {
      "label": "ATK",
      "city": "Atqasuk",
      "countryCode": "US"
  },
  {
      "label": "ATL",
      "city": "Atlanta",
      "countryCode": "US"
  },
  {
      "label": "ATM",
      "city": "Altamira",
      "countryCode": "BR"
  },
  {
      "label": "ATN",
      "city": "Namatanai",
      "countryCode": "PG"
  },
  {
      "label": "ATO",
      "city": "Athens",
      "countryCode": "US"
  },
  {
      "label": "ATR",
      "city": "Atar",
      "countryCode": "MR"
  },
  {
      "label": "ATS",
      "city": "Artesia",
      "countryCode": "US"
  },
  {
      "label": "ATT",
      "city": "Atmautluak",
      "countryCode": "US"
  },
  {
      "label": "ATU",
      "city": "Attu Island",
      "countryCode": "US"
  },
  {
      "label": "ATV",
      "city": "Ati",
      "countryCode": "TD"
  },
  {
      "label": "ATW",
      "city": "Appleton",
      "countryCode": "US"
  },
  {
      "label": "ATX",
      "city": "Atbasar",
      "countryCode": "KZ"
  },
  {
      "label": "ATY",
      "city": "Watertown",
      "countryCode": "US"
  },
  {
      "label": "ATZ",
      "city": "Assiut",
      "countryCode": "EG"
  },
  {
      "label": "AUA",
      "city": "Aruba",
      "countryCode": "AW"
  },
  {
      "label": "AUB",
      "city": "Itauba",
      "countryCode": "BR"
  },
  {
      "label": "AUC",
      "city": "Arauca",
      "countryCode": "CO"
  },
  {
      "label": "AUD",
      "city": "Augustus Downs",
      "countryCode": "AU"
  },
  {
      "label": "AUE",
      "city": "Abu Rudeis",
      "countryCode": "EG"
  },
  {
      "label": "AUF",
      "city": "Auxerre",
      "countryCode": "FR"
  },
  {
      "label": "AUG",
      "city": "Augusta",
      "countryCode": "US"
  },
  {
      "label": "AUH",
      "city": "Abu Dhabi",
      "countryCode": "AE"
  },
  {
      "label": "AUI",
      "city": "Aua Island",
      "countryCode": "PG"
  },
  {
      "label": "AUJ",
      "city": "Ambunti",
      "countryCode": "PG"
  },
  {
      "label": "AUK",
      "city": "Alakanuk",
      "countryCode": "US"
  },
  {
      "label": "AUL",
      "city": "Aur Island",
      "countryCode": "MH"
  },
  {
      "label": "AUM",
      "city": "Austin",
      "countryCode": "US"
  },
  {
      "label": "AUN",
      "city": "Auburn",
      "countryCode": "US"
  },
  {
      "label": "AUO",
      "city": "Auburn",
      "countryCode": "US"
  },
  {
      "label": "AUP",
      "city": "Agaun",
      "countryCode": "PG"
  },
  {
      "label": "AUQ",
      "city": "Atuona",
      "countryCode": "PF"
  },
  {
      "label": "AUR",
      "city": "Aurillac",
      "countryCode": "FR"
  },
  {
      "label": "AUS",
      "city": "Austin",
      "countryCode": "US"
  },
  {
      "label": "AUT",
      "city": "Atauro",
      "countryCode": "ID"
  },
  {
      "label": "AUU",
      "city": "Aurukun Mission",
      "countryCode": "AU"
  },
  {
      "label": "AUV",
      "city": "Aumo",
      "countryCode": "PG"
  },
  {
      "label": "AUW",
      "city": "Wausau",
      "countryCode": "US"
  },
  {
      "label": "AUX",
      "city": "Araguaina",
      "countryCode": "BR"
  },
  {
      "label": "AUY",
      "city": "Aneityum",
      "countryCode": "VU"
  },
  {
      "label": "AUZ",
      "city": "Aurora",
      "countryCode": "US"
  },
  {
      "label": "AVB",
      "city": "Aviano",
      "countryCode": "IT"
  },
  {
      "label": "AVF",
      "city": "Avoriaz",
      "countryCode": "FR"
  },
  {
      "label": "AVG",
      "city": "Auvergne",
      "countryCode": "AU"
  },
  {
      "label": "AVI",
      "city": "Ciego De Avila",
      "countryCode": "CU"
  },
  {
      "label": "AVK",
      "city": "Arvaikheer",
      "countryCode": "MN"
  },
  {
      "label": "AVL",
      "city": "Asheville",
      "countryCode": "US"
  },
  {
      "label": "AVN",
      "city": "Avignon",
      "countryCode": "FR"
  },
  {
      "label": "AVO",
      "city": "Avon Park",
      "countryCode": "US"
  },
  {
      "label": "AVP",
      "city": "Scranton",
      "countryCode": "US"
  },
  {
      "label": "AVU",
      "city": "Avu Avu",
      "countryCode": "SB"
  },
  {
      "label": "AVV",
      "city": "Avalon",
      "countryCode": "AU"
  },
  {
      "label": "AVX",
      "city": "Catalina Island",
      "countryCode": "US"
  },
  {
      "label": "AWA",
      "city": "Awassa",
      "countryCode": "ET"
  },
  {
      "label": "AWB",
      "city": "Awaba",
      "countryCode": "PG"
  },
  {
      "label": "AWD",
      "city": "Aniwa",
      "countryCode": "VU"
  },
  {
      "label": "AWE",
      "city": "Alowe",
      "countryCode": "GA"
  },
  {
      "label": "AWH",
      "city": "Awareh",
      "countryCode": "ET"
  },
  {
      "label": "AWK",
      "city": "Wake Island",
      "countryCode": "UM"
  },
  {
      "label": "AWM",
      "city": "West Memphis",
      "countryCode": "US"
  },
  {
      "label": "AWN",
      "city": "Alton Downs",
      "countryCode": "AU"
  },
  {
      "label": "AWP",
      "city": "Austral Downs",
      "countryCode": "AU"
  },
  {
      "label": "AWR",
      "city": "Awar",
      "countryCode": "PG"
  },
  {
      "label": "AWZ",
      "city": "Ahwaz",
      "countryCode": "IR"
  },
  {
      "label": "AXA",
      "city": "Anguilla",
      "countryCode": "AI"
  },
  {
      "label": "AXB",
      "city": "Alexandria Bay",
      "countryCode": "US"
  },
  {
      "label": "AXC",
      "city": "Aramac",
      "countryCode": "AU"
  },
  {
      "label": "AXD",
      "city": "Alexandroupolis",
      "countryCode": "GR"
  },
  {
      "label": "AXE",
      "city": "Xanxere",
      "countryCode": "BR"
  },
  {
      "label": "AXG",
      "city": "Algona",
      "countryCode": "US"
  },
  {
      "label": "AXK",
      "city": "Ataq",
      "countryCode": "YE"
  },
  {
      "label": "AXL",
      "city": "Alexandria",
      "countryCode": "AU"
  },
  {
      "label": "AXM",
      "city": "Armenia",
      "countryCode": "CO"
  },
  {
      "label": "AXN",
      "city": "Alexandria",
      "countryCode": "US"
  },
  {
      "label": "AXP",
      "city": "Spring Point",
      "countryCode": "BS"
  },
  {
      "label": "AXR",
      "city": "Arutua",
      "countryCode": "PF"
  },
  {
      "label": "AXT",
      "city": "Akita",
      "countryCode": "JP"
  },
  {
      "label": "AXU",
      "city": "Axum",
      "countryCode": "ET"
  },
  {
      "label": "AXV",
      "city": "Wapakoneta",
      "countryCode": "US"
  },
  {
      "label": "AXX",
      "city": "Angel Fire",
      "countryCode": "US"
  },
  {
      "label": "AYA",
      "city": "Ayapel",
      "countryCode": "CO"
  },
  {
      "label": "AYC",
      "city": "Ayacucho",
      "countryCode": "CO"
  },
  {
      "label": "AYD",
      "city": "Alroy Downs",
      "countryCode": "AU"
  },
  {
      "label": "AYG",
      "city": "Yaguara",
      "countryCode": "CO"
  },
  {
      "label": "AYI",
      "city": "Yari",
      "countryCode": "CO"
  },
  {
      "label": "AYK",
      "city": "Arkalyk",
      "countryCode": "KZ"
  },
  {
      "label": "AYL",
      "city": "Anthony Lagoon",
      "countryCode": "AU"
  },
  {
      "label": "AYN",
      "city": "Anyang",
      "countryCode": "CN"
  },
  {
      "label": "AYO",
      "city": "Ayolas",
      "countryCode": "PY"
  },
  {
      "label": "AYP",
      "city": "Ayacucho",
      "countryCode": "PE"
  },
  {
      "label": "AYQ",
      "city": "Ayers Rock",
      "countryCode": "AU"
  },
  {
      "label": "AYR",
      "city": "Ayr",
      "countryCode": "AU"
  },
  {
      "label": "AYS",
      "city": "Waycross",
      "countryCode": "US"
  },
  {
      "label": "AYT",
      "city": "Antalya",
      "countryCode": "TR"
  },
  {
      "label": "AYU",
      "city": "Aiyura",
      "countryCode": "PG"
  },
  {
      "label": "AYW",
      "city": "Ayawasi",
      "countryCode": "ID"
  },
  {
      "label": "AYZ",
      "city": "Amityville",
      "countryCode": "US"
  },
  {
      "label": "AZB",
      "city": "Amazon Bay",
      "countryCode": "PG"
  },
  {
      "label": "AZD",
      "city": "Yazd",
      "countryCode": "IR"
  },
  {
      "label": "AZG",
      "city": "Apatzingan",
      "countryCode": "MX"
  },
  {
      "label": "AZN",
      "city": "Andizhan",
      "countryCode": "UZ"
  },
  {
      "label": "AZO",
      "city": "Kalamazoo",
      "countryCode": "US"
  },
  {
      "label": "AZR",
      "city": "Adrar",
      "countryCode": "DZ"
  },
  {
      "label": "AZS",
      "city": "Samana",
      "countryCode": "DO"
  },
  {
      "label": "AZT",
      "city": "Zapatoca",
      "countryCode": "CO"
  },
  {
      "label": "AZZ",
      "city": "Ambriz",
      "countryCode": "AO"
  },
  {
      "label": "BAA",
      "city": "Bialla",
      "countryCode": "PG"
  },
  {
      "label": "BAC",
      "city": "Barranca De Upia",
      "countryCode": "CO"
  },
  {
      "label": "BAE",
      "city": "Barcelonnette",
      "countryCode": "FR"
  },
  {
      "label": "BAF",
      "city": "Westfield",
      "countryCode": "US"
  },
  {
      "label": "BAG",
      "city": "Baguio",
      "countryCode": "PH"
  },
  {
      "label": "BAH",
      "city": "Bahrain",
      "countryCode": "BH"
  },
  {
      "label": "BAI",
      "city": "Buenos Aires",
      "countryCode": "CR"
  },
  {
      "label": "BAJ",
      "city": "Bali",
      "countryCode": "PG"
  },
  {
      "label": "BAK",
      "city": "Baku",
      "countryCode": "AZ"
  },
  {
      "label": "BAL",
      "city": "Batman",
      "countryCode": "TR"
  },
  {
      "label": "BAM",
      "city": "Battle Mountain",
      "countryCode": "US"
  },
  {
      "label": "BAN",
      "city": "Basongo",
      "countryCode": "CD"
  },
  {
      "label": "BAO",
      "city": "Ban Mak Khaen",
      "countryCode": "TH"
  },
  {
      "label": "BAP",
      "city": "Baibara",
      "countryCode": "PG"
  },
  {
      "label": "BAQ",
      "city": "Barranquilla",
      "countryCode": "CO"
  },
  {
      "label": "BAR",
      "city": "Baker Island",
      "countryCode": "US"
  },
  {
      "label": "BAS",
      "city": "Balalae",
      "countryCode": "SB"
  },
  {
      "label": "BAT",
      "city": "Barretos",
      "countryCode": "BR"
  },
  {
      "label": "BAU",
      "city": "Bauru",
      "countryCode": "BR"
  },
  {
      "label": "BAV",
      "city": "Baotou",
      "countryCode": "CN"
  },
  {
      "label": "BAW",
      "city": "Biawonque",
      "countryCode": "GA"
  },
  {
      "label": "BAX",
      "city": "Barnaul",
      "countryCode": "RU"
  },
  {
      "label": "BAY",
      "city": "Baia Mare",
      "countryCode": "RO"
  },
  {
      "label": "BAZ",
      "city": "Barbelos",
      "countryCode": "BR"
  },
  {
      "label": "BBA",
      "city": "Balmaceda",
      "countryCode": "CL"
  },
  {
      "label": "BBB",
      "city": "Benson",
      "countryCode": "US"
  },
  {
      "label": "BBC",
      "city": "Bay City",
      "countryCode": "US"
  },
  {
      "label": "BBD",
      "city": "Brady",
      "countryCode": "US"
  },
  {
      "label": "BBE",
      "city": "Big Bell",
      "countryCode": "AU"
  },
  {
      "label": "BBF",
      "city": "Burlington",
      "countryCode": "US"
  },
  {
      "label": "BBG",
      "city": "Butaritari",
      "countryCode": "KI"
  },
  {
      "label": "BBH",
      "city": "Barth",
      "countryCode": "DE"
  },
  {
      "label": "BBJ",
      "city": "Bitburg",
      "countryCode": "DE"
  },
  {
      "label": "BBK",
      "city": "Kasane",
      "countryCode": "BW"
  },
  {
      "label": "BBL",
      "city": "Babolsar",
      "countryCode": "IR"
  },
  {
      "label": "BBM",
      "city": "Battambang",
      "countryCode": "KH"
  },
  {
      "label": "BBN",
      "city": "Bario",
      "countryCode": "MY"
  },
  {
      "label": "BBO",
      "city": "Berbera",
      "countryCode": "SO"
  },
  {
      "label": "BBP",
      "city": "Bembridge",
      "countryCode": "GB"
  },
  {
      "label": "BBQ",
      "city": "Barbuda",
      "countryCode": "AG"
  },
  {
      "label": "BBR",
      "city": "Basse Terre",
      "countryCode": "GP"
  },
  {
      "label": "BBS",
      "city": "Blackbush",
      "countryCode": "GB"
  },
  {
      "label": "BBT",
      "city": "Berberati",
      "countryCode": "CF"
  },
  {
      "label": "BBV",
      "city": "Bereby",
      "countryCode": "CI"
  },
  {
      "label": "BBW",
      "city": "Broken Bow",
      "countryCode": "US"
  },
  {
      "label": "BBY",
      "city": "Bambari",
      "countryCode": "CF"
  },
  {
      "label": "BBZ",
      "city": "Zambezi",
      "countryCode": "ZM"
  },
  {
      "label": "BCA",
      "city": "Baracoa",
      "countryCode": "CU"
  },
  {
      "label": "BCB",
      "city": "Blacksburg",
      "countryCode": "US"
  },
  {
      "label": "BCC",
      "city": "Bear Creek",
      "countryCode": "US"
  },
  {
      "label": "BCD",
      "city": "Bacolod",
      "countryCode": "PH"
  },
  {
      "label": "BCE",
      "city": "Bryce",
      "countryCode": "US"
  },
  {
      "label": "BCF",
      "city": "Bouca",
      "countryCode": "CF"
  },
  {
      "label": "BCG",
      "city": "Bemichi",
      "countryCode": "GY"
  },
  {
      "label": "BCH",
      "city": "Baucau",
      "countryCode": "ID"
  },
  {
      "label": "BCI",
      "city": "Barcaldine",
      "countryCode": "AU"
  },
  {
      "label": "BCJ",
      "city": "Baca Grande",
      "countryCode": "US"
  },
  {
      "label": "BCK",
      "city": "Bolwarra",
      "countryCode": "AU"
  },
  {
      "label": "BCL",
      "city": "Barra Colorado",
      "countryCode": "CR"
  },
  {
      "label": "BCM",
      "city": "Bacau",
      "countryCode": "RO"
  },
  {
      "label": "BCN",
      "city": "Barcelona",
      "countryCode": "ES"
  },
  {
      "label": "BCO",
      "city": "Jinka",
      "countryCode": "ET"
  },
  {
      "label": "BCP",
      "city": "Bambu",
      "countryCode": "PG"
  },
  {
      "label": "BCQ",
      "city": "Brack",
      "countryCode": "LY"
  },
  {
      "label": "BCR",
      "city": "Boca Do Acre",
      "countryCode": "BR"
  },
  {
      "label": "BCS",
      "city": "Belle Chasse",
      "countryCode": "US"
  },
  {
      "label": "BCT",
      "city": "Boca Raton",
      "countryCode": "US"
  },
  {
      "label": "BCU",
      "city": "Bauchi",
      "countryCode": "NG"
  },
  {
      "label": "BCV",
      "city": "Belmopan",
      "countryCode": "BZ"
  },
  {
      "label": "BCW",
      "city": "Benguera Island",
      "countryCode": "MZ"
  },
  {
      "label": "BCX",
      "city": "Beloreck",
      "countryCode": "RU"
  },
  {
      "label": "BCY",
      "city": "Bulchi",
      "countryCode": "ET"
  },
  {
      "label": "BCZ",
      "city": "Bickerton Island",
      "countryCode": "AU"
  },
  {
      "label": "BDA",
      "city": "Bermuda",
      "countryCode": "BM"
  },
  {
      "label": "BDB",
      "city": "Bundaberg",
      "countryCode": "AU"
  },
  {
      "label": "BDC",
      "city": "Barra Do Corda",
      "countryCode": "BR"
  },
  {
      "label": "BDD",
      "city": "Badu Island",
      "countryCode": "AU"
  },
  {
      "label": "BDE",
      "city": "Baudette",
      "countryCode": "US"
  },
  {
      "label": "BDF",
      "city": "Bradford",
      "countryCode": "US"
  },
  {
      "label": "BDG",
      "city": "Blanding",
      "countryCode": "US"
  },
  {
      "label": "BDH",
      "city": "Bandar Lengeh",
      "countryCode": "IR"
  },
  {
      "label": "BDI",
      "city": "Bird Island",
      "countryCode": "SC"
  },
  {
      "label": "BDJ",
      "city": "Banjarmasin",
      "countryCode": "ID"
  },
  {
      "label": "BDK",
      "city": "Bondoukou",
      "countryCode": "CI"
  },
  {
      "label": "BDM",
      "city": "Bandirma",
      "countryCode": "TR"
  },
  {
      "label": "BDN",
      "city": "Badin",
      "countryCode": "PK"
  },
  {
      "label": "BDO",
      "city": "Bandung",
      "countryCode": "ID"
  },
  {
      "label": "BDP",
      "city": "Bhadrapur",
      "countryCode": "NP"
  },
  {
      "label": "BDR",
      "city": "Bridgeport",
      "countryCode": "US"
  },
  {
      "label": "BDS",
      "city": "Brindisi",
      "countryCode": "IT"
  },
  {
      "label": "BDT",
      "city": "Gbadolite",
      "countryCode": "CD"
  },
  {
      "label": "BDU",
      "city": "Bardufoss",
      "countryCode": "NO"
  },
  {
      "label": "BDV",
      "city": "Moba",
      "countryCode": "CD"
  },
  {
      "label": "BDW",
      "city": "Bedford Downs",
      "countryCode": "AU"
  },
  {
      "label": "BDX",
      "city": "Broadus",
      "countryCode": "US"
  },
  {
      "label": "BDY",
      "city": "Bandon",
      "countryCode": "US"
  },
  {
      "label": "BDZ",
      "city": "Baindoung",
      "countryCode": "PG"
  },
  {
      "label": "BEA",
      "city": "Bereina",
      "countryCode": "PG"
  },
  {
      "label": "BEB",
      "city": "Benbecula",
      "countryCode": "GB"
  },
  {
      "label": "BED",
      "city": "Bedford",
      "countryCode": "US"
  },
  {
      "label": "BEE",
      "city": "Beagle Bay",
      "countryCode": "AU"
  },
  {
      "label": "BEF",
      "city": "Bluefields",
      "countryCode": "NI"
  },
  {
      "label": "BEG",
      "city": "Belgrade",
      "countryCode": "YU"
  },
  {
      "label": "BEH",
      "city": "Benton Harbor",
      "countryCode": "US"
  },
  {
      "label": "BEI",
      "city": "Beica",
      "countryCode": "ET"
  },
  {
      "label": "BEJ",
      "city": "Berau",
      "countryCode": "ID"
  },
  {
      "label": "BEL",
      "city": "Belem",
      "countryCode": "BR"
  },
  {
      "label": "BEM",
      "city": "Bossembele",
      "countryCode": "CF"
  },
  {
      "label": "BEN",
      "city": "Benghazi",
      "countryCode": "LY"
  },
  {
      "label": "BEQ",
      "city": "Bury St Edmunds",
      "countryCode": "GB"
  },
  {
      "label": "BER",
      "city": "Berlin",
      "countryCode": "DE"
  },
  {
      "label": "BES",
      "city": "Brest",
      "countryCode": "FR"
  },
  {
      "label": "BET",
      "city": "Bethel",
      "countryCode": "US"
  },
  {
      "label": "BEU",
      "city": "Bedourie",
      "countryCode": "AU"
  },
  {
      "label": "BEV",
      "city": "Beer Sheba",
      "countryCode": "IL"
  },
  {
      "label": "BEW",
      "city": "Beira",
      "countryCode": "MZ"
  },
  {
      "label": "BEY",
      "city": "Beirut",
      "countryCode": "LB"
  },
  {
      "label": "BEZ",
      "city": "Beru",
      "countryCode": "KI"
  },
  {
      "label": "BFB",
      "city": "Blue Fox Bay",
      "countryCode": "US"
  },
  {
      "label": "BFC",
      "city": "Bloomfield",
      "countryCode": "AU"
  },
  {
      "label": "BFD",
      "city": "Bradford",
      "countryCode": "US"
  },
  {
      "label": "BFE",
      "city": "Bielefeld",
      "countryCode": "DE"
  },
  {
      "label": "BFF",
      "city": "Scottsbluff",
      "countryCode": "US"
  },
  {
      "label": "BFG",
      "city": "Bullfrog Basin",
      "countryCode": "US"
  },
  {
      "label": "BFH",
      "city": "Coritiba",
      "countryCode": "BR"
  },
  {
      "label": "BFI",
      "city": "Georgetown",
      "countryCode": "US"
  },
  {
      "label": "BFJ",
      "city": "Ba",
      "countryCode": "FJ"
  },
  {
      "label": "BFL",
      "city": "Bakersfield",
      "countryCode": "US"
  },
  {
      "label": "BFN",
      "city": "Bloemfontein",
      "countryCode": "ZA"
  },
  {
      "label": "BFO",
      "city": "Buffalo Range",
      "countryCode": "ZW"
  },
  {
      "label": "BFP",
      "city": "Beaver Falls",
      "countryCode": "US"
  },
  {
      "label": "BFR",
      "city": "Bedford",
      "countryCode": "US"
  },
  {
      "label": "BFS",
      "city": "Belfast",
      "countryCode": "GB"
  },
  {
      "label": "BFT",
      "city": "Beaufort",
      "countryCode": "US"
  },
  {
      "label": "BFU",
      "city": "Bengbu",
      "countryCode": "CN"
  },
  {
      "label": "BFV",
      "city": "Buri Ram",
      "countryCode": "TH"
  },
  {
      "label": "BFX",
      "city": "Bafoussam",
      "countryCode": "CM"
  },
  {
      "label": "BGA",
      "city": "Bucaramanga",
      "countryCode": "CO"
  },
  {
      "label": "BGB",
      "city": "Booue",
      "countryCode": "GA"
  },
  {
      "label": "BGC",
      "city": "Braganca",
      "countryCode": "PT"
  },
  {
      "label": "BGD",
      "city": "Borger",
      "countryCode": "US"
  },
  {
      "label": "BGE",
      "city": "Bainbridge",
      "countryCode": "US"
  },
  {
      "label": "BGF",
      "city": "Bangui",
      "countryCode": "CF"
  },
  {
      "label": "BGG",
      "city": "Bongouanou",
      "countryCode": "CI"
  },
  {
      "label": "BGH",
      "city": "Boghe",
      "countryCode": "MR"
  },
  {
      "label": "BGI",
      "city": "Bridgetown",
      "countryCode": "BB"
  },
  {
      "label": "BGJ",
      "city": "Borgarfjordur Eystri",
      "countryCode": "IS"
  },
  {
      "label": "BGK",
      "city": "Big Creek",
      "countryCode": "BZ"
  },
  {
      "label": "BGL",
      "city": "Baglung",
      "countryCode": "NP"
  },
  {
      "label": "BGM",
      "city": "Binghamton",
      "countryCode": "US"
  },
  {
      "label": "BGN",
      "city": "Brueggen",
      "countryCode": "DE"
  },
  {
      "label": "BGO",
      "city": "Bergen",
      "countryCode": "NO"
  },
  {
      "label": "BGP",
      "city": "Bongo",
      "countryCode": "GA"
  },
  {
      "label": "BGQ",
      "city": "Big Lake",
      "countryCode": "US"
  },
  {
      "label": "BGR",
      "city": "Bangor",
      "countryCode": "US"
  },
  {
      "label": "BGT",
      "city": "Bagdad",
      "countryCode": "US"
  },
  {
      "label": "BGU",
      "city": "Bangassou",
      "countryCode": "CF"
  },
  {
      "label": "BGV",
      "city": "Bento Goncalves",
      "countryCode": "BR"
  },
  {
      "label": "BGW",
      "city": "Baghdad",
      "countryCode": "IQ"
  },
  {
      "label": "BGX",
      "city": "Bage",
      "countryCode": "BR"
  },
  {
      "label": "BGZ",
      "city": "Braga",
      "countryCode": "PT"
  },
  {
      "label": "BHA",
      "city": "Bahia De Caraquez",
      "countryCode": "EC"
  },
  {
      "label": "BHB",
      "city": "Bar Harbour",
      "countryCode": "US"
  },
  {
      "label": "BHC",
      "city": "Bhurban",
      "countryCode": "PK"
  },
  {
      "label": "BHE",
      "city": "Blenheim",
      "countryCode": "NZ"
  },
  {
      "label": "BHF",
      "city": "Bahia Cupica",
      "countryCode": "CO"
  },
  {
      "label": "BHG",
      "city": "Brus Laguna",
      "countryCode": "HN"
  },
  {
      "label": "BHH",
      "city": "Bisha",
      "countryCode": "SA"
  },
  {
      "label": "BHI",
      "city": "Bahia Blanca",
      "countryCode": "AR"
  },
  {
      "label": "BHK",
      "city": "Bukhara",
      "countryCode": "UZ"
  },
  {
      "label": "BHL",
      "city": "Bahia Angeles",
      "countryCode": "MX"
  },
  {
      "label": "BHM",
      "city": "Birmingham",
      "countryCode": "US"
  },
  {
      "label": "BHN",
      "city": "Beihan",
      "countryCode": "YE"
  },
  {
      "label": "BHP",
      "city": "Bhojpur",
      "countryCode": "NP"
  },
  {
      "label": "BHQ",
      "city": "Broken Hill",
      "countryCode": "AU"
  },
  {
      "label": "BHR",
      "city": "Bharatpur",
      "countryCode": "NP"
  },
  {
      "label": "BHS",
      "city": "Bathurst",
      "countryCode": "AU"
  },
  {
      "label": "BHT",
      "city": "Brighton Downs",
      "countryCode": "AU"
  },
  {
      "label": "BHV",
      "city": "Bahawalpur",
      "countryCode": "PK"
  },
  {
      "label": "BHX",
      "city": "Birmingham",
      "countryCode": "GB"
  },
  {
      "label": "BHY",
      "city": "Beihai",
      "countryCode": "CN"
  },
  {
      "label": "BHZ",
      "city": "Belo Horizonte",
      "countryCode": "BR"
  },
  {
      "label": "BIA",
      "city": "Bastia",
      "countryCode": "FR"
  },
  {
      "label": "BIB",
      "city": "Baidoa",
      "countryCode": "SO"
  },
  {
      "label": "BIC",
      "city": "Big Creek",
      "countryCode": "US"
  },
  {
      "label": "BID",
      "city": "Block Island",
      "countryCode": "US"
  },
  {
      "label": "BIE",
      "city": "Beatrice",
      "countryCode": "US"
  },
  {
      "label": "BIG",
      "city": "Big Delta",
      "countryCode": "US"
  },
  {
      "label": "BIH",
      "city": "Bishop",
      "countryCode": "US"
  },
  {
      "label": "BII",
      "city": "Bikini Atoll",
      "countryCode": "MH"
  },
  {
      "label": "BIJ",
      "city": "Biliau",
      "countryCode": "PG"
  },
  {
      "label": "BIK",
      "city": "Biak",
      "countryCode": "ID"
  },
  {
      "label": "BIL",
      "city": "Billings",
      "countryCode": "US"
  },
  {
      "label": "BIM",
      "city": "Bimini",
      "countryCode": "BS"
  },
  {
      "label": "BIN",
      "city": "Bamiyan",
      "countryCode": "AF"
  },
  {
      "label": "BIO",
      "city": "Bilbao",
      "countryCode": "ES"
  },
  {
      "label": "BIP",
      "city": "Bulimba",
      "countryCode": "AU"
  },
  {
      "label": "BIQ",
      "city": "Biarritz",
      "countryCode": "FR"
  },
  {
      "label": "BIR",
      "city": "Biratnagar",
      "countryCode": "NP"
  },
  {
      "label": "BIS",
      "city": "Bismarck",
      "countryCode": "US"
  },
  {
      "label": "BIT",
      "city": "Baitadi",
      "countryCode": "NP"
  },
  {
      "label": "BIU",
      "city": "Bildudalur",
      "countryCode": "IS"
  },
  {
      "label": "BIV",
      "city": "Bria",
      "countryCode": "CF"
  },
  {
      "label": "BIW",
      "city": "Billiluna",
      "countryCode": "AU"
  },
  {
      "label": "BIY",
      "city": "Bisho",
      "countryCode": "ZA"
  },
  {
      "label": "BIZ",
      "city": "Bimin",
      "countryCode": "PG"
  },
  {
      "label": "BJA",
      "city": "Bejaia",
      "countryCode": "DZ"
  },
  {
      "label": "BJB",
      "city": "Bojnord",
      "countryCode": "IR"
  },
  {
      "label": "BJC",
      "city": "Broomfield",
      "countryCode": "US"
  },
  {
      "label": "BJD",
      "city": "Bakkafjordur",
      "countryCode": "IS"
  },
  {
      "label": "BJF",
      "city": "Batsfjord",
      "countryCode": "NO"
  },
  {
      "label": "BJG",
      "city": "Bolaang",
      "countryCode": "ID"
  },
  {
      "label": "BJH",
      "city": "Bajhang",
      "countryCode": "NP"
  },
  {
      "label": "BJI",
      "city": "Bemidji",
      "countryCode": "US"
  },
  {
      "label": "BJJ",
      "city": "Wooster",
      "countryCode": "US"
  },
  {
      "label": "BJK",
      "city": "Benjina",
      "countryCode": "ID"
  },
  {
      "label": "BJL",
      "city": "Banjul",
      "countryCode": "GM"
  },
  {
      "label": "BJM",
      "city": "Bujumbura",
      "countryCode": "BI"
  },
  {
      "label": "BJN",
      "city": "Bajone",
      "countryCode": "MZ"
  },
  {
      "label": "BJO",
      "city": "Bermejo",
      "countryCode": "BO"
  },
  {
      "label": "BJP",
      "city": "Braganca Paulista",
      "countryCode": "BR"
  },
  {
      "label": "BJR",
      "city": "Bahar Dar",
      "countryCode": "ET"
  },
  {
      "label": "BJS",
      "city": "Beijing",
      "countryCode": "CN"
  },
  {
      "label": "BJU",
      "city": "Bajura",
      "countryCode": "NP"
  },
  {
      "label": "BJW",
      "city": "Bajawa",
      "countryCode": "ID"
  },
  {
      "label": "BJX",
      "city": "Leon",
      "countryCode": "MX"
  },
  {
      "label": "BJZ",
      "city": "Badajoz",
      "countryCode": "ES"
  },
  {
      "label": "BKC",
      "city": "Buckland",
      "countryCode": "US"
  },
  {
      "label": "BKD",
      "city": "Breckenridge",
      "countryCode": "US"
  },
  {
      "label": "BKE",
      "city": "Baker",
      "countryCode": "US"
  },
  {
      "label": "BKF",
      "city": "Brooks Lake",
      "countryCode": "US"
  },
  {
      "label": "BKG",
      "city": "Branson",
      "countryCode": "US"
  },
  {
      "label": "BKH",
      "city": "Kekaha",
      "countryCode": "US"
  },
  {
      "label": "BKI",
      "city": "Kota Kinabalu",
      "countryCode": "MY"
  },
  {
      "label": "BKJ",
      "city": "Boke",
      "countryCode": "GN"
  },
  {
      "label": "BKK",
      "city": "Bangkok",
      "countryCode": "TH"
  },
  {
      "label": "BKM",
      "city": "Bakalalan",
      "countryCode": "MY"
  },
  {
      "label": "BKN",
      "city": "Birni Nkoni",
      "countryCode": "NE"
  },
  {
      "label": "BKO",
      "city": "Bamako",
      "countryCode": "ML"
  },
  {
      "label": "BKP",
      "city": "Barkly Downs",
      "countryCode": "AU"
  },
  {
      "label": "BKQ",
      "city": "Blackall",
      "countryCode": "AU"
  },
  {
      "label": "BKR",
      "city": "Bokoro",
      "countryCode": "TD"
  },
  {
      "label": "BKS",
      "city": "Bengkulu",
      "countryCode": "ID"
  },
  {
      "label": "BKT",
      "city": "Blackstone",
      "countryCode": "US"
  },
  {
      "label": "BKU",
      "city": "Betioky",
      "countryCode": "MG"
  },
  {
      "label": "BKW",
      "city": "Beckley",
      "countryCode": "US"
  },
  {
      "label": "BKX",
      "city": "Brookings",
      "countryCode": "US"
  },
  {
      "label": "BKY",
      "city": "Bukavu",
      "countryCode": "CD"
  },
  {
      "label": "BKZ",
      "city": "Bukoba",
      "countryCode": "TZ"
  },
  {
      "label": "BLA",
      "city": "Barcelona",
      "countryCode": "VE"
  },
  {
      "label": "BLB",
      "city": "Balboa",
      "countryCode": "PA"
  },
  {
      "label": "BLC",
      "city": "Bali",
      "countryCode": "CM"
  },
  {
      "label": "BLD",
      "city": "Boulder City",
      "countryCode": "US"
  },
  {
      "label": "BLE",
      "city": "Borlange",
      "countryCode": "SE"
  },
  {
      "label": "BLF",
      "city": "Bluefield",
      "countryCode": "US"
  },
  {
      "label": "BLG",
      "city": "Belaga",
      "countryCode": "MY"
  },
  {
      "label": "BLH",
      "city": "Blythe",
      "countryCode": "US"
  },
  {
      "label": "BLI",
      "city": "Bellingham",
      "countryCode": "US"
  },
  {
      "label": "BLJ",
      "city": "Batna",
      "countryCode": "DZ"
  },
  {
      "label": "BLK",
      "city": "Blackpool",
      "countryCode": "GB"
  },
  {
      "label": "BLL",
      "city": "Billund",
      "countryCode": "DK"
  },
  {
      "label": "BLM",
      "city": "Belmar",
      "countryCode": "US"
  },
  {
      "label": "BLN",
      "city": "Benalla",
      "countryCode": "AU"
  },
  {
      "label": "BLO",
      "city": "Blonduos",
      "countryCode": "IS"
  },
  {
      "label": "BLP",
      "city": "Bellavista",
      "countryCode": "PE"
  },
  {
      "label": "BLQ",
      "city": "Bologna",
      "countryCode": "IT"
  },
  {
      "label": "BLS",
      "city": "Bollon",
      "countryCode": "AU"
  },
  {
      "label": "BLT",
      "city": "Blackwater",
      "countryCode": "AU"
  },
  {
      "label": "BLU",
      "city": "Blue Canyon",
      "countryCode": "US"
  },
  {
      "label": "BLW",
      "city": "Waimanalo",
      "countryCode": "US"
  },
  {
      "label": "BLX",
      "city": "Belluno",
      "countryCode": "IT"
  },
  {
      "label": "BLY",
      "city": "Belmullet",
      "countryCode": "IE"
  },
  {
      "label": "BLZ",
      "city": "Blantyre",
      "countryCode": "MW"
  },
  {
      "label": "BMB",
      "city": "Bumba",
      "countryCode": "CD"
  },
  {
      "label": "BMC",
      "city": "Brigham City",
      "countryCode": "US"
  },
  {
      "label": "BMD",
      "city": "Belo",
      "countryCode": "MG"
  },
  {
      "label": "BME",
      "city": "Broome",
      "countryCode": "AU"
  },
  {
      "label": "BMF",
      "city": "Bakouma",
      "countryCode": "CF"
  },
  {
      "label": "BMG",
      "city": "Bloomington",
      "countryCode": "US"
  },
  {
      "label": "BMH",
      "city": "Bomai",
      "countryCode": "PG"
  },
  {
      "label": "BMI",
      "city": "Bloomington Normal",
      "countryCode": "US"
  },
  {
      "label": "BMJ",
      "city": "Baramita",
      "countryCode": "GY"
  },
  {
      "label": "BMK",
      "city": "Borkum",
      "countryCode": "DE"
  },
  {
      "label": "BML",
      "city": "Berlin",
      "countryCode": "US"
  },
  {
      "label": "BMM",
      "city": "Bitam",
      "countryCode": "GA"
  },
  {
      "label": "BMN",
      "city": "Bamerny",
      "countryCode": "IQ"
  },
  {
      "label": "BMO",
      "city": "Bhamo",
      "countryCode": "MM"
  },
  {
      "label": "BMP",
      "city": "Brampton Island",
      "countryCode": "AU"
  },
  {
      "label": "BMQ",
      "city": "Bamburi",
      "countryCode": "KE"
  },
  {
      "label": "BMR",
      "city": "Baltrum",
      "countryCode": "DE"
  },
  {
      "label": "BMS",
      "city": "Brumado",
      "countryCode": "BR"
  },
  {
      "label": "BMU",
      "city": "Bima",
      "countryCode": "ID"
  },
  {
      "label": "BMV",
      "city": "Banmethuot",
      "countryCode": "VN"
  },
  {
      "label": "BMW",
      "city": "Bordj Badji Mokht",
      "countryCode": "DZ"
  },
  {
      "label": "BMX",
      "city": "Big Mountain",
      "countryCode": "US"
  },
  {
      "label": "BMY",
      "city": "Belep Island",
      "countryCode": "NC"
  },
  {
      "label": "BMZ",
      "city": "Bamu",
      "countryCode": "PG"
  },
  {
      "label": "BNA",
      "city": "Nashville",
      "countryCode": "US"
  },
  {
      "label": "BNB",
      "city": "Boende",
      "countryCode": "CD"
  },
  {
      "label": "BNC",
      "city": "Beni",
      "countryCode": "CD"
  },
  {
      "label": "BND",
      "city": "Bandar Abbas",
      "countryCode": "IR"
  },
  {
      "label": "BNE",
      "city": "Brisbane",
      "countryCode": "AU"
  },
  {
      "label": "BNG",
      "city": "Banning",
      "countryCode": "US"
  },
  {
      "label": "BNI",
      "city": "Benin City",
      "countryCode": "NG"
  },
  {
      "label": "BNJ",
      "city": "Bonn",
      "countryCode": "DE"
  },
  {
      "label": "BNK",
      "city": "Ballina",
      "countryCode": "AU"
  },
  {
      "label": "BNL",
      "city": "Barnwell",
      "countryCode": "US"
  },
  {
      "label": "BNM",
      "city": "Bodinumu",
      "countryCode": "PG"
  },
  {
      "label": "BNN",
      "city": "Bronnoysund",
      "countryCode": "NO"
  },
  {
      "label": "BNO",
      "city": "Burns",
      "countryCode": "US"
  },
  {
      "label": "BNP",
      "city": "Bannu",
      "countryCode": "PK"
  },
  {
      "label": "BNQ",
      "city": "Baganga",
      "countryCode": "PH"
  },
  {
      "label": "BNR",
      "city": "Banfora",
      "countryCode": "BF"
  },
  {
      "label": "BNS",
      "city": "Barinas",
      "countryCode": "VE"
  },
  {
      "label": "BNT",
      "city": "Bundi",
      "countryCode": "PG"
  },
  {
      "label": "BNU",
      "city": "Blumenau",
      "countryCode": "BR"
  },
  {
      "label": "BNV",
      "city": "Boana",
      "countryCode": "PG"
  },
  {
      "label": "BNW",
      "city": "Boone",
      "countryCode": "US"
  },
  {
      "label": "BNX",
      "city": "Banja Luka",
      "countryCode": "BA"
  },
  {
      "label": "BNY",
      "city": "Bellona",
      "countryCode": "SB"
  },
  {
      "label": "BNZ",
      "city": "Banz",
      "countryCode": "PG"
  },
  {
      "label": "BOA",
      "city": "Boma",
      "countryCode": "CD"
  },
  {
      "label": "BOB",
      "city": "Bora Bora",
      "countryCode": "PF"
  },
  {
      "label": "BOC",
      "city": "Bocas Del Toro",
      "countryCode": "PA"
  },
  {
      "label": "BOD",
      "city": "Bordeaux",
      "countryCode": "FR"
  },
  {
      "label": "BOE",
      "city": "Boundji",
      "countryCode": "CG"
  },
  {
      "label": "BOG",
      "city": "Bogota",
      "countryCode": "CO"
  },
  {
      "label": "BOH",
      "city": "Bournemouth",
      "countryCode": "GB"
  },
  {
      "label": "BOI",
      "city": "Boise",
      "countryCode": "US"
  },
  {
      "label": "BOJ",
      "city": "Bourgas",
      "countryCode": "BG"
  },
  {
      "label": "BOK",
      "city": "Brookings",
      "countryCode": "US"
  },
  {
      "label": "BOL",
      "city": "Bally Kelly",
      "countryCode": "GB"
  },
  {
      "label": "BON",
      "city": "Bonaire",
      "countryCode": "AN"
  },
  {
      "label": "BOO",
      "city": "Bodo",
      "countryCode": "NO"
  },
  {
      "label": "BOP",
      "city": "Bouar",
      "countryCode": "CF"
  },
  {
      "label": "BOQ",
      "city": "Boku",
      "countryCode": "PG"
  },
  {
      "label": "BOR",
      "city": "Belfort",
      "countryCode": "FR"
  },
  {
      "label": "BOS",
      "city": "Boston",
      "countryCode": "US"
  },
  {
      "label": "BOT",
      "city": "Boset",
      "countryCode": "PG"
  },
  {
      "label": "BOU",
      "city": "Bourges",
      "countryCode": "FR"
  },
  {
      "label": "BOV",
      "city": "Boang",
      "countryCode": "PG"
  },
  {
      "label": "BOW",
      "city": "Bartow",
      "countryCode": "US"
  },
  {
      "label": "BOX",
      "city": "Borroloola",
      "countryCode": "AU"
  },
  {
      "label": "BOY",
      "city": "Bobo Dioulasso",
      "countryCode": "BF"
  },
  {
      "label": "BOZ",
      "city": "Bozoum",
      "countryCode": "CF"
  },
  {
      "label": "BPA",
      "city": "Bethpage",
      "countryCode": "US"
  },
  {
      "label": "BPB",
      "city": "Boridi",
      "countryCode": "PG"
  },
  {
      "label": "BPC",
      "city": "Bamenda",
      "countryCode": "CM"
  },
  {
      "label": "BPD",
      "city": "Bapi",
      "countryCode": "PG"
  },
  {
      "label": "BPE",
      "city": "Bagan Mm",
      "countryCode": "MM"
  },
  {
      "label": "BPF",
      "city": "Batuna",
      "countryCode": "SB"
  },
  {
      "label": "BPG",
      "city": "Barra Do Garcas",
      "countryCode": "BR"
  },
  {
      "label": "BPH",
      "city": "Bislig",
      "countryCode": "PH"
  },
  {
      "label": "BPI",
      "city": "Big Piney",
      "countryCode": "US"
  },
  {
      "label": "BPN",
      "city": "Balikpapan",
      "countryCode": "ID"
  },
  {
      "label": "BPR",
      "city": "Borongan",
      "countryCode": "PH"
  },
  {
      "label": "BPS",
      "city": "Porto Seguro",
      "countryCode": "BR"
  },
  {
      "label": "BPT",
      "city": "Beaumont",
      "countryCode": "US"
  },
  {
      "label": "BPU",
      "city": "Beppu",
      "countryCode": "JP"
  },
  {
      "label": "BPX",
      "city": "Bangda",
      "countryCode": "CN"
  },
  {
      "label": "BPY",
      "city": "Besalampy",
      "countryCode": "MG"
  },
  {
      "label": "BQA",
      "city": "Baler",
      "countryCode": "PH"
  },
  {
      "label": "BQB",
      "city": "Busselton",
      "countryCode": "AU"
  },
  {
      "label": "BQE",
      "city": "Bubaque",
      "countryCode": "GW"
  },
  {
      "label": "BQH",
      "city": "Biggin Hill",
      "countryCode": "GB"
  },
  {
      "label": "BQI",
      "city": "Bagani",
      "countryCode": "NA"
  },
  {
      "label": "BQL",
      "city": "Boulia",
      "countryCode": "AU"
  },
  {
      "label": "BQN",
      "city": "Aguadilla",
      "countryCode": "PR"
  },
  {
      "label": "BQO",
      "city": "Bouna",
      "countryCode": "CI"
  },
  {
      "label": "BQQ",
      "city": "Barra",
      "countryCode": "BR"
  },
  {
      "label": "BQS",
      "city": "Blagoveschensk",
      "countryCode": "RU"
  },
  {
      "label": "BQT",
      "city": "Brest",
      "countryCode": "BY"
  },
  {
      "label": "BQU",
      "city": "Port Elizabeth",
      "countryCode": "VC"
  },
  {
      "label": "BQW",
      "city": "Balgo Hills",
      "countryCode": "AU"
  },
  {
      "label": "BRA",
      "city": "Barreiras",
      "countryCode": "BR"
  },
  {
      "label": "BRB",
      "city": "Barreirinhas",
      "countryCode": "BR"
  },
  {
      "label": "BRC",
      "city": "Bariloche",
      "countryCode": "AR"
  },
  {
      "label": "BRD",
      "city": "Brainerd",
      "countryCode": "US"
  },
  {
      "label": "BRE",
      "city": "Bremen",
      "countryCode": "DE"
  },
  {
      "label": "BRF",
      "city": "Bradford",
      "countryCode": "GB"
  },
  {
      "label": "BRG",
      "city": "Whitesburg",
      "countryCode": "US"
  },
  {
      "label": "BRH",
      "city": "Brahman",
      "countryCode": "PG"
  },
  {
      "label": "BRI",
      "city": "Bari",
      "countryCode": "IT"
  },
  {
      "label": "BRJ",
      "city": "Bright",
      "countryCode": "AU"
  },
  {
      "label": "BRK",
      "city": "Bourke",
      "countryCode": "AU"
  },
  {
      "label": "BRL",
      "city": "Burlington",
      "countryCode": "US"
  },
  {
      "label": "BRM",
      "city": "Barquisimeto",
      "countryCode": "VE"
  },
  {
      "label": "BRN",
      "city": "Berne",
      "countryCode": "CH"
  },
  {
      "label": "BRO",
      "city": "Brownsville",
      "countryCode": "US"
  },
  {
      "label": "BRP",
      "city": "Biaru",
      "countryCode": "PG"
  },
  {
      "label": "BRQ",
      "city": "Brno",
      "countryCode": "CZ"
  },
  {
      "label": "BRR",
      "city": "Barra",
      "countryCode": "GB"
  },
  {
      "label": "BRS",
      "city": "Bristol",
      "countryCode": "GB"
  },
  {
      "label": "BRT",
      "city": "Bathurst Island",
      "countryCode": "AU"
  },
  {
      "label": "BRU",
      "city": "Brussels",
      "countryCode": "BE"
  },
  {
      "label": "BRV",
      "city": "Bremerhaven",
      "countryCode": "DE"
  },
  {
      "label": "BRW",
      "city": "Barrow",
      "countryCode": "US"
  },
  {
      "label": "BRX",
      "city": "Barahona",
      "countryCode": "DO"
  },
  {
      "label": "BRY",
      "city": "Bardstown",
      "countryCode": "US"
  },
  {
      "label": "BRZ",
      "city": "Borotou",
      "countryCode": "CI"
  },
  {
      "label": "BSA",
      "city": "Bossaso",
      "countryCode": "SO"
  },
  {
      "label": "BSB",
      "city": "Brasilia",
      "countryCode": "BR"
  },
  {
      "label": "BSC",
      "city": "Bahia Solano",
      "countryCode": "CO"
  },
  {
      "label": "BSD",
      "city": "Baoshan",
      "countryCode": "CN"
  },
  {
      "label": "BSE",
      "city": "Sematan",
      "countryCode": "MY"
  },
  {
      "label": "BSF",
      "city": "Pohakuloa",
      "countryCode": "US"
  },
  {
      "label": "BSG",
      "city": "Bata",
      "countryCode": "GQ"
  },
  {
      "label": "BSH",
      "city": "Brighton",
      "countryCode": "GB"
  },
  {
      "label": "BSI",
      "city": "Blairsville",
      "countryCode": "US"
  },
  {
      "label": "BSJ",
      "city": "Bairnsdale",
      "countryCode": "AU"
  },
  {
      "label": "BSK",
      "city": "Biskra",
      "countryCode": "DZ"
  },
  {
      "label": "BSL",
      "city": "Mulhouse/Basel",
      "countryCode": "SZ"
  },
  {
      "label": "BSN",
      "city": "Bossangoa",
      "countryCode": "CF"
  },
  {
      "label": "BSO",
      "city": "Basco",
      "countryCode": "PH"
  },
  {
      "label": "BSP",
      "city": "Bensbach",
      "countryCode": "PG"
  },
  {
      "label": "BSQ",
      "city": "Bisbee",
      "countryCode": "US"
  },
  {
      "label": "BSR",
      "city": "Basra",
      "countryCode": "IQ"
  },
  {
      "label": "BSS",
      "city": "Balsas",
      "countryCode": "BR"
  },
  {
      "label": "BST",
      "city": "Bost",
      "countryCode": "AF"
  },
  {
      "label": "BSU",
      "city": "Basankusu",
      "countryCode": "CD"
  },
  {
      "label": "BSV",
      "city": "Besakoa",
      "countryCode": "MG"
  },
  {
      "label": "BSW",
      "city": "Boswell Bay",
      "countryCode": "US"
  },
  {
      "label": "BSX",
      "city": "Bassein",
      "countryCode": "MM"
  },
  {
      "label": "BSY",
      "city": "Bardera",
      "countryCode": "SO"
  },
  {
      "label": "BSZ",
      "city": "Bartletts",
      "countryCode": "US"
  },
  {
      "label": "BTA",
      "city": "Bertoua",
      "countryCode": "CM"
  },
  {
      "label": "BTB",
      "city": "Betou",
      "countryCode": "CG"
  },
  {
      "label": "BTC",
      "city": "Batticaloa",
      "countryCode": "LK"
  },
  {
      "label": "BTD",
      "city": "Brunette Downs",
      "countryCode": "AU"
  },
  {
      "label": "BTE",
      "city": "Bonthe",
      "countryCode": "SL"
  },
  {
      "label": "BTF",
      "city": "Bountiful",
      "countryCode": "US"
  },
  {
      "label": "BTG",
      "city": "Batangafo",
      "countryCode": "CF"
  },
  {
      "label": "BTH",
      "city": "Batu Besar",
      "countryCode": "ID"
  },
  {
      "label": "BTI",
      "city": "Barter Island",
      "countryCode": "US"
  },
  {
      "label": "BTJ",
      "city": "Banda Aceh",
      "countryCode": "ID"
  },
  {
      "label": "BTK",
      "city": "Bratsk",
      "countryCode": "RU"
  },
  {
      "label": "BTL",
      "city": "Battle Creek",
      "countryCode": "US"
  },
  {
      "label": "BTM",
      "city": "Butte",
      "countryCode": "US"
  },
  {
      "label": "BTN",
      "city": "Bennettsville",
      "countryCode": "US"
  },
  {
      "label": "BTO",
      "city": "Botopasie",
      "countryCode": "SR"
  },
  {
      "label": "BTP",
      "city": "Butler",
      "countryCode": "US"
  },
  {
      "label": "BTQ",
      "city": "Butare",
      "countryCode": "RW"
  },
  {
      "label": "BTR",
      "city": "Baton Rouge",
      "countryCode": "US"
  },
  {
      "label": "BTS",
      "city": "Bratislava",
      "countryCode": "SK"
  },
  {
      "label": "BTT",
      "city": "Bettles",
      "countryCode": "US"
  },
  {
      "label": "BTU",
      "city": "Bintulu",
      "countryCode": "MY"
  },
  {
      "label": "BTV",
      "city": "Burlington",
      "countryCode": "US"
  },
  {
      "label": "BTW",
      "city": "Batu Licin",
      "countryCode": "ID"
  },
  {
      "label": "BTX",
      "city": "Betoota",
      "countryCode": "AU"
  },
  {
      "label": "BTY",
      "city": "Beatty",
      "countryCode": "US"
  },
  {
      "label": "BTZ",
      "city": "Bursa",
      "countryCode": "TR"
  },
  {
      "label": "BUA",
      "city": "Buka",
      "countryCode": "PG"
  },
  {
      "label": "BUB",
      "city": "Burwell",
      "countryCode": "US"
  },
  {
      "label": "BUC",
      "city": "Burketown",
      "countryCode": "AU"
  },
  {
      "label": "BUD",
      "city": "Budapest",
      "countryCode": "HU"
  },
  {
      "label": "BUE",
      "city": "Buenos Aires",
      "countryCode": "AR"
  },
  {
      "label": "BUF",
      "city": "Buffalo",
      "countryCode": "US"
  },
  {
      "label": "BUG",
      "city": "Benguela",
      "countryCode": "AO"
  },
  {
      "label": "BUH",
      "city": "Bucharest",
      "countryCode": "RO"
  },
  {
      "label": "BUI",
      "city": "Bokondini",
      "countryCode": "ID"
  },
  {
      "label": "BUJ",
      "city": "Boussaada",
      "countryCode": "DZ"
  },
  {
      "label": "BUK",
      "city": "Albuq",
      "countryCode": "YE"
  },
  {
      "label": "BUL",
      "city": "Bulolo",
      "countryCode": "PG"
  },
  {
      "label": "BUM",
      "city": "Butler",
      "countryCode": "US"
  },
  {
      "label": "BUN",
      "city": "Buenaventura",
      "countryCode": "CO"
  },
  {
      "label": "BUO",
      "city": "Burao",
      "countryCode": "SO"
  },
  {
      "label": "BUQ",
      "city": "Bulawayo",
      "countryCode": "ZW"
  },
  {
      "label": "BUR",
      "city": "Burbank",
      "countryCode": "US"
  },
  {
      "label": "BUS",
      "city": "Batumi",
      "countryCode": "GE"
  },
  {
      "label": "BUT",
      "city": "Burtonwood",
      "countryCode": "GB"
  },
  {
      "label": "BUU",
      "city": "Buyo",
      "countryCode": "CI"
  },
  {
      "label": "BUV",
      "city": "Bella Union",
      "countryCode": "UY"
  },
  {
      "label": "BUW",
      "city": "Baubau",
      "countryCode": "ID"
  },
  {
      "label": "BUX",
      "city": "Bunia",
      "countryCode": "CD"
  },
  {
      "label": "BUY",
      "city": "Bunbury",
      "countryCode": "AU"
  },
  {
      "label": "BUZ",
      "city": "Bushehr",
      "countryCode": "IR"
  },
  {
      "label": "BVB",
      "city": "Boa Vista",
      "countryCode": "BR"
  },
  {
      "label": "BVC",
      "city": "Boa Vista",
      "countryCode": "CV"
  },
  {
      "label": "BVD",
      "city": "Beaver Inlet",
      "countryCode": "US"
  },
  {
      "label": "BVE",
      "city": "Brive La Gaillard",
      "countryCode": "FR"
  },
  {
      "label": "BVF",
      "city": "Bua",
      "countryCode": "FJ"
  },
  {
      "label": "BVG",
      "city": "Berlevag",
      "countryCode": "NO"
  },
  {
      "label": "BVH",
      "city": "Vilhena",
      "countryCode": "BR"
  },
  {
      "label": "BVI",
      "city": "Birdsville",
      "countryCode": "AU"
  },
  {
      "label": "BVK",
      "city": "Huacaraje",
      "countryCode": "BO"
  },
  {
      "label": "BVL",
      "city": "Baures",
      "countryCode": "BO"
  },
  {
      "label": "BVM",
      "city": "Belmonte",
      "countryCode": "BR"
  },
  {
      "label": "BVO",
      "city": "Bartlesville",
      "countryCode": "US"
  },
  {
      "label": "BVP",
      "city": "Bolovip",
      "countryCode": "PG"
  },
  {
      "label": "BVR",
      "city": "Brava",
      "countryCode": "CV"
  },
  {
      "label": "BVS",
      "city": "Breves",
      "countryCode": "BR"
  },
  {
      "label": "BVU",
      "city": "Beluga",
      "countryCode": "US"
  },
  {
      "label": "BVW",
      "city": "Batavia Downs",
      "countryCode": "AU"
  },
  {
      "label": "BVX",
      "city": "Batesville",
      "countryCode": "US"
  },
  {
      "label": "BVY",
      "city": "Beverly",
      "countryCode": "US"
  },
  {
      "label": "BVZ",
      "city": "Beverley Springs",
      "countryCode": "AU"
  },
  {
      "label": "BWA",
      "city": "Bhairawa",
      "countryCode": "NP"
  },
  {
      "label": "BWB",
      "city": "Barrow Island",
      "countryCode": "AU"
  },
  {
      "label": "BWC",
      "city": "Brawley",
      "countryCode": "US"
  },
  {
      "label": "BWD",
      "city": "Brownwood",
      "countryCode": "US"
  },
  {
      "label": "BWE",
      "city": "Braunschweig",
      "countryCode": "DE"
  },
  {
      "label": "BWF",
      "city": "Barrow In Furness",
      "countryCode": "GB"
  },
  {
      "label": "BWG",
      "city": "Bowling Green",
      "countryCode": "US"
  },
  {
      "label": "BWJ",
      "city": "Bawan",
      "countryCode": "PG"
  },
  {
      "label": "BWK",
      "city": "Bol",
      "countryCode": "HR"
  },
  {
      "label": "BWL",
      "city": "Blackwell",
      "countryCode": "US"
  },
  {
      "label": "BWM",
      "city": "Bowman",
      "countryCode": "US"
  },
  {
      "label": "BWN",
      "city": "Bandar Seri Begawan",
      "countryCode": "BN"
  },
  {
      "label": "BWO",
      "city": "Balakovo",
      "countryCode": "RU"
  },
  {
      "label": "BWP",
      "city": "Bewani",
      "countryCode": "PG"
  },
  {
      "label": "BWQ",
      "city": "Brewarrina",
      "countryCode": "AU"
  },
  {
      "label": "BWS",
      "city": "Blaine",
      "countryCode": "US"
  },
  {
      "label": "BWT",
      "city": "Burnie",
      "countryCode": "AU"
  },
  {
      "label": "BWU",
      "city": "Bankstown",
      "countryCode": "AU"
  },
  {
      "label": "BWY",
      "city": "Woodbridge",
      "countryCode": "GB"
  },
  {
      "label": "BXA",
      "city": "Bogalusa",
      "countryCode": "US"
  },
  {
      "label": "BXB",
      "city": "Babo",
      "countryCode": "ID"
  },
  {
      "label": "BXC",
      "city": "Boxborough",
      "countryCode": "US"
  },
  {
      "label": "BXD",
      "city": "Bade",
      "countryCode": "ID"
  },
  {
      "label": "BXE",
      "city": "Bakel",
      "countryCode": "SN"
  },
  {
      "label": "BXH",
      "city": "Balhash",
      "countryCode": "KZ"
  },
  {
      "label": "BXI",
      "city": "Boundiali",
      "countryCode": "CI"
  },
  {
      "label": "BXJ",
      "city": "Burundai",
      "countryCode": "KZ"
  },
  {
      "label": "BXK",
      "city": "Buckeye",
      "countryCode": "US"
  },
  {
      "label": "BXL",
      "city": "Blue Lagoon",
      "countryCode": "FJ"
  },
  {
      "label": "BXM",
      "city": "Batom",
      "countryCode": "ID"
  },
  {
      "label": "BXN",
      "city": "Bodrum",
      "countryCode": "TR"
  },
  {
      "label": "BXR",
      "city": "Bam",
      "countryCode": "IR"
  },
  {
      "label": "BXS",
      "city": "Borrego Springs",
      "countryCode": "US"
  },
  {
      "label": "BXT",
      "city": "Bontang",
      "countryCode": "ID"
  },
  {
      "label": "BXU",
      "city": "Butuan",
      "countryCode": "PH"
  },
  {
      "label": "BXV",
      "city": "Breiddalsvik",
      "countryCode": "IS"
  },
  {
      "label": "BXX",
      "city": "Borama",
      "countryCode": "SO"
  },
  {
      "label": "BXZ",
      "city": "Bunsil",
      "countryCode": "PG"
  },
  {
      "label": "BYA",
      "city": "Boundary",
      "countryCode": "US"
  },
  {
      "label": "BYB",
      "city": "Dibaa",
      "countryCode": "OM"
  },
  {
      "label": "BYC",
      "city": "Yacuiba",
      "countryCode": "BO"
  },
  {
      "label": "BYD",
      "city": "Beidah",
      "countryCode": "YE"
  },
  {
      "label": "BYG",
      "city": "Buffalo",
      "countryCode": "US"
  },
  {
      "label": "BYH",
      "city": "Blytheville",
      "countryCode": "US"
  },
  {
      "label": "BYI",
      "city": "Burley",
      "countryCode": "US"
  },
  {
      "label": "BYK",
      "city": "Bouake",
      "countryCode": "CI"
  },
  {
      "label": "BYL",
      "city": "Bella Yella",
      "countryCode": "LR"
  },
  {
      "label": "BYM",
      "city": "Bayamo",
      "countryCode": "CU"
  },
  {
      "label": "BYN",
      "city": "Bayankhongor",
      "countryCode": "MN"
  },
  {
      "label": "BYO",
      "city": "Bonito",
      "countryCode": "BR"
  },
  {
      "label": "BYQ",
      "city": "Bunyu",
      "countryCode": "ID"
  },
  {
      "label": "BYR",
      "city": "Laeso",
      "countryCode": "DK"
  },
  {
      "label": "BYS",
      "city": "Fort Irwin",
      "countryCode": "US"
  },
  {
      "label": "BYT",
      "city": "Bantry",
      "countryCode": "IE"
  },
  {
      "label": "BYU",
      "city": "Bayreuth",
      "countryCode": "DE"
  },
  {
      "label": "BYW",
      "city": "Blakely Island",
      "countryCode": "US"
  },
  {
      "label": "BYX",
      "city": "Baniyala",
      "countryCode": "AU"
  },
  {
      "label": "BZA",
      "city": "Bonanza",
      "countryCode": "NI"
  },
  {
      "label": "BZB",
      "city": "Bazaruto Island",
      "countryCode": "MZ"
  },
  {
      "label": "BZC",
      "city": "Buzios",
      "countryCode": "BR"
  },
  {
      "label": "BZD",
      "city": "Balranald",
      "countryCode": "AU"
  },
  {
      "label": "BZE",
      "city": "Belize City",
      "countryCode": "BZ"
  },
  {
      "label": "BZG",
      "city": "Bydgoszcz",
      "countryCode": "PL"
  },
  {
      "label": "BZH",
      "city": "Bumi Hills",
      "countryCode": "ZW"
  },
  {
      "label": "BZI",
      "city": "Balikesir",
      "countryCode": "TR"
  },
  {
      "label": "BZK",
      "city": "Briansk",
      "countryCode": "RU"
  },
  {
      "label": "BZL",
      "city": "Barisal",
      "countryCode": "BD"
  },
  {
      "label": "BZM",
      "city": "Bergen Op Zoom",
      "countryCode": "NL"
  },
  {
      "label": "BZN",
      "city": "Bozeman",
      "countryCode": "US"
  },
  {
      "label": "BZO",
      "city": "Bolzano",
      "countryCode": "IT"
  },
  {
      "label": "BZP",
      "city": "Bizant",
      "countryCode": "AU"
  },
  {
      "label": "BZR",
      "city": "Beziers",
      "countryCode": "FR"
  },
  {
      "label": "BZT",
      "city": "Brazoria",
      "countryCode": "US"
  },
  {
      "label": "BZU",
      "city": "Buta",
      "countryCode": "CD"
  },
  {
      "label": "BZV",
      "city": "Brazzaville",
      "countryCode": "CG"
  },
  {
      "label": "BZY",
      "city": "Beltsy",
      "countryCode": "MD"
  },
  {
      "label": "CAA",
      "city": "Catacamas",
      "countryCode": "HN"
  },
  {
      "label": "CAB",
      "city": "Cabinda",
      "countryCode": "AO"
  },
  {
      "label": "CAC",
      "city": "Cascavel",
      "countryCode": "BR"
  },
  {
      "label": "CAD",
      "city": "Cadillac",
      "countryCode": "US"
  },
  {
      "label": "CAE",
      "city": "Columbia",
      "countryCode": "US"
  },
  {
      "label": "CAF",
      "city": "Carauari",
      "countryCode": "BR"
  },
  {
      "label": "CAG",
      "city": "Cagliari",
      "countryCode": "IT"
  },
  {
      "label": "CAH",
      "city": "Ca Mau",
      "countryCode": "VN"
  },
  {
      "label": "CAI",
      "city": "Cairo",
      "countryCode": "EG"
  },
  {
      "label": "CAJ",
      "city": "Canaima",
      "countryCode": "VE"
  },
  {
      "label": "CAK",
      "city": "Akron Canton",
      "countryCode": "US"
  },
  {
      "label": "CAL",
      "city": "Campbeltown",
      "countryCode": "GB"
  },
  {
      "label": "CAM",
      "city": "Camiri",
      "countryCode": "BO"
  },
  {
      "label": "CAN",
      "city": "Guangzhou",
      "countryCode": "CN"
  },
  {
      "label": "CAO",
      "city": "Clayton",
      "countryCode": "US"
  },
  {
      "label": "CAP",
      "city": "Cap Haitien",
      "countryCode": "HT"
  },
  {
      "label": "CAQ",
      "city": "Caucasia",
      "countryCode": "CO"
  },
  {
      "label": "CAR",
      "city": "Caribou",
      "countryCode": "US"
  },
  {
      "label": "CAS",
      "city": "Casablanca",
      "countryCode": "MA"
  },
  {
      "label": "CAT",
      "city": "Cat Island",
      "countryCode": "BS"
  },
  {
      "label": "CAU",
      "city": "Caruaru",
      "countryCode": "BR"
  },
  {
      "label": "CAV",
      "city": "Cazombo",
      "countryCode": "AO"
  },
  {
      "label": "CAW",
      "city": "Campos",
      "countryCode": "BR"
  },
  {
      "label": "CAX",
      "city": "Carlisle",
      "countryCode": "GB"
  },
  {
      "label": "CAY",
      "city": "Cayenne",
      "countryCode": "GF"
  },
  {
      "label": "CAZ",
      "city": "Cobar",
      "countryCode": "AU"
  },
  {
      "label": "CBA",
      "city": "Corner Bay",
      "countryCode": "US"
  },
  {
      "label": "CBB",
      "city": "Cochabamba",
      "countryCode": "BO"
  },
  {
      "label": "CBC",
      "city": "Cherrabun",
      "countryCode": "AU"
  },
  {
      "label": "CBE",
      "city": "Cumberland",
      "countryCode": "US"
  },
  {
      "label": "CBF",
      "city": "Council Bluffs",
      "countryCode": "US"
  },
  {
      "label": "CBG",
      "city": "Cambridge",
      "countryCode": "GB"
  },
  {
      "label": "CBH",
      "city": "Bechar",
      "countryCode": "DZ"
  },
  {
      "label": "CBI",
      "city": "Cape Barren",
      "countryCode": "AU"
  },
  {
      "label": "CBJ",
      "city": "Cabo Rojo",
      "countryCode": "DO"
  },
  {
      "label": "CBK",
      "city": "Colby",
      "countryCode": "US"
  },
  {
      "label": "CBL",
      "city": "Ciudad Bolivar",
      "countryCode": "VE"
  },
  {
      "label": "CBN",
      "city": "Cirebon",
      "countryCode": "ID"
  },
  {
      "label": "CBO",
      "city": "Cotabato",
      "countryCode": "PH"
  },
  {
      "label": "CBP",
      "city": "Coimbra",
      "countryCode": "PT"
  },
  {
      "label": "CBQ",
      "city": "Calabar",
      "countryCode": "NG"
  },
  {
      "label": "CBR",
      "city": "Canberra",
      "countryCode": "AU"
  },
  {
      "label": "CBS",
      "city": "Cabimas",
      "countryCode": "VE"
  },
  {
      "label": "CBT",
      "city": "Catumbela",
      "countryCode": "AO"
  },
  {
      "label": "CBU",
      "city": "Cottbus",
      "countryCode": "DE"
  },
  {
      "label": "CBV",
      "city": "Coban",
      "countryCode": "GT"
  },
  {
      "label": "CBW",
      "city": "Campo Mourao",
      "countryCode": "BR"
  },
  {
      "label": "CBX",
      "city": "Condobolin",
      "countryCode": "AU"
  },
  {
      "label": "CBY",
      "city": "Canobie",
      "countryCode": "AU"
  },
  {
      "label": "CBZ",
      "city": "Cabin Creek",
      "countryCode": "US"
  },
  {
      "label": "CCB",
      "city": "Upland",
      "countryCode": "US"
  },
  {
      "label": "CCC",
      "city": "Cayo Coco",
      "countryCode": "CU"
  },
  {
      "label": "CCF",
      "city": "Carcassonne",
      "countryCode": "FR"
  },
  {
      "label": "CCG",
      "city": "Crane",
      "countryCode": "US"
  },
  {
      "label": "CCH",
      "city": "Chile Chico",
      "countryCode": "CL"
  },
  {
      "label": "CCI",
      "city": "Concordia",
      "countryCode": "BR"
  },
  {
      "label": "CCK",
      "city": "Cocos Islands",
      "countryCode": "CC"
  },
  {
      "label": "CCL",
      "city": "Chinchilla",
      "countryCode": "AU"
  },
  {
      "label": "CCM",
      "city": "Crisciuma",
      "countryCode": "BR"
  },
  {
      "label": "CCN",
      "city": "Chakcharan",
      "countryCode": "AF"
  },
  {
      "label": "CCO",
      "city": "Carimagua",
      "countryCode": "CO"
  },
  {
      "label": "CCP",
      "city": "Concepcion",
      "countryCode": "CL"
  },
  {
      "label": "CCQ",
      "city": "Cachoeira",
      "countryCode": "BR"
  },
  {
      "label": "CCR",
      "city": "Concord",
      "countryCode": "US"
  },
  {
      "label": "CCS",
      "city": "Caracas",
      "countryCode": "VE"
  },
  {
      "label": "CCT",
      "city": "Colonia Catriel",
      "countryCode": "AR"
  },
  {
      "label": "CCV",
      "city": "Craig Cove",
      "countryCode": "VU"
  },
  {
      "label": "CCW",
      "city": "Cowell",
      "countryCode": "AU"
  },
  {
      "label": "CCX",
      "city": "Caceres",
      "countryCode": "BR"
  },
  {
      "label": "CCY",
      "city": "Charles City",
      "countryCode": "US"
  },
  {
      "label": "CCZ",
      "city": "Chub Cay",
      "countryCode": "BS"
  },
  {
      "label": "CDA",
      "city": "Cooinda",
      "countryCode": "AU"
  },
  {
      "label": "CDB",
      "city": "Cold Bay",
      "countryCode": "US"
  },
  {
      "label": "CDC",
      "city": "Cedar City",
      "countryCode": "US"
  },
  {
      "label": "CDD",
      "city": "Cauquira",
      "countryCode": "HN"
  },
  {
      "label": "CDE",
      "city": "Caledonia",
      "countryCode": "PA"
  },
  {
      "label": "CDF",
      "city": "Cortina D'Ampezzo",
      "countryCode": "IT"
  },
  {
      "label": "CDH",
      "city": "Camden",
      "countryCode": "US"
  },
  {
      "label": "CDJ",
      "city": "Conceicao Do Arag",
      "countryCode": "BR"
  },
  {
      "label": "CDK",
      "city": "Cedar Key",
      "countryCode": "US"
  },
  {
      "label": "CDL",
      "city": "Candle",
      "countryCode": "US"
  },
  {
      "label": "CDN",
      "city": "Camden",
      "countryCode": "US"
  },
  {
      "label": "CDO",
      "city": "Cradock",
      "countryCode": "ZA"
  },
  {
      "label": "CDQ",
      "city": "Croydon",
      "countryCode": "AU"
  },
  {
      "label": "CDR",
      "city": "Chadron",
      "countryCode": "US"
  },
  {
      "label": "CDS",
      "city": "Childress",
      "countryCode": "US"
  },
  {
      "label": "CDT",
      "city": "Castellon de la Plana",
      "countryCode": "ES"
  },
  {
      "label": "CDU",
      "city": "Camden",
      "countryCode": "AU"
  },
  {
      "label": "CDV",
      "city": "Cordova",
      "countryCode": "US"
  },
  {
      "label": "CDW",
      "city": "Caldwell",
      "countryCode": "US"
  },
  {
      "label": "CDY",
      "city": "Cagayan De Sulu",
      "countryCode": "PH"
  },
  {
      "label": "CEB",
      "city": "Cebu",
      "countryCode": "PH"
  },
  {
      "label": "CEC",
      "city": "Crescent City",
      "countryCode": "US"
  },
  {
      "label": "CED",
      "city": "Ceduna",
      "countryCode": "AU"
  },
  {
      "label": "CEE",
      "city": "Cherepovets",
      "countryCode": "RU"
  },
  {
      "label": "CEG",
      "city": "Chester",
      "countryCode": "GB"
  },
  {
      "label": "CEH",
      "city": "Chelinda",
      "countryCode": "MW"
  },
  {
      "label": "CEI",
      "city": "Chiang Rai",
      "countryCode": "TH"
  },
  {
      "label": "CEJ",
      "city": "Chernigov",
      "countryCode": "UA"
  },
  {
      "label": "CEK",
      "city": "Chelyabinsk",
      "countryCode": "RU"
  },
  {
      "label": "CEL",
      "city": "Cape Eleuthera",
      "countryCode": "BS"
  },
  {
      "label": "CEM",
      "city": "Central",
      "countryCode": "US"
  },
  {
      "label": "CEN",
      "city": "Ciudad Obregon",
      "countryCode": "MX"
  },
  {
      "label": "CEO",
      "city": "Waco Kungo",
      "countryCode": "AO"
  },
  {
      "label": "CEP",
      "city": "Concepcion",
      "countryCode": "BO"
  },
  {
      "label": "CEQ",
      "city": "Cannes",
      "countryCode": "FR"
  },
  {
      "label": "CER",
      "city": "Cherbourg",
      "countryCode": "FR"
  },
  {
      "label": "CES",
      "city": "Cessnock",
      "countryCode": "AU"
  },
  {
      "label": "CET",
      "city": "Cholet",
      "countryCode": "FR"
  },
  {
      "label": "CEU",
      "city": "Clemson",
      "countryCode": "US"
  },
  {
      "label": "CEV",
      "city": "Connersville",
      "countryCode": "US"
  },
  {
      "label": "CEW",
      "city": "Crestview",
      "countryCode": "US"
  },
  {
      "label": "CEX",
      "city": "Chena Hot Springs",
      "countryCode": "US"
  },
  {
      "label": "CEY",
      "city": "Murray",
      "countryCode": "US"
  },
  {
      "label": "CEZ",
      "city": "Cortez",
      "countryCode": "US"
  },
  {
      "label": "CFA",
      "city": "Coffee Point",
      "countryCode": "US"
  },
  {
      "label": "CFB",
      "city": "Cabo Frio",
      "countryCode": "BR"
  },
  {
      "label": "CFC",
      "city": "Cacador",
      "countryCode": "BR"
  },
  {
      "label": "CFD",
      "city": "Bryan",
      "countryCode": "US"
  },
  {
      "label": "CFE",
      "city": "Clermont Ferrand",
      "countryCode": "FR"
  },
  {
      "label": "CFF",
      "city": "Canfunfo",
      "countryCode": "AO"
  },
  {
      "label": "CFG",
      "city": "Cienfuegos",
      "countryCode": "CU"
  },
  {
      "label": "CFH",
      "city": "Clifton Hills",
      "countryCode": "AU"
  },
  {
      "label": "CFI",
      "city": "Camfield",
      "countryCode": "AU"
  },
  {
      "label": "CFK",
      "city": "chief",
      "countryCode": "US"
  },
  {
      "label": "CFN",
      "city": "Donegal",
      "countryCode": "IE"
  },
  {
      "label": "CFO",
      "city": "Confreza",
      "countryCode": "BR"
  },
  {
      "label": "CFP",
      "city": "Carpentaria Downs",
      "countryCode": "AU"
  },
  {
      "label": "CFQ",
      "city": "Creston",
      "countryCode": "CA"
  },
  {
      "label": "CFR",
      "city": "Caen",
      "countryCode": "FR"
  },
  {
      "label": "CFS",
      "city": "Coffs Harbour",
      "countryCode": "AU"
  },
  {
      "label": "CFT",
      "city": "Clifton",
      "countryCode": "US"
  },
  {
      "label": "CFU",
      "city": "Kerkyra",
      "countryCode": "GR"
  },
  {
      "label": "CFV",
      "city": "Coffeyville",
      "countryCode": "US"
  },
  {
      "label": "CGB",
      "city": "Cuiaba",
      "countryCode": "BR"
  },
  {
      "label": "CGC",
      "city": "Cape Gloucester",
      "countryCode": "PG"
  },
  {
      "label": "CGD",
      "city": "Changde",
      "countryCode": "CN"
  },
  {
      "label": "CGE",
      "city": "Cambridge",
      "countryCode": "US"
  },
  {
      "label": "CGG",
      "city": "Casiguran",
      "countryCode": "PH"
  },
  {
      "label": "CGI",
      "city": "Cape Girardeau",
      "countryCode": "US"
  },
  {
      "label": "CGJ",
      "city": "Chingola",
      "countryCode": "ZM"
  },
  {
      "label": "CGK",
      "city": "Jakarta",
      "countryCode": "ID"
  },
  {
      "label": "CGM",
      "city": "Camiguin",
      "countryCode": "PH"
  },
  {
      "label": "CGN",
      "city": "Cologne",
      "countryCode": "DE"
  },
  {
      "label": "CGO",
      "city": "Zhengzhou",
      "countryCode": "CN"
  },
  {
      "label": "CGP",
      "city": "Chittagong",
      "countryCode": "BD"
  },
  {
      "label": "CGQ",
      "city": "Changchun",
      "countryCode": "CN"
  },
  {
      "label": "CGR",
      "city": "Campo Grande",
      "countryCode": "BR"
  },
  {
      "label": "CGS",
      "city": "College Park",
      "countryCode": "US"
  },
  {
      "label": "CGT",
      "city": "Chinguitti",
      "countryCode": "MR"
  },
  {
      "label": "CGU",
      "city": "Ciudad Guayana",
      "countryCode": "VE"
  },
  {
      "label": "CGV",
      "city": "Caiguna",
      "countryCode": "AU"
  },
  {
      "label": "CGY",
      "city": "Cagayan De Oro",
      "countryCode": "PH"
  },
  {
      "label": "CGZ",
      "city": "Casa Grande",
      "countryCode": "US"
  },
  {
      "label": "CHA",
      "city": "Chattanooga",
      "countryCode": "US"
  },
  {
      "label": "CHB",
      "city": "Chilas",
      "countryCode": "PK"
  },
  {
      "label": "CHC",
      "city": "Christchurch",
      "countryCode": "NZ"
  },
  {
      "label": "CHD",
      "city": "Chandler",
      "countryCode": "US"
  },
  {
      "label": "CHE",
      "city": "Caherciveen",
      "countryCode": "IE"
  },
  {
      "label": "CHF",
      "city": "Chinhae",
      "countryCode": "KR"
  },
  {
      "label": "CHG",
      "city": "Chaoyang",
      "countryCode": "CN"
  },
  {
      "label": "CHH",
      "city": "Chachapoyas",
      "countryCode": "PE"
  },
  {
      "label": "CHI",
      "city": "Chicago",
      "countryCode": "US"
  },
  {
      "label": "CHJ",
      "city": "Chipinge",
      "countryCode": "ZW"
  },
  {
      "label": "CHK",
      "city": "Chickasha",
      "countryCode": "US"
  },
  {
      "label": "CHL",
      "city": "Challis",
      "countryCode": "US"
  },
  {
      "label": "CHM",
      "city": "Chimbote",
      "countryCode": "PE"
  },
  {
      "label": "CHN",
      "city": "Chonju",
      "countryCode": "KR"
  },
  {
      "label": "CHO",
      "city": "Charlottesville",
      "countryCode": "US"
  },
  {
      "label": "CHP",
      "city": "Circle Hot Spring",
      "countryCode": "US"
  },
  {
      "label": "CHQ",
      "city": "Chania",
      "countryCode": "GR"
  },
  {
      "label": "CHR",
      "city": "Chateauroux",
      "countryCode": "FR"
  },
  {
      "label": "CHS",
      "city": "Charleston",
      "countryCode": "US"
  },
  {
      "label": "CHT",
      "city": "Chatham Island",
      "countryCode": "NZ"
  },
  {
      "label": "CHU",
      "city": "Chuathbaluk",
      "countryCode": "US"
  },
  {
      "label": "CHV",
      "city": "Chaves",
      "countryCode": "PT"
  },
  {
      "label": "CHW",
      "city": "Jiuquan",
      "countryCode": "CN"
  },
  {
      "label": "CHX",
      "city": "Changuinola",
      "countryCode": "PA"
  },
  {
      "label": "CHY",
      "city": "Choiseul Bay",
      "countryCode": "SB"
  },
  {
      "label": "CHZ",
      "city": "Chiloquin",
      "countryCode": "US"
  },
  {
      "label": "CIC",
      "city": "Chico",
      "countryCode": "US"
  },
  {
      "label": "CID",
      "city": "Cedrrap Iowacty",
      "countryCode": "US"
  },
  {
      "label": "CIE",
      "city": "Collie",
      "countryCode": "AU"
  },
  {
      "label": "CIF",
      "city": "Chifeng",
      "countryCode": "CN"
  },
  {
      "label": "CIG",
      "city": "Craig",
      "countryCode": "US"
  },
  {
      "label": "CIH",
      "city": "Changzhi",
      "countryCode": "CN"
  },
  {
      "label": "CIJ",
      "city": "Cobija",
      "countryCode": "BO"
  },
  {
      "label": "CIK",
      "city": "Chalkyitsik",
      "countryCode": "US"
  },
  {
      "label": "CIL",
      "city": "Council",
      "countryCode": "US"
  },
  {
      "label": "CIM",
      "city": "Cimitarra",
      "countryCode": "CO"
  },
  {
      "label": "CIN",
      "city": "Carroll",
      "countryCode": "US"
  },
  {
      "label": "CIO",
      "city": "Concepcion",
      "countryCode": "PY"
  },
  {
      "label": "CIP",
      "city": "Chipata",
      "countryCode": "ZM"
  },
  {
      "label": "CIQ",
      "city": "Chiquimula",
      "countryCode": "GT"
  },
  {
      "label": "CIR",
      "city": "Cairo",
      "countryCode": "US"
  },
  {
      "label": "CIS",
      "city": "Canton Island",
      "countryCode": "KI"
  },
  {
      "label": "CIT",
      "city": "Chimkent",
      "countryCode": "KZ"
  },
  {
      "label": "CIV",
      "city": "Chomley",
      "countryCode": "US"
  },
  {
      "label": "CIW",
      "city": "Canouan Island",
      "countryCode": "VC"
  },
  {
      "label": "CIX",
      "city": "Chiclayo",
      "countryCode": "PE"
  },
  {
      "label": "CIY",
      "city": "Comiso",
      "countryCode": "IT"
  },
  {
      "label": "CIZ",
      "city": "Coari",
      "countryCode": "BR"
  },
  {
      "label": "CJA",
      "city": "Cajamarca",
      "countryCode": "PE"
  },
  {
      "label": "CJC",
      "city": "Calama",
      "countryCode": "CL"
  },
  {
      "label": "CJD",
      "city": "Candilejas",
      "countryCode": "CO"
  },
  {
      "label": "CJH",
      "city": "Chilko Lake",
      "countryCode": "CA"
  },
  {
      "label": "CJJ",
      "city": "Cheong Ju",
      "countryCode": "KR"
  },
  {
      "label": "CJL",
      "city": "Chitral",
      "countryCode": "PK"
  },
  {
      "label": "CJM",
      "city": "Chumphon",
      "countryCode": "TH"
  },
  {
      "label": "CJN",
      "city": "El Cajon",
      "countryCode": "US"
  },
  {
      "label": "CJS",
      "city": "Ciudad Juarez",
      "countryCode": "MX"
  },
  {
      "label": "CJU",
      "city": "Cheju",
      "countryCode": "KR"
  },
  {
      "label": "CKA",
      "city": "Cherokee",
      "countryCode": "US"
  },
  {
      "label": "CKB",
      "city": "Clarksburg",
      "countryCode": "US"
  },
  {
      "label": "CKC",
      "city": "Cherkassy",
      "countryCode": "UA"
  },
  {
      "label": "CKD",
      "city": "Crooked Creek",
      "countryCode": "US"
  },
  {
      "label": "CKE",
      "city": "Clear Lake",
      "countryCode": "US"
  },
  {
      "label": "CKG",
      "city": "Chongqing",
      "countryCode": "CN"
  },
  {
      "label": "CKH",
      "city": "Chokurdah",
      "countryCode": "RU"
  },
  {
      "label": "CKI",
      "city": "Croker Island",
      "countryCode": "AU"
  },
  {
      "label": "CKK",
      "city": "Cherokee",
      "countryCode": "US"
  },
  {
      "label": "CKL",
      "city": "Chakalovskiy",
      "countryCode": "RU"
  },
  {
      "label": "CKM",
      "city": "Clarksdale",
      "countryCode": "US"
  },
  {
      "label": "CKN",
      "city": "Crookston",
      "countryCode": "US"
  },
  {
      "label": "CKO",
      "city": "Cornelio Procopio",
      "countryCode": "BR"
  },
  {
      "label": "CKR",
      "city": "Crane Island",
      "countryCode": "US"
  },
  {
      "label": "CKS",
      "city": "Carajas",
      "countryCode": "BR"
  },
  {
      "label": "CKT",
      "city": "Sarakhs",
      "countryCode": "IR"
  },
  {
      "label": "CKV",
      "city": "Clarksville",
      "countryCode": "US"
  },
  {
      "label": "CKX",
      "city": "Chicken",
      "countryCode": "US"
  },
  {
      "label": "CKY",
      "city": "Conakry",
      "countryCode": "GN"
  },
  {
      "label": "CKZ",
      "city": "Canakkale",
      "countryCode": "TR"
  },
  {
      "label": "CLA",
      "city": "Comilla",
      "countryCode": "BD"
  },
  {
      "label": "CLB",
      "city": "Castlebar",
      "countryCode": "IE"
  },
  {
      "label": "CLC",
      "city": "Clearlake",
      "countryCode": "US"
  },
  {
      "label": "CLD",
      "city": "Carlsbad",
      "countryCode": "US"
  },
  {
      "label": "CLE",
      "city": "Cleveland",
      "countryCode": "US"
  },
  {
      "label": "CLF",
      "city": "Coltishall",
      "countryCode": "GB"
  },
  {
      "label": "CLG",
      "city": "Coalinga",
      "countryCode": "US"
  },
  {
      "label": "CLH",
      "city": "Coolah",
      "countryCode": "AU"
  },
  {
      "label": "CLI",
      "city": "Clintonville",
      "countryCode": "US"
  },
  {
      "label": "CLJ",
      "city": "Cluj",
      "countryCode": "RO"
  },
  {
      "label": "CLL",
      "city": "College Station",
      "countryCode": "US"
  },
  {
      "label": "CLM",
      "city": "Port Angeles",
      "countryCode": "US"
  },
  {
      "label": "CLN",
      "city": "Carolina",
      "countryCode": "BR"
  },
  {
      "label": "CLO",
      "city": "Cali",
      "countryCode": "CO"
  },
  {
      "label": "CLP",
      "city": "Clarks Point",
      "countryCode": "US"
  },
  {
      "label": "CLQ",
      "city": "Colima",
      "countryCode": "MX"
  },
  {
      "label": "CLR",
      "city": "Calipatria",
      "countryCode": "US"
  },
  {
      "label": "CLS",
      "city": "Chehalis",
      "countryCode": "US"
  },
  {
      "label": "CLT",
      "city": "Charlotte",
      "countryCode": "US"
  },
  {
      "label": "CLU",
      "city": "Columbus",
      "countryCode": "US"
  },
  {
      "label": "CLV",
      "city": "Caldas Novas",
      "countryCode": "BR"
  },
  {
      "label": "CLW",
      "city": "Clearwater",
      "countryCode": "US"
  },
  {
      "label": "CLX",
      "city": "Clorinda",
      "countryCode": "AR"
  },
  {
      "label": "CLY",
      "city": "Calvi",
      "countryCode": "FR"
  },
  {
      "label": "CLZ",
      "city": "Calabozo",
      "countryCode": "VE"
  },
  {
      "label": "CMA",
      "city": "Cunnamulla",
      "countryCode": "AU"
  },
  {
      "label": "CMB",
      "city": "Colombo",
      "countryCode": "LK"
  },
  {
      "label": "CMC",
      "city": "Camocim",
      "countryCode": "BR"
  },
  {
      "label": "CMD",
      "city": "Cootamundra",
      "countryCode": "AU"
  },
  {
      "label": "CME",
      "city": "Ciudad Del Carmen",
      "countryCode": "MX"
  },
  {
      "label": "CMF",
      "city": "Chambery",
      "countryCode": "FR"
  },
  {
      "label": "CMG",
      "city": "Corumba",
      "countryCode": "BR"
  },
  {
      "label": "CMH",
      "city": "Columbus",
      "countryCode": "US"
  },
  {
      "label": "CMI",
      "city": "Champaign",
      "countryCode": "US"
  },
  {
      "label": "CMJ",
      "city": "Chi Mei",
      "countryCode": "TW"
  },
  {
      "label": "CMK",
      "city": "Club Makokola",
      "countryCode": "MW"
  },
  {
      "label": "CML",
      "city": "Camooweal",
      "countryCode": "AU"
  },
  {
      "label": "CMM",
      "city": "Carmelita",
      "countryCode": "GT"
  },
  {
      "label": "CMO",
      "city": "Obbia",
      "countryCode": "SO"
  },
  {
      "label": "CMP",
      "city": "Santana Do Aragua",
      "countryCode": "BR"
  },
  {
      "label": "CMQ",
      "city": "Clermont",
      "countryCode": "AU"
  },
  {
      "label": "CMR",
      "city": "Colmar",
      "countryCode": "FR"
  },
  {
      "label": "CMS",
      "city": "Scusciuban",
      "countryCode": "SO"
  },
  {
      "label": "CMT",
      "city": "Cameta",
      "countryCode": "BR"
  },
  {
      "label": "CMU",
      "city": "Kundiawa",
      "countryCode": "PG"
  },
  {
      "label": "CMV",
      "city": "Coromandel",
      "countryCode": "NZ"
  },
  {
      "label": "CMW",
      "city": "Camaguey",
      "countryCode": "CU"
  },
  {
      "label": "CMX",
      "city": "Hancock",
      "countryCode": "US"
  },
  {
      "label": "CMY",
      "city": "Sparta",
      "countryCode": "US"
  },
  {
      "label": "CMZ",
      "city": "Caia",
      "countryCode": "MZ"
  },
  {
      "label": "CNA",
      "city": "Cananea",
      "countryCode": "MX"
  },
  {
      "label": "CNB",
      "city": "Coonamble",
      "countryCode": "AU"
  },
  {
      "label": "CNC",
      "city": "Coconut Island",
      "countryCode": "AU"
  },
  {
      "label": "CND",
      "city": "Constanta",
      "countryCode": "RO"
  },
  {
      "label": "CNE",
      "city": "Canon City",
      "countryCode": "US"
  },
  {
      "label": "CNG",
      "city": "Cognac",
      "countryCode": "FR"
  },
  {
      "label": "CNH",
      "city": "Claremont",
      "countryCode": "US"
  },
  {
      "label": "CNI",
      "city": "Changhai",
      "countryCode": "CN"
  },
  {
      "label": "CNJ",
      "city": "Cloncurry",
      "countryCode": "AU"
  },
  {
      "label": "CNK",
      "city": "Concordia",
      "countryCode": "US"
  },
  {
      "label": "CNL",
      "city": "Sindal",
      "countryCode": "DK"
  },
  {
      "label": "CNM",
      "city": "Carlsbad",
      "countryCode": "US"
  },
  {
      "label": "CNN",
      "city": "Chulman",
      "countryCode": "RU"
  },
  {
      "label": "CNO",
      "city": "Chino",
      "countryCode": "US"
  },
  {
      "label": "CNP",
      "city": "Neerlerit Inaat",
      "countryCode": "GL"
  },
  {
      "label": "CNQ",
      "city": "Corrientes",
      "countryCode": "AR"
  },
  {
      "label": "CNR",
      "city": "Chanaral",
      "countryCode": "CL"
  },
  {
      "label": "CNS",
      "city": "Cairns",
      "countryCode": "AU"
  },
  {
      "label": "CNT",
      "city": "Charata",
      "countryCode": "AR"
  },
  {
      "label": "CNU",
      "city": "Chanute",
      "countryCode": "US"
  },
  {
      "label": "CNV",
      "city": "Canavieiras",
      "countryCode": "BR"
  },
  {
      "label": "CNX",
      "city": "Chiang Mai",
      "countryCode": "TH"
  },
  {
      "label": "CNY",
      "city": "Moab",
      "countryCode": "US"
  },
  {
      "label": "CNZ",
      "city": "Cangamba",
      "countryCode": "AO"
  },
  {
      "label": "COA",
      "city": "Columbia",
      "countryCode": "US"
  },
  {
      "label": "COB",
      "city": "Coolibah",
      "countryCode": "AU"
  },
  {
      "label": "COC",
      "city": "Concordia",
      "countryCode": "AR"
  },
  {
      "label": "COD",
      "city": "Cody",
      "countryCode": "US"
  },
  {
      "label": "COE",
      "city": "Coeur D'Alene",
      "countryCode": "US"
  },
  {
      "label": "COG",
      "city": "Condoto",
      "countryCode": "CO"
  },
  {
      "label": "COI",
      "city": "Cocoa",
      "countryCode": "US"
  },
  {
      "label": "COJ",
      "city": "Coonabarabran",
      "countryCode": "AU"
  },
  {
      "label": "COL",
      "city": "Coll Island",
      "countryCode": "GB"
  },
  {
      "label": "COM",
      "city": "Coleman",
      "countryCode": "US"
  },
  {
      "label": "CON",
      "city": "Concord",
      "countryCode": "US"
  },
  {
      "label": "COO",
      "city": "Cotonou",
      "countryCode": "BJ"
  },
  {
      "label": "COP",
      "city": "Cooperstown",
      "countryCode": "US"
  },
  {
      "label": "COQ",
      "city": "Choibalsan",
      "countryCode": "MN"
  },
  {
      "label": "COR",
      "city": "Cordoba",
      "countryCode": "AR"
  },
  {
      "label": "COS",
      "city": "Colorado Springs",
      "countryCode": "US"
  },
  {
      "label": "COT",
      "city": "Cotulla",
      "countryCode": "US"
  },
  {
      "label": "COU",
      "city": "Columbia",
      "countryCode": "US"
  },
  {
      "label": "COV",
      "city": "Covilha",
      "countryCode": "PT"
  },
  {
      "label": "COW",
      "city": "Coquimbo",
      "countryCode": "CL"
  },
  {
      "label": "COX",
      "city": "Congo Town",
      "countryCode": "BS"
  },
  {
      "label": "COY",
      "city": "Coolawanyah",
      "countryCode": "AU"
  },
  {
      "label": "COZ",
      "city": "Constanza",
      "countryCode": "DO"
  },
  {
      "label": "CPA",
      "city": "Cape Palmas",
      "countryCode": "LR"
  },
  {
      "label": "CPB",
      "city": "Capurgana",
      "countryCode": "CO"
  },
  {
      "label": "CPC",
      "city": "San Martin de Los Andes",
      "countryCode": "AR"
  },
  {
      "label": "CPD",
      "city": "Coober Pedy",
      "countryCode": "AU"
  },
  {
      "label": "CPE",
      "city": "Campeche",
      "countryCode": "MX"
  },
  {
      "label": "CPF",
      "city": "Cepu",
      "countryCode": "ID"
  },
  {
      "label": "CPG",
      "city": "Carmen De Patagones",
      "countryCode": "AR"
  },
  {
      "label": "CPH",
      "city": "Copenhagen",
      "countryCode": "DK"
  },
  {
      "label": "CPI",
      "city": "Cape Orford",
      "countryCode": "PG"
  },
  {
      "label": "CPL",
      "city": "Chaparral",
      "countryCode": "CO"
  },
  {
      "label": "CPM",
      "city": "Compton",
      "countryCode": "US"
  },
  {
      "label": "CPN",
      "city": "Cape Rodney",
      "countryCode": "PG"
  },
  {
      "label": "CPO",
      "city": "Copiapo",
      "countryCode": "CL"
  },
  {
      "label": "CPQ",
      "city": "Campinas",
      "countryCode": "BR"
  },
  {
      "label": "CPR",
      "city": "Casper",
      "countryCode": "US"
  },
  {
      "label": "CPT",
      "city": "Cape Town",
      "countryCode": "ZA"
  },
  {
      "label": "CPU",
      "city": "Cururupu",
      "countryCode": "BR"
  },
  {
      "label": "CPV",
      "city": "Campina Grande",
      "countryCode": "BR"
  },
  {
      "label": "CPX",
      "city": "Culebra",
      "countryCode": "PR"
  },
  {
      "label": "CQA",
      "city": "Canarana",
      "countryCode": "BR"
  },
  {
      "label": "CQF",
      "city": "Calais",
      "countryCode": "FR"
  },
  {
      "label": "CQM",
      "city": "Ciudad Real",
      "countryCode": "ES"
  },
  {
      "label": "CQP",
      "city": "Cape Flattery",
      "countryCode": "AU"
  },
  {
      "label": "CQS",
      "city": "Costa Marques",
      "countryCode": "BR"
  },
  {
      "label": "CQT",
      "city": "Caquetania",
      "countryCode": "CO"
  },
  {
      "label": "CRA",
      "city": "Craiova",
      "countryCode": "RO"
  },
  {
      "label": "CRB",
      "city": "Collarenebri",
      "countryCode": "AU"
  },
  {
      "label": "CRC",
      "city": "Cartago",
      "countryCode": "CO"
  },
  {
      "label": "CRD",
      "city": "Cdro Rivadavia",
      "countryCode": "AR"
  },
  {
      "label": "CRF",
      "city": "Carnot",
      "countryCode": "CF"
  },
  {
      "label": "CRH",
      "city": "Cherribah",
      "countryCode": "AU"
  },
  {
      "label": "CRI",
      "city": "Crooked Island",
      "countryCode": "BS"
  },
  {
      "label": "CRJ",
      "city": "Coorabie",
      "countryCode": "AU"
  },
  {
      "label": "CRK",
      "city": "Angeles City",
      "countryCode": "PH"
  },
  {
      "label": "CRM",
      "city": "Catarman",
      "countryCode": "PH"
  },
  {
      "label": "CRN",
      "city": "Cromarty",
      "countryCode": "GB"
  },
  {
      "label": "CRO",
      "city": "Corcoran",
      "countryCode": "US"
  },
  {
      "label": "CRP",
      "city": "Corpus Christi",
      "countryCode": "US"
  },
  {
      "label": "CRQ",
      "city": "Caravelas",
      "countryCode": "BR"
  },
  {
      "label": "CRR",
      "city": "Ceres",
      "countryCode": "AR"
  },
  {
      "label": "CRS",
      "city": "Corsicana",
      "countryCode": "US"
  },
  {
      "label": "CRT",
      "city": "Crossett",
      "countryCode": "US"
  },
  {
      "label": "CRU",
      "city": "Carriacou Island",
      "countryCode": "GD"
  },
  {
      "label": "CRV",
      "city": "Crotone",
      "countryCode": "IT"
  },
  {
      "label": "CRW",
      "city": "Charleston",
      "countryCode": "US"
  },
  {
      "label": "CRX",
      "city": "Corinth",
      "countryCode": "US"
  },
  {
      "label": "CRY",
      "city": "Carlton Hill",
      "countryCode": "AU"
  },
  {
      "label": "CRZ",
      "city": "Chardzhou",
      "countryCode": "TM"
  },
  {
      "label": "CSA",
      "city": "Colonsay Is",
      "countryCode": "GB"
  },
  {
      "label": "CSB",
      "city": "Caransebes",
      "countryCode": "RO"
  },
  {
      "label": "CSC",
      "city": "Canas",
      "countryCode": "CR"
  },
  {
      "label": "CSD",
      "city": "Cresswell Downs",
      "countryCode": "AU"
  },
  {
      "label": "CSE",
      "city": "Crested Butte",
      "countryCode": "US"
  },
  {
      "label": "CSF",
      "city": "Creil",
      "countryCode": "FR"
  },
  {
      "label": "CSG",
      "city": "Columbus",
      "countryCode": "US"
  },
  {
      "label": "CSI",
      "city": "Casino",
      "countryCode": "AU"
  },
  {
      "label": "CSJ",
      "city": "Cape St Jacques",
      "countryCode": "VN"
  },
  {
      "label": "CSK",
      "city": "Cap Skirring",
      "countryCode": "SN"
  },
  {
      "label": "CSL",
      "city": "San Luis",
      "countryCode": "US"
  },
  {
      "label": "CSM",
      "city": "Clinton",
      "countryCode": "US"
  },
  {
      "label": "CSN",
      "city": "Carson City",
      "countryCode": "US"
  },
  {
      "label": "CSO",
      "city": "Cochstedt",
      "countryCode": "DE"
  },
  {
      "label": "CSQ",
      "city": "Creston",
      "countryCode": "US"
  },
  {
      "label": "CSR",
      "city": "Casuarito",
      "countryCode": "CO"
  },
  {
      "label": "CSS",
      "city": "Cassilandia",
      "countryCode": "BR"
  },
  {
      "label": "CST",
      "city": "Castaway",
      "countryCode": "FJ"
  },
  {
      "label": "CSU",
      "city": "Santa Cruz Sul",
      "countryCode": "BR"
  },
  {
      "label": "CSV",
      "city": "Crossville",
      "countryCode": "US"
  },
  {
      "label": "CSW",
      "city": "Colorado Do Oeste",
      "countryCode": "BR"
  },
  {
      "label": "CSX",
      "city": "Changsha",
      "countryCode": "CN"
  },
  {
      "label": "CSY",
      "city": "Cheboksary",
      "countryCode": "RU"
  },
  {
      "label": "CTA",
      "city": "Catania",
      "countryCode": "IT"
  },
  {
      "label": "CTB",
      "city": "Cut Bank",
      "countryCode": "US"
  },
  {
      "label": "CTC",
      "city": "Catamarca",
      "countryCode": "AR"
  },
  {
      "label": "CTD",
      "city": "Chitre",
      "countryCode": "PA"
  },
  {
      "label": "CTE",
      "city": "Carti",
      "countryCode": "PA"
  },
  {
      "label": "CTF",
      "city": "Coatepeque",
      "countryCode": "GT"
  },
  {
      "label": "CTG",
      "city": "Cartagena",
      "countryCode": "CO"
  },
  {
      "label": "CTH",
      "city": "Coatesville",
      "countryCode": "US"
  },
  {
      "label": "CTI",
      "city": "Cuito Cuanavale",
      "countryCode": "AO"
  },
  {
      "label": "CTK",
      "city": "Canton",
      "countryCode": "US"
  },
  {
      "label": "CTL",
      "city": "Charleville",
      "countryCode": "AU"
  },
  {
      "label": "CTM",
      "city": "Chetumal",
      "countryCode": "MX"
  },
  {
      "label": "CTN",
      "city": "Cooktown",
      "countryCode": "AU"
  },
  {
      "label": "CTO",
      "city": "Calverton",
      "countryCode": "US"
  },
  {
      "label": "CTP",
      "city": "Carutapera",
      "countryCode": "BR"
  },
  {
      "label": "CTQ",
      "city": "Santa Vitoria",
      "countryCode": "BR"
  },
  {
      "label": "CTR",
      "city": "Cattle Creek",
      "countryCode": "AU"
  },
  {
      "label": "CTT",
      "city": "Le Castellet",
      "countryCode": "FR"
  },
  {
      "label": "CTU",
      "city": "Chengdu",
      "countryCode": "CN"
  },
  {
      "label": "CTW",
      "city": "Cottonwood",
      "countryCode": "US"
  },
  {
      "label": "CTX",
      "city": "Cortland",
      "countryCode": "US"
  },
  {
      "label": "CTY",
      "city": "Cross City",
      "countryCode": "US"
  },
  {
      "label": "CTZ",
      "city": "Clinton",
      "countryCode": "US"
  },
  {
      "label": "CUA",
      "city": "Ciudad Constitucion",
      "countryCode": "MX"
  },
  {
      "label": "CUC",
      "city": "Cucuta",
      "countryCode": "CO"
  },
  {
      "label": "CUD",
      "city": "Caloundra",
      "countryCode": "AU"
  },
  {
      "label": "CUE",
      "city": "Cuenca",
      "countryCode": "EC"
  },
  {
      "label": "CUF",
      "city": "Cuneo",
      "countryCode": "IT"
  },
  {
      "label": "CUH",
      "city": "Cushing",
      "countryCode": "US"
  },
  {
      "label": "CUI",
      "city": "Currillo",
      "countryCode": "CO"
  },
  {
      "label": "CUJ",
      "city": "Culion",
      "countryCode": "PH"
  },
  {
      "label": "CUK",
      "city": "Caye Caulker",
      "countryCode": "BZ"
  },
  {
      "label": "CUL",
      "city": "Culiacan",
      "countryCode": "MX"
  },
  {
      "label": "CUM",
      "city": "Cumana",
      "countryCode": "VE"
  },
  {
      "label": "CUN",
      "city": "Cancun",
      "countryCode": "MX"
  },
  {
      "label": "CUO",
      "city": "Caruru",
      "countryCode": "CO"
  },
  {
      "label": "CUP",
      "city": "Carupano",
      "countryCode": "VE"
  },
  {
      "label": "CUQ",
      "city": "Coen",
      "countryCode": "AU"
  },
  {
      "label": "CUR",
      "city": "Curacao",
      "countryCode": "AN"
  },
  {
      "label": "CUS",
      "city": "Columbus",
      "countryCode": "US"
  },
  {
      "label": "CUT",
      "city": "Cutral",
      "countryCode": "AR"
  },
  {
      "label": "CUU",
      "city": "Chihuahua",
      "countryCode": "MX"
  },
  {
      "label": "CUV",
      "city": "Casigua",
      "countryCode": "VE"
  },
  {
      "label": "CUW",
      "city": "Cube Cove",
      "countryCode": "US"
  },
  {
      "label": "CUY",
      "city": "Cue",
      "countryCode": "AU"
  },
  {
      "label": "CUZ",
      "city": "Cuzco",
      "countryCode": "PE"
  },
  {
      "label": "CVB",
      "city": "Chungribu",
      "countryCode": "PG"
  },
  {
      "label": "CVC",
      "city": "Cleve",
      "countryCode": "AU"
  },
  {
      "label": "CVE",
      "city": "Covenas",
      "countryCode": "CO"
  },
  {
      "label": "CVF",
      "city": "Courchevel",
      "countryCode": "FR"
  },
  {
      "label": "CVG",
      "city": "Cincinnati",
      "countryCode": "US"
  },
  {
      "label": "CVH",
      "city": "Caviahue",
      "countryCode": "AR"
  },
  {
      "label": "CVI",
      "city": "Caleta Olivia",
      "countryCode": "AR"
  },
  {
      "label": "CVJ",
      "city": "Cuernavaca",
      "countryCode": "MX"
  },
  {
      "label": "CVL",
      "city": "Cape Vogel",
      "countryCode": "PG"
  },
  {
      "label": "CVM",
      "city": "Ciudad Victoria",
      "countryCode": "MX"
  },
  {
      "label": "CVN",
      "city": "Clovis",
      "countryCode": "US"
  },
  {
      "label": "CVO",
      "city": "Corvallis",
      "countryCode": "US"
  },
  {
      "label": "CVQ",
      "city": "Carnarvon",
      "countryCode": "AU"
  },
  {
      "label": "CVR",
      "city": "Culver City",
      "countryCode": "US"
  },
  {
      "label": "CVT",
      "city": "Coventry",
      "countryCode": "GB"
  },
  {
      "label": "CVU",
      "city": "Corvo Island",
      "countryCode": "PT"
  },
  {
      "label": "CWB",
      "city": "Curitiba",
      "countryCode": "BR"
  },
  {
      "label": "CWC",
      "city": "Chernovtsy",
      "countryCode": "UA"
  },
  {
      "label": "CWG",
      "city": "Callaway Gardens",
      "countryCode": "US"
  },
  {
      "label": "CWI",
      "city": "Clinton",
      "countryCode": "US"
  },
  {
      "label": "CWL",
      "city": "Cardiff",
      "countryCode": "GB"
  },
  {
      "label": "CWP",
      "city": "Campbellpore",
      "countryCode": "PK"
  },
  {
      "label": "CWR",
      "city": "Cowarie",
      "countryCode": "AU"
  },
  {
      "label": "CWS",
      "city": "Center Island",
      "countryCode": "US"
  },
  {
      "label": "CWT",
      "city": "Cowra",
      "countryCode": "AU"
  },
  {
      "label": "CWW",
      "city": "Corowa",
      "countryCode": "AU"
  },
  {
      "label": "CXA",
      "city": "Caicara De Oro",
      "countryCode": "VE"
  },
  {
      "label": "CXB",
      "city": "Cox's Bazar",
      "countryCode": "BD"
  },
  {
      "label": "CXC",
      "city": "Chitina",
      "countryCode": "US"
  },
  {
      "label": "CXF",
      "city": "Coldfoot",
      "countryCode": "US"
  },
  {
      "label": "CXI",
      "city": "Christmas Island",
      "countryCode": "KI"
  },
  {
      "label": "CXJ",
      "city": "Caxias Do Sul",
      "countryCode": "BR"
  },
  {
      "label": "CXL",
      "city": "Calexico",
      "countryCode": "US"
  },
  {
      "label": "CXN",
      "city": "Candala",
      "countryCode": "SO"
  },
  {
      "label": "CXO",
      "city": "Conroe",
      "countryCode": "US"
  },
  {
      "label": "CXP",
      "city": "Cilacap",
      "countryCode": "ID"
  },
  {
      "label": "CXQ",
      "city": "Christmas Creek",
      "countryCode": "AU"
  },
  {
      "label": "CXR",
      "city": "Cam Ranh",
      "countryCode": "VN"
  },
  {
      "label": "CXT",
      "city": "Charters Towers",
      "countryCode": "AU"
  },
  {
      "label": "CXY",
      "city": "Cat Cays",
      "countryCode": "BS"
  },
  {
      "label": "CYA",
      "city": "Les Cayes",
      "countryCode": "HT"
  },
  {
      "label": "CYB",
      "city": "Cayman Brac Island",
      "countryCode": "KY"
  },
  {
      "label": "CYC",
      "city": "Caye Chapel",
      "countryCode": "BZ"
  },
  {
      "label": "CYE",
      "city": "Crystal Lake",
      "countryCode": "US"
  },
  {
      "label": "CYG",
      "city": "Corryong",
      "countryCode": "AU"
  },
  {
      "label": "CYI",
      "city": "Chiayi",
      "countryCode": "TW"
  },
  {
      "label": "CYL",
      "city": "Coyoles",
      "countryCode": "HN"
  },
  {
      "label": "CYO",
      "city": "Cayo Largo Del Sur",
      "countryCode": "CU"
  },
  {
      "label": "CYP",
      "city": "Calbayog",
      "countryCode": "PH"
  },
  {
      "label": "CYR",
      "city": "Colonia",
      "countryCode": "UY"
  },
  {
      "label": "CYS",
      "city": "Cheyenne",
      "countryCode": "US"
  },
  {
      "label": "CYT",
      "city": "Yakataga",
      "countryCode": "US"
  },
  {
      "label": "CYU",
      "city": "Cuyo",
      "countryCode": "PH"
  },
  {
      "label": "CYX",
      "city": "Cherskiy",
      "countryCode": "RU"
  },
  {
      "label": "CYZ",
      "city": "Cauayan",
      "countryCode": "PH"
  },
  {
      "label": "CZA",
      "city": "Chichen Itza",
      "countryCode": "MX"
  },
  {
      "label": "CZB",
      "city": "Cruz Alta",
      "countryCode": "BR"
  },
  {
      "label": "CZC",
      "city": "Copper Centre",
      "countryCode": "US"
  },
  {
      "label": "CZE",
      "city": "Coro",
      "countryCode": "VE"
  },
  {
      "label": "CZF",
      "city": "Cape Romanzof",
      "countryCode": "US"
  },
  {
      "label": "CZH",
      "city": "Corozal",
      "countryCode": "BZ"
  },
  {
      "label": "CZJ",
      "city": "Corazon De Jesus",
      "countryCode": "PA"
  },
  {
      "label": "CZK",
      "city": "Cascade Locks",
      "countryCode": "US"
  },
  {
      "label": "CZL",
      "city": "Constantine",
      "countryCode": "DZ"
  },
  {
      "label": "CZM",
      "city": "Cozumel",
      "countryCode": "MX"
  },
  {
      "label": "CZN",
      "city": "Chisana",
      "countryCode": "US"
  },
  {
      "label": "CZO",
      "city": "Chistochina",
      "countryCode": "US"
  },
  {
      "label": "CZP",
      "city": "Cape Pole",
      "countryCode": "US"
  },
  {
      "label": "CZS",
      "city": "Cruzeiro Do Sul",
      "countryCode": "BR"
  },
  {
      "label": "CZT",
      "city": "Carrizo Springs",
      "countryCode": "US"
  },
  {
      "label": "CZU",
      "city": "Corozal",
      "countryCode": "CO"
  },
  {
      "label": "CZW",
      "city": "Czestochowa",
      "countryCode": "PL"
  },
  {
      "label": "CZX",
      "city": "Changzhou",
      "countryCode": "CN"
  },
  {
      "label": "CZY",
      "city": "Cluny",
      "countryCode": "AU"
  },
  {
      "label": "CZZ",
      "city": "Campo",
      "countryCode": "US"
  },
  {
      "label": "DAA",
      "city": "Fort Belvoir",
      "countryCode": "US"
  },
  {
      "label": "DAB",
      "city": "Daytona Beach",
      "countryCode": "US"
  },
  {
      "label": "DAC",
      "city": "Dhaka",
      "countryCode": "BD"
  },
  {
      "label": "DAD",
      "city": "Da Nang",
      "countryCode": "VN"
  },
  {
      "label": "DAF",
      "city": "Daup",
      "countryCode": "PG"
  },
  {
      "label": "DAG",
      "city": "Daggett",
      "countryCode": "US"
  },
  {
      "label": "DAH",
      "city": "Dathina",
      "countryCode": "YE"
  },
  {
      "label": "DAJ",
      "city": "Dauan Island",
      "countryCode": "AU"
  },
  {
      "label": "DAK",
      "city": "Dakhla Oasis",
      "countryCode": "EG"
  },
  {
      "label": "DAM",
      "city": "Damascus",
      "countryCode": "SY"
  },
  {
      "label": "DAN",
      "city": "Danville",
      "countryCode": "US"
  },
  {
      "label": "DAP",
      "city": "Darchula",
      "countryCode": "NP"
  },
  {
      "label": "DAR",
      "city": "Dar Es Salaam",
      "countryCode": "TZ"
  },
  {
      "label": "DAS",
      "city": "Great Bear Lake",
      "countryCode": "CA"
  },
  {
      "label": "DAT",
      "city": "Datong",
      "countryCode": "CN"
  },
  {
      "label": "DAU",
      "city": "Daru",
      "countryCode": "PG"
  },
  {
      "label": "DAV",
      "city": "David",
      "countryCode": "PA"
  },
  {
      "label": "DAX",
      "city": "Daxian",
      "countryCode": "CN"
  },
  {
      "label": "DAY",
      "city": "Dayton",
      "countryCode": "US"
  },
  {
      "label": "DAZ",
      "city": "Darwaz",
      "countryCode": "AF"
  },
  {
      "label": "DBA",
      "city": "Dalbandin",
      "countryCode": "PK"
  },
  {
      "label": "DBB",
      "city": "Dabaa",
      "countryCode": "EG"
  },
  {
      "label": "DBM",
      "city": "Debra Marcos",
      "countryCode": "ET"
  },
  {
      "label": "DBN",
      "city": "Dublin",
      "countryCode": "US"
  },
  {
      "label": "DBO",
      "city": "Dubbo",
      "countryCode": "AU"
  },
  {
      "label": "DBP",
      "city": "Debepare",
      "countryCode": "PG"
  },
  {
      "label": "DBQ",
      "city": "Dubuque",
      "countryCode": "US"
  },
  {
      "label": "DBS",
      "city": "Dubois",
      "countryCode": "US"
  },
  {
      "label": "DBT",
      "city": "Debra Tabor",
      "countryCode": "ET"
  },
  {
      "label": "DBV",
      "city": "Dubrovnik",
      "countryCode": "HR"
  },
  {
      "label": "DBY",
      "city": "Dalby",
      "countryCode": "AU"
  },
  {
      "label": "DCI",
      "city": "Decimomannu",
      "countryCode": "IT"
  },
  {
      "label": "DCK",
      "city": "Dahl Creek",
      "countryCode": "US"
  },
  {
      "label": "DCM",
      "city": "Castres",
      "countryCode": "FR"
  },
  {
      "label": "DCN",
      "city": "Derby",
      "countryCode": "AU"
  },
  {
      "label": "DCR",
      "city": "Decatur",
      "countryCode": "US"
  },
  {
      "label": "DCS",
      "city": "Doncaster",
      "countryCode": "GB"
  },
  {
      "label": "DCT",
      "city": "Duncan Town",
      "countryCode": "BS"
  },
  {
      "label": "DCU",
      "city": "Decatur",
      "countryCode": "US"
  },
  {
      "label": "DDC",
      "city": "Dodge City",
      "countryCode": "US"
  },
  {
      "label": "DDG",
      "city": "Dandong",
      "countryCode": "CN"
  },
  {
      "label": "DDI",
      "city": "Daydream Is",
      "countryCode": "AU"
  },
  {
      "label": "DDM",
      "city": "Dodoima",
      "countryCode": "PG"
  },
  {
      "label": "DDN",
      "city": "Delta Downs",
      "countryCode": "AU"
  },
  {
      "label": "DDP",
      "city": "Dorado",
      "countryCode": "PR"
  },
  {
      "label": "DDU",
      "city": "Dadu",
      "countryCode": "PK"
  },
  {
      "label": "DEA",
      "city": "Dera Ghazi Khan",
      "countryCode": "PK"
  },
  {
      "label": "DEB",
      "city": "Debrecen",
      "countryCode": "HU"
  },
  {
      "label": "DEC",
      "city": "Decatur",
      "countryCode": "US"
  },
  {
      "label": "DEH",
      "city": "Decorah",
      "countryCode": "US"
  },
  {
      "label": "DEI",
      "city": "Denis Island",
      "countryCode": "SC"
  },
  {
      "label": "DEM",
      "city": "Dembidollo",
      "countryCode": "ET"
  },
  {
      "label": "DEN",
      "city": "Denver",
      "countryCode": "US"
  },
  {
      "label": "DER",
      "city": "Derim",
      "countryCode": "PG"
  },
  {
      "label": "DES",
      "city": "Desroches",
      "countryCode": "SC"
  },
  {
      "label": "DEZ",
      "city": "Deirezzor",
      "countryCode": "SY"
  },
  {
      "label": "DFI",
      "city": "Defiance",
      "countryCode": "US"
  },
  {
      "label": "DFP",
      "city": "Drumduff",
      "countryCode": "AU"
  },
  {
      "label": "DFW",
      "city": "Dallas",
      "countryCode": "US"
  },
  {
      "label": "DGA",
      "city": "Dangriga",
      "countryCode": "BZ"
  },
  {
      "label": "DGB",
      "city": "Danger Bay",
      "countryCode": "US"
  },
  {
      "label": "DGC",
      "city": "Degahbur",
      "countryCode": "ET"
  },
  {
      "label": "DGD",
      "city": "Dalgaranga",
      "countryCode": "AU"
  },
  {
      "label": "DGE",
      "city": "Mudgee",
      "countryCode": "AU"
  },
  {
      "label": "DGF",
      "city": "Douglas Lake",
      "countryCode": "CA"
  },
  {
      "label": "DGG",
      "city": "Daugo",
      "countryCode": "PG"
  },
  {
      "label": "DGN",
      "city": "Dahlgren",
      "countryCode": "US"
  },
  {
      "label": "DGO",
      "city": "Durango",
      "countryCode": "MX"
  },
  {
      "label": "DGP",
      "city": "Daugavpils",
      "countryCode": "LV"
  },
  {
      "label": "DGR",
      "city": "Dargaville",
      "countryCode": "NZ"
  },
  {
      "label": "DGT",
      "city": "Dumaguete",
      "countryCode": "PH"
  },
  {
      "label": "DGU",
      "city": "Dedougou",
      "countryCode": "BF"
  },
  {
      "label": "DGW",
      "city": "Douglas",
      "countryCode": "US"
  },
  {
      "label": "DHA",
      "city": "Dhahran",
      "countryCode": "SA"
  },
  {
      "label": "DHD",
      "city": "Durham Downs",
      "countryCode": "AU"
  },
  {
      "label": "DHI",
      "city": "Dhangarhi",
      "countryCode": "NP"
  },
  {
      "label": "DHL",
      "city": "Dhala",
      "countryCode": "YE"
  },
  {
      "label": "DHN",
      "city": "Dothan",
      "countryCode": "US"
  },
  {
      "label": "DHR",
      "city": "Den Helder",
      "countryCode": "NL"
  },
  {
      "label": "DHT",
      "city": "Dalhart",
      "countryCode": "US"
  },
  {
      "label": "DIC",
      "city": "Dili",
      "countryCode": "CD"
  },
  {
      "label": "DIE",
      "city": "Antsiranana",
      "countryCode": "MG"
  },
  {
      "label": "DIG",
      "city": "Diqing",
      "countryCode": "CN"
  },
  {
      "label": "DIJ",
      "city": "Dijon",
      "countryCode": "FR"
  },
  {
      "label": "DIK",
      "city": "Dickinson",
      "countryCode": "US"
  },
  {
      "label": "DIL",
      "city": "Dili",
      "countryCode": "ID"
  },
  {
      "label": "DIM",
      "city": "Dimbokro",
      "countryCode": "CI"
  },
  {
      "label": "DIN",
      "city": "Dien Bien Phu",
      "countryCode": "VN"
  },
  {
      "label": "DIO",
      "city": "Diomede Island",
      "countryCode": "US"
  },
  {
      "label": "DIP",
      "city": "Diapaga",
      "countryCode": "BF"
  },
  {
      "label": "DIQ",
      "city": "Divinopolis",
      "countryCode": "BR"
  },
  {
      "label": "DIR",
      "city": "Dire Dawa",
      "countryCode": "ET"
  },
  {
      "label": "DIS",
      "city": "Loubomo",
      "countryCode": "CG"
  },
  {
      "label": "DIV",
      "city": "Divo",
      "countryCode": "CI"
  },
  {
      "label": "DIY",
      "city": "Diyarbakir",
      "countryCode": "TR"
  },
  {
      "label": "DJA",
      "city": "Djougou",
      "countryCode": "BJ"
  },
  {
      "label": "DJB",
      "city": "Jambi",
      "countryCode": "ID"
  },
  {
      "label": "DJE",
      "city": "Djerba",
      "countryCode": "TN"
  },
  {
      "label": "DJG",
      "city": "Djanet",
      "countryCode": "DZ"
  },
  {
      "label": "DJJ",
      "city": "Jayapura",
      "countryCode": "ID"
  },
  {
      "label": "DJM",
      "city": "Djambala",
      "countryCode": "CG"
  },
  {
      "label": "DJN",
      "city": "Delta Junction",
      "countryCode": "US"
  },
  {
      "label": "DJO",
      "city": "Daloa",
      "countryCode": "CI"
  },
  {
      "label": "DJU",
      "city": "Djupivogur",
      "countryCode": "IS"
  },
  {
      "label": "DKI",
      "city": "Dunk Island",
      "countryCode": "AU"
  },
  {
      "label": "DKK",
      "city": "Dunkirk",
      "countryCode": "US"
  },
  {
      "label": "DKR",
      "city": "Dakar",
      "countryCode": "SN"
  },
  {
      "label": "DKS",
      "city": "Dikson",
      "countryCode": "RU"
  },
  {
      "label": "DKV",
      "city": "Docker River",
      "countryCode": "AU"
  },
  {
      "label": "DLA",
      "city": "Douala",
      "countryCode": "CM"
  },
  {
      "label": "DLB",
      "city": "Dalbertis",
      "countryCode": "PG"
  },
  {
      "label": "DLC",
      "city": "Dalian",
      "countryCode": "CN"
  },
  {
      "label": "DLD",
      "city": "Geilo",
      "countryCode": "NO"
  },
  {
      "label": "DLE",
      "city": "Dole",
      "countryCode": "FR"
  },
  {
      "label": "DLG",
      "city": "Dillingham",
      "countryCode": "US"
  },
  {
      "label": "DLH",
      "city": "Duluth",
      "countryCode": "US"
  },
  {
      "label": "DLI",
      "city": "Dalat",
      "countryCode": "VN"
  },
  {
      "label": "DLK",
      "city": "Dulkaninna",
      "countryCode": "AU"
  },
  {
      "label": "DLL",
      "city": "Dillon",
      "countryCode": "US"
  },
  {
      "label": "DLM",
      "city": "Dalaman",
      "countryCode": "TR"
  },
  {
      "label": "DLN",
      "city": "Dillon",
      "countryCode": "US"
  },
  {
      "label": "DLO",
      "city": "Dolomi",
      "countryCode": "US"
  },
  {
      "label": "DLS",
      "city": "The Dalles",
      "countryCode": "US"
  },
  {
      "label": "DLU",
      "city": "Dali",
      "countryCode": "CN"
  },
  {
      "label": "DLV",
      "city": "Delissaville",
      "countryCode": "AU"
  },
  {
      "label": "DLY",
      "city": "Dillons Bay",
      "countryCode": "VU"
  },
  {
      "label": "DLZ",
      "city": "Dalanzagdad",
      "countryCode": "MN"
  },
  {
      "label": "DMB",
      "city": "Zhambyl",
      "countryCode": "KZ"
  },
  {
      "label": "DMD",
      "city": "Doomadgee",
      "countryCode": "AU"
  },
  {
      "label": "DMK",
      "city": "Don Muang Airport",
      "countryCode": "TH"
  },
  {
      "label": "DMM",
      "city": "Dammam",
      "countryCode": "SA"
  },
  {
      "label": "DMN",
      "city": "Deming",
      "countryCode": "US"
  },
  {
      "label": "DMO",
      "city": "Sedalia",
      "countryCode": "US"
  },
  {
      "label": "DMR",
      "city": "Dhamar",
      "countryCode": "YE"
  },
  {
      "label": "DMT",
      "city": "Diamantino",
      "countryCode": "BR"
  },
  {
      "label": "DNB",
      "city": "Dunbar",
      "countryCode": "AU"
  },
  {
      "label": "DNC",
      "city": "Danane",
      "countryCode": "CI"
  },
  {
      "label": "DND",
      "city": "Dundee",
      "countryCode": "GB"
  },
  {
      "label": "DNF",
      "city": "Derna",
      "countryCode": "LY"
  },
  {
      "label": "DNH",
      "city": "Dunhuang",
      "countryCode": "CN"
  },
  {
      "label": "DNI",
      "city": "Wad Medani",
      "countryCode": "SD"
  },
  {
      "label": "DNK",
      "city": "Dnepropetrovsk",
      "countryCode": "UA"
  },
  {
      "label": "DNM",
      "city": "Denham",
      "countryCode": "AU"
  },
  {
      "label": "DNN",
      "city": "Dalton",
      "countryCode": "US"
  },
  {
      "label": "DNO",
      "city": "Dianopolis",
      "countryCode": "BR"
  },
  {
      "label": "DNP",
      "city": "Dang",
      "countryCode": "NP"
  },
  {
      "label": "DNQ",
      "city": "Deniliquin",
      "countryCode": "AU"
  },
  {
      "label": "DNR",
      "city": "Dinard",
      "countryCode": "FR"
  },
  {
      "label": "DNS",
      "city": "Denison",
      "countryCode": "US"
  },
  {
      "label": "DNU",
      "city": "Dinangat",
      "countryCode": "PG"
  },
  {
      "label": "DNV",
      "city": "Danville",
      "countryCode": "US"
  },
  {
      "label": "DNX",
      "city": "Dinder",
      "countryCode": "SD"
  },
  {
      "label": "DNZ",
      "city": "Denizli",
      "countryCode": "TR"
  },
  {
      "label": "DOA",
      "city": "Doany",
      "countryCode": "MG"
  },
  {
      "label": "DOB",
      "city": "Dobo",
      "countryCode": "ID"
  },
  {
      "label": "DOC",
      "city": "Dornoch",
      "countryCode": "GB"
  },
  {
      "label": "DOD",
      "city": "Dodoma",
      "countryCode": "TZ"
  },
  {
      "label": "DOE",
      "city": "Djoemoe",
      "countryCode": "SR"
  },
  {
      "label": "DOF",
      "city": "Dora Bay",
      "countryCode": "US"
  },
  {
      "label": "DOG",
      "city": "Dongola",
      "countryCode": "SD"
  },
  {
      "label": "DOH",
      "city": "Doha",
      "countryCode": "QA"
  },
  {
      "label": "DOI",
      "city": "Doini",
      "countryCode": "PG"
  },
  {
      "label": "DOK",
      "city": "Donetsk",
      "countryCode": "UA"
  },
  {
      "label": "DOL",
      "city": "Deauville",
      "countryCode": "FR"
  },
  {
      "label": "DOM",
      "city": "Dominica",
      "countryCode": "DM"
  },
  {
      "label": "DON",
      "city": "Dos Lagunas",
      "countryCode": "GT"
  },
  {
      "label": "DOO",
      "city": "Dorobisoro",
      "countryCode": "PG"
  },
  {
      "label": "DOP",
      "city": "Dolpa",
      "countryCode": "NP"
  },
  {
      "label": "DOR",
      "city": "Dori",
      "countryCode": "BF"
  },
  {
      "label": "DOS",
      "city": "Dios",
      "countryCode": "PG"
  },
  {
      "label": "DOU",
      "city": "Dourados",
      "countryCode": "BR"
  },
  {
      "label": "DOX",
      "city": "Dongara",
      "countryCode": "AU"
  },
  {
      "label": "DPE",
      "city": "Dieppe",
      "countryCode": "FR"
  },
  {
      "label": "DPG",
      "city": "Dugway",
      "countryCode": "US"
  },
  {
      "label": "DPK",
      "city": "Deer Park",
      "countryCode": "US"
  },
  {
      "label": "DPL",
      "city": "Dipolog",
      "countryCode": "PH"
  },
  {
      "label": "DPO",
      "city": "Devonport",
      "countryCode": "AU"
  },
  {
      "label": "DPS",
      "city": "Denpasar Bali",
      "countryCode": "ID"
  },
  {
      "label": "DPU",
      "city": "Dumpu",
      "countryCode": "PG"
  },
  {
      "label": "DQJ",
      "city": "Killdeer",
      "countryCode": "US"
  },
  {
      "label": "DRA",
      "city": "Mercury",
      "countryCode": "US"
  },
  {
      "label": "DRB",
      "city": "Derby",
      "countryCode": "AU"
  },
  {
      "label": "DRC",
      "city": "Dirico",
      "countryCode": "AO"
  },
  {
      "label": "DRD",
      "city": "Dorunda Station",
      "countryCode": "AU"
  },
  {
      "label": "DRE",
      "city": "Drummond Island",
      "countryCode": "US"
  },
  {
      "label": "DRF",
      "city": "Drift River",
      "countryCode": "US"
  },
  {
      "label": "DRG",
      "city": "Deering",
      "countryCode": "US"
  },
  {
      "label": "DRH",
      "city": "Dabra",
      "countryCode": "ID"
  },
  {
      "label": "DRI",
      "city": "De Ridder",
      "countryCode": "US"
  },
  {
      "label": "DRJ",
      "city": "Drietabbetje",
      "countryCode": "SR"
  },
  {
      "label": "DRM",
      "city": "Drama",
      "countryCode": "GR"
  },
  {
      "label": "DRN",
      "city": "Dirranbandi",
      "countryCode": "AU"
  },
  {
      "label": "DRO",
      "city": "Durango",
      "countryCode": "US"
  },
  {
      "label": "DRR",
      "city": "Durrie",
      "countryCode": "AU"
  },
  {
      "label": "DRS",
      "city": "Dresden",
      "countryCode": "DE"
  },
  {
      "label": "DRT",
      "city": "Del Rio",
      "countryCode": "US"
  },
  {
      "label": "DRU",
      "city": "Drummond",
      "countryCode": "US"
  },
  {
      "label": "DRW",
      "city": "Darwin",
      "countryCode": "AU"
  },
  {
      "label": "DRY",
      "city": "Drysdale River",
      "countryCode": "AU"
  },
  {
      "label": "DSA",
      "city": "Doncaster/Shaffield",
      "countryCode": "GB"
  },
  {
      "label": "DSC",
      "city": "Dschang",
      "countryCode": "CM"
  },
  {
      "label": "DSD",
      "city": "La Desirade",
      "countryCode": "GP"
  },
  {
      "label": "DSE",
      "city": "Dessie",
      "countryCode": "ET"
  },
  {
      "label": "DSG",
      "city": "Dilasag",
      "countryCode": "PH"
  },
  {
      "label": "DSI",
      "city": "Destin",
      "countryCode": "US"
  },
  {
      "label": "DSK",
      "city": "Dera Ismail Khan",
      "countryCode": "PK"
  },
  {
      "label": "DSL",
      "city": "Daru",
      "countryCode": "SL"
  },
  {
      "label": "DSM",
      "city": "Des Moines",
      "countryCode": "US"
  },
  {
      "label": "DSN",
      "city": "Dongsheng",
      "countryCode": "CN"
  },
  {
      "label": "DSS",
      "city": "Dakar",
      "countryCode": "SN"
  },
  {
      "label": "DSV",
      "city": "Dansville",
      "countryCode": "US"
  },
  {
      "label": "DTA",
      "city": "Delta",
      "countryCode": "US"
  },
  {
      "label": "DTB",
      "city": "Siborong-Borong",
      "countryCode": "ID"
  },
  {
      "label": "DTD",
      "city": "Datadawai",
      "countryCode": "ID"
  },
  {
      "label": "DTE",
      "city": "Daet",
      "countryCode": "PH"
  },
  {
      "label": "DTH",
      "city": "Death Valley",
      "countryCode": "US"
  },
  {
      "label": "DTI",
      "city": "Diamantina",
      "countryCode": "BR"
  },
  {
      "label": "DTL",
      "city": "Detroit Lakes",
      "countryCode": "US"
  },
  {
      "label": "DTM",
      "city": "Dortmund",
      "countryCode": "DE"
  },
  {
      "label": "DTR",
      "city": "Decatur Island",
      "countryCode": "US"
  },
  {
      "label": "DTT",
      "city": "Detroit",
      "countryCode": "US"
  },
  {
      "label": "DUA",
      "city": "Durant",
      "countryCode": "US"
  },
  {
      "label": "DUB",
      "city": "Dublin",
      "countryCode": "IE"
  },
  {
      "label": "DUC",
      "city": "Duncan",
      "countryCode": "US"
  },
  {
      "label": "DUD",
      "city": "Dunedin",
      "countryCode": "NZ"
  },
  {
      "label": "DUE",
      "city": "Dundo",
      "countryCode": "AO"
  },
  {
      "label": "DUF",
      "city": "Duck",
      "countryCode": "US"
  },
  {
      "label": "DUG",
      "city": "Douglas",
      "countryCode": "US"
  },
  {
      "label": "DUI",
      "city": "Duisburg",
      "countryCode": "DE"
  },
  {
      "label": "DUJ",
      "city": "Dubois",
      "countryCode": "US"
  },
  {
      "label": "DUK",
      "city": "Dukuduk",
      "countryCode": "ZA"
  },
  {
      "label": "DUM",
      "city": "Dumai",
      "countryCode": "ID"
  },
  {
      "label": "DUN",
      "city": "Dundas",
      "countryCode": "GL"
  },
  {
      "label": "DUQ",
      "city": "Duncan Quam",
      "countryCode": "CA"
  },
  {
      "label": "DUR",
      "city": "Durban",
      "countryCode": "ZA"
  },
  {
      "label": "DUS",
      "city": "Dusseldorf",
      "countryCode": "DE"
  },
  {
      "label": "DUT",
      "city": "Dutch Harbor",
      "countryCode": "US"
  },
  {
      "label": "DVA",
      "city": "Deva",
      "countryCode": "RO"
  },
  {
      "label": "DVL",
      "city": "Devils Lake",
      "countryCode": "US"
  },
  {
      "label": "DVN",
      "city": "Davenport",
      "countryCode": "US"
  },
  {
      "label": "DVO",
      "city": "Davao",
      "countryCode": "PH"
  },
  {
      "label": "DVP",
      "city": "Davenport Downs",
      "countryCode": "AU"
  },
  {
      "label": "DVR",
      "city": "Daly River",
      "countryCode": "AU"
  },
  {
      "label": "DVX",
      "city": "Dover",
      "countryCode": "US"
  },
  {
      "label": "DWA",
      "city": "Dwangwa",
      "countryCode": "MW"
  },
  {
      "label": "DWB",
      "city": "Soalala",
      "countryCode": "MG"
  },
  {
      "label": "DWS",
      "city": "Orlando",
      "countryCode": "US"
  },
  {
      "label": "DXA",
      "city": "Deux Alpes",
      "countryCode": "FR"
  },
  {
      "label": "DXB",
      "city": "Dubai",
      "countryCode": "AE"
  },
  {
      "label": "DXD",
      "city": "Dixie",
      "countryCode": "AU"
  },
  {
      "label": "DXR",
      "city": "Danbury",
      "countryCode": "US"
  },
  {
      "label": "DYA",
      "city": "Dysart",
      "countryCode": "AU"
  },
  {
      "label": "DYG",
      "city": "Dayong",
      "countryCode": "CN"
  },
  {
      "label": "DYL",
      "city": "Doylestown",
      "countryCode": "US"
  },
  {
      "label": "DYM",
      "city": "Diamantina Lakes",
      "countryCode": "AU"
  },
  {
      "label": "DYR",
      "city": "Anadyr",
      "countryCode": "RU"
  },
  {
      "label": "DYU",
      "city": "Dushanbe",
      "countryCode": "TJ"
  },
  {
      "label": "DYW",
      "city": "Daly Waters",
      "countryCode": "AU"
  },
  {
      "label": "DZA",
      "city": "Dzaoudzi",
      "countryCode": "YT"
  },
  {
      "label": "DZI",
      "city": "Codazzi",
      "countryCode": "CO"
  },
  {
      "label": "DZN",
      "city": "Zhezkazgan",
      "countryCode": "KZ"
  },
  {
      "label": "DZO",
      "city": "Durazno",
      "countryCode": "UY"
  },
  {
      "label": "DZU",
      "city": "Dazu",
      "countryCode": "CN"
  },
  {
      "label": "EAA",
      "city": "Eagle",
      "countryCode": "US"
  },
  {
      "label": "EAB",
      "city": "Abbse",
      "countryCode": "YE"
  },
  {
      "label": "EAE",
      "city": "Emae",
      "countryCode": "VU"
  },
  {
      "label": "EAM",
      "city": "Nejran",
      "countryCode": "SA"
  },
  {
      "label": "EAN",
      "city": "Wheatland",
      "countryCode": "US"
  },
  {
      "label": "EAP",
      "city": "Basel Euroairport",
      "countryCode": "CH"
  },
  {
      "label": "EAR",
      "city": "Kearney",
      "countryCode": "US"
  },
  {
      "label": "EAS",
      "city": "San Sebastian",
      "countryCode": "ES"
  },
  {
      "label": "EAT",
      "city": "Wenatchee",
      "countryCode": "US"
  },
  {
      "label": "EAU",
      "city": "Eau Claire",
      "countryCode": "US"
  },
  {
      "label": "EBA",
      "city": "Elba Island",
      "countryCode": "IT"
  },
  {
      "label": "EBB",
      "city": "Entebbe",
      "countryCode": "UG"
  },
  {
      "label": "EBD",
      "city": "El Obeid",
      "countryCode": "SD"
  },
  {
      "label": "EBG",
      "city": "El Bagre",
      "countryCode": "CO"
  },
  {
      "label": "EBJ",
      "city": "Esbjerg",
      "countryCode": "DK"
  },
  {
      "label": "EBL",
      "city": "Erbil",
      "countryCode": "IQ"
  },
  {
      "label": "EBM",
      "city": "El Borma",
      "countryCode": "TN"
  },
  {
      "label": "EBN",
      "city": "Ebadon",
      "countryCode": "MH"
  },
  {
      "label": "EBO",
      "city": "Ebon",
      "countryCode": "MH"
  },
  {
      "label": "EBS",
      "city": "Webster City",
      "countryCode": "US"
  },
  {
      "label": "EBU",
      "city": "St Etienne",
      "countryCode": "FR"
  },
  {
      "label": "EBW",
      "city": "Ebolowa",
      "countryCode": "CM"
  },
  {
      "label": "ECA",
      "city": "East Tawas",
      "countryCode": "US"
  },
  {
      "label": "ECG",
      "city": "Elizabeth City",
      "countryCode": "US"
  },
  {
      "label": "ECH",
      "city": "Echuca",
      "countryCode": "AU"
  },
  {
      "label": "ECN",
      "city": "Ercan",
      "countryCode": "CY"
  },
  {
      "label": "ECO",
      "city": "El Encanto",
      "countryCode": "CO"
  },
  {
      "label": "ECP",
      "city": "Panama City Beach",
      "countryCode": "US"
  },
  {
      "label": "ECR",
      "city": "El Charco",
      "countryCode": "CO"
  },
  {
      "label": "ECS",
      "city": "Newcastle",
      "countryCode": "US"
  },
  {
      "label": "EDA",
      "city": "Edna Bay",
      "countryCode": "US"
  },
  {
      "label": "EDB",
      "city": "Eldebba",
      "countryCode": "SD"
  },
  {
      "label": "EDD",
      "city": "Erldunda",
      "countryCode": "AU"
  },
  {
      "label": "EDE",
      "city": "Edenton",
      "countryCode": "US"
  },
  {
      "label": "EDG",
      "city": "Edgewood",
      "countryCode": "US"
  },
  {
      "label": "EDI",
      "city": "Edinburgh",
      "countryCode": "GB"
  },
  {
      "label": "EDK",
      "city": "El Dorado",
      "countryCode": "US"
  },
  {
      "label": "EDL",
      "city": "Eldoret",
      "countryCode": "KE"
  },
  {
      "label": "EDM",
      "city": "La Roche",
      "countryCode": "FR"
  },
  {
      "label": "EDO",
      "city": "Edremit",
      "countryCode": "TR"
  },
  {
      "label": "EDQ",
      "city": "Erandique",
      "countryCode": "HN"
  },
  {
      "label": "EDR",
      "city": "Edward River",
      "countryCode": "AU"
  },
  {
      "label": "EED",
      "city": "Needles",
      "countryCode": "US"
  },
  {
      "label": "EEK",
      "city": "Eek",
      "countryCode": "US"
  },
  {
      "label": "EEN",
      "city": "Keene",
      "countryCode": "US"
  },
  {
      "label": "EFB",
      "city": "Eight Fathom Bigh",
      "countryCode": "US"
  },
  {
      "label": "EFG",
      "city": "Efogi",
      "countryCode": "PG"
  },
  {
      "label": "EFK",
      "city": "Newport",
      "countryCode": "US"
  },
  {
      "label": "EFL",
      "city": "Kefallinia",
      "countryCode": "GR"
  },
  {
      "label": "EFO",
      "city": "East Fork",
      "countryCode": "US"
  },
  {
      "label": "EFW",
      "city": "Jefferson",
      "countryCode": "US"
  },
  {
      "label": "EGA",
      "city": "Engati",
      "countryCode": "PG"
  },
  {
      "label": "EGC",
      "city": "Bergerac",
      "countryCode": "FR"
  },
  {
      "label": "EGE",
      "city": "Vail Eagle",
      "countryCode": "US"
  },
  {
      "label": "EGL",
      "city": "Neghelli",
      "countryCode": "ET"
  },
  {
      "label": "EGM",
      "city": "Sege",
      "countryCode": "SB"
  },
  {
      "label": "EGN",
      "city": "Geneina",
      "countryCode": "SD"
  },
  {
      "label": "EGO",
      "city": "Belgorod",
      "countryCode": "RU"
  },
  {
      "label": "EGP",
      "city": "Eagle Pass",
      "countryCode": "US"
  },
  {
      "label": "EGS",
      "city": "Egilsstadir",
      "countryCode": "IS"
  },
  {
      "label": "EGV",
      "city": "Eagle River",
      "countryCode": "US"
  },
  {
      "label": "EGX",
      "city": "Egegik",
      "countryCode": "US"
  },
  {
      "label": "EHL",
      "city": "El Bolson",
      "countryCode": "AR"
  },
  {
      "label": "EHM",
      "city": "Cape Newenham",
      "countryCode": "US"
  },
  {
      "label": "EHT",
      "city": "East Hartford",
      "countryCode": "US"
  },
  {
      "label": "EIA",
      "city": "Eia",
      "countryCode": "PG"
  },
  {
      "label": "EIB",
      "city": "Eisenach",
      "countryCode": "DE"
  },
  {
      "label": "EIE",
      "city": "Eniseysk",
      "countryCode": "RU"
  },
  {
      "label": "EIH",
      "city": "Einasleigh",
      "countryCode": "AU"
  },
  {
      "label": "EIN",
      "city": "Eindhoven",
      "countryCode": "NL"
  },
  {
      "label": "EIS",
      "city": "Beef Island",
      "countryCode": "VG"
  },
  {
      "label": "EIY",
      "city": "Ein Yahav",
      "countryCode": "IL"
  },
  {
      "label": "EJA",
      "city": "Barrancabermeja",
      "countryCode": "CO"
  },
  {
      "label": "EJH",
      "city": "Wedjh",
      "countryCode": "SA"
  },
  {
      "label": "EKB",
      "city": "Ekibastuz",
      "countryCode": "KZ"
  },
  {
      "label": "EKD",
      "city": "Elkedra",
      "countryCode": "AU"
  },
  {
      "label": "EKE",
      "city": "Ekereku",
      "countryCode": "GY"
  },
  {
      "label": "EKI",
      "city": "Elkhart",
      "countryCode": "US"
  },
  {
      "label": "EKN",
      "city": "Elkins",
      "countryCode": "US"
  },
  {
      "label": "EKO",
      "city": "Elko",
      "countryCode": "US"
  },
  {
      "label": "EKT",
      "city": "Eskilstuna",
      "countryCode": "SE"
  },
  {
      "label": "EKX",
      "city": "Elizabethtown",
      "countryCode": "US"
  },
  {
      "label": "ELA",
      "city": "Eagle Lake",
      "countryCode": "US"
  },
  {
      "label": "ELB",
      "city": "El Banco",
      "countryCode": "CO"
  },
  {
      "label": "ELC",
      "city": "Elcho Island",
      "countryCode": "AU"
  },
  {
      "label": "ELD",
      "city": "El Dorado",
      "countryCode": "US"
  },
  {
      "label": "ELE",
      "city": "El Real",
      "countryCode": "PA"
  },
  {
      "label": "ELF",
      "city": "El Fasher",
      "countryCode": "SD"
  },
  {
      "label": "ELG",
      "city": "El Golea",
      "countryCode": "DZ"
  },
  {
      "label": "ELH",
      "city": "North Eleuthera",
      "countryCode": "BS"
  },
  {
      "label": "ELI",
      "city": "Elim",
      "countryCode": "US"
  },
  {
      "label": "ELJ",
      "city": "El Recreo",
      "countryCode": "CO"
  },
  {
      "label": "ELK",
      "city": "Elk City",
      "countryCode": "US"
  },
  {
      "label": "ELL",
      "city": "Ellisras",
      "countryCode": "ZA"
  },
  {
      "label": "ELM",
      "city": "Elmira",
      "countryCode": "US"
  },
  {
      "label": "ELN",
      "city": "Ellensburg",
      "countryCode": "US"
  },
  {
      "label": "ELO",
      "city": "Eldorado",
      "countryCode": "AR"
  },
  {
      "label": "ELP",
      "city": "El Paso",
      "countryCode": "US"
  },
  {
      "label": "ELQ",
      "city": "Gassim",
      "countryCode": "SA"
  },
  {
      "label": "ELR",
      "city": "Elelim",
      "countryCode": "ID"
  },
  {
      "label": "ELS",
      "city": "East London",
      "countryCode": "ZA"
  },
  {
      "label": "ELT",
      "city": "Tour Sinai City",
      "countryCode": "EG"
  },
  {
      "label": "ELU",
      "city": "El Oued",
      "countryCode": "DZ"
  },
  {
      "label": "ELW",
      "city": "Ellamar",
      "countryCode": "US"
  },
  {
      "label": "ELX",
      "city": "El Tigre",
      "countryCode": "VE"
  },
  {
      "label": "ELY",
      "city": "Ely",
      "countryCode": "US"
  },
  {
      "label": "ELZ",
      "city": "Wellsville",
      "countryCode": "US"
  },
  {
      "label": "EMA",
      "city": "East Midlands",
      "countryCode": "GB"
  },
  {
      "label": "EMD",
      "city": "Emerald",
      "countryCode": "AU"
  },
  {
      "label": "EME",
      "city": "Emden",
      "countryCode": "DE"
  },
  {
      "label": "EMG",
      "city": "Empangeni",
      "countryCode": "ZA"
  },
  {
      "label": "EMI",
      "city": "Emirau",
      "countryCode": "PG"
  },
  {
      "label": "EMK",
      "city": "Emmonak",
      "countryCode": "US"
  },
  {
      "label": "EMM",
      "city": "Kemerer",
      "countryCode": "US"
  },
  {
      "label": "EMN",
      "city": "Nema",
      "countryCode": "MR"
  },
  {
      "label": "EMO",
      "city": "Emo",
      "countryCode": "PG"
  },
  {
      "label": "EMP",
      "city": "Emporia",
      "countryCode": "US"
  },
  {
      "label": "EMS",
      "city": "Embessa",
      "countryCode": "PG"
  },
  {
      "label": "EMT",
      "city": "El Monte",
      "countryCode": "US"
  },
  {
      "label": "EMX",
      "city": "El Maiten",
      "countryCode": "AR"
  },
  {
      "label": "EMY",
      "city": "El Minya",
      "countryCode": "EG"
  },
  {
      "label": "ENA",
      "city": "Kenai",
      "countryCode": "US"
  },
  {
      "label": "ENB",
      "city": "Eneabba West",
      "countryCode": "AU"
  },
  {
      "label": "ENC",
      "city": "Nancy Essey",
      "countryCode": "FR"
  },
  {
      "label": "ENE",
      "city": "Ende",
      "countryCode": "ID"
  },
  {
      "label": "ENF",
      "city": "Enontekio",
      "countryCode": "FI"
  },
  {
      "label": "ENH",
      "city": "Enshi",
      "countryCode": "CN"
  },
  {
      "label": "ENI",
      "city": "El Nido",
      "countryCode": "PH"
  },
  {
      "label": "ENJ",
      "city": "El Naranjo",
      "countryCode": "GT"
  },
  {
      "label": "ENK",
      "city": "Enniskillen",
      "countryCode": "GB"
  },
  {
      "label": "ENL",
      "city": "Centralia",
      "countryCode": "US"
  },
  {
      "label": "ENN",
      "city": "Nenana",
      "countryCode": "US"
  },
  {
      "label": "ENO",
      "city": "Encarnacion",
      "countryCode": "PY"
  },
  {
      "label": "ENQ",
      "city": "Coronel Enrique",
      "countryCode": "HN"
  },
  {
      "label": "ENS",
      "city": "Enschede",
      "countryCode": "NL"
  },
  {
      "label": "ENT",
      "city": "Enewetak Island",
      "countryCode": "MH"
  },
  {
      "label": "ENU",
      "city": "Enugu",
      "countryCode": "NG"
  },
  {
      "label": "ENV",
      "city": "Wendover",
      "countryCode": "US"
  },
  {
      "label": "ENW",
      "city": "Kenosha",
      "countryCode": "US"
  },
  {
      "label": "ENY",
      "city": "Yan'an",
      "countryCode": "CN"
  },
  {
      "label": "EOI",
      "city": "Eday",
      "countryCode": "GB"
  },
  {
      "label": "EOK",
      "city": "Keokuk",
      "countryCode": "US"
  },
  {
      "label": "EOR",
      "city": "El Dorado",
      "countryCode": "VE"
  },
  {
      "label": "EOS",
      "city": "Neosho",
      "countryCode": "US"
  },
  {
      "label": "EOZ",
      "city": "Elorza",
      "countryCode": "VE"
  },
  {
      "label": "EPG",
      "city": "Weeping Water",
      "countryCode": "US"
  },
  {
      "label": "EPH",
      "city": "Ephrata Moseslke",
      "countryCode": "US"
  },
  {
      "label": "EPI",
      "city": "Epi",
      "countryCode": "VU"
  },
  {
      "label": "EPK",
      "city": "Episkopi",
      "countryCode": "CY"
  },
  {
      "label": "EPL",
      "city": "Epinal",
      "countryCode": "FR"
  },
  {
      "label": "EPN",
      "city": "Epena",
      "countryCode": "CG"
  },
  {
      "label": "EPR",
      "city": "Esperance",
      "countryCode": "AU"
  },
  {
      "label": "EPS",
      "city": "El Portillo",
      "countryCode": "DO"
  },
  {
      "label": "EPT",
      "city": "Eliptamin",
      "countryCode": "PG"
  },
  {
      "label": "EPU",
      "city": "Parnu",
      "countryCode": "EE"
  },
  {
      "label": "EQS",
      "city": "Esquel",
      "countryCode": "AR"
  },
  {
      "label": "ERA",
      "city": "Erigavo",
      "countryCode": "SO"
  },
  {
      "label": "ERB",
      "city": "Ernabella",
      "countryCode": "AU"
  },
  {
      "label": "ERC",
      "city": "Erzincan",
      "countryCode": "TR"
  },
  {
      "label": "ERD",
      "city": "Berdyansk",
      "countryCode": "UA"
  },
  {
      "label": "ERE",
      "city": "Erave",
      "countryCode": "PG"
  },
  {
      "label": "ERF",
      "city": "Erfurt",
      "countryCode": "DE"
  },
  {
      "label": "ERH",
      "city": "Errachidia",
      "countryCode": "MA"
  },
  {
      "label": "ERI",
      "city": "Erie",
      "countryCode": "US"
  },
  {
      "label": "ERM",
      "city": "Erechim",
      "countryCode": "BR"
  },
  {
      "label": "ERN",
      "city": "Eirunepe",
      "countryCode": "BR"
  },
  {
      "label": "ERR",
      "city": "Errol",
      "countryCode": "US"
  },
  {
      "label": "ERT",
      "city": "Erdenet",
      "countryCode": "MN"
  },
  {
      "label": "ERU",
      "city": "Erume",
      "countryCode": "PG"
  },
  {
      "label": "ERV",
      "city": "Kerrville",
      "countryCode": "US"
  },
  {
      "label": "ERZ",
      "city": "Erzurum",
      "countryCode": "TR"
  },
  {
      "label": "ESA",
      "city": "Esa'ala",
      "countryCode": "PG"
  },
  {
      "label": "ESC",
      "city": "Escanaba",
      "countryCode": "US"
  },
  {
      "label": "ESD",
      "city": "Eastsound",
      "countryCode": "US"
  },
  {
      "label": "ESE",
      "city": "Ensenada",
      "countryCode": "MX"
  },
  {
      "label": "ESG",
      "city": "Mariscal Estigarr",
      "countryCode": "PY"
  },
  {
      "label": "ESH",
      "city": "Shoreham By Sea",
      "countryCode": "GB"
  },
  {
      "label": "ESI",
      "city": "Espinosa",
      "countryCode": "BR"
  },
  {
      "label": "ESK",
      "city": "Eskisehir",
      "countryCode": "TR"
  },
  {
      "label": "ESL",
      "city": "Elista",
      "countryCode": "RU"
  },
  {
      "label": "ESM",
      "city": "Esmeraldas",
      "countryCode": "EC"
  },
  {
      "label": "ESN",
      "city": "Easton",
      "countryCode": "US"
  },
  {
      "label": "ESO",
      "city": "Espanola",
      "countryCode": "US"
  },
  {
      "label": "ESP",
      "city": "East Stroudsburg",
      "countryCode": "US"
  },
  {
      "label": "ESR",
      "city": "El Salvador",
      "countryCode": "CL"
  },
  {
      "label": "ESS",
      "city": "Essen",
      "countryCode": "DE"
  },
  {
      "label": "EST",
      "city": "Estherville",
      "countryCode": "US"
  },
  {
      "label": "ESU",
      "city": "Essaouira",
      "countryCode": "MA"
  },
  {
      "label": "ESW",
      "city": "Easton",
      "countryCode": "US"
  },
  {
      "label": "ETB",
      "city": "West Bend",
      "countryCode": "US"
  },
  {
      "label": "ETD",
      "city": "Etadunna",
      "countryCode": "AU"
  },
  {
      "label": "ETE",
      "city": "Genda Wuha",
      "countryCode": "ET"
  },
  {
      "label": "ETH",
      "city": "Elat",
      "countryCode": "IL"
  },
  {
      "label": "ETN",
      "city": "Eastland",
      "countryCode": "US"
  },
  {
      "label": "ETS",
      "city": "Enterprise",
      "countryCode": "US"
  },
  {
      "label": "ETZ",
      "city": "Metz Nancy",
      "countryCode": "FR"
  },
  {
      "label": "EUA",
      "city": "Eua",
      "countryCode": "TO"
  },
  {
      "label": "EUC",
      "city": "Eucla",
      "countryCode": "AU"
  },
  {
      "label": "EUE",
      "city": "Eureka",
      "countryCode": "US"
  },
  {
      "label": "EUF",
      "city": "Eufaula",
      "countryCode": "US"
  },
  {
      "label": "EUG",
      "city": "Eugene",
      "countryCode": "US"
  },
  {
      "label": "EUM",
      "city": "Neumuenster",
      "countryCode": "DE"
  },
  {
      "label": "EUN",
      "city": "Laayoune",
      "countryCode": "MA"
  },
  {
      "label": "EUO",
      "city": "Paratebueno",
      "countryCode": "CO"
  },
  {
      "label": "EUX",
      "city": "St Eustatius",
      "countryCode": "AN"
  },
  {
      "label": "EVD",
      "city": "Eva Downs",
      "countryCode": "AU"
  },
  {
      "label": "EVE",
      "city": "Harstad-Narvik",
      "countryCode": "NO"
  },
  {
      "label": "EVG",
      "city": "Sveg",
      "countryCode": "SE"
  },
  {
      "label": "EVH",
      "city": "Evans Head",
      "countryCode": "AU"
  },
  {
      "label": "EVM",
      "city": "Eveleth",
      "countryCode": "US"
  },
  {
      "label": "EVN",
      "city": "Yerevan",
      "countryCode": "AM"
  },
  {
      "label": "EVV",
      "city": "Evansville",
      "countryCode": "US"
  },
  {
      "label": "EVW",
      "city": "Evanston",
      "countryCode": "US"
  },
  {
      "label": "EVX",
      "city": "Evreux",
      "countryCode": "FR"
  },
  {
      "label": "EWB",
      "city": "New Bedford",
      "countryCode": "US"
  },
  {
      "label": "EWE",
      "city": "Ewer",
      "countryCode": "ID"
  },
  {
      "label": "EWI",
      "city": "Enarotali",
      "countryCode": "ID"
  },
  {
      "label": "EWK",
      "city": "Newton",
      "countryCode": "US"
  },
  {
      "label": "EWN",
      "city": "New Bern",
      "countryCode": "US"
  },
  {
      "label": "EWO",
      "city": "Ewo",
      "countryCode": "CG"
  },
  {
      "label": "ewr",
      "city": "newark",
      "countryCode": "US"
  },
  {
      "label": "EWY",
      "city": "Newbury",
      "countryCode": "GB"
  },
  {
      "label": "EXM",
      "city": "Exmouth Gulf",
      "countryCode": "AU"
  },
  {
      "label": "EXS",
      "city": "Exeter",
      "countryCode": "GB"
  },
  {
      "label": "EXT",
      "city": "Exeter",
      "countryCode": "GB"
  },
  {
      "label": "EYL",
      "city": "Yelimane",
      "countryCode": "ML"
  },
  {
      "label": "EYP",
      "city": "El Yopal",
      "countryCode": "CO"
  },
  {
      "label": "EYR",
      "city": "Yerington",
      "countryCode": "US"
  },
  {
      "label": "EYS",
      "city": "Eliye Springs",
      "countryCode": "KE"
  },
  {
      "label": "EYW",
      "city": "Key West",
      "countryCode": "US"
  },
  {
      "label": "EZS",
      "city": "Elazig",
      "countryCode": "TR"
  },
  {
      "label": "FAA",
      "city": "Faranah",
      "countryCode": "GN"
  },
  {
      "label": "FAB",
      "city": "Farnborough",
      "countryCode": "GB"
  },
  {
      "label": "FAC",
      "city": "Faaite",
      "countryCode": "PF"
  },
  {
      "label": "FAE",
      "city": "Faroe Islands",
      "countryCode": "FO"
  },
  {
      "label": "FAF",
      "city": "Fort Eustis",
      "countryCode": "US"
  },
  {
      "label": "FAG",
      "city": "Fagurholsmyri",
      "countryCode": "IS"
  },
  {
      "label": "FAH",
      "city": "Farah",
      "countryCode": "AF"
  },
  {
      "label": "FAI",
      "city": "Fairbanks",
      "countryCode": "US"
  },
  {
      "label": "FAJ",
      "city": "Fajardo",
      "countryCode": "PR"
  },
  {
      "label": "FAK",
      "city": "False Island",
      "countryCode": "US"
  },
  {
      "label": "FAL",
      "city": "Roma",
      "countryCode": "US"
  },
  {
      "label": "FAM",
      "city": "Farmington",
      "countryCode": "US"
  },
  {
      "label": "FAN",
      "city": "Farsund",
      "countryCode": "NO"
  },
  {
      "label": "FAO",
      "city": "Faro",
      "countryCode": "PT"
  },
  {
      "label": "FAR",
      "city": "Fargo",
      "countryCode": "US"
  },
  {
      "label": "FAS",
      "city": "Faskrudsfjordur",
      "countryCode": "IS"
  },
  {
      "label": "FAT",
      "city": "Fresno",
      "countryCode": "US"
  },
  {
      "label": "FAV",
      "city": "Fakarava",
      "countryCode": "PF"
  },
  {
      "label": "FAY",
      "city": "Fayetteville",
      "countryCode": "US"
  },
  {
      "label": "FBA",
      "city": "Fonte Boa",
      "countryCode": "BR"
  },
  {
      "label": "FBD",
      "city": "Faizabad",
      "countryCode": "AF"
  },
  {
      "label": "FBE",
      "city": "Francisco Beltrao",
      "countryCode": "BR"
  },
  {
      "label": "FBG",
      "city": "Fort Bragg",
      "countryCode": "US"
  },
  {
      "label": "FBL",
      "city": "Faribault",
      "countryCode": "US"
  },
  {
      "label": "FBM",
      "city": "Lubumbashi",
      "countryCode": "CG"
  },
  {
      "label": "FBR",
      "city": "Fort Bridger",
      "countryCode": "US"
  },
  {
      "label": "FBY",
      "city": "Fairbury",
      "countryCode": "US"
  },
  {
      "label": "FCA",
      "city": "Kalispell",
      "countryCode": "US"
  },
  {
      "label": "FCB",
      "city": "Ficksburg",
      "countryCode": "ZA"
  },
  {
      "label": "FCN",
      "city": "Cuxhaven",
      "countryCode": "DE"
  },
  {
      "label": "FCY",
      "city": "Forrest City",
      "countryCode": "US"
  },
  {
      "label": "FDE",
      "city": "Forde",
      "countryCode": "NO"
  },
  {
      "label": "FDF",
      "city": "Fort De France",
      "countryCode": "MQ"
  },
  {
      "label": "FDH",
      "city": "Friedrichshafen",
      "countryCode": "DE"
  },
  {
      "label": "FDK",
      "city": "Frederick",
      "countryCode": "US"
  },
  {
      "label": "FDR",
      "city": "Frederick",
      "countryCode": "US"
  },
  {
      "label": "FDU",
      "city": "Bandundu",
      "countryCode": "CD"
  },
  {
      "label": "FDY",
      "city": "Findlay",
      "countryCode": "US"
  },
  {
      "label": "FEA",
      "city": "Fetlar",
      "countryCode": "GB"
  },
  {
      "label": "FEB",
      "city": "Sanfebagar",
      "countryCode": "NP"
  },
  {
      "label": "FEC",
      "city": "Feira De Santana",
      "countryCode": "BR"
  },
  {
      "label": "FEG",
      "city": "Fergana",
      "countryCode": "UZ"
  },
  {
      "label": "FEJ",
      "city": "Feijo",
      "countryCode": "BR"
  },
  {
      "label": "FEK",
      "city": "Ferkessedougou",
      "countryCode": "CI"
  },
  {
      "label": "FEL",
      "city": "Fuerstenfeldbruck",
      "countryCode": "DE"
  },
  {
      "label": "FEN",
      "city": "Fernando De Noron",
      "countryCode": "BR"
  },
  {
      "label": "FEP",
      "city": "Freeport",
      "countryCode": "US"
  },
  {
      "label": "FER",
      "city": "Fergusons Gulf",
      "countryCode": "KE"
  },
  {
      "label": "FET",
      "city": "Fremont",
      "countryCode": "US"
  },
  {
      "label": "FEZ",
      "city": "Fez",
      "countryCode": "MA"
  },
  {
      "label": "FFA",
      "city": "Kill Devil Hills",
      "countryCode": "US"
  },
  {
      "label": "FFD",
      "city": "Fairford",
      "countryCode": "GB"
  },
  {
      "label": "FFL",
      "city": "Fairfield",
      "countryCode": "US"
  },
  {
      "label": "FFM",
      "city": "Fergus Falls",
      "countryCode": "US"
  },
  {
      "label": "FFT",
      "city": "Frankfort",
      "countryCode": "US"
  },
  {
      "label": "FFU",
      "city": "Futaleufu",
      "countryCode": "CL"
  },
  {
      "label": "FGD",
      "city": "Fderik",
      "countryCode": "MR"
  },
  {
      "label": "FGL",
      "city": "Fox Glacier",
      "countryCode": "NZ"
  },
  {
      "label": "FGU",
      "city": "Fangatau",
      "countryCode": "PF"
  },
  {
      "label": "FHU",
      "city": "Fort Huachuca",
      "countryCode": "US"
  },
  {
      "label": "FHZ",
      "city": "Fakahina",
      "countryCode": "PF"
  },
  {
      "label": "FIC",
      "city": "Fire Cove",
      "countryCode": "US"
  },
  {
      "label": "FID",
      "city": "Fishers Island",
      "countryCode": "US"
  },
  {
      "label": "FIE",
      "city": "Fair Isle",
      "countryCode": "GB"
  },
  {
      "label": "FIG",
      "city": "Fria",
      "countryCode": "GN"
  },
  {
      "label": "FIH",
      "city": "Kinshasa",
      "countryCode": "CD"
  },
  {
      "label": "FIK",
      "city": "Finke",
      "countryCode": "AU"
  },
  {
      "label": "FIL",
      "city": "Fillmore",
      "countryCode": "US"
  },
  {
      "label": "FIN",
      "city": "Finschhafen",
      "countryCode": "PG"
  },
  {
      "label": "FIV",
      "city": "Five Finger",
      "countryCode": "US"
  },
  {
      "label": "FIZ",
      "city": "Fitzroy Crossing",
      "countryCode": "AU"
  },
  {
      "label": "FJR",
      "city": "Al Fujairah",
      "countryCode": "AE"
  },
  {
      "label": "FKB",
      "city": "Karlsruhe",
      "countryCode": "DE"
  },
  {
      "label": "FKI",
      "city": "Kisangani",
      "countryCode": "CD"
  },
  {
      "label": "FKJ",
      "city": "Fukui",
      "countryCode": "JP"
  },
  {
      "label": "FKL",
      "city": "Franklin",
      "countryCode": "US"
  },
  {
      "label": "FKN",
      "city": "Franklin",
      "countryCode": "US"
  },
  {
      "label": "FKQ",
      "city": "Fak Fak",
      "countryCode": "ID"
  },
  {
      "label": "FKS",
      "city": "Fukushima",
      "countryCode": "JP"
  },
  {
      "label": "FLA",
      "city": "Florencia",
      "countryCode": "CO"
  },
  {
      "label": "FLB",
      "city": "Floriano",
      "countryCode": "BR"
  },
  {
      "label": "FLC",
      "city": "Falls Creek",
      "countryCode": "AU"
  },
  {
      "label": "FLD",
      "city": "Fond Du Lac",
      "countryCode": "US"
  },
  {
      "label": "FLF",
      "city": "Flensburg",
      "countryCode": "DE"
  },
  {
      "label": "FLG",
      "city": "Flagstaff",
      "countryCode": "US"
  },
  {
      "label": "FLH",
      "city": "Flotta",
      "countryCode": "GB"
  },
  {
      "label": "FLI",
      "city": "Flateyri",
      "countryCode": "IS"
  },
  {
      "label": "FLJ",
      "city": "Falls Bay",
      "countryCode": "US"
  },
  {
      "label": "FLL",
      "city": "Fort Lauderdale",
      "countryCode": "US"
  },
  {
      "label": "FLM",
      "city": "Filadelfia",
      "countryCode": "PY"
  },
  {
      "label": "FLN",
      "city": "Florianopolis",
      "countryCode": "BR"
  },
  {
      "label": "FLO",
      "city": "Florence",
      "countryCode": "US"
  },
  {
      "label": "FLP",
      "city": "Flippin",
      "countryCode": "US"
  },
  {
      "label": "FLR",
      "city": "Florence",
      "countryCode": "IT"
  },
  {
      "label": "FLS",
      "city": "Flinders Island",
      "countryCode": "AU"
  },
  {
      "label": "FLT",
      "city": "Flat",
      "countryCode": "US"
  },
  {
      "label": "FLV",
      "city": "Flora Valley",
      "countryCode": "AU"
  },
  {
      "label": "FLW",
      "city": "Flores Island",
      "countryCode": "PT"
  },
  {
      "label": "FLY",
      "city": "Finley",
      "countryCode": "AU"
  },
  {
      "label": "FMA",
      "city": "Formosa",
      "countryCode": "AR"
  },
  {
      "label": "FMC",
      "city": "Five Mile",
      "countryCode": "US"
  },
  {
      "label": "FME",
      "city": "Fort Meade",
      "countryCode": "US"
  },
  {
      "label": "FMG",
      "city": "Flamingo",
      "countryCode": "CR"
  },
  {
      "label": "FMI",
      "city": "Kalemie",
      "countryCode": "CD"
  },
  {
      "label": "FMM",
      "city": "Memmingen",
      "countryCode": "DE"
  },
  {
      "label": "FMN",
      "city": "Farmington",
      "countryCode": "US"
  },
  {
      "label": "FMO",
      "city": "Muenster",
      "countryCode": "DE"
  },
  {
      "label": "FMS",
      "city": "Fort Madison",
      "countryCode": "US"
  },
  {
      "label": "FMY",
      "city": "Fort Myers",
      "countryCode": "US"
  },
  {
      "label": "FNA",
      "city": "Freetown",
      "countryCode": "SL"
  },
  {
      "label": "FNB",
      "city": "Neubrandenburg",
      "countryCode": "DE"
  },
  {
      "label": "FNC",
      "city": "Funchal",
      "countryCode": "PT"
  },
  {
      "label": "FNE",
      "city": "Fane",
      "countryCode": "PG"
  },
  {
      "label": "FNG",
      "city": "Fada Ngourma",
      "countryCode": "BF"
  },
  {
      "label": "FNH",
      "city": "Fincha",
      "countryCode": "ET"
  },
  {
      "label": "FNI",
      "city": "Nimes",
      "countryCode": "FR"
  },
  {
      "label": "FNJ",
      "city": "Pyongyang",
      "countryCode": "KP"
  },
  {
      "label": "FNK",
      "city": "Fin Creek",
      "countryCode": "US"
  },
  {
      "label": "FNL",
      "city": "Fort Collins Love",
      "countryCode": "US"
  },
  {
      "label": "FNT",
      "city": "Flint",
      "countryCode": "US"
  },
  {
      "label": "FOA",
      "city": "Foula",
      "countryCode": "GB"
  },
  {
      "label": "FOB",
      "city": "Fort Bragg",
      "countryCode": "US"
  },
  {
      "label": "FOC",
      "city": "Fuzhou",
      "countryCode": "CN"
  },
  {
      "label": "FOD",
      "city": "Fort Dodge",
      "countryCode": "US"
  },
  {
      "label": "FOE",
      "city": "Topeka",
      "countryCode": "US"
  },
  {
      "label": "FOG",
      "city": "Foggia",
      "countryCode": "IT"
  },
  {
      "label": "FOK",
      "city": "Westhampton",
      "countryCode": "US"
  },
  {
      "label": "FOM",
      "city": "Foumban",
      "countryCode": "CM"
  },
  {
      "label": "FON",
      "city": "Fortuna",
      "countryCode": "CR"
  },
  {
      "label": "FOO",
      "city": "Numfoor",
      "countryCode": "ID"
  },
  {
      "label": "FOP",
      "city": "Forest Park",
      "countryCode": "US"
  },
  {
      "label": "FOR",
      "city": "Fortaleza",
      "countryCode": "BR"
  },
  {
      "label": "FOS",
      "city": "Forrest",
      "countryCode": "AU"
  },
  {
      "label": "FOT",
      "city": "Forster",
      "countryCode": "AU"
  },
  {
      "label": "FOU",
      "city": "Fougamou",
      "countryCode": "GA"
  },
  {
      "label": "FOX",
      "city": "Fox",
      "countryCode": "US"
  },
  {
      "label": "FOY",
      "city": "Foya",
      "countryCode": "LR"
  },
  {
      "label": "FPO",
      "city": "Freeport",
      "countryCode": "BS"
  },
  {
      "label": "FPR",
      "city": "Fort Pierce",
      "countryCode": "US"
  },
  {
      "label": "FPY",
      "city": "Perry",
      "countryCode": "US"
  },
  {
      "label": "FQQ",
      "city": "Sightseeing Flight",
      "countryCode": "AT"
  },
  {
      "label": "FRA",
      "city": "Frankfurt",
      "countryCode": "DE"
  },
  {
      "label": "FRB",
      "city": "Forbes",
      "countryCode": "AU"
  },
  {
      "label": "FRC",
      "city": "Franca",
      "countryCode": "BR"
  },
  {
      "label": "FRD",
      "city": "Friday Harbor",
      "countryCode": "US"
  },
  {
      "label": "FRE",
      "city": "Fera Island",
      "countryCode": "SB"
  },
  {
      "label": "FRG",
      "city": "Farmingdale",
      "countryCode": "US"
  },
  {
      "label": "FRH",
      "city": "French Lick",
      "countryCode": "US"
  },
  {
      "label": "FRI",
      "city": "Fort Riley",
      "countryCode": "US"
  },
  {
      "label": "FRJ",
      "city": "Frejus",
      "countryCode": "FR"
  },
  {
      "label": "FRK",
      "city": "Fregate Island",
      "countryCode": "SC"
  },
  {
      "label": "FRL",
      "city": "Forli",
      "countryCode": "IT"
  },
  {
      "label": "FRM",
      "city": "Fairmont",
      "countryCode": "US"
  },
  {
      "label": "FRN",
      "city": "Fort Richardson",
      "countryCode": "US"
  },
  {
      "label": "FRO",
      "city": "Floro",
      "countryCode": "NO"
  },
  {
      "label": "FRP",
      "city": "Fresh Water Bay",
      "countryCode": "US"
  },
  {
      "label": "FRQ",
      "city": "Feramin",
      "countryCode": "PG"
  },
  {
      "label": "FRR",
      "city": "Front Royal",
      "countryCode": "US"
  },
  {
      "label": "FRS",
      "city": "Flores",
      "countryCode": "GT"
  },
  {
      "label": "FRT",
      "city": "Frutillar",
      "countryCode": "CL"
  },
  {
      "label": "FRU",
      "city": "Bishkek",
      "countryCode": "KG"
  },
  {
      "label": "FRW",
      "city": "Francistown",
      "countryCode": "BW"
  },
  {
      "label": "FRY",
      "city": "Fryeburg",
      "countryCode": "US"
  },
  {
      "label": "FRZ",
      "city": "Fritzlar",
      "countryCode": "DE"
  },
  {
      "label": "FSC",
      "city": "Figari",
      "countryCode": "FR"
  },
  {
      "label": "FSD",
      "city": "Sioux Falls",
      "countryCode": "US"
  },
  {
      "label": "FSI",
      "city": "Fort Sill",
      "countryCode": "US"
  },
  {
      "label": "FSK",
      "city": "Fort Scott",
      "countryCode": "US"
  },
  {
      "label": "FSL",
      "city": "Fossil Downs",
      "countryCode": "AU"
  },
  {
      "label": "FSM",
      "city": "Fort Smith",
      "countryCode": "US"
  },
  {
      "label": "FSN",
      "city": "Fort Sheridan",
      "countryCode": "US"
  },
  {
      "label": "FSP",
      "city": "St Pierre",
      "countryCode": "PM"
  },
  {
      "label": "FSS",
      "city": "Forres",
      "countryCode": "GB"
  },
  {
      "label": "FST",
      "city": "Fort Stockton",
      "countryCode": "US"
  },
  {
      "label": "FSU",
      "city": "Fort Sumner",
      "countryCode": "US"
  },
  {
      "label": "FTA",
      "city": "Futuna Island",
      "countryCode": "VU"
  },
  {
      "label": "FTE",
      "city": "El Calafate",
      "countryCode": "AR"
  },
  {
      "label": "FTI",
      "city": "Fitiuta",
      "countryCode": "AS"
  },
  {
      "label": "FTK",
      "city": "Fort Knox",
      "countryCode": "US"
  },
  {
      "label": "FTL",
      "city": "Fortuna Ledge",
      "countryCode": "US"
  },
  {
      "label": "FTU",
      "city": "Fort Dauphin",
      "countryCode": "MG"
  },
  {
      "label": "FTX",
      "city": "Owando",
      "countryCode": "CG"
  },
  {
      "label": "FUB",
      "city": "Fulleborn",
      "countryCode": "PG"
  },
  {
      "label": "FUE",
      "city": "Fuerteventura",
      "countryCode": "ES"
  },
  {
      "label": "FUG",
      "city": "Fuyang",
      "countryCode": "CN"
  },
  {
      "label": "FUJ",
      "city": "Fukue",
      "countryCode": "JP"
  },
  {
      "label": "FUK",
      "city": "Fukuoka",
      "countryCode": "JP"
  },
  {
      "label": "FUL",
      "city": "Fullerton",
      "countryCode": "US"
  },
  {
      "label": "FUM",
      "city": "Fuma",
      "countryCode": "PG"
  },
  {
      "label": "FUN",
      "city": "Funafuti Atol",
      "countryCode": "TV"
  },
  {
      "label": "FUO",
      "city": "Fuoshan",
      "countryCode": "CN"
  },
  {
      "label": "FUT",
      "city": "Futuna Island",
      "countryCode": "WF"
  },
  {
      "label": "FVL",
      "city": "Flora Valley",
      "countryCode": "AU"
  },
  {
      "label": "FVR",
      "city": "Forrest River",
      "countryCode": "AU"
  },
  {
      "label": "FWA",
      "city": "Fort Wayne",
      "countryCode": "US"
  },
  {
      "label": "FWL",
      "city": "Farewell",
      "countryCode": "US"
  },
  {
      "label": "FWM",
      "city": "Fort William",
      "countryCode": "GB"
  },
  {
      "label": "FXM",
      "city": "Flaxman Island",
      "countryCode": "US"
  },
  {
      "label": "FXO",
      "city": "Cuamba",
      "countryCode": "MZ"
  },
  {
      "label": "FXY",
      "city": "Forest City",
      "countryCode": "US"
  },
  {
      "label": "FYM",
      "city": "Fayetteville",
      "countryCode": "US"
  },
  {
      "label": "FYN",
      "city": "Fuyun",
      "countryCode": "CN"
  },
  {
      "label": "FYT",
      "city": "Faya",
      "countryCode": "TD"
  },
  {
      "label": "FYU",
      "city": "Fort Yukon",
      "countryCode": "US"
  },
  {
      "label": "FYV",
      "city": "Fayetteville",
      "countryCode": "US"
  },
  {
      "label": "FZO",
      "city": "Filton",
      "countryCode": "GB"
  },
  {
      "label": "GAA",
      "city": "Guamal",
      "countryCode": "CO"
  },
  {
      "label": "GAB",
      "city": "Gabbs",
      "countryCode": "US"
  },
  {
      "label": "GAC",
      "city": "Gracias",
      "countryCode": "HN"
  },
  {
      "label": "GAD",
      "city": "Gadsden",
      "countryCode": "US"
  },
  {
      "label": "GAE",
      "city": "Gabes",
      "countryCode": "TN"
  },
  {
      "label": "GAF",
      "city": "Gafsa",
      "countryCode": "TN"
  },
  {
      "label": "GAG",
      "city": "Gage",
      "countryCode": "US"
  },
  {
      "label": "GAH",
      "city": "Gayndah",
      "countryCode": "AU"
  },
  {
      "label": "GAI",
      "city": "Gaithersburg",
      "countryCode": "US"
  },
  {
      "label": "GAJ",
      "city": "Yamagata",
      "countryCode": "JP"
  },
  {
      "label": "GAK",
      "city": "Gakona",
      "countryCode": "US"
  },
  {
      "label": "GAL",
      "city": "Galena",
      "countryCode": "US"
  },
  {
      "label": "GAM",
      "city": "Gambell",
      "countryCode": "US"
  },
  {
      "label": "GAN",
      "city": "Gan Island",
      "countryCode": "MV"
  },
  {
      "label": "GAO",
      "city": "Guantanamo",
      "countryCode": "CU"
  },
  {
      "label": "GAP",
      "city": "Gusap",
      "countryCode": "PG"
  },
  {
      "label": "GAQ",
      "city": "Gao",
      "countryCode": "ML"
  },
  {
      "label": "GAR",
      "city": "Garaina",
      "countryCode": "PG"
  },
  {
      "label": "GAS",
      "city": "Garissa",
      "countryCode": "KE"
  },
  {
      "label": "GAT",
      "city": "Gap",
      "countryCode": "FR"
  },
  {
      "label": "GAV",
      "city": "Gag Island",
      "countryCode": "ID"
  },
  {
      "label": "GAW",
      "city": "Gangaw",
      "countryCode": "MM"
  },
  {
      "label": "GAX",
      "city": "Gamba",
      "countryCode": "GA"
  },
  {
      "label": "GAZ",
      "city": "Guasopa",
      "countryCode": "PG"
  },
  {
      "label": "GBA",
      "city": "Big Bay",
      "countryCode": "VU"
  },
  {
      "label": "GBB",
      "city": "Gara Djebilet",
      "countryCode": "DZ"
  },
  {
      "label": "GBC",
      "city": "Gasuke",
      "countryCode": "PG"
  },
  {
      "label": "GBD",
      "city": "Great Bend",
      "countryCode": "US"
  },
  {
      "label": "GBE",
      "city": "Gaborone",
      "countryCode": "BW"
  },
  {
      "label": "GBF",
      "city": "Negarbo",
      "countryCode": "PG"
  },
  {
      "label": "GBG",
      "city": "Galesburg",
      "countryCode": "US"
  },
  {
      "label": "GBH",
      "city": "Galbraith Lake",
      "countryCode": "US"
  },
  {
      "label": "GBI",
      "city": "Grand Bahama",
      "countryCode": "BS"
  },
  {
      "label": "GBJ",
      "city": "Marie Galante",
      "countryCode": "GP"
  },
  {
      "label": "GBK",
      "city": "Gbangbatok",
      "countryCode": "SL"
  },
  {
      "label": "GBL",
      "city": "Goulburn Island",
      "countryCode": "AU"
  },
  {
      "label": "GBM",
      "city": "Garbaharey",
      "countryCode": "SO"
  },
  {
      "label": "GBP",
      "city": "Gamboola",
      "countryCode": "AU"
  },
  {
      "label": "GBR",
      "city": "Great Barrington",
      "countryCode": "US"
  },
  {
      "label": "GBS",
      "city": "Port Fitzroy",
      "countryCode": "NZ"
  },
  {
      "label": "GBU",
      "city": "Khashm El Girba",
      "countryCode": "SD"
  },
  {
      "label": "GBV",
      "city": "Gibb River",
      "countryCode": "AU"
  },
  {
      "label": "GBX",
      "city": "Granada",
      "countryCode": "ES"
  },
  {
      "label": "GBZ",
      "city": "Great Barrier Island",
      "countryCode": "NZ"
  },
  {
      "label": "GCA",
      "city": "Guacamaya",
      "countryCode": "CO"
  },
  {
      "label": "GCC",
      "city": "Gillette",
      "countryCode": "US"
  },
  {
      "label": "GCI",
      "city": "Guernsey",
      "countryCode": "GB"
  },
  {
      "label": "GCK",
      "city": "Garden City",
      "countryCode": "US"
  },
  {
      "label": "GCM",
      "city": "Grand Cayman Island",
      "countryCode": "KY"
  },
  {
      "label": "GCN",
      "city": "Grand Canyon",
      "countryCode": "US"
  },
  {
      "label": "GCY",
      "city": "Greenville",
      "countryCode": "US"
  },
  {
      "label": "GDA",
      "city": "Gounda",
      "countryCode": "CF"
  },
  {
      "label": "GDD",
      "city": "Gordon Downs",
      "countryCode": "AU"
  },
  {
      "label": "GDE",
      "city": "Gode Iddidole",
      "countryCode": "ET"
  },
  {
      "label": "GDG",
      "city": "Magdagachi",
      "countryCode": "RU"
  },
  {
      "label": "GDI",
      "city": "Gordil",
      "countryCode": "CF"
  },
  {
      "label": "GDJ",
      "city": "Gandajika",
      "countryCode": "CD"
  },
  {
      "label": "GDL",
      "city": "Guadalajara",
      "countryCode": "MX"
  },
  {
      "label": "GDM",
      "city": "Gardner",
      "countryCode": "US"
  },
  {
      "label": "GDN",
      "city": "Gdansk",
      "countryCode": "PL"
  },
  {
      "label": "GDO",
      "city": "Guasdualito",
      "countryCode": "VE"
  },
  {
      "label": "GDP",
      "city": "Guadalupe",
      "countryCode": "BR"
  },
  {
      "label": "GDQ",
      "city": "Gondar",
      "countryCode": "ET"
  },
  {
      "label": "GDT",
      "city": "Grand Turk Island",
      "countryCode": "TC"
  },
  {
      "label": "GDV",
      "city": "Glendive",
      "countryCode": "US"
  },
  {
      "label": "GDW",
      "city": "Gladwin",
      "countryCode": "US"
  },
  {
      "label": "GDX",
      "city": "Magadan",
      "countryCode": "RU"
  },
  {
      "label": "GDZ",
      "city": "Gelendzik",
      "countryCode": "RU"
  },
  {
      "label": "GEB",
      "city": "Gebe",
      "countryCode": "ID"
  },
  {
      "label": "GEC",
      "city": "Gecitkale",
      "countryCode": "CY"
  },
  {
      "label": "GED",
      "city": "Georgetown",
      "countryCode": "US"
  },
  {
      "label": "GEE",
      "city": "George Town",
      "countryCode": "AU"
  },
  {
      "label": "GEF",
      "city": "Geva Airstrip",
      "countryCode": "SB"
  },
  {
      "label": "GEG",
      "city": "Spokane",
      "countryCode": "US"
  },
  {
      "label": "GEI",
      "city": "Green Islands",
      "countryCode": "PG"
  },
  {
      "label": "GEK",
      "city": "Ganes Creek",
      "countryCode": "US"
  },
  {
      "label": "GEL",
      "city": "Santo Angelo",
      "countryCode": "BR"
  },
  {
      "label": "GEO",
      "city": "Georgetown",
      "countryCode": "GY"
  },
  {
      "label": "GER",
      "city": "Nueva Gerona",
      "countryCode": "CU"
  },
  {
      "label": "GES",
      "city": "General Santos",
      "countryCode": "PH"
  },
  {
      "label": "GET",
      "city": "Geraldton",
      "countryCode": "AU"
  },
  {
      "label": "GEV",
      "city": "Gallivare",
      "countryCode": "SE"
  },
  {
      "label": "GEW",
      "city": "Gewoya",
      "countryCode": "PG"
  },
  {
      "label": "GEX",
      "city": "Geelong",
      "countryCode": "AU"
  },
  {
      "label": "GEY",
      "city": "Greybull",
      "countryCode": "US"
  },
  {
      "label": "GFB",
      "city": "Togiak Fish",
      "countryCode": "US"
  },
  {
      "label": "GFD",
      "city": "Greenfield",
      "countryCode": "US"
  },
  {
      "label": "GFE",
      "city": "Grenfell",
      "countryCode": "AU"
  },
  {
      "label": "GFF",
      "city": "Griffith",
      "countryCode": "AU"
  },
  {
      "label": "GFK",
      "city": "Grand Forks",
      "countryCode": "US"
  },
  {
      "label": "GFL",
      "city": "Glens Falls",
      "countryCode": "US"
  },
  {
      "label": "GFN",
      "city": "Grafton",
      "countryCode": "AU"
  },
  {
      "label": "GFO",
      "city": "Bartica",
      "countryCode": "GY"
  },
  {
      "label": "GFR",
      "city": "Granville",
      "countryCode": "FR"
  },
  {
      "label": "GFY",
      "city": "Grootfontein",
      "countryCode": "NA"
  },
  {
      "label": "GGC",
      "city": "Lumbala",
      "countryCode": "AO"
  },
  {
      "label": "GGD",
      "city": "Gregory Downs",
      "countryCode": "AU"
  },
  {
      "label": "GGE",
      "city": "Georgetown",
      "countryCode": "US"
  },
  {
      "label": "GGG",
      "city": "Longview",
      "countryCode": "US"
  },
  {
      "label": "GGL",
      "city": "Gilgal",
      "countryCode": "CO"
  },
  {
      "label": "GGN",
      "city": "Gagnoa",
      "countryCode": "CI"
  },
  {
      "label": "GGO",
      "city": "Guiglo",
      "countryCode": "CI"
  },
  {
      "label": "GGR",
      "city": "Garoe",
      "countryCode": "SO"
  },
  {
      "label": "GGS",
      "city": "Gdor Gregores",
      "countryCode": "AR"
  },
  {
      "label": "GGT",
      "city": "George Town",
      "countryCode": "BS"
  },
  {
      "label": "GGW",
      "city": "Glasgow",
      "countryCode": "US"
  },
  {
      "label": "GHA",
      "city": "Ghardaia",
      "countryCode": "DZ"
  },
  {
      "label": "GHB",
      "city": "Governors Harbour",
      "countryCode": "BS"
  },
  {
      "label": "GHC",
      "city": "Great Harbour",
      "countryCode": "BS"
  },
  {
      "label": "GHD",
      "city": "Ghimbi",
      "countryCode": "ET"
  },
  {
      "label": "GHE",
      "city": "Garachine",
      "countryCode": "PA"
  },
  {
      "label": "GHF",
      "city": "Giebelstadt",
      "countryCode": "DE"
  },
  {
      "label": "GHK",
      "city": "Gush Katif",
      "countryCode": "IL"
  },
  {
      "label": "GHM",
      "city": "Centerville",
      "countryCode": "US"
  },
  {
      "label": "GHN",
      "city": "Guanghan",
      "countryCode": "CN"
  },
  {
      "label": "GHT",
      "city": "Ghat",
      "countryCode": "LY"
  },
  {
      "label": "GHU",
      "city": "Gualeguaychu",
      "countryCode": "AR"
  },
  {
      "label": "GIB",
      "city": "Gibraltar",
      "countryCode": "GI"
  },
  {
      "label": "GIC",
      "city": "Boigu Island",
      "countryCode": "AU"
  },
  {
      "label": "GID",
      "city": "Gitega",
      "countryCode": "BI"
  },
  {
      "label": "GIF",
      "city": "Winter Haven",
      "countryCode": "US"
  },
  {
      "label": "GII",
      "city": "Siguiri",
      "countryCode": "GN"
  },
  {
      "label": "GIL",
      "city": "Gilgit",
      "countryCode": "PK"
  },
  {
      "label": "GIM",
      "city": "Miele Mimbale",
      "countryCode": "GA"
  },
  {
      "label": "GIR",
      "city": "Girardot",
      "countryCode": "CO"
  },
  {
      "label": "GIS",
      "city": "Gisborne",
      "countryCode": "NZ"
  },
  {
      "label": "GIT",
      "city": "Geita",
      "countryCode": "TZ"
  },
  {
      "label": "GIY",
      "city": "Giyani",
      "countryCode": "ZA"
  },
  {
      "label": "GIZ",
      "city": "Gizan",
      "countryCode": "SA"
  },
  {
      "label": "GJA",
      "city": "Guanaja",
      "countryCode": "HN"
  },
  {
      "label": "GJL",
      "city": "Jijel",
      "countryCode": "DZ"
  },
  {
      "label": "GJM",
      "city": "Guajara Mirim",
      "countryCode": "BR"
  },
  {
      "label": "GJR",
      "city": "Gjogur",
      "countryCode": "IS"
  },
  {
      "label": "GJT",
      "city": "Grand Junction",
      "countryCode": "US"
  },
  {
      "label": "GKA",
      "city": "Goroka",
      "countryCode": "PG"
  },
  {
      "label": "GKE",
      "city": "Geilenkirchen",
      "countryCode": "DE"
  },
  {
      "label": "GKH",
      "city": "Gorkha",
      "countryCode": "NP"
  },
  {
      "label": "GKL",
      "city": "Great Keppel Island",
      "countryCode": "AU"
  },
  {
      "label": "GKN",
      "city": "Gulkana Glennalln",
      "countryCode": "US"
  },
  {
      "label": "GKO",
      "city": "Kongoboumba",
      "countryCode": "GA"
  },
  {
      "label": "GKT",
      "city": "Gatlinburg",
      "countryCode": "US"
  },
  {
      "label": "GLA",
      "city": "Glasgow",
      "countryCode": "GB"
  },
  {
      "label": "GLC",
      "city": "Geladi",
      "countryCode": "ET"
  },
  {
      "label": "GLD",
      "city": "Goodland",
      "countryCode": "US"
  },
  {
      "label": "GLE",
      "city": "Gainesville",
      "countryCode": "US"
  },
  {
      "label": "GLF",
      "city": "Golfito",
      "countryCode": "CR"
  },
  {
      "label": "GLG",
      "city": "Glengyle",
      "countryCode": "AU"
  },
  {
      "label": "GLH",
      "city": "Greenville",
      "countryCode": "US"
  },
  {
      "label": "GLI",
      "city": "Glen Innes",
      "countryCode": "AU"
  },
  {
      "label": "GLK",
      "city": "Galcaio",
      "countryCode": "SO"
  },
  {
      "label": "GLL",
      "city": "Gol",
      "countryCode": "NO"
  },
  {
      "label": "GLM",
      "city": "Glenormiston",
      "countryCode": "AU"
  },
  {
      "label": "GLN",
      "city": "Goulimime",
      "countryCode": "MA"
  },
  {
      "label": "GLO",
      "city": "Gloucester",
      "countryCode": "GB"
  },
  {
      "label": "GLP",
      "city": "Gulgubip",
      "countryCode": "PG"
  },
  {
      "label": "GLQ",
      "city": "Glennallen",
      "countryCode": "US"
  },
  {
      "label": "GLR",
      "city": "Gaylord",
      "countryCode": "US"
  },
  {
      "label": "GLS",
      "city": "Galveston",
      "countryCode": "US"
  },
  {
      "label": "GLT",
      "city": "Gladstone",
      "countryCode": "AU"
  },
  {
      "label": "GLV",
      "city": "Golovin",
      "countryCode": "US"
  },
  {
      "label": "GLW",
      "city": "Glasgow",
      "countryCode": "US"
  },
  {
      "label": "GLX",
      "city": "Galela",
      "countryCode": "ID"
  },
  {
      "label": "GLY",
      "city": "Goldsworthy",
      "countryCode": "AU"
  },
  {
      "label": "GLZ",
      "city": "Breda",
      "countryCode": "NL"
  },
  {
      "label": "GMA",
      "city": "Gemena",
      "countryCode": "CD"
  },
  {
      "label": "GMB",
      "city": "Gambela",
      "countryCode": "ET"
  },
  {
      "label": "GMC",
      "city": "Guerima",
      "countryCode": "CO"
  },
  {
      "label": "GME",
      "city": "Gomel",
      "countryCode": "BY"
  },
  {
      "label": "GMI",
      "city": "Gasmata Island",
      "countryCode": "PG"
  },
  {
      "label": "GMM",
      "city": "Gamboma",
      "countryCode": "CG"
  },
  {
      "label": "GMN",
      "city": "Greymouth",
      "countryCode": "NZ"
  },
  {
      "label": "GMO",
      "city": "Gombe",
      "countryCode": "NG"
  },
  {
      "label": "GMR",
      "city": "Gambier Island",
      "countryCode": "PF"
  },
  {
      "label": "GMS",
      "city": "Guimaraes",
      "countryCode": "BR"
  },
  {
      "label": "GMT",
      "city": "Granite Mountain",
      "countryCode": "US"
  },
  {
      "label": "GMV",
      "city": "Monument Valley",
      "countryCode": "US"
  },
  {
      "label": "GMY",
      "city": "Rheindahlen",
      "countryCode": "DE"
  },
  {
      "label": "GMZ",
      "city": "San Sebastian (La Gomera)",
      "countryCode": "ES"
  },
  {
      "label": "GNA",
      "city": "Grodna",
      "countryCode": "BY"
  },
  {
      "label": "GNB",
      "city": "Grenoble",
      "countryCode": "FR"
  },
  {
      "label": "GND",
      "city": "Grenada",
      "countryCode": "GD"
  },
  {
      "label": "GNE",
      "city": "Ghent",
      "countryCode": "BE"
  },
  {
      "label": "GNG",
      "city": "Gooding",
      "countryCode": "US"
  },
  {
      "label": "GNI",
      "city": "Green Island",
      "countryCode": "TW"
  },
  {
      "label": "GNM",
      "city": "Guanambi",
      "countryCode": "BR"
  },
  {
      "label": "GNN",
      "city": "Ghinnir",
      "countryCode": "ET"
  },
  {
      "label": "GNR",
      "city": "General Roca",
      "countryCode": "AR"
  },
  {
      "label": "GNS",
      "city": "Gunungsitoli",
      "countryCode": "ID"
  },
  {
      "label": "GNT",
      "city": "Grants",
      "countryCode": "US"
  },
  {
      "label": "GNU",
      "city": "Goodnews Mumtrak",
      "countryCode": "US"
  },
  {
      "label": "GNV",
      "city": "Gainesville",
      "countryCode": "US"
  },
  {
      "label": "GNZ",
      "city": "Ghanzi",
      "countryCode": "BW"
  },
  {
      "label": "GOA",
      "city": "Genoa",
      "countryCode": "IT"
  },
  {
      "label": "GOB",
      "city": "Goba",
      "countryCode": "ET"
  },
  {
      "label": "GOC",
      "city": "Gora",
      "countryCode": "PG"
  },
  {
      "label": "GOE",
      "city": "Gonalia",
      "countryCode": "PG"
  },
  {
      "label": "GOG",
      "city": "Gobabis",
      "countryCode": "NA"
  },
  {
      "label": "GOH",
      "city": "Nuuk",
      "countryCode": "GL"
  },
  {
      "label": "GOJ",
      "city": "Nizhniy Novgorod",
      "countryCode": "RU"
  },
  {
      "label": "GOK",
      "city": "Guthrie",
      "countryCode": "US"
  },
  {
      "label": "GOL",
      "city": "Gold Beach",
      "countryCode": "US"
  },
  {
      "label": "GOM",
      "city": "Goma",
      "countryCode": "CD"
  },
  {
      "label": "GON",
      "city": "Groton",
      "countryCode": "US"
  },
  {
      "label": "GOO",
      "city": "Goondiwindi",
      "countryCode": "AU"
  },
  {
      "label": "GOQ",
      "city": "Golmud",
      "countryCode": "CN"
  },
  {
      "label": "GOR",
      "city": "Gore",
      "countryCode": "ET"
  },
  {
      "label": "GOS",
      "city": "Gosford",
      "countryCode": "AU"
  },
  {
      "label": "GOT",
      "city": "Gothenburg",
      "countryCode": "SE"
  },
  {
      "label": "GOU",
      "city": "Garoua",
      "countryCode": "CM"
  },
  {
      "label": "GOV",
      "city": "Gove",
      "countryCode": "AU"
  },
  {
      "label": "GOW",
      "city": "Garrow Lake",
      "countryCode": "CA"
  },
  {
      "label": "GOY",
      "city": "Gal Oya",
      "countryCode": "LK"
  },
  {
      "label": "GOZ",
      "city": "Gorna Orechovitsa",
      "countryCode": "BG"
  },
  {
      "label": "GPA",
      "city": "Patras",
      "countryCode": "GR"
  },
  {
      "label": "GPB",
      "city": "Guarapuava",
      "countryCode": "BR"
  },
  {
      "label": "GPI",
      "city": "Guapi",
      "countryCode": "CO"
  },
  {
      "label": "GPL",
      "city": "Guapiles",
      "countryCode": "CR"
  },
  {
      "label": "GPN",
      "city": "Garden Point",
      "countryCode": "AU"
  },
  {
      "label": "GPO",
      "city": "General Pico",
      "countryCode": "AR"
  },
  {
      "label": "GPS",
      "city": "Galapagos Islands",
      "countryCode": "EC"
  },
  {
      "label": "GPT",
      "city": "Gulfport",
      "countryCode": "US"
  },
  {
      "label": "GPZ",
      "city": "Grand Rapids",
      "countryCode": "US"
  },
  {
      "label": "GQQ",
      "city": "Galion",
      "countryCode": "US"
  },
  {
      "label": "GRA",
      "city": "Gamarra",
      "countryCode": "CO"
  },
  {
      "label": "GRB",
      "city": "Green Bay",
      "countryCode": "US"
  },
  {
      "label": "GRC",
      "city": "Grand Cess",
      "countryCode": "LR"
  },
  {
      "label": "GRD",
      "city": "Greenwood",
      "countryCode": "US"
  },
  {
      "label": "GRE",
      "city": "Greenville",
      "countryCode": "US"
  },
  {
      "label": "GRG",
      "city": "Gardez",
      "countryCode": "AF"
  },
  {
      "label": "GRH",
      "city": "Garuahi",
      "countryCode": "PG"
  },
  {
      "label": "GRI",
      "city": "Grand Island",
      "countryCode": "US"
  },
  {
      "label": "GRJ",
      "city": "George",
      "countryCode": "ZA"
  },
  {
      "label": "GRK",
      "city": "Bell County",
      "countryCode": "US"
  },
  {
      "label": "GRL",
      "city": "Garasa",
      "countryCode": "PG"
  },
  {
      "label": "GRM",
      "city": "Grand Marais",
      "countryCode": "US"
  },
  {
      "label": "GRN",
      "city": "Gordon",
      "countryCode": "US"
  },
  {
      "label": "GRO",
      "city": "Gerona",
      "countryCode": "ES"
  },
  {
      "label": "GRP",
      "city": "Gurupi",
      "countryCode": "BR"
  },
  {
      "label": "GRQ",
      "city": "Groningen",
      "countryCode": "NL"
  },
  {
      "label": "GRR",
      "city": "Grand Rapids",
      "countryCode": "US"
  },
  {
      "label": "GRS",
      "city": "Grosseto",
      "countryCode": "IT"
  },
  {
      "label": "GRT",
      "city": "Gujrat",
      "countryCode": "PK"
  },
  {
      "label": "GRV",
      "city": "Groznyj",
      "countryCode": "RU"
  },
  {
      "label": "GRW",
      "city": "Graciosa Island",
      "countryCode": "PT"
  },
  {
      "label": "GRX",
      "city": "Granada",
      "countryCode": "ES"
  },
  {
      "label": "GRY",
      "city": "Grimsey",
      "countryCode": "IS"
  },
  {
      "label": "GRZ",
      "city": "Graz",
      "countryCode": "AT"
  },
  {
      "label": "GSA",
      "city": "Long Pasia",
      "countryCode": "MY"
  },
  {
      "label": "GSC",
      "city": "Gascoyne Junction",
      "countryCode": "AU"
  },
  {
      "label": "GSH",
      "city": "Goshen",
      "countryCode": "US"
  },
  {
      "label": "GSI",
      "city": "Guadalcanal",
      "countryCode": "SB"
  },
  {
      "label": "GSL",
      "city": "Taltheilei",
      "countryCode": "CA"
  },
  {
      "label": "GSM",
      "city": "Gheshm",
      "countryCode": "IR"
  },
  {
      "label": "GSN",
      "city": "Mount Gunson",
      "countryCode": "AU"
  },
  {
      "label": "GSO",
      "city": "Greensboro",
      "countryCode": "US"
  },
  {
      "label": "GSP",
      "city": "Greenville",
      "countryCode": "US"
  },
  {
      "label": "GSR",
      "city": "Gardo",
      "countryCode": "SO"
  },
  {
      "label": "GSS",
      "city": "Sabi Sabi",
      "countryCode": "ZA"
  },
  {
      "label": "GST",
      "city": "Gustavus",
      "countryCode": "US"
  },
  {
      "label": "GSU",
      "city": "Gedaref",
      "countryCode": "SD"
  },
  {
      "label": "GSY",
      "city": "Grimsby",
      "countryCode": "GB"
  },
  {
      "label": "GTA",
      "city": "Gatokae",
      "countryCode": "SB"
  },
  {
      "label": "GTB",
      "city": "Genting",
      "countryCode": "MY"
  },
  {
      "label": "GTC",
      "city": "Green Turtle",
      "countryCode": "BS"
  },
  {
      "label": "GTE",
      "city": "Groote Eylandt",
      "countryCode": "AU"
  },
  {
      "label": "GTF",
      "city": "Great Falls",
      "countryCode": "US"
  },
  {
      "label": "GTG",
      "city": "Grantsburg",
      "countryCode": "US"
  },
  {
      "label": "GTI",
      "city": "Guettin",
      "countryCode": "DE"
  },
  {
      "label": "GTK",
      "city": "Sungei Tekai",
      "countryCode": "MY"
  },
  {
      "label": "GTO",
      "city": "Gorontalo",
      "countryCode": "ID"
  },
  {
      "label": "GTS",
      "city": "Granites",
      "countryCode": "AU"
  },
  {
      "label": "GTT",
      "city": "Georgetown",
      "countryCode": "AU"
  },
  {
      "label": "GTW",
      "city": "Zlin",
      "countryCode": "CZ"
  },
  {
      "label": "GTY",
      "city": "Gettysburg",
      "countryCode": "US"
  },
  {
      "label": "GUA",
      "city": "Guatemala City",
      "countryCode": "GT"
  },
  {
      "label": "GUB",
      "city": "Guerrero Negro",
      "countryCode": "MX"
  },
  {
      "label": "GUC",
      "city": "Gunnison",
      "countryCode": "US"
  },
  {
      "label": "GUD",
      "city": "Goundam",
      "countryCode": "ML"
  },
  {
      "label": "GUE",
      "city": "Guriaso",
      "countryCode": "PG"
  },
  {
      "label": "GUF",
      "city": "Gulf Shores",
      "countryCode": "US"
  },
  {
      "label": "GUG",
      "city": "Guari",
      "countryCode": "PG"
  },
  {
      "label": "GUH",
      "city": "Gunnedah",
      "countryCode": "AU"
  },
  {
      "label": "GUI",
      "city": "Guiria",
      "countryCode": "VE"
  },
  {
      "label": "GUJ",
      "city": "Guaratingueta",
      "countryCode": "BR"
  },
  {
      "label": "GUL",
      "city": "Goulburn",
      "countryCode": "AU"
  },
  {
      "label": "GUM",
      "city": "Guam",
      "countryCode": "GU"
  },
  {
      "label": "GUO",
      "city": "Gualaco",
      "countryCode": "HN"
  },
  {
      "label": "GUP",
      "city": "Gallup",
      "countryCode": "US"
  },
  {
      "label": "GUQ",
      "city": "Guanare",
      "countryCode": "VE"
  },
  {
      "label": "GUR",
      "city": "Alotau",
      "countryCode": "PG"
  },
  {
      "label": "GUT",
      "city": "Guetersloh",
      "countryCode": "DE"
  },
  {
      "label": "GUU",
      "city": "Grundarfjordur",
      "countryCode": "IS"
  },
  {
      "label": "GUV",
      "city": "Mougulu",
      "countryCode": "PG"
  },
  {
      "label": "GUW",
      "city": "Atyrau",
      "countryCode": "KZ"
  },
  {
      "label": "GUY",
      "city": "Guymon",
      "countryCode": "US"
  },
  {
      "label": "GUZ",
      "city": "Guarapari",
      "countryCode": "BR"
  },
  {
      "label": "GVA",
      "city": "Geneva",
      "countryCode": "CH"
  },
  {
      "label": "GVE",
      "city": "Gordonsville",
      "countryCode": "US"
  },
  {
      "label": "GVI",
      "city": "Green River",
      "countryCode": "PG"
  },
  {
      "label": "GVL",
      "city": "Gainesville",
      "countryCode": "US"
  },
  {
      "label": "GVP",
      "city": "Greenvale",
      "countryCode": "AU"
  },
  {
      "label": "GVR",
      "city": "Governador Valada",
      "countryCode": "BR"
  },
  {
      "label": "GVT",
      "city": "Greenville",
      "countryCode": "US"
  },
  {
      "label": "GVW",
      "city": "Grandview",
      "countryCode": "US"
  },
  {
      "label": "GVX",
      "city": "Gavle",
      "countryCode": "SE"
  },
  {
      "label": "GWA",
      "city": "Gwa",
      "countryCode": "MM"
  },
  {
      "label": "GWD",
      "city": "Gwadar",
      "countryCode": "PK"
  },
  {
      "label": "GWE",
      "city": "Gweru",
      "countryCode": "ZW"
  },
  {
      "label": "GWN",
      "city": "Gnarowein",
      "countryCode": "PG"
  },
  {
      "label": "GWO",
      "city": "Greenwood",
      "countryCode": "US"
  },
  {
      "label": "GWS",
      "city": "Glenwood Springs",
      "countryCode": "US"
  },
  {
      "label": "GWT",
      "city": "Westerland",
      "countryCode": "DE"
  },
  {
      "label": "GWV",
      "city": "Glendale",
      "countryCode": "US"
  },
  {
      "label": "GWY",
      "city": "Galway",
      "countryCode": "IE"
  },
  {
      "label": "GXF",
      "city": "Seiyun",
      "countryCode": "YE"
  },
  {
      "label": "GXG",
      "city": "Negage",
      "countryCode": "AO"
  },
  {
      "label": "GXQ",
      "city": "Coyhaique",
      "countryCode": "CL"
  },
  {
      "label": "GXX",
      "city": "Yagoua",
      "countryCode": "CM"
  },
  {
      "label": "GXY",
      "city": "Greeley",
      "countryCode": "US"
  },
  {
      "label": "GYA",
      "city": "Guayaramerin",
      "countryCode": "BO"
  },
  {
      "label": "GYD",
      "city": "Baku",
      "countryCode": "AZ"
  },
  {
      "label": "GYE",
      "city": "Guayaquil",
      "countryCode": "EC"
  },
  {
      "label": "GYI",
      "city": "Gisenyi",
      "countryCode": "RW"
  },
  {
      "label": "GYL",
      "city": "Argyle",
      "countryCode": "AU"
  },
  {
      "label": "GYM",
      "city": "Guaymas",
      "countryCode": "MX"
  },
  {
      "label": "GYN",
      "city": "Goiania",
      "countryCode": "BR"
  },
  {
      "label": "GYP",
      "city": "Gympie",
      "countryCode": "AU"
  },
  {
      "label": "GYR",
      "city": "Goodyear",
      "countryCode": "US"
  },
  {
      "label": "GZA",
      "city": "Gaza City",
      "countryCode": "PS"
  },
  {
      "label": "GZI",
      "city": "Ghazni",
      "countryCode": "AF"
  },
  {
      "label": "GZM",
      "city": "Gozo",
      "countryCode": "MT"
  },
  {
      "label": "GZO",
      "city": "Gizo",
      "countryCode": "SB"
  },
  {
      "label": "GZP",
      "city": "Gazipasa",
      "countryCode": "TR"
  },
  {
      "label": "GZT",
      "city": "Gaziantep",
      "countryCode": "TR"
  },
  {
      "label": "gzz",
      "city": "Atyrau",
      "countryCode": "KZ"
  },
  {
      "label": "HAA",
      "city": "Hasvik",
      "countryCode": "NO"
  },
  {
      "label": "HAB",
      "city": "Hamilton",
      "countryCode": "US"
  },
  {
      "label": "HAC",
      "city": "Hachijo Jima",
      "countryCode": "JP"
  },
  {
      "label": "HAD",
      "city": "Halmstad",
      "countryCode": "SE"
  },
  {
      "label": "HAE",
      "city": "Havasupai",
      "countryCode": "US"
  },
  {
      "label": "HAF",
      "city": "Half Moon",
      "countryCode": "US"
  },
  {
      "label": "HAG",
      "city": "The Hague",
      "countryCode": "NL"
  },
  {
      "label": "HAI",
      "city": "Three Rivers",
      "countryCode": "US"
  },
  {
      "label": "HAJ",
      "city": "Hanover",
      "countryCode": "DE"
  },
  {
      "label": "HAK",
      "city": "Haikou",
      "countryCode": "CN"
  },
  {
      "label": "HAL",
      "city": "Halali",
      "countryCode": "NA"
  },
  {
      "label": "HAM",
      "city": "Hamburg",
      "countryCode": "DE"
  },
  {
      "label": "HAN",
      "city": "Hanoi",
      "countryCode": "VN"
  },
  {
      "label": "HAO",
      "city": "Hamilton",
      "countryCode": "US"
  },
  {
      "label": "HAP",
      "city": "Long Island",
      "countryCode": "AU"
  },
  {
      "label": "HAQ",
      "city": "Hanimaadhoo",
      "countryCode": "MV"
  },
  {
      "label": "HAR",
      "city": "Harrisburg",
      "countryCode": "US"
  },
  {
      "label": "HAS",
      "city": "Hail",
      "countryCode": "SA"
  },
  {
      "label": "HAT",
      "city": "Heathlands",
      "countryCode": "AU"
  },
  {
      "label": "HAU",
      "city": "Haugesund",
      "countryCode": "NO"
  },
  {
      "label": "HAV",
      "city": "Havana",
      "countryCode": "CU"
  },
  {
      "label": "HAW",
      "city": "Haverfordwest",
      "countryCode": "GB"
  },
  {
      "label": "HAY",
      "city": "Haycock",
      "countryCode": "US"
  },
  {
      "label": "HAZ",
      "city": "Hatzfeldthaven",
      "countryCode": "PG"
  },
  {
      "label": "HBA",
      "city": "Hobart",
      "countryCode": "AU"
  },
  {
      "label": "HBC",
      "city": "Hanus",
      "countryCode": "US"
  },
  {
      "label": "HBE",
      "city": "Borg el Arab",
      "countryCode": "EG"
  },
  {
      "label": "HBG",
      "city": "Hattiesburg",
      "countryCode": "US"
  },
  {
      "label": "HBH",
      "city": "Hobart Bay",
      "countryCode": "US"
  },
  {
      "label": "HBI",
      "city": "Harbour Island",
      "countryCode": "BS"
  },
  {
      "label": "HBN",
      "city": "Phu Bon",
      "countryCode": "VN"
  },
  {
      "label": "HBO",
      "city": "Humboldt",
      "countryCode": "US"
  },
  {
      "label": "HBR",
      "city": "Hobart",
      "countryCode": "US"
  },
  {
      "label": "HBT",
      "city": "Hafr Albatin",
      "countryCode": "SA"
  },
  {
      "label": "HCA",
      "city": "Big Spring",
      "countryCode": "US"
  },
  {
      "label": "HCB",
      "city": "Shoal Cove",
      "countryCode": "US"
  },
  {
      "label": "HCC",
      "city": "Hudson",
      "countryCode": "US"
  },
  {
      "label": "HCM",
      "city": "Eil",
      "countryCode": "SO"
  },
  {
      "label": "HCN",
      "city": "Hengchun",
      "countryCode": "TW"
  },
  {
      "label": "HCQ",
      "city": "Halls Creek",
      "countryCode": "AU"
  },
  {
      "label": "HCR",
      "city": "Holy Cross",
      "countryCode": "US"
  },
  {
      "label": "HCW",
      "city": "Cheraw",
      "countryCode": "US"
  },
  {
      "label": "HDA",
      "city": "Hidden Falls",
      "countryCode": "US"
  },
  {
      "label": "HDB",
      "city": "Heidelberg",
      "countryCode": "DE"
  },
  {
      "label": "HDD",
      "city": "Hyderabad",
      "countryCode": "PK"
  },
  {
      "label": "HDE",
      "city": "Holdrege",
      "countryCode": "US"
  },
  {
      "label": "HDF",
      "city": "Heringsdorf",
      "countryCode": "DE"
  },
  {
      "label": "HDH",
      "city": "Oahu",
      "countryCode": "US"
  },
  {
      "label": "HDM",
      "city": "Hamadan",
      "countryCode": "IR"
  },
  {
      "label": "HDS",
      "city": "Hoedspruit Transv",
      "countryCode": "ZA"
  },
  {
      "label": "HDY",
      "city": "Hat Yai",
      "countryCode": "TH"
  },
  {
      "label": "HEA",
      "city": "Herat",
      "countryCode": "AF"
  },
  {
      "label": "HEB",
      "city": "Henzada",
      "countryCode": "MM"
  },
  {
      "label": "HED",
      "city": "Herendeen",
      "countryCode": "US"
  },
  {
      "label": "HEE",
      "city": "Helena",
      "countryCode": "US"
  },
  {
      "label": "HEH",
      "city": "Heho",
      "countryCode": "MM"
  },
  {
      "label": "HEI",
      "city": "Heide Buesum",
      "countryCode": "DE"
  },
  {
      "label": "HEK",
      "city": "Heihe",
      "countryCode": "CN"
  },
  {
      "label": "HEL",
      "city": "Helsinki",
      "countryCode": "FI"
  },
  {
      "label": "HEN",
      "city": "Hendon",
      "countryCode": "GB"
  },
  {
      "label": "HEO",
      "city": "Haelogo",
      "countryCode": "PG"
  },
  {
      "label": "HER",
      "city": "Heraklion",
      "countryCode": "GR"
  },
  {
      "label": "HES",
      "city": "Hermiston",
      "countryCode": "US"
  },
  {
      "label": "HET",
      "city": "Hohhot",
      "countryCode": "CN"
  },
  {
      "label": "HEZ",
      "city": "Natchez",
      "countryCode": "US"
  },
  {
      "label": "HFA",
      "city": "Haifa",
      "countryCode": "IL"
  },
  {
      "label": "HFD",
      "city": "Hartford",
      "countryCode": "US"
  },
  {
      "label": "HFE",
      "city": "Hefei",
      "countryCode": "CN"
  },
  {
      "label": "HFF",
      "city": "Hoffman",
      "countryCode": "US"
  },
  {
      "label": "HFN",
      "city": "Hornafjordur",
      "countryCode": "IS"
  },
  {
      "label": "HFS",
      "city": "Hagfors",
      "countryCode": "SE"
  },
  {
      "label": "HFT",
      "city": "Hammerfest",
      "countryCode": "NO"
  },
  {
      "label": "HGA",
      "city": "Hargeisa",
      "countryCode": "SO"
  },
  {
      "label": "HGD",
      "city": "Hughenden",
      "countryCode": "AU"
  },
  {
      "label": "HGH",
      "city": "Hangzhou",
      "countryCode": "CN"
  },
  {
      "label": "HGL",
      "city": "Helgoland",
      "countryCode": "DE"
  },
  {
      "label": "HGN",
      "city": "Mae Hong Son",
      "countryCode": "TH"
  },
  {
      "label": "HGO",
      "city": "Korhogo",
      "countryCode": "CI"
  },
  {
      "label": "HGR",
      "city": "Hagerstown",
      "countryCode": "US"
  },
  {
      "label": "HGT",
      "city": "Jolon",
      "countryCode": "US"
  },
  {
      "label": "HGU",
      "city": "Mount Hagen",
      "countryCode": "PG"
  },
  {
      "label": "HGZ",
      "city": "Hogatza",
      "countryCode": "US"
  },
  {
      "label": "HHE",
      "city": "Hachinohe",
      "countryCode": "JP"
  },
  {
      "label": "HHH",
      "city": "Hilton Head",
      "countryCode": "US"
  },
  {
      "label": "HHQ",
      "city": "Hua Hin",
      "countryCode": "TH"
  },
  {
      "label": "HHR",
      "city": "Hawthorne",
      "countryCode": "US"
  },
  {
      "label": "HHZ",
      "city": "Hikueru",
      "countryCode": "PF"
  },
  {
      "label": "HIB",
      "city": "Hibbing",
      "countryCode": "US"
  },
  {
      "label": "HID",
      "city": "Horn Island",
      "countryCode": "AU"
  },
  {
      "label": "HIE",
      "city": "Whitefield",
      "countryCode": "US"
  },
  {
      "label": "HIG",
      "city": "Highbury",
      "countryCode": "AU"
  },
  {
      "label": "HIH",
      "city": "Hook Island",
      "countryCode": "AU"
  },
  {
      "label": "HII",
      "city": "Lake Havasu City",
      "countryCode": "US"
  },
  {
      "label": "HIJ",
      "city": "Hiroshima",
      "countryCode": "JP"
  },
  {
      "label": "HIL",
      "city": "Shilavo",
      "countryCode": "ET"
  },
  {
      "label": "HIN",
      "city": "Chinju",
      "countryCode": "KR"
  },
  {
      "label": "HIO",
      "city": "Hillsboro",
      "countryCode": "US"
  },
  {
      "label": "HIP",
      "city": "Headingly",
      "countryCode": "AU"
  },
  {
      "label": "HIR",
      "city": "Honiara",
      "countryCode": "SB"
  },
  {
      "label": "HIS",
      "city": "Hayman Island",
      "countryCode": "AU"
  },
  {
      "label": "HIT",
      "city": "Hivaro",
      "countryCode": "PG"
  },
  {
      "label": "HIX",
      "city": "Hiva Oa",
      "countryCode": "PF"
  },
  {
      "label": "HJT",
      "city": "Khujirt",
      "countryCode": "MN"
  },
  {
      "label": "HKB",
      "city": "Healy Lake",
      "countryCode": "US"
  },
  {
      "label": "HKD",
      "city": "Hakodate",
      "countryCode": "JP"
  },
  {
      "label": "HKG",
      "city": "Hong Kong",
      "countryCode": "HK"
  },
  {
      "label": "HKK",
      "city": "Hokitika",
      "countryCode": "NZ"
  },
  {
      "label": "HKN",
      "city": "Hoskins",
      "countryCode": "PG"
  },
  {
      "label": "HKP",
      "city": "Kaanapali Maui",
      "countryCode": "US"
  },
  {
      "label": "HKT",
      "city": "Phuket",
      "countryCode": "TH"
  },
  {
      "label": "HKV",
      "city": "Haskovo",
      "countryCode": "BG"
  },
  {
      "label": "HKY",
      "city": "Hickory",
      "countryCode": "US"
  },
  {
      "label": "HLA",
      "city": "Lanseria",
      "countryCode": "ZA"
  },
  {
      "label": "HLB",
      "city": "Batesville",
      "countryCode": "US"
  },
  {
      "label": "HLC",
      "city": "Hill City",
      "countryCode": "US"
  },
  {
      "label": "HLD",
      "city": "Hailar",
      "countryCode": "CN"
  },
  {
      "label": "HLF",
      "city": "Hultsfred",
      "countryCode": "SE"
  },
  {
      "label": "HLG",
      "city": "Wheeling",
      "countryCode": "US"
  },
  {
      "label": "HLH",
      "city": "Ulanhot",
      "countryCode": "CN"
  },
  {
      "label": "HLI",
      "city": "Hollister",
      "countryCode": "US"
  },
  {
      "label": "HLJ",
      "city": "Shauliaj",
      "countryCode": "LT"
  },
  {
      "label": "HLL",
      "city": "Hillside",
      "countryCode": "AU"
  },
  {
      "label": "HLM",
      "city": "Holland",
      "countryCode": "US"
  },
  {
      "label": "HLN",
      "city": "Helena",
      "countryCode": "US"
  },
  {
      "label": "HLS",
      "city": "St Helens",
      "countryCode": "AU"
  },
  {
      "label": "HLT",
      "city": "Hamilton",
      "countryCode": "AU"
  },
  {
      "label": "HLU",
      "city": "Houailou",
      "countryCode": "NC"
  },
  {
      "label": "HLV",
      "city": "Helenvale",
      "countryCode": "AU"
  },
  {
      "label": "HLW",
      "city": "Hluhluwe",
      "countryCode": "ZA"
  },
  {
      "label": "HLY",
      "city": "Holyhead",
      "countryCode": "GB"
  },
  {
      "label": "HLZ",
      "city": "Hamilton",
      "countryCode": "NZ"
  },
  {
      "label": "HMB",
      "city": "Sohag Governorate",
      "countryCode": "EG"
  },
  {
      "label": "HME",
      "city": "Hassi Messaoud",
      "countryCode": "DZ"
  },
  {
      "label": "HMG",
      "city": "Hermannsburg",
      "countryCode": "AU"
  },
  {
      "label": "HMI",
      "city": "Hami",
      "countryCode": "CN"
  },
  {
      "label": "HMJ",
      "city": "Khmelnitskiy",
      "countryCode": "UA"
  },
  {
      "label": "HMO",
      "city": "Hermosillo",
      "countryCode": "MX"
  },
  {
      "label": "HMR",
      "city": "Hamar",
      "countryCode": "NO"
  },
  {
      "label": "HMS",
      "city": "Homeshore",
      "countryCode": "US"
  },
  {
      "label": "HMT",
      "city": "Hemet",
      "countryCode": "US"
  },
  {
      "label": "HMV",
      "city": "Hemavan",
      "countryCode": "SE"
  },
  {
      "label": "HNA",
      "city": "Morioka",
      "countryCode": "JP"
  },
  {
      "label": "HNB",
      "city": "Huntingburg",
      "countryCode": "US"
  },
  {
      "label": "HNC",
      "city": "Hatteras",
      "countryCode": "US"
  },
  {
      "label": "HNE",
      "city": "Tahneta Pass Lodg",
      "countryCode": "US"
  },
  {
      "label": "HNG",
      "city": "Hienghene",
      "countryCode": "NC"
  },
  {
      "label": "HNH",
      "city": "Hoonah",
      "countryCode": "US"
  },
  {
      "label": "HNI",
      "city": "Heiweni",
      "countryCode": "PG"
  },
  {
      "label": "HNK",
      "city": "Hinchinbrooke Island",
      "countryCode": "AU"
  },
  {
      "label": "HNL",
      "city": "Honolulu",
      "countryCode": "US"
  },
  {
      "label": "HNM",
      "city": "Hana",
      "countryCode": "US"
  },
  {
      "label": "HNN",
      "city": "Honinabi",
      "countryCode": "PG"
  },
  {
      "label": "HNO",
      "city": "Hercegnovi",
      "countryCode": "YU"
  },
  {
      "label": "HNS",
      "city": "Haines",
      "countryCode": "US"
  },
  {
      "label": "HNX",
      "city": "Hanna",
      "countryCode": "US"
  },
  {
      "label": "HNY",
      "city": "Hengyang",
      "countryCode": "CN"
  },
  {
      "label": "HOA",
      "city": "Hola",
      "countryCode": "KE"
  },
  {
      "label": "HOB",
      "city": "Hobbs",
      "countryCode": "US"
  },
  {
      "label": "HOC",
      "city": "Komako",
      "countryCode": "PG"
  },
  {
      "label": "HOD",
      "city": "Hodeidah",
      "countryCode": "YE"
  },
  {
      "label": "HOE",
      "city": "Houeisay",
      "countryCode": "LA"
  },
  {
      "label": "HOF",
      "city": "Hofuf",
      "countryCode": "SA"
  },
  {
      "label": "HOG",
      "city": "Holguin",
      "countryCode": "CU"
  },
  {
      "label": "HOH",
      "city": "Hohenems",
      "countryCode": "AT"
  },
  {
      "label": "HOI",
      "city": "Hao Island",
      "countryCode": "PF"
  },
  {
      "label": "HOK",
      "city": "Hooker Creek",
      "countryCode": "AU"
  },
  {
      "label": "HOL",
      "city": "Holikachu",
      "countryCode": "US"
  },
  {
      "label": "HOM",
      "city": "Homer",
      "countryCode": "US"
  },
  {
      "label": "HON",
      "city": "Huron",
      "countryCode": "US"
  },
  {
      "label": "HOO",
      "city": "Quanduc",
      "countryCode": "VN"
  },
  {
      "label": "HOP",
      "city": "Hopkinsville",
      "countryCode": "US"
  },
  {
      "label": "HOQ",
      "city": "Hof",
      "countryCode": "DE"
  },
  {
      "label": "HOR",
      "city": "Horta",
      "countryCode": "PT"
  },
  {
      "label": "HOS",
      "city": "Chos Mal",
      "countryCode": "AR"
  },
  {
      "label": "HOT",
      "city": "Hot Springs",
      "countryCode": "US"
  },
  {
      "label": "HOU",
      "city": "Houston",
      "countryCode": "US"
  },
  {
      "label": "HOV",
      "city": "Orsta Volda",
      "countryCode": "NO"
  },
  {
      "label": "HOX",
      "city": "Homalin",
      "countryCode": "MM"
  },
  {
      "label": "HOY",
      "city": "Hoy Island",
      "countryCode": "GB"
  },
  {
      "label": "HPA",
      "city": "Ha'apai",
      "countryCode": "TO"
  },
  {
      "label": "HPB",
      "city": "Hooper Bay",
      "countryCode": "US"
  },
  {
      "label": "HPE",
      "city": "Hope Vale",
      "countryCode": "AU"
  },
  {
      "label": "HPH",
      "city": "Haiphong",
      "countryCode": "VN"
  },
  {
      "label": "HPN",
      "city": "Westchester County",
      "countryCode": "US"
  },
  {
      "label": "HPT",
      "city": "Hampton",
      "countryCode": "US"
  },
  {
      "label": "HPY",
      "city": "Baytown",
      "countryCode": "US"
  },
  {
      "label": "HQM",
      "city": "Hoquiam",
      "countryCode": "US"
  },
  {
      "label": "HRA",
      "city": "Mansehra",
      "countryCode": "PK"
  },
  {
      "label": "HRB",
      "city": "Harbin",
      "countryCode": "CN"
  },
  {
      "label": "HRC",
      "city": "Zhairem",
      "countryCode": "KZ"
  },
  {
      "label": "HRD",
      "city": "Harstad",
      "countryCode": "NO"
  },
  {
      "label": "HRE",
      "city": "Harare",
      "countryCode": "ZW"
  },
  {
      "label": "HRG",
      "city": "Hurghada",
      "countryCode": "EG"
  },
  {
      "label": "HRJ",
      "city": "Chaurjhari",
      "countryCode": "NP"
  },
  {
      "label": "HRK",
      "city": "Kharkov",
      "countryCode": "UA"
  },
  {
      "label": "HRL",
      "city": "Harlingen",
      "countryCode": "US"
  },
  {
      "label": "HRM",
      "city": "Hassi R'mel",
      "countryCode": "DZ"
  },
  {
      "label": "HRO",
      "city": "Harrison",
      "countryCode": "US"
  },
  {
      "label": "HRR",
      "city": "Herrera",
      "countryCode": "CO"
  },
  {
      "label": "HRS",
      "city": "Harrismith",
      "countryCode": "ZA"
  },
  {
      "label": "HRT",
      "city": "Harrogate",
      "countryCode": "GB"
  },
  {
      "label": "HRY",
      "city": "Henbury",
      "countryCode": "AU"
  },
  {
      "label": "HRZ",
      "city": "Horizontina",
      "countryCode": "BR"
  },
  {
      "label": "HSB",
      "city": "Harrisburg",
      "countryCode": "US"
  },
  {
      "label": "HSC",
      "city": "Shaoguan",
      "countryCode": "CN"
  },
  {
      "label": "HSG",
      "city": "Saga",
      "countryCode": "JP"
  },
  {
      "label": "HSI",
      "city": "Hastings",
      "countryCode": "US"
  },
  {
      "label": "HSK",
      "city": "Huesca",
      "countryCode": "ES"
  },
  {
      "label": "HSL",
      "city": "Huslia",
      "countryCode": "US"
  },
  {
      "label": "HSM",
      "city": "Horsham",
      "countryCode": "AU"
  },
  {
      "label": "HSP",
      "city": "Hot Springs",
      "countryCode": "US"
  },
  {
      "label": "HST",
      "city": "Homestead",
      "countryCode": "US"
  },
  {
      "label": "HSV",
      "city": "Huntsville",
      "countryCode": "US"
  },
  {
      "label": "HSZ",
      "city": "Hsinchu",
      "countryCode": "TW"
  },
  {
      "label": "HTA",
      "city": "Chita",
      "countryCode": "RU"
  },
  {
      "label": "HTB",
      "city": "Terre De Bas",
      "countryCode": "GP"
  },
  {
      "label": "HTF",
      "city": "Hatfield",
      "countryCode": "GB"
  },
  {
      "label": "HTG",
      "city": "Hatanga",
      "countryCode": "RU"
  },
  {
      "label": "HTH",
      "city": "Hawthorne",
      "countryCode": "US"
  },
  {
      "label": "HTI",
      "city": "Hamilton Island",
      "countryCode": "AU"
  },
  {
      "label": "HTL",
      "city": "Houghton",
      "countryCode": "US"
  },
  {
      "label": "HTN",
      "city": "Hotan",
      "countryCode": "CN"
  },
  {
      "label": "HTO",
      "city": "East Hampton",
      "countryCode": "US"
  },
  {
      "label": "HTR",
      "city": "Hateruma",
      "countryCode": "JP"
  },
  {
      "label": "HTS",
      "city": "Ashland",
      "countryCode": "US"
  },
  {
      "label": "HTU",
      "city": "Hopetoun",
      "countryCode": "AU"
  },
  {
      "label": "HTV",
      "city": "Huntsville",
      "countryCode": "US"
  },
  {
      "label": "HTW",
      "city": "Huntington",
      "countryCode": "US"
  },
  {
      "label": "HTY",
      "city": "Hatay",
      "countryCode": "TR"
  },
  {
      "label": "HTZ",
      "city": "Hato Corozal",
      "countryCode": "CO"
  },
  {
      "label": "HUB",
      "city": "Humbert River",
      "countryCode": "AU"
  },
  {
      "label": "HUC",
      "city": "Humacao",
      "countryCode": "PR"
  },
  {
      "label": "HUD",
      "city": "Humboldt",
      "countryCode": "US"
  },
  {
      "label": "HUE",
      "city": "Humera",
      "countryCode": "ET"
  },
  {
      "label": "HUF",
      "city": "Terre Haute",
      "countryCode": "US"
  },
  {
      "label": "HUG",
      "city": "Huehuetenango",
      "countryCode": "GT"
  },
  {
      "label": "HUH",
      "city": "Huahine Island",
      "countryCode": "PF"
  },
  {
      "label": "HUI",
      "city": "Hue",
      "countryCode": "VN"
  },
  {
      "label": "HUJ",
      "city": "Hugo",
      "countryCode": "US"
  },
  {
      "label": "HUK",
      "city": "Hukuntsi",
      "countryCode": "BW"
  },
  {
      "label": "HUL",
      "city": "Houlton",
      "countryCode": "US"
  },
  {
      "label": "HUM",
      "city": "Houma",
      "countryCode": "US"
  },
  {
      "label": "HUN",
      "city": "Hualien",
      "countryCode": "TW"
  },
  {
      "label": "HUQ",
      "city": "Houn",
      "countryCode": "LY"
  },
  {
      "label": "HUS",
      "city": "Hughes",
      "countryCode": "US"
  },
  {
      "label": "HUT",
      "city": "Hutchison",
      "countryCode": "US"
  },
  {
      "label": "HUU",
      "city": "Huanuco",
      "countryCode": "PE"
  },
  {
      "label": "HUV",
      "city": "Hudiksvall",
      "countryCode": "SE"
  },
  {
      "label": "HUW",
      "city": "Humaita",
      "countryCode": "BR"
  },
  {
      "label": "HUX",
      "city": "Huatulco",
      "countryCode": "MX"
  },
  {
      "label": "HUY",
      "city": "Humberside",
      "countryCode": "GB"
  },
  {
      "label": "HUZ",
      "city": "Huizhou",
      "countryCode": "CN"
  },
  {
      "label": "HVA",
      "city": "Analalava",
      "countryCode": "MG"
  },
  {
      "label": "HVB",
      "city": "Hervey Bay",
      "countryCode": "AU"
  },
  {
      "label": "HVE",
      "city": "Hanksville",
      "countryCode": "US"
  },
  {
      "label": "HVG",
      "city": "Honningsvag",
      "countryCode": "NO"
  },
  {
      "label": "HVK",
      "city": "Holmavik",
      "countryCode": "IS"
  },
  {
      "label": "HVM",
      "city": "Hvammstangi",
      "countryCode": "IS"
  },
  {
      "label": "HVN",
      "city": "New Haven",
      "countryCode": "US"
  },
  {
      "label": "HVR",
      "city": "Havre",
      "countryCode": "US"
  },
  {
      "label": "HVS",
      "city": "Hartsville",
      "countryCode": "US"
  },
  {
      "label": "HWA",
      "city": "Hawabango",
      "countryCode": "PG"
  },
  {
      "label": "HWD",
      "city": "Hayward",
      "countryCode": "US"
  },
  {
      "label": "HWK",
      "city": "Hawker",
      "countryCode": "AU"
  },
  {
      "label": "HWN",
      "city": "Hwange National Park",
      "countryCode": "ZW"
  },
  {
      "label": "HWO",
      "city": "Hollywood",
      "countryCode": "US"
  },
  {
      "label": "HXX",
      "city": "Hay",
      "countryCode": "AU"
  },
  {
      "label": "HYA",
      "city": "Hyannis",
      "countryCode": "US"
  },
  {
      "label": "HYC",
      "city": "High Wycombe",
      "countryCode": "GB"
  },
  {
      "label": "HYF",
      "city": "Hayfields",
      "countryCode": "PG"
  },
  {
      "label": "HYG",
      "city": "Hydaburg",
      "countryCode": "US"
  },
  {
      "label": "HYL",
      "city": "Hollis",
      "countryCode": "US"
  },
  {
      "label": "HYN",
      "city": "Huangyan",
      "countryCode": "CN"
  },
  {
      "label": "HYR",
      "city": "Hayward",
      "countryCode": "US"
  },
  {
      "label": "HYS",
      "city": "Hays",
      "countryCode": "US"
  },
  {
      "label": "HYV",
      "city": "Hyvinkaa",
      "countryCode": "FI"
  },
  {
      "label": "HZB",
      "city": "Hazebrouck",
      "countryCode": "FR"
  },
  {
      "label": "HZG",
      "city": "Hanzhong",
      "countryCode": "CN"
  },
  {
      "label": "HZK",
      "city": "Husavik",
      "countryCode": "IS"
  },
  {
      "label": "HZL",
      "city": "Hazleton",
      "countryCode": "US"
  },
  {
      "label": "HZV",
      "city": "Hazyview",
      "countryCode": "ZA"
  },
  {
      "label": "IAA",
      "city": "Igarka",
      "countryCode": "RU"
  },
  {
      "label": "IAG",
      "city": "Niagara Falls",
      "countryCode": "US"
  },
  {
      "label": "IAM",
      "city": "In Amenas",
      "countryCode": "DZ"
  },
  {
      "label": "IAN",
      "city": "Kiana",
      "countryCode": "US"
  },
  {
      "label": "IAO",
      "city": "Siargao Island",
      "countryCode": "PH"
  },
  {
      "label": "IAQ",
      "city": "Bahregan",
      "countryCode": "IR"
  },
  {
      "label": "IAR",
      "city": "Yaroslavl",
      "countryCode": "RU"
  },
  {
      "label": "IAS",
      "city": "Iasi",
      "countryCode": "RO"
  },
  {
      "label": "IAU",
      "city": "Iaura",
      "countryCode": "PG"
  },
  {
      "label": "IBA",
      "city": "Ibadan",
      "countryCode": "NG"
  },
  {
      "label": "IBE",
      "city": "Ibague",
      "countryCode": "CO"
  },
  {
      "label": "IBI",
      "city": "Iboki",
      "countryCode": "PG"
  },
  {
      "label": "IBO",
      "city": "Ibo",
      "countryCode": "MZ"
  },
  {
      "label": "IBP",
      "city": "Iberia",
      "countryCode": "PE"
  },
  {
      "label": "IBR",
      "city": "Omitama",
      "countryCode": "JP"
  },
  {
      "label": "IBZ",
      "city": "Ibiza",
      "countryCode": "ES"
  },
  {
      "label": "ICA",
      "city": "Icabaru",
      "countryCode": "VE"
  },
  {
      "label": "ICI",
      "city": "Cicia",
      "countryCode": "FJ"
  },
  {
      "label": "ICK",
      "city": "Nieuw Nickerie",
      "countryCode": "SR"
  },
  {
      "label": "ICL",
      "city": "Clarinda",
      "countryCode": "US"
  },
  {
      "label": "ICO",
      "city": "Sicogon Island",
      "countryCode": "PH"
  },
  {
      "label": "ICR",
      "city": "Nicaro",
      "countryCode": "CU"
  },
  {
      "label": "ICT",
      "city": "Wichita",
      "countryCode": "US"
  },
  {
      "label": "ICY",
      "city": "Icy Bay",
      "countryCode": "US"
  },
  {
      "label": "IDA",
      "city": "Idaho Falls",
      "countryCode": "US"
  },
  {
      "label": "IDB",
      "city": "Idre",
      "countryCode": "SE"
  },
  {
      "label": "IDF",
      "city": "Idiofa",
      "countryCode": "CD"
  },
  {
      "label": "IDG",
      "city": "Ida Grove",
      "countryCode": "US"
  },
  {
      "label": "IDI",
      "city": "Indiana",
      "countryCode": "US"
  },
  {
      "label": "IDK",
      "city": "Indulkana",
      "countryCode": "AU"
  },
  {
      "label": "IDN",
      "city": "Indagen",
      "countryCode": "PG"
  },
  {
      "label": "IDO",
      "city": "Santa Isabel Do M",
      "countryCode": "BR"
  },
  {
      "label": "IDP",
      "city": "Independence",
      "countryCode": "US"
  },
  {
      "label": "IDY",
      "city": "Ile D'Yeu",
      "countryCode": "FR"
  },
  {
      "label": "IEG",
      "city": "Zielona Gora",
      "countryCode": "PL"
  },
  {
      "label": "IEJ",
      "city": "Iejima",
      "countryCode": "JP"
  },
  {
      "label": "IES",
      "city": "Riesa",
      "countryCode": "DE"
  },
  {
      "label": "IEV",
      "city": "Kiev",
      "countryCode": "UA"
  },
  {
      "label": "IFA",
      "city": "Iowa Falls",
      "countryCode": "US"
  },
  {
      "label": "IFF",
      "city": "Iffley",
      "countryCode": "AU"
  },
  {
      "label": "IFJ",
      "city": "Isafjordur",
      "countryCode": "IS"
  },
  {
      "label": "IFL",
      "city": "Innisfail",
      "countryCode": "AU"
  },
  {
      "label": "IFN",
      "city": "Isfahan",
      "countryCode": "IR"
  },
  {
      "label": "IFO",
      "city": "Ivano Frankovsk",
      "countryCode": "UA"
  },
  {
      "label": "IFP",
      "city": "Bullhead City",
      "countryCode": "US"
  },
  {
      "label": "IGA",
      "city": "Inagua",
      "countryCode": "BS"
  },
  {
      "label": "IGB",
      "city": "Ingeniero Jacobac",
      "countryCode": "AR"
  },
  {
      "label": "IGD",
      "city": "Igdir",
      "countryCode": "TR"
  },
  {
      "label": "IGE",
      "city": "Iguela",
      "countryCode": "GA"
  },
  {
      "label": "IGG",
      "city": "Igiugig",
      "countryCode": "US"
  },
  {
      "label": "IGH",
      "city": "Ingham",
      "countryCode": "AU"
  },
  {
      "label": "IGM",
      "city": "Kingman",
      "countryCode": "US"
  },
  {
      "label": "IGN",
      "city": "Iligan",
      "countryCode": "PH"
  },
  {
      "label": "IGO",
      "city": "Chigorodo",
      "countryCode": "CO"
  },
  {
      "label": "IGR",
      "city": "Iguazu",
      "countryCode": "AR"
  },
  {
      "label": "IGT",
      "city": "Magas",
      "countryCode": "RU"
  },
  {
      "label": "IGU",
      "city": "Iguassu Falls",
      "countryCode": "BR"
  },
  {
      "label": "IHA",
      "city": "Niihama",
      "countryCode": "JP"
  },
  {
      "label": "IHN",
      "city": "Qishn",
      "countryCode": "YE"
  },
  {
      "label": "IHO",
      "city": "Ihosy",
      "countryCode": "MG"
  },
  {
      "label": "IHU",
      "city": "Ihu",
      "countryCode": "PG"
  },
  {
      "label": "IIA",
      "city": "Inishmaan",
      "countryCode": "IE"
  },
  {
      "label": "IIN",
      "city": "Nishinoomote",
      "countryCode": "JP"
  },
  {
      "label": "IIS",
      "city": "Nissan Island",
      "countryCode": "PG"
  },
  {
      "label": "IJK",
      "city": "Izhevsk",
      "countryCode": "RU"
  },
  {
      "label": "IJU",
      "city": "Ijui",
      "countryCode": "BR"
  },
  {
      "label": "IJX",
      "city": "Jacksonville",
      "countryCode": "US"
  },
  {
      "label": "IKB",
      "city": "Wilkesboro",
      "countryCode": "US"
  },
  {
      "label": "IKI",
      "city": "Iki",
      "countryCode": "JP"
  },
  {
      "label": "IKK",
      "city": "Kankakee",
      "countryCode": "US"
  },
  {
      "label": "IKL",
      "city": "Ikela",
      "countryCode": "CD"
  },
  {
      "label": "IKP",
      "city": "Inkerman",
      "countryCode": "AU"
  },
  {
      "label": "IKS",
      "city": "Tiksi",
      "countryCode": "RU"
  },
  {
      "label": "IKT",
      "city": "Irkutsk",
      "countryCode": "RU"
  },
  {
      "label": "ILA",
      "city": "Illaga",
      "countryCode": "ID"
  },
  {
      "label": "ILB",
      "city": "Ilha Solteira",
      "countryCode": "BR"
  },
  {
      "label": "ILD",
      "city": "Lleida",
      "countryCode": "ES"
  },
  {
      "label": "ILE",
      "city": "Killeen",
      "countryCode": "US"
  },
  {
      "label": "ILF",
      "city": "Ilford",
      "countryCode": "CA"
  },
  {
      "label": "ILG",
      "city": "Wilmington",
      "countryCode": "US"
  },
  {
      "label": "ILH",
      "city": "Illisheim",
      "countryCode": "DE"
  },
  {
      "label": "ILI",
      "city": "Iliamna",
      "countryCode": "US"
  },
  {
      "label": "ILK",
      "city": "Ilaka",
      "countryCode": "MG"
  },
  {
      "label": "ILL",
      "city": "Willmar",
      "countryCode": "US"
  },
  {
      "label": "ILM",
      "city": "Wilmington",
      "countryCode": "US"
  },
  {
      "label": "ILN",
      "city": "Wilmington",
      "countryCode": "US"
  },
  {
      "label": "ILO",
      "city": "Iloilo",
      "countryCode": "PH"
  },
  {
      "label": "ILP",
      "city": "Ile Des Pins",
      "countryCode": "NC"
  },
  {
      "label": "ILQ",
      "city": "Ilo",
      "countryCode": "PE"
  },
  {
      "label": "ILR",
      "city": "Ilorin",
      "countryCode": "NG"
  },
  {
      "label": "ILU",
      "city": "Kilaguni",
      "countryCode": "KE"
  },
  {
      "label": "ILX",
      "city": "Ileg",
      "countryCode": "PG"
  },
  {
      "label": "ILY",
      "city": "Islay",
      "countryCode": "GB"
  },
  {
      "label": "ILZ",
      "city": "Zilina",
      "countryCode": "SK"
  },
  {
      "label": "IMA",
      "city": "Iamalele",
      "countryCode": "PG"
  },
  {
      "label": "IMB",
      "city": "Imbaimadai",
      "countryCode": "GY"
  },
  {
      "label": "IMD",
      "city": "Imonda",
      "countryCode": "PG"
  },
  {
      "label": "IMG",
      "city": "Inhaminga",
      "countryCode": "MZ"
  },
  {
      "label": "IMI",
      "city": "Ine Island",
      "countryCode": "MH"
  },
  {
      "label": "IMK",
      "city": "Simikot",
      "countryCode": "NP"
  },
  {
      "label": "IML",
      "city": "Imperial",
      "countryCode": "US"
  },
  {
      "label": "IMM",
      "city": "Immokalee",
      "countryCode": "US"
  },
  {
      "label": "IMN",
      "city": "Imane",
      "countryCode": "PG"
  },
  {
      "label": "IMO",
      "city": "Zemio",
      "countryCode": "CF"
  },
  {
      "label": "IMP",
      "city": "Imperatriz",
      "countryCode": "BR"
  },
  {
      "label": "IMR",
      "city": "Milan",
      "countryCode": "IT"
  },
  {
      "label": "IMT",
      "city": "Iron Mountain",
      "countryCode": "US"
  },
  {
      "label": "IMZ",
      "city": "Nimroz",
      "countryCode": "AF"
  },
  {
      "label": "INA",
      "city": "Inta",
      "countryCode": "RU"
  },
  {
      "label": "INB",
      "city": "Independence",
      "countryCode": "BZ"
  },
  {
      "label": "INC",
      "city": "Yinchuan",
      "countryCode": "CN"
  },
  {
      "label": "IND",
      "city": "Indianapolis",
      "countryCode": "US"
  },
  {
      "label": "INE",
      "city": "Chinde",
      "countryCode": "MZ"
  },
  {
      "label": "INF",
      "city": "In Guezzam",
      "countryCode": "DZ"
  },
  {
      "label": "ING",
      "city": "Lago Argentino",
      "countryCode": "AR"
  },
  {
      "label": "INH",
      "city": "Inhambane",
      "countryCode": "MZ"
  },
  {
      "label": "INI",
      "city": "Nis",
      "countryCode": "YU"
  },
  {
      "label": "INJ",
      "city": "Injune",
      "countryCode": "AU"
  },
  {
      "label": "INK",
      "city": "Wink",
      "countryCode": "US"
  },
  {
      "label": "INL",
      "city": "Intl Falls",
      "countryCode": "US"
  },
  {
      "label": "INM",
      "city": "Innamincka",
      "countryCode": "AU"
  },
  {
      "label": "INN",
      "city": "Innsbruck",
      "countryCode": "AT"
  },
  {
      "label": "INO",
      "city": "Inongo",
      "countryCode": "CD"
  },
  {
      "label": "INP",
      "city": "Naples",
      "countryCode": "IT"
  },
  {
      "label": "INQ",
      "city": "Inisheer",
      "countryCode": "IE"
  },
  {
      "label": "INS",
      "city": "Indian Springs",
      "countryCode": "US"
  },
  {
      "label": "INU",
      "city": "Nauru Island",
      "countryCode": "NR"
  },
  {
      "label": "INV",
      "city": "Inverness",
      "countryCode": "GB"
  },
  {
      "label": "INW",
      "city": "Winslow",
      "countryCode": "US"
  },
  {
      "label": "INX",
      "city": "Inanwatan",
      "countryCode": "ID"
  },
  {
      "label": "INY",
      "city": "Inyati",
      "countryCode": "ZA"
  },
  {
      "label": "INZ",
      "city": "In Salah",
      "countryCode": "DZ"
  },
  {
      "label": "IOA",
      "city": "Ioannina",
      "countryCode": "GR"
  },
  {
      "label": "IOB",
      "city": "Innsbruck",
      "countryCode": "AT"
  },
  {
      "label": "IOK",
      "city": "Iokea",
      "countryCode": "PG"
  },
  {
      "label": "IOM",
      "city": "Isle Of Man",
      "countryCode": "GB"
  },
  {
      "label": "ION",
      "city": "Impfondo",
      "countryCode": "CG"
  },
  {
      "label": "IOP",
      "city": "Ioma",
      "countryCode": "PG"
  },
  {
      "label": "IOR",
      "city": "Inishmore",
      "countryCode": "IE"
  },
  {
      "label": "IOS",
      "city": "Ilheus",
      "countryCode": "BR"
  },
  {
      "label": "IOU",
      "city": "Ile Ouen",
      "countryCode": "NC"
  },
  {
      "label": "IOW",
      "city": "Iowa City",
      "countryCode": "US"
  },
  {
      "label": "IPA",
      "city": "Ipota",
      "countryCode": "VU"
  },
  {
      "label": "IPC",
      "city": "Easter Island",
      "countryCode": "CL"
  },
  {
      "label": "IPE",
      "city": "Ipil",
      "countryCode": "PH"
  },
  {
      "label": "IPG",
      "city": "Ipiranga",
      "countryCode": "BR"
  },
  {
      "label": "IPH",
      "city": "Ipoh",
      "countryCode": "MY"
  },
  {
      "label": "IPI",
      "city": "Ipiales",
      "countryCode": "CO"
  },
  {
      "label": "IPL",
      "city": "El Centro",
      "countryCode": "US"
  },
  {
      "label": "IPN",
      "city": "Ipatinga",
      "countryCode": "BR"
  },
  {
      "label": "IPT",
      "city": "Williamsport",
      "countryCode": "US"
  },
  {
      "label": "IPU",
      "city": "Ipiau",
      "countryCode": "BR"
  },
  {
      "label": "IPW",
      "city": "Ipswich",
      "countryCode": "GB"
  },
  {
      "label": "IQM",
      "city": "Qiemo",
      "countryCode": "CN"
  },
  {
      "label": "IQN",
      "city": "Qingyang",
      "countryCode": "CN"
  },
  {
      "label": "IQQ",
      "city": "Iquique",
      "countryCode": "CL"
  },
  {
      "label": "IQT",
      "city": "Iquitos",
      "countryCode": "PE"
  },
  {
      "label": "IRA",
      "city": "Kirakira",
      "countryCode": "SB"
  },
  {
      "label": "IRB",
      "city": "Iraan",
      "countryCode": "US"
  },
  {
      "label": "IRC",
      "city": "Circle",
      "countryCode": "US"
  },
  {
      "label": "IRD",
      "city": "Ishurdi",
      "countryCode": "BD"
  },
  {
      "label": "IRE",
      "city": "Irece",
      "countryCode": "BR"
  },
  {
      "label": "IRG",
      "city": "Lockhart River",
      "countryCode": "AU"
  },
  {
      "label": "IRI",
      "city": "Iringa",
      "countryCode": "TZ"
  },
  {
      "label": "IRJ",
      "city": "La Rioja",
      "countryCode": "AR"
  },
  {
      "label": "IRK",
      "city": "Kirksville",
      "countryCode": "US"
  },
  {
      "label": "IRN",
      "city": "Iriona",
      "countryCode": "HN"
  },
  {
      "label": "IRO",
      "city": "Birao",
      "countryCode": "CF"
  },
  {
      "label": "IRP",
      "city": "Isiro",
      "countryCode": "CD"
  },
  {
      "label": "IRR",
      "city": "Rome",
      "countryCode": "IT"
  },
  {
      "label": "IRS",
      "city": "Sturgis",
      "countryCode": "US"
  },
  {
      "label": "IRZ",
      "city": "Santa Isabel do Rio Negro",
      "countryCode": "BR"
  },
  {
      "label": "ISA",
      "city": "Mount Isa",
      "countryCode": "AU"
  },
  {
      "label": "ISB",
      "city": "Islamabad",
      "countryCode": "PK"
  },
  {
      "label": "ISC",
      "city": "Isles Of Scilly",
      "countryCode": "GB"
  },
  {
      "label": "ISD",
      "city": "Iscuande",
      "countryCode": "CO"
  },
  {
      "label": "ISE",
      "city": "Isparta",
      "countryCode": "TR"
  },
  {
      "label": "ISG",
      "city": "Ishigaki",
      "countryCode": "JP"
  },
  {
      "label": "ISH",
      "city": "Ischia",
      "countryCode": "IT"
  },
  {
      "label": "ISI",
      "city": "Isisford",
      "countryCode": "AU"
  },
  {
      "label": "ISJ",
      "city": "Isla Mujeres",
      "countryCode": "MX"
  },
  {
      "label": "ISL",
      "city": "Isabel Pass",
      "countryCode": "US"
  },
  {
      "label": "ISM",
      "city": "Kissimmee",
      "countryCode": "US"
  },
  {
      "label": "ISN",
      "city": "Williston",
      "countryCode": "US"
  },
  {
      "label": "ISO",
      "city": "Kinston",
      "countryCode": "US"
  },
  {
      "label": "ISP",
      "city": "Islip",
      "countryCode": "US"
  },
  {
      "label": "ISQ",
      "city": "Manistique",
      "countryCode": "US"
  },
  {
      "label": "ISS",
      "city": "Wiscasset",
      "countryCode": "US"
  },
  {
      "label": "IST",
      "city": "Istanbul",
      "countryCode": "TR"
  },
  {
      "label": "ISU",
      "city": "Sulaymaniyah",
      "countryCode": "IQ"
  },
  {
      "label": "ISW",
      "city": "Wisconsin Rapids",
      "countryCode": "US"
  },
  {
      "label": "ITA",
      "city": "Itacoatiara",
      "countryCode": "BR"
  },
  {
      "label": "ITB",
      "city": "Itaituba",
      "countryCode": "BR"
  },
  {
      "label": "ITE",
      "city": "Itubera",
      "countryCode": "BR"
  },
  {
      "label": "ITH",
      "city": "Ithaca",
      "countryCode": "US"
  },
  {
      "label": "ITI",
      "city": "Itambacuri",
      "countryCode": "BR"
  },
  {
      "label": "ITJ",
      "city": "Itajai",
      "countryCode": "BR"
  },
  {
      "label": "ITK",
      "city": "Itokama",
      "countryCode": "PG"
  },
  {
      "label": "ITN",
      "city": "Itabuna",
      "countryCode": "BR"
  },
  {
      "label": "ITO",
      "city": "Hilo",
      "countryCode": "US"
  },
  {
      "label": "ITQ",
      "city": "Itaqui",
      "countryCode": "BR"
  },
  {
      "label": "ITR",
      "city": "Itumbiara",
      "countryCode": "BR"
  },
  {
      "label": "IUE",
      "city": "Niue Island",
      "countryCode": "NU"
  },
  {
      "label": "IUL",
      "city": "Ilu",
      "countryCode": "ID"
  },
  {
      "label": "IUM",
      "city": "Summit Lake",
      "countryCode": "CA"
  },
  {
      "label": "IUS",
      "city": "Inus",
      "countryCode": "PG"
  },
  {
      "label": "IVA",
      "city": "Ambanja",
      "countryCode": "MG"
  },
  {
      "label": "IVC",
      "city": "Invercargill",
      "countryCode": "NZ"
  },
  {
      "label": "IVG",
      "city": "Ivangrad",
      "countryCode": "YU"
  },
  {
      "label": "IVH",
      "city": "Ivishak",
      "countryCode": "US"
  },
  {
      "label": "IVL",
      "city": "Ivalo",
      "countryCode": "FI"
  },
  {
      "label": "IVO",
      "city": "Chivolo",
      "countryCode": "CO"
  },
  {
      "label": "IVR",
      "city": "Inverell",
      "countryCode": "AU"
  },
  {
      "label": "IVW",
      "city": "Inverway",
      "countryCode": "AU"
  },
  {
      "label": "IWA",
      "city": "Ivanova",
      "countryCode": "RU"
  },
  {
      "label": "IWD",
      "city": "Ironwood",
      "countryCode": "US"
  },
  {
      "label": "IWJ",
      "city": "Iwami",
      "countryCode": "JP"
  },
  {
      "label": "IWO",
      "city": "Iwo Jima Vol",
      "countryCode": "JP"
  },
  {
      "label": "IYK",
      "city": "Inyokern",
      "countryCode": "US"
  },
  {
      "label": "IZA",
      "city": "Juiz de Fora",
      "countryCode": "BR"
  },
  {
      "label": "IZM",
      "city": "Izmir",
      "countryCode": "TR"
  },
  {
      "label": "IZO",
      "city": "Izumo",
      "countryCode": "JP"
  },
  {
      "label": "IZT",
      "city": "Ixtepec",
      "countryCode": "MX"
  },
  {
      "label": "JAA",
      "city": "Jalalabad",
      "countryCode": "AF"
  },
  {
      "label": "JAB",
      "city": "Jabiru",
      "countryCode": "AU"
  },
  {
      "label": "JAC",
      "city": "Jackson",
      "countryCode": "US"
  },
  {
      "label": "JAD",
      "city": "Jandakot",
      "countryCode": "AU"
  },
  {
      "label": "JAF",
      "city": "Jaffna",
      "countryCode": "LK"
  },
  {
      "label": "JAG",
      "city": "Jacobabad",
      "countryCode": "PK"
  },
  {
      "label": "JAK",
      "city": "Jacmel",
      "countryCode": "HT"
  },
  {
      "label": "JAL",
      "city": "Jalapa",
      "countryCode": "MX"
  },
  {
      "label": "JAM",
      "city": "Jambol",
      "countryCode": "BG"
  },
  {
      "label": "JAN",
      "city": "Jackson",
      "countryCode": "US"
  },
  {
      "label": "JAP",
      "city": "Punta Renes",
      "countryCode": "CR"
  },
  {
      "label": "JAQ",
      "city": "Jacquinot Bay",
      "countryCode": "PG"
  },
  {
      "label": "JAR",
      "city": "Arcadia",
      "countryCode": "US"
  },
  {
      "label": "JAS",
      "city": "Jasper",
      "countryCode": "US"
  },
  {
      "label": "JAT",
      "city": "Jabot",
      "countryCode": "MH"
  },
  {
      "label": "JAU",
      "city": "Jauja",
      "countryCode": "PE"
  },
  {
      "label": "JAV",
      "city": "Ilulisaat",
      "countryCode": "GL"
  },
  {
      "label": "JAX",
      "city": "Jacksonville",
      "countryCode": "US"
  },
  {
      "label": "JBK",
      "city": "Berkeley",
      "countryCode": "US"
  },
  {
      "label": "JBR",
      "city": "Jonesboro",
      "countryCode": "US"
  },
  {
      "label": "JBS",
      "city": "Pleasanton",
      "countryCode": "US"
  },
  {
      "label": "JCB",
      "city": "Joacaba",
      "countryCode": "BR"
  },
  {
      "label": "JCH",
      "city": "Christianshaab",
      "countryCode": "GL"
  },
  {
      "label": "JCK",
      "city": "Julia Creek",
      "countryCode": "AU"
  },
  {
      "label": "JCM",
      "city": "Jacobina",
      "countryCode": "BR"
  },
  {
      "label": "JCR",
      "city": "Jacareacanga",
      "countryCode": "BR"
  },
  {
      "label": "JCT",
      "city": "Junction",
      "countryCode": "US"
  },
  {
      "label": "JCY",
      "city": "Johnson",
      "countryCode": "US"
  },
  {
      "label": "JDA",
      "city": "John Day",
      "countryCode": "US"
  },
  {
      "label": "JDF",
      "city": "Juiz De Fora",
      "countryCode": "BR"
  },
  {
      "label": "JDN",
      "city": "Jordan",
      "countryCode": "US"
  },
  {
      "label": "JDO",
      "city": "Juazeiro Do Norte",
      "countryCode": "BR"
  },
  {
      "label": "JDR",
      "city": "Sao Joao del-Rei",
      "countryCode": "BR"
  },
  {
      "label": "JDZ",
      "city": "Jingdezhen",
      "countryCode": "CN"
  },
  {
      "label": "JED",
      "city": "Jeddah",
      "countryCode": "SA"
  },
  {
      "label": "JEE",
      "city": "Jeremie",
      "countryCode": "HT"
  },
  {
      "label": "JEF",
      "city": "Jefferson City",
      "countryCode": "US"
  },
  {
      "label": "JEG",
      "city": "Aasiaat",
      "countryCode": "GL"
  },
  {
      "label": "JEJ",
      "city": "Jeh",
      "countryCode": "MH"
  },
  {
      "label": "JEQ",
      "city": "Jequie",
      "countryCode": "BR"
  },
  {
      "label": "JER",
      "city": "Jersey",
      "countryCode": "GB"
  },
  {
      "label": "JFN",
      "city": "Jefferson",
      "countryCode": "US"
  },
  {
      "label": "JFR",
      "city": "Frederikshaab",
      "countryCode": "GL"
  },
  {
      "label": "JGN",
      "city": "Jiayuguan",
      "countryCode": "CN"
  },
  {
      "label": "JGO",
      "city": "Godhavn",
      "countryCode": "GL"
  },
  {
      "label": "JHB",
      "city": "Johor Bahru",
      "countryCode": "MY"
  },
  {
      "label": "JHG",
      "city": "Jinghong",
      "countryCode": "CN"
  },
  {
      "label": "JHM",
      "city": "Kapalua",
      "countryCode": "US"
  },
  {
      "label": "JHS",
      "city": "Sisimiut",
      "countryCode": "GL"
  },
  {
      "label": "JHW",
      "city": "Jamestown",
      "countryCode": "US"
  },
  {
      "label": "JIA",
      "city": "Juina",
      "countryCode": "BR"
  },
  {
      "label": "JIB",
      "city": "Djibouti",
      "countryCode": "DJ"
  },
  {
      "label": "JIJ",
      "city": "Jijiga",
      "countryCode": "ET"
  },
  {
      "label": "JIK",
      "city": "Ikaria Island",
      "countryCode": "GR"
  },
  {
      "label": "JIL",
      "city": "Jilin",
      "countryCode": "CN"
  },
  {
      "label": "JIM",
      "city": "Jimma",
      "countryCode": "ET"
  },
  {
      "label": "JIN",
      "city": "Jinja",
      "countryCode": "UG"
  },
  {
      "label": "JIP",
      "city": "Jipijapa",
      "countryCode": "EC"
  },
  {
      "label": "JIR",
      "city": "Jiri",
      "countryCode": "NP"
  },
  {
      "label": "JIU",
      "city": "Jiujiang",
      "countryCode": "CN"
  },
  {
      "label": "JIW",
      "city": "Jiwani",
      "countryCode": "PK"
  },
  {
      "label": "JJD",
      "city": "Jijoca de Jericoacoara",
      "countryCode": "BR"
  },
  {
      "label": "JJG",
      "city": "Jaguaruna",
      "countryCode": "BR"
  },
  {
      "label": "JJI",
      "city": "Juanjui",
      "countryCode": "PE"
  },
  {
      "label": "JJN",
      "city": "Jinjiang",
      "countryCode": "CN"
  },
  {
      "label": "JKG",
      "city": "Jonkoping",
      "countryCode": "SE"
  },
  {
      "label": "JKH",
      "city": "Chios",
      "countryCode": "GR"
  },
  {
      "label": "JKL",
      "city": "Kalymnos",
      "countryCode": "GR"
  },
  {
      "label": "JKR",
      "city": "Janakpur",
      "countryCode": "NP"
  },
  {
      "label": "JKT",
      "city": "Jakarta",
      "countryCode": "ID"
  },
  {
      "label": "JKV",
      "city": "Jacksonville",
      "countryCode": "US"
  },
  {
      "label": "JLA",
      "city": "Cooper Lodge",
      "countryCode": "US"
  },
  {
      "label": "JLH",
      "city": "Arlington Heights",
      "countryCode": "US"
  },
  {
      "label": "JLN",
      "city": "Joplin",
      "countryCode": "US"
  },
  {
      "label": "JLO",
      "city": "Jesolo",
      "countryCode": "IT"
  },
  {
      "label": "JLP",
      "city": "Juan Les Pins",
      "countryCode": "FR"
  },
  {
      "label": "JLS",
      "city": "Jales",
      "countryCode": "BR"
  },
  {
      "label": "JMB",
      "city": "Jamba",
      "countryCode": "AO"
  },
  {
      "label": "JMC",
      "city": "Sausalito",
      "countryCode": "US"
  },
  {
      "label": "JMH",
      "city": "Schaumburg",
      "countryCode": "US"
  },
  {
      "label": "JMK",
      "city": "Mikonos",
      "countryCode": "GR"
  },
  {
      "label": "JMO",
      "city": "Jomsom",
      "countryCode": "NP"
  },
  {
      "label": "JMS",
      "city": "Jamestown",
      "countryCode": "US"
  },
  {
      "label": "JMU",
      "city": "Jiamusi",
      "countryCode": "CN"
  },
  {
      "label": "JNA",
      "city": "Januaria",
      "countryCode": "BR"
  },
  {
      "label": "JNB",
      "city": "Johannesburg",
      "countryCode": "ZA"
  },
  {
      "label": "JNG",
      "city": "Jining",
      "countryCode": "CN"
  },
  {
      "label": "JNI",
      "city": "Junin",
      "countryCode": "AR"
  },
  {
      "label": "JNN",
      "city": "Nanortalik",
      "countryCode": "GL"
  },
  {
      "label": "JNP",
      "city": "Newport Beach",
      "countryCode": "US"
  },
  {
      "label": "JNU",
      "city": "Juneau",
      "countryCode": "US"
  },
  {
      "label": "JNX",
      "city": "Naxos",
      "countryCode": "GR"
  },
  {
      "label": "JNZ",
      "city": "Jinzhou",
      "countryCode": "CN"
  },
  {
      "label": "JOE",
      "city": "Joensuu",
      "countryCode": "FI"
  },
  {
      "label": "JOG",
      "city": "Yogyakarta",
      "countryCode": "ID"
  },
  {
      "label": "JOH",
      "city": "Port Saint Johns",
      "countryCode": "ZA"
  },
  {
      "label": "JOI",
      "city": "Joinville",
      "countryCode": "BR"
  },
  {
      "label": "JOK",
      "city": "Joshkar Ola",
      "countryCode": "RU"
  },
  {
      "label": "JOL",
      "city": "Jolo",
      "countryCode": "PH"
  },
  {
      "label": "JOM",
      "city": "Njombe",
      "countryCode": "TZ"
  },
  {
      "label": "JON",
      "city": "Johnston Island",
      "countryCode": "UM"
  },
  {
      "label": "JOP",
      "city": "Josephstaal",
      "countryCode": "PG"
  },
  {
      "label": "JOS",
      "city": "Jos",
      "countryCode": "NG"
  },
  {
      "label": "JOT",
      "city": "Joliet",
      "countryCode": "US"
  },
  {
      "label": "JPA",
      "city": "Joao Pessoa",
      "countryCode": "BR"
  },
  {
      "label": "JPR",
      "city": "Ji Parana",
      "countryCode": "BR"
  },
  {
      "label": "JQA",
      "city": "Qaarsut",
      "countryCode": "GL"
  },
  {
      "label": "JQE",
      "city": "Jaque",
      "countryCode": "PA"
  },
  {
      "label": "JQF",
      "city": "Concord",
      "countryCode": "US"
  },
  {
      "label": "JRK",
      "city": "Arsuk",
      "countryCode": "GL"
  },
  {
      "label": "JRN",
      "city": "Juruena",
      "countryCode": "BR"
  },
  {
      "label": "JRO",
      "city": "Kilimanjaro",
      "countryCode": "TZ"
  },
  {
      "label": "JRS",
      "city": "Jerusalem",
      "countryCode": "IL"
  },
  {
      "label": "JSH",
      "city": "Sitia",
      "countryCode": "GR"
  },
  {
      "label": "JSI",
      "city": "Skiathos",
      "countryCode": "GR"
  },
  {
      "label": "JSM",
      "city": "Jose D San Martin",
      "countryCode": "AR"
  },
  {
      "label": "JSO",
      "city": "Sodertalje",
      "countryCode": "SE"
  },
  {
      "label": "JSR",
      "city": "Jessore",
      "countryCode": "BD"
  },
  {
      "label": "JSS",
      "city": "Spetsai Island",
      "countryCode": "GR"
  },
  {
      "label": "JST",
      "city": "Johnstown",
      "countryCode": "US"
  },
  {
      "label": "JSY",
      "city": "Syros Island",
      "countryCode": "GR"
  },
  {
      "label": "JTC",
      "city": "Bauru - Sao Paulo",
      "countryCode": "BR"
  },
  {
      "label": "JTI",
      "city": "Jatai",
      "countryCode": "BR"
  },
  {
      "label": "JTR",
      "city": "Thira",
      "countryCode": "GR"
  },
  {
      "label": "JTY",
      "city": "Astypalea Island",
      "countryCode": "GR"
  },
  {
      "label": "JUA",
      "city": "Juara",
      "countryCode": "BR"
  },
  {
      "label": "JUB",
      "city": "Juba",
      "countryCode": "SD"
  },
  {
      "label": "JUI",
      "city": "Juist",
      "countryCode": "DE"
  },
  {
      "label": "JUJ",
      "city": "Jujuy",
      "countryCode": "AR"
  },
  {
      "label": "JUL",
      "city": "Juliaca",
      "countryCode": "PE"
  },
  {
      "label": "JUM",
      "city": "Jumla",
      "countryCode": "NP"
  },
  {
      "label": "JUN",
      "city": "Jundah",
      "countryCode": "AU"
  },
  {
      "label": "JUO",
      "city": "Jurado",
      "countryCode": "CO"
  },
  {
      "label": "JUR",
      "city": "Jurien Bay",
      "countryCode": "AU"
  },
  {
      "label": "JUT",
      "city": "Juticalpa",
      "countryCode": "HN"
  },
  {
      "label": "JUZ",
      "city": "Juzhou",
      "countryCode": "CN"
  },
  {
      "label": "JVA",
      "city": "Ankavandra",
      "countryCode": "MG"
  },
  {
      "label": "JVI",
      "city": "Manville",
      "countryCode": "US"
  },
  {
      "label": "JVL",
      "city": "Janesville",
      "countryCode": "US"
  },
  {
      "label": "JWA",
      "city": "Jwaneng",
      "countryCode": "BW"
  },
  {
      "label": "JWN",
      "city": "Zanjan",
      "countryCode": "IR"
  },
  {
      "label": "JXN",
      "city": "Jackson",
      "countryCode": "US"
  },
  {
      "label": "JYV",
      "city": "Jyvaskyla",
      "countryCode": "FI"
  },
  {
      "label": "KAA",
      "city": "Kasama",
      "countryCode": "ZM"
  },
  {
      "label": "KAB",
      "city": "Kariba",
      "countryCode": "ZW"
  },
  {
      "label": "KAC",
      "city": "Kameshli",
      "countryCode": "SY"
  },
  {
      "label": "KAD",
      "city": "Kaduna",
      "countryCode": "NG"
  },
  {
      "label": "KAF",
      "city": "Karato",
      "countryCode": "PG"
  },
  {
      "label": "KAG",
      "city": "Kangnung",
      "countryCode": "KR"
  },
  {
      "label": "KAI",
      "city": "Kaieteur",
      "countryCode": "GY"
  },
  {
      "label": "KAJ",
      "city": "Kajaani",
      "countryCode": "FI"
  },
  {
      "label": "KAK",
      "city": "Kar",
      "countryCode": "PG"
  },
  {
      "label": "KAL",
      "city": "Kaltag",
      "countryCode": "US"
  },
  {
      "label": "KAM",
      "city": "Kamaran Island",
      "countryCode": "YE"
  },
  {
      "label": "KAN",
      "city": "Kano",
      "countryCode": "NG"
  },
  {
      "label": "KAO",
      "city": "Kuusamo",
      "countryCode": "FI"
  },
  {
      "label": "KAP",
      "city": "Kapanga",
      "countryCode": "CD"
  },
  {
      "label": "KAQ",
      "city": "Kamulai",
      "countryCode": "PG"
  },
  {
      "label": "KAR",
      "city": "Kamarang",
      "countryCode": "GY"
  },
  {
      "label": "KAS",
      "city": "Karasburg",
      "countryCode": "NA"
  },
  {
      "label": "KAT",
      "city": "Kaitaia",
      "countryCode": "NZ"
  },
  {
      "label": "KAU",
      "city": "Kauhava",
      "countryCode": "FI"
  },
  {
      "label": "KAV",
      "city": "Kavanayen",
      "countryCode": "VE"
  },
  {
      "label": "KAW",
      "city": "Kawthaung",
      "countryCode": "MM"
  },
  {
      "label": "KAX",
      "city": "Kalbarri",
      "countryCode": "AU"
  },
  {
      "label": "KAY",
      "city": "Wakaya Island",
      "countryCode": "FJ"
  },
  {
      "label": "KAZ",
      "city": "Kau",
      "countryCode": "ID"
  },
  {
      "label": "KBA",
      "city": "Kabala",
      "countryCode": "SL"
  },
  {
      "label": "KBB",
      "city": "Kirkimbie",
      "countryCode": "AU"
  },
  {
      "label": "KBC",
      "city": "Birch Creek",
      "countryCode": "US"
  },
  {
      "label": "KBD",
      "city": "Kimberley Downs",
      "countryCode": "AU"
  },
  {
      "label": "KBF",
      "city": "Karubaga",
      "countryCode": "ID"
  },
  {
      "label": "KBG",
      "city": "Kabalega Falls",
      "countryCode": "UG"
  },
  {
      "label": "KBH",
      "city": "Kalat",
      "countryCode": "PK"
  },
  {
      "label": "KBI",
      "city": "Kribi",
      "countryCode": "CM"
  },
  {
      "label": "KBJ",
      "city": "Kings Canyon",
      "countryCode": "AU"
  },
  {
      "label": "KBK",
      "city": "Klag Bay",
      "countryCode": "US"
  },
  {
      "label": "KBL",
      "city": "Kabul",
      "countryCode": "AF"
  },
  {
      "label": "KBM",
      "city": "Kabwum",
      "countryCode": "PG"
  },
  {
      "label": "KBN",
      "city": "Kabinda",
      "countryCode": "CD"
  },
  {
      "label": "KBO",
      "city": "Kabalo",
      "countryCode": "CD"
  },
  {
      "label": "KBQ",
      "city": "Kasungu",
      "countryCode": "MW"
  },
  {
      "label": "KBR",
      "city": "Kota Bharu",
      "countryCode": "MY"
  },
  {
      "label": "KBT",
      "city": "Kaben",
      "countryCode": "MH"
  },
  {
      "label": "KBU",
      "city": "Kotabaru",
      "countryCode": "ID"
  },
  {
      "label": "KBV",
      "city": "Krabi",
      "countryCode": "TH"
  },
  {
      "label": "KBX",
      "city": "Kambuaya",
      "countryCode": "ID"
  },
  {
      "label": "KBY",
      "city": "Streaky Bay",
      "countryCode": "AU"
  },
  {
      "label": "KBZ",
      "city": "Kaikoura",
      "countryCode": "NZ"
  },
  {
      "label": "KCA",
      "city": "Kuqa",
      "countryCode": "CN"
  },
  {
      "label": "KCB",
      "city": "Kasikasima",
      "countryCode": "SR"
  },
  {
      "label": "KCD",
      "city": "Kamur Irian Jaya",
      "countryCode": "ID"
  },
  {
      "label": "KCE",
      "city": "Collinsville",
      "countryCode": "AU"
  },
  {
      "label": "KCF",
      "city": "Kadanwari",
      "countryCode": "PK"
  },
  {
      "label": "KCH",
      "city": "Kuching",
      "countryCode": "MY"
  },
  {
      "label": "KCI",
      "city": "Kon",
      "countryCode": "ID"
  },
  {
      "label": "KCJ",
      "city": "Komaio",
      "countryCode": "PG"
  },
  {
      "label": "KCK",
      "city": "Kansas City",
      "countryCode": "US"
  },
  {
      "label": "KCL",
      "city": "Chignik",
      "countryCode": "US"
  },
  {
      "label": "KCM",
      "city": "Kahramanmaras",
      "countryCode": "TR"
  },
  {
      "label": "KCO",
      "city": "Kocaeli",
      "countryCode": "TR"
  },
  {
      "label": "KCP",
      "city": "Kamenets Podolski",
      "countryCode": "UA"
  },
  {
      "label": "KCR",
      "city": "Colorado Creek",
      "countryCode": "US"
  },
  {
      "label": "KCS",
      "city": "Kings Creek Stati",
      "countryCode": "AU"
  },
  {
      "label": "KCU",
      "city": "Masindi",
      "countryCode": "UG"
  },
  {
      "label": "KCZ",
      "city": "Kochi",
      "countryCode": "JP"
  },
  {
      "label": "KDA",
      "city": "Kolda",
      "countryCode": "SN"
  },
  {
      "label": "KDB",
      "city": "Kambalda",
      "countryCode": "AU"
  },
  {
      "label": "KDC",
      "city": "Kandi",
      "countryCode": "BJ"
  },
  {
      "label": "KDD",
      "city": "Khuzdar",
      "countryCode": "PK"
  },
  {
      "label": "KDE",
      "city": "Koroba",
      "countryCode": "PG"
  },
  {
      "label": "KDF",
      "city": "Kouba",
      "countryCode": "DZ"
  },
  {
      "label": "KDG",
      "city": "Kardjali",
      "countryCode": "BG"
  },
  {
      "label": "KDH",
      "city": "Kandahar",
      "countryCode": "AF"
  },
  {
      "label": "KDI",
      "city": "Kendari",
      "countryCode": "ID"
  },
  {
      "label": "KDJ",
      "city": "N'Djole",
      "countryCode": "GA"
  },
  {
      "label": "KDL",
      "city": "Kardla",
      "countryCode": "EE"
  },
  {
      "label": "KDM",
      "city": "Kaadedhdhoo",
      "countryCode": "MV"
  },
  {
      "label": "KDN",
      "city": "Ndende",
      "countryCode": "GA"
  },
  {
      "label": "KDO",
      "city": "Kadhdhoo",
      "countryCode": "MV"
  },
  {
      "label": "KDP",
      "city": "Kandep",
      "countryCode": "PG"
  },
  {
      "label": "KDQ",
      "city": "Kamberatoro",
      "countryCode": "PG"
  },
  {
      "label": "KDR",
      "city": "Kandrian",
      "countryCode": "PG"
  },
  {
      "label": "KDS",
      "city": "Kamaran Downs",
      "countryCode": "AU"
  },
  {
      "label": "KDU",
      "city": "Skardu",
      "countryCode": "PK"
  },
  {
      "label": "KDV",
      "city": "Kandavu",
      "countryCode": "FJ"
  },
  {
      "label": "KEA",
      "city": "Keisah",
      "countryCode": "ID"
  },
  {
      "label": "KEB",
      "city": "English Bay",
      "countryCode": "US"
  },
  {
      "label": "KEC",
      "city": "Kasenga",
      "countryCode": "CD"
  },
  {
      "label": "KED",
      "city": "Kaedi",
      "countryCode": "MR"
  },
  {
      "label": "KEE",
      "city": "Kelle",
      "countryCode": "CG"
  },
  {
      "label": "KEG",
      "city": "Keglsugl",
      "countryCode": "PG"
  },
  {
      "label": "KEH",
      "city": "Kenmore Air Harbo",
      "countryCode": "US"
  },
  {
      "label": "KEI",
      "city": "Kepi",
      "countryCode": "ID"
  },
  {
      "label": "KEJ",
      "city": "Kemerovo",
      "countryCode": "RU"
  },
  {
      "label": "KEK",
      "city": "Ekwok",
      "countryCode": "US"
  },
  {
      "label": "KEL",
      "city": "Kiel",
      "countryCode": "DE"
  },
  {
      "label": "KEM",
      "city": "Kemi/Tornio",
      "countryCode": "FI"
  },
  {
      "label": "KEN",
      "city": "Kenema",
      "countryCode": "SL"
  },
  {
      "label": "KEO",
      "city": "Odienne",
      "countryCode": "CI"
  },
  {
      "label": "KEP",
      "city": "Nepalganj",
      "countryCode": "NP"
  },
  {
      "label": "KEQ",
      "city": "Kebar",
      "countryCode": "ID"
  },
  {
      "label": "KER",
      "city": "Kerman",
      "countryCode": "IR"
  },
  {
      "label": "KES",
      "city": "Kelsey",
      "countryCode": "CA"
  },
  {
      "label": "KET",
      "city": "Keng Tung",
      "countryCode": "MM"
  },
  {
      "label": "KEU",
      "city": "Kelly Bar",
      "countryCode": "US"
  },
  {
      "label": "KEV",
      "city": "Kuorevesi",
      "countryCode": "FI"
  },
  {
      "label": "KEW",
      "city": "Keewaywin",
      "countryCode": "CA"
  },
  {
      "label": "KEX",
      "city": "Kanabea",
      "countryCode": "PG"
  },
  {
      "label": "KEY",
      "city": "Kericho",
      "countryCode": "KE"
  },
  {
      "label": "KFA",
      "city": "Kiffa",
      "countryCode": "MR"
  },
  {
      "label": "KFG",
      "city": "Kalkurung",
      "countryCode": "AU"
  },
  {
      "label": "KFP",
      "city": "False Pass",
      "countryCode": "US"
  },
  {
      "label": "KFS",
      "city": "Kastamonu",
      "countryCode": "TR"
  },
  {
      "label": "KGA",
      "city": "Kananga",
      "countryCode": "CD"
  },
  {
      "label": "KGB",
      "city": "Konge",
      "countryCode": "PG"
  },
  {
      "label": "KGC",
      "city": "Kingscote",
      "countryCode": "AU"
  },
  {
      "label": "KGD",
      "city": "Kaliningrad",
      "countryCode": "RU"
  },
  {
      "label": "KGE",
      "city": "Kagau",
      "countryCode": "SB"
  },
  {
      "label": "KGF",
      "city": "Karaganda",
      "countryCode": "KZ"
  },
  {
      "label": "KGG",
      "city": "Kedougou",
      "countryCode": "SN"
  },
  {
      "label": "KGH",
      "city": "Yongai",
      "countryCode": "PG"
  },
  {
      "label": "KGI",
      "city": "Kalgoorlie",
      "countryCode": "AU"
  },
  {
      "label": "KGJ",
      "city": "Karonga",
      "countryCode": "MW"
  },
  {
      "label": "KGK",
      "city": "New Koliganek",
      "countryCode": "US"
  },
  {
      "label": "KGL",
      "city": "Kigali",
      "countryCode": "RW"
  },
  {
      "label": "KGM",
      "city": "Kungum",
      "countryCode": "PG"
  },
  {
      "label": "KGN",
      "city": "Kasongo Lunda",
      "countryCode": "CD"
  },
  {
      "label": "KGO",
      "city": "Kirovograd",
      "countryCode": "UA"
  },
  {
      "label": "KGP",
      "city": "Kogalym",
      "countryCode": "RU"
  },
  {
      "label": "KGR",
      "city": "Kulgera",
      "countryCode": "AU"
  },
  {
      "label": "KGS",
      "city": "Kos",
      "countryCode": "GR"
  },
  {
      "label": "KGU",
      "city": "Keningau",
      "countryCode": "MY"
  },
  {
      "label": "KGW",
      "city": "Kagi",
      "countryCode": "PG"
  },
  {
      "label": "KGX",
      "city": "Grayling",
      "countryCode": "US"
  },
  {
      "label": "KGY",
      "city": "Kingaroy",
      "countryCode": "AU"
  },
  {
      "label": "KGZ",
      "city": "Glacier Creek",
      "countryCode": "US"
  },
  {
      "label": "KHA",
      "city": "Khaneh",
      "countryCode": "IR"
  },
  {
      "label": "KHC",
      "city": "Kerch",
      "countryCode": "UA"
  },
  {
      "label": "KHD",
      "city": "Khorramabad",
      "countryCode": "IR"
  },
  {
      "label": "KHE",
      "city": "Kherson",
      "countryCode": "UA"
  },
  {
      "label": "KHG",
      "city": "Kashi",
      "countryCode": "CN"
  },
  {
      "label": "KHH",
      "city": "Kaohsiung",
      "countryCode": "TW"
  },
  {
      "label": "KHI",
      "city": "Karachi",
      "countryCode": "PK"
  },
  {
      "label": "KHJ",
      "city": "Kauhajoki",
      "countryCode": "FI"
  },
  {
      "label": "KHK",
      "city": "Khark Island",
      "countryCode": "IR"
  },
  {
      "label": "KHL",
      "city": "Khulna",
      "countryCode": "BD"
  },
  {
      "label": "KHM",
      "city": "Khamti",
      "countryCode": "MM"
  },
  {
      "label": "KHN",
      "city": "Nanchang",
      "countryCode": "CN"
  },
  {
      "label": "KHO",
      "city": "Khoka Moya",
      "countryCode": "ZA"
  },
  {
      "label": "KHR",
      "city": "Kharkhorin",
      "countryCode": "MN"
  },
  {
      "label": "KHS",
      "city": "Khasab",
      "countryCode": "OM"
  },
  {
      "label": "KHT",
      "city": "Khost",
      "countryCode": "AF"
  },
  {
      "label": "KHU",
      "city": "Kremenchug",
      "countryCode": "UA"
  },
  {
      "label": "KHV",
      "city": "Khabarovsk",
      "countryCode": "RU"
  },
  {
      "label": "KHW",
      "city": "Khwai River Lodge",
      "countryCode": "BW"
  },
  {
      "label": "KIA",
      "city": "Kaiapit",
      "countryCode": "PG"
  },
  {
      "label": "KIC",
      "city": "King City",
      "countryCode": "US"
  },
  {
      "label": "KID",
      "city": "Kristianstad",
      "countryCode": "SE"
  },
  {
      "label": "KIE",
      "city": "Kieta",
      "countryCode": "PG"
  },
  {
      "label": "KIF",
      "city": "Kingfisher Lake",
      "countryCode": "CA"
  },
  {
      "label": "KIG",
      "city": "Koinghaas",
      "countryCode": "ZA"
  },
  {
      "label": "KIH",
      "city": "Kish Island",
      "countryCode": "IR"
  },
  {
      "label": "KIJ",
      "city": "Niigata",
      "countryCode": "JP"
  },
  {
      "label": "KIK",
      "city": "Kirkuk",
      "countryCode": "IQ"
  },
  {
      "label": "KIL",
      "city": "Kilwa",
      "countryCode": "CD"
  },
  {
      "label": "KIM",
      "city": "Kimberley",
      "countryCode": "ZA"
  },
  {
      "label": "KIN",
      "city": "Kingston",
      "countryCode": "JM"
  },
  {
      "label": "KIO",
      "city": "Kili Island",
      "countryCode": "MH"
  },
  {
      "label": "KIQ",
      "city": "Kira",
      "countryCode": "PG"
  },
  {
      "label": "KIR",
      "city": "Kerry County",
      "countryCode": "IE"
  },
  {
      "label": "KIS",
      "city": "Kisumu",
      "countryCode": "KE"
  },
  {
      "label": "KIT",
      "city": "Kithira",
      "countryCode": "GR"
  },
  {
      "label": "KIU",
      "city": "Kiunga",
      "countryCode": "KE"
  },
  {
      "label": "KIV",
      "city": "Chisinau",
      "countryCode": "MD"
  },
  {
      "label": "KIW",
      "city": "Kitwe",
      "countryCode": "ZM"
  },
  {
      "label": "KIY",
      "city": "Kilwa",
      "countryCode": "TZ"
  },
  {
      "label": "KIZ",
      "city": "Kikinonda",
      "countryCode": "PG"
  },
  {
      "label": "KJA",
      "city": "Krasnojarsk",
      "countryCode": "RU"
  },
  {
      "label": "KJK",
      "city": "Kortrijk",
      "countryCode": "BE"
  },
  {
      "label": "KJP",
      "city": "Kerama",
      "countryCode": "JP"
  },
  {
      "label": "KJR",
      "city": "Karlsruhe",
      "countryCode": "DE"
  },
  {
      "label": "KJU",
      "city": "Kamiraba",
      "countryCode": "PG"
  },
  {
      "label": "KKA",
      "city": "Koyuk",
      "countryCode": "US"
  },
  {
      "label": "KKB",
      "city": "Kitoi Bay",
      "countryCode": "US"
  },
  {
      "label": "KKC",
      "city": "Khon Kaen",
      "countryCode": "TH"
  },
  {
      "label": "KKD",
      "city": "Kokoda",
      "countryCode": "PG"
  },
  {
      "label": "KKE",
      "city": "Kerikeri",
      "countryCode": "NZ"
  },
  {
      "label": "KKF",
      "city": "Kagvik Creek",
      "countryCode": "US"
  },
  {
      "label": "KKG",
      "city": "Konawaruk",
      "countryCode": "GY"
  },
  {
      "label": "KKH",
      "city": "Kongiganak",
      "countryCode": "US"
  },
  {
      "label": "KKJ",
      "city": "Kita Kyushu",
      "countryCode": "JP"
  },
  {
      "label": "KKM",
      "city": "Lop Buri",
      "countryCode": "TH"
  },
  {
      "label": "KKN",
      "city": "Kirkenes",
      "countryCode": "NO"
  },
  {
      "label": "KKO",
      "city": "Kaikohe",
      "countryCode": "NZ"
  },
  {
      "label": "KKP",
      "city": "Koolburra",
      "countryCode": "AU"
  },
  {
      "label": "KKR",
      "city": "Kaukura Atoll",
      "countryCode": "PF"
  },
  {
      "label": "KKT",
      "city": "Kentland",
      "countryCode": "US"
  },
  {
      "label": "KKU",
      "city": "Ekuk",
      "countryCode": "US"
  },
  {
      "label": "KKW",
      "city": "Kikwit",
      "countryCode": "CD"
  },
  {
      "label": "KKX",
      "city": "Kikaiga Shima",
      "countryCode": "JP"
  },
  {
      "label": "KKY",
      "city": "Kilkenny",
      "countryCode": "IE"
  },
  {
      "label": "KKZ",
      "city": "Koh Kong",
      "countryCode": "KH"
  },
  {
      "label": "KLA",
      "city": "Kampala",
      "countryCode": "UG"
  },
  {
      "label": "KLB",
      "city": "Kalabo",
      "countryCode": "ZM"
  },
  {
      "label": "KLC",
      "city": "Kaolack",
      "countryCode": "SN"
  },
  {
      "label": "KLD",
      "city": "Kalinin",
      "countryCode": "RU"
  },
  {
      "label": "KLE",
      "city": "Kaele",
      "countryCode": "CM"
  },
  {
      "label": "KLF",
      "city": "Kaluga",
      "countryCode": "RU"
  },
  {
      "label": "KLG",
      "city": "Kalskag",
      "countryCode": "US"
  },
  {
      "label": "KLI",
      "city": "Kota Koli",
      "countryCode": "CD"
  },
  {
      "label": "KLJ",
      "city": "Klaipeda",
      "countryCode": "LT"
  },
  {
      "label": "KLK",
      "city": "Kalokol",
      "countryCode": "KE"
  },
  {
      "label": "KLL",
      "city": "Levelock",
      "countryCode": "US"
  },
  {
      "label": "KLO",
      "city": "Kalibo",
      "countryCode": "PH"
  },
  {
      "label": "KLP",
      "city": "Kelp Bay",
      "countryCode": "US"
  },
  {
      "label": "KLQ",
      "city": "Keluang",
      "countryCode": "ID"
  },
  {
      "label": "KLR",
      "city": "Kalmar",
      "countryCode": "SE"
  },
  {
      "label": "KLS",
      "city": "Kelso",
      "countryCode": "US"
  },
  {
      "label": "KLT",
      "city": "Kaiserslautern",
      "countryCode": "DE"
  },
  {
      "label": "KLU",
      "city": "Klagenfurt",
      "countryCode": "AT"
  },
  {
      "label": "KLV",
      "city": "Karlovy Vary",
      "countryCode": "CZ"
  },
  {
      "label": "KLW",
      "city": "Klawock",
      "countryCode": "US"
  },
  {
      "label": "KLX",
      "city": "Kalamata",
      "countryCode": "GR"
  },
  {
      "label": "KLY",
      "city": "Kalima",
      "countryCode": "CD"
  },
  {
      "label": "KLZ",
      "city": "Kleinzee",
      "countryCode": "ZA"
  },
  {
      "label": "KMA",
      "city": "Kerema",
      "countryCode": "PG"
  },
  {
      "label": "KMB",
      "city": "Koinambe",
      "countryCode": "PG"
  },
  {
      "label": "KMD",
      "city": "Mandji",
      "countryCode": "GA"
  },
  {
      "label": "KME",
      "city": "Kamembe",
      "countryCode": "RW"
  },
  {
      "label": "KMF",
      "city": "Kamina",
      "countryCode": "PG"
  },
  {
      "label": "KMG",
      "city": "Kunming",
      "countryCode": "CN"
  },
  {
      "label": "KMH",
      "city": "Kuruman",
      "countryCode": "ZA"
  },
  {
      "label": "KMI",
      "city": "Miyazaki",
      "countryCode": "JP"
  },
  {
      "label": "KMJ",
      "city": "Kumamoto",
      "countryCode": "JP"
  },
  {
      "label": "KMK",
      "city": "Makabana",
      "countryCode": "CG"
  },
  {
      "label": "KML",
      "city": "Kamileroi",
      "countryCode": "AU"
  },
  {
      "label": "KMM",
      "city": "Kimam",
      "countryCode": "ID"
  },
  {
      "label": "KMN",
      "city": "Kamina",
      "countryCode": "CD"
  },
  {
      "label": "KMP",
      "city": "Keetmanshoop",
      "countryCode": "NA"
  },
  {
      "label": "KMQ",
      "city": "Komatsu",
      "countryCode": "JP"
  },
  {
      "label": "KMR",
      "city": "Karimui",
      "countryCode": "PG"
  },
  {
      "label": "KMS",
      "city": "Kumasi",
      "countryCode": "GH"
  },
  {
      "label": "KMT",
      "city": "Kampot",
      "countryCode": "KH"
  },
  {
      "label": "KMU",
      "city": "Kismayu",
      "countryCode": "SO"
  },
  {
      "label": "KMV",
      "city": "Kalemyo",
      "countryCode": "MM"
  },
  {
      "label": "KMW",
      "city": "Kostroma",
      "countryCode": "RU"
  },
  {
      "label": "KMX",
      "city": "Khamis Mushait",
      "countryCode": "SA"
  },
  {
      "label": "KMY",
      "city": "Moser Bay",
      "countryCode": "US"
  },
  {
      "label": "KMZ",
      "city": "Kaoma",
      "countryCode": "ZM"
  },
  {
      "label": "KNA",
      "city": "Vina Del Mar",
      "countryCode": "CL"
  },
  {
      "label": "KNB",
      "city": "Kanab",
      "countryCode": "US"
  },
  {
      "label": "KNC",
      "city": "Ji'an",
      "countryCode": "CN"
  },
  {
      "label": "KND",
      "city": "Kindu",
      "countryCode": "CD"
  },
  {
      "label": "KNE",
      "city": "Kanainj",
      "countryCode": "PG"
  },
  {
      "label": "KNG",
      "city": "Kaimana",
      "countryCode": "ID"
  },
  {
      "label": "KNH",
      "city": "Kinmen",
      "countryCode": "TW"
  },
  {
      "label": "KNI",
      "city": "Katanning",
      "countryCode": "AU"
  },
  {
      "label": "KNJ",
      "city": "Kindamba",
      "countryCode": "CG"
  },
  {
      "label": "KNK",
      "city": "Kakhonak",
      "countryCode": "US"
  },
  {
      "label": "KNL",
      "city": "Kelanoa",
      "countryCode": "PG"
  },
  {
      "label": "KNM",
      "city": "Kaniama",
      "countryCode": "CD"
  },
  {
      "label": "KNN",
      "city": "Kankan",
      "countryCode": "GN"
  },
  {
      "label": "KNO",
      "city": "Knokke Het Zoute",
      "countryCode": "BE"
  },
  {
      "label": "KNP",
      "city": "Capanda",
      "countryCode": "AO"
  },
  {
      "label": "KNQ",
      "city": "Kone",
      "countryCode": "NC"
  },
  {
      "label": "KNR",
      "city": "Kangan",
      "countryCode": "IR"
  },
  {
      "label": "KNS",
      "city": "King Island",
      "countryCode": "AU"
  },
  {
      "label": "KNT",
      "city": "Kennett",
      "countryCode": "US"
  },
  {
      "label": "KNV",
      "city": "Knights Inlet",
      "countryCode": "CA"
  },
  {
      "label": "KNW",
      "city": "New Stuyahok",
      "countryCode": "US"
  },
  {
      "label": "KNX",
      "city": "Kununurra",
      "countryCode": "AU"
  },
  {
      "label": "KNY",
      "city": "Kinoosao",
      "countryCode": "CA"
  },
  {
      "label": "KNZ",
      "city": "Kenieba",
      "countryCode": "ML"
  },
  {
      "label": "KOA",
      "city": "Kona",
      "countryCode": "US"
  },
  {
      "label": "KOB",
      "city": "Koutaba",
      "countryCode": "CM"
  },
  {
      "label": "KOC",
      "city": "Koumac",
      "countryCode": "NC"
  },
  {
      "label": "KOD",
      "city": "Kotabangun",
      "countryCode": "ID"
  },
  {
      "label": "KOE",
      "city": "Kupang",
      "countryCode": "ID"
  },
  {
      "label": "KOF",
      "city": "Komatipoort",
      "countryCode": "ZA"
  },
  {
      "label": "KOG",
      "city": "Khong",
      "countryCode": "LA"
  },
  {
      "label": "KOH",
      "city": "Koolatah",
      "countryCode": "AU"
  },
  {
      "label": "KOI",
      "city": "Kirkwall",
      "countryCode": "GB"
  },
  {
      "label": "KOJ",
      "city": "Kagoshima",
      "countryCode": "JP"
  },
  {
      "label": "KOK",
      "city": "Kokkola-Pietarsaari",
      "countryCode": "FI"
  },
  {
      "label": "KOL",
      "city": "Koumala",
      "countryCode": "CF"
  },
  {
      "label": "KOM",
      "city": "Komo Manda",
      "countryCode": "PG"
  },
  {
      "label": "KON",
      "city": "Kontum",
      "countryCode": "VN"
  },
  {
      "label": "KOO",
      "city": "Kongolo",
      "countryCode": "CD"
  },
  {
      "label": "KOP",
      "city": "Nakhon Phanom",
      "countryCode": "TH"
  },
  {
      "label": "KOQ",
      "city": "Koethen",
      "countryCode": "DE"
  },
  {
      "label": "KOR",
      "city": "Kokoro",
      "countryCode": "PG"
  },
  {
      "label": "KOS",
      "city": "Sihanoukville",
      "countryCode": "KH"
  },
  {
      "label": "KOT",
      "city": "Kotlik",
      "countryCode": "US"
  },
  {
      "label": "KOU",
      "city": "Koulamoutou",
      "countryCode": "GA"
  },
  {
      "label": "KOV",
      "city": "Kokchetau",
      "countryCode": "KZ"
  },
  {
      "label": "KOW",
      "city": "Ganzhou",
      "countryCode": "CN"
  },
  {
      "label": "KOX",
      "city": "Kokonao",
      "countryCode": "ID"
  },
  {
      "label": "KPA",
      "city": "Kopiago",
      "countryCode": "PG"
  },
  {
      "label": "KPC",
      "city": "Port Clarence",
      "countryCode": "US"
  },
  {
      "label": "KPD",
      "city": "King Of Prussia",
      "countryCode": "US"
  },
  {
      "label": "KPE",
      "city": "Yapsiei",
      "countryCode": "PG"
  },
  {
      "label": "KPG",
      "city": "Kurupung",
      "countryCode": "GY"
  },
  {
      "label": "KPI",
      "city": "Kapit",
      "countryCode": "MY"
  },
  {
      "label": "KPM",
      "city": "Kompiam",
      "countryCode": "PG"
  },
  {
      "label": "KPO",
      "city": "Pohang",
      "countryCode": "KR"
  },
  {
      "label": "KPP",
      "city": "Kalpowar",
      "countryCode": "AU"
  },
  {
      "label": "KPS",
      "city": "Kempsey",
      "countryCode": "AU"
  },
  {
      "label": "KPT",
      "city": "Jackpot",
      "countryCode": "US"
  },
  {
      "label": "KQA",
      "city": "Akutan",
      "countryCode": "US"
  },
  {
      "label": "KQB",
      "city": "Koonibba",
      "countryCode": "AU"
  },
  {
      "label": "KQL",
      "city": "Kol",
      "countryCode": "PG"
  },
  {
      "label": "KRA",
      "city": "Kerang",
      "countryCode": "AU"
  },
  {
      "label": "KRB",
      "city": "Karumba",
      "countryCode": "AU"
  },
  {
      "label": "KRC",
      "city": "Kerinci",
      "countryCode": "ID"
  },
  {
      "label": "KRD",
      "city": "Kurundi",
      "countryCode": "AU"
  },
  {
      "label": "KRE",
      "city": "Kirundo",
      "countryCode": "BI"
  },
  {
      "label": "KRF",
      "city": "Kramfors",
      "countryCode": "SE"
  },
  {
      "label": "KRG",
      "city": "Karasabai",
      "countryCode": "GY"
  },
  {
      "label": "KRH",
      "city": "Redhill",
      "countryCode": "GB"
  },
  {
      "label": "KRI",
      "city": "Kikori",
      "countryCode": "PG"
  },
  {
      "label": "KRJ",
      "city": "Karawari",
      "countryCode": "PG"
  },
  {
      "label": "KRK",
      "city": "Krakow",
      "countryCode": "PL"
  },
  {
      "label": "KRL",
      "city": "Korla",
      "countryCode": "CN"
  },
  {
      "label": "KRM",
      "city": "Karanambo",
      "countryCode": "GY"
  },
  {
      "label": "KRN",
      "city": "Kiruna",
      "countryCode": "SE"
  },
  {
      "label": "KRO",
      "city": "Kurgan",
      "countryCode": "RU"
  },
  {
      "label": "KRP",
      "city": "Karup",
      "countryCode": "DK"
  },
  {
      "label": "KRQ",
      "city": "Kramatorsk",
      "countryCode": "UA"
  },
  {
      "label": "KRR",
      "city": "Krasnodar",
      "countryCode": "RU"
  },
  {
      "label": "KRS",
      "city": "Kristiansand",
      "countryCode": "NO"
  },
  {
      "label": "KRT",
      "city": "Khartoum",
      "countryCode": "SD"
  },
  {
      "label": "KRU",
      "city": "Kerau",
      "countryCode": "PG"
  },
  {
      "label": "KRV",
      "city": "Kerio Valley",
      "countryCode": "KE"
  },
  {
      "label": "KRW",
      "city": "Krasnowodsk",
      "countryCode": "TM"
  },
  {
      "label": "KRX",
      "city": "Kar Kar",
      "countryCode": "PG"
  },
  {
      "label": "KRY",
      "city": "Karamay",
      "countryCode": "CN"
  },
  {
      "label": "KRZ",
      "city": "Kiri",
      "countryCode": "CD"
  },
  {
      "label": "KSA",
      "city": "Kosrae",
      "countryCode": "FM"
  },
  {
      "label": "KSB",
      "city": "Kasanombe",
      "countryCode": "PG"
  },
  {
      "label": "KSC",
      "city": "Kosice",
      "countryCode": "SK"
  },
  {
      "label": "KSD",
      "city": "Karlstad",
      "countryCode": "SE"
  },
  {
      "label": "KSE",
      "city": "Kasese",
      "countryCode": "UG"
  },
  {
      "label": "KSF",
      "city": "Kassel",
      "countryCode": "DE"
  },
  {
      "label": "KSG",
      "city": "Kisengan",
      "countryCode": "PG"
  },
  {
      "label": "KSH",
      "city": "Bakhtaran",
      "countryCode": "IR"
  },
  {
      "label": "KSI",
      "city": "Kissidougou",
      "countryCode": "GN"
  },
  {
      "label": "KSJ",
      "city": "Kasos Island",
      "countryCode": "GR"
  },
  {
      "label": "KSK",
      "city": "Karlskoga",
      "countryCode": "SE"
  },
  {
      "label": "KSL",
      "city": "Kassala",
      "countryCode": "SD"
  },
  {
      "label": "KSM",
      "city": "Saint Marys",
      "countryCode": "US"
  },
  {
      "label": "KSN",
      "city": "Kostanay",
      "countryCode": "KZ"
  },
  {
      "label": "KSO",
      "city": "Kastoria",
      "countryCode": "GR"
  },
  {
      "label": "KSP",
      "city": "Kosipe",
      "countryCode": "PG"
  },
  {
      "label": "KSQ",
      "city": "Karshi",
      "countryCode": "UZ"
  },
  {
      "label": "KSR",
      "city": "Sandy River",
      "countryCode": "US"
  },
  {
      "label": "KSS",
      "city": "Sikasso",
      "countryCode": "ML"
  },
  {
      "label": "KST",
      "city": "Kosti",
      "countryCode": "SD"
  },
  {
      "label": "KSU",
      "city": "Kristiansund",
      "countryCode": "NO"
  },
  {
      "label": "KSV",
      "city": "Springvale",
      "countryCode": "AU"
  },
  {
      "label": "KSW",
      "city": "Kiryat Shmona",
      "countryCode": "IL"
  },
  {
      "label": "KSX",
      "city": "Yasuru",
      "countryCode": "PG"
  },
  {
      "label": "KSY",
      "city": "Kars",
      "countryCode": "TR"
  },
  {
      "label": "KSZ",
      "city": "Kotlas",
      "countryCode": "RU"
  },
  {
      "label": "KTA",
      "city": "Karratha",
      "countryCode": "AU"
  },
  {
      "label": "KTB",
      "city": "Thorne Bay",
      "countryCode": "US"
  },
  {
      "label": "KTC",
      "city": "Katiola",
      "countryCode": "CI"
  },
  {
      "label": "KTD",
      "city": "Kitadaito",
      "countryCode": "JP"
  },
  {
      "label": "KTE",
      "city": "Kerteh",
      "countryCode": "MY"
  },
  {
      "label": "KTF",
      "city": "Takaka",
      "countryCode": "NZ"
  },
  {
      "label": "KTG",
      "city": "Ketapang",
      "countryCode": "ID"
  },
  {
      "label": "KTI",
      "city": "Kratie",
      "countryCode": "KH"
  },
  {
      "label": "KTK",
      "city": "Kanua",
      "countryCode": "PG"
  },
  {
      "label": "KTL",
      "city": "Kitale",
      "countryCode": "KE"
  },
  {
      "label": "KTM",
      "city": "Kathmandu",
      "countryCode": "NP"
  },
  {
      "label": "KTN",
      "city": "Ketchikan",
      "countryCode": "US"
  },
  {
      "label": "KTO",
      "city": "Kato",
      "countryCode": "GY"
  },
  {
      "label": "KTQ",
      "city": "Kitee",
      "countryCode": "FI"
  },
  {
      "label": "KTR",
      "city": "Katherine",
      "countryCode": "AU"
  },
  {
      "label": "KTS",
      "city": "Teller Mission",
      "countryCode": "US"
  },
  {
      "label": "KTT",
      "city": "Kittila",
      "countryCode": "FI"
  },
  {
      "label": "KTV",
      "city": "Kamarata",
      "countryCode": "VE"
  },
  {
      "label": "KTW",
      "city": "Katowice",
      "countryCode": "PL"
  },
  {
      "label": "KTX",
      "city": "Koutiala",
      "countryCode": "ML"
  },
  {
      "label": "KTZ",
      "city": "Kwun Tong",
      "countryCode": "HK"
  },
  {
      "label": "KUA",
      "city": "Kuantan",
      "countryCode": "MY"
  },
  {
      "label": "KUB",
      "city": "Kuala Belait",
      "countryCode": "BN"
  },
  {
      "label": "KUC",
      "city": "Kuria",
      "countryCode": "KI"
  },
  {
      "label": "KUD",
      "city": "Kudat",
      "countryCode": "MY"
  },
  {
      "label": "KUE",
      "city": "Kukundu",
      "countryCode": "SB"
  },
  {
      "label": "KUF",
      "city": "Samara",
      "countryCode": "RU"
  },
  {
      "label": "KUG",
      "city": "Kubin Island",
      "countryCode": "AU"
  },
  {
      "label": "KUH",
      "city": "Kushiro",
      "countryCode": "JP"
  },
  {
      "label": "KUI",
      "city": "Kawau Island",
      "countryCode": "NZ"
  },
  {
      "label": "KUJ",
      "city": "Kushimoto",
      "countryCode": "JP"
  },
  {
      "label": "KUK",
      "city": "Kasigluk",
      "countryCode": "US"
  },
  {
      "label": "KUL",
      "city": "Kualalumpur",
      "countryCode": "MY"
  },
  {
      "label": "KUM",
      "city": "Yakushima",
      "countryCode": "JP"
  },
  {
      "label": "KUN",
      "city": "Kaunas",
      "countryCode": "LT"
  },
  {
      "label": "KUO",
      "city": "Kuopio",
      "countryCode": "FI"
  },
  {
      "label": "KUP",
      "city": "Kupiano",
      "countryCode": "PG"
  },
  {
      "label": "KUQ",
      "city": "Kuri",
      "countryCode": "PG"
  },
  {
      "label": "KUR",
      "city": "Kuran O Munjan",
      "countryCode": "AF"
  },
  {
      "label": "KUS",
      "city": "Kulusuk",
      "countryCode": "GL"
  },
  {
      "label": "KUT",
      "city": "Kutaisi",
      "countryCode": "GE"
  },
  {
      "label": "KUV",
      "city": "Kunsan",
      "countryCode": "KR"
  },
  {
      "label": "KUW",
      "city": "Kugururok River",
      "countryCode": "US"
  },
  {
      "label": "KUY",
      "city": "Kamusi",
      "countryCode": "PG"
  },
  {
      "label": "KVA",
      "city": "Kavala",
      "countryCode": "GR"
  },
  {
      "label": "KVB",
      "city": "Skovde",
      "countryCode": "SE"
  },
  {
      "label": "KVC",
      "city": "King Cove",
      "countryCode": "US"
  },
  {
      "label": "KVD",
      "city": "Gyandzha",
      "countryCode": "AZ"
  },
  {
      "label": "KVE",
      "city": "Kitava",
      "countryCode": "PG"
  },
  {
      "label": "KVG",
      "city": "Kavieng",
      "countryCode": "PG"
  },
  {
      "label": "KVK",
      "city": "Kirovsk",
      "countryCode": "RU"
  },
  {
      "label": "KVL",
      "city": "Kivalina",
      "countryCode": "US"
  },
  {
      "label": "KVU",
      "city": "Korolevu",
      "countryCode": "FJ"
  },
  {
      "label": "KVX",
      "city": "Kirov",
      "countryCode": "RU"
  },
  {
      "label": "KWA",
      "city": "Kwajalein",
      "countryCode": "MH"
  },
  {
      "label": "KWB",
      "city": "Karimunjawa",
      "countryCode": "ID"
  },
  {
      "label": "KWD",
      "city": "Kawadjia",
      "countryCode": "CF"
  },
  {
      "label": "KWE",
      "city": "Guiyang",
      "countryCode": "CN"
  },
  {
      "label": "KWG",
      "city": "Krivoy Rog",
      "countryCode": "UA"
  },
  {
      "label": "KWH",
      "city": "Khwahan",
      "countryCode": "AF"
  },
  {
      "label": "KWI",
      "city": "Kuwait City",
      "countryCode": "KW"
  },
  {
      "label": "KWJ",
      "city": "Kwangju",
      "countryCode": "KR"
  },
  {
      "label": "KWK",
      "city": "Kwigillingok",
      "countryCode": "US"
  },
  {
      "label": "KWL",
      "city": "Guilin",
      "countryCode": "CN"
  },
  {
      "label": "KWM",
      "city": "Kowanyama",
      "countryCode": "AU"
  },
  {
      "label": "KWN",
      "city": "Quinhagak",
      "countryCode": "US"
  },
  {
      "label": "KWO",
      "city": "Kawito",
      "countryCode": "PG"
  },
  {
      "label": "KWR",
      "city": "Kwai Harbour",
      "countryCode": "SB"
  },
  {
      "label": "KWS",
      "city": "Kwailabesi",
      "countryCode": "SB"
  },
  {
      "label": "KWT",
      "city": "Kwethluk",
      "countryCode": "US"
  },
  {
      "label": "KWU",
      "city": "Mansion House",
      "countryCode": "NZ"
  },
  {
      "label": "KWV",
      "city": "Kurwina",
      "countryCode": "PG"
  },
  {
      "label": "KWX",
      "city": "Kiwai Island",
      "countryCode": "PG"
  },
  {
      "label": "KWY",
      "city": "Kiwayu",
      "countryCode": "KE"
  },
  {
      "label": "KWZ",
      "city": "Kolwezi",
      "countryCode": "CD"
  },
  {
      "label": "KXE",
      "city": "Klerksdorp",
      "countryCode": "ZA"
  },
  {
      "label": "KXF",
      "city": "Koro Island",
      "countryCode": "FJ"
  },
  {
      "label": "KXK",
      "city": "Komsomolsk Na Amu",
      "countryCode": "RU"
  },
  {
      "label": "KXR",
      "city": "Karoola",
      "countryCode": "PG"
  },
  {
      "label": "KYA",
      "city": "Konya",
      "countryCode": "TR"
  },
  {
      "label": "KYB",
      "city": "Yangoonabie",
      "countryCode": "AU"
  },
  {
      "label": "KYD",
      "city": "Orchid Island",
      "countryCode": "TW"
  },
  {
      "label": "KYE",
      "city": "Tripoli",
      "countryCode": "LB"
  },
  {
      "label": "KYF",
      "city": "Yeelirrie",
      "countryCode": "AU"
  },
  {
      "label": "KYI",
      "city": "Yalata Mission",
      "countryCode": "AU"
  },
  {
      "label": "KYK",
      "city": "Karluk",
      "countryCode": "US"
  },
  {
      "label": "KYL",
      "city": "Key Largo",
      "countryCode": "US"
  },
  {
      "label": "KYN",
      "city": "Milton Keynes",
      "countryCode": "GB"
  },
  {
      "label": "KYP",
      "city": "Kyaukpyu",
      "countryCode": "MM"
  },
  {
      "label": "KYS",
      "city": "Kayes",
      "countryCode": "ML"
  },
  {
      "label": "KYT",
      "city": "Kyauktaw",
      "countryCode": "MM"
  },
  {
      "label": "KYU",
      "city": "Koyukuk",
      "countryCode": "US"
  },
  {
      "label": "KYX",
      "city": "Yalumet",
      "countryCode": "PG"
  },
  {
      "label": "KYZ",
      "city": "Kyzyl",
      "countryCode": "RU"
  },
  {
      "label": "KZC",
      "city": "Kompong Chhna",
      "countryCode": "KH"
  },
  {
      "label": "KZD",
      "city": "Krakor",
      "countryCode": "KH"
  },
  {
      "label": "KZF",
      "city": "Kaintiba",
      "countryCode": "PG"
  },
  {
      "label": "KZG",
      "city": "Kitzingen",
      "countryCode": "DE"
  },
  {
      "label": "KZH",
      "city": "Kizhuyak",
      "countryCode": "US"
  },
  {
      "label": "KZI",
      "city": "Kozani",
      "countryCode": "GR"
  },
  {
      "label": "KZK",
      "city": "Kompong Thom",
      "countryCode": "KH"
  },
  {
      "label": "KZN",
      "city": "Kazan",
      "countryCode": "RU"
  },
  {
      "label": "KZO",
      "city": "Kzyl Orda",
      "countryCode": "KZ"
  },
  {
      "label": "KZR",
      "city": "Kutahya",
      "countryCode": "TR"
  },
  {
      "label": "KZS",
      "city": "Kastelorizo",
      "countryCode": "GR"
  },
  {
      "label": "LAA",
      "city": "Lamar",
      "countryCode": "US"
  },
  {
      "label": "LAB",
      "city": "Lablab",
      "countryCode": "PG"
  },
  {
      "label": "LAC",
      "city": "Pulau Layang",
      "countryCode": "MY"
  },
  {
      "label": "LAD",
      "city": "Luanda",
      "countryCode": "AO"
  },
  {
      "label": "LAE",
      "city": "Lae",
      "countryCode": "PG"
  },
  {
      "label": "LAF",
      "city": "Lafayette",
      "countryCode": "US"
  },
  {
      "label": "LAG",
      "city": "La Guaira",
      "countryCode": "VE"
  },
  {
      "label": "LAH",
      "city": "Labuha",
      "countryCode": "ID"
  },
  {
      "label": "LAI",
      "city": "Lannion",
      "countryCode": "FR"
  },
  {
      "label": "LAJ",
      "city": "Lages",
      "countryCode": "BR"
  },
  {
      "label": "LAK",
      "city": "Aklavik",
      "countryCode": "CA"
  },
  {
      "label": "LAL",
      "city": "Lakeland",
      "countryCode": "US"
  },
  {
      "label": "LAM",
      "city": "Los Alamos",
      "countryCode": "US"
  },
  {
      "label": "LAN",
      "city": "Lansing",
      "countryCode": "US"
  },
  {
      "label": "LAO",
      "city": "Laoag",
      "countryCode": "PH"
  },
  {
      "label": "LAP",
      "city": "La Paz",
      "countryCode": "MX"
  },
  {
      "label": "LAQ",
      "city": "Beida",
      "countryCode": "LY"
  },
  {
      "label": "LAR",
      "city": "Laramie",
      "countryCode": "US"
  },
  {
      "label": "LAS",
      "city": "Las Vegas",
      "countryCode": "US"
  },
  {
      "label": "LAT",
      "city": "La Uribe",
      "countryCode": "CO"
  },
  {
      "label": "LAU",
      "city": "Lamu",
      "countryCode": "KE"
  },
  {
      "label": "LAV",
      "city": "Lalomalava",
      "countryCode": "WS"
  },
  {
      "label": "LAW",
      "city": "Lawton",
      "countryCode": "US"
  },
  {
      "label": "LAX",
      "city": "Los Angeles",
      "countryCode": "US"
  },
  {
      "label": "LAY",
      "city": "Ladysmith",
      "countryCode": "ZA"
  },
  {
      "label": "LAZ",
      "city": "Bom Jesus Da Lapa",
      "countryCode": "BR"
  },
  {
      "label": "LBA",
      "city": "Leeds",
      "countryCode": "GB"
  },
  {
      "label": "LBB",
      "city": "Lubbock",
      "countryCode": "US"
  },
  {
      "label": "LBC",
      "city": "Lnbeck",
      "countryCode": "DE"
  },
  {
      "label": "LBD",
      "city": "Khudzand",
      "countryCode": "TJ"
  },
  {
      "label": "LBE",
      "city": "Latrobe",
      "countryCode": "US"
  },
  {
      "label": "LBF",
      "city": "North Platte",
      "countryCode": "US"
  },
  {
      "label": "LBI",
      "city": "Albi",
      "countryCode": "FR"
  },
  {
      "label": "LBJ",
      "city": "Labuan Bajo",
      "countryCode": "ID"
  },
  {
      "label": "LBK",
      "city": "Liboi",
      "countryCode": "KE"
  },
  {
      "label": "LBL",
      "city": "Liberal",
      "countryCode": "US"
  },
  {
      "label": "LBM",
      "city": "Luabo",
      "countryCode": "MZ"
  },
  {
      "label": "LBN",
      "city": "Lake Baringo",
      "countryCode": "KE"
  },
  {
      "label": "LBO",
      "city": "Lusambo",
      "countryCode": "CD"
  },
  {
      "label": "LBP",
      "city": "Long Banga",
      "countryCode": "MY"
  },
  {
      "label": "LBQ",
      "city": "Lambarene",
      "countryCode": "GA"
  },
  {
      "label": "LBR",
      "city": "Labrea",
      "countryCode": "BR"
  },
  {
      "label": "LBS",
      "city": "Labasa",
      "countryCode": "FJ"
  },
  {
      "label": "LBT",
      "city": "Lumberton",
      "countryCode": "US"
  },
  {
      "label": "LBU",
      "city": "Labuan",
      "countryCode": "MY"
  },
  {
      "label": "LBV",
      "city": "Libreville",
      "countryCode": "GA"
  },
  {
      "label": "LBW",
      "city": "Long Bawan",
      "countryCode": "ID"
  },
  {
      "label": "LBX",
      "city": "Lubang",
      "countryCode": "PH"
  },
  {
      "label": "LBY",
      "city": "La Baule",
      "countryCode": "FR"
  },
  {
      "label": "LBZ",
      "city": "Lukapa",
      "countryCode": "AO"
  },
  {
      "label": "LCA",
      "city": "Larnaca",
      "countryCode": "CY"
  },
  {
      "label": "LCB",
      "city": "Pontes E Lacerda",
      "countryCode": "BR"
  },
  {
      "label": "LCC",
      "city": "Lecce",
      "countryCode": "IT"
  },
  {
      "label": "LCD",
      "city": "Louis Trichardt",
      "countryCode": "ZA"
  },
  {
      "label": "LCE",
      "city": "La Ceiba",
      "countryCode": "HN"
  },
  {
      "label": "LCF",
      "city": "Rio Dulce",
      "countryCode": "GT"
  },
  {
      "label": "LCG",
      "city": "La Coru±a",
      "countryCode": "ES"
  },
  {
      "label": "LCH",
      "city": "Lake Charles",
      "countryCode": "US"
  },
  {
      "label": "LCI",
      "city": "Laconia",
      "countryCode": "US"
  },
  {
      "label": "LCJ",
      "city": "Lodz",
      "countryCode": "PL"
  },
  {
      "label": "LCL",
      "city": "La Coloma",
      "countryCode": "CU"
  },
  {
      "label": "LCM",
      "city": "La Cumbre",
      "countryCode": "AR"
  },
  {
      "label": "LCN",
      "city": "Balcanoona",
      "countryCode": "AU"
  },
  {
      "label": "LCO",
      "city": "Lague",
      "countryCode": "CG"
  },
  {
      "label": "LCP",
      "city": "Loncopue",
      "countryCode": "AR"
  },
  {
      "label": "LCR",
      "city": "La Chorrera",
      "countryCode": "CO"
  },
  {
      "label": "LCS",
      "city": "Las Canas",
      "countryCode": "CR"
  },
  {
      "label": "LCV",
      "city": "Lucca",
      "countryCode": "IT"
  },
  {
      "label": "LDB",
      "city": "Londrina",
      "countryCode": "BR"
  },
  {
      "label": "LDC",
      "city": "Lindeman Island",
      "countryCode": "AU"
  },
  {
      "label": "LDE",
      "city": "Lourdes Tarbes",
      "countryCode": "FR"
  },
  {
      "label": "LDH",
      "city": "Lord Howe Island",
      "countryCode": "AU"
  },
  {
      "label": "LDI",
      "city": "Lindi",
      "countryCode": "TZ"
  },
  {
      "label": "LDJ",
      "city": "Linden",
      "countryCode": "US"
  },
  {
      "label": "LDK",
      "city": "Lidkoping",
      "countryCode": "SE"
  },
  {
      "label": "LDM",
      "city": "Ludington",
      "countryCode": "US"
  },
  {
      "label": "LDN",
      "city": "Lamidanda",
      "countryCode": "NP"
  },
  {
      "label": "LDO",
      "city": "Ladouanie",
      "countryCode": "SR"
  },
  {
      "label": "LDR",
      "city": "Lodar",
      "countryCode": "YE"
  },
  {
      "label": "LDU",
      "city": "Lahad Datu",
      "countryCode": "MY"
  },
  {
      "label": "LDV",
      "city": "Landvisiau",
      "countryCode": "FR"
  },
  {
      "label": "LDW",
      "city": "Lansdowne",
      "countryCode": "AU"
  },
  {
      "label": "LDX",
      "city": "St Laurent Du Mar",
      "countryCode": "GF"
  },
  {
      "label": "LDY",
      "city": "Londonderry",
      "countryCode": "GB"
  },
  {
      "label": "LDZ",
      "city": "Londolozi",
      "countryCode": "ZA"
  },
  {
      "label": "LEA",
      "city": "Learmonth",
      "countryCode": "AU"
  },
  {
      "label": "LEB",
      "city": "Lebanon",
      "countryCode": "US"
  },
  {
      "label": "LEC",
      "city": "Lencoise",
      "countryCode": "BR"
  },
  {
      "label": "LED",
      "city": "St Petersburg",
      "countryCode": "RU"
  },
  {
      "label": "LEE",
      "city": "Leesburg",
      "countryCode": "US"
  },
  {
      "label": "LEF",
      "city": "Lebakeng",
      "countryCode": "LS"
  },
  {
      "label": "LEG",
      "city": "Aleg",
      "countryCode": "MR"
  },
  {
      "label": "LEH",
      "city": "Le Havre",
      "countryCode": "FR"
  },
  {
      "label": "LEI",
      "city": "Almeria",
      "countryCode": "ES"
  },
  {
      "label": "LEJ",
      "city": "Leipzig",
      "countryCode": "DE"
  },
  {
      "label": "LEK",
      "city": "Labe",
      "countryCode": "GN"
  },
  {
      "label": "LEL",
      "city": "Lake Evella",
      "countryCode": "AU"
  },
  {
      "label": "LEM",
      "city": "Lemmon",
      "countryCode": "US"
  },
  {
      "label": "LEN",
      "city": "Leon",
      "countryCode": "ES"
  },
  {
      "label": "LEO",
      "city": "Leconi",
      "countryCode": "GA"
  },
  {
      "label": "LEP",
      "city": "Leopoldina",
      "countryCode": "BR"
  },
  {
      "label": "LEQ",
      "city": "Lands End",
      "countryCode": "GB"
  },
  {
      "label": "LER",
      "city": "Leinster",
      "countryCode": "AU"
  },
  {
      "label": "LES",
      "city": "Lesobeng",
      "countryCode": "LS"
  },
  {
      "label": "LET",
      "city": "Leticia",
      "countryCode": "CO"
  },
  {
      "label": "LEU",
      "city": "Seo De Urgel",
      "countryCode": "ES"
  },
  {
      "label": "LEV",
      "city": "Bureta",
      "countryCode": "FJ"
  },
  {
      "label": "LEW",
      "city": "Lewiston",
      "countryCode": "US"
  },
  {
      "label": "LEX",
      "city": "Lexington",
      "countryCode": "US"
  },
  {
      "label": "LEY",
      "city": "Lelystad",
      "countryCode": "NL"
  },
  {
      "label": "LEZ",
      "city": "La Esperanza",
      "countryCode": "HN"
  },
  {
      "label": "LFN",
      "city": "Louisburg",
      "countryCode": "US"
  },
  {
      "label": "LFO",
      "city": "Kelafo Callaf",
      "countryCode": "ET"
  },
  {
      "label": "LFP",
      "city": "Lakefield",
      "countryCode": "AU"
  },
  {
      "label": "LFR",
      "city": "La Fria",
      "countryCode": "VE"
  },
  {
      "label": "LFW",
      "city": "Lome",
      "countryCode": "TG"
  },
  {
      "label": "LGB",
      "city": "Long Beach",
      "countryCode": "US"
  },
  {
      "label": "LGC",
      "city": "La Grange",
      "countryCode": "US"
  },
  {
      "label": "LGD",
      "city": "La Grande",
      "countryCode": "US"
  },
  {
      "label": "LGE",
      "city": "Lake Gregory",
      "countryCode": "AU"
  },
  {
      "label": "LGG",
      "city": "Liege",
      "countryCode": "BE"
  },
  {
      "label": "LGH",
      "city": "Leigh Creek",
      "countryCode": "AU"
  },
  {
      "label": "LGI",
      "city": "Deadmans Cay",
      "countryCode": "BS"
  },
  {
      "label": "LGK",
      "city": "Langkawi",
      "countryCode": "MY"
  },
  {
      "label": "LGL",
      "city": "Long Lellang",
      "countryCode": "MY"
  },
  {
      "label": "LGM",
      "city": "Laiagam",
      "countryCode": "PG"
  },
  {
      "label": "LGN",
      "city": "Linga Linga",
      "countryCode": "PG"
  },
  {
      "label": "LGO",
      "city": "Langeoog",
      "countryCode": "DE"
  },
  {
      "label": "LGP",
      "city": "Legaspi",
      "countryCode": "PH"
  },
  {
      "label": "LGQ",
      "city": "Lago Agrio",
      "countryCode": "EC"
  },
  {
      "label": "LGR",
      "city": "Cochrane",
      "countryCode": "CL"
  },
  {
      "label": "LGS",
      "city": "Malargue",
      "countryCode": "AR"
  },
  {
      "label": "LGT",
      "city": "Las Gaviotas",
      "countryCode": "CO"
  },
  {
      "label": "LGU",
      "city": "Logan",
      "countryCode": "US"
  },
  {
      "label": "LGX",
      "city": "Lugh Ganane",
      "countryCode": "SO"
  },
  {
      "label": "LGY",
      "city": "Lagunillas",
      "countryCode": "VE"
  },
  {
      "label": "LGZ",
      "city": "Leguizamo",
      "countryCode": "CO"
  },
  {
      "label": "LHA",
      "city": "Lahr",
      "countryCode": "DE"
  },
  {
      "label": "LHB",
      "city": "Lost Harbor",
      "countryCode": "US"
  },
  {
      "label": "LHE",
      "city": "Lahore",
      "countryCode": "PK"
  },
  {
      "label": "LHG",
      "city": "Lightning Ridge",
      "countryCode": "AU"
  },
  {
      "label": "LHI",
      "city": "Lereh",
      "countryCode": "ID"
  },
  {
      "label": "LHK",
      "city": "Guanghua",
      "countryCode": "CN"
  },
  {
      "label": "LHN",
      "city": "Lishan",
      "countryCode": "TW"
  },
  {
      "label": "LHP",
      "city": "Lehu",
      "countryCode": "PG"
  },
  {
      "label": "LHS",
      "city": "Las Heras",
      "countryCode": "AR"
  },
  {
      "label": "LHV",
      "city": "Lock Haven",
      "countryCode": "US"
  },
  {
      "label": "LHW",
      "city": "Lanzhou",
      "countryCode": "CN"
  },
  {
      "label": "LIA",
      "city": "Liangping",
      "countryCode": "CN"
  },
  {
      "label": "LIB",
      "city": "Limbunya",
      "countryCode": "AU"
  },
  {
      "label": "LIC",
      "city": "Limon",
      "countryCode": "US"
  },
  {
      "label": "LID",
      "city": "Leiden",
      "countryCode": "NL"
  },
  {
      "label": "LIE",
      "city": "Libenge",
      "countryCode": "CD"
  },
  {
      "label": "LIF",
      "city": "Lifou",
      "countryCode": "NC"
  },
  {
      "label": "LIG",
      "city": "Limoges",
      "countryCode": "FR"
  },
  {
      "label": "LIH",
      "city": "Kauai Island",
      "countryCode": "US"
  },
  {
      "label": "LII",
      "city": "Mulia",
      "countryCode": "ID"
  },
  {
      "label": "LIJ",
      "city": "Long Island",
      "countryCode": "US"
  },
  {
      "label": "LIK",
      "city": "Likiep Island",
      "countryCode": "MH"
  },
  {
      "label": "LIL",
      "city": "Lille",
      "countryCode": "FR"
  },
  {
      "label": "LIM",
      "city": "Lima",
      "countryCode": "PE"
  },
  {
      "label": "LIO",
      "city": "Limon",
      "countryCode": "CR"
  },
  {
      "label": "LIP",
      "city": "Lins",
      "countryCode": "BR"
  },
  {
      "label": "LIQ",
      "city": "Lisala",
      "countryCode": "CD"
  },
  {
      "label": "LIR",
      "city": "Liberia",
      "countryCode": "CR"
  },
  {
      "label": "LIS",
      "city": "Lisbon",
      "countryCode": "PT"
  },
  {
      "label": "LIT",
      "city": "Little Rock",
      "countryCode": "US"
  },
  {
      "label": "LIU",
      "city": "Linosa",
      "countryCode": "IT"
  },
  {
      "label": "LIV",
      "city": "Livengood",
      "countryCode": "US"
  },
  {
      "label": "LIW",
      "city": "Loikaw",
      "countryCode": "MM"
  },
  {
      "label": "LIX",
      "city": "Likoma",
      "countryCode": "MW"
  },
  {
      "label": "LIY",
      "city": "Hinesville",
      "countryCode": "US"
  },
  {
      "label": "LJA",
      "city": "Lodja",
      "countryCode": "CD"
  },
  {
      "label": "LJG",
      "city": "Lijiang",
      "countryCode": "CN"
  },
  {
      "label": "LJN",
      "city": "Lake Jackson",
      "countryCode": "US"
  },
  {
      "label": "LJU",
      "city": "Ljubljana",
      "countryCode": "SI"
  },
  {
      "label": "LKA",
      "city": "Larantuka",
      "countryCode": "ID"
  },
  {
      "label": "LKB",
      "city": "Lakeba",
      "countryCode": "FJ"
  },
  {
      "label": "LKC",
      "city": "Lekana",
      "countryCode": "CG"
  },
  {
      "label": "LKD",
      "city": "Lakeland Downs",
      "countryCode": "AU"
  },
  {
      "label": "LKG",
      "city": "Lokichoggio",
      "countryCode": "KE"
  },
  {
      "label": "LKK",
      "city": "Kulik Lake",
      "countryCode": "US"
  },
  {
      "label": "LKL",
      "city": "Lakselv",
      "countryCode": "NO"
  },
  {
      "label": "LKN",
      "city": "Leknes",
      "countryCode": "NO"
  },
  {
      "label": "LKP",
      "city": "Lake Placid",
      "countryCode": "US"
  },
  {
      "label": "LKR",
      "city": "Las Khoreh",
      "countryCode": "SO"
  },
  {
      "label": "LKS",
      "city": "Lakeside",
      "countryCode": "US"
  },
  {
      "label": "LKT",
      "city": "Lakota",
      "countryCode": "CI"
  },
  {
      "label": "LKU",
      "city": "Lake Rudolf",
      "countryCode": "KE"
  },
  {
      "label": "LKV",
      "city": "Lakeview",
      "countryCode": "US"
  },
  {
      "label": "LKY",
      "city": "Lake Manyara",
      "countryCode": "TZ"
  },
  {
      "label": "LLA",
      "city": "Lulea",
      "countryCode": "SE"
  },
  {
      "label": "LLE",
      "city": "Malelane",
      "countryCode": "ZA"
  },
  {
      "label": "LLG",
      "city": "Chillagoe",
      "countryCode": "AU"
  },
  {
      "label": "LLH",
      "city": "Las Limas",
      "countryCode": "HN"
  },
  {
      "label": "LLI",
      "city": "Lalibela",
      "countryCode": "ET"
  },
  {
      "label": "LLL",
      "city": "Lissadell",
      "countryCode": "AU"
  },
  {
      "label": "LLM",
      "city": "Long Lama",
      "countryCode": "MY"
  },
  {
      "label": "LLN",
      "city": "Kelila",
      "countryCode": "ID"
  },
  {
      "label": "LLP",
      "city": "Linda Downs",
      "countryCode": "AU"
  },
  {
      "label": "LLS",
      "city": "Las Lomitas",
      "countryCode": "AR"
  },
  {
      "label": "LLU",
      "city": "Alluitsup Paa",
      "countryCode": "GL"
  },
  {
      "label": "LLW",
      "city": "Lilongwe",
      "countryCode": "MW"
  },
  {
      "label": "LLX",
      "city": "Lyndonville",
      "countryCode": "US"
  },
  {
      "label": "LLY",
      "city": "Mount Holly",
      "countryCode": "US"
  },
  {
      "label": "LMA",
      "city": "Lake Minchumina",
      "countryCode": "US"
  },
  {
      "label": "LMB",
      "city": "Salima",
      "countryCode": "MW"
  },
  {
      "label": "LMC",
      "city": "Lamacarena",
      "countryCode": "CO"
  },
  {
      "label": "LMD",
      "city": "Los Menucos",
      "countryCode": "AR"
  },
  {
      "label": "LME",
      "city": "Le Mans",
      "countryCode": "FR"
  },
  {
      "label": "LMG",
      "city": "Lamassa",
      "countryCode": "PG"
  },
  {
      "label": "LMH",
      "city": "Limon",
      "countryCode": "HN"
  },
  {
      "label": "LMI",
      "city": "Lumi",
      "countryCode": "PG"
  },
  {
      "label": "LMK",
      "city": "Limerick",
      "countryCode": "IE"
  },
  {
      "label": "LML",
      "city": "Lae Island",
      "countryCode": "MH"
  },
  {
      "label": "LMM",
      "city": "Los Mochis",
      "countryCode": "MX"
  },
  {
      "label": "LMN",
      "city": "Limbang",
      "countryCode": "MY"
  },
  {
      "label": "LMP",
      "city": "Lampedusa",
      "countryCode": "IT"
  },
  {
      "label": "LMQ",
      "city": "Marsa Brega",
      "countryCode": "LY"
  },
  {
      "label": "LMR",
      "city": "Lime Acres",
      "countryCode": "ZA"
  },
  {
      "label": "LMS",
      "city": "Louisville",
      "countryCode": "US"
  },
  {
      "label": "LMT",
      "city": "Klamath Falls",
      "countryCode": "US"
  },
  {
      "label": "LMX",
      "city": "Lopez De Micay",
      "countryCode": "CO"
  },
  {
      "label": "LMY",
      "city": "Lake Murray",
      "countryCode": "PG"
  },
  {
      "label": "LMZ",
      "city": "Palma",
      "countryCode": "MZ"
  },
  {
      "label": "LNB",
      "city": "Lamen Bay",
      "countryCode": "VU"
  },
  {
      "label": "LNC",
      "city": "Lengbati",
      "countryCode": "PG"
  },
  {
      "label": "LND",
      "city": "Lander",
      "countryCode": "US"
  },
  {
      "label": "LNE",
      "city": "Lonorore",
      "countryCode": "VU"
  },
  {
      "label": "LNF",
      "city": "Munbil",
      "countryCode": "PG"
  },
  {
      "label": "LNG",
      "city": "Lese",
      "countryCode": "PG"
  },
  {
      "label": "LNH",
      "city": "Lake Nash",
      "countryCode": "AU"
  },
  {
      "label": "LNI",
      "city": "Lonely",
      "countryCode": "US"
  },
  {
      "label": "LNK",
      "city": "Lincoln",
      "countryCode": "US"
  },
  {
      "label": "LNM",
      "city": "Langimar",
      "countryCode": "PG"
  },
  {
      "label": "LNN",
      "city": "Willoughby",
      "countryCode": "US"
  },
  {
      "label": "LNO",
      "city": "Leonora",
      "countryCode": "AU"
  },
  {
      "label": "LNP",
      "city": "Wise",
      "countryCode": "US"
  },
  {
      "label": "LNQ",
      "city": "Loani",
      "countryCode": "PG"
  },
  {
      "label": "LNR",
      "city": "Lone Rock",
      "countryCode": "US"
  },
  {
      "label": "LNS",
      "city": "Lancaster",
      "countryCode": "US"
  },
  {
      "label": "LNV",
      "city": "Londolovit",
      "countryCode": "PG"
  },
  {
      "label": "LNX",
      "city": "Smolensk",
      "countryCode": "RU"
  },
  {
      "label": "LNY",
      "city": "Lanai City",
      "countryCode": "US"
  },
  {
      "label": "LNZ",
      "city": "Linz",
      "countryCode": "AT"
  },
  {
      "label": "LOA",
      "city": "Lorraine",
      "countryCode": "AU"
  },
  {
      "label": "LOB",
      "city": "Los Andes",
      "countryCode": "CL"
  },
  {
      "label": "LOC",
      "city": "Lock",
      "countryCode": "AU"
  },
  {
      "label": "LOD",
      "city": "Longana",
      "countryCode": "VU"
  },
  {
      "label": "LOE",
      "city": "Loei",
      "countryCode": "TH"
  },
  {
      "label": "LOF",
      "city": "Loen",
      "countryCode": "MH"
  },
  {
      "label": "LOG",
      "city": "Longview",
      "countryCode": "US"
  },
  {
      "label": "LOH",
      "city": "Loja",
      "countryCode": "EC"
  },
  {
      "label": "LOK",
      "city": "Lodwar",
      "countryCode": "KE"
  },
  {
      "label": "LOL",
      "city": "Lovelock",
      "countryCode": "US"
  },
  {
      "label": "LOM",
      "city": "Lagos De Moreno",
      "countryCode": "MX"
  },
  {
      "label": "LON",
      "city": "London",
      "countryCode": "GB"
  },
  {
      "label": "LOO",
      "city": "Laghouat",
      "countryCode": "DZ"
  },
  {
      "label": "LOP",
      "city": "Lombok",
      "countryCode": "ID"
  },
  {
      "label": "LOQ",
      "city": "Lobatse",
      "countryCode": "BW"
  },
  {
      "label": "LOS",
      "city": "Lagos",
      "countryCode": "NG"
  },
  {
      "label": "LOT",
      "city": "Lockport",
      "countryCode": "US"
  },
  {
      "label": "LOV",
      "city": "Monclova",
      "countryCode": "MX"
  },
  {
      "label": "LOW",
      "city": "Louisa",
      "countryCode": "US"
  },
  {
      "label": "LOX",
      "city": "Los Tablones",
      "countryCode": "GT"
  },
  {
      "label": "LOY",
      "city": "Loyangalani",
      "countryCode": "KE"
  },
  {
      "label": "LOZ",
      "city": "London",
      "countryCode": "US"
  },
  {
      "label": "LPA",
      "city": "Gran Canaria",
      "countryCode": "ES"
  },
  {
      "label": "LPB",
      "city": "La Paz",
      "countryCode": "BO"
  },
  {
      "label": "LPC",
      "city": "Lompoc",
      "countryCode": "US"
  },
  {
      "label": "LPD",
      "city": "La Pedrera",
      "countryCode": "CO"
  },
  {
      "label": "LPE",
      "city": "La Primavera",
      "countryCode": "CO"
  },
  {
      "label": "LPG",
      "city": "La Plata",
      "countryCode": "AR"
  },
  {
      "label": "LPI",
      "city": "Linkoping",
      "countryCode": "SE"
  },
  {
      "label": "LPJ",
      "city": "Pijiguaos",
      "countryCode": "VE"
  },
  {
      "label": "LPK",
      "city": "Lipetsk",
      "countryCode": "RU"
  },
  {
      "label": "LPL",
      "city": "Liverpool",
      "countryCode": "GB"
  },
  {
      "label": "LPM",
      "city": "Lamap",
      "countryCode": "VU"
  },
  {
      "label": "LPN",
      "city": "Leron Plains",
      "countryCode": "PG"
  },
  {
      "label": "LPO",
      "city": "Laporte",
      "countryCode": "US"
  },
  {
      "label": "LPP",
      "city": "Lappeenranta",
      "countryCode": "FI"
  },
  {
      "label": "LPQ",
      "city": "Luang Prabang",
      "countryCode": "LA"
  },
  {
      "label": "LPS",
      "city": "Lopez Island",
      "countryCode": "US"
  },
  {
      "label": "LPT",
      "city": "Lampang",
      "countryCode": "TH"
  },
  {
      "label": "LPU",
      "city": "Long Apung",
      "countryCode": "ID"
  },
  {
      "label": "LPW",
      "city": "Little Port Walte",
      "countryCode": "US"
  },
  {
      "label": "LPX",
      "city": "Liepaya",
      "countryCode": "LV"
  },
  {
      "label": "LPY",
      "city": "Le Puy",
      "countryCode": "FR"
  },
  {
      "label": "LQK",
      "city": "Pickens",
      "countryCode": "US"
  },
  {
      "label": "LQM",
      "city": "Puerto Leguizamo",
      "countryCode": "CO"
  },
  {
      "label": "LQN",
      "city": "Qala Nau",
      "countryCode": "AF"
  },
  {
      "label": "LRA",
      "city": "Larisa",
      "countryCode": "GR"
  },
  {
      "label": "LRB",
      "city": "Leribe",
      "countryCode": "LS"
  },
  {
      "label": "LRD",
      "city": "Laredo",
      "countryCode": "US"
  },
  {
      "label": "LRE",
      "city": "Longreach",
      "countryCode": "AU"
  },
  {
      "label": "LRG",
      "city": "Lora Lai",
      "countryCode": "PK"
  },
  {
      "label": "LRH",
      "city": "La Rochelle",
      "countryCode": "FR"
  },
  {
      "label": "LRI",
      "city": "Lorica",
      "countryCode": "CO"
  },
  {
      "label": "LRJ",
      "city": "Lemars",
      "countryCode": "US"
  },
  {
      "label": "LRL",
      "city": "Lama Kara",
      "countryCode": "TG"
  },
  {
      "label": "LRM",
      "city": "La Romana",
      "countryCode": "DO"
  },
  {
      "label": "LRO",
      "city": "Lathrop",
      "countryCode": "US"
  },
  {
      "label": "LRQ",
      "city": "Laurie River",
      "countryCode": "CA"
  },
  {
      "label": "LRR",
      "city": "LAR",
      "countryCode": "IR"
  },
  {
      "label": "LRS",
      "city": "Leros",
      "countryCode": "GR"
  },
  {
      "label": "LRT",
      "city": "Lorient",
      "countryCode": "FR"
  },
  {
      "label": "LRU",
      "city": "Las Cruces",
      "countryCode": "US"
  },
  {
      "label": "LRV",
      "city": "Los Roques",
      "countryCode": "VE"
  },
  {
      "label": "LSA",
      "city": "Losuia",
      "countryCode": "PG"
  },
  {
      "label": "LSB",
      "city": "Lordsburg",
      "countryCode": "US"
  },
  {
      "label": "LSC",
      "city": "La Serena",
      "countryCode": "CL"
  },
  {
      "label": "LSE",
      "city": "La Crosse",
      "countryCode": "US"
  },
  {
      "label": "LSF",
      "city": "Fort Benning",
      "countryCode": "US"
  },
  {
      "label": "LSH",
      "city": "Lashio",
      "countryCode": "MM"
  },
  {
      "label": "LSJ",
      "city": "Long Island",
      "countryCode": "PG"
  },
  {
      "label": "LSK",
      "city": "Lusk",
      "countryCode": "US"
  },
  {
      "label": "LSL",
      "city": "Los Chiles",
      "countryCode": "CR"
  },
  {
      "label": "LSM",
      "city": "Long Semado",
      "countryCode": "MY"
  },
  {
      "label": "LSN",
      "city": "Los Banos",
      "countryCode": "US"
  },
  {
      "label": "LSO",
      "city": "Les Sables",
      "countryCode": "FR"
  },
  {
      "label": "LSP",
      "city": "Las Piedras",
      "countryCode": "VE"
  },
  {
      "label": "LSQ",
      "city": "Los Angeles",
      "countryCode": "CL"
  },
  {
      "label": "LSR",
      "city": "Lost River",
      "countryCode": "US"
  },
  {
      "label": "LSS",
      "city": "Terre De Haut",
      "countryCode": "GP"
  },
  {
      "label": "LST",
      "city": "Launceston",
      "countryCode": "AU"
  },
  {
      "label": "LSU",
      "city": "Long Sukang",
      "countryCode": "MY"
  },
  {
      "label": "LSW",
      "city": "Lhoksumawe",
      "countryCode": "ID"
  },
  {
      "label": "LSX",
      "city": "Lhok Sukon",
      "countryCode": "ID"
  },
  {
      "label": "LSY",
      "city": "Lismore",
      "countryCode": "AU"
  },
  {
      "label": "LSZ",
      "city": "Mali Losinj",
      "countryCode": "HR"
  },
  {
      "label": "LTA",
      "city": "Tzaneen",
      "countryCode": "ZA"
  },
  {
      "label": "LTB",
      "city": "Latrobe",
      "countryCode": "AU"
  },
  {
      "label": "LTC",
      "city": "Lai",
      "countryCode": "TD"
  },
  {
      "label": "LTD",
      "city": "Ghadames",
      "countryCode": "LY"
  },
  {
      "label": "LTF",
      "city": "Leitre",
      "countryCode": "PG"
  },
  {
      "label": "LTG",
      "city": "Langtang",
      "countryCode": "NP"
  },
  {
      "label": "LTH",
      "city": "Lathrop Wells",
      "countryCode": "US"
  },
  {
      "label": "LTI",
      "city": "Altai",
      "countryCode": "MN"
  },
  {
      "label": "LTK",
      "city": "Latakia",
      "countryCode": "SY"
  },
  {
      "label": "LTL",
      "city": "Lastourville",
      "countryCode": "GA"
  },
  {
      "label": "LTM",
      "city": "Lethem",
      "countryCode": "GY"
  },
  {
      "label": "LTO",
      "city": "Loreto",
      "countryCode": "MX"
  },
  {
      "label": "LTP",
      "city": "Lyndhurst",
      "countryCode": "AU"
  },
  {
      "label": "LTQ",
      "city": "Le Touquet",
      "countryCode": "FR"
  },
  {
      "label": "LTR",
      "city": "Letterkenny",
      "countryCode": "IE"
  },
  {
      "label": "LTS",
      "city": "Altus",
      "countryCode": "US"
  },
  {
      "label": "LTT",
      "city": "Saint Tropez",
      "countryCode": "FR"
  },
  {
      "label": "LTV",
      "city": "Lotusvale",
      "countryCode": "AU"
  },
  {
      "label": "LTW",
      "city": "Leonardtown",
      "countryCode": "US"
  },
  {
      "label": "LUA",
      "city": "Lukla",
      "countryCode": "NP"
  },
  {
      "label": "LUB",
      "city": "Lumid Pau",
      "countryCode": "GY"
  },
  {
      "label": "LUC",
      "city": "Laucala Island",
      "countryCode": "FJ"
  },
  {
      "label": "LUD",
      "city": "Luderitz",
      "countryCode": "NA"
  },
  {
      "label": "LUE",
      "city": "Lucenec",
      "countryCode": "SK"
  },
  {
      "label": "LUG",
      "city": "Lugano",
      "countryCode": "CH"
  },
  {
      "label": "LUI",
      "city": "La Union",
      "countryCode": "HN"
  },
  {
      "label": "LUJ",
      "city": "Lusikisiki",
      "countryCode": "ZA"
  },
  {
      "label": "LUL",
      "city": "Laurel",
      "countryCode": "US"
  },
  {
      "label": "LUM",
      "city": "Luxi",
      "countryCode": "CN"
  },
  {
      "label": "LUN",
      "city": "Lusaka",
      "countryCode": "ZM"
  },
  {
      "label": "LUO",
      "city": "Luena",
      "countryCode": "AO"
  },
  {
      "label": "LUP",
      "city": "Kalaupapa",
      "countryCode": "US"
  },
  {
      "label": "LUQ",
      "city": "San Luis",
      "countryCode": "AR"
  },
  {
      "label": "LUR",
      "city": "Cape Lisburne",
      "countryCode": "US"
  },
  {
      "label": "LUS",
      "city": "Lusanga",
      "countryCode": "CD"
  },
  {
      "label": "LUT",
      "city": "Laura Station",
      "countryCode": "AU"
  },
  {
      "label": "LUU",
      "city": "Laura",
      "countryCode": "AU"
  },
  {
      "label": "LUV",
      "city": "Langgur",
      "countryCode": "ID"
  },
  {
      "label": "LUW",
      "city": "Luwuk",
      "countryCode": "ID"
  },
  {
      "label": "LUX",
      "city": "Luxembourg",
      "countryCode": "LU"
  },
  {
      "label": "LUY",
      "city": "Lushoto",
      "countryCode": "TZ"
  },
  {
      "label": "LUZ",
      "city": "Lushan",
      "countryCode": "CN"
  },
  {
      "label": "LVA",
      "city": "Laval",
      "countryCode": "FR"
  },
  {
      "label": "LVB",
      "city": "Livramento",
      "countryCode": "BR"
  },
  {
      "label": "LVD",
      "city": "Lime Village",
      "countryCode": "US"
  },
  {
      "label": "LVI",
      "city": "Livingstone",
      "countryCode": "ZM"
  },
  {
      "label": "LVK",
      "city": "Livermore",
      "countryCode": "US"
  },
  {
      "label": "LVL",
      "city": "Lawrenceville",
      "countryCode": "US"
  },
  {
      "label": "LVM",
      "city": "Livingston",
      "countryCode": "US"
  },
  {
      "label": "LVO",
      "city": "Laverton",
      "countryCode": "AU"
  },
  {
      "label": "LVP",
      "city": "Lavan",
      "countryCode": "IR"
  },
  {
      "label": "LVS",
      "city": "Las Vegas",
      "countryCode": "US"
  },
  {
      "label": "LWA",
      "city": "Lwbak",
      "countryCode": "PH"
  },
  {
      "label": "LWB",
      "city": "Lewisburg",
      "countryCode": "US"
  },
  {
      "label": "LWC",
      "city": "Lawrence",
      "countryCode": "US"
  },
  {
      "label": "LWE",
      "city": "Lewoleba",
      "countryCode": "ID"
  },
  {
      "label": "LWH",
      "city": "Lawn Hill",
      "countryCode": "AU"
  },
  {
      "label": "LWI",
      "city": "Lowai",
      "countryCode": "PG"
  },
  {
      "label": "LWL",
      "city": "Wells",
      "countryCode": "US"
  },
  {
      "label": "LWM",
      "city": "Lawrence",
      "countryCode": "US"
  },
  {
      "label": "LWN",
      "city": "Leninakan",
      "countryCode": "AM"
  },
  {
      "label": "LWO",
      "city": "Lvov",
      "countryCode": "UA"
  },
  {
      "label": "LWR",
      "city": "Leeuwarden",
      "countryCode": "NL"
  },
  {
      "label": "LWS",
      "city": "Lewiston",
      "countryCode": "US"
  },
  {
      "label": "LWT",
      "city": "Lewistown",
      "countryCode": "US"
  },
  {
      "label": "LWV",
      "city": "Lawrenceville",
      "countryCode": "US"
  },
  {
      "label": "LWY",
      "city": "Lawas",
      "countryCode": "MY"
  },
  {
      "label": "LXA",
      "city": "Lhasa",
      "countryCode": "CN"
  },
  {
      "label": "LXC",
      "city": "Liverpool",
      "countryCode": "GB"
  },
  {
      "label": "LXG",
      "city": "Luang Namtha",
      "countryCode": "LA"
  },
  {
      "label": "LXI",
      "city": "Linxi",
      "countryCode": "CN"
  },
  {
      "label": "LXN",
      "city": "Lexington",
      "countryCode": "US"
  },
  {
      "label": "LXR",
      "city": "Luxor",
      "countryCode": "EG"
  },
  {
      "label": "LXS",
      "city": "Lemnos",
      "countryCode": "GR"
  },
  {
      "label": "LXU",
      "city": "Lukulu",
      "countryCode": "ZM"
  },
  {
      "label": "LXV",
      "city": "Leadville",
      "countryCode": "US"
  },
  {
      "label": "LYA",
      "city": "Luoyang",
      "countryCode": "CN"
  },
  {
      "label": "LYB",
      "city": "Little Cayman",
      "countryCode": "KY"
  },
  {
      "label": "LYC",
      "city": "Lycksele",
      "countryCode": "SE"
  },
  {
      "label": "LYG",
      "city": "Lianyungang",
      "countryCode": "CN"
  },
  {
      "label": "LYH",
      "city": "Lynchburg",
      "countryCode": "US"
  },
  {
      "label": "LYI",
      "city": "Linyi",
      "countryCode": "CN"
  },
  {
      "label": "LYK",
      "city": "Lunyuk",
      "countryCode": "ID"
  },
  {
      "label": "LYO",
      "city": "Lyons",
      "countryCode": "US"
  },
  {
      "label": "LYP",
      "city": "Faisalabad",
      "countryCode": "PK"
  },
  {
      "label": "LYR",
      "city": "Longyearbyen",
      "countryCode": "NO"
  },
  {
      "label": "LYS",
      "city": "Lyon",
      "countryCode": "FR"
  },
  {
      "label": "LYT",
      "city": "Lady Elliot Island",
      "countryCode": "AU"
  },
  {
      "label": "LYU",
      "city": "Ely",
      "countryCode": "US"
  },
  {
      "label": "LYX",
      "city": "Lydd",
      "countryCode": "GB"
  },
  {
      "label": "LZA",
      "city": "Luiza",
      "countryCode": "CD"
  },
  {
      "label": "LZC",
      "city": "Lazaro Cardenas",
      "countryCode": "MX"
  },
  {
      "label": "LZH",
      "city": "Liuzhou",
      "countryCode": "CN"
  },
  {
      "label": "LZI",
      "city": "Luozi",
      "countryCode": "CD"
  },
  {
      "label": "LZM",
      "city": "Luzamba",
      "countryCode": "AO"
  },
  {
      "label": "LZO",
      "city": "Luzhou",
      "countryCode": "CN"
  },
  {
      "label": "LZR",
      "city": "Lizard Island",
      "countryCode": "AU"
  },
  {
      "label": "MAB",
      "city": "Maraba",
      "countryCode": "BR"
  },
  {
      "label": "MAD",
      "city": "Madrid",
      "countryCode": "ES"
  },
  {
      "label": "MAE",
      "city": "Madera",
      "countryCode": "US"
  },
  {
      "label": "MAF",
      "city": "Midland",
      "countryCode": "US"
  },
  {
      "label": "MAG",
      "city": "Madang",
      "countryCode": "PG"
  },
  {
      "label": "MAH",
      "city": "Mahon",
      "countryCode": "ES"
  },
  {
      "label": "MAI",
      "city": "Mangochi",
      "countryCode": "MW"
  },
  {
      "label": "MAJ",
      "city": "Majuro",
      "countryCode": "MH"
  },
  {
      "label": "MAK",
      "city": "Malakal",
      "countryCode": "SD"
  },
  {
      "label": "MAL",
      "city": "Mangole",
      "countryCode": "ID"
  },
  {
      "label": "MAM",
      "city": "Matamoros",
      "countryCode": "MX"
  },
  {
      "label": "MAN",
      "city": "Manchester",
      "countryCode": "GB"
  },
  {
      "label": "MAO",
      "city": "Manaus",
      "countryCode": "BR"
  },
  {
      "label": "MAP",
      "city": "Mamai",
      "countryCode": "PG"
  },
  {
      "label": "MAQ",
      "city": "Mae Sot",
      "countryCode": "TH"
  },
  {
      "label": "MAR",
      "city": "Maracaibo",
      "countryCode": "VE"
  },
  {
      "label": "MAS",
      "city": "Manus Island",
      "countryCode": "PG"
  },
  {
      "label": "MAT",
      "city": "Matadi",
      "countryCode": "CD"
  },
  {
      "label": "MAU",
      "city": "Maupiti",
      "countryCode": "PF"
  },
  {
      "label": "MAV",
      "city": "Maloelap Island",
      "countryCode": "MH"
  },
  {
      "label": "MAW",
      "city": "Malden",
      "countryCode": "US"
  },
  {
      "label": "MAX",
      "city": "Matam",
      "countryCode": "SN"
  },
  {
      "label": "MAY",
      "city": "Mangrove Cay",
      "countryCode": "BS"
  },
  {
      "label": "MAZ",
      "city": "Mayaguez",
      "countryCode": "PR"
  },
  {
      "label": "MBA",
      "city": "Mombasa",
      "countryCode": "KE"
  },
  {
      "label": "MBB",
      "city": "Marble Bar",
      "countryCode": "AU"
  },
  {
      "label": "MBC",
      "city": "Mbigou",
      "countryCode": "GA"
  },
  {
      "label": "MBD",
      "city": "Mmabatho",
      "countryCode": "ZA"
  },
  {
      "label": "MBE",
      "city": "Monbetsu",
      "countryCode": "JP"
  },
  {
      "label": "MBF",
      "city": "Mount Buffalo",
      "countryCode": "AU"
  },
  {
      "label": "MBG",
      "city": "Mobridge",
      "countryCode": "US"
  },
  {
      "label": "MBH",
      "city": "Maryborough",
      "countryCode": "AU"
  },
  {
      "label": "MBI",
      "city": "Mbeya",
      "countryCode": "TZ"
  },
  {
      "label": "MBJ",
      "city": "Montego Bay",
      "countryCode": "JM"
  },
  {
      "label": "MBK",
      "city": "Matupa",
      "countryCode": "BR"
  },
  {
      "label": "MBL",
      "city": "Manistee",
      "countryCode": "US"
  },
  {
      "label": "MBM",
      "city": "Mkambati",
      "countryCode": "ZA"
  },
  {
      "label": "MBN",
      "city": "Mt Barnett",
      "countryCode": "AU"
  },
  {
      "label": "MBO",
      "city": "Mamburao",
      "countryCode": "PH"
  },
  {
      "label": "MBP",
      "city": "Moyobamba",
      "countryCode": "PE"
  },
  {
      "label": "MBQ",
      "city": "Mbarara",
      "countryCode": "UG"
  },
  {
      "label": "MBR",
      "city": "Mbout",
      "countryCode": "MR"
  },
  {
      "label": "MBS",
      "city": "Saginaw Baycity",
      "countryCode": "US"
  },
  {
      "label": "MBT",
      "city": "Masbate",
      "countryCode": "PH"
  },
  {
      "label": "MBU",
      "city": "Mbambanakira",
      "countryCode": "SB"
  },
  {
      "label": "MBV",
      "city": "Masa",
      "countryCode": "PG"
  },
  {
      "label": "MBW",
      "city": "Moorabbin",
      "countryCode": "AU"
  },
  {
      "label": "MBX",
      "city": "Maribor",
      "countryCode": "SI"
  },
  {
      "label": "MBY",
      "city": "Moberly",
      "countryCode": "US"
  },
  {
      "label": "MBZ",
      "city": "Maues",
      "countryCode": "BR"
  },
  {
      "label": "MCA",
      "city": "Macenta",
      "countryCode": "GN"
  },
  {
      "label": "MCB",
      "city": "Mccomb",
      "countryCode": "US"
  },
  {
      "label": "MCD",
      "city": "Mackinac Island",
      "countryCode": "US"
  },
  {
      "label": "MCE",
      "city": "Merced",
      "countryCode": "US"
  },
  {
      "label": "MCG",
      "city": "Mcgrath",
      "countryCode": "US"
  },
  {
      "label": "MCH",
      "city": "Machala",
      "countryCode": "EC"
  },
  {
      "label": "MCJ",
      "city": "Maicao",
      "countryCode": "CO"
  },
  {
      "label": "MCK",
      "city": "Mccook",
      "countryCode": "US"
  },
  {
      "label": "MCL",
      "city": "Mt Mckinley",
      "countryCode": "US"
  },
  {
      "label": "MCM",
      "city": "Monte Carlo",
      "countryCode": "MC"
  },
  {
      "label": "MCN",
      "city": "Macon",
      "countryCode": "US"
  },
  {
      "label": "MCP",
      "city": "Macapa",
      "countryCode": "BR"
  },
  {
      "label": "MCQ",
      "city": "Miskolc",
      "countryCode": "HU"
  },
  {
      "label": "MCR",
      "city": "Melchor De Menco",
      "countryCode": "GT"
  },
  {
      "label": "MCS",
      "city": "Monte Caseros",
      "countryCode": "AR"
  },
  {
      "label": "MCT",
      "city": "Muscat",
      "countryCode": "OM"
  },
  {
      "label": "MCU",
      "city": "Montlucon",
      "countryCode": "FR"
  },
  {
      "label": "MCV",
      "city": "Mcarthur River",
      "countryCode": "AU"
  },
  {
      "label": "MCW",
      "city": "Mason City",
      "countryCode": "US"
  },
  {
      "label": "MCX",
      "city": "Makhachkala",
      "countryCode": "RU"
  },
  {
      "label": "MCY",
      "city": "Maroochydore",
      "countryCode": "AU"
  },
  {
      "label": "MCZ",
      "city": "Maceio",
      "countryCode": "BR"
  },
  {
      "label": "MDB",
      "city": "Melinda",
      "countryCode": "BZ"
  },
  {
      "label": "MDC",
      "city": "Manado",
      "countryCode": "ID"
  },
  {
      "label": "MDE",
      "city": "Medellin",
      "countryCode": "CO"
  },
  {
      "label": "MDF",
      "city": "Medford",
      "countryCode": "US"
  },
  {
      "label": "MDG",
      "city": "Mudanjiang",
      "countryCode": "CN"
  },
  {
      "label": "MDH",
      "city": "Carbondale",
      "countryCode": "US"
  },
  {
      "label": "MDI",
      "city": "Makurdi",
      "countryCode": "NG"
  },
  {
      "label": "MDJ",
      "city": "Madras",
      "countryCode": "US"
  },
  {
      "label": "MDK",
      "city": "Mbandaka",
      "countryCode": "CD"
  },
  {
      "label": "MDL",
      "city": "Mandalay",
      "countryCode": "MM"
  },
  {
      "label": "MDM",
      "city": "Munduku",
      "countryCode": "PG"
  },
  {
      "label": "MDN",
      "city": "Madison",
      "countryCode": "US"
  },
  {
      "label": "MDO",
      "city": "Middleton Island",
      "countryCode": "US"
  },
  {
      "label": "MDP",
      "city": "Mindiptana",
      "countryCode": "ID"
  },
  {
      "label": "MDQ",
      "city": "Mar Del Plata",
      "countryCode": "AR"
  },
  {
      "label": "MDR",
      "city": "Medfra",
      "countryCode": "US"
  },
  {
      "label": "MDS",
      "city": "Middle Caicos",
      "countryCode": "TC"
  },
  {
      "label": "MDU",
      "city": "Mendi",
      "countryCode": "PG"
  },
  {
      "label": "MDV",
      "city": "Medouneu",
      "countryCode": "GA"
  },
  {
      "label": "MDX",
      "city": "Mercedes",
      "countryCode": "AR"
  },
  {
      "label": "MDY",
      "city": "Midway Island",
      "countryCode": "UM"
  },
  {
      "label": "MDZ",
      "city": "Mendoza",
      "countryCode": "AR"
  },
  {
      "label": "MEA",
      "city": "Macae",
      "countryCode": "BR"
  },
  {
      "label": "MEC",
      "city": "Manta",
      "countryCode": "EC"
  },
  {
      "label": "MED",
      "city": "Madinah",
      "countryCode": "SA"
  },
  {
      "label": "MEE",
      "city": "Mare",
      "countryCode": "NC"
  },
  {
      "label": "MEF",
      "city": "Melfi",
      "countryCode": "TD"
  },
  {
      "label": "MEG",
      "city": "Malange",
      "countryCode": "AO"
  },
  {
      "label": "MEH",
      "city": "Mehamn",
      "countryCode": "NO"
  },
  {
      "label": "MEI",
      "city": "Meridian",
      "countryCode": "US"
  },
  {
      "label": "MEJ",
      "city": "Meadville",
      "countryCode": "US"
  },
  {
      "label": "MEK",
      "city": "Meknes",
      "countryCode": "MA"
  },
  {
      "label": "MEL",
      "city": "Melbourne",
      "countryCode": "AU"
  },
  {
      "label": "MEM",
      "city": "Memphis",
      "countryCode": "US"
  },
  {
      "label": "MEN",
      "city": "Mende",
      "countryCode": "FR"
  },
  {
      "label": "MEO",
      "city": "Manteo",
      "countryCode": "US"
  },
  {
      "label": "MEP",
      "city": "Mersing",
      "countryCode": "MY"
  },
  {
      "label": "MEQ",
      "city": "Meulaboh",
      "countryCode": "ID"
  },
  {
      "label": "MES",
      "city": "Medan",
      "countryCode": "ID"
  },
  {
      "label": "MET",
      "city": "Moreton",
      "countryCode": "AU"
  },
  {
      "label": "MEU",
      "city": "Monte Dourado",
      "countryCode": "BR"
  },
  {
      "label": "MEV",
      "city": "Minden",
      "countryCode": "US"
  },
  {
      "label": "MEW",
      "city": "Mweka",
      "countryCode": "CD"
  },
  {
      "label": "MEX",
      "city": "Mexico City",
      "countryCode": "MX"
  },
  {
      "label": "MEY",
      "city": "Meghauli",
      "countryCode": "NP"
  },
  {
      "label": "MEZ",
      "city": "Messina",
      "countryCode": "ZA"
  },
  {
      "label": "MFA",
      "city": "Mafia",
      "countryCode": "TZ"
  },
  {
      "label": "MFB",
      "city": "Monfort",
      "countryCode": "CO"
  },
  {
      "label": "MFC",
      "city": "Mafeteng",
      "countryCode": "LS"
  },
  {
      "label": "MFD",
      "city": "Mansfield",
      "countryCode": "US"
  },
  {
      "label": "MFE",
      "city": "Mcallen",
      "countryCode": "US"
  },
  {
      "label": "MFF",
      "city": "Moanda",
      "countryCode": "GA"
  },
  {
      "label": "MFG",
      "city": "Muzaffarabad",
      "countryCode": "PK"
  },
  {
      "label": "MFH",
      "city": "Mesquite",
      "countryCode": "US"
  },
  {
      "label": "MFI",
      "city": "Marshfield",
      "countryCode": "US"
  },
  {
      "label": "MFJ",
      "city": "Moala",
      "countryCode": "FJ"
  },
  {
      "label": "MFK",
      "city": "Matsu",
      "countryCode": "TW"
  },
  {
      "label": "MFL",
      "city": "Mount Full Stop",
      "countryCode": "AU"
  },
  {
      "label": "MFM",
      "city": "Macau",
      "countryCode": "MO"
  },
  {
      "label": "MFN",
      "city": "Milford Sound",
      "countryCode": "NZ"
  },
  {
      "label": "MFO",
      "city": "Manguna",
      "countryCode": "PG"
  },
  {
      "label": "MFP",
      "city": "Manners Creek",
      "countryCode": "AU"
  },
  {
      "label": "MFQ",
      "city": "Maradi",
      "countryCode": "NE"
  },
  {
      "label": "MFR",
      "city": "Medford",
      "countryCode": "US"
  },
  {
      "label": "MFS",
      "city": "Miraflores",
      "countryCode": "CO"
  },
  {
      "label": "MFT",
      "city": "Machu Picchu",
      "countryCode": "PE"
  },
  {
      "label": "MFU",
      "city": "Mfuwe",
      "countryCode": "ZM"
  },
  {
      "label": "MFV",
      "city": "Melfa",
      "countryCode": "US"
  },
  {
      "label": "MFW",
      "city": "Magaruque",
      "countryCode": "MZ"
  },
  {
      "label": "MFX",
      "city": "Meribel",
      "countryCode": "FR"
  },
  {
      "label": "MFY",
      "city": "Mayfa'ah",
      "countryCode": "YE"
  },
  {
      "label": "MFZ",
      "city": "Mesalia",
      "countryCode": "PG"
  },
  {
      "label": "MGA",
      "city": "Managua",
      "countryCode": "NI"
  },
  {
      "label": "MGB",
      "city": "Mount Gambier",
      "countryCode": "AU"
  },
  {
      "label": "MGC",
      "city": "Michigan City",
      "countryCode": "US"
  },
  {
      "label": "MGD",
      "city": "Magdalena",
      "countryCode": "BO"
  },
  {
      "label": "MGF",
      "city": "Maringa",
      "countryCode": "BR"
  },
  {
      "label": "MGG",
      "city": "Margarima",
      "countryCode": "PG"
  },
  {
      "label": "MGH",
      "city": "Margate",
      "countryCode": "ZA"
  },
  {
      "label": "MGJ",
      "city": "Montgomery",
      "countryCode": "US"
  },
  {
      "label": "MGK",
      "city": "Mong Ton",
      "countryCode": "MM"
  },
  {
      "label": "MGL",
      "city": "M÷nchengladbach",
      "countryCode": "DE"
  },
  {
      "label": "MGM",
      "city": "Montgomery",
      "countryCode": "US"
  },
  {
      "label": "MGN",
      "city": "Magangue",
      "countryCode": "CO"
  },
  {
      "label": "MGO",
      "city": "Manega",
      "countryCode": "GA"
  },
  {
      "label": "MGP",
      "city": "Manga",
      "countryCode": "PG"
  },
  {
      "label": "MGQ",
      "city": "Mogadishu",
      "countryCode": "SO"
  },
  {
      "label": "MGR",
      "city": "Moultrie",
      "countryCode": "US"
  },
  {
      "label": "MGS",
      "city": "Mangaia Island",
      "countryCode": "CK"
  },
  {
      "label": "MGT",
      "city": "Millingimbi",
      "countryCode": "AU"
  },
  {
      "label": "MGU",
      "city": "Manaung",
      "countryCode": "MM"
  },
  {
      "label": "MGV",
      "city": "Margaret River Station",
      "countryCode": "AU"
  },
  {
      "label": "MGW",
      "city": "Morgantown",
      "countryCode": "US"
  },
  {
      "label": "MGX",
      "city": "Moabi",
      "countryCode": "GA"
  },
  {
      "label": "MGZ",
      "city": "Myeik",
      "countryCode": "MM"
  },
  {
      "label": "MHA",
      "city": "Mahdia",
      "countryCode": "GY"
  },
  {
      "label": "MHC",
      "city": "Macmahon Camp 4",
      "countryCode": "AU"
  },
  {
      "label": "MHD",
      "city": "Mashad",
      "countryCode": "IR"
  },
  {
      "label": "MHE",
      "city": "Mitchell",
      "countryCode": "US"
  },
  {
      "label": "MHF",
      "city": "Morichal",
      "countryCode": "CO"
  },
  {
      "label": "MHG",
      "city": "Mannheim",
      "countryCode": "DE"
  },
  {
      "label": "MHH",
      "city": "Marsh Harbour",
      "countryCode": "BS"
  },
  {
      "label": "MHI",
      "city": "Musha",
      "countryCode": "DJ"
  },
  {
      "label": "MHJ",
      "city": "Misrak Gashamo",
      "countryCode": "ET"
  },
  {
      "label": "MHK",
      "city": "Manhattan",
      "countryCode": "US"
  },
  {
      "label": "MHL",
      "city": "Marshall",
      "countryCode": "US"
  },
  {
      "label": "MHM",
      "city": "Minchumina",
      "countryCode": "US"
  },
  {
      "label": "MHN",
      "city": "Mullen",
      "countryCode": "US"
  },
  {
      "label": "MHO",
      "city": "Mount House",
      "countryCode": "AU"
  },
  {
      "label": "MHQ",
      "city": "Mariehamn",
      "countryCode": "FI"
  },
  {
      "label": "MHS",
      "city": "Mount Shasta",
      "countryCode": "US"
  },
  {
      "label": "MHT",
      "city": "Manchester",
      "countryCode": "US"
  },
  {
      "label": "MHU",
      "city": "Mount Hotham",
      "countryCode": "AU"
  },
  {
      "label": "MHV",
      "city": "Mojave",
      "countryCode": "US"
  },
  {
      "label": "MHW",
      "city": "Monteagudo",
      "countryCode": "BO"
  },
  {
      "label": "MHX",
      "city": "Manihiki Island",
      "countryCode": "CK"
  },
  {
      "label": "MHY",
      "city": "Morehead",
      "countryCode": "PG"
  },
  {
      "label": "MHZ",
      "city": "Mildenhall",
      "countryCode": "GB"
  },
  {
      "label": "MIA",
      "city": "Miami",
      "countryCode": "US"
  },
  {
      "label": "MID",
      "city": "Merida",
      "countryCode": "MX"
  },
  {
      "label": "MIE",
      "city": "Muncie",
      "countryCode": "US"
  },
  {
      "label": "MIF",
      "city": "Monahans",
      "countryCode": "US"
  },
  {
      "label": "MIG",
      "city": "Mianyang",
      "countryCode": "CN"
  },
  {
      "label": "MIH",
      "city": "Mitchell Plateau",
      "countryCode": "AU"
  },
  {
      "label": "MII",
      "city": "Marilia",
      "countryCode": "BR"
  },
  {
      "label": "MIJ",
      "city": "Mili Island",
      "countryCode": "MH"
  },
  {
      "label": "MIK",
      "city": "Mikkeli",
      "countryCode": "FI"
  },
  {
      "label": "MIL",
      "city": "Milan",
      "countryCode": "IT"
  },
  {
      "label": "MIM",
      "city": "Merimbula",
      "countryCode": "AU"
  },
  {
      "label": "MIN",
      "city": "Minnipa",
      "countryCode": "AU"
  },
  {
      "label": "MIO",
      "city": "Miami",
      "countryCode": "US"
  },
  {
      "label": "MIP",
      "city": "Mitspeh Ramon",
      "countryCode": "IL"
  },
  {
      "label": "MIR",
      "city": "Monastir",
      "countryCode": "TN"
  },
  {
      "label": "MIS",
      "city": "Misima Island",
      "countryCode": "PG"
  },
  {
      "label": "MIT",
      "city": "Shafter",
      "countryCode": "US"
  },
  {
      "label": "MIU",
      "city": "Maiduguri",
      "countryCode": "NG"
  },
  {
      "label": "MIV",
      "city": "Millville",
      "countryCode": "US"
  },
  {
      "label": "MIW",
      "city": "Marshalltown",
      "countryCode": "US"
  },
  {
      "label": "MIX",
      "city": "Miriti",
      "countryCode": "CO"
  },
  {
      "label": "MIY",
      "city": "Mittiebah",
      "countryCode": "AU"
  },
  {
      "label": "MIZ",
      "city": "Mainoru",
      "countryCode": "AU"
  },
  {
      "label": "MJA",
      "city": "Manja",
      "countryCode": "MG"
  },
  {
      "label": "MJB",
      "city": "Mejit Island",
      "countryCode": "MH"
  },
  {
      "label": "MJC",
      "city": "Man",
      "countryCode": "CI"
  },
  {
      "label": "MJD",
      "city": "Mohenjodaro",
      "countryCode": "PK"
  },
  {
      "label": "MJE",
      "city": "Majkin",
      "countryCode": "MH"
  },
  {
      "label": "MJF",
      "city": "Mosjoen",
      "countryCode": "NO"
  },
  {
      "label": "MJG",
      "city": "Mayajigua",
      "countryCode": "CU"
  },
  {
      "label": "MJH",
      "city": "Majma",
      "countryCode": "SA"
  },
  {
      "label": "MJI",
      "city": "Mitiga",
      "countryCode": "LY"
  },
  {
      "label": "MJJ",
      "city": "Moki",
      "countryCode": "PG"
  },
  {
      "label": "MJK",
      "city": "Monkey Mia",
      "countryCode": "AU"
  },
  {
      "label": "MJL",
      "city": "Mouila",
      "countryCode": "GA"
  },
  {
      "label": "MJM",
      "city": "Mbuji Mayi",
      "countryCode": "CD"
  },
  {
      "label": "MJN",
      "city": "Majunga",
      "countryCode": "MG"
  },
  {
      "label": "MJO",
      "city": "Mount Etjo",
      "countryCode": "NA"
  },
  {
      "label": "MJP",
      "city": "Manjimup",
      "countryCode": "AU"
  },
  {
      "label": "MJQ",
      "city": "Jackson",
      "countryCode": "US"
  },
  {
      "label": "MJR",
      "city": "Miramar",
      "countryCode": "AR"
  },
  {
      "label": "MJS",
      "city": "Maganja Da Costa",
      "countryCode": "MZ"
  },
  {
      "label": "MJT",
      "city": "Mytilene",
      "countryCode": "GR"
  },
  {
      "label": "MJU",
      "city": "Mamuju",
      "countryCode": "ID"
  },
  {
      "label": "MJV",
      "city": "Murcia",
      "countryCode": "ES"
  },
  {
      "label": "MJW",
      "city": "Mahenye",
      "countryCode": "ZW"
  },
  {
      "label": "MJX",
      "city": "Toms River",
      "countryCode": "US"
  },
  {
      "label": "MJY",
      "city": "Mangunjaya",
      "countryCode": "ID"
  },
  {
      "label": "MJZ",
      "city": "Mirnyj",
      "countryCode": "RU"
  },
  {
      "label": "MKA",
      "city": "Marianske Lazne",
      "countryCode": "CZ"
  },
  {
      "label": "MKB",
      "city": "Mekambo",
      "countryCode": "GA"
  },
  {
      "label": "MKC",
      "city": "Kansas City",
      "countryCode": "US"
  },
  {
      "label": "MKD",
      "city": "Chagni",
      "countryCode": "ET"
  },
  {
      "label": "MKE",
      "city": "Milwaukee",
      "countryCode": "US"
  },
  {
      "label": "MKG",
      "city": "Muskegon",
      "countryCode": "US"
  },
  {
      "label": "MKH",
      "city": "Mokhotlong",
      "countryCode": "LS"
  },
  {
      "label": "MKI",
      "city": "M'Boki",
      "countryCode": "CF"
  },
  {
      "label": "MKJ",
      "city": "Makoua",
      "countryCode": "CG"
  },
  {
      "label": "MKK",
      "city": "Hoolehua",
      "countryCode": "US"
  },
  {
      "label": "MKL",
      "city": "Jackson",
      "countryCode": "US"
  },
  {
      "label": "MKM",
      "city": "Mukah",
      "countryCode": "MY"
  },
  {
      "label": "MKN",
      "city": "Malekolon",
      "countryCode": "PG"
  },
  {
      "label": "MKO",
      "city": "Muskogee",
      "countryCode": "US"
  },
  {
      "label": "MKP",
      "city": "Makemo",
      "countryCode": "PF"
  },
  {
      "label": "MKQ",
      "city": "Merauke",
      "countryCode": "ID"
  },
  {
      "label": "MKR",
      "city": "Meekatharra",
      "countryCode": "AU"
  },
  {
      "label": "MKS",
      "city": "Mekane Selam",
      "countryCode": "ET"
  },
  {
      "label": "MKT",
      "city": "Mankato",
      "countryCode": "US"
  },
  {
      "label": "MKU",
      "city": "Makokou",
      "countryCode": "GA"
  },
  {
      "label": "MKV",
      "city": "Mt Cavenagh",
      "countryCode": "AU"
  },
  {
      "label": "MKW",
      "city": "Manokwari",
      "countryCode": "ID"
  },
  {
      "label": "MKX",
      "city": "Mukalla",
      "countryCode": "YE"
  },
  {
      "label": "MKY",
      "city": "Mackay",
      "countryCode": "AU"
  },
  {
      "label": "MKZ",
      "city": "Malacca",
      "countryCode": "MY"
  },
  {
      "label": "MLA",
      "city": "Malta",
      "countryCode": "MT"
  },
  {
      "label": "MLB",
      "city": "Melbourne",
      "countryCode": "US"
  },
  {
      "label": "MLC",
      "city": "Mc Alester",
      "countryCode": "US"
  },
  {
      "label": "MLD",
      "city": "Malad City",
      "countryCode": "US"
  },
  {
      "label": "MLE",
      "city": "Male",
      "countryCode": "MV"
  },
  {
      "label": "MLF",
      "city": "Milford",
      "countryCode": "US"
  },
  {
      "label": "MLG",
      "city": "Malang",
      "countryCode": "ID"
  },
  {
      "label": "MLH",
      "city": "Basel Mulhouse Freiburg",
      "countryCode": "FR"
  },
  {
      "label": "MLI",
      "city": "Moline",
      "countryCode": "US"
  },
  {
      "label": "MLJ",
      "city": "Milledgeville",
      "countryCode": "US"
  },
  {
      "label": "MLK",
      "city": "Malta",
      "countryCode": "US"
  },
  {
      "label": "MLL",
      "city": "Marshall Fortuna",
      "countryCode": "US"
  },
  {
      "label": "MLM",
      "city": "Morelia",
      "countryCode": "MX"
  },
  {
      "label": "MLN",
      "city": "Melilla",
      "countryCode": "ES"
  },
  {
      "label": "MLO",
      "city": "Milos",
      "countryCode": "GR"
  },
  {
      "label": "MLP",
      "city": "Malabang",
      "countryCode": "PH"
  },
  {
      "label": "MLQ",
      "city": "Malalaua",
      "countryCode": "PG"
  },
  {
      "label": "MLR",
      "city": "Millicent",
      "countryCode": "AU"
  },
  {
      "label": "MLS",
      "city": "Miles City",
      "countryCode": "US"
  },
  {
      "label": "MLT",
      "city": "Millinocket",
      "countryCode": "US"
  },
  {
      "label": "MLU",
      "city": "Monroe",
      "countryCode": "US"
  },
  {
      "label": "MLV",
      "city": "Merluna",
      "countryCode": "AU"
  },
  {
      "label": "MLW",
      "city": "Monrovia",
      "countryCode": "LR"
  },
  {
      "label": "MLX",
      "city": "Malatya",
      "countryCode": "TR"
  },
  {
      "label": "MLY",
      "city": "Manley Hot Spring",
      "countryCode": "US"
  },
  {
      "label": "MLZ",
      "city": "Melo",
      "countryCode": "UY"
  },
  {
      "label": "MMA",
      "city": "Malmo",
      "countryCode": "SE"
  },
  {
      "label": "MMB",
      "city": "Memanbetsu",
      "countryCode": "JP"
  },
  {
      "label": "MMC",
      "city": "Ciudad Mante",
      "countryCode": "MX"
  },
  {
      "label": "MMD",
      "city": "Minami Daito",
      "countryCode": "JP"
  },
  {
      "label": "MME",
      "city": "Teesside",
      "countryCode": "GB"
  },
  {
      "label": "MMF",
      "city": "Mamfe",
      "countryCode": "CM"
  },
  {
      "label": "MMG",
      "city": "Mount Magnet",
      "countryCode": "AU"
  },
  {
      "label": "MMH",
      "city": "Mammoth Lakes",
      "countryCode": "US"
  },
  {
      "label": "MMI",
      "city": "Athens",
      "countryCode": "US"
  },
  {
      "label": "MMJ",
      "city": "Matsumoto",
      "countryCode": "JP"
  },
  {
      "label": "MMK",
      "city": "Murmansk",
      "countryCode": "RU"
  },
  {
      "label": "MML",
      "city": "Marshall",
      "countryCode": "US"
  },
  {
      "label": "MMM",
      "city": "Middlemount",
      "countryCode": "AU"
  },
  {
      "label": "MMN",
      "city": "Stow",
      "countryCode": "US"
  },
  {
      "label": "MMO",
      "city": "Maio",
      "countryCode": "CV"
  },
  {
      "label": "MMP",
      "city": "Mompos",
      "countryCode": "CO"
  },
  {
      "label": "MMQ",
      "city": "Mbala",
      "countryCode": "ZM"
  },
  {
      "label": "MMS",
      "city": "Marks",
      "countryCode": "US"
  },
  {
      "label": "MMU",
      "city": "Morristown",
      "countryCode": "US"
  },
  {
      "label": "MMV",
      "city": "Mal",
      "countryCode": "PG"
  },
  {
      "label": "MMW",
      "city": "Moma",
      "countryCode": "MZ"
  },
  {
      "label": "MMY",
      "city": "Miyako Jima",
      "countryCode": "JP"
  },
  {
      "label": "MMZ",
      "city": "Maimana",
      "countryCode": "AF"
  },
  {
      "label": "MNA",
      "city": "Melangguane",
      "countryCode": "ID"
  },
  {
      "label": "MNB",
      "city": "Moanda",
      "countryCode": "CD"
  },
  {
      "label": "MNC",
      "city": "Nacala",
      "countryCode": "MZ"
  },
  {
      "label": "MND",
      "city": "Medina",
      "countryCode": "CO"
  },
  {
      "label": "MNE",
      "city": "Mungeranie",
      "countryCode": "AU"
  },
  {
      "label": "MNF",
      "city": "Mana Islands",
      "countryCode": "FJ"
  },
  {
      "label": "MNG",
      "city": "Maningrida",
      "countryCode": "AU"
  },
  {
      "label": "MNH",
      "city": "Minneriya",
      "countryCode": "LK"
  },
  {
      "label": "MNI",
      "city": "Montserrat",
      "countryCode": "MS"
  },
  {
      "label": "MNJ",
      "city": "Mananjary",
      "countryCode": "MG"
  },
  {
      "label": "MNK",
      "city": "Maiana",
      "countryCode": "KI"
  },
  {
      "label": "MNL",
      "city": "Manila",
      "countryCode": "PH"
  },
  {
      "label": "MNM",
      "city": "Marinette Menomin",
      "countryCode": "US"
  },
  {
      "label": "MNN",
      "city": "Marion",
      "countryCode": "US"
  },
  {
      "label": "MNO",
      "city": "Manono",
      "countryCode": "CD"
  },
  {
      "label": "MNP",
      "city": "Maron",
      "countryCode": "PG"
  },
  {
      "label": "MNQ",
      "city": "Monto",
      "countryCode": "AU"
  },
  {
      "label": "MNR",
      "city": "Mongu",
      "countryCode": "ZM"
  },
  {
      "label": "MNS",
      "city": "Mansa",
      "countryCode": "ZM"
  },
  {
      "label": "MNT",
      "city": "Minto",
      "countryCode": "US"
  },
  {
      "label": "MNU",
      "city": "Maulmyine",
      "countryCode": "MM"
  },
  {
      "label": "MNV",
      "city": "Mountain Valley",
      "countryCode": "AU"
  },
  {
      "label": "MNW",
      "city": "Macdonald Downs",
      "countryCode": "AU"
  },
  {
      "label": "MNX",
      "city": "Manicore",
      "countryCode": "BR"
  },
  {
      "label": "MNY",
      "city": "Mono",
      "countryCode": "SB"
  },
  {
      "label": "MNZ",
      "city": "Manassas",
      "countryCode": "US"
  },
  {
      "label": "MOA",
      "city": "Moa",
      "countryCode": "CU"
  },
  {
      "label": "MOB",
      "city": "Mobile",
      "countryCode": "US"
  },
  {
      "label": "MOC",
      "city": "Montes Claros",
      "countryCode": "BR"
  },
  {
      "label": "MOD",
      "city": "Modesto",
      "countryCode": "US"
  },
  {
      "label": "MOE",
      "city": "Momeik",
      "countryCode": "MM"
  },
  {
      "label": "MOF",
      "city": "Maumere",
      "countryCode": "ID"
  },
  {
      "label": "MOG",
      "city": "Mong Hsat",
      "countryCode": "MM"
  },
  {
      "label": "MOI",
      "city": "Mitiaro Island",
      "countryCode": "CK"
  },
  {
      "label": "MOJ",
      "city": "Moengo",
      "countryCode": "SR"
  },
  {
      "label": "MOK",
      "city": "Mankono",
      "countryCode": "CI"
  },
  {
      "label": "MOL",
      "city": "Molde",
      "countryCode": "NO"
  },
  {
      "label": "MOM",
      "city": "Moudjeria",
      "countryCode": "MR"
  },
  {
      "label": "MON",
      "city": "Mount Cook",
      "countryCode": "NZ"
  },
  {
      "label": "MOO",
      "city": "Moomba",
      "countryCode": "AU"
  },
  {
      "label": "MOP",
      "city": "Mount Pleasant",
      "countryCode": "US"
  },
  {
      "label": "MOQ",
      "city": "Morondava",
      "countryCode": "MG"
  },
  {
      "label": "MOR",
      "city": "Morristown",
      "countryCode": "US"
  },
  {
      "label": "MOS",
      "city": "Moses Point",
      "countryCode": "US"
  },
  {
      "label": "MOT",
      "city": "Minot",
      "countryCode": "US"
  },
  {
      "label": "MOU",
      "city": "Mountain Village",
      "countryCode": "US"
  },
  {
      "label": "MOV",
      "city": "Moranbah",
      "countryCode": "AU"
  },
  {
      "label": "MOW",
      "city": "Moscow",
      "countryCode": "RU"
  },
  {
      "label": "MOX",
      "city": "Morris",
      "countryCode": "US"
  },
  {
      "label": "MOY",
      "city": "Monterrey",
      "countryCode": "CO"
  },
  {
      "label": "MOZ",
      "city": "Moorea",
      "countryCode": "PF"
  },
  {
      "label": "MPA",
      "city": "Mpacha",
      "countryCode": "NA"
  },
  {
      "label": "MPC",
      "city": "Muko Muko",
      "countryCode": "ID"
  },
  {
      "label": "MPD",
      "city": "Mirpur Khas",
      "countryCode": "PK"
  },
  {
      "label": "MPE",
      "city": "Madison",
      "countryCode": "US"
  },
  {
      "label": "MPF",
      "city": "Mapoda",
      "countryCode": "PG"
  },
  {
      "label": "MPG",
      "city": "Makini",
      "countryCode": "PG"
  },
  {
      "label": "MPH",
      "city": "Caticlan",
      "countryCode": "PH"
  },
  {
      "label": "MPI",
      "city": "Mamitupo",
      "countryCode": "PA"
  },
  {
      "label": "MPK",
      "city": "Mokpo",
      "countryCode": "KR"
  },
  {
      "label": "MPL",
      "city": "Montpellier",
      "countryCode": "FR"
  },
  {
      "label": "MPM",
      "city": "Maputo",
      "countryCode": "MZ"
  },
  {
      "label": "MPN",
      "city": "Mount Pleasant",
      "countryCode": "FK"
  },
  {
      "label": "MPO",
      "city": "Mt Pocono",
      "countryCode": "US"
  },
  {
      "label": "MPP",
      "city": "Mulatupo",
      "countryCode": "PA"
  },
  {
      "label": "MPQ",
      "city": "Maan",
      "countryCode": "JO"
  },
  {
      "label": "MPR",
      "city": "Mcpherson",
      "countryCode": "US"
  },
  {
      "label": "MPS",
      "city": "Mount Pleasant",
      "countryCode": "US"
  },
  {
      "label": "MPT",
      "city": "Maliana",
      "countryCode": "ID"
  },
  {
      "label": "MPU",
      "city": "Mapua",
      "countryCode": "PG"
  },
  {
      "label": "MPV",
      "city": "Montpelier",
      "countryCode": "US"
  },
  {
      "label": "MPW",
      "city": "Mariupol",
      "countryCode": "UA"
  },
  {
      "label": "MPX",
      "city": "Miyanmin",
      "countryCode": "PG"
  },
  {
      "label": "MPY",
      "city": "Maripasoula",
      "countryCode": "GF"
  },
  {
      "label": "MPZ",
      "city": "Mt Pleasant",
      "countryCode": "US"
  },
  {
      "label": "MQA",
      "city": "Mandora",
      "countryCode": "AU"
  },
  {
      "label": "MQB",
      "city": "Macomb",
      "countryCode": "US"
  },
  {
      "label": "MQC",
      "city": "Miquelon",
      "countryCode": "PM"
  },
  {
      "label": "MQD",
      "city": "Maquinchao",
      "countryCode": "AR"
  },
  {
      "label": "MQE",
      "city": "Marqua",
      "countryCode": "AU"
  },
  {
      "label": "MQF",
      "city": "Magnitogorsk",
      "countryCode": "RU"
  },
  {
      "label": "MQG",
      "city": "Midgard",
      "countryCode": "NA"
  },
  {
      "label": "MQH",
      "city": "Minacu",
      "countryCode": "BR"
  },
  {
      "label": "MQI",
      "city": "Quincy",
      "countryCode": "US"
  },
  {
      "label": "MQJ",
      "city": "Balikesir",
      "countryCode": "TR"
  },
  {
      "label": "MQK",
      "city": "San Matias",
      "countryCode": "BO"
  },
  {
      "label": "MQL",
      "city": "Mildura",
      "countryCode": "AU"
  },
  {
      "label": "MQM",
      "city": "Mardin",
      "countryCode": "TR"
  },
  {
      "label": "MQN",
      "city": "Mo I Rana",
      "countryCode": "NO"
  },
  {
      "label": "MQQ",
      "city": "Moundou",
      "countryCode": "TD"
  },
  {
      "label": "MQR",
      "city": "Mosquera",
      "countryCode": "CO"
  },
  {
      "label": "MQS",
      "city": "Mustique Island",
      "countryCode": "VC"
  },
  {
      "label": "MQT",
      "city": "Marquette",
      "countryCode": "US"
  },
  {
      "label": "MQU",
      "city": "Mariquita",
      "countryCode": "CO"
  },
  {
      "label": "MQW",
      "city": "Mc Rae",
      "countryCode": "US"
  },
  {
      "label": "MQX",
      "city": "Makale",
      "countryCode": "ET"
  },
  {
      "label": "MQY",
      "city": "Smyrna",
      "countryCode": "US"
  },
  {
      "label": "MQZ",
      "city": "Margaret River",
      "countryCode": "AU"
  },
  {
      "label": "MRA",
      "city": "Misurata",
      "countryCode": "LY"
  },
  {
      "label": "MRB",
      "city": "Martinsburg",
      "countryCode": "US"
  },
  {
      "label": "MRC",
      "city": "Columbia",
      "countryCode": "US"
  },
  {
      "label": "MRD",
      "city": "Merida",
      "countryCode": "VE"
  },
  {
      "label": "MRE",
      "city": "Mara Lodges",
      "countryCode": "KE"
  },
  {
      "label": "MRF",
      "city": "Marfa",
      "countryCode": "US"
  },
  {
      "label": "MRG",
      "city": "Mareeba",
      "countryCode": "AU"
  },
  {
      "label": "MRH",
      "city": "May River",
      "countryCode": "PG"
  },
  {
      "label": "MRJ",
      "city": "Marcala",
      "countryCode": "HN"
  },
  {
      "label": "MRK",
      "city": "Marco Island",
      "countryCode": "US"
  },
  {
      "label": "MRL",
      "city": "Miners Lake",
      "countryCode": "AU"
  },
  {
      "label": "MRM",
      "city": "Manare",
      "countryCode": "PG"
  },
  {
      "label": "MRN",
      "city": "Morganton",
      "countryCode": "US"
  },
  {
      "label": "MRO",
      "city": "Masterton",
      "countryCode": "NZ"
  },
  {
      "label": "MRP",
      "city": "Marla",
      "countryCode": "AU"
  },
  {
      "label": "MRQ",
      "city": "Marinduque",
      "countryCode": "PH"
  },
  {
      "label": "MRR",
      "city": "Macara",
      "countryCode": "EC"
  },
  {
      "label": "MRS",
      "city": "Marseille",
      "countryCode": "FR"
  },
  {
      "label": "MRT",
      "city": "Moroak",
      "countryCode": "AU"
  },
  {
      "label": "MRU",
      "city": "Mauritius",
      "countryCode": "MU"
  },
  {
      "label": "MRV",
      "city": "Mineralnye Vody",
      "countryCode": "RU"
  },
  {
      "label": "MRW",
      "city": "Maribo",
      "countryCode": "DK"
  },
  {
      "label": "MRX",
      "city": "Bandar Mahshahr",
      "countryCode": "IR"
  },
  {
      "label": "MRY",
      "city": "Monterey",
      "countryCode": "US"
  },
  {
      "label": "MRZ",
      "city": "Moree",
      "countryCode": "AU"
  },
  {
      "label": "MSA",
      "city": "Muskrat Dam",
      "countryCode": "CA"
  },
  {
      "label": "MSC",
      "city": "Mesa",
      "countryCode": "US"
  },
  {
      "label": "MSD",
      "city": "Mt Pleasant",
      "countryCode": "US"
  },
  {
      "label": "MSE",
      "city": "Manston",
      "countryCode": "GB"
  },
  {
      "label": "MSF",
      "city": "Mount Swan",
      "countryCode": "AU"
  },
  {
      "label": "MSG",
      "city": "Matsaile",
      "countryCode": "LS"
  },
  {
      "label": "MSH",
      "city": "Masirah",
      "countryCode": "OM"
  },
  {
      "label": "MSI",
      "city": "Masalembo",
      "countryCode": "ID"
  },
  {
      "label": "MSJ",
      "city": "Misawa",
      "countryCode": "JP"
  },
  {
      "label": "MSK",
      "city": "Mastic Point",
      "countryCode": "BS"
  },
  {
      "label": "MSL",
      "city": "Muscle Shoals",
      "countryCode": "US"
  },
  {
      "label": "MSM",
      "city": "Masi Manimba",
      "countryCode": "CD"
  },
  {
      "label": "MSN",
      "city": "Madison",
      "countryCode": "US"
  },
  {
      "label": "MSO",
      "city": "Missoula",
      "countryCode": "US"
  },
  {
      "label": "MSP",
      "city": "Minneapolis",
      "countryCode": "US"
  },
  {
      "label": "MSQ",
      "city": "Minsk",
      "countryCode": "BY"
  },
  {
      "label": "MSR",
      "city": "Mus",
      "countryCode": "TR"
  },
  {
      "label": "MSS",
      "city": "Massena",
      "countryCode": "US"
  },
  {
      "label": "MST",
      "city": "Maastricht",
      "countryCode": "NL"
  },
  {
      "label": "MSU",
      "city": "Maseru",
      "countryCode": "LS"
  },
  {
      "label": "MSV",
      "city": "Monticello",
      "countryCode": "US"
  },
  {
      "label": "MSW",
      "city": "Massawa",
      "countryCode": "ER"
  },
  {
      "label": "MSX",
      "city": "Mossendjo",
      "countryCode": "CG"
  },
  {
      "label": "MSY",
      "city": "New Orleans",
      "countryCode": "US"
  },
  {
      "label": "MSZ",
      "city": "Namibe",
      "countryCode": "AO"
  },
  {
      "label": "MTA",
      "city": "Matamata",
      "countryCode": "NZ"
  },
  {
      "label": "MTB",
      "city": "Monte Libano",
      "countryCode": "CO"
  },
  {
      "label": "MTC",
      "city": "Mt Clemens",
      "countryCode": "US"
  },
  {
      "label": "MTD",
      "city": "Mt Sandford",
      "countryCode": "AU"
  },
  {
      "label": "MTE",
      "city": "Monte Alegre",
      "countryCode": "BR"
  },
  {
      "label": "MTF",
      "city": "Mizan Teferi",
      "countryCode": "ET"
  },
  {
      "label": "MTG",
      "city": "Mato Grosso",
      "countryCode": "BR"
  },
  {
      "label": "MTH",
      "city": "Marathon",
      "countryCode": "US"
  },
  {
      "label": "MTI",
      "city": "Mosteiros",
      "countryCode": "CV"
  },
  {
      "label": "MTJ",
      "city": "Montrose",
      "countryCode": "US"
  },
  {
      "label": "MTK",
      "city": "Makin Island",
      "countryCode": "KI"
  },
  {
      "label": "MTL",
      "city": "Maitland",
      "countryCode": "AU"
  },
  {
      "label": "MTO",
      "city": "Mattoon",
      "countryCode": "US"
  },
  {
      "label": "MTP",
      "city": "Montauk",
      "countryCode": "US"
  },
  {
      "label": "MTQ",
      "city": "Mitchell",
      "countryCode": "AU"
  },
  {
      "label": "MTR",
      "city": "Monteria",
      "countryCode": "CO"
  },
  {
      "label": "MTS",
      "city": "Manzini",
      "countryCode": "SZ"
  },
  {
      "label": "MTT",
      "city": "Minatitlan",
      "countryCode": "MX"
  },
  {
      "label": "MTU",
      "city": "Montepuez",
      "countryCode": "MZ"
  },
  {
      "label": "MTV",
      "city": "Mota Lava",
      "countryCode": "VU"
  },
  {
      "label": "MTW",
      "city": "Manitowoc",
      "countryCode": "US"
  },
  {
      "label": "MTY",
      "city": "Monterrey",
      "countryCode": "MX"
  },
  {
      "label": "MTZ",
      "city": "Masada",
      "countryCode": "IL"
  },
  {
      "label": "MUA",
      "city": "Munda",
      "countryCode": "SB"
  },
  {
      "label": "MUB",
      "city": "Maun",
      "countryCode": "BW"
  },
  {
      "label": "MUC",
      "city": "Munich",
      "countryCode": "DE"
  },
  {
      "label": "MUD",
      "city": "Mueda",
      "countryCode": "MZ"
  },
  {
      "label": "MUE",
      "city": "Kamuela",
      "countryCode": "US"
  },
  {
      "label": "MUF",
      "city": "Muting",
      "countryCode": "ID"
  },
  {
      "label": "MUG",
      "city": "Mulege",
      "countryCode": "MX"
  },
  {
      "label": "MUH",
      "city": "Mersa Matruh",
      "countryCode": "EG"
  },
  {
      "label": "MUI",
      "city": "Fort Indiantown",
      "countryCode": "US"
  },
  {
      "label": "MUJ",
      "city": "Mui",
      "countryCode": "ET"
  },
  {
      "label": "MUK",
      "city": "Mauke Island",
      "countryCode": "CK"
  },
  {
      "label": "MUM",
      "city": "Mumias",
      "countryCode": "KE"
  },
  {
      "label": "MUN",
      "city": "Maturin",
      "countryCode": "VE"
  },
  {
      "label": "MUP",
      "city": "Mulga Park",
      "countryCode": "AU"
  },
  {
      "label": "MUQ",
      "city": "Muccan",
      "countryCode": "AU"
  },
  {
      "label": "MUR",
      "city": "Marudi",
      "countryCode": "MY"
  },
  {
      "label": "MUS",
      "city": "Marcus Island",
      "countryCode": "JP"
  },
  {
      "label": "MUT",
      "city": "Muscatine",
      "countryCode": "US"
  },
  {
      "label": "MUU",
      "city": "Mount Union",
      "countryCode": "US"
  },
  {
      "label": "MUW",
      "city": "Mascara",
      "countryCode": "DZ"
  },
  {
      "label": "MUX",
      "city": "Multan",
      "countryCode": "PK"
  },
  {
      "label": "MUY",
      "city": "Mouyondzi",
      "countryCode": "CG"
  },
  {
      "label": "MUZ",
      "city": "Musoma",
      "countryCode": "TZ"
  },
  {
      "label": "MVA",
      "city": "Myvatn",
      "countryCode": "IS"
  },
  {
      "label": "MVB",
      "city": "Franceville",
      "countryCode": "GA"
  },
  {
      "label": "MVC",
      "city": "Monroeville",
      "countryCode": "US"
  },
  {
      "label": "MVD",
      "city": "Montevideo",
      "countryCode": "UY"
  },
  {
      "label": "MVE",
      "city": "Montevideo",
      "countryCode": "US"
  },
  {
      "label": "MVF",
      "city": "Mossoro",
      "countryCode": "BR"
  },
  {
      "label": "MVG",
      "city": "Mevang",
      "countryCode": "GA"
  },
  {
      "label": "MVH",
      "city": "Macksville",
      "countryCode": "AU"
  },
  {
      "label": "MVI",
      "city": "Manetai",
      "countryCode": "PG"
  },
  {
      "label": "MVJ",
      "city": "Mandeville",
      "countryCode": "JM"
  },
  {
      "label": "MVK",
      "city": "Mulka",
      "countryCode": "AU"
  },
  {
      "label": "MVL",
      "city": "Stowe",
      "countryCode": "US"
  },
  {
      "label": "MVM",
      "city": "Kayenta",
      "countryCode": "US"
  },
  {
      "label": "MVN",
      "city": "Mt Vernon",
      "countryCode": "US"
  },
  {
      "label": "MVO",
      "city": "Mongo",
      "countryCode": "TD"
  },
  {
      "label": "MVP",
      "city": "Mitu",
      "countryCode": "CO"
  },
  {
      "label": "MVQ",
      "city": "Mogilev",
      "countryCode": "BY"
  },
  {
      "label": "MVR",
      "city": "Maroua",
      "countryCode": "CM"
  },
  {
      "label": "MVS",
      "city": "Mucuri",
      "countryCode": "BR"
  },
  {
      "label": "MVT",
      "city": "Mataiva",
      "countryCode": "PF"
  },
  {
      "label": "MVU",
      "city": "Musgrave",
      "countryCode": "AU"
  },
  {
      "label": "MVV",
      "city": "Megeve",
      "countryCode": "FR"
  },
  {
      "label": "MVW",
      "city": "Mount Vernon",
      "countryCode": "US"
  },
  {
      "label": "MVX",
      "city": "Minvoul",
      "countryCode": "GA"
  },
  {
      "label": "MVY",
      "city": "Marthas Vineyard",
      "countryCode": "US"
  },
  {
      "label": "MVZ",
      "city": "Masvingo",
      "countryCode": "ZW"
  },
  {
      "label": "MWA",
      "city": "Marion",
      "countryCode": "US"
  },
  {
      "label": "MWB",
      "city": "Morawa",
      "countryCode": "AU"
  },
  {
      "label": "MWD",
      "city": "Mianwali",
      "countryCode": "PK"
  },
  {
      "label": "MWE",
      "city": "Merowe",
      "countryCode": "SD"
  },
  {
      "label": "MWF",
      "city": "Maewo",
      "countryCode": "VU"
  },
  {
      "label": "MWG",
      "city": "Marawaka",
      "countryCode": "PG"
  },
  {
      "label": "MWH",
      "city": "Moses Lake",
      "countryCode": "US"
  },
  {
      "label": "MWI",
      "city": "Maramuni",
      "countryCode": "PG"
  },
  {
      "label": "MWJ",
      "city": "Matthews Ridge",
      "countryCode": "GY"
  },
  {
      "label": "MWK",
      "city": "Matak",
      "countryCode": "ID"
  },
  {
      "label": "MWL",
      "city": "Mineral Wells",
      "countryCode": "US"
  },
  {
      "label": "MWM",
      "city": "Windom",
      "countryCode": "US"
  },
  {
      "label": "MWN",
      "city": "Mwadui",
      "countryCode": "TZ"
  },
  {
      "label": "MWO",
      "city": "Middletown",
      "countryCode": "US"
  },
  {
      "label": "MWP",
      "city": "Mountain",
      "countryCode": "NP"
  },
  {
      "label": "MWQ",
      "city": "Magwe",
      "countryCode": "MM"
  },
  {
      "label": "MWR",
      "city": "Motswari",
      "countryCode": "ZA"
  },
  {
      "label": "MWS",
      "city": "Mount Wilson",
      "countryCode": "US"
  },
  {
      "label": "MWT",
      "city": "Moolawatana",
      "countryCode": "AU"
  },
  {
      "label": "MWU",
      "city": "Mussau",
      "countryCode": "PG"
  },
  {
      "label": "MWV",
      "city": "Mundulkiri",
      "countryCode": "KH"
  },
  {
      "label": "MWX",
      "city": "Muan",
      "countryCode": "KR"
  },
  {
      "label": "MWY",
      "city": "Miranda Downs",
      "countryCode": "AU"
  },
  {
      "label": "MWZ",
      "city": "Mwanza",
      "countryCode": "TZ"
  },
  {
      "label": "MXA",
      "city": "Manila",
      "countryCode": "US"
  },
  {
      "label": "MXB",
      "city": "Masamba",
      "countryCode": "ID"
  },
  {
      "label": "MXC",
      "city": "Monticello",
      "countryCode": "US"
  },
  {
      "label": "MXD",
      "city": "Marion Downs",
      "countryCode": "AU"
  },
  {
      "label": "MXE",
      "city": "Maxton",
      "countryCode": "US"
  },
  {
      "label": "MXG",
      "city": "Marlborough",
      "countryCode": "US"
  },
  {
      "label": "MXI",
      "city": "Mati",
      "countryCode": "PH"
  },
  {
      "label": "MXJ",
      "city": "Minna",
      "countryCode": "NG"
  },
  {
      "label": "MXK",
      "city": "Mindik",
      "countryCode": "PG"
  },
  {
      "label": "MXL",
      "city": "Mexicali",
      "countryCode": "MX"
  },
  {
      "label": "MXM",
      "city": "Morombe",
      "countryCode": "MG"
  },
  {
      "label": "MXN",
      "city": "Morlaix",
      "countryCode": "FR"
  },
  {
      "label": "MXO",
      "city": "Monticello",
      "countryCode": "US"
  },
  {
      "label": "MXQ",
      "city": "Mitchell River",
      "countryCode": "AU"
  },
  {
      "label": "MXR",
      "city": "Mirgorod",
      "countryCode": "UA"
  },
  {
      "label": "MXS",
      "city": "Maota Savaii Island",
      "countryCode": "WS"
  },
  {
      "label": "MXT",
      "city": "Maintirano",
      "countryCode": "MG"
  },
  {
      "label": "MXU",
      "city": "Mullewa",
      "countryCode": "AU"
  },
  {
      "label": "MXV",
      "city": "Moron",
      "countryCode": "MN"
  },
  {
      "label": "MXW",
      "city": "Mandalgobi",
      "countryCode": "MN"
  },
  {
      "label": "MXX",
      "city": "Mora",
      "countryCode": "SE"
  },
  {
      "label": "MXY",
      "city": "Mccarthy",
      "countryCode": "US"
  },
  {
      "label": "MXZ",
      "city": "Meixian",
      "countryCode": "CN"
  },
  {
      "label": "MYA",
      "city": "Moruya",
      "countryCode": "AU"
  },
  {
      "label": "MYB",
      "city": "Mayoumba",
      "countryCode": "GA"
  },
  {
      "label": "MYC",
      "city": "Maracay",
      "countryCode": "VE"
  },
  {
      "label": "MYD",
      "city": "Malindi",
      "countryCode": "KE"
  },
  {
      "label": "MYE",
      "city": "Miyake Jima",
      "countryCode": "JP"
  },
  {
      "label": "MYG",
      "city": "Mayaguana",
      "countryCode": "BS"
  },
  {
      "label": "MYH",
      "city": "Marble Canyon",
      "countryCode": "US"
  },
  {
      "label": "MYI",
      "city": "Murray Island",
      "countryCode": "AU"
  },
  {
      "label": "MYJ",
      "city": "Matsuyama",
      "countryCode": "JP"
  },
  {
      "label": "MYK",
      "city": "May Creek",
      "countryCode": "US"
  },
  {
      "label": "MYL",
      "city": "Mccall",
      "countryCode": "US"
  },
  {
      "label": "MYM",
      "city": "Monkey Mountain",
      "countryCode": "GY"
  },
  {
      "label": "MYN",
      "city": "Mareb",
      "countryCode": "YE"
  },
  {
      "label": "MYO",
      "city": "Myroodah",
      "countryCode": "AU"
  },
  {
      "label": "MYP",
      "city": "Mary",
      "countryCode": "TM"
  },
  {
      "label": "MYR",
      "city": "Myrtle Beach",
      "countryCode": "US"
  },
  {
      "label": "MYS",
      "city": "Moyale",
      "countryCode": "ET"
  },
  {
      "label": "MYT",
      "city": "Myitkyina",
      "countryCode": "MM"
  },
  {
      "label": "MYU",
      "city": "Mekoryuk",
      "countryCode": "US"
  },
  {
      "label": "MYV",
      "city": "Marysville",
      "countryCode": "US"
  },
  {
      "label": "MYW",
      "city": "Mtwara",
      "countryCode": "TZ"
  },
  {
      "label": "MYX",
      "city": "Menyamya",
      "countryCode": "PG"
  },
  {
      "label": "MYY",
      "city": "Miri",
      "countryCode": "MY"
  },
  {
      "label": "MYZ",
      "city": "Monkey Bay",
      "countryCode": "MW"
  },
  {
      "label": "MZB",
      "city": "Mocimboa Praia",
      "countryCode": "MZ"
  },
  {
      "label": "MZC",
      "city": "Mitzic",
      "countryCode": "GA"
  },
  {
      "label": "MZD",
      "city": "Mendez",
      "countryCode": "EC"
  },
  {
      "label": "MZE",
      "city": "Manatee",
      "countryCode": "BZ"
  },
  {
      "label": "MZF",
      "city": "Mzamba (Wild Coast)",
      "countryCode": "ZA"
  },
  {
      "label": "MZG",
      "city": "Makung",
      "countryCode": "TW"
  },
  {
      "label": "MZH",
      "city": "Merzifon",
      "countryCode": "TR"
  },
  {
      "label": "MZI",
      "city": "Mopti",
      "countryCode": "ML"
  },
  {
      "label": "MZJ",
      "city": "Marana",
      "countryCode": "US"
  },
  {
      "label": "MZK",
      "city": "Marakei",
      "countryCode": "KI"
  },
  {
      "label": "MZL",
      "city": "Manizales",
      "countryCode": "CO"
  },
  {
      "label": "MZM",
      "city": "Metz",
      "countryCode": "FR"
  },
  {
      "label": "MZN",
      "city": "Minj",
      "countryCode": "PG"
  },
  {
      "label": "MZO",
      "city": "Manzanillo",
      "countryCode": "CU"
  },
  {
      "label": "MZP",
      "city": "Motueka",
      "countryCode": "NZ"
  },
  {
      "label": "MZQ",
      "city": "Mkuze",
      "countryCode": "ZA"
  },
  {
      "label": "MZR",
      "city": "Mazar I Sharif",
      "countryCode": "AF"
  },
  {
      "label": "MZS",
      "city": "Mostyn",
      "countryCode": "MY"
  },
  {
      "label": "MZT",
      "city": "Mazatlan",
      "countryCode": "MX"
  },
  {
      "label": "MZV",
      "city": "Mulu",
      "countryCode": "MY"
  },
  {
      "label": "MZX",
      "city": "Mena",
      "countryCode": "ET"
  },
  {
      "label": "MZY",
      "city": "Mossel Bay",
      "countryCode": "ZA"
  },
  {
      "label": "MZZ",
      "city": "Marion",
      "countryCode": "US"
  },
  {
      "label": "NAA",
      "city": "Narrabri",
      "countryCode": "AU"
  },
  {
      "label": "NAC",
      "city": "Naracoorte",
      "countryCode": "AU"
  },
  {
      "label": "NAD",
      "city": "Macanal",
      "countryCode": "CO"
  },
  {
      "label": "NAE",
      "city": "Natitingou",
      "countryCode": "BJ"
  },
  {
      "label": "NAF",
      "city": "Banaina",
      "countryCode": "ID"
  },
  {
      "label": "NAH",
      "city": "Naha",
      "countryCode": "ID"
  },
  {
      "label": "NAI",
      "city": "Annai",
      "countryCode": "GY"
  },
  {
      "label": "NAJ",
      "city": "Nakhichevan",
      "countryCode": "AZ"
  },
  {
      "label": "NAK",
      "city": "Nakhon Ratchasima",
      "countryCode": "TH"
  },
  {
      "label": "NAL",
      "city": "Nalchik",
      "countryCode": "RU"
  },
  {
      "label": "NAM",
      "city": "Namlea",
      "countryCode": "ID"
  },
  {
      "label": "NAN",
      "city": "Nadi",
      "countryCode": "FJ"
  },
  {
      "label": "NAO",
      "city": "Nanchong",
      "countryCode": "CN"
  },
  {
      "label": "NAP",
      "city": "Naples",
      "countryCode": "IT"
  },
  {
      "label": "NAQ",
      "city": "Qanaq",
      "countryCode": "GL"
  },
  {
      "label": "NAR",
      "city": "Nare",
      "countryCode": "CO"
  },
  {
      "label": "NAS",
      "city": "Nassau",
      "countryCode": "BS"
  },
  {
      "label": "NAT",
      "city": "Natal",
      "countryCode": "BR"
  },
  {
      "label": "NAU",
      "city": "Napuka Island",
      "countryCode": "PF"
  },
  {
      "label": "NAV",
      "city": "Nevsehir",
      "countryCode": "TR"
  },
  {
      "label": "NAW",
      "city": "Narathiwat",
      "countryCode": "TH"
  },
  {
      "label": "NAX",
      "city": "Barbers Point",
      "countryCode": "US"
  },
  {
      "label": "NBA",
      "city": "Nambaiyufa",
      "countryCode": "PG"
  },
  {
      "label": "NBB",
      "city": "Barrancominas",
      "countryCode": "CO"
  },
  {
      "label": "NBC",
      "city": "Naberevnye Chelny",
      "countryCode": "RU"
  },
  {
      "label": "NBE",
      "city": "Enfidha",
      "countryCode": "TN"
  },
  {
      "label": "NBH",
      "city": "Nambucca Heads",
      "countryCode": "AU"
  },
  {
      "label": "NBL",
      "city": "San Blas",
      "countryCode": "PA"
  },
  {
      "label": "NBO",
      "city": "Nairobi",
      "countryCode": "KE"
  },
  {
      "label": "NBR",
      "city": "Nambour",
      "countryCode": "AU"
  },
  {
      "label": "NBU",
      "city": "Glenview",
      "countryCode": "US"
  },
  {
      "label": "NBV",
      "city": "Cana Brava",
      "countryCode": "BR"
  },
  {
      "label": "NBX",
      "city": "Nabire",
      "countryCode": "ID"
  },
  {
      "label": "NCA",
      "city": "North Caicos",
      "countryCode": "TC"
  },
  {
      "label": "NCE",
      "city": "Nice",
      "countryCode": "FR"
  },
  {
      "label": "NCG",
      "city": "Nueva Casas Grand",
      "countryCode": "MX"
  },
  {
      "label": "NCH",
      "city": "Nachingwea",
      "countryCode": "TZ"
  },
  {
      "label": "NCI",
      "city": "Necocli",
      "countryCode": "CO"
  },
  {
      "label": "NCL",
      "city": "Newcastle",
      "countryCode": "GB"
  },
  {
      "label": "NCN",
      "city": "New Chenega",
      "countryCode": "US"
  },
  {
      "label": "NCO",
      "city": "Quonset Point",
      "countryCode": "US"
  },
  {
      "label": "NCP",
      "city": "Luzon",
      "countryCode": "PH"
  },
  {
      "label": "NCR",
      "city": "San Carlos",
      "countryCode": "NI"
  },
  {
      "label": "NCS",
      "city": "Newcastle",
      "countryCode": "ZA"
  },
  {
      "label": "NCT",
      "city": "Nicoya",
      "countryCode": "CR"
  },
  {
      "label": "NCU",
      "city": "Nukus",
      "countryCode": "UZ"
  },
  {
      "label": "NCY",
      "city": "Annecy",
      "countryCode": "FR"
  },
  {
      "label": "NDA",
      "city": "Bandanaira",
      "countryCode": "ID"
  },
  {
      "label": "NDB",
      "city": "Nouadhibou",
      "countryCode": "MR"
  },
  {
      "label": "NDD",
      "city": "Sumbe",
      "countryCode": "AO"
  },
  {
      "label": "NDE",
      "city": "Mandera",
      "countryCode": "KE"
  },
  {
      "label": "NDF",
      "city": "Ndalatandos",
      "countryCode": "AO"
  },
  {
      "label": "NDG",
      "city": "Qiqihar",
      "countryCode": "CN"
  },
  {
      "label": "NDI",
      "city": "Namudi",
      "countryCode": "PG"
  },
  {
      "label": "NDJ",
      "city": "Ndjamena",
      "countryCode": "TD"
  },
  {
      "label": "NDK",
      "city": "Namdrik Island",
      "countryCode": "MH"
  },
  {
      "label": "NDL",
      "city": "Ndele",
      "countryCode": "CF"
  },
  {
      "label": "NDM",
      "city": "Mendi",
      "countryCode": "ET"
  },
  {
      "label": "NDN",
      "city": "Nadunumu",
      "countryCode": "PG"
  },
  {
      "label": "NDR",
      "city": "Nador",
      "countryCode": "MA"
  },
  {
      "label": "NDS",
      "city": "Sandstone",
      "countryCode": "AU"
  },
  {
      "label": "NDU",
      "city": "Rundu",
      "countryCode": "NA"
  },
  {
      "label": "NDY",
      "city": "Sanday",
      "countryCode": "GB"
  },
  {
      "label": "NDZ",
      "city": "Nordholz Spieka",
      "countryCode": "DE"
  },
  {
      "label": "NEC",
      "city": "Necochea",
      "countryCode": "AR"
  },
  {
      "label": "NEF",
      "city": "Neftekamsk",
      "countryCode": "RU"
  },
  {
      "label": "NEG",
      "city": "Negril",
      "countryCode": "JM"
  },
  {
      "label": "NEJ",
      "city": "Nejjo",
      "countryCode": "ET"
  },
  {
      "label": "NEK",
      "city": "Nekemt",
      "countryCode": "ET"
  },
  {
      "label": "NEL",
      "city": "Lakehurst",
      "countryCode": "US"
  },
  {
      "label": "NEN",
      "city": "Whitehouse",
      "countryCode": "US"
  },
  {
      "label": "NER",
      "city": "Neryungri",
      "countryCode": "RU"
  },
  {
      "label": "NET",
      "city": "New Bight",
      "countryCode": "BS"
  },
  {
      "label": "NEU",
      "city": "Sam Neua",
      "countryCode": "LA"
  },
  {
      "label": "NEV",
      "city": "Nevis",
      "countryCode": "KN"
  },
  {
      "label": "NFG",
      "city": "Nefteyugansk",
      "countryCode": "RU"
  },
  {
      "label": "NFL",
      "city": "Fallon",
      "countryCode": "US"
  },
  {
      "label": "NFO",
      "city": "Niuafo'ou",
      "countryCode": "TO"
  },
  {
      "label": "NFR",
      "city": "Nafoora",
      "countryCode": "LY"
  },
  {
      "label": "NGA",
      "city": "Young",
      "countryCode": "AU"
  },
  {
      "label": "NGB",
      "city": "Ningbo",
      "countryCode": "CN"
  },
  {
      "label": "NGD",
      "city": "Anegada",
      "countryCode": "VG"
  },
  {
      "label": "NGE",
      "city": "Ngaoundere",
      "countryCode": "CM"
  },
  {
      "label": "NGI",
      "city": "Ngau Island",
      "countryCode": "FJ"
  },
  {
      "label": "NGL",
      "city": "Ngala",
      "countryCode": "ZA"
  },
  {
      "label": "NGN",
      "city": "Nargana",
      "countryCode": "PA"
  },
  {
      "label": "NGO",
      "city": "Nagoya",
      "countryCode": "JP"
  },
  {
      "label": "NGR",
      "city": "Ningerum",
      "countryCode": "PG"
  },
  {
      "label": "NGS",
      "city": "Nagasaki",
      "countryCode": "JP"
  },
  {
      "label": "NGV",
      "city": "Ngiva",
      "countryCode": "AO"
  },
  {
      "label": "NGX",
      "city": "Manang",
      "countryCode": "NP"
  },
  {
      "label": "NHD",
      "city": "Minhad Ab",
      "countryCode": "AE"
  },
  {
      "label": "NHF",
      "city": "New Halfa",
      "countryCode": "SD"
  },
  {
      "label": "NHS",
      "city": "Nushki",
      "countryCode": "PK"
  },
  {
      "label": "NHT",
      "city": "Northolt",
      "countryCode": "GB"
  },
  {
      "label": "NHV",
      "city": "Nuku Hiva",
      "countryCode": "PF"
  },
  {
      "label": "NHX",
      "city": "Foley",
      "countryCode": "US"
  },
  {
      "label": "NIA",
      "city": "Nimba",
      "countryCode": "LR"
  },
  {
      "label": "NIB",
      "city": "Nikolai",
      "countryCode": "US"
  },
  {
      "label": "NIC",
      "city": "Nicosia",
      "countryCode": "CY"
  },
  {
      "label": "NIE",
      "city": "Niblack",
      "countryCode": "US"
  },
  {
      "label": "NIF",
      "city": "Nifty",
      "countryCode": "AU"
  },
  {
      "label": "NIG",
      "city": "Nikunau",
      "countryCode": "KI"
  },
  {
      "label": "NIK",
      "city": "Niokolo Koba",
      "countryCode": "SN"
  },
  {
      "label": "NIM",
      "city": "Niamey",
      "countryCode": "NE"
  },
  {
      "label": "NIN",
      "city": "Ninilchik",
      "countryCode": "US"
  },
  {
      "label": "NIO",
      "city": "Nioki",
      "countryCode": "CD"
  },
  {
      "label": "NIS",
      "city": "Simberi Island",
      "countryCode": "PG"
  },
  {
      "label": "NIT",
      "city": "Niort",
      "countryCode": "FR"
  },
  {
      "label": "NIX",
      "city": "Nioro",
      "countryCode": "ML"
  },
  {
      "label": "NJA",
      "city": "Atsugi",
      "countryCode": "JP"
  },
  {
      "label": "NJC",
      "city": "Nizhnevartovsk",
      "countryCode": "RU"
  },
  {
      "label": "NJF",
      "city": "Najaf",
      "countryCode": "IQ"
  },
  {
      "label": "NKA",
      "city": "Nkan",
      "countryCode": "GA"
  },
  {
      "label": "NKB",
      "city": "Noonkanbah",
      "countryCode": "AU"
  },
  {
      "label": "NKC",
      "city": "Nouakchott",
      "countryCode": "MR"
  },
  {
      "label": "NKD",
      "city": "Sinak",
      "countryCode": "ID"
  },
  {
      "label": "NKG",
      "city": "Nanjing",
      "countryCode": "CN"
  },
  {
      "label": "NKI",
      "city": "Naukiti",
      "countryCode": "US"
  },
  {
      "label": "NKL",
      "city": "Nkolo",
      "countryCode": "CD"
  },
  {
      "label": "NKN",
      "city": "Nankina",
      "countryCode": "PG"
  },
  {
      "label": "NKS",
      "city": "Nkongsamba",
      "countryCode": "CM"
  },
  {
      "label": "NKT",
      "city": "Sirnak",
      "countryCode": "TR"
  },
  {
      "label": "NKU",
      "city": "Nkaus",
      "countryCode": "LS"
  },
  {
      "label": "NKV",
      "city": "Nichen Cove",
      "countryCode": "US"
  },
  {
      "label": "NKY",
      "city": "Nkayi",
      "countryCode": "CG"
  },
  {
      "label": "NLA",
      "city": "Ndola",
      "countryCode": "ZM"
  },
  {
      "label": "NLC",
      "city": "Lemoore",
      "countryCode": "US"
  },
  {
      "label": "NLD",
      "city": "Nuevo Laredo",
      "countryCode": "MX"
  },
  {
      "label": "NLE",
      "city": "Niles",
      "countryCode": "US"
  },
  {
      "label": "NLF",
      "city": "Darnley Island",
      "countryCode": "AU"
  },
  {
      "label": "NLG",
      "city": "Nelson Lagoon",
      "countryCode": "US"
  },
  {
      "label": "NLK",
      "city": "Norfolk Island",
      "countryCode": "NF"
  },
  {
      "label": "NLL",
      "city": "Nullagine",
      "countryCode": "AU"
  },
  {
      "label": "NLP",
      "city": "Nelspruit",
      "countryCode": "ZA"
  },
  {
      "label": "NLS",
      "city": "Nicholson",
      "countryCode": "AU"
  },
  {
      "label": "NLV",
      "city": "Nikolaev",
      "countryCode": "UA"
  },
  {
      "label": "NMA",
      "city": "Namangan",
      "countryCode": "UZ"
  },
  {
      "label": "NMC",
      "city": "Norman's Cay",
      "countryCode": "BS"
  },
  {
      "label": "NME",
      "city": "Nightmute",
      "countryCode": "US"
  },
  {
      "label": "NMG",
      "city": "San Miguel",
      "countryCode": "PA"
  },
  {
      "label": "NMN",
      "city": "Nomane",
      "countryCode": "PG"
  },
  {
      "label": "NMP",
      "city": "New Moon",
      "countryCode": "AU"
  },
  {
      "label": "NMR",
      "city": "Nappa Merry",
      "countryCode": "AU"
  },
  {
      "label": "NMS",
      "city": "Namsang",
      "countryCode": "MM"
  },
  {
      "label": "NMT",
      "city": "Namtu",
      "countryCode": "MM"
  },
  {
      "label": "NMU",
      "city": "Namu",
      "countryCode": "MH"
  },
  {
      "label": "NNA",
      "city": "Kenitra",
      "countryCode": "MA"
  },
  {
      "label": "NNB",
      "city": "Santa Ana",
      "countryCode": "SB"
  },
  {
      "label": "NND",
      "city": "Nangade",
      "countryCode": "MZ"
  },
  {
      "label": "NNG",
      "city": "Nanning",
      "countryCode": "CN"
  },
  {
      "label": "NNI",
      "city": "Namutoni",
      "countryCode": "NA"
  },
  {
      "label": "NNK",
      "city": "Naknek",
      "countryCode": "US"
  },
  {
      "label": "NNL",
      "city": "Nondalton",
      "countryCode": "US"
  },
  {
      "label": "NNM",
      "city": "Naryan Mar",
      "countryCode": "RU"
  },
  {
      "label": "NNR",
      "city": "Spiddal",
      "countryCode": "IE"
  },
  {
      "label": "NNT",
      "city": "Nan",
      "countryCode": "TH"
  },
  {
      "label": "NNU",
      "city": "Nanuque",
      "countryCode": "BR"
  },
  {
      "label": "NNX",
      "city": "Nunukan",
      "countryCode": "ID"
  },
  {
      "label": "NNY",
      "city": "Nanyang",
      "countryCode": "CN"
  },
  {
      "label": "NOA",
      "city": "Nowra",
      "countryCode": "AU"
  },
  {
      "label": "NOB",
      "city": "Nosara Beach",
      "countryCode": "CR"
  },
  {
      "label": "NOC",
      "city": "Knock",
      "countryCode": "IE"
  },
  {
      "label": "NOD",
      "city": "Norden",
      "countryCode": "DE"
  },
  {
      "label": "NOE",
      "city": "Norddeich",
      "countryCode": "DE"
  },
  {
      "label": "NOG",
      "city": "Nogales",
      "countryCode": "MX"
  },
  {
      "label": "NOI",
      "city": "Novorossijsk",
      "countryCode": "RU"
  },
  {
      "label": "NOJ",
      "city": "Nojabrxsk",
      "countryCode": "RU"
  },
  {
      "label": "NOK",
      "city": "Nova Xavantina",
      "countryCode": "BR"
  },
  {
      "label": "NOL",
      "city": "Nakolik River",
      "countryCode": "US"
  },
  {
      "label": "NOM",
      "city": "Nomad River",
      "countryCode": "PG"
  },
  {
      "label": "NON",
      "city": "Nonouti",
      "countryCode": "KI"
  },
  {
      "label": "NOO",
      "city": "Naoro",
      "countryCode": "PG"
  },
  {
      "label": "NOP",
      "city": "Mactan Island",
      "countryCode": "PH"
  },
  {
      "label": "NOR",
      "city": "Nordfjordur",
      "countryCode": "IS"
  },
  {
      "label": "NOS",
      "city": "Nossi Be",
      "countryCode": "MG"
  },
  {
      "label": "NOT",
      "city": "Novato",
      "countryCode": "US"
  },
  {
      "label": "NOU",
      "city": "Noumea",
      "countryCode": "NC"
  },
  {
      "label": "NOV",
      "city": "Huambo",
      "countryCode": "AO"
  },
  {
      "label": "NOZ",
      "city": "Novokuznetsk",
      "countryCode": "RU"
  },
  {
      "label": "NPE",
      "city": "Napier",
      "countryCode": "NZ"
  },
  {
      "label": "NPG",
      "city": "Nipa",
      "countryCode": "PG"
  },
  {
      "label": "NPH",
      "city": "Nephi",
      "countryCode": "US"
  },
  {
      "label": "NPL",
      "city": "New Plymouth",
      "countryCode": "NZ"
  },
  {
      "label": "NPO",
      "city": "Nangapinoh",
      "countryCode": "ID"
  },
  {
      "label": "NPP",
      "city": "Napperby",
      "countryCode": "AU"
  },
  {
      "label": "NPT",
      "city": "Newport",
      "countryCode": "US"
  },
  {
      "label": "NPU",
      "city": "San Pedro Uraba",
      "countryCode": "CO"
  },
  {
      "label": "NQL",
      "city": "Niquelandia",
      "countryCode": "BR"
  },
  {
      "label": "NQN",
      "city": "Neuquen",
      "countryCode": "AR"
  },
  {
      "label": "NQT",
      "city": "Nottingham",
      "countryCode": "GB"
  },
  {
      "label": "NQU",
      "city": "Nuqui",
      "countryCode": "CO"
  },
  {
      "label": "NQY",
      "city": "Newquay",
      "countryCode": "GB"
  },
  {
      "label": "NRA",
      "city": "Narrandera",
      "countryCode": "AU"
  },
  {
      "label": "NRB",
      "city": "Mayport",
      "countryCode": "US"
  },
  {
      "label": "NRC",
      "city": "Crows Landing",
      "countryCode": "US"
  },
  {
      "label": "NRD",
      "city": "Norderney",
      "countryCode": "DE"
  },
  {
      "label": "NRE",
      "city": "Namrole",
      "countryCode": "ID"
  },
  {
      "label": "NRG",
      "city": "Narrogin",
      "countryCode": "AU"
  },
  {
      "label": "NRI",
      "city": "Shangri La",
      "countryCode": "US"
  },
  {
      "label": "NRK",
      "city": "Norrkoping",
      "countryCode": "SE"
  },
  {
      "label": "NRL",
      "city": "North Ronaldsay",
      "countryCode": "GB"
  },
  {
      "label": "NRM",
      "city": "Nara",
      "countryCode": "ML"
  },
  {
      "label": "NRQ",
      "city": "N'Riquinha",
      "countryCode": "AO"
  },
  {
      "label": "NRS",
      "city": "Imperial Beach",
      "countryCode": "US"
  },
  {
      "label": "NRY",
      "city": "Newry",
      "countryCode": "AU"
  },
  {
      "label": "NSA",
      "city": "Noosa",
      "countryCode": "AU"
  },
  {
      "label": "NSH",
      "city": "Now Shahr",
      "countryCode": "IR"
  },
  {
      "label": "NSK",
      "city": "Norilsk",
      "countryCode": "RU"
  },
  {
      "label": "NSM",
      "city": "Norseman",
      "countryCode": "AU"
  },
  {
      "label": "NSN",
      "city": "Nelson",
      "countryCode": "NZ"
  },
  {
      "label": "NSO",
      "city": "Scone",
      "countryCode": "AU"
  },
  {
      "label": "NSP",
      "city": "Sangley Point",
      "countryCode": "PH"
  },
  {
      "label": "NST",
      "city": "Nakon Si Thammarat",
      "countryCode": "TH"
  },
  {
      "label": "NSV",
      "city": "Noosaville",
      "countryCode": "AU"
  },
  {
      "label": "NSY",
      "city": "Sigonella",
      "countryCode": "IT"
  },
  {
      "label": "NTA",
      "city": "Natadola",
      "countryCode": "FJ"
  },
  {
      "label": "NTB",
      "city": "Notodden",
      "countryCode": "NO"
  },
  {
      "label": "NTC",
      "city": "Santa Carolina",
      "countryCode": "MZ"
  },
  {
      "label": "NTE",
      "city": "Nantes",
      "countryCode": "FR"
  },
  {
      "label": "NTG",
      "city": "Nantong",
      "countryCode": "CN"
  },
  {
      "label": "NTI",
      "city": "Bintuni",
      "countryCode": "ID"
  },
  {
      "label": "NTJ",
      "city": "Manti",
      "countryCode": "US"
  },
  {
      "label": "NTL",
      "city": "Newcastle",
      "countryCode": "AU"
  },
  {
      "label": "NTM",
      "city": "Miracema Do Norte",
      "countryCode": "BR"
  },
  {
      "label": "NTN",
      "city": "Normanton",
      "countryCode": "AU"
  },
  {
      "label": "NTO",
      "city": "Santo Antao",
      "countryCode": "CV"
  },
  {
      "label": "NTT",
      "city": "Niuatoputapu",
      "countryCode": "TO"
  },
  {
      "label": "NTX",
      "city": "Natuna Ranai",
      "countryCode": "ID"
  },
  {
      "label": "NTY",
      "city": "Sun City",
      "countryCode": "ZA"
  },
  {
      "label": "NUB",
      "city": "Numbulwar",
      "countryCode": "AU"
  },
  {
      "label": "NUD",
      "city": "En Nahud",
      "countryCode": "SD"
  },
  {
      "label": "NUE",
      "city": "Nuremberg",
      "countryCode": "DE"
  },
  {
      "label": "NUG",
      "city": "Nuguria",
      "countryCode": "PG"
  },
  {
      "label": "NUH",
      "city": "Nunchia",
      "countryCode": "CO"
  },
  {
      "label": "NUI",
      "city": "Nuiqsut",
      "countryCode": "US"
  },
  {
      "label": "NUK",
      "city": "Nukutavake",
      "countryCode": "PF"
  },
  {
      "label": "NUL",
      "city": "Nulato",
      "countryCode": "US"
  },
  {
      "label": "NUP",
      "city": "Nunapitchuk",
      "countryCode": "US"
  },
  {
      "label": "NUQ",
      "city": "Mountain View",
      "countryCode": "US"
  },
  {
      "label": "NUR",
      "city": "Nullarbor",
      "countryCode": "AU"
  },
  {
      "label": "NUS",
      "city": "Norsup",
      "countryCode": "VU"
  },
  {
      "label": "NUT",
      "city": "Nutuve",
      "countryCode": "PG"
  },
  {
      "label": "NUU",
      "city": "Nakuru",
      "countryCode": "KE"
  },
  {
      "label": "NUW",
      "city": "Whidbey Island",
      "countryCode": "US"
  },
  {
      "label": "NUX",
      "city": "Novy Urengov",
      "countryCode": "RU"
  },
  {
      "label": "NVA",
      "city": "Neiva",
      "countryCode": "CO"
  },
  {
      "label": "NVD",
      "city": "Nevada",
      "countryCode": "US"
  },
  {
      "label": "NVG",
      "city": "Nueva Guinea",
      "countryCode": "NI"
  },
  {
      "label": "NVI",
      "city": "Navoi",
      "countryCode": "UZ"
  },
  {
      "label": "NVK",
      "city": "Narvik",
      "countryCode": "NO"
  },
  {
      "label": "NVP",
      "city": "Novo Aripuana",
      "countryCode": "BR"
  },
  {
      "label": "NVR",
      "city": "Novgorod",
      "countryCode": "RU"
  },
  {
      "label": "NVS",
      "city": "Nevers",
      "countryCode": "FR"
  },
  {
      "label": "NVT",
      "city": "Navegantes",
      "countryCode": "BR"
  },
  {
      "label": "NWA",
      "city": "Moheli",
      "countryCode": "KM"
  },
  {
      "label": "NWH",
      "city": "Newport",
      "countryCode": "US"
  },
  {
      "label": "NWI",
      "city": "Norwich",
      "countryCode": "GB"
  },
  {
      "label": "NWP",
      "city": "Argentia",
      "countryCode": "CA"
  },
  {
      "label": "NWT",
      "city": "Nowata",
      "countryCode": "PG"
  },
  {
      "label": "NYC",
      "city": "New York",
      "countryCode": "US"
  },
  {
      "label": "NYE",
      "city": "Nyeri",
      "countryCode": "KE"
  },
  {
      "label": "NYI",
      "city": "Sunyani",
      "countryCode": "GH"
  },
  {
      "label": "NYK",
      "city": "Nanyuki",
      "countryCode": "KE"
  },
  {
      "label": "NYM",
      "city": "Nadym",
      "countryCode": "RU"
  },
  {
      "label": "NYN",
      "city": "Nyngan",
      "countryCode": "AU"
  },
  {
      "label": "NYO",
      "city": "Nykoping",
      "countryCode": "SE"
  },
  {
      "label": "NYT",
      "city": "Naypyidaw",
      "countryCode": "MM"
  },
  {
      "label": "NYU",
      "city": "Nyaung U",
      "countryCode": "MM"
  },
  {
      "label": "NZA",
      "city": "Nzagi",
      "countryCode": "AO"
  },
  {
      "label": "NZE",
      "city": "Nzerekore",
      "countryCode": "GN"
  },
  {
      "label": "NZO",
      "city": "Nzoia",
      "countryCode": "KE"
  },
  {
      "label": "NZW",
      "city": "South Weymouth",
      "countryCode": "US"
  },
  {
      "label": "OAG",
      "city": "Orange Cudal",
      "countryCode": "AU"
  },
  {
      "label": "OAJ",
      "city": "Jacksonville",
      "countryCode": "US"
  },
  {
      "label": "OAK",
      "city": "Oakland",
      "countryCode": "US"
  },
  {
      "label": "OAL",
      "city": "Cacoal",
      "countryCode": "BR"
  },
  {
      "label": "OAM",
      "city": "Oamaru",
      "countryCode": "NZ"
  },
  {
      "label": "OAN",
      "city": "Olanchito",
      "countryCode": "HN"
  },
  {
      "label": "OAX",
      "city": "Oaxaca",
      "countryCode": "MX"
  },
  {
      "label": "OBA",
      "city": "Oban",
      "countryCode": "AU"
  },
  {
      "label": "OBC",
      "city": "Obock",
      "countryCode": "DJ"
  },
  {
      "label": "OBD",
      "city": "Obano",
      "countryCode": "ID"
  },
  {
      "label": "OBE",
      "city": "Okeechobee",
      "countryCode": "US"
  },
  {
      "label": "OBF",
      "city": "Oberpfaffenhofen",
      "countryCode": "DE"
  },
  {
      "label": "OBI",
      "city": "Obidos",
      "countryCode": "BR"
  },
  {
      "label": "OBK",
      "city": "Northbrook",
      "countryCode": "US"
  },
  {
      "label": "OBL",
      "city": "Zoersel",
      "countryCode": "BE"
  },
  {
      "label": "OBM",
      "city": "Morobe",
      "countryCode": "PG"
  },
  {
      "label": "OBN",
      "city": "Oban",
      "countryCode": "GB"
  },
  {
      "label": "OBO",
      "city": "Obihiro",
      "countryCode": "JP"
  },
  {
      "label": "OBS",
      "city": "Aubenas",
      "countryCode": "FR"
  },
  {
      "label": "OBT",
      "city": "Oakland",
      "countryCode": "US"
  },
  {
      "label": "OBU",
      "city": "Kobuk",
      "countryCode": "US"
  },
  {
      "label": "OBX",
      "city": "Obo",
      "countryCode": "PG"
  },
  {
      "label": "OBY",
      "city": "Scoresbysund",
      "countryCode": "GL"
  },
  {
      "label": "OCA",
      "city": "Ocean Reef",
      "countryCode": "US"
  },
  {
      "label": "OCC",
      "city": "Coca",
      "countryCode": "EC"
  },
  {
      "label": "OCE",
      "city": "Ocean City",
      "countryCode": "US"
  },
  {
      "label": "OCF",
      "city": "Ocala",
      "countryCode": "US"
  },
  {
      "label": "OCH",
      "city": "Lufkin",
      "countryCode": "US"
  },
  {
      "label": "OCI",
      "city": "Oceanic",
      "countryCode": "US"
  },
  {
      "label": "OCJ",
      "city": "Ocho Rios",
      "countryCode": "JM"
  },
  {
      "label": "OCN",
      "city": "Oceanside",
      "countryCode": "US"
  },
  {
      "label": "OCV",
      "city": "Ocana",
      "countryCode": "CO"
  },
  {
      "label": "OCW",
      "city": "Washington",
      "countryCode": "US"
  },
  {
      "label": "ODA",
      "city": "Ouadda",
      "countryCode": "CF"
  },
  {
      "label": "ODB",
      "city": "Cordoba",
      "countryCode": "ES"
  },
  {
      "label": "ODD",
      "city": "Oodnadatta",
      "countryCode": "AU"
  },
  {
      "label": "ODE",
      "city": "Odense",
      "countryCode": "DK"
  },
  {
      "label": "ODJ",
      "city": "Ouanda Djalle",
      "countryCode": "CF"
  },
  {
      "label": "ODL",
      "city": "Cordillo Downs",
      "countryCode": "AU"
  },
  {
      "label": "ODM",
      "city": "Oakland",
      "countryCode": "US"
  },
  {
      "label": "ODN",
      "city": "Long Seridan",
      "countryCode": "MY"
  },
  {
      "label": "ODR",
      "city": "Ord River",
      "countryCode": "AU"
  },
  {
      "label": "ODS",
      "city": "Odessa",
      "countryCode": "UA"
  },
  {
      "label": "ODW",
      "city": "Oak Harbor",
      "countryCode": "US"
  },
  {
      "label": "ODY",
      "city": "Oudomxay",
      "countryCode": "LA"
  },
  {
      "label": "OEA",
      "city": "Vincennes",
      "countryCode": "US"
  },
  {
      "label": "OEC",
      "city": "Ocussi",
      "countryCode": "ID"
  },
  {
      "label": "OEL",
      "city": "Orel",
      "countryCode": "RU"
  },
  {
      "label": "OEM",
      "city": "Paloemeu",
      "countryCode": "SR"
  },
  {
      "label": "OEO",
      "city": "Osceola",
      "countryCode": "US"
  },
  {
      "label": "OER",
      "city": "Ornskoldsvik",
      "countryCode": "SE"
  },
  {
      "label": "OES",
      "city": "San Antonio Oeste",
      "countryCode": "AR"
  },
  {
      "label": "OFI",
      "city": "Ouango Fitini",
      "countryCode": "CI"
  },
  {
      "label": "OFJ",
      "city": "Olafsfjordur",
      "countryCode": "IS"
  },
  {
      "label": "OFK",
      "city": "Norfolk",
      "countryCode": "US"
  },
  {
      "label": "OFU",
      "city": "Ofu",
      "countryCode": "AS"
  },
  {
      "label": "OGA",
      "city": "Ogallala",
      "countryCode": "US"
  },
  {
      "label": "OGB",
      "city": "Orangeburg",
      "countryCode": "US"
  },
  {
      "label": "OGD",
      "city": "Ogden",
      "countryCode": "US"
  },
  {
      "label": "OGE",
      "city": "Ogeranang",
      "countryCode": "PG"
  },
  {
      "label": "OGG",
      "city": "Kahului",
      "countryCode": "US"
  },
  {
      "label": "OGL",
      "city": "Ogle",
      "countryCode": "GY"
  },
  {
      "label": "OGN",
      "city": "Yonaguni Jima",
      "countryCode": "JP"
  },
  {
      "label": "OGO",
      "city": "Abengourou",
      "countryCode": "CI"
  },
  {
      "label": "OGR",
      "city": "Bongor",
      "countryCode": "TD"
  },
  {
      "label": "OGS",
      "city": "Ogdensburg",
      "countryCode": "US"
  },
  {
      "label": "OGU",
      "city": "Ordu",
      "countryCode": "TR"
  },
  {
      "label": "OGV",
      "city": "Ongava Game Rsv",
      "countryCode": "NA"
  },
  {
      "label": "OGX",
      "city": "Ouargla",
      "countryCode": "DZ"
  },
  {
      "label": "OGZ",
      "city": "Vladikavkaz",
      "countryCode": "RU"
  },
  {
      "label": "OHD",
      "city": "Ohrid",
      "countryCode": "MK"
  },
  {
      "label": "OHI",
      "city": "Oshakati",
      "countryCode": "NA"
  },
  {
      "label": "OHO",
      "city": "Okhotsk",
      "countryCode": "RU"
  },
  {
      "label": "OHR",
      "city": "Wyk Auf Foehr",
      "countryCode": "DE"
  },
  {
      "label": "OHS",
      "city": "Sohar",
      "countryCode": "OM"
  },
  {
      "label": "OHT",
      "city": "Kohat",
      "countryCode": "PK"
  },
  {
      "label": "OIA",
      "city": "Ourilandia",
      "countryCode": "BR"
  },
  {
      "label": "OIC",
      "city": "Norwich",
      "countryCode": "US"
  },
  {
      "label": "OIL",
      "city": "Oil City",
      "countryCode": "US"
  },
  {
      "label": "OIM",
      "city": "Oshima",
      "countryCode": "JP"
  },
  {
      "label": "OIR",
      "city": "Okushiri",
      "countryCode": "JP"
  },
  {
      "label": "OIT",
      "city": "Oita",
      "countryCode": "JP"
  },
  {
      "label": "OKA",
      "city": "Okinawa",
      "countryCode": "JP"
  },
  {
      "label": "OKB",
      "city": "Orchid Beach",
      "countryCode": "AU"
  },
  {
      "label": "OKC",
      "city": "Oklahoma City",
      "countryCode": "US"
  },
  {
      "label": "OKE",
      "city": "Okino Erabu",
      "countryCode": "JP"
  },
  {
      "label": "OKF",
      "city": "Okaukuejo",
      "countryCode": "NA"
  },
  {
      "label": "OKG",
      "city": "Okoyo",
      "countryCode": "CG"
  },
  {
      "label": "OKI",
      "city": "Oki Island",
      "countryCode": "JP"
  },
  {
      "label": "OKJ",
      "city": "Okayama",
      "countryCode": "JP"
  },
  {
      "label": "OKK",
      "city": "Kokomo",
      "countryCode": "US"
  },
  {
      "label": "OKL",
      "city": "Oksibil",
      "countryCode": "ID"
  },
  {
      "label": "OKM",
      "city": "Okmulgee",
      "countryCode": "US"
  },
  {
      "label": "OKN",
      "city": "Okondja",
      "countryCode": "GA"
  },
  {
      "label": "OKP",
      "city": "Oksapmin",
      "countryCode": "PG"
  },
  {
      "label": "OKQ",
      "city": "Okaba",
      "countryCode": "ID"
  },
  {
      "label": "OKR",
      "city": "Yorke Island",
      "countryCode": "AU"
  },
  {
      "label": "OKS",
      "city": "Oshkosh",
      "countryCode": "US"
  },
  {
      "label": "OKT",
      "city": "Oktiabrskij",
      "countryCode": "RU"
  },
  {
      "label": "OKU",
      "city": "Mokuti Lodge",
      "countryCode": "NA"
  },
  {
      "label": "OKY",
      "city": "Oakey",
      "countryCode": "AU"
  },
  {
      "label": "OLA",
      "city": "Orland",
      "countryCode": "NO"
  },
  {
      "label": "OLB",
      "city": "Olbia",
      "countryCode": "IT"
  },
  {
      "label": "OLC",
      "city": "Sao Paulo de Olivenca",
      "countryCode": "BR"
  },
  {
      "label": "OLD",
      "city": "Old Town",
      "countryCode": "US"
  },
  {
      "label": "OLE",
      "city": "Olean",
      "countryCode": "US"
  },
  {
      "label": "OLF",
      "city": "Wolf Point",
      "countryCode": "US"
  },
  {
      "label": "OLI",
      "city": "Olafsvik",
      "countryCode": "IS"
  },
  {
      "label": "OLJ",
      "city": "Olpoi",
      "countryCode": "VU"
  },
  {
      "label": "OLM",
      "city": "Olympia",
      "countryCode": "US"
  },
  {
      "label": "OLN",
      "city": "Colonia Sarmiento",
      "countryCode": "AR"
  },
  {
      "label": "OLO",
      "city": "Olomouc",
      "countryCode": "CZ"
  },
  {
      "label": "OLP",
      "city": "Olympic Dam",
      "countryCode": "AU"
  },
  {
      "label": "OLQ",
      "city": "Olsobip",
      "countryCode": "PG"
  },
  {
      "label": "OLS",
      "city": "Nogales",
      "countryCode": "US"
  },
  {
      "label": "OLU",
      "city": "Columbus",
      "countryCode": "US"
  },
  {
      "label": "OLV",
      "city": "Olive Branch",
      "countryCode": "US"
  },
  {
      "label": "OLY",
      "city": "Olney",
      "countryCode": "US"
  },
  {
      "label": "OMA",
      "city": "Omaha",
      "countryCode": "US"
  },
  {
      "label": "OMB",
      "city": "Omboue",
      "countryCode": "GA"
  },
  {
      "label": "OMC",
      "city": "Ormoc",
      "countryCode": "PH"
  },
  {
      "label": "OMD",
      "city": "Oranjemund",
      "countryCode": "NA"
  },
  {
      "label": "OME",
      "city": "Nome",
      "countryCode": "US"
  },
  {
      "label": "OMF",
      "city": "Mafraq",
      "countryCode": "JO"
  },
  {
      "label": "OMG",
      "city": "Omega",
      "countryCode": "NA"
  },
  {
      "label": "OMH",
      "city": "Urmieh",
      "countryCode": "IR"
  },
  {
      "label": "OMJ",
      "city": "Omura",
      "countryCode": "JP"
  },
  {
      "label": "OMK",
      "city": "Omak",
      "countryCode": "US"
  },
  {
      "label": "OML",
      "city": "Omkalai",
      "countryCode": "PG"
  },
  {
      "label": "OMM",
      "city": "Marmul",
      "countryCode": "OM"
  },
  {
      "label": "OMO",
      "city": "Mostar",
      "countryCode": "BA"
  },
  {
      "label": "OMR",
      "city": "Oradea",
      "countryCode": "RO"
  },
  {
      "label": "OMS",
      "city": "Omsk",
      "countryCode": "RU"
  },
  {
      "label": "OMY",
      "city": "Oddor Meanche",
      "countryCode": "KH"
  },
  {
      "label": "ONA",
      "city": "Winona",
      "countryCode": "US"
  },
  {
      "label": "ONB",
      "city": "Ononge",
      "countryCode": "PG"
  },
  {
      "label": "OND",
      "city": "Ondangwa",
      "countryCode": "NA"
  },
  {
      "label": "ONE",
      "city": "Onepusu",
      "countryCode": "SB"
  },
  {
      "label": "ONG",
      "city": "Mornington",
      "countryCode": "AU"
  },
  {
      "label": "ONH",
      "city": "Oneonta",
      "countryCode": "US"
  },
  {
      "label": "ONI",
      "city": "Moanamani",
      "countryCode": "ID"
  },
  {
      "label": "ONJ",
      "city": "Odate Noshiro",
      "countryCode": "JP"
  },
  {
      "label": "ONL",
      "city": "Oneill",
      "countryCode": "US"
  },
  {
      "label": "ONM",
      "city": "Socorro",
      "countryCode": "US"
  },
  {
      "label": "ONN",
      "city": "Onion Bay",
      "countryCode": "US"
  },
  {
      "label": "ONO",
      "city": "Ontario",
      "countryCode": "US"
  },
  {
      "label": "ONP",
      "city": "Newport",
      "countryCode": "US"
  },
  {
      "label": "ONQ",
      "city": "Zonguldak",
      "countryCode": "TR"
  },
  {
      "label": "ONR",
      "city": "Monkira",
      "countryCode": "AU"
  },
  {
      "label": "ONS",
      "city": "Onslow",
      "countryCode": "AU"
  },
  {
      "label": "ONT",
      "city": "Ontario",
      "countryCode": "US"
  },
  {
      "label": "ONU",
      "city": "Ono I Lau",
      "countryCode": "FJ"
  },
  {
      "label": "ONX",
      "city": "Colon",
      "countryCode": "PA"
  },
  {
      "label": "ONY",
      "city": "Olney",
      "countryCode": "US"
  },
  {
      "label": "OOA",
      "city": "Oskaloosa",
      "countryCode": "US"
  },
  {
      "label": "OOK",
      "city": "Toksook Bay",
      "countryCode": "US"
  },
  {
      "label": "OOL",
      "city": "Gold Coast",
      "countryCode": "AU"
  },
  {
      "label": "OOM",
      "city": "Cooma",
      "countryCode": "AU"
  },
  {
      "label": "OOR",
      "city": "Mooraberree",
      "countryCode": "AU"
  },
  {
      "label": "OOT",
      "city": "Onotoa",
      "countryCode": "KI"
  },
  {
      "label": "OPA",
      "city": "Kopasker",
      "countryCode": "IS"
  },
  {
      "label": "OPB",
      "city": "Open Bay",
      "countryCode": "PG"
  },
  {
      "label": "OPI",
      "city": "Oenpelli",
      "countryCode": "AU"
  },
  {
      "label": "OPL",
      "city": "Opelousas",
      "countryCode": "US"
  },
  {
      "label": "OPO",
      "city": "Porto",
      "countryCode": "PT"
  },
  {
      "label": "OPS",
      "city": "Sinop",
      "countryCode": "BR"
  },
  {
      "label": "OPU",
      "city": "Balimo",
      "countryCode": "PG"
  },
  {
      "label": "OPW",
      "city": "Opuwa",
      "countryCode": "NA"
  },
  {
      "label": "ORA",
      "city": "Oran",
      "countryCode": "AR"
  },
  {
      "label": "ORB",
      "city": "Orebro",
      "countryCode": "SE"
  },
  {
      "label": "ORC",
      "city": "Orocue",
      "countryCode": "CO"
  },
  {
      "label": "ORE",
      "city": "Orleans",
      "countryCode": "FR"
  },
  {
      "label": "ORF",
      "city": "Norfolk",
      "countryCode": "US"
  },
  {
      "label": "ORH",
      "city": "Worcester",
      "countryCode": "US"
  },
  {
      "label": "ORJ",
      "city": "Orinduik",
      "countryCode": "GY"
  },
  {
      "label": "ORK",
      "city": "Cork",
      "countryCode": "IE"
  },
  {
      "label": "ORL",
      "city": "Orlando",
      "countryCode": "US"
  },
  {
      "label": "ORM",
      "city": "Northampton",
      "countryCode": "GB"
  },
  {
      "label": "ORN",
      "city": "Oran",
      "countryCode": "DZ"
  },
  {
      "label": "ORO",
      "city": "Yoro",
      "countryCode": "HN"
  },
  {
      "label": "ORP",
      "city": "Orapa",
      "countryCode": "BW"
  },
  {
      "label": "ORR",
      "city": "Yorketown",
      "countryCode": "AU"
  },
  {
      "label": "ORS",
      "city": "Orpheus Island",
      "countryCode": "AU"
  },
  {
      "label": "ORT",
      "city": "Northway",
      "countryCode": "US"
  },
  {
      "label": "ORU",
      "city": "Oruro",
      "countryCode": "BO"
  },
  {
      "label": "ORV",
      "city": "Noorvik",
      "countryCode": "US"
  },
  {
      "label": "ORW",
      "city": "Ormara",
      "countryCode": "PK"
  },
  {
      "label": "ORX",
      "city": "Oriximina",
      "countryCode": "BR"
  },
  {
      "label": "ORY",
      "city": "Orly",
      "countryCode": "FR"
  },
  {
      "label": "ORZ",
      "city": "Orange Walk",
      "countryCode": "BZ"
  },
  {
      "label": "OSA",
      "city": "Osaka",
      "countryCode": "JP"
  },
  {
      "label": "OSB",
      "city": "Osage Beach",
      "countryCode": "US"
  },
  {
      "label": "OSD",
      "city": "Ostersund",
      "countryCode": "SE"
  },
  {
      "label": "OSE",
      "city": "Omora",
      "countryCode": "PG"
  },
  {
      "label": "OSG",
      "city": "Ossima",
      "countryCode": "PG"
  },
  {
      "label": "OSH",
      "city": "Oshkosh",
      "countryCode": "US"
  },
  {
      "label": "OSI",
      "city": "Osijek",
      "countryCode": "HR"
  },
  {
      "label": "OSK",
      "city": "Oskarshamn",
      "countryCode": "SE"
  },
  {
      "label": "OSL",
      "city": "Oslo",
      "countryCode": "NO"
  },
  {
      "label": "OSM",
      "city": "Mosul",
      "countryCode": "IQ"
  },
  {
      "label": "OSN",
      "city": "Osan",
      "countryCode": "KR"
  },
  {
      "label": "OSP",
      "city": "Slupsk",
      "countryCode": "PL"
  },
  {
      "label": "OSR",
      "city": "Ostrava",
      "countryCode": "CZ"
  },
  {
      "label": "OSS",
      "city": "Osh",
      "countryCode": "KG"
  },
  {
      "label": "OST",
      "city": "Ostend",
      "countryCode": "BE"
  },
  {
      "label": "OSW",
      "city": "Orsk",
      "countryCode": "RU"
  },
  {
      "label": "OSX",
      "city": "Kosciusko",
      "countryCode": "US"
  },
  {
      "label": "OSY",
      "city": "Namsos",
      "countryCode": "NO"
  },
  {
      "label": "OSZ",
      "city": "Koszalin",
      "countryCode": "PL"
  },
  {
      "label": "OTA",
      "city": "Mota",
      "countryCode": "ET"
  },
  {
      "label": "OTC",
      "city": "Bol",
      "countryCode": "TD"
  },
  {
      "label": "OTD",
      "city": "Contadora",
      "countryCode": "PA"
  },
  {
      "label": "OTG",
      "city": "Worthington",
      "countryCode": "US"
  },
  {
      "label": "OTH",
      "city": "N Bend Coosbay",
      "countryCode": "US"
  },
  {
      "label": "OTI",
      "city": "Morotai Island",
      "countryCode": "ID"
  },
  {
      "label": "OTJ",
      "city": "Otjiwarongo",
      "countryCode": "NA"
  },
  {
      "label": "OTL",
      "city": "Boutilimit",
      "countryCode": "MR"
  },
  {
      "label": "OTM",
      "city": "Ottumwa",
      "countryCode": "US"
  },
  {
      "label": "OTN",
      "city": "Oaktown",
      "countryCode": "US"
  },
  {
      "label": "OTO",
      "city": "Otto",
      "countryCode": "US"
  },
  {
      "label": "OTR",
      "city": "Coto 47",
      "countryCode": "CR"
  },
  {
      "label": "OTS",
      "city": "Anacortes",
      "countryCode": "US"
  },
  {
      "label": "OTU",
      "city": "Otu",
      "countryCode": "CO"
  },
  {
      "label": "OTY",
      "city": "Oria",
      "countryCode": "PG"
  },
  {
      "label": "OTZ",
      "city": "Kotzebue",
      "countryCode": "US"
  },
  {
      "label": "OUA",
      "city": "Ouagadougou",
      "countryCode": "BF"
  },
  {
      "label": "OUD",
      "city": "Oujda",
      "countryCode": "MA"
  },
  {
      "label": "OUE",
      "city": "Ouesso",
      "countryCode": "CG"
  },
  {
      "label": "OUG",
      "city": "Ouahigouya",
      "countryCode": "BF"
  },
  {
      "label": "OUH",
      "city": "Oudtshoorn",
      "countryCode": "ZA"
  },
  {
      "label": "OUI",
      "city": "Ban Houei",
      "countryCode": "LA"
  },
  {
      "label": "OUK",
      "city": "Outer Skerries",
      "countryCode": "GB"
  },
  {
      "label": "OUL",
      "city": "Oulu",
      "countryCode": "FI"
  },
  {
      "label": "OUM",
      "city": "Oum Hadjer",
      "countryCode": "TD"
  },
  {
      "label": "OUN",
      "city": "Norman",
      "countryCode": "US"
  },
  {
      "label": "OUR",
      "city": "Batouri",
      "countryCode": "CM"
  },
  {
      "label": "OUS",
      "city": "Ourinhos",
      "countryCode": "BR"
  },
  {
      "label": "OUT",
      "city": "Bousso",
      "countryCode": "TD"
  },
  {
      "label": "OUU",
      "city": "Ouanga",
      "countryCode": "GA"
  },
  {
      "label": "OUZ",
      "city": "Zouerate",
      "countryCode": "MR"
  },
  {
      "label": "OVA",
      "city": "Bekily",
      "countryCode": "MG"
  },
  {
      "label": "OVB",
      "city": "Novosibirsk",
      "countryCode": "RU"
  },
  {
      "label": "OVD",
      "city": "Oviedo",
      "countryCode": "ES"
  },
  {
      "label": "OVE",
      "city": "Oroville",
      "countryCode": "US"
  },
  {
      "label": "OVL",
      "city": "Ovalle",
      "countryCode": "CL"
  },
  {
      "label": "OWA",
      "city": "Owatonna",
      "countryCode": "US"
  },
  {
      "label": "OWB",
      "city": "Owensboro",
      "countryCode": "US"
  },
  {
      "label": "OWD",
      "city": "Norwood",
      "countryCode": "US"
  },
  {
      "label": "OWE",
      "city": "Owendo",
      "countryCode": "GA"
  },
  {
      "label": "OWK",
      "city": "Norridgewock",
      "countryCode": "US"
  },
  {
      "label": "OXB",
      "city": "Bissau",
      "countryCode": "GW"
  },
  {
      "label": "OXC",
      "city": "Oxford",
      "countryCode": "US"
  },
  {
      "label": "OXD",
      "city": "Oxford",
      "countryCode": "US"
  },
  {
      "label": "OXF",
      "city": "Oxford",
      "countryCode": "GB"
  },
  {
      "label": "OXO",
      "city": "Orientos",
      "countryCode": "AU"
  },
  {
      "label": "OXQ",
      "city": "Oxford",
      "countryCode": "GB"
  },
  {
      "label": "OXR",
      "city": "Oxnard",
      "countryCode": "US"
  },
  {
      "label": "OXY",
      "city": "Morney",
      "countryCode": "AU"
  },
  {
      "label": "OYA",
      "city": "Goya",
      "countryCode": "AR"
  },
  {
      "label": "OYE",
      "city": "Oyem",
      "countryCode": "GA"
  },
  {
      "label": "OYG",
      "city": "Moyo",
      "countryCode": "UG"
  },
  {
      "label": "OYK",
      "city": "Oiapoque",
      "countryCode": "BR"
  },
  {
      "label": "OYL",
      "city": "Moyale",
      "countryCode": "KE"
  },
  {
      "label": "OYN",
      "city": "Ouyen",
      "countryCode": "AU"
  },
  {
      "label": "OYO",
      "city": "Tres Arroyos",
      "countryCode": "AR"
  },
  {
      "label": "OYP",
      "city": "St Georges De Loy",
      "countryCode": "GF"
  },
  {
      "label": "OYS",
      "city": "Yosemite Ntl Park",
      "countryCode": "US"
  },
  {
      "label": "OZA",
      "city": "Ozona",
      "countryCode": "US"
  },
  {
      "label": "OZC",
      "city": "Ozamis City",
      "countryCode": "PH"
  },
  {
      "label": "OZH",
      "city": "Zaporozhye",
      "countryCode": "UA"
  },
  {
      "label": "OZP",
      "city": "Moron",
      "countryCode": "ES"
  },
  {
      "label": "OZR",
      "city": "Ozark",
      "countryCode": "US"
  },
  {
      "label": "OZZ",
      "city": "Ouarzazate",
      "countryCode": "MA"
  },
  {
      "label": "PAA",
      "city": "Pa An",
      "countryCode": "MM"
  },
  {
      "label": "PAD",
      "city": "Paderborn",
      "countryCode": "DE"
  },
  {
      "label": "PAE",
      "city": "Everett",
      "countryCode": "US"
  },
  {
      "label": "PAF",
      "city": "Pakuba",
      "countryCode": "UG"
  },
  {
      "label": "PAG",
      "city": "Pagadian",
      "countryCode": "PH"
  },
  {
      "label": "PAH",
      "city": "Paducah",
      "countryCode": "US"
  },
  {
      "label": "PAI",
      "city": "Pailin",
      "countryCode": "KH"
  },
  {
      "label": "PAJ",
      "city": "Para Chinar",
      "countryCode": "PK"
  },
  {
      "label": "PAK",
      "city": "Hanapepe",
      "countryCode": "US"
  },
  {
      "label": "PAL",
      "city": "Palanquero",
      "countryCode": "CO"
  },
  {
      "label": "PAN",
      "city": "Pattani",
      "countryCode": "TH"
  },
  {
      "label": "PAO",
      "city": "Palo Alto",
      "countryCode": "US"
  },
  {
      "label": "PAP",
      "city": "Port Au Prince",
      "countryCode": "HT"
  },
  {
      "label": "PAQ",
      "city": "Palmer",
      "countryCode": "US"
  },
  {
      "label": "PAR",
      "city": "Paris",
      "countryCode": "FR"
  },
  {
      "label": "PAS",
      "city": "Paros",
      "countryCode": "GR"
  },
  {
      "label": "PAU",
      "city": "Pauk",
      "countryCode": "MM"
  },
  {
      "label": "PAV",
      "city": "Paulo Afonso",
      "countryCode": "BR"
  },
  {
      "label": "PAW",
      "city": "Pambwa",
      "countryCode": "PG"
  },
  {
      "label": "PAX",
      "city": "Port De Paix",
      "countryCode": "HT"
  },
  {
      "label": "PAY",
      "city": "Pamol",
      "countryCode": "MY"
  },
  {
      "label": "PAZ",
      "city": "Poza Rica",
      "countryCode": "MX"
  },
  {
      "label": "PBB",
      "city": "Paranaiba",
      "countryCode": "BR"
  },
  {
      "label": "PBC",
      "city": "Puebla",
      "countryCode": "MX"
  },
  {
      "label": "PBE",
      "city": "Puerto Berrio",
      "countryCode": "CO"
  },
  {
      "label": "PBF",
      "city": "Pine Bluff",
      "countryCode": "US"
  },
  {
      "label": "PBG",
      "city": "Plattsburgh",
      "countryCode": "US"
  },
  {
      "label": "PBH",
      "city": "Paro",
      "countryCode": "BT"
  },
  {
      "label": "PBI",
      "city": "West Palm Beach",
      "countryCode": "US"
  },
  {
      "label": "PBJ",
      "city": "Paama",
      "countryCode": "VU"
  },
  {
      "label": "PBK",
      "city": "Pack Creek",
      "countryCode": "US"
  },
  {
      "label": "PBL",
      "city": "Puerto Cabello",
      "countryCode": "VE"
  },
  {
      "label": "PBM",
      "city": "Paramaribo",
      "countryCode": "SR"
  },
  {
      "label": "PBN",
      "city": "Porto Amboim",
      "countryCode": "AO"
  },
  {
      "label": "PBO",
      "city": "Paraburdoo",
      "countryCode": "AU"
  },
  {
      "label": "PBP",
      "city": "Punta Islita",
      "countryCode": "CR"
  },
  {
      "label": "PBQ",
      "city": "Pimenta Bueno",
      "countryCode": "BR"
  },
  {
      "label": "PBR",
      "city": "Puerto Barrios",
      "countryCode": "GT"
  },
  {
      "label": "PBS",
      "city": "Patong Beach",
      "countryCode": "TH"
  },
  {
      "label": "PBU",
      "city": "Putao",
      "countryCode": "MM"
  },
  {
      "label": "PBV",
      "city": "Portos Dos Gaucho",
      "countryCode": "BR"
  },
  {
      "label": "PBW",
      "city": "Palibelo",
      "countryCode": "ID"
  },
  {
      "label": "PBX",
      "city": "Porto Alegre Do Norte",
      "countryCode": "BR"
  },
  {
      "label": "PBZ",
      "city": "Plettenberg Bay",
      "countryCode": "ZA"
  },
  {
      "label": "PCA",
      "city": "Portage Creek",
      "countryCode": "US"
  },
  {
      "label": "PCB",
      "city": "Pondok Cabe",
      "countryCode": "ID"
  },
  {
      "label": "PCC",
      "city": "Puerto Rico",
      "countryCode": "CO"
  },
  {
      "label": "PCD",
      "city": "Prairie Du Chien",
      "countryCode": "US"
  },
  {
      "label": "PCE",
      "city": "Painter Creek",
      "countryCode": "US"
  },
  {
      "label": "PCG",
      "city": "Paso Caballos",
      "countryCode": "GT"
  },
  {
      "label": "PCH",
      "city": "Palacios",
      "countryCode": "HN"
  },
  {
      "label": "PCK",
      "city": "Porcupine Creek",
      "countryCode": "US"
  },
  {
      "label": "PCL",
      "city": "Pucallpa",
      "countryCode": "PE"
  },
  {
      "label": "PCM",
      "city": "Playa Del Carmen",
      "countryCode": "MX"
  },
  {
      "label": "PCN",
      "city": "Picton",
      "countryCode": "NZ"
  },
  {
      "label": "PCO",
      "city": "Punta Colorada",
      "countryCode": "MX"
  },
  {
      "label": "PCP",
      "city": "Principe",
      "countryCode": "ST"
  },
  {
      "label": "PCR",
      "city": "Puerto Carreno",
      "countryCode": "CO"
  },
  {
      "label": "PCS",
      "city": "Picos",
      "countryCode": "BR"
  },
  {
      "label": "PCT",
      "city": "Princeton",
      "countryCode": "US"
  },
  {
      "label": "PCU",
      "city": "Picayune",
      "countryCode": "US"
  },
  {
      "label": "PCV",
      "city": "Punta Chivato",
      "countryCode": "MX"
  },
  {
      "label": "PDA",
      "city": "Puerto Inirida",
      "countryCode": "CO"
  },
  {
      "label": "PDB",
      "city": "Pedro Bay",
      "countryCode": "US"
  },
  {
      "label": "PDC",
      "city": "Mueo",
      "countryCode": "NC"
  },
  {
      "label": "PDE",
      "city": "Pandie Pandie",
      "countryCode": "AU"
  },
  {
      "label": "PDF",
      "city": "Prado",
      "countryCode": "BR"
  },
  {
      "label": "PDG",
      "city": "Padang",
      "countryCode": "ID"
  },
  {
      "label": "PDI",
      "city": "Pindiu",
      "countryCode": "PG"
  },
  {
      "label": "PDL",
      "city": "Ponta Delgada Azore",
      "countryCode": "PT"
  },
  {
      "label": "PDN",
      "city": "Parndana",
      "countryCode": "AU"
  },
  {
      "label": "PDO",
      "city": "Pendopo",
      "countryCode": "ID"
  },
  {
      "label": "PDP",
      "city": "Punta Del Este",
      "countryCode": "UY"
  },
  {
      "label": "PDR",
      "city": "Presidente Dutra",
      "countryCode": "BR"
  },
  {
      "label": "PDS",
      "city": "Piedras Negras",
      "countryCode": "MX"
  },
  {
      "label": "PDT",
      "city": "Pendleton",
      "countryCode": "US"
  },
  {
      "label": "PDU",
      "city": "Paysandu",
      "countryCode": "UY"
  },
  {
      "label": "PDV",
      "city": "Plovdiv",
      "countryCode": "BG"
  },
  {
      "label": "PDX",
      "city": "Portland",
      "countryCode": "US"
  },
  {
      "label": "PDZ",
      "city": "Pedernales",
      "countryCode": "VE"
  },
  {
      "label": "PEA",
      "city": "Penneshaw",
      "countryCode": "AU"
  },
  {
      "label": "PEB",
      "city": "Pebane",
      "countryCode": "MZ"
  },
  {
      "label": "PED",
      "city": "Pardubice",
      "countryCode": "CZ"
  },
  {
      "label": "PEE",
      "city": "Perm",
      "countryCode": "RU"
  },
  {
      "label": "PEF",
      "city": "Peenemuende",
      "countryCode": "DE"
  },
  {
      "label": "PEG",
      "city": "Perugia",
      "countryCode": "IT"
  },
  {
      "label": "PEH",
      "city": "Pehuajo",
      "countryCode": "AR"
  },
  {
      "label": "PEI",
      "city": "Pereira",
      "countryCode": "CO"
  },
  {
      "label": "PEL",
      "city": "Pelaneng",
      "countryCode": "LS"
  },
  {
      "label": "PEM",
      "city": "Puerto Maldonado",
      "countryCode": "PE"
  },
  {
      "label": "PEN",
      "city": "Penang",
      "countryCode": "MY"
  },
  {
      "label": "PEP",
      "city": "Peppimenarti",
      "countryCode": "AU"
  },
  {
      "label": "PEQ",
      "city": "Pecos City",
      "countryCode": "US"
  },
  {
      "label": "PER",
      "city": "Perth",
      "countryCode": "AU"
  },
  {
      "label": "PES",
      "city": "Petrozavodsk",
      "countryCode": "RU"
  },
  {
      "label": "PET",
      "city": "Pelotas",
      "countryCode": "BR"
  },
  {
      "label": "PEU",
      "city": "Puerto Lempira",
      "countryCode": "HN"
  },
  {
      "label": "PEW",
      "city": "Peshawar",
      "countryCode": "PK"
  },
  {
      "label": "PEX",
      "city": "Pechora",
      "countryCode": "RU"
  },
  {
      "label": "PEY",
      "city": "Penong",
      "countryCode": "AU"
  },
  {
      "label": "PEZ",
      "city": "Penza",
      "countryCode": "RU"
  },
  {
      "label": "PFA",
      "city": "Paf Warren",
      "countryCode": "US"
  },
  {
      "label": "PFB",
      "city": "Passo Fundo",
      "countryCode": "BR"
  },
  {
      "label": "PFC",
      "city": "Pacific City",
      "countryCode": "US"
  },
  {
      "label": "PFD",
      "city": "Port Frederick",
      "countryCode": "US"
  },
  {
      "label": "PFJ",
      "city": "Patreksfjordur",
      "countryCode": "IS"
  },
  {
      "label": "PFN",
      "city": "Panama City",
      "countryCode": "US"
  },
  {
      "label": "PFO",
      "city": "Paphos",
      "countryCode": "CY"
  },
  {
      "label": "PFR",
      "city": "Ilebo",
      "countryCode": "CD"
  },
  {
      "label": "PGA",
      "city": "Page",
      "countryCode": "US"
  },
  {
      "label": "PGB",
      "city": "Pangoa",
      "countryCode": "PG"
  },
  {
      "label": "PGC",
      "city": "Petersburg",
      "countryCode": "US"
  },
  {
      "label": "PGD",
      "city": "Punta Gorda",
      "countryCode": "US"
  },
  {
      "label": "PGE",
      "city": "Yegepa",
      "countryCode": "PG"
  },
  {
      "label": "PGF",
      "city": "Perpignan",
      "countryCode": "FR"
  },
  {
      "label": "PGG",
      "city": "Progresso",
      "countryCode": "BR"
  },
  {
      "label": "PGI",
      "city": "Chitato",
      "countryCode": "AO"
  },
  {
      "label": "PGK",
      "city": "Pangkalpinang",
      "countryCode": "ID"
  },
  {
      "label": "PGL",
      "city": "Pascagoula",
      "countryCode": "US"
  },
  {
      "label": "PGM",
      "city": "Port Graham",
      "countryCode": "US"
  },
  {
      "label": "PGN",
      "city": "Pangia",
      "countryCode": "PG"
  },
  {
      "label": "PGO",
      "city": "Pagosa Springs",
      "countryCode": "US"
  },
  {
      "label": "PGP",
      "city": "Porto Alegre",
      "countryCode": "ST"
  },
  {
      "label": "PGR",
      "city": "Paragould",
      "countryCode": "US"
  },
  {
      "label": "PGS",
      "city": "Peach Springs",
      "countryCode": "US"
  },
  {
      "label": "PGV",
      "city": "Greenville",
      "countryCode": "US"
  },
  {
      "label": "PGX",
      "city": "Perigueux",
      "countryCode": "FR"
  },
  {
      "label": "PGZ",
      "city": "Ponta Grossa",
      "countryCode": "BR"
  },
  {
      "label": "PHA",
      "city": "Phan Rang",
      "countryCode": "VN"
  },
  {
      "label": "PHB",
      "city": "Parnaiba",
      "countryCode": "BR"
  },
  {
      "label": "PHC",
      "city": "Port Harcourt",
      "countryCode": "NG"
  },
  {
      "label": "PHD",
      "city": "New Philadelphia",
      "countryCode": "US"
  },
  {
      "label": "PHE",
      "city": "Port Hedland",
      "countryCode": "AU"
  },
  {
      "label": "PHF",
      "city": "Hampton",
      "countryCode": "US"
  },
  {
      "label": "PHH",
      "city": "Phan Thiet",
      "countryCode": "VN"
  },
  {
      "label": "PHI",
      "city": "Pinheiro",
      "countryCode": "BR"
  },
  {
      "label": "PHJ",
      "city": "Port Hunter",
      "countryCode": "AU"
  },
  {
      "label": "PHK",
      "city": "Pahokee",
      "countryCode": "US"
  },
  {
      "label": "PHL",
      "city": "Philadelphia",
      "countryCode": "US"
  },
  {
      "label": "PHM",
      "city": "Boeblingen",
      "countryCode": "DE"
  },
  {
      "label": "PHN",
      "city": "Port Huron",
      "countryCode": "US"
  },
  {
      "label": "PHO",
      "city": "Point Hope",
      "countryCode": "US"
  },
  {
      "label": "PHP",
      "city": "Philip",
      "countryCode": "US"
  },
  {
      "label": "PHR",
      "city": "Pacific Harbor",
      "countryCode": "FJ"
  },
  {
      "label": "PHS",
      "city": "Phitsanulok",
      "countryCode": "TH"
  },
  {
      "label": "PHT",
      "city": "Paris",
      "countryCode": "US"
  },
  {
      "label": "PHU",
      "city": "Phu Vinh",
      "countryCode": "VN"
  },
  {
      "label": "PHW",
      "city": "Phalaborwa",
      "countryCode": "ZA"
  },
  {
      "label": "PHX",
      "city": "Phoenix",
      "countryCode": "US"
  },
  {
      "label": "PHY",
      "city": "Phetchabun",
      "countryCode": "TH"
  },
  {
      "label": "PHZ",
      "city": "Phi Phi Island",
      "countryCode": "TH"
  },
  {
      "label": "PIA",
      "city": "Peoria",
      "countryCode": "US"
  },
  {
      "label": "PIC",
      "city": "Pine Cay",
      "countryCode": "TC"
  },
  {
      "label": "PIE",
      "city": "St Petersburg",
      "countryCode": "US"
  },
  {
      "label": "PIF",
      "city": "Pingtung",
      "countryCode": "TW"
  },
  {
      "label": "PIG",
      "city": "Pitinga",
      "countryCode": "BR"
  },
  {
      "label": "PIH",
      "city": "Pocatello",
      "countryCode": "US"
  },
  {
      "label": "PIL",
      "city": "Pilar",
      "countryCode": "PY"
  },
  {
      "label": "PIM",
      "city": "Pine Mountain",
      "countryCode": "US"
  },
  {
      "label": "PIN",
      "city": "Parintins",
      "countryCode": "BR"
  },
  {
      "label": "PIO",
      "city": "Pisco",
      "countryCode": "PE"
  },
  {
      "label": "PIP",
      "city": "Pilot Point",
      "countryCode": "US"
  },
  {
      "label": "PIQ",
      "city": "Pipillipai",
      "countryCode": "GY"
  },
  {
      "label": "PIR",
      "city": "Pierre",
      "countryCode": "US"
  },
  {
      "label": "PIS",
      "city": "Poitiers",
      "countryCode": "FR"
  },
  {
      "label": "PIT",
      "city": "Pittsburgh",
      "countryCode": "US"
  },
  {
      "label": "PIU",
      "city": "Piura",
      "countryCode": "PE"
  },
  {
      "label": "PIV",
      "city": "Pirapora",
      "countryCode": "BR"
  },
  {
      "label": "PIW",
      "city": "Pikwitonei",
      "countryCode": "CA"
  },
  {
      "label": "PIX",
      "city": "Pico Island",
      "countryCode": "PT"
  },
  {
      "label": "PIZ",
      "city": "Point Lay",
      "countryCode": "US"
  },
  {
      "label": "PJB",
      "city": "Payson",
      "countryCode": "US"
  },
  {
      "label": "PJC",
      "city": "Pedro Juan Caball",
      "countryCode": "PY"
  },
  {
      "label": "PJG",
      "city": "Panjgur",
      "countryCode": "PK"
  },
  {
      "label": "PJM",
      "city": "Puerto Jimenez",
      "countryCode": "CR"
  },
  {
      "label": "PJS",
      "city": "Port San Juan",
      "countryCode": "US"
  },
  {
      "label": "PJZ",
      "city": "Puerto Juarez",
      "countryCode": "MX"
  },
  {
      "label": "PKA",
      "city": "Napaiskak",
      "countryCode": "US"
  },
  {
      "label": "PKB",
      "city": "Parkersburg",
      "countryCode": "US"
  },
  {
      "label": "PKC",
      "city": "Petropavlovsk Kam",
      "countryCode": "RU"
  },
  {
      "label": "PKD",
      "city": "Park Rapids",
      "countryCode": "US"
  },
  {
      "label": "PKE",
      "city": "Parkes",
      "countryCode": "AU"
  },
  {
      "label": "PKF",
      "city": "Park Falls",
      "countryCode": "US"
  },
  {
      "label": "PKG",
      "city": "Pangkor Perak",
      "countryCode": "MY"
  },
  {
      "label": "PKH",
      "city": "Porto Kheli",
      "countryCode": "GR"
  },
  {
      "label": "PKJ",
      "city": "Playa Grande",
      "countryCode": "GT"
  },
  {
      "label": "PKK",
      "city": "Pakokku",
      "countryCode": "MM"
  },
  {
      "label": "PKL",
      "city": "Pakatoa Island",
      "countryCode": "NZ"
  },
  {
      "label": "PKM",
      "city": "Port Kaituma",
      "countryCode": "GY"
  },
  {
      "label": "PKN",
      "city": "Pangkalanbuun",
      "countryCode": "ID"
  },
  {
      "label": "PKO",
      "city": "Parakou",
      "countryCode": "BJ"
  },
  {
      "label": "PKP",
      "city": "Puka Puka",
      "countryCode": "PF"
  },
  {
      "label": "PKR",
      "city": "Pokhara",
      "countryCode": "NP"
  },
  {
      "label": "PKS",
      "city": "Paksane",
      "countryCode": "LA"
  },
  {
      "label": "PKT",
      "city": "Port Keats",
      "countryCode": "AU"
  },
  {
      "label": "PKU",
      "city": "Pekanbaru",
      "countryCode": "ID"
  },
  {
      "label": "PKV",
      "city": "Pskov",
      "countryCode": "RU"
  },
  {
      "label": "PKW",
      "city": "Selebi Phikwe",
      "countryCode": "BW"
  },
  {
      "label": "PKY",
      "city": "Palangkaraya",
      "countryCode": "ID"
  },
  {
      "label": "PKZ",
      "city": "Pakse",
      "countryCode": "LA"
  },
  {
      "label": "PLA",
      "city": "Planadas",
      "countryCode": "CO"
  },
  {
      "label": "PLB",
      "city": "Plattsburgh",
      "countryCode": "US"
  },
  {
      "label": "PLC",
      "city": "Planeta Rica",
      "countryCode": "CO"
  },
  {
      "label": "PLD",
      "city": "Playa Samara",
      "countryCode": "CR"
  },
  {
      "label": "PLE",
      "city": "Paiela",
      "countryCode": "PG"
  },
  {
      "label": "PLF",
      "city": "Pala",
      "countryCode": "TD"
  },
  {
      "label": "PLG",
      "city": "La Plagne",
      "countryCode": "FR"
  },
  {
      "label": "PLH",
      "city": "Plymouth",
      "countryCode": "GB"
  },
  {
      "label": "PLI",
      "city": "Palm Island",
      "countryCode": "VC"
  },
  {
      "label": "PLJ",
      "city": "Placencia",
      "countryCode": "BZ"
  },
  {
      "label": "PLK",
      "city": "Point Lookout",
      "countryCode": "US"
  },
  {
      "label": "PLL",
      "city": "Ponta Pelada",
      "countryCode": "BR"
  },
  {
      "label": "PLM",
      "city": "Palembang",
      "countryCode": "ID"
  },
  {
      "label": "PLN",
      "city": "Pellston",
      "countryCode": "US"
  },
  {
      "label": "PLO",
      "city": "Port Lincoln",
      "countryCode": "AU"
  },
  {
      "label": "PLP",
      "city": "La Palma",
      "countryCode": "PA"
  },
  {
      "label": "PLQ",
      "city": "Palanga",
      "countryCode": "LT"
  },
  {
      "label": "PLR",
      "city": "Pell City",
      "countryCode": "US"
  },
  {
      "label": "PLS",
      "city": "Providenciales",
      "countryCode": "TC"
  },
  {
      "label": "PLT",
      "city": "Plato",
      "countryCode": "CO"
  },
  {
      "label": "PLV",
      "city": "Poltava",
      "countryCode": "UA"
  },
  {
      "label": "PLW",
      "city": "Palu",
      "countryCode": "ID"
  },
  {
      "label": "PLX",
      "city": "Semipalatinsk",
      "countryCode": "KZ"
  },
  {
      "label": "PLY",
      "city": "Plymouth",
      "countryCode": "US"
  },
  {
      "label": "PLZ",
      "city": "Port Elizabeth",
      "countryCode": "ZA"
  },
  {
      "label": "PMA",
      "city": "Pemba",
      "countryCode": "TZ"
  },
  {
      "label": "PMB",
      "city": "Pembina",
      "countryCode": "US"
  },
  {
      "label": "PMC",
      "city": "Puerto Montt",
      "countryCode": "CL"
  },
  {
      "label": "PME",
      "city": "Portsmouth",
      "countryCode": "GB"
  },
  {
      "label": "PMF",
      "city": "Parma",
      "countryCode": "IT"
  },
  {
      "label": "PMG",
      "city": "Ponta Pora",
      "countryCode": "BR"
  },
  {
      "label": "PMH",
      "city": "Portsmouth",
      "countryCode": "US"
  },
  {
      "label": "PMI",
      "city": "Palma de Mallorca",
      "countryCode": "ES"
  },
  {
      "label": "PMK",
      "city": "Palm Island",
      "countryCode": "AU"
  },
  {
      "label": "PMM",
      "city": "Phanom Sarakham",
      "countryCode": "TH"
  },
  {
      "label": "PMN",
      "city": "Pumani",
      "countryCode": "PG"
  },
  {
      "label": "PMO",
      "city": "Palermo",
      "countryCode": "IT"
  },
  {
      "label": "PMP",
      "city": "Pimaga",
      "countryCode": "PG"
  },
  {
      "label": "PMQ",
      "city": "Perito Moreno",
      "countryCode": "AR"
  },
  {
      "label": "PMR",
      "city": "Palmerston North",
      "countryCode": "NZ"
  },
  {
      "label": "PMS",
      "city": "Palmyra",
      "countryCode": "SY"
  },
  {
      "label": "PMT",
      "city": "Paramakotoi",
      "countryCode": "GY"
  },
  {
      "label": "PMU",
      "city": "Paimiut",
      "countryCode": "US"
  },
  {
      "label": "PMV",
      "city": "Porlamar",
      "countryCode": "VE"
  },
  {
      "label": "PMW",
      "city": "Palmas",
      "countryCode": "BR"
  },
  {
      "label": "PMY",
      "city": "Puerto Madryn",
      "countryCode": "AR"
  },
  {
      "label": "PMZ",
      "city": "Palmar",
      "countryCode": "CR"
  },
  {
      "label": "PNA",
      "city": "Pamplona",
      "countryCode": "ES"
  },
  {
      "label": "PNB",
      "city": "Porto Nacional",
      "countryCode": "BR"
  },
  {
      "label": "PNC",
      "city": "Ponca City",
      "countryCode": "US"
  },
  {
      "label": "PND",
      "city": "Punta Gorda",
      "countryCode": "BZ"
  },
  {
      "label": "PNF",
      "city": "Peterson's Point",
      "countryCode": "US"
  },
  {
      "label": "PNG",
      "city": "Paranagua",
      "countryCode": "BR"
  },
  {
      "label": "PNH",
      "city": "Phnom Penh",
      "countryCode": "KH"
  },
  {
      "label": "PNI",
      "city": "Pohnpei",
      "countryCode": "FM"
  },
  {
      "label": "PNK",
      "city": "Pontianak",
      "countryCode": "ID"
  },
  {
      "label": "PNL",
      "city": "Pantelleria",
      "countryCode": "IT"
  },
  {
      "label": "PNN",
      "city": "Princeton",
      "countryCode": "US"
  },
  {
      "label": "PNO",
      "city": "Pinotepa Nacional",
      "countryCode": "MX"
  },
  {
      "label": "PNP",
      "city": "Popondetta",
      "countryCode": "PG"
  },
  {
      "label": "PNR",
      "city": "Pointe Noire",
      "countryCode": "CG"
  },
  {
      "label": "PNS",
      "city": "Pensacola",
      "countryCode": "US"
  },
  {
      "label": "PNT",
      "city": "Puerto Natales",
      "countryCode": "CL"
  },
  {
      "label": "PNU",
      "city": "Panguitch",
      "countryCode": "US"
  },
  {
      "label": "PNV",
      "city": "Panevezys",
      "countryCode": "LT"
  },
  {
      "label": "PNX",
      "city": "Sherman Denison",
      "countryCode": "US"
  },
  {
      "label": "PNZ",
      "city": "Petrolina",
      "countryCode": "BR"
  },
  {
      "label": "POA",
      "city": "Porto Alegre",
      "countryCode": "BR"
  },
  {
      "label": "POC",
      "city": "La Verne",
      "countryCode": "US"
  },
  {
      "label": "POD",
      "city": "Podor",
      "countryCode": "SN"
  },
  {
      "label": "POE",
      "city": "Fort Polk",
      "countryCode": "US"
  },
  {
      "label": "POF",
      "city": "Poplar Bluff",
      "countryCode": "US"
  },
  {
      "label": "POG",
      "city": "Port Gentil",
      "countryCode": "GA"
  },
  {
      "label": "POH",
      "city": "Pocahontas",
      "countryCode": "US"
  },
  {
      "label": "POI",
      "city": "Potosi",
      "countryCode": "BO"
  },
  {
      "label": "POJ",
      "city": "Patos De Minas",
      "countryCode": "BR"
  },
  {
      "label": "POL",
      "city": "Pemba",
      "countryCode": "MZ"
  },
  {
      "label": "POM",
      "city": "Port Moresby",
      "countryCode": "PG"
  },
  {
      "label": "PON",
      "city": "Poptun",
      "countryCode": "GT"
  },
  {
      "label": "POO",
      "city": "Pocos De Caldas",
      "countryCode": "BR"
  },
  {
      "label": "POP",
      "city": "Puerto Plata",
      "countryCode": "DO"
  },
  {
      "label": "POQ",
      "city": "Polk Inlet",
      "countryCode": "US"
  },
  {
      "label": "POR",
      "city": "Pori",
      "countryCode": "FI"
  },
  {
      "label": "POS",
      "city": "Port Of Spain",
      "countryCode": "TT"
  },
  {
      "label": "POT",
      "city": "Port Antonio",
      "countryCode": "JM"
  },
  {
      "label": "POU",
      "city": "Poughkeepsie",
      "countryCode": "US"
  },
  {
      "label": "POV",
      "city": "Presov",
      "countryCode": "SK"
  },
  {
      "label": "POW",
      "city": "Portoroz",
      "countryCode": "SI"
  },
  {
      "label": "POX",
      "city": "Pontoise",
      "countryCode": "FR"
  },
  {
      "label": "POY",
      "city": "Powell",
      "countryCode": "US"
  },
  {
      "label": "POZ",
      "city": "Poznan",
      "countryCode": "PL"
  },
  {
      "label": "PPA",
      "city": "Pampa",
      "countryCode": "US"
  },
  {
      "label": "PPB",
      "city": "Presidente Pruden",
      "countryCode": "BR"
  },
  {
      "label": "PPC",
      "city": "Prospect Creek",
      "countryCode": "US"
  },
  {
      "label": "PPE",
      "city": "Puerto Penasco",
      "countryCode": "MX"
  },
  {
      "label": "PPF",
      "city": "Independence",
      "countryCode": "US"
  },
  {
      "label": "PPG",
      "city": "Pago Pago",
      "countryCode": "AS"
  },
  {
      "label": "PPH",
      "city": "Peraitepuy",
      "countryCode": "VE"
  },
  {
      "label": "PPI",
      "city": "Port Pirie",
      "countryCode": "AU"
  },
  {
      "label": "PPJ",
      "city": "Pulau Panjang",
      "countryCode": "ID"
  },
  {
      "label": "PPK",
      "city": "Petropavlovsk",
      "countryCode": "KZ"
  },
  {
      "label": "PPL",
      "city": "Phaplu",
      "countryCode": "NP"
  },
  {
      "label": "PPM",
      "city": "Pompano Beach",
      "countryCode": "US"
  },
  {
      "label": "PPN",
      "city": "Popayan",
      "countryCode": "CO"
  },
  {
      "label": "PPO",
      "city": "Powell Point",
      "countryCode": "BS"
  },
  {
      "label": "PPP",
      "city": "Proserpine",
      "countryCode": "AU"
  },
  {
      "label": "PPQ",
      "city": "Paraparaumu",
      "countryCode": "NZ"
  },
  {
      "label": "PPR",
      "city": "Pasir Pangarayan",
      "countryCode": "ID"
  },
  {
      "label": "PPS",
      "city": "Puerto Princesa",
      "countryCode": "PH"
  },
  {
      "label": "PPT",
      "city": "Papeete",
      "countryCode": "PF"
  },
  {
      "label": "PPU",
      "city": "Papun",
      "countryCode": "MM"
  },
  {
      "label": "PPV",
      "city": "Port Protection",
      "countryCode": "US"
  },
  {
      "label": "PPW",
      "city": "Papa Westray",
      "countryCode": "GB"
  },
  {
      "label": "PPX",
      "city": "Param",
      "countryCode": "PG"
  },
  {
      "label": "PPZ",
      "city": "Puerto Paez",
      "countryCode": "VE"
  },
  {
      "label": "PQC",
      "city": "Phu Quoc",
      "countryCode": "VN"
  },
  {
      "label": "PQI",
      "city": "Presque Isle",
      "countryCode": "US"
  },
  {
      "label": "PQM",
      "city": "Palenque",
      "countryCode": "MX"
  },
  {
      "label": "PQQ",
      "city": "Port Macquarie",
      "countryCode": "AU"
  },
  {
      "label": "PQS",
      "city": "Pilot Station",
      "countryCode": "US"
  },
  {
      "label": "PRA",
      "city": "Parana",
      "countryCode": "AR"
  },
  {
      "label": "PRB",
      "city": "Paso Robles",
      "countryCode": "US"
  },
  {
      "label": "PRC",
      "city": "Prescott",
      "countryCode": "US"
  },
  {
      "label": "PRD",
      "city": "Pardoo",
      "countryCode": "AU"
  },
  {
      "label": "PRE",
      "city": "Pore",
      "countryCode": "CO"
  },
  {
      "label": "PRF",
      "city": "Port Johnson",
      "countryCode": "US"
  },
  {
      "label": "PRG",
      "city": "Prague",
      "countryCode": "CZ"
  },
  {
      "label": "PRH",
      "city": "Phrae",
      "countryCode": "TH"
  },
  {
      "label": "PRI",
      "city": "Praslin Island",
      "countryCode": "SC"
  },
  {
      "label": "PRJ",
      "city": "Capri",
      "countryCode": "IT"
  },
  {
      "label": "PRK",
      "city": "Prieska",
      "countryCode": "ZA"
  },
  {
      "label": "PRL",
      "city": "Port Oceanic",
      "countryCode": "US"
  },
  {
      "label": "PRM",
      "city": "Portimao",
      "countryCode": "PT"
  },
  {
      "label": "PRN",
      "city": "Pristina",
      "countryCode": "YU"
  },
  {
      "label": "PRO",
      "city": "Perry",
      "countryCode": "US"
  },
  {
      "label": "PRP",
      "city": "Propriano",
      "countryCode": "FR"
  },
  {
      "label": "PRQ",
      "city": "Pres Roque Saenz",
      "countryCode": "AR"
  },
  {
      "label": "PRR",
      "city": "Paruima",
      "countryCode": "GY"
  },
  {
      "label": "PRS",
      "city": "Parasi",
      "countryCode": "SB"
  },
  {
      "label": "PRU",
      "city": "Prome",
      "countryCode": "MM"
  },
  {
      "label": "PRV",
      "city": "Prerov",
      "countryCode": "CZ"
  },
  {
      "label": "PRW",
      "city": "Prentice",
      "countryCode": "US"
  },
  {
      "label": "PRX",
      "city": "Paris",
      "countryCode": "US"
  },
  {
      "label": "PRY",
      "city": "Pretoria",
      "countryCode": "ZA"
  },
  {
      "label": "PRZ",
      "city": "Prineville",
      "countryCode": "US"
  },
  {
      "label": "PSA",
      "city": "Pisa",
      "countryCode": "IT"
  },
  {
      "label": "PSB",
      "city": "Philipsburg",
      "countryCode": "US"
  },
  {
      "label": "PSC",
      "city": "Pasco",
      "countryCode": "US"
  },
  {
      "label": "PSD",
      "city": "Port Said",
      "countryCode": "EG"
  },
  {
      "label": "PSE",
      "city": "Ponce",
      "countryCode": "PR"
  },
  {
      "label": "PSF",
      "city": "Pittsfield",
      "countryCode": "US"
  },
  {
      "label": "PSG",
      "city": "Petersburg",
      "countryCode": "US"
  },
  {
      "label": "PSH",
      "city": "St Peter",
      "countryCode": "DE"
  },
  {
      "label": "PSI",
      "city": "Pasni",
      "countryCode": "PK"
  },
  {
      "label": "PSJ",
      "city": "Poso",
      "countryCode": "ID"
  },
  {
      "label": "PSK",
      "city": "Dublin",
      "countryCode": "US"
  },
  {
      "label": "PSL",
      "city": "Perth",
      "countryCode": "GB"
  },
  {
      "label": "PSN",
      "city": "Palestine",
      "countryCode": "US"
  },
  {
      "label": "PSO",
      "city": "Pasto",
      "countryCode": "CO"
  },
  {
      "label": "PSP",
      "city": "Palm Springs",
      "countryCode": "US"
  },
  {
      "label": "PSR",
      "city": "Pescara",
      "countryCode": "IT"
  },
  {
      "label": "PSS",
      "city": "Posadas",
      "countryCode": "AR"
  },
  {
      "label": "PST",
      "city": "Preston",
      "countryCode": "CU"
  },
  {
      "label": "PSU",
      "city": "Putussibau",
      "countryCode": "ID"
  },
  {
      "label": "PSV",
      "city": "Papa Stour",
      "countryCode": "GB"
  },
  {
      "label": "PSW",
      "city": "Passos",
      "countryCode": "BR"
  },
  {
      "label": "PSX",
      "city": "Palacios",
      "countryCode": "US"
  },
  {
      "label": "PSY",
      "city": "Port Stanley",
      "countryCode": "FK"
  },
  {
      "label": "PSZ",
      "city": "Puerto Suarez",
      "countryCode": "BO"
  },
  {
      "label": "PTA",
      "city": "Port Alsworth",
      "countryCode": "US"
  },
  {
      "label": "PTB",
      "city": "Petersburg",
      "countryCode": "US"
  },
  {
      "label": "PTC",
      "city": "Port Alice",
      "countryCode": "US"
  },
  {
      "label": "PTD",
      "city": "Port Alexander",
      "countryCode": "US"
  },
  {
      "label": "PTE",
      "city": "Port Stephens",
      "countryCode": "AU"
  },
  {
      "label": "PTF",
      "city": "Malololailai",
      "countryCode": "FJ"
  },
  {
      "label": "PTG",
      "city": "Pietersburg",
      "countryCode": "ZA"
  },
  {
      "label": "PTH",
      "city": "Port Heiden",
      "countryCode": "US"
  },
  {
      "label": "PTI",
      "city": "Port Douglas",
      "countryCode": "AU"
  },
  {
      "label": "PTJ",
      "city": "Portland",
      "countryCode": "AU"
  },
  {
      "label": "PTK",
      "city": "Pontiac",
      "countryCode": "US"
  },
  {
      "label": "PTL",
      "city": "Port Armstrong",
      "countryCode": "US"
  },
  {
      "label": "PTM",
      "city": "Palmarito",
      "countryCode": "VE"
  },
  {
      "label": "PTO",
      "city": "Pato Branco",
      "countryCode": "BR"
  },
  {
      "label": "PTP",
      "city": "Pointe A Pitre",
      "countryCode": "GP"
  },
  {
      "label": "PTQ",
      "city": "Porto De Moz",
      "countryCode": "BR"
  },
  {
      "label": "PTR",
      "city": "Pleasant Harbour",
      "countryCode": "US"
  },
  {
      "label": "PTS",
      "city": "Pittsburg",
      "countryCode": "US"
  },
  {
      "label": "PTT",
      "city": "Pratt",
      "countryCode": "US"
  },
  {
      "label": "PTU",
      "city": "Platinum",
      "countryCode": "US"
  },
  {
      "label": "PTV",
      "city": "Porterville",
      "countryCode": "US"
  },
  {
      "label": "PTW",
      "city": "Pottstown",
      "countryCode": "US"
  },
  {
      "label": "PTX",
      "city": "Pitalito",
      "countryCode": "CO"
  },
  {
      "label": "PTY",
      "city": "Panama City",
      "countryCode": "PA"
  },
  {
      "label": "PTZ",
      "city": "Pastaza",
      "countryCode": "EC"
  },
  {
      "label": "PUA",
      "city": "Puas",
      "countryCode": "PG"
  },
  {
      "label": "PUB",
      "city": "Pueblo",
      "countryCode": "US"
  },
  {
      "label": "PUC",
      "city": "Price",
      "countryCode": "US"
  },
  {
      "label": "PUD",
      "city": "Puerto Deseado",
      "countryCode": "AR"
  },
  {
      "label": "PUE",
      "city": "Puerto Obaldia",
      "countryCode": "PA"
  },
  {
      "label": "PUF",
      "city": "Pau",
      "countryCode": "FR"
  },
  {
      "label": "PUG",
      "city": "Port Augusta",
      "countryCode": "AU"
  },
  {
      "label": "PUH",
      "city": "Pochutla",
      "countryCode": "MX"
  },
  {
      "label": "PUI",
      "city": "Pureni",
      "countryCode": "PG"
  },
  {
      "label": "PUJ",
      "city": "Punta Cana",
      "countryCode": "DO"
  },
  {
      "label": "PUK",
      "city": "Pukarua",
      "countryCode": "PF"
  },
  {
      "label": "PUL",
      "city": "Poulsbo",
      "countryCode": "US"
  },
  {
      "label": "PUM",
      "city": "Pomala",
      "countryCode": "ID"
  },
  {
      "label": "PUN",
      "city": "Punia",
      "countryCode": "CD"
  },
  {
      "label": "PUO",
      "city": "Prudhoe Bay",
      "countryCode": "US"
  },
  {
      "label": "PUP",
      "city": "Po",
      "countryCode": "BF"
  },
  {
      "label": "PUQ",
      "city": "Punta Arenas",
      "countryCode": "CL"
  },
  {
      "label": "PUR",
      "city": "Puerto Rico",
      "countryCode": "BO"
  },
  {
      "label": "PUS",
      "city": "Pusan",
      "countryCode": "KR"
  },
  {
      "label": "PUU",
      "city": "Puerto Asis",
      "countryCode": "CO"
  },
  {
      "label": "PUV",
      "city": "Poum",
      "countryCode": "NC"
  },
  {
      "label": "PUW",
      "city": "Pullman",
      "countryCode": "US"
  },
  {
      "label": "PUX",
      "city": "Puerto Varas",
      "countryCode": "CL"
  },
  {
      "label": "PUY",
      "city": "Pula",
      "countryCode": "HR"
  },
  {
      "label": "PUZ",
      "city": "Puerto Cabezas",
      "countryCode": "NI"
  },
  {
      "label": "PVA",
      "city": "Providencia",
      "countryCode": "CO"
  },
  {
      "label": "PVC",
      "city": "Provincetown",
      "countryCode": "US"
  },
  {
      "label": "PVD",
      "city": "Providence",
      "countryCode": "US"
  },
  {
      "label": "PVE",
      "city": "El Porvenir",
      "countryCode": "PA"
  },
  {
      "label": "PVF",
      "city": "Placerville",
      "countryCode": "US"
  },
  {
      "label": "PVG",
      "city": "Shangai",
      "countryCode": "CN"
  },
  {
      "label": "PVH",
      "city": "Porto Velho",
      "countryCode": "BR"
  },
  {
      "label": "PVI",
      "city": "Paranavai",
      "countryCode": "BR"
  },
  {
      "label": "PVK",
      "city": "Preveza Lefkas",
      "countryCode": "GR"
  },
  {
      "label": "PVN",
      "city": "Pleven",
      "countryCode": "BG"
  },
  {
      "label": "PVO",
      "city": "Portoviejo",
      "countryCode": "EC"
  },
  {
      "label": "PVR",
      "city": "Puerto Vallarta",
      "countryCode": "MX"
  },
  {
      "label": "PVS",
      "city": "Provideniya",
      "countryCode": "RU"
  },
  {
      "label": "PVU",
      "city": "Provo",
      "countryCode": "US"
  },
  {
      "label": "PVW",
      "city": "Plainview",
      "countryCode": "US"
  },
  {
      "label": "PVX",
      "city": "Provedenia",
      "countryCode": "RU"
  },
  {
      "label": "PVY",
      "city": "Pope Vanoy",
      "countryCode": "US"
  },
  {
      "label": "PVZ",
      "city": "Painesville",
      "countryCode": "US"
  },
  {
      "label": "PWD",
      "city": "Plentywood",
      "countryCode": "US"
  },
  {
      "label": "PWE",
      "city": "Pevek",
      "countryCode": "RU"
  },
  {
      "label": "PWI",
      "city": "Pawi",
      "countryCode": "ET"
  },
  {
      "label": "PWL",
      "city": "Purwokerto",
      "countryCode": "ID"
  },
  {
      "label": "PWM",
      "city": "Portland",
      "countryCode": "US"
  },
  {
      "label": "PWN",
      "city": "Pitts Town",
      "countryCode": "BS"
  },
  {
      "label": "PWO",
      "city": "Pweto",
      "countryCode": "CD"
  },
  {
      "label": "PWQ",
      "city": "Pavlodar",
      "countryCode": "KZ"
  },
  {
      "label": "PWR",
      "city": "Port Walter",
      "countryCode": "US"
  },
  {
      "label": "PWT",
      "city": "Bremerton",
      "countryCode": "US"
  },
  {
      "label": "PXL",
      "city": "Polacca",
      "countryCode": "US"
  },
  {
      "label": "PXM",
      "city": "Puerto Escondido",
      "countryCode": "MX"
  },
  {
      "label": "PXO",
      "city": "Porto Santo",
      "countryCode": "PT"
  },
  {
      "label": "PXU",
      "city": "Pleiku",
      "countryCode": "VN"
  },
  {
      "label": "PYA",
      "city": "Puerto Boyaca",
      "countryCode": "CO"
  },
  {
      "label": "PYC",
      "city": "Playon Chico",
      "countryCode": "PA"
  },
  {
      "label": "PYE",
      "city": "Penrhyn Island",
      "countryCode": "CK"
  },
  {
      "label": "PYH",
      "city": "Puerto Ayacucho",
      "countryCode": "VE"
  },
  {
      "label": "PYJ",
      "city": "Polyarnyj",
      "countryCode": "RU"
  },
  {
      "label": "PYM",
      "city": "Plymouth",
      "countryCode": "US"
  },
  {
      "label": "PYN",
      "city": "Payan",
      "countryCode": "CO"
  },
  {
      "label": "PYO",
      "city": "Putumayo",
      "countryCode": "EC"
  },
  {
      "label": "PYR",
      "city": "Pyrgos",
      "countryCode": "GR"
  },
  {
      "label": "PYV",
      "city": "Yaviza",
      "countryCode": "PA"
  },
  {
      "label": "PZA",
      "city": "Paz De Ariporo",
      "countryCode": "CO"
  },
  {
      "label": "PZB",
      "city": "Pietermaritzburg",
      "countryCode": "ZA"
  },
  {
      "label": "PZE",
      "city": "Penzance",
      "countryCode": "GB"
  },
  {
      "label": "PZH",
      "city": "Zhob",
      "countryCode": "PK"
  },
  {
      "label": "PZK",
      "city": "Puka Puka Island",
      "countryCode": "CK"
  },
  {
      "label": "PZO",
      "city": "Puerto Ordaz",
      "countryCode": "VE"
  },
  {
      "label": "PZU",
      "city": "Port Sudan",
      "countryCode": "SD"
  },
  {
      "label": "PZY",
      "city": "Piestany",
      "countryCode": "SK"
  },
  {
      "label": "QAB",
      "city": "Brusque",
      "countryCode": "BR"
  },
  {
      "label": "QAC",
      "city": "Castro",
      "countryCode": "BR"
  },
  {
      "label": "QAD",
      "city": "Pordenone",
      "countryCode": "IT"
  },
  {
      "label": "QAE",
      "city": "Arzew",
      "countryCode": "DZ"
  },
  {
      "label": "QAF",
      "city": "Offline Point",
      "countryCode": "FR"
  },
  {
      "label": "QAG",
      "city": "El Ghazaouet",
      "countryCode": "DZ"
  },
  {
      "label": "QAH",
      "city": "Alcantara",
      "countryCode": "BR"
  },
  {
      "label": "QAI",
      "city": "Aime",
      "countryCode": "FR"
  },
  {
      "label": "QAJ",
      "city": "Ajman City",
      "countryCode": "AE"
  },
  {
      "label": "QAK",
      "city": "Barbacena",
      "countryCode": "BR"
  },
  {
      "label": "QAL",
      "city": "Alessandria",
      "countryCode": "IT"
  },
  {
      "label": "QAM",
      "city": "Amiens",
      "countryCode": "FR"
  },
  {
      "label": "QAN",
      "city": "Nedroma",
      "countryCode": "DZ"
  },
  {
      "label": "QAO",
      "city": "Agrigento",
      "countryCode": "IT"
  },
  {
      "label": "QAP",
      "city": "Apapa",
      "countryCode": "NG"
  },
  {
      "label": "QAQ",
      "city": "L'Aquila",
      "countryCode": "IT"
  },
  {
      "label": "QAR",
      "city": "Arnhem",
      "countryCode": "NL"
  },
  {
      "label": "QAS",
      "city": "Ech Cheliff",
      "countryCode": "DZ"
  },
  {
      "label": "QAT",
      "city": "Abeokuta",
      "countryCode": "NG"
  },
  {
      "label": "QAU",
      "city": "Bebedouro",
      "countryCode": "BR"
  },
  {
      "label": "QAV",
      "city": "Benjamin Constant",
      "countryCode": "BR"
  },
  {
      "label": "QAW",
      "city": "Anniston",
      "countryCode": "US"
  },
  {
      "label": "QAX",
      "city": "Aba",
      "countryCode": "NG"
  },
  {
      "label": "QAY",
      "city": "Alba Iulia",
      "countryCode": "RO"
  },
  {
      "label": "QAZ",
      "city": "Zakopane",
      "countryCode": "PL"
  },
  {
      "label": "QBA",
      "city": "Budva",
      "countryCode": "YU"
  },
  {
      "label": "QBB",
      "city": "Bel Abbes",
      "countryCode": "DZ"
  },
  {
      "label": "QBC",
      "city": "Bella Coola",
      "countryCode": "CA"
  },
  {
      "label": "QBD",
      "city": "Barra Do Pirai",
      "countryCode": "BR"
  },
  {
      "label": "QBE",
      "city": "Bega",
      "countryCode": "AU"
  },
  {
      "label": "QBF",
      "city": "Vail Eagle",
      "countryCode": "US"
  },
  {
      "label": "QBG",
      "city": "Pancevo",
      "countryCode": "YU"
  },
  {
      "label": "QBH",
      "city": "Levallois",
      "countryCode": "FR"
  },
  {
      "label": "QBI",
      "city": "Bitola",
      "countryCode": "MK"
  },
  {
      "label": "QBJ",
      "city": "Bordj Bou Arreri",
      "countryCode": "DZ"
  },
  {
      "label": "QBK",
      "city": "Betim",
      "countryCode": "BR"
  },
  {
      "label": "QBL",
      "city": "Bani Walid",
      "countryCode": "LY"
  },
  {
      "label": "QBM",
      "city": "Bourg St Maurice",
      "countryCode": "FR"
  },
  {
      "label": "QBN",
      "city": "Barra Mansa",
      "countryCode": "BR"
  },
  {
      "label": "QBO",
      "city": "Bochum",
      "countryCode": "DE"
  },
  {
      "label": "QBP",
      "city": "Ain Beida",
      "countryCode": "DZ"
  },
  {
      "label": "QBQ",
      "city": "Besancon",
      "countryCode": "FR"
  },
  {
      "label": "QBR",
      "city": "Bandar Khomeini",
      "countryCode": "IR"
  },
  {
      "label": "QBS",
      "city": "Brescia",
      "countryCode": "IT"
  },
  {
      "label": "QBT",
      "city": "Bettioua",
      "countryCode": "DZ"
  },
  {
      "label": "QBU",
      "city": "Bauchi",
      "countryCode": "NG"
  },
  {
      "label": "QBV",
      "city": "Benevento",
      "countryCode": "IT"
  },
  {
      "label": "QBW",
      "city": "Batemans Bay",
      "countryCode": "AU"
  },
  {
      "label": "QBX",
      "city": "Sobral",
      "countryCode": "BR"
  },
  {
      "label": "QBY",
      "city": "Bistrita Nasaud",
      "countryCode": "RO"
  },
  {
      "label": "QBZ",
      "city": "Bouira",
      "countryCode": "DZ"
  },
  {
      "label": "QCA",
      "city": "Makkah",
      "countryCode": "SA"
  },
  {
      "label": "QCB",
      "city": "Chiba City",
      "countryCode": "JP"
  },
  {
      "label": "QCC",
      "city": "Camacari",
      "countryCode": "BR"
  },
  {
      "label": "QCD",
      "city": "Campo Bom",
      "countryCode": "BR"
  },
  {
      "label": "QCE",
      "city": "Copper Mountain",
      "countryCode": "US"
  },
  {
      "label": "QCF",
      "city": "Birigui",
      "countryCode": "BR"
  },
  {
      "label": "QCG",
      "city": "Cataguases",
      "countryCode": "BR"
  },
  {
      "label": "QCH",
      "city": "Colatina",
      "countryCode": "BR"
  },
  {
      "label": "QCI",
      "city": "Playa Delos Cristianos",
      "countryCode": "ES"
  },
  {
      "label": "QCJ",
      "city": "Botucatu",
      "countryCode": "BR"
  },
  {
      "label": "QCK",
      "city": "Cabo Frio",
      "countryCode": "BR"
  },
  {
      "label": "QCL",
      "city": "Caltanissetta",
      "countryCode": "IT"
  },
  {
      "label": "QCM",
      "city": "Como",
      "countryCode": "IT"
  },
  {
      "label": "QCN",
      "city": "Canela",
      "countryCode": "BR"
  },
  {
      "label": "QCO",
      "city": "Colon",
      "countryCode": "CU"
  },
  {
      "label": "QCP",
      "city": "Currais Novos",
      "countryCode": "BR"
  },
  {
      "label": "QCQ",
      "city": "Caraguatatuba",
      "countryCode": "BR"
  },
  {
      "label": "QCR",
      "city": "Curitibanos",
      "countryCode": "BR"
  },
  {
      "label": "QCS",
      "city": "Cosenza",
      "countryCode": "IT"
  },
  {
      "label": "QCT",
      "city": "Bacita",
      "countryCode": "NG"
  },
  {
      "label": "QCU",
      "city": "Akunnaaq",
      "countryCode": "GL"
  },
  {
      "label": "QCV",
      "city": "Guarulhos",
      "countryCode": "BR"
  },
  {
      "label": "QCW",
      "city": "Wilton",
      "countryCode": "US"
  },
  {
      "label": "QCX",
      "city": "Sao Caetano Do Sul",
      "countryCode": "BR"
  },
  {
      "label": "QCY",
      "city": "Coningsby",
      "countryCode": "GB"
  },
  {
      "label": "QCZ",
      "city": "Catanzaro",
      "countryCode": "IT"
  },
  {
      "label": "QDA",
      "city": "Charqueada",
      "countryCode": "BR"
  },
  {
      "label": "QDB",
      "city": "Cachoeira Do Sul",
      "countryCode": "BR"
  },
  {
      "label": "QDC",
      "city": "Dracena",
      "countryCode": "BR"
  },
  {
      "label": "QDD",
      "city": "Botosani",
      "countryCode": "RO"
  },
  {
      "label": "QDE",
      "city": "Catanduva",
      "countryCode": "BR"
  },
  {
      "label": "QDF",
      "city": "Conselheiro Lafai",
      "countryCode": "BR"
  },
  {
      "label": "QDG",
      "city": "Ostrow Wiekloposk",
      "countryCode": "PL"
  },
  {
      "label": "QDI",
      "city": "Dornbirn",
      "countryCode": "AT"
  },
  {
      "label": "QDJ",
      "city": "Djelfa",
      "countryCode": "DZ"
  },
  {
      "label": "QDM",
      "city": "Dammam",
      "countryCode": "HK"
  },
  {
      "label": "QDN",
      "city": "Eden",
      "countryCode": "AU"
  },
  {
      "label": "QDO",
      "city": "Icoaraci",
      "countryCode": "BR"
  },
  {
      "label": "QDP",
      "city": "Dom Pedrito",
      "countryCode": "BR"
  },
  {
      "label": "QDQ",
      "city": "Duque De Caxias",
      "countryCode": "BR"
  },
  {
      "label": "QDR",
      "city": "Dera'A",
      "countryCode": "SY"
  },
  {
      "label": "QDS",
      "city": "Itajuba",
      "countryCode": "BR"
  },
  {
      "label": "QDT",
      "city": "Sedrata",
      "countryCode": "DZ"
  },
  {
      "label": "QDV",
      "city": "Jundiai",
      "countryCode": "BR"
  },
  {
      "label": "QDW",
      "city": "Diadema",
      "countryCode": "BR"
  },
  {
      "label": "QDX",
      "city": "Damietta",
      "countryCode": "EG"
  },
  {
      "label": "QDY",
      "city": "Andong",
      "countryCode": "KR"
  },
  {
      "label": "QDZ",
      "city": "Saida",
      "countryCode": "DZ"
  },
  {
      "label": "QEA",
      "city": "Teramo",
      "countryCode": "IT"
  },
  {
      "label": "QEB",
      "city": "Maebashi",
      "countryCode": "JP"
  },
  {
      "label": "QEC",
      "city": "Elmarj City",
      "countryCode": "LY"
  },
  {
      "label": "QED",
      "city": "Medea",
      "countryCode": "DZ"
  },
  {
      "label": "QEE",
      "city": "Ebeye",
      "countryCode": "MH"
  },
  {
      "label": "QEG",
      "city": "Ribeira Grande",
      "countryCode": "PT"
  },
  {
      "label": "QEH",
      "city": "El Hadjar",
      "countryCode": "DZ"
  },
  {
      "label": "QEI",
      "city": "Crailsheim",
      "countryCode": "DE"
  },
  {
      "label": "QEJ",
      "city": "Elgarhbolli",
      "countryCode": "LY"
  },
  {
      "label": "QEK",
      "city": "El Mahalla El Kob",
      "countryCode": "EG"
  },
  {
      "label": "QEL",
      "city": "Wellington",
      "countryCode": "AU"
  },
  {
      "label": "QEM",
      "city": "Elmanzala",
      "countryCode": "EG"
  },
  {
      "label": "QEO",
      "city": "Bielsko Biala",
      "countryCode": "PL"
  },
  {
      "label": "QEP",
      "city": "Tarnobrzeg",
      "countryCode": "PL"
  },
  {
      "label": "QEQ",
      "city": "Embrach",
      "countryCode": "CH"
  },
  {
      "label": "QER",
      "city": "Shehr",
      "countryCode": "YE"
  },
  {
      "label": "QET",
      "city": "Taedok",
      "countryCode": "KR"
  },
  {
      "label": "QEU",
      "city": "Parnamirim",
      "countryCode": "BR"
  },
  {
      "label": "QEV",
      "city": "Courbevoie",
      "countryCode": "FR"
  },
  {
      "label": "QEW",
      "city": "Leicester",
      "countryCode": "GB"
  },
  {
      "label": "QEX",
      "city": "Emmerich",
      "countryCode": "DE"
  },
  {
      "label": "QEY",
      "city": "Qeqertarsuatsiaat",
      "countryCode": "GL"
  },
  {
      "label": "QEZ",
      "city": "Pomezia",
      "countryCode": "IT"
  },
  {
      "label": "QFA",
      "city": "Aalsmeer",
      "countryCode": "NL"
  },
  {
      "label": "QFB",
      "city": "Freiburg",
      "countryCode": "DE"
  },
  {
      "label": "QFC",
      "city": "Creteil",
      "countryCode": "FR"
  },
  {
      "label": "QFD",
      "city": "Boufarik",
      "countryCode": "DZ"
  },
  {
      "label": "QFE",
      "city": "Ft Benning",
      "countryCode": "US"
  },
  {
      "label": "QFF",
      "city": "Brooklyn",
      "countryCode": "US"
  },
  {
      "label": "QFG",
      "city": "Eqalugaarsuit",
      "countryCode": "GL"
  },
  {
      "label": "QFH",
      "city": "Frederikshavn",
      "countryCode": "DK"
  },
  {
      "label": "QFI",
      "city": "Iginniarfik",
      "countryCode": "GL"
  },
  {
      "label": "QFJ",
      "city": "Alluitsup",
      "countryCode": "GL"
  },
  {
      "label": "QFK",
      "city": "Selje Harbour",
      "countryCode": "NO"
  },
  {
      "label": "QFL",
      "city": "Freilassing",
      "countryCode": "DE"
  },
  {
      "label": "QFM",
      "city": "Meet Ghamr",
      "countryCode": "EG"
  },
  {
      "label": "QFN",
      "city": "Narsaq Kujalleq",
      "countryCode": "GL"
  },
  {
      "label": "QFO",
      "city": "Duxford",
      "countryCode": "GB"
  },
  {
      "label": "QFQ",
      "city": "Maloy Harbour",
      "countryCode": "NO"
  },
  {
      "label": "QFR",
      "city": "Frosinone",
      "countryCode": "IT"
  },
  {
      "label": "QFS",
      "city": "Sao Francisco",
      "countryCode": "BR"
  },
  {
      "label": "QFT",
      "city": "Qassiarsuk",
      "countryCode": "GL"
  },
  {
      "label": "QFU",
      "city": "Corralejo",
      "countryCode": "ES"
  },
  {
      "label": "QFV",
      "city": "Bergen Harbour",
      "countryCode": "NO"
  },
  {
      "label": "QFW",
      "city": "Fort Washington",
      "countryCode": "US"
  },
  {
      "label": "QFX",
      "city": "Igaliku",
      "countryCode": "GL"
  },
  {
      "label": "QFY",
      "city": "Fukuyama",
      "countryCode": "JP"
  },
  {
      "label": "QGA",
      "city": "Guaira",
      "countryCode": "BR"
  },
  {
      "label": "QGB",
      "city": "Limeira",
      "countryCode": "BR"
  },
  {
      "label": "QGC",
      "city": "Lencois Paulista",
      "countryCode": "BR"
  },
  {
      "label": "QGD",
      "city": "Monte Alegre",
      "countryCode": "BR"
  },
  {
      "label": "QGE",
      "city": "Guelma",
      "countryCode": "DZ"
  },
  {
      "label": "QGF",
      "city": "Monte Negro",
      "countryCode": "BR"
  },
  {
      "label": "QGG",
      "city": "Agedabia",
      "countryCode": "LY"
  },
  {
      "label": "QGH",
      "city": "Gherian",
      "countryCode": "LY"
  },
  {
      "label": "QGI",
      "city": "Ilha Do Governador",
      "countryCode": "BR"
  },
  {
      "label": "QGJ",
      "city": "Nova Friburgo",
      "countryCode": "BR"
  },
  {
      "label": "QGK",
      "city": "Palmares",
      "countryCode": "BR"
  },
  {
      "label": "QGL",
      "city": "St Gallen",
      "countryCode": "CH"
  },
  {
      "label": "QGM",
      "city": "Chelghoum Laid",
      "countryCode": "DZ"
  },
  {
      "label": "QGN",
      "city": "Tarragona",
      "countryCode": "ES"
  },
  {
      "label": "QGO",
      "city": "Gorizia",
      "countryCode": "IT"
  },
  {
      "label": "QGP",
      "city": "Garanhuns",
      "countryCode": "BR"
  },
  {
      "label": "QGQ",
      "city": "Attu",
      "countryCode": "GL"
  },
  {
      "label": "QGR",
      "city": "Kangerluk",
      "countryCode": "GL"
  },
  {
      "label": "QGS",
      "city": "Alagoinhas",
      "countryCode": "BR"
  },
  {
      "label": "QGT",
      "city": "Moriguchi",
      "countryCode": "JP"
  },
  {
      "label": "QGU",
      "city": "Gifu",
      "countryCode": "JP"
  },
  {
      "label": "QGX",
      "city": "Gerga",
      "countryCode": "EG"
  },
  {
      "label": "QGY",
      "city": "Gyor",
      "countryCode": "HU"
  },
  {
      "label": "QGZ",
      "city": "San Sebastinan de la Gomera",
      "countryCode": "ES"
  },
  {
      "label": "QHA",
      "city": "Hasselt",
      "countryCode": "BE"
  },
  {
      "label": "QHB",
      "city": "Piracicaba",
      "countryCode": "BR"
  },
  {
      "label": "QHC",
      "city": "Rolandia",
      "countryCode": "BR"
  },
  {
      "label": "QHD",
      "city": "Hahnweide",
      "countryCode": "DE"
  },
  {
      "label": "QHE",
      "city": "Sao Bento Do Sul",
      "countryCode": "BR"
  },
  {
      "label": "QHF",
      "city": "Sao Sebastiao Do",
      "countryCode": "BR"
  },
  {
      "label": "QHG",
      "city": "Sete Lagoas",
      "countryCode": "BR"
  },
  {
      "label": "QHH",
      "city": "El Harrouche",
      "countryCode": "DZ"
  },
  {
      "label": "QHI",
      "city": "Chonburi",
      "countryCode": "TH"
  },
  {
      "label": "QHJ",
      "city": "Hjoerring",
      "countryCode": "DK"
  },
  {
      "label": "QHK",
      "city": "Shahrkord",
      "countryCode": "IR"
  },
  {
      "label": "QHL",
      "city": "Castanhal",
      "countryCode": "BR"
  },
  {
      "label": "QHM",
      "city": "Hama",
      "countryCode": "SY"
  },
  {
      "label": "QHN",
      "city": "Taguatinga",
      "countryCode": "BR"
  },
  {
      "label": "QHO",
      "city": "Oak Brook",
      "countryCode": "US"
  },
  {
      "label": "QHP",
      "city": "Taubate",
      "countryCode": "BR"
  },
  {
      "label": "QHQ",
      "city": "Cham",
      "countryCode": "DE"
  },
  {
      "label": "QHR",
      "city": "Harar",
      "countryCode": "ET"
  },
  {
      "label": "QHS",
      "city": "Homs",
      "countryCode": "SY"
  },
  {
      "label": "QHT",
      "city": "Terezopolis",
      "countryCode": "BR"
  },
  {
      "label": "QHU",
      "city": "Husum",
      "countryCode": "DE"
  },
  {
      "label": "QHV",
      "city": "Novo Hamburgo",
      "countryCode": "BR"
  },
  {
      "label": "QHW",
      "city": "Brooklyn",
      "countryCode": "US"
  },
  {
      "label": "QHX",
      "city": "Sohag",
      "countryCode": "EG"
  },
  {
      "label": "QHY",
      "city": "Hachioji City",
      "countryCode": "JP"
  },
  {
      "label": "QHZ",
      "city": "Hoofddorp",
      "countryCode": "NL"
  },
  {
      "label": "QIA",
      "city": "Itauna",
      "countryCode": "BR"
  },
  {
      "label": "QIB",
      "city": "Ibiruba",
      "countryCode": "BR"
  },
  {
      "label": "QIC",
      "city": "Siracusa",
      "countryCode": "IT"
  },
  {
      "label": "QID",
      "city": "Tres Coracoes",
      "countryCode": "BR"
  },
  {
      "label": "QIE",
      "city": "Istres",
      "countryCode": "FR"
  },
  {
      "label": "QIF",
      "city": "Isleworth",
      "countryCode": "GB"
  },
  {
      "label": "QIG",
      "city": "Iguatu",
      "countryCode": "BR"
  },
  {
      "label": "QIH",
      "city": "Tres Rios",
      "countryCode": "BR"
  },
  {
      "label": "QII",
      "city": "Lindau",
      "countryCode": "DE"
  },
  {
      "label": "QIJ",
      "city": "Gijon",
      "countryCode": "ES"
  },
  {
      "label": "QIK",
      "city": "Ikoyi",
      "countryCode": "NG"
  },
  {
      "label": "QIL",
      "city": "Sig",
      "countryCode": "DZ"
  },
  {
      "label": "QIM",
      "city": "Ain Mlila",
      "countryCode": "DZ"
  },
  {
      "label": "QIN",
      "city": "Mersin",
      "countryCode": "TR"
  },
  {
      "label": "QIO",
      "city": "Ain Temouchent",
      "countryCode": "DZ"
  },
  {
      "label": "QIP",
      "city": "Simbach",
      "countryCode": "DE"
  },
  {
      "label": "QIQ",
      "city": "Rio Claro",
      "countryCode": "BR"
  },
  {
      "label": "QIR",
      "city": "Irbid",
      "countryCode": "JO"
  },
  {
      "label": "QIS",
      "city": "Mito",
      "countryCode": "JP"
  },
  {
      "label": "QIT",
      "city": "Itapetinga",
      "countryCode": "BR"
  },
  {
      "label": "QIU",
      "city": "Ciudadela",
      "countryCode": "ES"
  },
  {
      "label": "QIV",
      "city": "Ismailia",
      "countryCode": "EG"
  },
  {
      "label": "QIX",
      "city": "Quixada",
      "countryCode": "BR"
  },
  {
      "label": "QIY",
      "city": "Bedarra Island",
      "countryCode": "AU"
  },
  {
      "label": "QIZ",
      "city": "Bizerte",
      "countryCode": "TN"
  },
  {
      "label": "QJA",
      "city": "Jaragua Do Sul",
      "countryCode": "BR"
  },
  {
      "label": "QJB",
      "city": "Jubail",
      "countryCode": "SA"
  },
  {
      "label": "QJC",
      "city": "Thimbu",
      "countryCode": "BT"
  },
  {
      "label": "QJD",
      "city": "Jindabyne",
      "countryCode": "AU"
  },
  {
      "label": "QJE",
      "city": "Kitsissuarsuit",
      "countryCode": "GL"
  },
  {
      "label": "QJF",
      "city": "Atammik",
      "countryCode": "GL"
  },
  {
      "label": "QJG",
      "city": "Itilleq",
      "countryCode": "GL"
  },
  {
      "label": "QJI",
      "city": "Ikamiut",
      "countryCode": "GL"
  },
  {
      "label": "QJK",
      "city": "Ajaokuta",
      "countryCode": "NG"
  },
  {
      "label": "QJL",
      "city": "Kjoellefjord",
      "countryCode": "NO"
  },
  {
      "label": "QJM",
      "city": "Brusque",
      "countryCode": "BR"
  },
  {
      "label": "QJN",
      "city": "Jounieh",
      "countryCode": "LB"
  },
  {
      "label": "QJO",
      "city": "Campos Do Jordao",
      "countryCode": "BR"
  },
  {
      "label": "QJP",
      "city": "Puchon City",
      "countryCode": "KR"
  },
  {
      "label": "QJQ",
      "city": "Jal Edib",
      "countryCode": "LB"
  },
  {
      "label": "QJR",
      "city": "La Junquera",
      "countryCode": "ES"
  },
  {
      "label": "QJS",
      "city": "Saeby",
      "countryCode": "DK"
  },
  {
      "label": "QJT",
      "city": "Napasoq",
      "countryCode": "GL"
  },
  {
      "label": "QJW",
      "city": "Kjellerup",
      "countryCode": "DK"
  },
  {
      "label": "QJX",
      "city": "Nong Khai",
      "countryCode": "TH"
  },
  {
      "label": "QJY",
      "city": "Kolobrzeg",
      "countryCode": "PL"
  },
  {
      "label": "QKA",
      "city": "Cachoeirinha",
      "countryCode": "DE"
  },
  {
      "label": "QKB",
      "city": "Breckenridge",
      "countryCode": "US"
  },
  {
      "label": "QKC",
      "city": "Karaj",
      "countryCode": "IR"
  },
  {
      "label": "QKD",
      "city": "Elk",
      "countryCode": "PL"
  },
  {
      "label": "QKE",
      "city": "Kabwe",
      "countryCode": "ZM"
  },
  {
      "label": "QKF",
      "city": "Krefeld",
      "countryCode": "DE"
  },
  {
      "label": "QKG",
      "city": "Chalkis",
      "countryCode": "GR"
  },
  {
      "label": "QKH",
      "city": "Kharian",
      "countryCode": "PK"
  },
  {
      "label": "QKI",
      "city": "Kielce",
      "countryCode": "PL"
  },
  {
      "label": "QKJ",
      "city": "Khenchela",
      "countryCode": "DZ"
  },
  {
      "label": "QKK",
      "city": "Karasjok",
      "countryCode": "NO"
  },
  {
      "label": "QKM",
      "city": "Gumi City",
      "countryCode": "KR"
  },
  {
      "label": "QKN",
      "city": "Kairouan",
      "countryCode": "TN"
  },
  {
      "label": "QKO",
      "city": "Khoms",
      "countryCode": "LY"
  },
  {
      "label": "QKP",
      "city": "Kruger National P",
      "countryCode": "ZA"
  },
  {
      "label": "QKQ",
      "city": "Anklam",
      "countryCode": "DE"
  },
  {
      "label": "QKR",
      "city": "Kourou",
      "countryCode": "GF"
  },
  {
      "label": "QKS",
      "city": "Keystone",
      "countryCode": "US"
  },
  {
      "label": "QKT",
      "city": "Kangaamiut",
      "countryCode": "GL"
  },
  {
      "label": "QKU",
      "city": "KÃ¶ln-Deutz Bhf Messe",
      "countryCode": "DE"
  },
  {
      "label": "QKV",
      "city": "Sakai",
      "countryCode": "JP"
  },
  {
      "label": "QKW",
      "city": "Kanazawa",
      "countryCode": "JP"
  },
  {
      "label": "QKX",
      "city": "Kautokeino",
      "countryCode": "NO"
  },
  {
      "label": "QKY",
      "city": "Wakayama",
      "countryCode": "JP"
  },
  {
      "label": "QKZ",
      "city": "Konstanz",
      "countryCode": "DE"
  },
  {
      "label": "QLA",
      "city": "Lasham",
      "countryCode": "GB"
  },
  {
      "label": "QLB",
      "city": "Lajeado",
      "countryCode": "BR"
  },
  {
      "label": "QLC",
      "city": "Gliwice",
      "countryCode": "PL"
  },
  {
      "label": "QLD",
      "city": "Blida",
      "countryCode": "DZ"
  },
  {
      "label": "QLE",
      "city": "Leeton",
      "countryCode": "AU"
  },
  {
      "label": "QLF",
      "city": "Lahti",
      "countryCode": "FI"
  },
  {
      "label": "QLG",
      "city": "Landshut",
      "countryCode": "DE"
  },
  {
      "label": "QLH",
      "city": "Kelsterbach",
      "countryCode": "DE"
  },
  {
      "label": "QLI",
      "city": "Limassol",
      "countryCode": "CY"
  },
  {
      "label": "QLJ",
      "city": "Lucerne",
      "countryCode": "CH"
  },
  {
      "label": "QLK",
      "city": "El Kala",
      "countryCode": "DZ"
  },
  {
      "label": "QLL",
      "city": "Sao Leopoldo",
      "countryCode": "BR"
  },
  {
      "label": "QLM",
      "city": "La Munoza",
      "countryCode": "ES"
  },
  {
      "label": "QLN",
      "city": "Sulmona",
      "countryCode": "IT"
  },
  {
      "label": "QLO",
      "city": "Loerrach",
      "countryCode": "DE"
  },
  {
      "label": "QLP",
      "city": "La Spezia",
      "countryCode": "IT"
  },
  {
      "label": "QLQ",
      "city": "Lerida",
      "countryCode": "ES"
  },
  {
      "label": "QLR",
      "city": "Leiria",
      "countryCode": "PT"
  },
  {
      "label": "QLS",
      "city": "Lausanne",
      "countryCode": "CH"
  },
  {
      "label": "QLT",
      "city": "Latina",
      "countryCode": "IT"
  },
  {
      "label": "QLU",
      "city": "Lublin",
      "countryCode": "PL"
  },
  {
      "label": "QLV",
      "city": "Olivos",
      "countryCode": "AR"
  },
  {
      "label": "QLW",
      "city": "Lavras",
      "countryCode": "BR"
  },
  {
      "label": "QLX",
      "city": "Lauterach",
      "countryCode": "AT"
  },
  {
      "label": "QLY",
      "city": "Playa Blanca",
      "countryCode": "ES"
  },
  {
      "label": "QMA",
      "city": "Matanzas",
      "countryCode": "CU"
  },
  {
      "label": "QMB",
      "city": "Panambi",
      "countryCode": "BR"
  },
  {
      "label": "QMC",
      "city": "Mairipora",
      "countryCode": "BR"
  },
  {
      "label": "QMD",
      "city": "Madaba",
      "countryCode": "JO"
  },
  {
      "label": "QME",
      "city": "Messina",
      "countryCode": "IT"
  },
  {
      "label": "QMF",
      "city": "Mafra",
      "countryCode": "BR"
  },
  {
      "label": "QMG",
      "city": "Maghnia",
      "countryCode": "DZ"
  },
  {
      "label": "QMH",
      "city": "Oum El Bouaghi",
      "countryCode": "DZ"
  },
  {
      "label": "QMI",
      "city": "Mogi Das Cruzes",
      "countryCode": "BR"
  },
  {
      "label": "QMJ",
      "city": "Masjed Soleyman",
      "countryCode": "IR"
  },
  {
      "label": "QMK",
      "city": "Niaqornaarsuk",
      "countryCode": "GL"
  },
  {
      "label": "QML",
      "city": "Mirpur",
      "countryCode": "PK"
  },
  {
      "label": "QMM",
      "city": "Marina Di Massa",
      "countryCode": "IT"
  },
  {
      "label": "QMN",
      "city": "Mbabane",
      "countryCode": "SZ"
  },
  {
      "label": "QMO",
      "city": "Mons",
      "countryCode": "BE"
  },
  {
      "label": "QMQ",
      "city": "Murzuq",
      "countryCode": "LY"
  },
  {
      "label": "QMR",
      "city": "Marsala",
      "countryCode": "IT"
  },
  {
      "label": "QMS",
      "city": "Masan",
      "countryCode": "KR"
  },
  {
      "label": "QMT",
      "city": "Mostaganem",
      "countryCode": "DZ"
  },
  {
      "label": "QMU",
      "city": "Moutiers",
      "countryCode": "FR"
  },
  {
      "label": "QMV",
      "city": "Montvale",
      "countryCode": "US"
  },
  {
      "label": "QMW",
      "city": "Mohammadia",
      "countryCode": "DZ"
  },
  {
      "label": "QMZ",
      "city": "Mainz",
      "countryCode": "DE"
  },
  {
      "label": "QNC",
      "city": "Neuchatel",
      "countryCode": "CH"
  },
  {
      "label": "QND",
      "city": "Novi Sad",
      "countryCode": "YU"
  },
  {
      "label": "QNE",
      "city": "Rio Negrinho",
      "countryCode": "BR"
  },
  {
      "label": "QNG",
      "city": "Nagano",
      "countryCode": "JP"
  },
  {
      "label": "QNH",
      "city": "Canoinhas",
      "countryCode": "BR"
  },
  {
      "label": "QNI",
      "city": "Onitsha",
      "countryCode": "NG"
  },
  {
      "label": "QNJ",
      "city": "Annemasse",
      "countryCode": "FR"
  },
  {
      "label": "QNK",
      "city": "Nsukka",
      "countryCode": "NG"
  },
  {
      "label": "QNL",
      "city": "Neuilly Sur Seine",
      "countryCode": "FR"
  },
  {
      "label": "QNM",
      "city": "Namur",
      "countryCode": "BE"
  },
  {
      "label": "QNN",
      "city": "Marina",
      "countryCode": "NG"
  },
  {
      "label": "QNO",
      "city": "Ascoli Piceno",
      "countryCode": "IT"
  },
  {
      "label": "QNP",
      "city": "Ayia Napa",
      "countryCode": "CY"
  },
  {
      "label": "QNQ",
      "city": "Malmo Town",
      "countryCode": "SE"
  },
  {
      "label": "QNR",
      "city": "Santa Cruz Rio Pardo",
      "countryCode": "BR"
  },
  {
      "label": "QNS",
      "city": "Canoas",
      "countryCode": "BR"
  },
  {
      "label": "QNT",
      "city": "Niteroi",
      "countryCode": "BR"
  },
  {
      "label": "QNU",
      "city": "Nuoro",
      "countryCode": "IT"
  },
  {
      "label": "QNV",
      "city": "Nova Iguacu",
      "countryCode": "BR"
  },
  {
      "label": "QNX",
      "city": "Macon",
      "countryCode": "FR"
  },
  {
      "label": "QNZ",
      "city": "Nara City",
      "countryCode": "JP"
  },
  {
      "label": "QOA",
      "city": "Mococa",
      "countryCode": "BR"
  },
  {
      "label": "QOB",
      "city": "Ansbach",
      "countryCode": "DE"
  },
  {
      "label": "QOC",
      "city": "Osasco",
      "countryCode": "BR"
  },
  {
      "label": "QOD",
      "city": "Osvaldo Cruz",
      "countryCode": "BR"
  },
  {
      "label": "QOG",
      "city": "Homburg",
      "countryCode": "DE"
  },
  {
      "label": "QOI",
      "city": "Cotia",
      "countryCode": "BR"
  },
  {
      "label": "QOJ",
      "city": "Sao Borja",
      "countryCode": "BR"
  },
  {
      "label": "QOK",
      "city": "Oeksfjord",
      "countryCode": "NO"
  },
  {
      "label": "QOL",
      "city": "Collo",
      "countryCode": "DZ"
  },
  {
      "label": "QOM",
      "city": "Omiya",
      "countryCode": "JP"
  },
  {
      "label": "QON",
      "city": "Arlon",
      "countryCode": "BE"
  },
  {
      "label": "QOO",
      "city": "Otsu City",
      "countryCode": "JP"
  },
  {
      "label": "QOP",
      "city": "Codroipo",
      "countryCode": "IT"
  },
  {
      "label": "QOQ",
      "city": "Saarloq",
      "countryCode": "GL"
  },
  {
      "label": "QOR",
      "city": "Ordu",
      "countryCode": "TR"
  },
  {
      "label": "QOS",
      "city": "Oristano",
      "countryCode": "IT"
  },
  {
      "label": "QOT",
      "city": "Otaru",
      "countryCode": "JP"
  },
  {
      "label": "QOU",
      "city": "Oued Rhiou",
      "countryCode": "DZ"
  },
  {
      "label": "QOV",
      "city": "Comuna Providenci",
      "countryCode": "CL"
  },
  {
      "label": "QOW",
      "city": "Owerri",
      "countryCode": "NG"
  },
  {
      "label": "QOX",
      "city": "Memmingen",
      "countryCode": "DE"
  },
  {
      "label": "QOY",
      "city": "Lomza",
      "countryCode": "PL"
  },
  {
      "label": "QOZ",
      "city": "Oued Zenati",
      "countryCode": "DZ"
  },
  {
      "label": "QPA",
      "city": "Padova",
      "countryCode": "IT"
  },
  {
      "label": "QPB",
      "city": "Campobasso",
      "countryCode": "IT"
  },
  {
      "label": "QPC",
      "city": "Plock",
      "countryCode": "PL"
  },
  {
      "label": "QPD",
      "city": "Pinar Del Rio",
      "countryCode": "CU"
  },
  {
      "label": "QPE",
      "city": "Petropolis",
      "countryCode": "BR"
  },
  {
      "label": "QPF",
      "city": "Pompeia",
      "countryCode": "BR"
  },
  {
      "label": "QPH",
      "city": "Palapye",
      "countryCode": "BW"
  },
  {
      "label": "QPI",
      "city": "Palmira",
      "countryCode": "CO"
  },
  {
      "label": "QPJ",
      "city": "Pecs",
      "countryCode": "HU"
  },
  {
      "label": "QPK",
      "city": "Strausberg",
      "countryCode": "DE"
  },
  {
      "label": "QPL",
      "city": "Ploiesti",
      "countryCode": "RO"
  },
  {
      "label": "QPM",
      "city": "Opole",
      "countryCode": "PL"
  },
  {
      "label": "QPN",
      "city": "Piatra Neamt",
      "countryCode": "RO"
  },
  {
      "label": "QPO",
      "city": "Potenza",
      "countryCode": "IT"
  },
  {
      "label": "QPP",
      "city": "Berlin",
      "countryCode": "DE"
  },
  {
      "label": "QPQ",
      "city": "Pinamar",
      "countryCode": "AR"
  },
  {
      "label": "QPR",
      "city": "Prato",
      "countryCode": "IT"
  },
  {
      "label": "QPS",
      "city": "Pirassununga",
      "countryCode": "BR"
  },
  {
      "label": "QPU",
      "city": "Porto Uniao",
      "countryCode": "BR"
  },
  {
      "label": "QPV",
      "city": "Perisher Valley",
      "countryCode": "AU"
  },
  {
      "label": "QPW",
      "city": "Kangaatsiaq",
      "countryCode": "GL"
  },
  {
      "label": "QPZ",
      "city": "Piacenza",
      "countryCode": "IT"
  },
  {
      "label": "QQA",
      "city": "Britrail Rail Zon",
      "countryCode": "GB"
  },
  {
      "label": "QQB",
      "city": "Britrail Pass",
      "countryCode": "GB"
  },
  {
      "label": "QQC",
      "city": "Family Pass",
      "countryCode": "GB"
  },
  {
      "label": "QQD",
      "city": "Dover Rail",
      "countryCode": "GB"
  },
  {
      "label": "QQE",
      "city": "Britrail Rail Zon",
      "countryCode": "GB"
  },
  {
      "label": "QQF",
      "city": "Flexi Pass",
      "countryCode": "GB"
  },
  {
      "label": "QQG",
      "city": "Britrail Rail Zon",
      "countryCode": "GB"
  },
  {
      "label": "QQH",
      "city": "Harwich",
      "countryCode": "GB"
  },
  {
      "label": "QQI",
      "city": "Britrail Rail Zon",
      "countryCode": "GB"
  },
  {
      "label": "QQJ",
      "city": "Britrail Rail Zon",
      "countryCode": "GB"
  },
  {
      "label": "QQL",
      "city": "Southeast Pass",
      "countryCode": "GB"
  },
  {
      "label": "QQO",
      "city": "Britrail Rail Zon",
      "countryCode": "GB"
  },
  {
      "label": "QQR",
      "city": "Ramsgate Rail",
      "countryCode": "GB"
  },
  {
      "label": "QQT",
      "city": "London Travelcard",
      "countryCode": "GB"
  },
  {
      "label": "QQV",
      "city": "Voucher",
      "countryCode": "GB"
  },
  {
      "label": "QQX",
      "city": "Bath",
      "countryCode": "GB"
  },
  {
      "label": "QQY",
      "city": "York",
      "countryCode": "GB"
  },
  {
      "label": "QQZ",
      "city": "Britrail Rail Zon",
      "countryCode": "GB"
  },
  {
      "label": "QRB",
      "city": "Ravensburg",
      "countryCode": "DE"
  },
  {
      "label": "QRC",
      "city": "Rancagua",
      "countryCode": "CL"
  },
  {
      "label": "QRD",
      "city": "Andradas",
      "countryCode": "BR"
  },
  {
      "label": "QRE",
      "city": "Carazinho",
      "countryCode": "BR"
  },
  {
      "label": "QRF",
      "city": "Bragado",
      "countryCode": "AR"
  },
  {
      "label": "QRG",
      "city": "Ragusa",
      "countryCode": "IT"
  },
  {
      "label": "QRH",
      "city": "Rotterdam",
      "countryCode": "NL"
  },
  {
      "label": "QRI",
      "city": "Rize",
      "countryCode": "TR"
  },
  {
      "label": "QRJ",
      "city": "Cariacica",
      "countryCode": "BR"
  },
  {
      "label": "QRK",
      "city": "Arcos",
      "countryCode": "BR"
  },
  {
      "label": "QRL",
      "city": "Marbella",
      "countryCode": "ES"
  },
  {
      "label": "QRM",
      "city": "Narromine",
      "countryCode": "AU"
  },
  {
      "label": "QRN",
      "city": "Muroran",
      "countryCode": "JP"
  },
  {
      "label": "QRO",
      "city": "Queretaro",
      "countryCode": "MX"
  },
  {
      "label": "QRP",
      "city": "Gramado",
      "countryCode": "BR"
  },
  {
      "label": "QRQ",
      "city": "Marmaris",
      "countryCode": "TR"
  },
  {
      "label": "QRR",
      "city": "Warren",
      "countryCode": "AU"
  },
  {
      "label": "QRS",
      "city": "Resita",
      "countryCode": "RO"
  },
  {
      "label": "QRT",
      "city": "Rieti",
      "countryCode": "IT"
  },
  {
      "label": "QRU",
      "city": "Rio Do Sul",
      "countryCode": "BR"
  },
  {
      "label": "QRV",
      "city": "Arras",
      "countryCode": "FR"
  },
  {
      "label": "QRW",
      "city": "Warri",
      "countryCode": "NG"
  },
  {
      "label": "QRX",
      "city": "Narooma",
      "countryCode": "AU"
  },
  {
      "label": "QRY",
      "city": "Ikerasaarsuk",
      "countryCode": "GL"
  },
  {
      "label": "QRZ",
      "city": "Resende",
      "countryCode": "BR"
  },
  {
      "label": "QSA",
      "city": "Sabadell",
      "countryCode": "ES"
  },
  {
      "label": "QSB",
      "city": "Sao Bernardo Do C",
      "countryCode": "BR"
  },
  {
      "label": "QSC",
      "city": "Sao Carlos",
      "countryCode": "BR"
  },
  {
      "label": "QSD",
      "city": "Sao Goncalo",
      "countryCode": "BR"
  },
  {
      "label": "QSE",
      "city": "Santo Andre",
      "countryCode": "BR"
  },
  {
      "label": "QSF",
      "city": "Setif",
      "countryCode": "DZ"
  },
  {
      "label": "QSH",
      "city": "Seeheim",
      "countryCode": "DE"
  },
  {
      "label": "QSI",
      "city": "Moshi",
      "countryCode": "TZ"
  },
  {
      "label": "QSJ",
      "city": "Sao Joao Del Rei",
      "countryCode": "BR"
  },
  {
      "label": "QSK",
      "city": "Souk Ahras",
      "countryCode": "DZ"
  },
  {
      "label": "QSL",
      "city": "Suru Lere",
      "countryCode": "NG"
  },
  {
      "label": "QSM",
      "city": "Uetersen",
      "countryCode": "DE"
  },
  {
      "label": "QSN",
      "city": "San Nicolas Bari",
      "countryCode": "CU"
  },
  {
      "label": "QSO",
      "city": "Sousse",
      "countryCode": "TN"
  },
  {
      "label": "QSQ",
      "city": "Sidon",
      "countryCode": "LB"
  },
  {
      "label": "QSR",
      "city": "Salerno",
      "countryCode": "IT"
  },
  {
      "label": "QSS",
      "city": "Sassari",
      "countryCode": "IT"
  },
  {
      "label": "QST",
      "city": "Izmit",
      "countryCode": "TR"
  },
  {
      "label": "QSU",
      "city": "Mansoura",
      "countryCode": "EG"
  },
  {
      "label": "QSV",
      "city": "Sovata",
      "countryCode": "RO"
  },
  {
      "label": "QSW",
      "city": "Sweida",
      "countryCode": "SY"
  },
  {
      "label": "QSX",
      "city": "New Amsterdam",
      "countryCode": "GY"
  },
  {
      "label": "QSY",
      "city": "Ruedesheim",
      "countryCode": "DE"
  },
  {
      "label": "QSZ",
      "city": "Shizuoka City",
      "countryCode": "JP"
  },
  {
      "label": "QTA",
      "city": "Atibaia",
      "countryCode": "BR"
  },
  {
      "label": "QTB",
      "city": "Trento",
      "countryCode": "IT"
  },
  {
      "label": "QTC",
      "city": "Caserta",
      "countryCode": "IT"
  },
  {
      "label": "QTD",
      "city": "Timbauba",
      "countryCode": "BR"
  },
  {
      "label": "QTE",
      "city": "Sao Goncalo Amara",
      "countryCode": "BR"
  },
  {
      "label": "QTF",
      "city": "Qatif",
      "countryCode": "SA"
  },
  {
      "label": "QTG",
      "city": "Tupi Paulista",
      "countryCode": "BR"
  },
  {
      "label": "QTH",
      "city": "Thredbo",
      "countryCode": "AU"
  },
  {
      "label": "QTI",
      "city": "Termini Imere",
      "countryCode": "IT"
  },
  {
      "label": "QTJ",
      "city": "Chartres",
      "countryCode": "FR"
  },
  {
      "label": "QTK",
      "city": "Rothenburg",
      "countryCode": "DE"
  },
  {
      "label": "QTL",
      "city": "Caratinga",
      "countryCode": "BR"
  },
  {
      "label": "QTM",
      "city": "Tomakomai",
      "countryCode": "JP"
  },
  {
      "label": "QTN",
      "city": "San Antonio",
      "countryCode": "CL"
  },
  {
      "label": "QTO",
      "city": "Skitube",
      "countryCode": "AU"
  },
  {
      "label": "QTP",
      "city": "Tana",
      "countryCode": "NO"
  },
  {
      "label": "QTR",
      "city": "Tartous",
      "countryCode": "SY"
  },
  {
      "label": "QTS",
      "city": "Englewood",
      "countryCode": "US"
  },
  {
      "label": "QTT",
      "city": "Tanta",
      "countryCode": "EG"
  },
  {
      "label": "QTU",
      "city": "Itu",
      "countryCode": "BR"
  },
  {
      "label": "QTW",
      "city": "Taejon",
      "countryCode": "KR"
  },
  {
      "label": "QTX",
      "city": "Arbatax",
      "countryCode": "IT"
  },
  {
      "label": "QTY",
      "city": "Tsu",
      "countryCode": "JP"
  },
  {
      "label": "QTZ",
      "city": "Coatzacoalcos",
      "countryCode": "MX"
  },
  {
      "label": "QUA",
      "city": "Puttgarden",
      "countryCode": "DE"
  },
  {
      "label": "QUC",
      "city": "Puerto La Cruz",
      "countryCode": "VE"
  },
  {
      "label": "QUD",
      "city": "Damanhour",
      "countryCode": "EG"
  },
  {
      "label": "QUE",
      "city": "Qullissat",
      "countryCode": "GL"
  },
  {
      "label": "QUG",
      "city": "Chichester Goodwood",
      "countryCode": "GB"
  },
  {
      "label": "QUH",
      "city": "Shebeen El Kom",
      "countryCode": "EG"
  },
  {
      "label": "QUI",
      "city": "Chuquicamata",
      "countryCode": "CL"
  },
  {
      "label": "QUJ",
      "city": "Uijongbu",
      "countryCode": "KR"
  },
  {
      "label": "QUL",
      "city": "Ulm",
      "countryCode": "DE"
  },
  {
      "label": "QUM",
      "city": "Qum",
      "countryCode": "IR"
  },
  {
      "label": "QUN",
      "city": "Chun Chon City",
      "countryCode": "KR"
  },
  {
      "label": "QUO",
      "city": "Uyo",
      "countryCode": "NG"
  },
  {
      "label": "QUP",
      "city": "Saqqaq",
      "countryCode": "GL"
  },
  {
      "label": "QUQ",
      "city": "Caceres",
      "countryCode": "ES"
  },
  {
      "label": "QUR",
      "city": "Muriae",
      "countryCode": "BR"
  },
  {
      "label": "QUS",
      "city": "Gusau",
      "countryCode": "NG"
  },
  {
      "label": "QUT",
      "city": "Utsunomiya",
      "countryCode": "JP"
  },
  {
      "label": "QUU",
      "city": "Chung Mu City",
      "countryCode": "KR"
  },
  {
      "label": "QUV",
      "city": "Aappilattoq",
      "countryCode": "GL"
  },
  {
      "label": "QUW",
      "city": "Ammassivik",
      "countryCode": "GL"
  },
  {
      "label": "QUX",
      "city": "Caudebec En Caux",
      "countryCode": "FR"
  },
  {
      "label": "QUY",
      "city": "Wyton",
      "countryCode": "GB"
  },
  {
      "label": "QUZ",
      "city": "Puerto De La Luz",
      "countryCode": "ES"
  },
  {
      "label": "QVA",
      "city": "Varese",
      "countryCode": "IT"
  },
  {
      "label": "QVB",
      "city": "Uniao Da Vitoria",
      "countryCode": "BR"
  },
  {
      "label": "QVC",
      "city": "Vicosa",
      "countryCode": "BR"
  },
  {
      "label": "QVD",
      "city": "Salo",
      "countryCode": "FI"
  },
  {
      "label": "QVE",
      "city": "Forssa",
      "countryCode": "FI"
  },
  {
      "label": "QVF",
      "city": "Karkkila",
      "countryCode": "FI"
  },
  {
      "label": "QVG",
      "city": "Vilgenis",
      "countryCode": "FR"
  },
  {
      "label": "QVH",
      "city": "Vila Velha",
      "countryCode": "BR"
  },
  {
      "label": "QVI",
      "city": "Valbonne",
      "countryCode": "FR"
  },
  {
      "label": "QVJ",
      "city": "Vrajdebna",
      "countryCode": "BG"
  },
  {
      "label": "QVK",
      "city": "Valkeakoski",
      "countryCode": "FI"
  },
  {
      "label": "QVL",
      "city": "Victoria Island",
      "countryCode": "NG"
  },
  {
      "label": "QVM",
      "city": "Hameenlinna",
      "countryCode": "FI"
  },
  {
      "label": "QVN",
      "city": "Avellino",
      "countryCode": "IT"
  },
  {
      "label": "QVO",
      "city": "Havoeysund",
      "countryCode": "NO"
  },
  {
      "label": "QVP",
      "city": "Avare",
      "countryCode": "BR"
  },
  {
      "label": "QVQ",
      "city": "Verden",
      "countryCode": "DE"
  },
  {
      "label": "QVR",
      "city": "Volta Redonda",
      "countryCode": "BR"
  },
  {
      "label": "QVS",
      "city": "Tervakoski",
      "countryCode": "FI"
  },
  {
      "label": "QVT",
      "city": "Riihimaki",
      "countryCode": "FI"
  },
  {
      "label": "QVU",
      "city": "Vaduz",
      "countryCode": "LI"
  },
  {
      "label": "QVV",
      "city": "Heinola",
      "countryCode": "FI"
  },
  {
      "label": "QVW",
      "city": "Kotka",
      "countryCode": "FI"
  },
  {
      "label": "QVX",
      "city": "Ghazaouet",
      "countryCode": "DZ"
  },
  {
      "label": "QVY",
      "city": "Kouvola",
      "countryCode": "FI"
  },
  {
      "label": "QVZ",
      "city": "Hamina",
      "countryCode": "FI"
  },
  {
      "label": "QWA",
      "city": "Oshawa",
      "countryCode": "CA"
  },
  {
      "label": "QWD",
      "city": "Mittenwald",
      "countryCode": "DE"
  },
  {
      "label": "QWH",
      "city": "Loveland",
      "countryCode": "US"
  },
  {
      "label": "QWI",
      "city": "Schleswig",
      "countryCode": "DE"
  },
  {
      "label": "QWJ",
      "city": "Americana",
      "countryCode": "BR"
  },
  {
      "label": "QWK",
      "city": "Wloclawek",
      "countryCode": "PL"
  },
  {
      "label": "QWL",
      "city": "Crackenback Vill",
      "countryCode": "AU"
  },
  {
      "label": "QWM",
      "city": "Longmount",
      "countryCode": "US"
  },
  {
      "label": "QWN",
      "city": "Astorga",
      "countryCode": "BR"
  },
  {
      "label": "QWO",
      "city": "Holstebro",
      "countryCode": "DK"
  },
  {
      "label": "QWQ",
      "city": "Struer",
      "countryCode": "DK"
  },
  {
      "label": "QWR",
      "city": "Donauwoerth",
      "countryCode": "DE"
  },
  {
      "label": "QWS",
      "city": "Nowy Targ",
      "countryCode": "PL"
  },
  {
      "label": "QWT",
      "city": "Talavera De La Reina",
      "countryCode": "ES"
  },
  {
      "label": "QWU",
      "city": "Wuerzburg",
      "countryCode": "DE"
  },
  {
      "label": "QWV",
      "city": "Valjevo",
      "countryCode": "YU"
  },
  {
      "label": "QWW",
      "city": "Navalmoral De La Mata",
      "countryCode": "ES"
  },
  {
      "label": "QWX",
      "city": "Merida",
      "countryCode": "ES"
  },
  {
      "label": "QXB",
      "city": "Aix En Provence",
      "countryCode": "FR"
  },
  {
      "label": "QXC",
      "city": "Caxias",
      "countryCode": "BR"
  },
  {
      "label": "QXD",
      "city": "Cachoeiro Itapemi",
      "countryCode": "BR"
  },
  {
      "label": "QXE",
      "city": "Sora",
      "countryCode": "IT"
  },
  {
      "label": "QXI",
      "city": "Loviisa",
      "countryCode": "FI"
  },
  {
      "label": "QXJ",
      "city": "Porvoo",
      "countryCode": "FI"
  },
  {
      "label": "QXO",
      "city": "Tokyo",
      "countryCode": "JP"
  },
  {
      "label": "QXP",
      "city": "Struga",
      "countryCode": "MK"
  },
  {
      "label": "QXQ",
      "city": "Stalowa Wola",
      "countryCode": "PL"
  },
  {
      "label": "QXR",
      "city": "Radom",
      "countryCode": "PL"
  },
  {
      "label": "QXV",
      "city": "Svendborg",
      "countryCode": "DK"
  },
  {
      "label": "QXW",
      "city": "Alfenas",
      "countryCode": "BR"
  },
  {
      "label": "QYA",
      "city": "Anyang",
      "countryCode": "KR"
  },
  {
      "label": "QYB",
      "city": "Yaba",
      "countryCode": "NG"
  },
  {
      "label": "QYC",
      "city": "Drachten",
      "countryCode": "NL"
  },
  {
      "label": "QYD",
      "city": "Gdynia",
      "countryCode": "PL"
  },
  {
      "label": "QYE",
      "city": "Enschede",
      "countryCode": "NL"
  },
  {
      "label": "QYF",
      "city": "Railways Zone F",
      "countryCode": "DE"
  },
  {
      "label": "QYG",
      "city": "Railway Germany",
      "countryCode": "DE"
  },
  {
      "label": "QYH",
      "city": "Hengelo",
      "countryCode": "NL"
  },
  {
      "label": "QYI",
      "city": "Hilversum",
      "countryCode": "NL"
  },
  {
      "label": "QYJ",
      "city": "Railways Zone J",
      "countryCode": "DE"
  },
  {
      "label": "QYK",
      "city": "Koyang",
      "countryCode": "KR"
  },
  {
      "label": "QYL",
      "city": "Almelo",
      "countryCode": "NL"
  },
  {
      "label": "QYM",
      "city": "Amersfoort",
      "countryCode": "NL"
  },
  {
      "label": "QYN",
      "city": "Byron Bay",
      "countryCode": "AU"
  },
  {
      "label": "QYO",
      "city": "Olsztyn",
      "countryCode": "PL"
  },
  {
      "label": "QYP",
      "city": "Apeldoorn",
      "countryCode": "NL"
  },
  {
      "label": "QYR",
      "city": "Troyes",
      "countryCode": "FR"
  },
  {
      "label": "QYS",
      "city": "Yasoudj",
      "countryCode": "IR"
  },
  {
      "label": "QYT",
      "city": "Paterswolde",
      "countryCode": "NL"
  },
  {
      "label": "QYV",
      "city": "Deventer",
      "countryCode": "NL"
  },
  {
      "label": "QYX",
      "city": "Uppsala",
      "countryCode": "SE"
  },
  {
      "label": "QYY",
      "city": "Bialystok",
      "countryCode": "PL"
  },
  {
      "label": "QYZ",
      "city": "Heerenveen",
      "countryCode": "NL"
  },
  {
      "label": "QZA",
      "city": "Zarqa",
      "countryCode": "JO"
  },
  {
      "label": "QZB",
      "city": "Zermatt",
      "countryCode": "CH"
  },
  {
      "label": "QZC",
      "city": "Smiggin Holes",
      "countryCode": "AU"
  },
  {
      "label": "QZD",
      "city": "Szeged",
      "countryCode": "HU"
  },
  {
      "label": "QZE",
      "city": "Mont Louis",
      "countryCode": "FR"
  },
  {
      "label": "QZF",
      "city": "Font Romeu",
      "countryCode": "FR"
  },
  {
      "label": "QZG",
      "city": "La Llagone",
      "countryCode": "FR"
  },
  {
      "label": "QZH",
      "city": "Les Angles",
      "countryCode": "FR"
  },
  {
      "label": "QZI",
      "city": "Tizi Ouzou",
      "countryCode": "DZ"
  },
  {
      "label": "QZJ",
      "city": "Loimaa",
      "countryCode": "FI"
  },
  {
      "label": "QZK",
      "city": "Mantsala",
      "countryCode": "FI"
  },
  {
      "label": "QZL",
      "city": "Zliten",
      "countryCode": "LY"
  },
  {
      "label": "QZM",
      "city": "Bullocks Flat",
      "countryCode": "AU"
  },
  {
      "label": "QZN",
      "city": "Relizane",
      "countryCode": "DZ"
  },
  {
      "label": "QZO",
      "city": "Arezzo",
      "countryCode": "IT"
  },
  {
      "label": "QZP",
      "city": "Gc Apollo",
      "countryCode": "CA"
  },
  {
      "label": "QZQ",
      "city": "Zahleh",
      "countryCode": "LB"
  },
  {
      "label": "QZR",
      "city": "Aprilia",
      "countryCode": "IT"
  },
  {
      "label": "QZS",
      "city": "Soeroeya",
      "countryCode": "NO"
  },
  {
      "label": "QZT",
      "city": "Zawia Town",
      "countryCode": "LY"
  },
  {
      "label": "QZU",
      "city": "Rauma",
      "countryCode": "FI"
  },
  {
      "label": "QZV",
      "city": "Roissy En France",
      "countryCode": "FR"
  },
  {
      "label": "QZZ",
      "city": "Zagazeeg",
      "countryCode": "EG"
  },
  {
      "label": "RAA",
      "city": "Rakanda",
      "countryCode": "PG"
  },
  {
      "label": "RAB",
      "city": "Rabaul",
      "countryCode": "PG"
  },
  {
      "label": "RAC",
      "city": "Racine",
      "countryCode": "US"
  },
  {
      "label": "RAE",
      "city": "Arar",
      "countryCode": "SA"
  },
  {
      "label": "RAF",
      "city": "Ras An Naqb",
      "countryCode": "EG"
  },
  {
      "label": "RAG",
      "city": "Raglan",
      "countryCode": "NZ"
  },
  {
      "label": "RAH",
      "city": "Rafha",
      "countryCode": "SA"
  },
  {
      "label": "RAI",
      "city": "Praia",
      "countryCode": "CV"
  },
  {
      "label": "RAK",
      "city": "Marrakech",
      "countryCode": "MA"
  },
  {
      "label": "RAL",
      "city": "Riverside",
      "countryCode": "US"
  },
  {
      "label": "RAM",
      "city": "Ramingining",
      "countryCode": "AU"
  },
  {
      "label": "RAN",
      "city": "Ravenna",
      "countryCode": "IT"
  },
  {
      "label": "RAO",
      "city": "Ribeirao Preto",
      "countryCode": "BR"
  },
  {
      "label": "RAP",
      "city": "Rapid City",
      "countryCode": "US"
  },
  {
      "label": "RAQ",
      "city": "Raha",
      "countryCode": "ID"
  },
  {
      "label": "RAR",
      "city": "Rarotonga",
      "countryCode": "CK"
  },
  {
      "label": "RAS",
      "city": "Rasht",
      "countryCode": "IR"
  },
  {
      "label": "RAT",
      "city": "Raduzhnyi",
      "countryCode": "RU"
  },
  {
      "label": "RAU",
      "city": "Rangpur",
      "countryCode": "BD"
  },
  {
      "label": "RAV",
      "city": "Cravo Norte",
      "countryCode": "CO"
  },
  {
      "label": "RAW",
      "city": "Arawa",
      "countryCode": "PG"
  },
  {
      "label": "RAX",
      "city": "Oram",
      "countryCode": "PG"
  },
  {
      "label": "RAZ",
      "city": "Rawala Kot",
      "countryCode": "PK"
  },
  {
      "label": "RBA",
      "city": "Rabat",
      "countryCode": "MA"
  },
  {
      "label": "RBB",
      "city": "Borba",
      "countryCode": "BR"
  },
  {
      "label": "RBC",
      "city": "Robinvale",
      "countryCode": "AU"
  },
  {
      "label": "RBE",
      "city": "Ratanankiri",
      "countryCode": "KH"
  },
  {
      "label": "RBF",
      "city": "Big Bear",
      "countryCode": "US"
  },
  {
      "label": "RBG",
      "city": "Roseburg",
      "countryCode": "US"
  },
  {
      "label": "RBH",
      "city": "Brooks Lodge",
      "countryCode": "US"
  },
  {
      "label": "RBI",
      "city": "Rabi",
      "countryCode": "FJ"
  },
  {
      "label": "RBJ",
      "city": "Rebun",
      "countryCode": "JP"
  },
  {
      "label": "RBK",
      "city": "Rancho",
      "countryCode": "US"
  },
  {
      "label": "RBL",
      "city": "Red Bluff",
      "countryCode": "US"
  },
  {
      "label": "RBM",
      "city": "Straubing",
      "countryCode": "DE"
  },
  {
      "label": "RBN",
      "city": "Fort Jefferson",
      "countryCode": "US"
  },
  {
      "label": "RBO",
      "city": "Robore",
      "countryCode": "BO"
  },
  {
      "label": "RBP",
      "city": "Rabaraba",
      "countryCode": "PG"
  },
  {
      "label": "RBQ",
      "city": "Rurrenabaque",
      "countryCode": "BO"
  },
  {
      "label": "RBR",
      "city": "Rio Branco",
      "countryCode": "BR"
  },
  {
      "label": "RBS",
      "city": "Orbost",
      "countryCode": "AU"
  },
  {
      "label": "RBT",
      "city": "Marsabit",
      "countryCode": "KE"
  },
  {
      "label": "RBU",
      "city": "Roebourne",
      "countryCode": "AU"
  },
  {
      "label": "RBV",
      "city": "Ramata",
      "countryCode": "SB"
  },
  {
      "label": "RBW",
      "city": "Walterboro",
      "countryCode": "US"
  },
  {
      "label": "RBY",
      "city": "Ruby",
      "countryCode": "US"
  },
  {
      "label": "RCB",
      "city": "Richards Bay",
      "countryCode": "ZA"
  },
  {
      "label": "RCE",
      "city": "Roche Harbor",
      "countryCode": "US"
  },
  {
      "label": "RCH",
      "city": "Riohacha",
      "countryCode": "CO"
  },
  {
      "label": "RCK",
      "city": "Rockdale",
      "countryCode": "US"
  },
  {
      "label": "RCL",
      "city": "Redcliffe",
      "countryCode": "VU"
  },
  {
      "label": "RCM",
      "city": "Richmond",
      "countryCode": "AU"
  },
  {
      "label": "RCN",
      "city": "American River",
      "countryCode": "AU"
  },
  {
      "label": "RCO",
      "city": "Rochefort",
      "countryCode": "FR"
  },
  {
      "label": "RCQ",
      "city": "Reconquista",
      "countryCode": "AR"
  },
  {
      "label": "RCR",
      "city": "Rochester",
      "countryCode": "US"
  },
  {
      "label": "RCS",
      "city": "Rochester",
      "countryCode": "GB"
  },
  {
      "label": "RCT",
      "city": "Reed City",
      "countryCode": "US"
  },
  {
      "label": "RCU",
      "city": "Rio Cuarto",
      "countryCode": "AR"
  },
  {
      "label": "RCY",
      "city": "Rum Cay",
      "countryCode": "BS"
  },
  {
      "label": "RDA",
      "city": "Rockhampton Downs",
      "countryCode": "AU"
  },
  {
      "label": "RDB",
      "city": "Red Dog",
      "countryCode": "US"
  },
  {
      "label": "RDC",
      "city": "Redencao",
      "countryCode": "BR"
  },
  {
      "label": "RDD",
      "city": "Redding",
      "countryCode": "US"
  },
  {
      "label": "RDE",
      "city": "Merdey",
      "countryCode": "ID"
  },
  {
      "label": "RDG",
      "city": "Reading",
      "countryCode": "US"
  },
  {
      "label": "RDM",
      "city": "Redmond",
      "countryCode": "US"
  },
  {
      "label": "RDS",
      "city": "Rincon De Los Sauces",
      "countryCode": "AR"
  },
  {
      "label": "RDT",
      "city": "Richard Toll",
      "countryCode": "SN"
  },
  {
      "label": "RDU",
      "city": "Raleigh Durham",
      "countryCode": "US"
  },
  {
      "label": "RDV",
      "city": "Red Devil",
      "countryCode": "US"
  },
  {
      "label": "RDZ",
      "city": "Rodez",
      "countryCode": "FR"
  },
  {
      "label": "REA",
      "city": "Reao",
      "countryCode": "PF"
  },
  {
      "label": "REB",
      "city": "Rechlin",
      "countryCode": "DE"
  },
  {
      "label": "REC",
      "city": "Recife",
      "countryCode": "BR"
  },
  {
      "label": "RED",
      "city": "Reedsville",
      "countryCode": "US"
  },
  {
      "label": "REG",
      "city": "Reggio Calabria",
      "countryCode": "IT"
  },
  {
      "label": "REH",
      "city": "Rehoboth Beach",
      "countryCode": "US"
  },
  {
      "label": "REI",
      "city": "Regina",
      "countryCode": "GF"
  },
  {
      "label": "REK",
      "city": "Reykjavik",
      "countryCode": "IS"
  },
  {
      "label": "REL",
      "city": "Trelew",
      "countryCode": "AR"
  },
  {
      "label": "REN",
      "city": "Orenburg",
      "countryCode": "RU"
  },
  {
      "label": "REO",
      "city": "Rome",
      "countryCode": "US"
  },
  {
      "label": "REP",
      "city": "Siem Reap",
      "countryCode": "KH"
  },
  {
      "label": "RES",
      "city": "Resistencia",
      "countryCode": "AR"
  },
  {
      "label": "RET",
      "city": "Rost",
      "countryCode": "NO"
  },
  {
      "label": "REU",
      "city": "Reus",
      "countryCode": "ES"
  },
  {
      "label": "REX",
      "city": "Reynosa",
      "countryCode": "MX"
  },
  {
      "label": "REY",
      "city": "Reyes",
      "countryCode": "BO"
  },
  {
      "label": "REZ",
      "city": "Resende",
      "countryCode": "BR"
  },
  {
      "label": "RFA",
      "city": "Rafai",
      "countryCode": "CF"
  },
  {
      "label": "RFD",
      "city": "Rockford",
      "countryCode": "US"
  },
  {
      "label": "RFG",
      "city": "Refugio",
      "countryCode": "US"
  },
  {
      "label": "RFK",
      "city": "Anguilla",
      "countryCode": "US"
  },
  {
      "label": "RFN",
      "city": "Raufarhofn",
      "countryCode": "IS"
  },
  {
      "label": "RFP",
      "city": "Raiatea",
      "countryCode": "PF"
  },
  {
      "label": "RFR",
      "city": "Rio Frio",
      "countryCode": "CR"
  },
  {
      "label": "RFS",
      "city": "Rosita",
      "countryCode": "NI"
  },
  {
      "label": "RGA",
      "city": "Rio Grande",
      "countryCode": "AR"
  },
  {
      "label": "RGE",
      "city": "Porgera",
      "countryCode": "PG"
  },
  {
      "label": "RGI",
      "city": "Rangiroa",
      "countryCode": "PF"
  },
  {
      "label": "RGK",
      "city": "Gorno",
      "countryCode": "RU"
  },
  {
      "label": "RGL",
      "city": "Rio Gallegos",
      "countryCode": "AR"
  },
  {
      "label": "RGN",
      "city": "Yangon",
      "countryCode": "MM"
  },
  {
      "label": "RGR",
      "city": "Ranger",
      "countryCode": "US"
  },
  {
      "label": "RGT",
      "city": "Rengat",
      "countryCode": "ID"
  },
  {
      "label": "RHA",
      "city": "Reykholar",
      "countryCode": "IS"
  },
  {
      "label": "RHD",
      "city": "Rio Hondo",
      "countryCode": "AR"
  },
  {
      "label": "RHE",
      "city": "Reims",
      "countryCode": "FR"
  },
  {
      "label": "RHG",
      "city": "Ruhengeri",
      "countryCode": "RW"
  },
  {
      "label": "RHI",
      "city": "Rhinelander",
      "countryCode": "US"
  },
  {
      "label": "RHL",
      "city": "Roy Hill",
      "countryCode": "AU"
  },
  {
      "label": "RHO",
      "city": "Rhodes",
      "countryCode": "GR"
  },
  {
      "label": "RHP",
      "city": "Ramechhap",
      "countryCode": "NP"
  },
  {
      "label": "RIA",
      "city": "Santa Maria",
      "countryCode": "BR"
  },
  {
      "label": "RIB",
      "city": "Riberalta",
      "countryCode": "BO"
  },
  {
      "label": "RIC",
      "city": "Richmond",
      "countryCode": "US"
  },
  {
      "label": "RID",
      "city": "Richmond",
      "countryCode": "US"
  },
  {
      "label": "RIE",
      "city": "Rice Lake",
      "countryCode": "US"
  },
  {
      "label": "RIF",
      "city": "Richfield",
      "countryCode": "US"
  },
  {
      "label": "RIG",
      "city": "Rio Grande",
      "countryCode": "BR"
  },
  {
      "label": "RIH",
      "city": "Cocle",
      "countryCode": "PA"
  },
  {
      "label": "RIJ",
      "city": "Rioja",
      "countryCode": "PE"
  },
  {
      "label": "RIK",
      "city": "Carillo",
      "countryCode": "CR"
  },
  {
      "label": "RIL",
      "city": "Rifle",
      "countryCode": "US"
  },
  {
      "label": "RIM",
      "city": "Rodriguez De Men",
      "countryCode": "PE"
  },
  {
      "label": "RIN",
      "city": "Ringi Cove",
      "countryCode": "SB"
  },
  {
      "label": "RIO",
      "city": "Rio De Janeiro",
      "countryCode": "BR"
  },
  {
      "label": "RIS",
      "city": "Rishiri",
      "countryCode": "JP"
  },
  {
      "label": "RIT",
      "city": "Rio Tigre",
      "countryCode": "PA"
  },
  {
      "label": "RIW",
      "city": "Riverton",
      "countryCode": "US"
  },
  {
      "label": "RIX",
      "city": "Riga",
      "countryCode": "LV"
  },
  {
      "label": "RIY",
      "city": "Mukalla",
      "countryCode": "YE"
  },
  {
      "label": "RIZ",
      "city": "Rio Alzucar",
      "countryCode": "PA"
  },
  {
      "label": "RJB",
      "city": "Rajbiraj",
      "countryCode": "NP"
  },
  {
      "label": "RJH",
      "city": "Rajshahi",
      "countryCode": "BD"
  },
  {
      "label": "RJK",
      "city": "Rijeka",
      "countryCode": "HR"
  },
  {
      "label": "RJL",
      "city": "Logrono",
      "countryCode": "ES"
  },
  {
      "label": "RJN",
      "city": "Rafsanjan",
      "countryCode": "IR"
  },
  {
      "label": "RKC",
      "city": "Yreka",
      "countryCode": "US"
  },
  {
      "label": "RKD",
      "city": "Rockland",
      "countryCode": "US"
  },
  {
      "label": "RKH",
      "city": "Rock Hill",
      "countryCode": "US"
  },
  {
      "label": "RKI",
      "city": "Rokot",
      "countryCode": "ID"
  },
  {
      "label": "RKO",
      "city": "Sipora",
      "countryCode": "ID"
  },
  {
      "label": "RKP",
      "city": "Rockport",
      "countryCode": "US"
  },
  {
      "label": "RKR",
      "city": "Poteau",
      "countryCode": "US"
  },
  {
      "label": "RKS",
      "city": "Rock Springs",
      "countryCode": "US"
  },
  {
      "label": "RKT",
      "city": "Ras Al Khaimah",
      "countryCode": "AE"
  },
  {
      "label": "RKU",
      "city": "Yule Island",
      "countryCode": "PG"
  },
  {
      "label": "RKW",
      "city": "Rockwood",
      "countryCode": "US"
  },
  {
      "label": "RKY",
      "city": "Rokeby",
      "countryCode": "AU"
  },
  {
      "label": "RLA",
      "city": "Rolla",
      "countryCode": "US"
  },
  {
      "label": "RLD",
      "city": "Richland",
      "countryCode": "US"
  },
  {
      "label": "RLG",
      "city": "Rostock Laage",
      "countryCode": "DE"
  },
  {
      "label": "RLP",
      "city": "Rosella Plains",
      "countryCode": "AU"
  },
  {
      "label": "RLT",
      "city": "Arlit",
      "countryCode": "NE"
  },
  {
      "label": "RLU",
      "city": "Bornite",
      "countryCode": "US"
  },
  {
      "label": "RMA",
      "city": "Roma",
      "countryCode": "AU"
  },
  {
      "label": "RMB",
      "city": "Buraimi",
      "countryCode": "OM"
  },
  {
      "label": "RMF",
      "city": "Marsa Alam",
      "countryCode": "EG"
  },
  {
      "label": "RMG",
      "city": "Rome",
      "countryCode": "US"
  },
  {
      "label": "RMI",
      "city": "Rimini",
      "countryCode": "IT"
  },
  {
      "label": "RMK",
      "city": "Renmark",
      "countryCode": "AU"
  },
  {
      "label": "RMN",
      "city": "Rumginae",
      "countryCode": "PG"
  },
  {
      "label": "RMP",
      "city": "Rampart",
      "countryCode": "US"
  },
  {
      "label": "RMQ",
      "city": "taichung",
      "countryCode": "TW"
  },
  {
      "label": "RMS",
      "city": "Ramstein",
      "countryCode": "DE"
  },
  {
      "label": "RNB",
      "city": "Ronneby",
      "countryCode": "SE"
  },
  {
      "label": "RNC",
      "city": "Mcminnville",
      "countryCode": "US"
  },
  {
      "label": "RNE",
      "city": "Roanne",
      "countryCode": "FR"
  },
  {
      "label": "RNG",
      "city": "Rangely",
      "countryCode": "US"
  },
  {
      "label": "RNH",
      "city": "New Richmond",
      "countryCode": "US"
  },
  {
      "label": "RNI",
      "city": "Corn Island",
      "countryCode": "NI"
  },
  {
      "label": "RNJ",
      "city": "Yoronjima",
      "countryCode": "JP"
  },
  {
      "label": "RNL",
      "city": "Rennell",
      "countryCode": "SB"
  },
  {
      "label": "RNN",
      "city": "Bornholm",
      "countryCode": "DK"
  },
  {
      "label": "RNO",
      "city": "Reno",
      "countryCode": "US"
  },
  {
      "label": "RNP",
      "city": "Rongelap Island",
      "countryCode": "MH"
  },
  {
      "label": "RNR",
      "city": "Robinson River",
      "countryCode": "PG"
  },
  {
      "label": "RNS",
      "city": "Rennes",
      "countryCode": "FR"
  },
  {
      "label": "RNT",
      "city": "Renton",
      "countryCode": "US"
  },
  {
      "label": "RNU",
      "city": "Ranau",
      "countryCode": "MY"
  },
  {
      "label": "RNZ",
      "city": "Rensselaer",
      "countryCode": "US"
  },
  {
      "label": "ROA",
      "city": "Roanoke",
      "countryCode": "US"
  },
  {
      "label": "ROC",
      "city": "Rochester",
      "countryCode": "US"
  },
  {
      "label": "ROD",
      "city": "Robertson",
      "countryCode": "ZA"
  },
  {
      "label": "ROG",
      "city": "Rogers",
      "countryCode": "US"
  },
  {
      "label": "ROH",
      "city": "Robinhood",
      "countryCode": "AU"
  },
  {
      "label": "ROI",
      "city": "Roi Et",
      "countryCode": "TH"
  },
  {
      "label": "ROK",
      "city": "Rockhampton",
      "countryCode": "AU"
  },
  {
      "label": "ROL",
      "city": "Roosevelt",
      "countryCode": "US"
  },
  {
      "label": "ROM",
      "city": "Rome",
      "countryCode": "IT"
  },
  {
      "label": "RON",
      "city": "Rondon",
      "countryCode": "CO"
  },
  {
      "label": "ROO",
      "city": "Rondonopolis",
      "countryCode": "BR"
  },
  {
      "label": "ROP",
      "city": "Rota",
      "countryCode": "MP"
  },
  {
      "label": "ROR",
      "city": "Koror",
      "countryCode": "PW"
  },
  {
      "label": "ROS",
      "city": "Rosario",
      "countryCode": "AR"
  },
  {
      "label": "ROT",
      "city": "Rotorua",
      "countryCode": "NZ"
  },
  {
      "label": "ROU",
      "city": "Rousse",
      "countryCode": "BG"
  },
  {
      "label": "ROV",
      "city": "Rostov",
      "countryCode": "RU"
  },
  {
      "label": "ROW",
      "city": "Roswell",
      "countryCode": "US"
  },
  {
      "label": "ROX",
      "city": "Roseau",
      "countryCode": "US"
  },
  {
      "label": "ROY",
      "city": "Rio Mayo",
      "countryCode": "AR"
  },
  {
      "label": "RPA",
      "city": "Rolpa",
      "countryCode": "NP"
  },
  {
      "label": "RPB",
      "city": "Roper Bar",
      "countryCode": "AU"
  },
  {
      "label": "RPM",
      "city": "Ngukurr",
      "countryCode": "AU"
  },
  {
      "label": "RPN",
      "city": "Rosh Pina",
      "countryCode": "IL"
  },
  {
      "label": "RPV",
      "city": "Roper Valley",
      "countryCode": "AU"
  },
  {
      "label": "RPX",
      "city": "Roundup",
      "countryCode": "US"
  },
  {
      "label": "RRE",
      "city": "Marree",
      "countryCode": "AU"
  },
  {
      "label": "RRG",
      "city": "Rodrigues Island",
      "countryCode": "MU"
  },
  {
      "label": "RRI",
      "city": "Barora",
      "countryCode": "SB"
  },
  {
      "label": "RRL",
      "city": "Merrill",
      "countryCode": "US"
  },
  {
      "label": "RRM",
      "city": "Marromeu",
      "countryCode": "MZ"
  },
  {
      "label": "RRN",
      "city": "Serra Norte",
      "countryCode": "BR"
  },
  {
      "label": "RRO",
      "city": "Sorrento",
      "countryCode": "IT"
  },
  {
      "label": "RRS",
      "city": "Roros",
      "countryCode": "NO"
  },
  {
      "label": "RRT",
      "city": "Warroad",
      "countryCode": "US"
  },
  {
      "label": "RRV",
      "city": "Robinson River",
      "countryCode": "AU"
  },
  {
      "label": "RSA",
      "city": "Santa Rosa",
      "countryCode": "AR"
  },
  {
      "label": "RSB",
      "city": "Roseberth",
      "countryCode": "AU"
  },
  {
      "label": "RSD",
      "city": "Rock Sound",
      "countryCode": "BS"
  },
  {
      "label": "RSG",
      "city": "Serra Pelada",
      "countryCode": "BR"
  },
  {
      "label": "RSH",
      "city": "Russian Mission",
      "countryCode": "US"
  },
  {
      "label": "RSI",
      "city": "Rio Sidra",
      "countryCode": "PA"
  },
  {
      "label": "RSK",
      "city": "Ransiki",
      "countryCode": "ID"
  },
  {
      "label": "RSL",
      "city": "Russell",
      "countryCode": "US"
  },
  {
      "label": "RSN",
      "city": "Ruston",
      "countryCode": "US"
  },
  {
      "label": "RSP",
      "city": "Raspberry Strait",
      "countryCode": "US"
  },
  {
      "label": "RSS",
      "city": "Roseires",
      "countryCode": "SD"
  },
  {
      "label": "RST",
      "city": "Rochester",
      "countryCode": "US"
  },
  {
      "label": "RSU",
      "city": "Yosu",
      "countryCode": "KR"
  },
  {
      "label": "RSX",
      "city": "Rouses Point",
      "countryCode": "US"
  },
  {
      "label": "RTA",
      "city": "Rotuma Island",
      "countryCode": "FJ"
  },
  {
      "label": "RTB",
      "city": "Roatan",
      "countryCode": "HN"
  },
  {
      "label": "RTD",
      "city": "Rotunda",
      "countryCode": "US"
  },
  {
      "label": "RTE",
      "city": "Marguerite Bay",
      "countryCode": "US"
  },
  {
      "label": "RTG",
      "city": "Ruteng",
      "countryCode": "ID"
  },
  {
      "label": "RTI",
      "city": "Roti",
      "countryCode": "ID"
  },
  {
      "label": "RTL",
      "city": "Spirit Lake",
      "countryCode": "US"
  },
  {
      "label": "RTM",
      "city": "Rotterdam",
      "countryCode": "NL"
  },
  {
      "label": "RTN",
      "city": "Raton",
      "countryCode": "US"
  },
  {
      "label": "RTP",
      "city": "Rutland Plains",
      "countryCode": "AU"
  },
  {
      "label": "RTS",
      "city": "Rottnest Island",
      "countryCode": "AU"
  },
  {
      "label": "RTW",
      "city": "Saratov",
      "countryCode": "RU"
  },
  {
      "label": "RTY",
      "city": "Merty",
      "countryCode": "AU"
  },
  {
      "label": "RUA",
      "city": "Arua",
      "countryCode": "UG"
  },
  {
      "label": "RUF",
      "city": "Yuruf",
      "countryCode": "ID"
  },
  {
      "label": "RUG",
      "city": "Rugao",
      "countryCode": "CN"
  },
  {
      "label": "RUH",
      "city": "Riyadh",
      "countryCode": "SA"
  },
  {
      "label": "RUI",
      "city": "Ruidoso",
      "countryCode": "US"
  },
  {
      "label": "RUK",
      "city": "Rukumkot",
      "countryCode": "NP"
  },
  {
      "label": "RUM",
      "city": "Rumjatar",
      "countryCode": "NP"
  },
  {
      "label": "RUN",
      "city": "St Denis",
      "countryCode": "RE"
  },
  {
      "label": "RUR",
      "city": "Rurutu",
      "countryCode": "PF"
  },
  {
      "label": "RUS",
      "city": "Marau Sound",
      "countryCode": "SB"
  },
  {
      "label": "RUT",
      "city": "Rutland",
      "countryCode": "US"
  },
  {
      "label": "RUU",
      "city": "Ruti",
      "countryCode": "PG"
  },
  {
      "label": "RUV",
      "city": "Rubelsanto",
      "countryCode": "GT"
  },
  {
      "label": "RUY",
      "city": "Copan",
      "countryCode": "HN"
  },
  {
      "label": "RVA",
      "city": "Farafangana",
      "countryCode": "MG"
  },
  {
      "label": "RVC",
      "city": "Rivercess",
      "countryCode": "LR"
  },
  {
      "label": "RVD",
      "city": "Rio Verde",
      "countryCode": "BR"
  },
  {
      "label": "RVE",
      "city": "Saravena",
      "countryCode": "CO"
  },
  {
      "label": "RVK",
      "city": "Roervik",
      "countryCode": "NO"
  },
  {
      "label": "RVN",
      "city": "Rovaniemi",
      "countryCode": "FI"
  },
  {
      "label": "RVO",
      "city": "Reivilo",
      "countryCode": "ZA"
  },
  {
      "label": "RVR",
      "city": "Green River",
      "countryCode": "US"
  },
  {
      "label": "RVT",
      "city": "Ravensthorpe",
      "countryCode": "AU"
  },
  {
      "label": "RVY",
      "city": "Rivera",
      "countryCode": "UY"
  },
  {
      "label": "RWB",
      "city": "Rowan Bay",
      "countryCode": "US"
  },
  {
      "label": "RWF",
      "city": "Redwood Falls",
      "countryCode": "US"
  },
  {
      "label": "RWI",
      "city": "Rocky Mount",
      "countryCode": "US"
  },
  {
      "label": "RWL",
      "city": "Rawlins",
      "countryCode": "US"
  },
  {
      "label": "RWN",
      "city": "Rovno",
      "countryCode": "UA"
  },
  {
      "label": "RWP",
      "city": "Rawalpindi",
      "countryCode": "PK"
  },
  {
      "label": "RXA",
      "city": "Raudha",
      "countryCode": "YE"
  },
  {
      "label": "RXS",
      "city": "Roxas City",
      "countryCode": "PH"
  },
  {
      "label": "RYB",
      "city": "Rybinsk",
      "countryCode": "RU"
  },
  {
      "label": "RYK",
      "city": "Rahim Yar Khan",
      "countryCode": "PK"
  },
  {
      "label": "RYN",
      "city": "Royan",
      "countryCode": "FR"
  },
  {
      "label": "RYO",
      "city": "Rio Turbio",
      "countryCode": "AR"
  },
  {
      "label": "RZA",
      "city": "Santa Cruz",
      "countryCode": "AR"
  },
  {
      "label": "RZE",
      "city": "Rzeszow",
      "countryCode": "PL"
  },
  {
      "label": "RZN",
      "city": "Ryazan",
      "countryCode": "RU"
  },
  {
      "label": "RZR",
      "city": "Ramsar",
      "countryCode": "IR"
  },
  {
      "label": "RZZ",
      "city": "Roanoke Rapids",
      "countryCode": "US"
  },
  {
      "label": "SAA",
      "city": "Saratoga",
      "countryCode": "US"
  },
  {
      "label": "SAB",
      "city": "Saba Island",
      "countryCode": "AN"
  },
  {
      "label": "SAC",
      "city": "Sacramento",
      "countryCode": "US"
  },
  {
      "label": "SAD",
      "city": "Safford",
      "countryCode": "US"
  },
  {
      "label": "SAE",
      "city": "Sangir",
      "countryCode": "ID"
  },
  {
      "label": "SAF",
      "city": "Santa Fe",
      "countryCode": "US"
  },
  {
      "label": "SAH",
      "city": "Sanaa",
      "countryCode": "YE"
  },
  {
      "label": "SAI",
      "city": "San Marino",
      "countryCode": "SM"
  },
  {
      "label": "SAJ",
      "city": "Sirajganj",
      "countryCode": "BD"
  },
  {
      "label": "SAK",
      "city": "Saudarkrokur",
      "countryCode": "IS"
  },
  {
      "label": "SAL",
      "city": "San Salvador",
      "countryCode": "SV"
  },
  {
      "label": "SAM",
      "city": "Salamo",
      "countryCode": "PG"
  },
  {
      "label": "SAN",
      "city": "San Diego",
      "countryCode": "US"
  },
  {
      "label": "SAO",
      "city": "Sao Paulo",
      "countryCode": "BR"
  },
  {
      "label": "SAP",
      "city": "San Pedro Sula",
      "countryCode": "HN"
  },
  {
      "label": "SAQ",
      "city": "San Andros",
      "countryCode": "BS"
  },
  {
      "label": "SAR",
      "city": "Sparta",
      "countryCode": "US"
  },
  {
      "label": "SAS",
      "city": "Salton City",
      "countryCode": "US"
  },
  {
      "label": "SAT",
      "city": "San Antonio",
      "countryCode": "US"
  },
  {
      "label": "SAU",
      "city": "Sawu",
      "countryCode": "ID"
  },
  {
      "label": "SAV",
      "city": "Savannah",
      "countryCode": "US"
  },
  {
      "label": "SAW",
      "city": "Istanbul",
      "countryCode": "TR"
  },
  {
      "label": "SAX",
      "city": "Sambu",
      "countryCode": "PA"
  },
  {
      "label": "SAY",
      "city": "Siena",
      "countryCode": "IT"
  },
  {
      "label": "SAZ",
      "city": "Sasstown",
      "countryCode": "LR"
  },
  {
      "label": "SBA",
      "city": "Santa Barbara",
      "countryCode": "US"
  },
  {
      "label": "SBB",
      "city": "Santa Barbara Ba",
      "countryCode": "VE"
  },
  {
      "label": "SBC",
      "city": "Selbang",
      "countryCode": "PG"
  },
  {
      "label": "SBD",
      "city": "San Bernardino",
      "countryCode": "US"
  },
  {
      "label": "SBE",
      "city": "Suabi",
      "countryCode": "PG"
  },
  {
      "label": "SBF",
      "city": "Sardeh Band",
      "countryCode": "AF"
  },
  {
      "label": "SBG",
      "city": "Sabang",
      "countryCode": "ID"
  },
  {
      "label": "SBH",
      "city": "St Barthelemy",
      "countryCode": "GP"
  },
  {
      "label": "SBI",
      "city": "Koundara",
      "countryCode": "GN"
  },
  {
      "label": "SBJ",
      "city": "Sao Mateus",
      "countryCode": "BR"
  },
  {
      "label": "SBK",
      "city": "St Brieuc",
      "countryCode": "FR"
  },
  {
      "label": "SBL",
      "city": "Santa Ana",
      "countryCode": "BO"
  },
  {
      "label": "SBM",
      "city": "Sheboygan",
      "countryCode": "US"
  },
  {
      "label": "SBN",
      "city": "South Bend",
      "countryCode": "US"
  },
  {
      "label": "SBO",
      "city": "Salina",
      "countryCode": "US"
  },
  {
      "label": "SBQ",
      "city": "Sibi",
      "countryCode": "PK"
  },
  {
      "label": "SBR",
      "city": "Saibai Island",
      "countryCode": "AU"
  },
  {
      "label": "SBS",
      "city": "Hayden",
      "countryCode": "US"
  },
  {
      "label": "SBT",
      "city": "San Bernardino",
      "countryCode": "US"
  },
  {
      "label": "SBU",
      "city": "Springbok",
      "countryCode": "ZA"
  },
  {
      "label": "SBV",
      "city": "Sabah",
      "countryCode": "PG"
  },
  {
      "label": "SBW",
      "city": "Sibu",
      "countryCode": "MY"
  },
  {
      "label": "SBX",
      "city": "Shelby",
      "countryCode": "US"
  },
  {
      "label": "SBY",
      "city": "Salisbury-Ocean City",
      "countryCode": "US"
  },
  {
      "label": "SBZ",
      "city": "Sibiu",
      "countryCode": "RO"
  },
  {
      "label": "SCA",
      "city": "Santa Catalina",
      "countryCode": "CO"
  },
  {
      "label": "SCB",
      "city": "Scribner",
      "countryCode": "US"
  },
  {
      "label": "SCC",
      "city": "Prudhoe Bay Deadh",
      "countryCode": "US"
  },
  {
      "label": "SCD",
      "city": "Sulaco",
      "countryCode": "HN"
  },
  {
      "label": "SCE",
      "city": "State College",
      "countryCode": "US"
  },
  {
      "label": "SCG",
      "city": "Spring Creek",
      "countryCode": "AU"
  },
  {
      "label": "SCH",
      "city": "Schenectady",
      "countryCode": "US"
  },
  {
      "label": "SCI",
      "city": "San Cristobal",
      "countryCode": "VE"
  },
  {
      "label": "SCJ",
      "city": "Smith Cove",
      "countryCode": "US"
  },
  {
      "label": "SCK",
      "city": "Stockton",
      "countryCode": "US"
  },
  {
      "label": "SCL",
      "city": "Santiago",
      "countryCode": "CL"
  },
  {
      "label": "SCN",
      "city": "Saarbrucken",
      "countryCode": "DE"
  },
  {
      "label": "SCO",
      "city": "Aktau",
      "countryCode": "KZ"
  },
  {
      "label": "SCP",
      "city": "St Crepin",
      "countryCode": "FR"
  },
  {
      "label": "SCQ",
      "city": "Santiago",
      "countryCode": "ES"
  },
  {
      "label": "SCT",
      "city": "Socotra",
      "countryCode": "YE"
  },
  {
      "label": "SCU",
      "city": "Santiago",
      "countryCode": "CU"
  },
  {
      "label": "SCV",
      "city": "Suceava",
      "countryCode": "RO"
  },
  {
      "label": "SCW",
      "city": "Syktyvkar",
      "countryCode": "RU"
  },
  {
      "label": "SCX",
      "city": "Salina Cruz",
      "countryCode": "MX"
  },
  {
      "label": "SCY",
      "city": "San Cristobal",
      "countryCode": "EC"
  },
  {
      "label": "SCZ",
      "city": "Santa Cruz Island",
      "countryCode": "SB"
  },
  {
      "label": "SDB",
      "city": "Saldanha Bay",
      "countryCode": "ZA"
  },
  {
      "label": "SDC",
      "city": "Sandcreek",
      "countryCode": "GY"
  },
  {
      "label": "SDD",
      "city": "Lubango",
      "countryCode": "AO"
  },
  {
      "label": "SDE",
      "city": "Santiago",
      "countryCode": "AR"
  },
  {
      "label": "SDF",
      "city": "Louisville",
      "countryCode": "US"
  },
  {
      "label": "SDG",
      "city": "Sanandaj",
      "countryCode": "IR"
  },
  {
      "label": "SDH",
      "city": "Santa Rosa Copan",
      "countryCode": "HN"
  },
  {
      "label": "SDI",
      "city": "Saidor",
      "countryCode": "PG"
  },
  {
      "label": "SDJ",
      "city": "Sendai",
      "countryCode": "JP"
  },
  {
      "label": "SDK",
      "city": "Sandakan",
      "countryCode": "MY"
  },
  {
      "label": "SDL",
      "city": "Sundsvall",
      "countryCode": "SE"
  },
  {
      "label": "SDN",
      "city": "Sandane",
      "countryCode": "NO"
  },
  {
      "label": "SDO",
      "city": "Ryotsu Sado Island",
      "countryCode": "JP"
  },
  {
      "label": "SDP",
      "city": "Sand Point",
      "countryCode": "US"
  },
  {
      "label": "SDQ",
      "city": "Santo Domingo",
      "countryCode": "DO"
  },
  {
      "label": "SDR",
      "city": "Santander",
      "countryCode": "ES"
  },
  {
      "label": "SDS",
      "city": "Sado Shima",
      "countryCode": "JP"
  },
  {
      "label": "SDT",
      "city": "Saidu Sharif",
      "countryCode": "PK"
  },
  {
      "label": "SDW",
      "city": "Sandwip",
      "countryCode": "BD"
  },
  {
      "label": "SDX",
      "city": "Sedona",
      "countryCode": "US"
  },
  {
      "label": "SDY",
      "city": "Sidney",
      "countryCode": "US"
  },
  {
      "label": "SDZ",
      "city": "Shetland Islands",
      "countryCode": "GB"
  },
  {
      "label": "SEA",
      "city": "Seattle",
      "countryCode": "US"
  },
  {
      "label": "SEB",
      "city": "Sebha",
      "countryCode": "LY"
  },
  {
      "label": "SEC",
      "city": "Serre Chevalier",
      "countryCode": "FR"
  },
  {
      "label": "SED",
      "city": "Sedom",
      "countryCode": "IL"
  },
  {
      "label": "SEF",
      "city": "Sebring",
      "countryCode": "US"
  },
  {
      "label": "SEG",
      "city": "Selinsgrove",
      "countryCode": "US"
  },
  {
      "label": "SEH",
      "city": "Senggeh",
      "countryCode": "ID"
  },
  {
      "label": "SEI",
      "city": "Senhor Do Bonfim",
      "countryCode": "BR"
  },
  {
      "label": "SEJ",
      "city": "Seydisfjordur",
      "countryCode": "IS"
  },
  {
      "label": "SEK",
      "city": "Ksar Es Souk",
      "countryCode": "MA"
  },
  {
      "label": "SEL",
      "city": "Seoul",
      "countryCode": "KR"
  },
  {
      "label": "SEN",
      "city": "Southend",
      "countryCode": "GB"
  },
  {
      "label": "SEO",
      "city": "Seguela",
      "countryCode": "CI"
  },
  {
      "label": "SEP",
      "city": "Stephenville",
      "countryCode": "US"
  },
  {
      "label": "SEQ",
      "city": "Sungai Pakning",
      "countryCode": "ID"
  },
  {
      "label": "SER",
      "city": "Seymour",
      "countryCode": "US"
  },
  {
      "label": "SES",
      "city": "Selma",
      "countryCode": "US"
  },
  {
      "label": "SET",
      "city": "San Esteban",
      "countryCode": "HN"
  },
  {
      "label": "SEU",
      "city": "Seronera",
      "countryCode": "TZ"
  },
  {
      "label": "SEV",
      "city": "Severodoneck",
      "countryCode": "UA"
  },
  {
      "label": "SEW",
      "city": "Siwa",
      "countryCode": "EG"
  },
  {
      "label": "SEX",
      "city": "Sembach",
      "countryCode": "DE"
  },
  {
      "label": "SEY",
      "city": "Selibaby",
      "countryCode": "MR"
  },
  {
      "label": "SEZ",
      "city": "Mahe Island",
      "countryCode": "SC"
  },
  {
      "label": "SFA",
      "city": "Sfax",
      "countryCode": "TN"
  },
  {
      "label": "SFB",
      "city": "Sanford",
      "countryCode": "US"
  },
  {
      "label": "SFC",
      "city": "St Francois",
      "countryCode": "GP"
  },
  {
      "label": "SFD",
      "city": "S Fern De Apure",
      "countryCode": "VE"
  },
  {
      "label": "SFE",
      "city": "San Fernando",
      "countryCode": "PH"
  },
  {
      "label": "SFG",
      "city": "St Martin",
      "countryCode": "GP"
  },
  {
      "label": "SFH",
      "city": "San Felipe",
      "countryCode": "MX"
  },
  {
      "label": "SFI",
      "city": "Safi",
      "countryCode": "MA"
  },
  {
      "label": "SFJ",
      "city": "Kangerlussuaq",
      "countryCode": "GL"
  },
  {
      "label": "SFK",
      "city": "Soure",
      "countryCode": "BR"
  },
  {
      "label": "SFL",
      "city": "Sao Filipe",
      "countryCode": "CV"
  },
  {
      "label": "SFM",
      "city": "Sanford",
      "countryCode": "US"
  },
  {
      "label": "SFN",
      "city": "Santa Fe",
      "countryCode": "AR"
  },
  {
      "label": "SFO",
      "city": "San Francisco",
      "countryCode": "US"
  },
  {
      "label": "SFP",
      "city": "Surfers Paradise",
      "countryCode": "AU"
  },
  {
      "label": "SFQ",
      "city": "Sanliurfa",
      "countryCode": "TR"
  },
  {
      "label": "SFR",
      "city": "San Fernando",
      "countryCode": "US"
  },
  {
      "label": "SFS",
      "city": "Subic Bay",
      "countryCode": "PH"
  },
  {
      "label": "SFT",
      "city": "Skelleftea",
      "countryCode": "SE"
  },
  {
      "label": "SFU",
      "city": "Safia",
      "countryCode": "PG"
  },
  {
      "label": "SFV",
      "city": "Santa Fe Do Sul",
      "countryCode": "BR"
  },
  {
      "label": "SFW",
      "city": "Santa Fe",
      "countryCode": "PA"
  },
  {
      "label": "SFX",
      "city": "San Felix",
      "countryCode": "VE"
  },
  {
      "label": "SFY",
      "city": "Chicopee",
      "countryCode": "US"
  },
  {
      "label": "SFZ",
      "city": "Smithfield",
      "countryCode": "US"
  },
  {
      "label": "SGA",
      "city": "Sheghnan",
      "countryCode": "AF"
  },
  {
      "label": "SGB",
      "city": "Singaua",
      "countryCode": "PG"
  },
  {
      "label": "SGC",
      "city": "Surgut",
      "countryCode": "RU"
  },
  {
      "label": "SGD",
      "city": "Sonderborg",
      "countryCode": "DK"
  },
  {
      "label": "SGE",
      "city": "Siegen",
      "countryCode": "DE"
  },
  {
      "label": "SGF",
      "city": "Springfield",
      "countryCode": "US"
  },
  {
      "label": "SGG",
      "city": "Simanggang",
      "countryCode": "MY"
  },
  {
      "label": "SGH",
      "city": "Springfield",
      "countryCode": "US"
  },
  {
      "label": "SGI",
      "city": "Sargodha",
      "countryCode": "PK"
  },
  {
      "label": "SGJ",
      "city": "Sagarai",
      "countryCode": "PG"
  },
  {
      "label": "SGK",
      "city": "Sangapi",
      "countryCode": "PG"
  },
  {
      "label": "SGM",
      "city": "San Ignacio",
      "countryCode": "MX"
  },
  {
      "label": "SGN",
      "city": "Ho Chi Minh City",
      "countryCode": "VN"
  },
  {
      "label": "SGO",
      "city": "St George",
      "countryCode": "AU"
  },
  {
      "label": "SGP",
      "city": "Shay Gap",
      "countryCode": "AU"
  },
  {
      "label": "SGQ",
      "city": "Sanggata",
      "countryCode": "ID"
  },
  {
      "label": "SGR",
      "city": "Sugar Land",
      "countryCode": "US"
  },
  {
      "label": "SGS",
      "city": "Sanga Sanga",
      "countryCode": "PH"
  },
  {
      "label": "SGT",
      "city": "Stuttgart",
      "countryCode": "US"
  },
  {
      "label": "SGU",
      "city": "Saint George",
      "countryCode": "US"
  },
  {
      "label": "SGV",
      "city": "Sierra Grande",
      "countryCode": "AR"
  },
  {
      "label": "SGW",
      "city": "Saginaw Bay",
      "countryCode": "US"
  },
  {
      "label": "SGX",
      "city": "Songea",
      "countryCode": "TZ"
  },
  {
      "label": "SGY",
      "city": "Skagway",
      "countryCode": "US"
  },
  {
      "label": "SGZ",
      "city": "Songkhla",
      "countryCode": "TH"
  },
  {
      "label": "SHA",
      "city": "Shanghai",
      "countryCode": "CN"
  },
  {
      "label": "SHB",
      "city": "Nakashibetsu",
      "countryCode": "JP"
  },
  {
      "label": "SHC",
      "city": "Indaselassie",
      "countryCode": "ET"
  },
  {
      "label": "SHD",
      "city": "Staunton",
      "countryCode": "US"
  },
  {
      "label": "SHE",
      "city": "Shenyang",
      "countryCode": "CN"
  },
  {
      "label": "SHF",
      "city": "Shanhaiguan",
      "countryCode": "CN"
  },
  {
      "label": "SHG",
      "city": "Shungnak",
      "countryCode": "US"
  },
  {
      "label": "SHH",
      "city": "Shishmaref",
      "countryCode": "US"
  },
  {
      "label": "SHI",
      "city": "Shimojishima",
      "countryCode": "JP"
  },
  {
      "label": "SHJ",
      "city": "Sharjah",
      "countryCode": "AE"
  },
  {
      "label": "SHK",
      "city": "Sehonghong",
      "countryCode": "LS"
  },
  {
      "label": "SHM",
      "city": "Shirahama",
      "countryCode": "JP"
  },
  {
      "label": "SHN",
      "city": "Shelton",
      "countryCode": "US"
  },
  {
      "label": "SHO",
      "city": "Sokcho",
      "countryCode": "KR"
  },
  {
      "label": "SHP",
      "city": "Qinhuangdao",
      "countryCode": "CN"
  },
  {
      "label": "SHQ",
      "city": "Southport",
      "countryCode": "AU"
  },
  {
      "label": "SHR",
      "city": "Sheridan",
      "countryCode": "US"
  },
  {
      "label": "SHS",
      "city": "Shashi",
      "countryCode": "CN"
  },
  {
      "label": "SHT",
      "city": "Shepparton",
      "countryCode": "AU"
  },
  {
      "label": "SHU",
      "city": "Smith Point",
      "countryCode": "AU"
  },
  {
      "label": "SHV",
      "city": "Shreveport",
      "countryCode": "US"
  },
  {
      "label": "SHW",
      "city": "Sharurah",
      "countryCode": "SA"
  },
  {
      "label": "SHX",
      "city": "Shageluk",
      "countryCode": "US"
  },
  {
      "label": "SHY",
      "city": "Shinyanga",
      "countryCode": "TZ"
  },
  {
      "label": "SHZ",
      "city": "Seshutes",
      "countryCode": "LS"
  },
  {
      "label": "SIA",
      "city": "Xi An (Xiguan)",
      "countryCode": "CN"
  },
  {
      "label": "SIB",
      "city": "Sibiti",
      "countryCode": "CG"
  },
  {
      "label": "SIC",
      "city": "Sinop",
      "countryCode": "TR"
  },
  {
      "label": "SID",
      "city": "Sal",
      "countryCode": "CV"
  },
  {
      "label": "SIE",
      "city": "Sines",
      "countryCode": "PT"
  },
  {
      "label": "SIF",
      "city": "Simara",
      "countryCode": "NP"
  },
  {
      "label": "SIH",
      "city": "Silgadi Doti",
      "countryCode": "NP"
  },
  {
      "label": "SII",
      "city": "Sidi Ifni",
      "countryCode": "MA"
  },
  {
      "label": "SIJ",
      "city": "Siglufjordur",
      "countryCode": "IS"
  },
  {
      "label": "SIK",
      "city": "Sikeston",
      "countryCode": "US"
  },
  {
      "label": "SIL",
      "city": "Sila",
      "countryCode": "PG"
  },
  {
      "label": "SIM",
      "city": "Simbai",
      "countryCode": "PG"
  },
  {
      "label": "SIN",
      "city": "Singapore",
      "countryCode": "SG"
  },
  {
      "label": "SIO",
      "city": "Smithton",
      "countryCode": "AU"
  },
  {
      "label": "SIP",
      "city": "Simferopol",
      "countryCode": "UA"
  },
  {
      "label": "SIQ",
      "city": "Singkep",
      "countryCode": "ID"
  },
  {
      "label": "SIR",
      "city": "Sion",
      "countryCode": "CH"
  },
  {
      "label": "SIS",
      "city": "Sishen",
      "countryCode": "ZA"
  },
  {
      "label": "SIT",
      "city": "Sitka",
      "countryCode": "US"
  },
  {
      "label": "SIU",
      "city": "Siuna",
      "countryCode": "NI"
  },
  {
      "label": "SIV",
      "city": "Sullivan",
      "countryCode": "US"
  },
  {
      "label": "SIW",
      "city": "Sibisa",
      "countryCode": "ID"
  },
  {
      "label": "SIX",
      "city": "Singleton",
      "countryCode": "AU"
  },
  {
      "label": "SIY",
      "city": "Montague",
      "countryCode": "US"
  },
  {
      "label": "SIZ",
      "city": "Sissano",
      "countryCode": "PG"
  },
  {
      "label": "SJA",
      "city": "San Juan",
      "countryCode": "PE"
  },
  {
      "label": "SJB",
      "city": "San Joaquin",
      "countryCode": "BO"
  },
  {
      "label": "SJC",
      "city": "San Jose",
      "countryCode": "US"
  },
  {
      "label": "SJD",
      "city": "San Jose Cabo",
      "countryCode": "MX"
  },
  {
      "label": "SJE",
      "city": "San Jose Del Gua",
      "countryCode": "CO"
  },
  {
      "label": "SJF",
      "city": "St John Island",
      "countryCode": "VI"
  },
  {
      "label": "SJG",
      "city": "San Pedro Jagua",
      "countryCode": "CO"
  },
  {
      "label": "SJH",
      "city": "San Juan Del Cesa",
      "countryCode": "CO"
  },
  {
      "label": "SJI",
      "city": "San Jose",
      "countryCode": "PH"
  },
  {
      "label": "SJJ",
      "city": "Sarajevo",
      "countryCode": "BA"
  },
  {
      "label": "SJK",
      "city": "Sao Jose Dos Campos",
      "countryCode": "BR"
  },
  {
      "label": "SJL",
      "city": "Sao Gabriel",
      "countryCode": "BR"
  },
  {
      "label": "SJM",
      "city": "San Juan De Mar",
      "countryCode": "DO"
  },
  {
      "label": "SJN",
      "city": "St Johns",
      "countryCode": "US"
  },
  {
      "label": "SJO",
      "city": "San Jose",
      "countryCode": "CR"
  },
  {
      "label": "SJP",
      "city": "Sao Jose Do Rio Preto",
      "countryCode": "BR"
  },
  {
      "label": "SJQ",
      "city": "Sesheke",
      "countryCode": "ZM"
  },
  {
      "label": "SJR",
      "city": "San Juan D Ur",
      "countryCode": "CO"
  },
  {
      "label": "SJS",
      "city": "San Jose",
      "countryCode": "BO"
  },
  {
      "label": "SJT",
      "city": "San Angelo",
      "countryCode": "US"
  },
  {
      "label": "SJU",
      "city": "San Juan",
      "countryCode": "PR"
  },
  {
      "label": "SJV",
      "city": "San Javier",
      "countryCode": "BO"
  },
  {
      "label": "SJW",
      "city": "Shijiazhuang",
      "countryCode": "CN"
  },
  {
      "label": "SJX",
      "city": "Sartaneja",
      "countryCode": "BZ"
  },
  {
      "label": "SJY",
      "city": "Seinajoki",
      "countryCode": "FI"
  },
  {
      "label": "SJZ",
      "city": "Sao Jorge Island",
      "countryCode": "PT"
  },
  {
      "label": "SKB",
      "city": "St Kitts",
      "countryCode": "KN"
  },
  {
      "label": "SKC",
      "city": "Suki",
      "countryCode": "PG"
  },
  {
      "label": "SKD",
      "city": "Samarkand",
      "countryCode": "UZ"
  },
  {
      "label": "SKE",
      "city": "Skien",
      "countryCode": "NO"
  },
  {
      "label": "SKG",
      "city": "Thessaloniki",
      "countryCode": "GR"
  },
  {
      "label": "SKH",
      "city": "Surkhet",
      "countryCode": "NP"
  },
  {
      "label": "SKI",
      "city": "Skikda",
      "countryCode": "DZ"
  },
  {
      "label": "SKK",
      "city": "Shaktoolik",
      "countryCode": "US"
  },
  {
      "label": "SKL",
      "city": "Isle Of Skye",
      "countryCode": "GB"
  },
  {
      "label": "SKM",
      "city": "Skeldon",
      "countryCode": "GY"
  },
  {
      "label": "SKN",
      "city": "Stokmarknes",
      "countryCode": "NO"
  },
  {
      "label": "SKO",
      "city": "Sokoto",
      "countryCode": "NG"
  },
  {
      "label": "SKP",
      "city": "Skopje",
      "countryCode": "MK"
  },
  {
      "label": "SKQ",
      "city": "Sekakes",
      "countryCode": "LS"
  },
  {
      "label": "SKR",
      "city": "Shakiso",
      "countryCode": "ET"
  },
  {
      "label": "SKS",
      "city": "Vojens",
      "countryCode": "DK"
  },
  {
      "label": "SKT",
      "city": "Sialkot",
      "countryCode": "PK"
  },
  {
      "label": "SKU",
      "city": "Skiros",
      "countryCode": "GR"
  },
  {
      "label": "SKV",
      "city": "Santa Katarina",
      "countryCode": "EG"
  },
  {
      "label": "SKW",
      "city": "Skwentna",
      "countryCode": "US"
  },
  {
      "label": "SKX",
      "city": "Saransk",
      "countryCode": "RU"
  },
  {
      "label": "SKY",
      "city": "Sandusky",
      "countryCode": "US"
  },
  {
      "label": "SKZ",
      "city": "Sukkur",
      "countryCode": "PK"
  },
  {
      "label": "SLA",
      "city": "Salta",
      "countryCode": "AR"
  },
  {
      "label": "SLB",
      "city": "Storm Lake",
      "countryCode": "US"
  },
  {
      "label": "SLC",
      "city": "Salt Lake City",
      "countryCode": "US"
  },
  {
      "label": "SLD",
      "city": "Sliac",
      "countryCode": "SK"
  },
  {
      "label": "SLE",
      "city": "Salem",
      "countryCode": "US"
  },
  {
      "label": "SLF",
      "city": "Sulayel",
      "countryCode": "SA"
  },
  {
      "label": "SLG",
      "city": "Siloam Springs",
      "countryCode": "US"
  },
  {
      "label": "SLH",
      "city": "Sola",
      "countryCode": "VU"
  },
  {
      "label": "SLI",
      "city": "Solwezi",
      "countryCode": "ZM"
  },
  {
      "label": "SLK",
      "city": "Saranac Lake",
      "countryCode": "US"
  },
  {
      "label": "SLL",
      "city": "Salalah",
      "countryCode": "OM"
  },
  {
      "label": "SLM",
      "city": "Salamanca",
      "countryCode": "ES"
  },
  {
      "label": "SLN",
      "city": "Salina",
      "countryCode": "US"
  },
  {
      "label": "SLO",
      "city": "Salem",
      "countryCode": "US"
  },
  {
      "label": "SLP",
      "city": "San Luis Potosi",
      "countryCode": "MX"
  },
  {
      "label": "SLQ",
      "city": "Sleetmute",
      "countryCode": "US"
  },
  {
      "label": "SLR",
      "city": "Sulphur Springs",
      "countryCode": "US"
  },
  {
      "label": "SLS",
      "city": "Silistra",
      "countryCode": "BG"
  },
  {
      "label": "SLT",
      "city": "Salida",
      "countryCode": "US"
  },
  {
      "label": "SLU",
      "city": "St Lucia",
      "countryCode": "LC"
  },
  {
      "label": "SLW",
      "city": "Saltillo",
      "countryCode": "MX"
  },
  {
      "label": "SLX",
      "city": "Salt Cay",
      "countryCode": "TC"
  },
  {
      "label": "SLY",
      "city": "Salehard",
      "countryCode": "RU"
  },
  {
      "label": "SLZ",
      "city": "Sao Luiz",
      "countryCode": "BR"
  },
  {
      "label": "SMA",
      "city": "Santa Maria",
      "countryCode": "PT"
  },
  {
      "label": "SMB",
      "city": "Cerro Sombrero",
      "countryCode": "CL"
  },
  {
      "label": "SMC",
      "city": "Santa Maria",
      "countryCode": "CO"
  },
  {
      "label": "SME",
      "city": "Somerset",
      "countryCode": "US"
  },
  {
      "label": "SMG",
      "city": "Santa Maria",
      "countryCode": "PE"
  },
  {
      "label": "SMH",
      "city": "Sapmanga",
      "countryCode": "PG"
  },
  {
      "label": "SMI",
      "city": "Samos",
      "countryCode": "GR"
  },
  {
      "label": "SMJ",
      "city": "Sim",
      "countryCode": "PG"
  },
  {
      "label": "SMK",
      "city": "St Michael",
      "countryCode": "US"
  },
  {
      "label": "SML",
      "city": "Stella Maris",
      "countryCode": "BS"
  },
  {
      "label": "SMM",
      "city": "Semporna",
      "countryCode": "MY"
  },
  {
      "label": "SMN",
      "city": "Salmon",
      "countryCode": "US"
  },
  {
      "label": "SMO",
      "city": "Santa Monica",
      "countryCode": "US"
  },
  {
      "label": "SMP",
      "city": "Stockholm",
      "countryCode": "PG"
  },
  {
      "label": "SMQ",
      "city": "Sampit",
      "countryCode": "ID"
  },
  {
      "label": "SMR",
      "city": "Santa Marta",
      "countryCode": "CO"
  },
  {
      "label": "SMS",
      "city": "Sainte Marie",
      "countryCode": "MG"
  },
  {
      "label": "SMT",
      "city": "Sun Moon Lake",
      "countryCode": "TW"
  },
  {
      "label": "SMU",
      "city": "Sheep Mountain",
      "countryCode": "US"
  },
  {
      "label": "SMV",
      "city": "St Moritz",
      "countryCode": "CH"
  },
  {
      "label": "SMW",
      "city": "Smara",
      "countryCode": "MA"
  },
  {
      "label": "SMX",
      "city": "Santa Maria",
      "countryCode": "US"
  },
  {
      "label": "SMY",
      "city": "Simenti",
      "countryCode": "SN"
  },
  {
      "label": "SMZ",
      "city": "Stoelmans Eiland",
      "countryCode": "SR"
  },
  {
      "label": "SNA",
      "city": "Santa Ana",
      "countryCode": "US"
  },
  {
      "label": "SNB",
      "city": "Snake Bay",
      "countryCode": "AU"
  },
  {
      "label": "SNC",
      "city": "Salinas",
      "countryCode": "EC"
  },
  {
      "label": "SND",
      "city": "Seno",
      "countryCode": "LA"
  },
  {
      "label": "SNE",
      "city": "Sao Nicolau",
      "countryCode": "CV"
  },
  {
      "label": "SNF",
      "city": "San Felipe",
      "countryCode": "VE"
  },
  {
      "label": "SNG",
      "city": "San Ignacio De Ve",
      "countryCode": "BO"
  },
  {
      "label": "SNH",
      "city": "Stanthorpe",
      "countryCode": "AU"
  },
  {
      "label": "SNI",
      "city": "Sinoe",
      "countryCode": "LR"
  },
  {
      "label": "SNJ",
      "city": "San Julian",
      "countryCode": "CU"
  },
  {
      "label": "SNK",
      "city": "Snyder",
      "countryCode": "US"
  },
  {
      "label": "SNL",
      "city": "Shawnee",
      "countryCode": "US"
  },
  {
      "label": "SNM",
      "city": "San Ignacio De M",
      "countryCode": "BO"
  },
  {
      "label": "SNN",
      "city": "Shannon",
      "countryCode": "IE"
  },
  {
      "label": "SNO",
      "city": "Sakon Nakhon",
      "countryCode": "TH"
  },
  {
      "label": "SNP",
      "city": "Saint Paul Island",
      "countryCode": "US"
  },
  {
      "label": "SNQ",
      "city": "San Quintin",
      "countryCode": "MX"
  },
  {
      "label": "SNR",
      "city": "St Nazaire",
      "countryCode": "FR"
  },
  {
      "label": "SNS",
      "city": "Salinas",
      "countryCode": "US"
  },
  {
      "label": "SNT",
      "city": "Sabana De Torres",
      "countryCode": "CO"
  },
  {
      "label": "SNU",
      "city": "Santa Clara",
      "countryCode": "CU"
  },
  {
      "label": "SNV",
      "city": "Santa Elena",
      "countryCode": "VE"
  },
  {
      "label": "SNW",
      "city": "Thandwe",
      "countryCode": "MM"
  },
  {
      "label": "SNX",
      "city": "Sabana De Mar",
      "countryCode": "DO"
  },
  {
      "label": "SNY",
      "city": "Sidney",
      "countryCode": "US"
  },
  {
      "label": "SNZ",
      "city": "Santa Cruz",
      "countryCode": "BR"
  },
  {
      "label": "SOA",
      "city": "Soc Trang",
      "countryCode": "VN"
  },
  {
      "label": "SOB",
      "city": "Saarmelleek",
      "countryCode": "HU"
  },
  {
      "label": "SOC",
      "city": "Solo City",
      "countryCode": "ID"
  },
  {
      "label": "SOD",
      "city": "Sorocaba",
      "countryCode": "BR"
  },
  {
      "label": "SOE",
      "city": "Souanke",
      "countryCode": "CG"
  },
  {
      "label": "SOF",
      "city": "Sofia",
      "countryCode": "BG"
  },
  {
      "label": "SOG",
      "city": "Sogndal",
      "countryCode": "NO"
  },
  {
      "label": "SOH",
      "city": "Solita",
      "countryCode": "CO"
  },
  {
      "label": "SOI",
      "city": "South Molle Island",
      "countryCode": "AU"
  },
  {
      "label": "SOJ",
      "city": "Sorkjosen",
      "countryCode": "NO"
  },
  {
      "label": "SOK",
      "city": "Semongkong",
      "countryCode": "LS"
  },
  {
      "label": "SOL",
      "city": "Solomon",
      "countryCode": "US"
  },
  {
      "label": "SOM",
      "city": "San Tome",
      "countryCode": "VE"
  },
  {
      "label": "SON",
      "city": "Espiritu Santo",
      "countryCode": "VU"
  },
  {
      "label": "SOO",
      "city": "Soderhamn",
      "countryCode": "SE"
  },
  {
      "label": "SOP",
      "city": "Southern Pines",
      "countryCode": "US"
  },
  {
      "label": "SOQ",
      "city": "Sorong",
      "countryCode": "ID"
  },
  {
      "label": "SOR",
      "city": "Al Thaurah",
      "countryCode": "SY"
  },
  {
      "label": "SOT",
      "city": "Sodankyla",
      "countryCode": "FI"
  },
  {
      "label": "SOU",
      "city": "Southampton",
      "countryCode": "GB"
  },
  {
      "label": "SOV",
      "city": "Seldovia",
      "countryCode": "US"
  },
  {
      "label": "SOW",
      "city": "Show Low",
      "countryCode": "US"
  },
  {
      "label": "SOX",
      "city": "Sogamoso",
      "countryCode": "CO"
  },
  {
      "label": "SOY",
      "city": "Stronsay",
      "countryCode": "GB"
  },
  {
      "label": "SOZ",
      "city": "Solenzara",
      "countryCode": "FR"
  },
  {
      "label": "SPC",
      "city": "Santa Cruz de la Palma",
      "countryCode": "ES"
  },
  {
      "label": "SPD",
      "city": "Saidpur",
      "countryCode": "BD"
  },
  {
      "label": "SPE",
      "city": "Sepulot",
      "countryCode": "MY"
  },
  {
      "label": "SPF",
      "city": "Spearfish",
      "countryCode": "US"
  },
  {
      "label": "SPH",
      "city": "Sopu",
      "countryCode": "PG"
  },
  {
      "label": "SPI",
      "city": "Springfield",
      "countryCode": "US"
  },
  {
      "label": "SPJ",
      "city": "Sparta",
      "countryCode": "GR"
  },
  {
      "label": "SPK",
      "city": "Sapporo",
      "countryCode": "JP"
  },
  {
      "label": "SPL",
      "city": "Schiphol",
      "countryCode": "NL"
  },
  {
      "label": "SPM",
      "city": "Spangdahlem",
      "countryCode": "DE"
  },
  {
      "label": "SPN",
      "city": "Saipan",
      "countryCode": "MP"
  },
  {
      "label": "SPO",
      "city": "San Pablo",
      "countryCode": "ES"
  },
  {
      "label": "SPP",
      "city": "Menongue",
      "countryCode": "AO"
  },
  {
      "label": "SPR",
      "city": "San Pedro",
      "countryCode": "BZ"
  },
  {
      "label": "SPS",
      "city": "Wichita Falls",
      "countryCode": "US"
  },
  {
      "label": "SPT",
      "city": "Sipitang",
      "countryCode": "MY"
  },
  {
      "label": "SPU",
      "city": "Split",
      "countryCode": "HR"
  },
  {
      "label": "SPV",
      "city": "Sepik Plains",
      "countryCode": "PG"
  },
  {
      "label": "SPW",
      "city": "Spencer",
      "countryCode": "US"
  },
  {
      "label": "SPY",
      "city": "San Pedro",
      "countryCode": "CI"
  },
  {
      "label": "SPZ",
      "city": "Springdale",
      "countryCode": "US"
  },
  {
      "label": "SQA",
      "city": "Santa Ynez",
      "countryCode": "US"
  },
  {
      "label": "SQB",
      "city": "Santa Ana",
      "countryCode": "CO"
  },
  {
      "label": "SQC",
      "city": "Southern Cross",
      "countryCode": "AU"
  },
  {
      "label": "SQD",
      "city": "Sinop",
      "countryCode": "TR"
  },
  {
      "label": "SQE",
      "city": "San Luis De Pale",
      "countryCode": "CO"
  },
  {
      "label": "SQF",
      "city": "Solano",
      "countryCode": "CO"
  },
  {
      "label": "SQG",
      "city": "Sintang",
      "countryCode": "ID"
  },
  {
      "label": "SQH",
      "city": "Son La",
      "countryCode": "VN"
  },
  {
      "label": "SQI",
      "city": "Sterling Rockfls",
      "countryCode": "US"
  },
  {
      "label": "SQJ",
      "city": "Shehdi",
      "countryCode": "ET"
  },
  {
      "label": "SQK",
      "city": "Sidi Barani",
      "countryCode": "EG"
  },
  {
      "label": "SQL",
      "city": "San Carlos",
      "countryCode": "US"
  },
  {
      "label": "SQM",
      "city": "Sao Miguel Araguaia",
      "countryCode": "BR"
  },
  {
      "label": "SQN",
      "city": "Sanana",
      "countryCode": "ID"
  },
  {
      "label": "SQO",
      "city": "Storuman",
      "countryCode": "SE"
  },
  {
      "label": "SQP",
      "city": "Starcke",
      "countryCode": "AU"
  },
  {
      "label": "SQQ",
      "city": "Siauliai",
      "countryCode": "LT"
  },
  {
      "label": "SQR",
      "city": "Soroako",
      "countryCode": "ID"
  },
  {
      "label": "SQS",
      "city": "San Ignacia",
      "countryCode": "BZ"
  },
  {
      "label": "SQT",
      "city": "Samarai Island",
      "countryCode": "PG"
  },
  {
      "label": "SQU",
      "city": "Saposoa",
      "countryCode": "PE"
  },
  {
      "label": "SQV",
      "city": "Sequim",
      "countryCode": "US"
  },
  {
      "label": "SQW",
      "city": "Skive",
      "countryCode": "DK"
  },
  {
      "label": "SQY",
      "city": "Sao Lourenco Do Sul",
      "countryCode": "BR"
  },
  {
      "label": "SRA",
      "city": "Santa Rosa",
      "countryCode": "BR"
  },
  {
      "label": "SRB",
      "city": "Santa Rosa",
      "countryCode": "BO"
  },
  {
      "label": "SRC",
      "city": "Searcy",
      "countryCode": "US"
  },
  {
      "label": "SRD",
      "city": "San Ramon",
      "countryCode": "BO"
  },
  {
      "label": "SRE",
      "city": "Sucre",
      "countryCode": "BO"
  },
  {
      "label": "SRF",
      "city": "San Rafael",
      "countryCode": "US"
  },
  {
      "label": "SRG",
      "city": "Semarang",
      "countryCode": "ID"
  },
  {
      "label": "SRH",
      "city": "Sarh",
      "countryCode": "TD"
  },
  {
      "label": "SRI",
      "city": "Samarinda",
      "countryCode": "ID"
  },
  {
      "label": "SRJ",
      "city": "San Borja",
      "countryCode": "BO"
  },
  {
      "label": "SRK",
      "city": "Sierra Leone",
      "countryCode": "SL"
  },
  {
      "label": "SRL",
      "city": "Santa Rosalia",
      "countryCode": "MX"
  },
  {
      "label": "SRM",
      "city": "Sandringham",
      "countryCode": "AU"
  },
  {
      "label": "SRN",
      "city": "Strahan",
      "countryCode": "AU"
  },
  {
      "label": "SRO",
      "city": "Santana Ramos",
      "countryCode": "CO"
  },
  {
      "label": "SRP",
      "city": "Stord",
      "countryCode": "NO"
  },
  {
      "label": "SRQ",
      "city": "Sarasota",
      "countryCode": "US"
  },
  {
      "label": "SRR",
      "city": "Stradbroke Island",
      "countryCode": "AU"
  },
  {
      "label": "SRS",
      "city": "San Marcos",
      "countryCode": "CO"
  },
  {
      "label": "SRT",
      "city": "Soroti",
      "countryCode": "UG"
  },
  {
      "label": "SRU",
      "city": "Santa Cruz",
      "countryCode": "US"
  },
  {
      "label": "SRV",
      "city": "Stony River",
      "countryCode": "US"
  },
  {
      "label": "SRW",
      "city": "Salisbury",
      "countryCode": "US"
  },
  {
      "label": "SRX",
      "city": "Sert",
      "countryCode": "LY"
  },
  {
      "label": "SRY",
      "city": "Sary",
      "countryCode": "IR"
  },
  {
      "label": "SRZ",
      "city": "Santa Cruz",
      "countryCode": "BO"
  },
  {
      "label": "SSA",
      "city": "Salvador",
      "countryCode": "BR"
  },
  {
      "label": "SSC",
      "city": "Sumter",
      "countryCode": "US"
  },
  {
      "label": "SSD",
      "city": "San Felipe",
      "countryCode": "CO"
  },
  {
      "label": "SSG",
      "city": "Malabo",
      "countryCode": "GQ"
  },
  {
      "label": "SSH",
      "city": "Sharm El Sheikh",
      "countryCode": "EG"
  },
  {
      "label": "SSI",
      "city": "Brunswick",
      "countryCode": "US"
  },
  {
      "label": "SSJ",
      "city": "Sandnessjoen",
      "countryCode": "NO"
  },
  {
      "label": "SSK",
      "city": "Sturt Creek",
      "countryCode": "AU"
  },
  {
      "label": "SSL",
      "city": "Santa Rosalia",
      "countryCode": "CO"
  },
  {
      "label": "SSM",
      "city": "Sault Ste Marie",
      "countryCode": "US"
  },
  {
      "label": "SSO",
      "city": "Sao Lourenco",
      "countryCode": "BR"
  },
  {
      "label": "SSP",
      "city": "Silver Plains",
      "countryCode": "AU"
  },
  {
      "label": "SSQ",
      "city": "La Sarre",
      "countryCode": "CA"
  },
  {
      "label": "SSR",
      "city": "Sara",
      "countryCode": "VU"
  },
  {
      "label": "SSS",
      "city": "Siassi",
      "countryCode": "PG"
  },
  {
      "label": "SST",
      "city": "Santa Teresita",
      "countryCode": "AR"
  },
  {
      "label": "SSU",
      "city": "White Sulphur",
      "countryCode": "US"
  },
  {
      "label": "SSV",
      "city": "Siasi",
      "countryCode": "PH"
  },
  {
      "label": "SSW",
      "city": "Stuart Island",
      "countryCode": "US"
  },
  {
      "label": "SSX",
      "city": "Samsun",
      "countryCode": "TR"
  },
  {
      "label": "SSY",
      "city": "M'Banza Congo",
      "countryCode": "AO"
  },
  {
      "label": "SSZ",
      "city": "Santos",
      "countryCode": "BR"
  },
  {
      "label": "STA",
      "city": "Stauning",
      "countryCode": "DK"
  },
  {
      "label": "STB",
      "city": "Santa Barbara Ed",
      "countryCode": "VE"
  },
  {
      "label": "STC",
      "city": "Saint Cloud",
      "countryCode": "US"
  },
  {
      "label": "STD",
      "city": "Santo Domingo",
      "countryCode": "VE"
  },
  {
      "label": "STE",
      "city": "Stevnspt Wiscrpds",
      "countryCode": "US"
  },
  {
      "label": "STF",
      "city": "Stephen Island",
      "countryCode": "AU"
  },
  {
      "label": "STG",
      "city": "St George Island",
      "countryCode": "US"
  },
  {
      "label": "STH",
      "city": "Strathmore",
      "countryCode": "AU"
  },
  {
      "label": "STI",
      "city": "Santiago",
      "countryCode": "DO"
  },
  {
      "label": "STJ",
      "city": "St Joseph",
      "countryCode": "US"
  },
  {
      "label": "STK",
      "city": "Sterling",
      "countryCode": "US"
  },
  {
      "label": "STL",
      "city": "St Louis",
      "countryCode": "US"
  },
  {
      "label": "STM",
      "city": "Santarem",
      "countryCode": "BR"
  },
  {
      "label": "STO",
      "city": "Stockholm",
      "countryCode": "SE"
  },
  {
      "label": "STP",
      "city": "St Paul",
      "countryCode": "US"
  },
  {
      "label": "STQ",
      "city": "St Marys",
      "countryCode": "US"
  },
  {
      "label": "STR",
      "city": "Stuttgart",
      "countryCode": "DE"
  },
  {
      "label": "STS",
      "city": "Santa Rosa",
      "countryCode": "US"
  },
  {
      "label": "STT",
      "city": "St Thomas",
      "countryCode": "VI"
  },
  {
      "label": "STU",
      "city": "Santa Cruz",
      "countryCode": "BZ"
  },
  {
      "label": "STW",
      "city": "Stavropol",
      "countryCode": "RU"
  },
  {
      "label": "STX",
      "city": "St Croix Island",
      "countryCode": "VI"
  },
  {
      "label": "STY",
      "city": "Salto",
      "countryCode": "UY"
  },
  {
      "label": "STZ",
      "city": "Santa Terezinha",
      "countryCode": "BR"
  },
  {
      "label": "SUA",
      "city": "Stuart",
      "countryCode": "US"
  },
  {
      "label": "SUB",
      "city": "Surabaya",
      "countryCode": "ID"
  },
  {
      "label": "SUC",
      "city": "Sundance",
      "countryCode": "US"
  },
  {
      "label": "SUD",
      "city": "Stroud",
      "countryCode": "US"
  },
  {
      "label": "SUE",
      "city": "Sturgeon Bay",
      "countryCode": "US"
  },
  {
      "label": "SUF",
      "city": "Lamezia Terme",
      "countryCode": "IT"
  },
  {
      "label": "SUG",
      "city": "Surigao",
      "countryCode": "PH"
  },
  {
      "label": "SUH",
      "city": "Sur",
      "countryCode": "OM"
  },
  {
      "label": "SUI",
      "city": "Sukhumi",
      "countryCode": "GE"
  },
  {
      "label": "SUJ",
      "city": "Satu Mare",
      "countryCode": "RO"
  },
  {
      "label": "SUK",
      "city": "Samchok",
      "countryCode": "KR"
  },
  {
      "label": "SUL",
      "city": "Sui",
      "countryCode": "PK"
  },
  {
      "label": "SUN",
      "city": "Hailey",
      "countryCode": "US"
  },
  {
      "label": "SUO",
      "city": "Sun River",
      "countryCode": "US"
  },
  {
      "label": "SUP",
      "city": "Sumenep",
      "countryCode": "ID"
  },
  {
      "label": "SUQ",
      "city": "Sucua",
      "countryCode": "EC"
  },
  {
      "label": "SUR",
      "city": "Summer Beaver",
      "countryCode": "CA"
  },
  {
      "label": "SUT",
      "city": "Sumbawanga",
      "countryCode": "TZ"
  },
  {
      "label": "SUV",
      "city": "Suva",
      "countryCode": "FJ"
  },
  {
      "label": "SUX",
      "city": "Sioux City",
      "countryCode": "US"
  },
  {
      "label": "SUY",
      "city": "Sudureyri",
      "countryCode": "IS"
  },
  {
      "label": "SUZ",
      "city": "Suria",
      "countryCode": "PG"
  },
  {
      "label": "SVA",
      "city": "Savoonga",
      "countryCode": "US"
  },
  {
      "label": "SVB",
      "city": "Sambava",
      "countryCode": "MG"
  },
  {
      "label": "SVC",
      "city": "Silver City",
      "countryCode": "US"
  },
  {
      "label": "SVD",
      "city": "St Vincent",
      "countryCode": "VC"
  },
  {
      "label": "SVE",
      "city": "Susanville",
      "countryCode": "US"
  },
  {
      "label": "SVF",
      "city": "Save",
      "countryCode": "BJ"
  },
  {
      "label": "SVG",
      "city": "Stavanger",
      "countryCode": "NO"
  },
  {
      "label": "SVH",
      "city": "Statesville",
      "countryCode": "US"
  },
  {
      "label": "SVI",
      "city": "San Vicente",
      "countryCode": "CO"
  },
  {
      "label": "SVJ",
      "city": "Svolvaer",
      "countryCode": "NO"
  },
  {
      "label": "SVK",
      "city": "Silver Creek",
      "countryCode": "BZ"
  },
  {
      "label": "SVL",
      "city": "Savonlinna",
      "countryCode": "FI"
  },
  {
      "label": "SVM",
      "city": "St Paul's Mission",
      "countryCode": "AU"
  },
  {
      "label": "SVP",
      "city": "Kuito",
      "countryCode": "AO"
  },
  {
      "label": "SVQ",
      "city": "Sevilla",
      "countryCode": "ES"
  },
  {
      "label": "SVR",
      "city": "Svay Rieng",
      "countryCode": "KH"
  },
  {
      "label": "SVS",
      "city": "Stevens Village",
      "countryCode": "US"
  },
  {
      "label": "SVT",
      "city": "Savuti",
      "countryCode": "BW"
  },
  {
      "label": "SVU",
      "city": "Savusavu",
      "countryCode": "FJ"
  },
  {
      "label": "SVV",
      "city": "San Salvador De",
      "countryCode": "VE"
  },
  {
      "label": "SVX",
      "city": "Ekaterinburg",
      "countryCode": "RU"
  },
  {
      "label": "SVY",
      "city": "Savo",
      "countryCode": "SB"
  },
  {
      "label": "SVZ",
      "city": "San Antonio",
      "countryCode": "VE"
  },
  {
      "label": "SWA",
      "city": "Shantou",
      "countryCode": "CN"
  },
  {
      "label": "SWB",
      "city": "Shaw River",
      "countryCode": "AU"
  },
  {
      "label": "SWC",
      "city": "Stawell",
      "countryCode": "AU"
  },
  {
      "label": "SWD",
      "city": "Seward",
      "countryCode": "US"
  },
  {
      "label": "SWE",
      "city": "Siwea",
      "countryCode": "PG"
  },
  {
      "label": "SWG",
      "city": "Satwag",
      "countryCode": "PG"
  },
  {
      "label": "SWH",
      "city": "Swan Hill",
      "countryCode": "AU"
  },
  {
      "label": "SWI",
      "city": "Swindon",
      "countryCode": "GB"
  },
  {
      "label": "SWJ",
      "city": "South West Bay",
      "countryCode": "VU"
  },
  {
      "label": "SWL",
      "city": "Spanish Wells",
      "countryCode": "BS"
  },
  {
      "label": "SWM",
      "city": "Suia Missu",
      "countryCode": "BR"
  },
  {
      "label": "SWN",
      "city": "Sahiwal",
      "countryCode": "PK"
  },
  {
      "label": "SWO",
      "city": "Stillwater",
      "countryCode": "US"
  },
  {
      "label": "SWP",
      "city": "Swakopmund",
      "countryCode": "NA"
  },
  {
      "label": "SWQ",
      "city": "Sumbawa",
      "countryCode": "ID"
  },
  {
      "label": "SWR",
      "city": "Silur",
      "countryCode": "PG"
  },
  {
      "label": "SWS",
      "city": "Swansea",
      "countryCode": "GB"
  },
  {
      "label": "SWT",
      "city": "Strzhewoi",
      "countryCode": "RU"
  },
  {
      "label": "SWU",
      "city": "Su Won City",
      "countryCode": "KR"
  },
  {
      "label": "SWV",
      "city": "Shikarpur",
      "countryCode": "PK"
  },
  {
      "label": "SWW",
      "city": "Sweetwater",
      "countryCode": "US"
  },
  {
      "label": "SWX",
      "city": "Shakawe",
      "countryCode": "BW"
  },
  {
      "label": "SWY",
      "city": "Sitiawan",
      "countryCode": "MY"
  },
  {
      "label": "SXA",
      "city": "Sialum",
      "countryCode": "PG"
  },
  {
      "label": "SXB",
      "city": "Strasbourg",
      "countryCode": "FR"
  },
  {
      "label": "SXD",
      "city": "Sophia Antipolis",
      "countryCode": "FR"
  },
  {
      "label": "SXE",
      "city": "Sale",
      "countryCode": "AU"
  },
  {
      "label": "SXG",
      "city": "Senanga",
      "countryCode": "ZM"
  },
  {
      "label": "SXH",
      "city": "Sehulea",
      "countryCode": "PG"
  },
  {
      "label": "SXI",
      "city": "Sirri Island",
      "countryCode": "IR"
  },
  {
      "label": "SXJ",
      "city": "Shanshan",
      "countryCode": "CN"
  },
  {
      "label": "SXK",
      "city": "Saumlaki",
      "countryCode": "ID"
  },
  {
      "label": "SXL",
      "city": "Sligo",
      "countryCode": "IE"
  },
  {
      "label": "SXM",
      "city": "St Maarten",
      "countryCode": "AN"
  },
  {
      "label": "SXN",
      "city": "Suapan",
      "countryCode": "BW"
  },
  {
      "label": "SXO",
      "city": "Sao Felix Do Arag",
      "countryCode": "BR"
  },
  {
      "label": "SXQ",
      "city": "Soldotna",
      "countryCode": "US"
  },
  {
      "label": "SXS",
      "city": "Sahabat 16",
      "countryCode": "MY"
  },
  {
      "label": "SXT",
      "city": "Taman Negara",
      "countryCode": "MY"
  },
  {
      "label": "SXU",
      "city": "Soddu",
      "countryCode": "ET"
  },
  {
      "label": "SXW",
      "city": "Sauren",
      "countryCode": "PG"
  },
  {
      "label": "SXX",
      "city": "Sao Felix Do Xing",
      "countryCode": "BR"
  },
  {
      "label": "SXY",
      "city": "Sidney",
      "countryCode": "US"
  },
  {
      "label": "SXZ",
      "city": "Siirt",
      "countryCode": "TR"
  },
  {
      "label": "SYB",
      "city": "Seal Bay",
      "countryCode": "US"
  },
  {
      "label": "SYC",
      "city": "Shiringayoc",
      "countryCode": "PE"
  },
  {
      "label": "SYD",
      "city": "Sydney",
      "countryCode": "AU"
  },
  {
      "label": "SYE",
      "city": "Sadah",
      "countryCode": "YE"
  },
  {
      "label": "SYF",
      "city": "Silva Bay",
      "countryCode": "CA"
  },
  {
      "label": "SYG",
      "city": "Svalbard",
      "countryCode": "NO"
  },
  {
      "label": "SYH",
      "city": "Syangboche",
      "countryCode": "NP"
  },
  {
      "label": "SYI",
      "city": "Shelbyville",
      "countryCode": "US"
  },
  {
      "label": "SYJ",
      "city": "Sirjan",
      "countryCode": "IR"
  },
  {
      "label": "SYK",
      "city": "Stykkisholmur",
      "countryCode": "IS"
  },
  {
      "label": "SYL",
      "city": "San Miguel",
      "countryCode": "US"
  },
  {
      "label": "SYM",
      "city": "Simao",
      "countryCode": "CN"
  },
  {
      "label": "SYN",
      "city": "Stanton",
      "countryCode": "US"
  },
  {
      "label": "SYO",
      "city": "Shonai",
      "countryCode": "JP"
  },
  {
      "label": "SYP",
      "city": "Santiago",
      "countryCode": "PA"
  },
  {
      "label": "SYR",
      "city": "Syracuse",
      "countryCode": "US"
  },
  {
      "label": "SYS",
      "city": "Sunchon",
      "countryCode": "KR"
  },
  {
      "label": "SYT",
      "city": "Saint Yan",
      "countryCode": "FR"
  },
  {
      "label": "SYU",
      "city": "Sue Island",
      "countryCode": "AU"
  },
  {
      "label": "SYV",
      "city": "Sylvester",
      "countryCode": "US"
  },
  {
      "label": "SYW",
      "city": "Sehwen Sharif",
      "countryCode": "PK"
  },
  {
      "label": "SYX",
      "city": "Sanya",
      "countryCode": "CN"
  },
  {
      "label": "SYY",
      "city": "Stornoway",
      "countryCode": "GB"
  },
  {
      "label": "SYZ",
      "city": "Shiraz",
      "countryCode": "IR"
  },
  {
      "label": "SZA",
      "city": "Soyo",
      "countryCode": "AO"
  },
  {
      "label": "SZC",
      "city": "Santa Cruz",
      "countryCode": "CR"
  },
  {
      "label": "SZD",
      "city": "Sheffield",
      "countryCode": "GB"
  },
  {
      "label": "SZE",
      "city": "Semera",
      "countryCode": "ET"
  },
  {
      "label": "SZF",
      "city": "Samsun",
      "countryCode": "TR"
  },
  {
      "label": "SZG",
      "city": "Salzburg",
      "countryCode": "AT"
  },
  {
      "label": "SZH",
      "city": "Senipah",
      "countryCode": "ID"
  },
  {
      "label": "SZI",
      "city": "Zaisan",
      "countryCode": "KZ"
  },
  {
      "label": "SZJ",
      "city": "Siguanea",
      "countryCode": "CU"
  },
  {
      "label": "SZK",
      "city": "Skukuza",
      "countryCode": "ZA"
  },
  {
      "label": "SZM",
      "city": "Sesriem",
      "countryCode": "NA"
  },
  {
      "label": "SZO",
      "city": "Shanzhou",
      "countryCode": "CN"
  },
  {
      "label": "SZP",
      "city": "Santa Paula",
      "countryCode": "US"
  },
  {
      "label": "SZQ",
      "city": "Saenz Pena",
      "countryCode": "AR"
  },
  {
      "label": "SZR",
      "city": "Stara Zagora",
      "countryCode": "BG"
  },
  {
      "label": "SZS",
      "city": "Stewart Island",
      "countryCode": "NZ"
  },
  {
      "label": "SZU",
      "city": "Segou",
      "countryCode": "ML"
  },
  {
      "label": "SZV",
      "city": "Suzhou",
      "countryCode": "CN"
  },
  {
      "label": "SZW",
      "city": "Schwerin",
      "countryCode": "DE"
  },
  {
      "label": "SZX",
      "city": "Shenzhen",
      "countryCode": "CN"
  },
  {
      "label": "SZY",
      "city": "Szymany",
      "countryCode": "PL"
  },
  {
      "label": "SZZ",
      "city": "Szczecin",
      "countryCode": "PL"
  },
  {
      "label": "TAA",
      "city": "Tarapaina",
      "countryCode": "SB"
  },
  {
      "label": "TAB",
      "city": "Tobago",
      "countryCode": "TT"
  },
  {
      "label": "TAC",
      "city": "Tacloban",
      "countryCode": "PH"
  },
  {
      "label": "TAD",
      "city": "Trinidad",
      "countryCode": "US"
  },
  {
      "label": "TAE",
      "city": "Taegu",
      "countryCode": "KR"
  },
  {
      "label": "TAG",
      "city": "Tagbilaran",
      "countryCode": "PH"
  },
  {
      "label": "TAH",
      "city": "Tanna",
      "countryCode": "VU"
  },
  {
      "label": "TAI",
      "city": "Taiz",
      "countryCode": "YE"
  },
  {
      "label": "TAJ",
      "city": "Tadji",
      "countryCode": "PG"
  },
  {
      "label": "TAK",
      "city": "Takamatsu",
      "countryCode": "JP"
  },
  {
      "label": "TAL",
      "city": "Tanana",
      "countryCode": "US"
  },
  {
      "label": "TAM",
      "city": "Tampico",
      "countryCode": "MX"
  },
  {
      "label": "TAN",
      "city": "Tangalooma",
      "countryCode": "AU"
  },
  {
      "label": "TAO",
      "city": "Qingdao",
      "countryCode": "CN"
  },
  {
      "label": "TAP",
      "city": "Tapachula Intl",
      "countryCode": "MX"
  },
  {
      "label": "TAQ",
      "city": "Tarcoola",
      "countryCode": "AU"
  },
  {
      "label": "TAR",
      "city": "Taranto",
      "countryCode": "IT"
  },
  {
      "label": "TAS",
      "city": "Tashkent",
      "countryCode": "UZ"
  },
  {
      "label": "TAT",
      "city": "Tatry Poprad",
      "countryCode": "SK"
  },
  {
      "label": "TAU",
      "city": "Tauramena",
      "countryCode": "CO"
  },
  {
      "label": "TAV",
      "city": "Tau",
      "countryCode": "AS"
  },
  {
      "label": "TAW",
      "city": "Tacuarembo",
      "countryCode": "UY"
  },
  {
      "label": "TAX",
      "city": "Taliabu",
      "countryCode": "ID"
  },
  {
      "label": "TAY",
      "city": "Tartu",
      "countryCode": "EE"
  },
  {
      "label": "TAZ",
      "city": "Tashauz",
      "countryCode": "TM"
  },
  {
      "label": "TBA",
      "city": "Tabibuga",
      "countryCode": "PG"
  },
  {
      "label": "TBB",
      "city": "Tuy Hoa",
      "countryCode": "VN"
  },
  {
      "label": "TBC",
      "city": "Tuba City",
      "countryCode": "US"
  },
  {
      "label": "TBD",
      "city": "Timbiqui",
      "countryCode": "CO"
  },
  {
      "label": "TBE",
      "city": "Timbunke",
      "countryCode": "PG"
  },
  {
      "label": "TBF",
      "city": "Tabiteuea North",
      "countryCode": "KI"
  },
  {
      "label": "TBG",
      "city": "Tabubil",
      "countryCode": "PG"
  },
  {
      "label": "TBH",
      "city": "Tablas",
      "countryCode": "PH"
  },
  {
      "label": "TBI",
      "city": "The Bight",
      "countryCode": "BS"
  },
  {
      "label": "TBJ",
      "city": "Tabarka",
      "countryCode": "TN"
  },
  {
      "label": "TBK",
      "city": "Timber Creek",
      "countryCode": "AU"
  },
  {
      "label": "TBL",
      "city": "Tableland",
      "countryCode": "AU"
  },
  {
      "label": "TBM",
      "city": "Tumbang Samba",
      "countryCode": "ID"
  },
  {
      "label": "TBN",
      "city": "Ftlenwood Tribune",
      "countryCode": "US"
  },
  {
      "label": "TBO",
      "city": "Tabora",
      "countryCode": "TZ"
  },
  {
      "label": "TBP",
      "city": "Tumbes",
      "countryCode": "PE"
  },
  {
      "label": "TBQ",
      "city": "Tarabo",
      "countryCode": "PG"
  },
  {
      "label": "TBR",
      "city": "Statesboro",
      "countryCode": "US"
  },
  {
      "label": "TBS",
      "city": "Tbilisi",
      "countryCode": "GE"
  },
  {
      "label": "TBT",
      "city": "Tabatinga",
      "countryCode": "BR"
  },
  {
      "label": "TBU",
      "city": "Tongatapu",
      "countryCode": "TO"
  },
  {
      "label": "TBV",
      "city": "Tabal",
      "countryCode": "MH"
  },
  {
      "label": "TBW",
      "city": "Tambov",
      "countryCode": "RU"
  },
  {
      "label": "TBX",
      "city": "Taabo",
      "countryCode": "CI"
  },
  {
      "label": "TBY",
      "city": "Tsabong",
      "countryCode": "BW"
  },
  {
      "label": "TBZ",
      "city": "Tabriz",
      "countryCode": "IR"
  },
  {
      "label": "TCA",
      "city": "Tennant Creek",
      "countryCode": "AU"
  },
  {
      "label": "TCB",
      "city": "Treasure Cay",
      "countryCode": "BS"
  },
  {
      "label": "TCC",
      "city": "Tucumcari",
      "countryCode": "US"
  },
  {
      "label": "TCD",
      "city": "Tarapaca",
      "countryCode": "CO"
  },
  {
      "label": "TCE",
      "city": "Tulcea",
      "countryCode": "RO"
  },
  {
      "label": "TCF",
      "city": "Tocoa",
      "countryCode": "HN"
  },
  {
      "label": "TCG",
      "city": "Tacheng",
      "countryCode": "CN"
  },
  {
      "label": "TCH",
      "city": "Tchibanga",
      "countryCode": "GA"
  },
  {
      "label": "TCI",
      "city": "Tenerife",
      "countryCode": "ES"
  },
  {
      "label": "TCJ",
      "city": "Torembi",
      "countryCode": "PA"
  },
  {
      "label": "TCK",
      "city": "Tinboli",
      "countryCode": "PG"
  },
  {
      "label": "TCL",
      "city": "Tuscaloosa",
      "countryCode": "US"
  },
  {
      "label": "TCN",
      "city": "Tehuacan",
      "countryCode": "MX"
  },
  {
      "label": "TCO",
      "city": "Tumaco",
      "countryCode": "CO"
  },
  {
      "label": "TCP",
      "city": "Taba",
      "countryCode": "EG"
  },
  {
      "label": "TCQ",
      "city": "Tacna",
      "countryCode": "PE"
  },
  {
      "label": "TCS",
      "city": "Truth Or Conseque",
      "countryCode": "US"
  },
  {
      "label": "TCT",
      "city": "Takotna",
      "countryCode": "US"
  },
  {
      "label": "TCU",
      "city": "Thaba Nchu",
      "countryCode": "ZA"
  },
  {
      "label": "TCV",
      "city": "Tete",
      "countryCode": "MZ"
  },
  {
      "label": "TCW",
      "city": "Tocumwal",
      "countryCode": "AU"
  },
  {
      "label": "TCX",
      "city": "Tabas",
      "countryCode": "IR"
  },
  {
      "label": "TCY",
      "city": "Terrace Bay",
      "countryCode": "NA"
  },
  {
      "label": "TDA",
      "city": "Trinidad",
      "countryCode": "CO"
  },
  {
      "label": "TDB",
      "city": "Tetabedi",
      "countryCode": "PG"
  },
  {
      "label": "TDD",
      "city": "Trinidad",
      "countryCode": "BO"
  },
  {
      "label": "TDG",
      "city": "Tandag",
      "countryCode": "PH"
  },
  {
      "label": "TDJ",
      "city": "Tadjoura",
      "countryCode": "DJ"
  },
  {
      "label": "TDK",
      "city": "Taldy Kurgan",
      "countryCode": "KZ"
  },
  {
      "label": "TDL",
      "city": "Tandil",
      "countryCode": "AR"
  },
  {
      "label": "TDN",
      "city": "Theda Station",
      "countryCode": "AU"
  },
  {
      "label": "TDO",
      "city": "Toledo",
      "countryCode": "US"
  },
  {
      "label": "TDR",
      "city": "Theodore",
      "countryCode": "AU"
  },
  {
      "label": "TDT",
      "city": "Tanda Tula",
      "countryCode": "ZA"
  },
  {
      "label": "TDV",
      "city": "Tanandava",
      "countryCode": "MG"
  },
  {
      "label": "TDX",
      "city": "Trat",
      "countryCode": "TH"
  },
  {
      "label": "TEA",
      "city": "Tela",
      "countryCode": "HN"
  },
  {
      "label": "TEB",
      "city": "Teterboro",
      "countryCode": "US"
  },
  {
      "label": "TEC",
      "city": "Telemaco Borba",
      "countryCode": "BR"
  },
  {
      "label": "TED",
      "city": "Thisted",
      "countryCode": "DK"
  },
  {
      "label": "TEE",
      "city": "Tbessa",
      "countryCode": "DZ"
  },
  {
      "label": "TEF",
      "city": "Telfer",
      "countryCode": "AU"
  },
  {
      "label": "TEG",
      "city": "Tenkodogo",
      "countryCode": "BF"
  },
  {
      "label": "TEH",
      "city": "Tetlin",
      "countryCode": "US"
  },
  {
      "label": "TEK",
      "city": "Tatitlek",
      "countryCode": "US"
  },
  {
      "label": "TEL",
      "city": "Telupid",
      "countryCode": "MY"
  },
  {
      "label": "TEM",
      "city": "Temora",
      "countryCode": "AU"
  },
  {
      "label": "TEN",
      "city": "Tongren",
      "countryCode": "CN"
  },
  {
      "label": "TEO",
      "city": "Terapo",
      "countryCode": "PG"
  },
  {
      "label": "TEP",
      "city": "Teptep",
      "countryCode": "PG"
  },
  {
      "label": "TEQ",
      "city": "Tekirdag",
      "countryCode": "TR"
  },
  {
      "label": "TER",
      "city": "Terceira Island",
      "countryCode": "PT"
  },
  {
      "label": "TES",
      "city": "Tessenei",
      "countryCode": "ER"
  },
  {
      "label": "TET",
      "city": "Tete",
      "countryCode": "MZ"
  },
  {
      "label": "TEU",
      "city": "Te Anau",
      "countryCode": "NZ"
  },
  {
      "label": "TEX",
      "city": "Telluride",
      "countryCode": "US"
  },
  {
      "label": "TEY",
      "city": "Thingeyri",
      "countryCode": "IS"
  },
  {
      "label": "TFA",
      "city": "Tilfalmin",
      "countryCode": "PG"
  },
  {
      "label": "TFF",
      "city": "Tefe",
      "countryCode": "BR"
  },
  {
      "label": "TFI",
      "city": "Tufi",
      "countryCode": "PG"
  },
  {
      "label": "TFL",
      "city": "Teofilo Otoni",
      "countryCode": "BR"
  },
  {
      "label": "TFM",
      "city": "Telefomin",
      "countryCode": "PG"
  },
  {
      "label": "TFR",
      "city": "Ramadan",
      "countryCode": "EG"
  },
  {
      "label": "TFT",
      "city": "Taftan",
      "countryCode": "PK"
  },
  {
      "label": "TFY",
      "city": "Tarfaya",
      "countryCode": "MA"
  },
  {
      "label": "TGA",
      "city": "Tengah",
      "countryCode": "SG"
  },
  {
      "label": "TGB",
      "city": "Tagbita",
      "countryCode": "PH"
  },
  {
      "label": "TGD",
      "city": "Podgorica",
      "countryCode": "YU"
  },
  {
      "label": "TGE",
      "city": "Tuskegee",
      "countryCode": "US"
  },
  {
      "label": "TGF",
      "city": "Tignes",
      "countryCode": "FR"
  },
  {
      "label": "TGG",
      "city": "Kuala Terengganu",
      "countryCode": "MY"
  },
  {
      "label": "TGH",
      "city": "Tongoa",
      "countryCode": "VU"
  },
  {
      "label": "TGI",
      "city": "Tingo Maria",
      "countryCode": "PE"
  },
  {
      "label": "TGJ",
      "city": "Tiga",
      "countryCode": "NC"
  },
  {
      "label": "TGL",
      "city": "Tagula",
      "countryCode": "PG"
  },
  {
      "label": "TGM",
      "city": "Tirgu Mures",
      "countryCode": "RO"
  },
  {
      "label": "TGN",
      "city": "Traralgon",
      "countryCode": "AU"
  },
  {
      "label": "TGO",
      "city": "Tongliao",
      "countryCode": "CN"
  },
  {
      "label": "TGQ",
      "city": "Tangara de Serra",
      "countryCode": "BR"
  },
  {
      "label": "TGR",
      "city": "Touggourt",
      "countryCode": "DZ"
  },
  {
      "label": "TGS",
      "city": "Chokwe",
      "countryCode": "MZ"
  },
  {
      "label": "TGT",
      "city": "Tanga",
      "countryCode": "TZ"
  },
  {
      "label": "TGU",
      "city": "Tegucigalpa",
      "countryCode": "HN"
  },
  {
      "label": "TGV",
      "city": "Targovishte",
      "countryCode": "BG"
  },
  {
      "label": "TGX",
      "city": "Tingrela",
      "countryCode": "CI"
  },
  {
      "label": "TGZ",
      "city": "Tuxtla Gutierrez",
      "countryCode": "MX"
  },
  {
      "label": "THA",
      "city": "Tullahoma",
      "countryCode": "US"
  },
  {
      "label": "THB",
      "city": "Thaba Tseka",
      "countryCode": "LS"
  },
  {
      "label": "THC",
      "city": "Tchien",
      "countryCode": "LR"
  },
  {
      "label": "THD",
      "city": "Tinh Gia",
      "countryCode": "VN"
  },
  {
      "label": "THE",
      "city": "Teresina",
      "countryCode": "BR"
  },
  {
      "label": "THG",
      "city": "Thangool",
      "countryCode": "AU"
  },
  {
      "label": "THH",
      "city": "Taharoa",
      "countryCode": "NZ"
  },
  {
      "label": "THI",
      "city": "Tichitt",
      "countryCode": "MR"
  },
  {
      "label": "THK",
      "city": "Thakhek",
      "countryCode": "LA"
  },
  {
      "label": "THL",
      "city": "Tachilek",
      "countryCode": "MM"
  },
  {
      "label": "THM",
      "city": "Thompsonfield",
      "countryCode": "US"
  },
  {
      "label": "THN",
      "city": "Trollhattan",
      "countryCode": "SE"
  },
  {
      "label": "THO",
      "city": "Thorshofn",
      "countryCode": "IS"
  },
  {
      "label": "THP",
      "city": "Thermopolis",
      "countryCode": "US"
  },
  {
      "label": "THR",
      "city": "Tehran",
      "countryCode": "IR"
  },
  {
      "label": "THS",
      "city": "Sukhothai",
      "countryCode": "TH"
  },
  {
      "label": "THT",
      "city": "Tamchakett",
      "countryCode": "MR"
  },
  {
      "label": "THU",
      "city": "Thule",
      "countryCode": "GL"
  },
  {
      "label": "THV",
      "city": "York",
      "countryCode": "US"
  },
  {
      "label": "THY",
      "city": "Thohoyandou",
      "countryCode": "ZA"
  },
  {
      "label": "THZ",
      "city": "Tahoua",
      "countryCode": "NE"
  },
  {
      "label": "TIA",
      "city": "Tirana",
      "countryCode": "AL"
  },
  {
      "label": "TIB",
      "city": "Tibu",
      "countryCode": "CO"
  },
  {
      "label": "TIC",
      "city": "Tinak Island",
      "countryCode": "MH"
  },
  {
      "label": "TID",
      "city": "Tiaret",
      "countryCode": "DZ"
  },
  {
      "label": "TIE",
      "city": "Tippi",
      "countryCode": "ET"
  },
  {
      "label": "TIF",
      "city": "Taif",
      "countryCode": "SA"
  },
  {
      "label": "TIG",
      "city": "Tingwon",
      "countryCode": "PG"
  },
  {
      "label": "TIH",
      "city": "Tikehau Atoll",
      "countryCode": "PF"
  },
  {
      "label": "TII",
      "city": "Tirinkot",
      "countryCode": "AF"
  },
  {
      "label": "TIJ",
      "city": "Tijuana",
      "countryCode": "MX"
  },
  {
      "label": "TIL",
      "city": "Inverlake",
      "countryCode": "CA"
  },
  {
      "label": "TIM",
      "city": "Tembagapura",
      "countryCode": "ID"
  },
  {
      "label": "TIN",
      "city": "Tindouf",
      "countryCode": "DZ"
  },
  {
      "label": "TIO",
      "city": "Tilin",
      "countryCode": "MM"
  },
  {
      "label": "TIP",
      "city": "Tripoli",
      "countryCode": "LY"
  },
  {
      "label": "TIQ",
      "city": "Tinian",
      "countryCode": "MP"
  },
  {
      "label": "TIS",
      "city": "Thursday Island",
      "countryCode": "AU"
  },
  {
      "label": "TIU",
      "city": "Timaru",
      "countryCode": "NZ"
  },
  {
      "label": "TIV",
      "city": "Tivat",
      "countryCode": "YU"
  },
  {
      "label": "TIW",
      "city": "Tacoma",
      "countryCode": "US"
  },
  {
      "label": "TIX",
      "city": "Titusville",
      "countryCode": "US"
  },
  {
      "label": "TIY",
      "city": "Tidjikja",
      "countryCode": "MR"
  },
  {
      "label": "TIZ",
      "city": "Tari",
      "countryCode": "PG"
  },
  {
      "label": "TJA",
      "city": "Tarija",
      "countryCode": "BO"
  },
  {
      "label": "TJB",
      "city": "Tanjung Balai",
      "countryCode": "ID"
  },
  {
      "label": "TJC",
      "city": "Ticantiki",
      "countryCode": "PA"
  },
  {
      "label": "TJG",
      "city": "Tanjung Warukin",
      "countryCode": "ID"
  },
  {
      "label": "TJH",
      "city": "Toyooka",
      "countryCode": "JP"
  },
  {
      "label": "TJI",
      "city": "Trujillo",
      "countryCode": "HN"
  },
  {
      "label": "TJK",
      "city": "Tokat",
      "countryCode": "TR"
  },
  {
      "label": "TJL",
      "city": "Tres Lagoas",
      "countryCode": "BR"
  },
  {
      "label": "TJM",
      "city": "Tyumen",
      "countryCode": "RU"
  },
  {
      "label": "TJN",
      "city": "Takume",
      "countryCode": "PF"
  },
  {
      "label": "TJQ",
      "city": "Tandjung Pandan",
      "countryCode": "ID"
  },
  {
      "label": "TJS",
      "city": "Tanjung Selor",
      "countryCode": "ID"
  },
  {
      "label": "TJU",
      "city": "Kulob",
      "countryCode": "TJ"
  },
  {
      "label": "TKA",
      "city": "Talkeetna",
      "countryCode": "US"
  },
  {
      "label": "TKB",
      "city": "Tekadu",
      "countryCode": "PG"
  },
  {
      "label": "TKC",
      "city": "Tiko",
      "countryCode": "CM"
  },
  {
      "label": "TKD",
      "city": "Takoradi",
      "countryCode": "GH"
  },
  {
      "label": "TKF",
      "city": "Truckee",
      "countryCode": "US"
  },
  {
      "label": "TKG",
      "city": "Bandar Lampung",
      "countryCode": "ID"
  },
  {
      "label": "TKH",
      "city": "Takhli",
      "countryCode": "TH"
  },
  {
      "label": "TKI",
      "city": "Tokeen",
      "countryCode": "US"
  },
  {
      "label": "TKJ",
      "city": "Tok",
      "countryCode": "US"
  },
  {
      "label": "TKK",
      "city": "Truk",
      "countryCode": "FM"
  },
  {
      "label": "TKM",
      "city": "Tikal",
      "countryCode": "GT"
  },
  {
      "label": "TKN",
      "city": "Tokunoshima",
      "countryCode": "JP"
  },
  {
      "label": "TKO",
      "city": "Tlokoeng",
      "countryCode": "LS"
  },
  {
      "label": "TKP",
      "city": "Takapoto",
      "countryCode": "PF"
  },
  {
      "label": "TKQ",
      "city": "Kigoma",
      "countryCode": "TZ"
  },
  {
      "label": "TKR",
      "city": "Thakurgaon",
      "countryCode": "BD"
  },
  {
      "label": "TKS",
      "city": "Tokushima",
      "countryCode": "JP"
  },
  {
      "label": "TKT",
      "city": "Tak",
      "countryCode": "TH"
  },
  {
      "label": "TKU",
      "city": "Turku",
      "countryCode": "FI"
  },
  {
      "label": "TKV",
      "city": "Tatakoto",
      "countryCode": "PF"
  },
  {
      "label": "TKW",
      "city": "Tekin",
      "countryCode": "PG"
  },
  {
      "label": "TKX",
      "city": "Takaroa",
      "countryCode": "PF"
  },
  {
      "label": "TKY",
      "city": "Turkey Creek",
      "countryCode": "AU"
  },
  {
      "label": "TKZ",
      "city": "Tokoroa",
      "countryCode": "NZ"
  },
  {
      "label": "TLA",
      "city": "Teller",
      "countryCode": "US"
  },
  {
      "label": "TLB",
      "city": "Tarbela",
      "countryCode": "PK"
  },
  {
      "label": "TLC",
      "city": "Toluca",
      "countryCode": "MX"
  },
  {
      "label": "TLD",
      "city": "Tuli Lodge",
      "countryCode": "BW"
  },
  {
      "label": "TLE",
      "city": "Tulear",
      "countryCode": "MG"
  },
  {
      "label": "TLF",
      "city": "Telida",
      "countryCode": "US"
  },
  {
      "label": "TLG",
      "city": "Tulagi Island",
      "countryCode": "SB"
  },
  {
      "label": "TLH",
      "city": "Tallahassee",
      "countryCode": "US"
  },
  {
      "label": "TLI",
      "city": "Tolitoli",
      "countryCode": "ID"
  },
  {
      "label": "TLK",
      "city": "Talknafjordur",
      "countryCode": "IS"
  },
  {
      "label": "TLL",
      "city": "Tallinn",
      "countryCode": "EE"
  },
  {
      "label": "TLM",
      "city": "Tlemcen",
      "countryCode": "DZ"
  },
  {
      "label": "TLN",
      "city": "Toulon",
      "countryCode": "FR"
  },
  {
      "label": "TLO",
      "city": "Tol",
      "countryCode": "PG"
  },
  {
      "label": "TLP",
      "city": "Tumolbil",
      "countryCode": "PG"
  },
  {
      "label": "TLR",
      "city": "Tulare",
      "countryCode": "US"
  },
  {
      "label": "TLS",
      "city": "Toulouse",
      "countryCode": "FR"
  },
  {
      "label": "TLT",
      "city": "Tuluksak",
      "countryCode": "US"
  },
  {
      "label": "TLU",
      "city": "Tolu",
      "countryCode": "CO"
  },
  {
      "label": "TLV",
      "city": "Tel Aviv",
      "countryCode": "IL"
  },
  {
      "label": "TLW",
      "city": "Talasea",
      "countryCode": "PG"
  },
  {
      "label": "TLX",
      "city": "Talca",
      "countryCode": "CL"
  },
  {
      "label": "TLZ",
      "city": "Catalao",
      "countryCode": "BR"
  },
  {
      "label": "TMA",
      "city": "Tifton",
      "countryCode": "US"
  },
  {
      "label": "TMC",
      "city": "Tambolaka",
      "countryCode": "ID"
  },
  {
      "label": "TMD",
      "city": "Timbedra",
      "countryCode": "MR"
  },
  {
      "label": "TME",
      "city": "Tame",
      "countryCode": "CO"
  },
  {
      "label": "TMG",
      "city": "Tomanggong",
      "countryCode": "MY"
  },
  {
      "label": "TMH",
      "city": "Tanahmerah",
      "countryCode": "ID"
  },
  {
      "label": "TMI",
      "city": "Tumling Tar",
      "countryCode": "NP"
  },
  {
      "label": "TMJ",
      "city": "Termez Uz",
      "countryCode": "UZ"
  },
  {
      "label": "TMK",
      "city": "Tamky",
      "countryCode": "VN"
  },
  {
      "label": "TML",
      "city": "Tamale",
      "countryCode": "GH"
  },
  {
      "label": "TMM",
      "city": "Tamatave",
      "countryCode": "MG"
  },
  {
      "label": "TMN",
      "city": "Tamana Island",
      "countryCode": "KI"
  },
  {
      "label": "TMO",
      "city": "Tumeremo",
      "countryCode": "VE"
  },
  {
      "label": "TMP",
      "city": "Tampere",
      "countryCode": "FI"
  },
  {
      "label": "TMQ",
      "city": "Tambao",
      "countryCode": "BF"
  },
  {
      "label": "TMR",
      "city": "Tamanrasset",
      "countryCode": "DZ"
  },
  {
      "label": "TMS",
      "city": "Sao Tome Island",
      "countryCode": "ST"
  },
  {
      "label": "TMT",
      "city": "Trombetas",
      "countryCode": "BR"
  },
  {
      "label": "TMU",
      "city": "Tambour",
      "countryCode": "CR"
  },
  {
      "label": "TMW",
      "city": "Tamworth",
      "countryCode": "AU"
  },
  {
      "label": "TMX",
      "city": "Timimoun",
      "countryCode": "DZ"
  },
  {
      "label": "TMY",
      "city": "Tiom",
      "countryCode": "ID"
  },
  {
      "label": "TMZ",
      "city": "Thames",
      "countryCode": "NZ"
  },
  {
      "label": "TNA",
      "city": "Jinan",
      "countryCode": "CN"
  },
  {
      "label": "TNB",
      "city": "Tanah Grogot",
      "countryCode": "ID"
  },
  {
      "label": "TND",
      "city": "Trinidad",
      "countryCode": "CU"
  },
  {
      "label": "TNE",
      "city": "Tanegashima",
      "countryCode": "JP"
  },
  {
      "label": "TNG",
      "city": "Tangier",
      "countryCode": "MA"
  },
  {
      "label": "TNH",
      "city": "Tonghua",
      "countryCode": "CN"
  },
  {
      "label": "TNJ",
      "city": "Tanjung Pinang",
      "countryCode": "ID"
  },
  {
      "label": "TNK",
      "city": "Tununak",
      "countryCode": "US"
  },
  {
      "label": "TNL",
      "city": "Ternopol",
      "countryCode": "UA"
  },
  {
      "label": "TNM",
      "city": "Teniente R Marsh",
      "countryCode": "AQ"
  },
  {
      "label": "TNN",
      "city": "Tainan",
      "countryCode": "TW"
  },
  {
      "label": "TNO",
      "city": "Tamarindo",
      "countryCode": "CR"
  },
  {
      "label": "TNP",
      "city": "Twentynine Palms",
      "countryCode": "US"
  },
  {
      "label": "TNQ",
      "city": "Teraina",
      "countryCode": "KI"
  },
  {
      "label": "TNR",
      "city": "Antananarivo",
      "countryCode": "MG"
  },
  {
      "label": "TNS",
      "city": "Tungsten",
      "countryCode": "CA"
  },
  {
      "label": "TNU",
      "city": "Newton",
      "countryCode": "US"
  },
  {
      "label": "TNV",
      "city": "Tabuaeran",
      "countryCode": "KI"
  },
  {
      "label": "TNX",
      "city": "Stung Treng",
      "countryCode": "KH"
  },
  {
      "label": "TOA",
      "city": "Torrance",
      "countryCode": "US"
  },
  {
      "label": "TOB",
      "city": "Tobruk",
      "countryCode": "LY"
  },
  {
      "label": "TOC",
      "city": "Toccoa",
      "countryCode": "US"
  },
  {
      "label": "TOD",
      "city": "Tioman",
      "countryCode": "MY"
  },
  {
      "label": "TOE",
      "city": "Tozeur",
      "countryCode": "TN"
  },
  {
      "label": "TOF",
      "city": "Tomsk",
      "countryCode": "RU"
  },
  {
      "label": "TOG",
      "city": "Togiak Village",
      "countryCode": "US"
  },
  {
      "label": "TOH",
      "city": "Torres",
      "countryCode": "VU"
  },
  {
      "label": "TOI",
      "city": "Troy",
      "countryCode": "US"
  },
  {
      "label": "TOJ",
      "city": "Madrid",
      "countryCode": "ES"
  },
  {
      "label": "TOK",
      "city": "Torokina",
      "countryCode": "PG"
  },
  {
      "label": "TOL",
      "city": "Toledo",
      "countryCode": "US"
  },
  {
      "label": "TOM",
      "city": "Tombouctou",
      "countryCode": "ML"
  },
  {
      "label": "TON",
      "city": "Tonu",
      "countryCode": "PG"
  },
  {
      "label": "TOO",
      "city": "San Vito",
      "countryCode": "CR"
  },
  {
      "label": "TOP",
      "city": "Topeka",
      "countryCode": "US"
  },
  {
      "label": "TOQ",
      "city": "Tocopilla",
      "countryCode": "CL"
  },
  {
      "label": "TOR",
      "city": "Torrington",
      "countryCode": "US"
  },
  {
      "label": "TOS",
      "city": "Tromso",
      "countryCode": "NO"
  },
  {
      "label": "TOT",
      "city": "Totness",
      "countryCode": "SR"
  },
  {
      "label": "TOU",
      "city": "Touho",
      "countryCode": "NC"
  },
  {
      "label": "TOV",
      "city": "Tortola",
      "countryCode": "VG"
  },
  {
      "label": "TOW",
      "city": "Toledo",
      "countryCode": "BR"
  },
  {
      "label": "TOX",
      "city": "Tobolsk",
      "countryCode": "RU"
  },
  {
      "label": "TOY",
      "city": "Toyama",
      "countryCode": "JP"
  },
  {
      "label": "TOZ",
      "city": "Touba",
      "countryCode": "CI"
  },
  {
      "label": "TPA",
      "city": "Tampa",
      "countryCode": "US"
  },
  {
      "label": "TPB",
      "city": "Bristol",
      "countryCode": "GB"
  },
  {
      "label": "TPC",
      "city": "Tarapoa",
      "countryCode": "EC"
  },
  {
      "label": "TPE",
      "city": "Taipei",
      "countryCode": "TW"
  },
  {
      "label": "TPG",
      "city": "Taiping",
      "countryCode": "MY"
  },
  {
      "label": "TPH",
      "city": "Tonopah",
      "countryCode": "US"
  },
  {
      "label": "TPI",
      "city": "Tapini",
      "countryCode": "PG"
  },
  {
      "label": "TPJ",
      "city": "Taplejung",
      "countryCode": "NP"
  },
  {
      "label": "TPK",
      "city": "Tapaktuan",
      "countryCode": "ID"
  },
  {
      "label": "TPL",
      "city": "Temple",
      "countryCode": "US"
  },
  {
      "label": "TPN",
      "city": "Tiputini",
      "countryCode": "EC"
  },
  {
      "label": "TPO",
      "city": "Tanalian Point",
      "countryCode": "US"
  },
  {
      "label": "TPP",
      "city": "Tarapoto",
      "countryCode": "PE"
  },
  {
      "label": "TPQ",
      "city": "Tepic",
      "countryCode": "MX"
  },
  {
      "label": "TPR",
      "city": "Tom Price",
      "countryCode": "AU"
  },
  {
      "label": "TPS",
      "city": "Trapani",
      "countryCode": "IT"
  },
  {
      "label": "TPT",
      "city": "Tapeta",
      "countryCode": "LR"
  },
  {
      "label": "TPU",
      "city": "Tikapur",
      "countryCode": "NP"
  },
  {
      "label": "TQN",
      "city": "Taluqan",
      "countryCode": "AF"
  },
  {
      "label": "TQR",
      "city": "San Domino",
      "countryCode": "IT"
  },
  {
      "label": "TQS",
      "city": "Tres Esquinas",
      "countryCode": "CO"
  },
  {
      "label": "TRA",
      "city": "Taramajima",
      "countryCode": "JP"
  },
  {
      "label": "TRB",
      "city": "Turbo",
      "countryCode": "CO"
  },
  {
      "label": "TRC",
      "city": "Torreon",
      "countryCode": "MX"
  },
  {
      "label": "TRD",
      "city": "Trondheim",
      "countryCode": "NO"
  },
  {
      "label": "TRE",
      "city": "Tiree",
      "countryCode": "GB"
  },
  {
      "label": "TRF",
      "city": "Sandefjord",
      "countryCode": "NO"
  },
  {
      "label": "TRG",
      "city": "Tauranga",
      "countryCode": "NZ"
  },
  {
      "label": "TRH",
      "city": "Trona",
      "countryCode": "US"
  },
  {
      "label": "TRI",
      "city": "Bristol",
      "countryCode": "US"
  },
  {
      "label": "TRJ",
      "city": "Tarakbits",
      "countryCode": "PG"
  },
  {
      "label": "TRK",
      "city": "Tarakan",
      "countryCode": "ID"
  },
  {
      "label": "TRL",
      "city": "Terrell",
      "countryCode": "US"
  },
  {
      "label": "TRM",
      "city": "Thermal",
      "countryCode": "US"
  },
  {
      "label": "TRN",
      "city": "Turin",
      "countryCode": "IT"
  },
  {
      "label": "TRO",
      "city": "Taree",
      "countryCode": "AU"
  },
  {
      "label": "TRQ",
      "city": "Tarauaca",
      "countryCode": "BR"
  },
  {
      "label": "TRR",
      "city": "Trincomalee",
      "countryCode": "LK"
  },
  {
      "label": "TRS",
      "city": "Trieste",
      "countryCode": "IT"
  },
  {
      "label": "TRT",
      "city": "Tremonton",
      "countryCode": "US"
  },
  {
      "label": "TRU",
      "city": "Trujillo",
      "countryCode": "PE"
  },
  {
      "label": "TRW",
      "city": "Tarawa",
      "countryCode": "KI"
  },
  {
      "label": "TRX",
      "city": "Trenton",
      "countryCode": "US"
  },
  {
      "label": "TRY",
      "city": "Tororo",
      "countryCode": "UG"
  },
  {
      "label": "TSB",
      "city": "Tsumeb",
      "countryCode": "NA"
  },
  {
      "label": "TSC",
      "city": "Taisha",
      "countryCode": "EC"
  },
  {
      "label": "TSD",
      "city": "Tshipise",
      "countryCode": "ZA"
  },
  {
      "label": "TSE",
      "city": "Astana",
      "countryCode": "KZ"
  },
  {
      "label": "TSG",
      "city": "Tanacross",
      "countryCode": "US"
  },
  {
      "label": "TSH",
      "city": "Tshikapa",
      "countryCode": "CD"
  },
  {
      "label": "TSI",
      "city": "Tsili Tsili",
      "countryCode": "PG"
  },
  {
      "label": "TSJ",
      "city": "Tsushima",
      "countryCode": "JP"
  },
  {
      "label": "TSK",
      "city": "Taskul",
      "countryCode": "PG"
  },
  {
      "label": "TSL",
      "city": "Tamuin",
      "countryCode": "MX"
  },
  {
      "label": "TSM",
      "city": "Taos",
      "countryCode": "US"
  },
  {
      "label": "TSN",
      "city": "Tianjin",
      "countryCode": "CN"
  },
  {
      "label": "TSP",
      "city": "Tehachapi",
      "countryCode": "US"
  },
  {
      "label": "TSQ",
      "city": "Torres",
      "countryCode": "BR"
  },
  {
      "label": "TSR",
      "city": "Timisoara",
      "countryCode": "RO"
  },
  {
      "label": "TST",
      "city": "Trang",
      "countryCode": "TH"
  },
  {
      "label": "TSU",
      "city": "Tabiteuea South",
      "countryCode": "KI"
  },
  {
      "label": "TSV",
      "city": "Townsville",
      "countryCode": "AU"
  },
  {
      "label": "TSW",
      "city": "Tsewi",
      "countryCode": "PG"
  },
  {
      "label": "TSX",
      "city": "Tanjung Santan",
      "countryCode": "ID"
  },
  {
      "label": "TSY",
      "city": "Tasikmalaya",
      "countryCode": "ID"
  },
  {
      "label": "TSZ",
      "city": "Tsetserleg",
      "countryCode": "MN"
  },
  {
      "label": "TTA",
      "city": "Tan Tan",
      "countryCode": "MA"
  },
  {
      "label": "TTB",
      "city": "Tortoli",
      "countryCode": "IT"
  },
  {
      "label": "TTC",
      "city": "Taltal",
      "countryCode": "CL"
  },
  {
      "label": "TTD",
      "city": "Troutdale",
      "countryCode": "US"
  },
  {
      "label": "TTE",
      "city": "Ternate",
      "countryCode": "ID"
  },
  {
      "label": "TTG",
      "city": "Tartagal",
      "countryCode": "AR"
  },
  {
      "label": "TTH",
      "city": "Thumrait",
      "countryCode": "OM"
  },
  {
      "label": "TTI",
      "city": "Tetiaroa Island",
      "countryCode": "PF"
  },
  {
      "label": "TTJ",
      "city": "Tottori",
      "countryCode": "JP"
  },
  {
      "label": "TTK",
      "city": "Tottenham Hale Station",
      "countryCode": "GB"
  },
  {
      "label": "TTL",
      "city": "Turtle Island",
      "countryCode": "FJ"
  },
  {
      "label": "TTM",
      "city": "Tablon De Tamara",
      "countryCode": "CO"
  },
  {
      "label": "TTN",
      "city": "Trenton",
      "countryCode": "US"
  },
  {
      "label": "TTO",
      "city": "Britton",
      "countryCode": "US"
  },
  {
      "label": "TTQ",
      "city": "Tortuquero",
      "countryCode": "CR"
  },
  {
      "label": "TTR",
      "city": "Tana Toraja",
      "countryCode": "ID"
  },
  {
      "label": "TTS",
      "city": "Tsaratanana",
      "countryCode": "MG"
  },
  {
      "label": "TTT",
      "city": "Taitung",
      "countryCode": "TW"
  },
  {
      "label": "TTU",
      "city": "Tetuan",
      "countryCode": "MA"
  },
  {
      "label": "TUA",
      "city": "Tulcan",
      "countryCode": "EC"
  },
  {
      "label": "TUB",
      "city": "Tubuai",
      "countryCode": "PF"
  },
  {
      "label": "TUC",
      "city": "Tucuman",
      "countryCode": "AR"
  },
  {
      "label": "TUD",
      "city": "Tambacounda",
      "countryCode": "SN"
  },
  {
      "label": "TUE",
      "city": "Tupile",
      "countryCode": "PA"
  },
  {
      "label": "TUF",
      "city": "Tours",
      "countryCode": "FR"
  },
  {
      "label": "TUG",
      "city": "Tuguegarao",
      "countryCode": "PH"
  },
  {
      "label": "TUI",
      "city": "Turaif",
      "countryCode": "SA"
  },
  {
      "label": "TUJ",
      "city": "Tum",
      "countryCode": "ET"
  },
  {
      "label": "TUK",
      "city": "Turbat",
      "countryCode": "PK"
  },
  {
      "label": "TUL",
      "city": "Tulsa",
      "countryCode": "US"
  },
  {
      "label": "TUM",
      "city": "Tumut",
      "countryCode": "AU"
  },
  {
      "label": "TUN",
      "city": "Tunis",
      "countryCode": "TN"
  },
  {
      "label": "TUO",
      "city": "Taupo",
      "countryCode": "NZ"
  },
  {
      "label": "TUP",
      "city": "Tupelo",
      "countryCode": "US"
  },
  {
      "label": "TUQ",
      "city": "Tougan",
      "countryCode": "BF"
  },
  {
      "label": "TUR",
      "city": "Tucurui",
      "countryCode": "BR"
  },
  {
      "label": "TUS",
      "city": "Tucson",
      "countryCode": "US"
  },
  {
      "label": "TUT",
      "city": "Tauta",
      "countryCode": "PG"
  },
  {
      "label": "TUU",
      "city": "Tabuk",
      "countryCode": "SA"
  },
  {
      "label": "TUV",
      "city": "Tucupita",
      "countryCode": "VE"
  },
  {
      "label": "TUW",
      "city": "Tubala",
      "countryCode": "PA"
  },
  {
      "label": "TUX",
      "city": "Tumbler Ridge",
      "countryCode": "CA"
  },
  {
      "label": "TUY",
      "city": "Tulum",
      "countryCode": "MX"
  },
  {
      "label": "TUZ",
      "city": "Tucuma",
      "countryCode": "BR"
  },
  {
      "label": "TVA",
      "city": "Morafenobe",
      "countryCode": "MG"
  },
  {
      "label": "TVC",
      "city": "Traverse City",
      "countryCode": "US"
  },
  {
      "label": "TVF",
      "city": "Thief River Falls",
      "countryCode": "US"
  },
  {
      "label": "TVI",
      "city": "Thomasville",
      "countryCode": "US"
  },
  {
      "label": "TVL",
      "city": "Lake Tahoe South",
      "countryCode": "US"
  },
  {
      "label": "TVU",
      "city": "Taveuni",
      "countryCode": "FJ"
  },
  {
      "label": "TVY",
      "city": "Dawe",
      "countryCode": "MM"
  },
  {
      "label": "TWA",
      "city": "Twin Hills",
      "countryCode": "US"
  },
  {
      "label": "TWB",
      "city": "Toowoomba",
      "countryCode": "AU"
  },
  {
      "label": "TWD",
      "city": "Port Townsend",
      "countryCode": "US"
  },
  {
      "label": "TWE",
      "city": "Taylor",
      "countryCode": "US"
  },
  {
      "label": "TWF",
      "city": "Twin Falls",
      "countryCode": "US"
  },
  {
      "label": "TWN",
      "city": "Tewantin",
      "countryCode": "AU"
  },
  {
      "label": "TWP",
      "city": "Torwood",
      "countryCode": "AU"
  },
  {
      "label": "TWT",
      "city": "Tawitawi",
      "countryCode": "PH"
  },
  {
      "label": "TWU",
      "city": "Tawau",
      "countryCode": "MY"
  },
  {
      "label": "TWY",
      "city": "Tawa",
      "countryCode": "PG"
  },
  {
      "label": "TXF",
      "city": "Teixeira Freitas",
      "countryCode": "BR"
  },
  {
      "label": "TXG",
      "city": "Taichung",
      "countryCode": "TW"
  },
  {
      "label": "TXK",
      "city": "Texarkana",
      "countryCode": "US"
  },
  {
      "label": "TXM",
      "city": "Teminabuan",
      "countryCode": "ID"
  },
  {
      "label": "TXN",
      "city": "Tunxi",
      "countryCode": "CN"
  },
  {
      "label": "TXR",
      "city": "Tanbar",
      "countryCode": "AU"
  },
  {
      "label": "TXU",
      "city": "Tabou",
      "countryCode": "CI"
  },
  {
      "label": "TYA",
      "city": "Tula",
      "countryCode": "RU"
  },
  {
      "label": "TYB",
      "city": "Tibooburra",
      "countryCode": "AU"
  },
  {
      "label": "TYD",
      "city": "Tynda",
      "countryCode": "RU"
  },
  {
      "label": "TYE",
      "city": "Tyonek",
      "countryCode": "US"
  },
  {
      "label": "TYF",
      "city": "Torsby",
      "countryCode": "SE"
  },
  {
      "label": "TYG",
      "city": "Thylungra",
      "countryCode": "AU"
  },
  {
      "label": "TYL",
      "city": "Talara",
      "countryCode": "PE"
  },
  {
      "label": "TYM",
      "city": "Staniel Cay",
      "countryCode": "BS"
  },
  {
      "label": "TYN",
      "city": "Taiyuan",
      "countryCode": "CN"
  },
  {
      "label": "TYO",
      "city": "Tokyo",
      "countryCode": "JP"
  },
  {
      "label": "TYP",
      "city": "Tobermorey",
      "countryCode": "AU"
  },
  {
      "label": "TYR",
      "city": "Tyler",
      "countryCode": "US"
  },
  {
      "label": "TYS",
      "city": "Knoxville",
      "countryCode": "US"
  },
  {
      "label": "TYT",
      "city": "Treinta Y Tres",
      "countryCode": "UY"
  },
  {
      "label": "TYZ",
      "city": "Taylor",
      "countryCode": "US"
  },
  {
      "label": "TZL",
      "city": "Tuzla",
      "countryCode": "BA"
  },
  {
      "label": "TZM",
      "city": "Tizimin",
      "countryCode": "MX"
  },
  {
      "label": "TZN",
      "city": "South Andros",
      "countryCode": "BS"
  },
  {
      "label": "TZX",
      "city": "Trabzon",
      "countryCode": "TR"
  },
  {
      "label": "UAC",
      "city": "San Luis Rio Colorado",
      "countryCode": "MX"
  },
  {
      "label": "UAE",
      "city": "Mount Aue",
      "countryCode": "PG"
  },
  {
      "label": "UAH",
      "city": "Ua Huka",
      "countryCode": "PF"
  },
  {
      "label": "UAI",
      "city": "Suai",
      "countryCode": "ID"
  },
  {
      "label": "UAK",
      "city": "Narsarsuaq",
      "countryCode": "GL"
  },
  {
      "label": "UAL",
      "city": "Luau",
      "countryCode": "AO"
  },
  {
      "label": "UAP",
      "city": "Ua Pou",
      "countryCode": "PF"
  },
  {
      "label": "UAQ",
      "city": "San Juan",
      "countryCode": "AR"
  },
  {
      "label": "UAS",
      "city": "Samburu",
      "countryCode": "KE"
  },
  {
      "label": "UAX",
      "city": "Uaxactun",
      "countryCode": "GT"
  },
  {
      "label": "UBA",
      "city": "Uberaba",
      "countryCode": "BR"
  },
  {
      "label": "UBB",
      "city": "Mabuiag Island",
      "countryCode": "AU"
  },
  {
      "label": "UBI",
      "city": "Buin",
      "countryCode": "PG"
  },
  {
      "label": "UBJ",
      "city": "Ube",
      "countryCode": "JP"
  },
  {
      "label": "UBP",
      "city": "Ubon Ratchathani",
      "countryCode": "TH"
  },
  {
      "label": "UBR",
      "city": "Ubrub",
      "countryCode": "ID"
  },
  {
      "label": "UBS",
      "city": "Columbus",
      "countryCode": "US"
  },
  {
      "label": "UBT",
      "city": "Ubatuba",
      "countryCode": "BR"
  },
  {
      "label": "UBU",
      "city": "Kalumburu",
      "countryCode": "AU"
  },
  {
      "label": "UCA",
      "city": "Utica",
      "countryCode": "US"
  },
  {
      "label": "UCC",
      "city": "Yucca Flat",
      "countryCode": "US"
  },
  {
      "label": "UCE",
      "city": "Eunice",
      "countryCode": "US"
  },
  {
      "label": "UCK",
      "city": "Lutsk",
      "countryCode": "UA"
  },
  {
      "label": "UCN",
      "city": "Buchanan",
      "countryCode": "LR"
  },
  {
      "label": "UCT",
      "city": "Ukhta",
      "countryCode": "RU"
  },
  {
      "label": "UCY",
      "city": "Union City",
      "countryCode": "US"
  },
  {
      "label": "UDA",
      "city": "Undarra",
      "countryCode": "AU"
  },
  {
      "label": "UDE",
      "city": "Uden",
      "countryCode": "NL"
  },
  {
      "label": "UDI",
      "city": "Uberlandia",
      "countryCode": "BR"
  },
  {
      "label": "UDJ",
      "city": "Uzhgorod",
      "countryCode": "UA"
  },
  {
      "label": "UDN",
      "city": "Udine",
      "countryCode": "IT"
  },
  {
      "label": "UDO",
      "city": "Udomxay",
      "countryCode": "LA"
  },
  {
      "label": "UEE",
      "city": "Queenstown",
      "countryCode": "AU"
  },
  {
      "label": "UEL",
      "city": "Quelimane",
      "countryCode": "MZ"
  },
  {
      "label": "UEO",
      "city": "Kumejima",
      "countryCode": "JP"
  },
  {
      "label": "UES",
      "city": "Waukesha",
      "countryCode": "US"
  },
  {
      "label": "UET",
      "city": "Quetta",
      "countryCode": "PK"
  },
  {
      "label": "UFA",
      "city": "Ufa",
      "countryCode": "RU"
  },
  {
      "label": "UGA",
      "city": "Bulgan",
      "countryCode": "MN"
  },
  {
      "label": "UGC",
      "city": "Urgench",
      "countryCode": "UZ"
  },
  {
      "label": "UGI",
      "city": "Uganik",
      "countryCode": "US"
  },
  {
      "label": "UGN",
      "city": "Waukegan",
      "countryCode": "US"
  },
  {
      "label": "UGO",
      "city": "Uige",
      "countryCode": "AO"
  },
  {
      "label": "UGS",
      "city": "Ugashik",
      "countryCode": "US"
  },
  {
      "label": "UGU",
      "city": "Zugapa Indonesia",
      "countryCode": "ID"
  },
  {
      "label": "UHE",
      "city": "Uherske Hradiste",
      "countryCode": "CZ"
  },
  {
      "label": "UIB",
      "city": "Quibdo",
      "countryCode": "CO"
  },
  {
      "label": "UIH",
      "city": "Qui Nhon",
      "countryCode": "VN"
  },
  {
      "label": "UII",
      "city": "Utila",
      "countryCode": "HN"
  },
  {
      "label": "UIK",
      "city": "Ust Ilimsk",
      "countryCode": "RU"
  },
  {
      "label": "UIL",
      "city": "Quillayute",
      "countryCode": "US"
  },
  {
      "label": "UIN",
      "city": "Quincy",
      "countryCode": "US"
  },
  {
      "label": "UIO",
      "city": "Quito",
      "countryCode": "EC"
  },
  {
      "label": "UIP",
      "city": "Quimper",
      "countryCode": "FR"
  },
  {
      "label": "UIQ",
      "city": "Quine Hill",
      "countryCode": "VU"
  },
  {
      "label": "UIR",
      "city": "Quirindi",
      "countryCode": "AU"
  },
  {
      "label": "UIT",
      "city": "Jaluit Island",
      "countryCode": "MH"
  },
  {
      "label": "UIZ",
      "city": "Utica",
      "countryCode": "US"
  },
  {
      "label": "UJE",
      "city": "Ujae Island",
      "countryCode": "MH"
  },
  {
      "label": "UKA",
      "city": "Ukunda",
      "countryCode": "KE"
  },
  {
      "label": "UKB",
      "city": "Kobe",
      "countryCode": "JP"
  },
  {
      "label": "UKI",
      "city": "Ukiah",
      "countryCode": "US"
  },
  {
      "label": "UKK",
      "city": "Ust Kamenogorsk",
      "countryCode": "KZ"
  },
  {
      "label": "UKN",
      "city": "Waukon",
      "countryCode": "US"
  },
  {
      "label": "UKR",
      "city": "Mukeiras",
      "countryCode": "YE"
  },
  {
      "label": "UKT",
      "city": "Quakertown",
      "countryCode": "US"
  },
  {
      "label": "UKU",
      "city": "Nuku",
      "countryCode": "PG"
  },
  {
      "label": "UKX",
      "city": "Ust Kut",
      "countryCode": "RU"
  },
  {
      "label": "UKY",
      "city": "Kyoto",
      "countryCode": "JP"
  },
  {
      "label": "ULA",
      "city": "San Julian",
      "countryCode": "AR"
  },
  {
      "label": "ULB",
      "city": "Ulei",
      "countryCode": "VU"
  },
  {
      "label": "ULD",
      "city": "Ulundi",
      "countryCode": "ZA"
  },
  {
      "label": "ULE",
      "city": "Sule",
      "countryCode": "PG"
  },
  {
      "label": "ULG",
      "city": "Ulgii",
      "countryCode": "MN"
  },
  {
      "label": "ULH",
      "city": "Al-Ula",
      "countryCode": "SA"
  },
  {
      "label": "ULI",
      "city": "Ulithi",
      "countryCode": "FM"
  },
  {
      "label": "ULL",
      "city": "Mull",
      "countryCode": "GB"
  },
  {
      "label": "ULM",
      "city": "New Ulm",
      "countryCode": "US"
  },
  {
      "label": "ULN",
      "city": "Ulan Bator",
      "countryCode": "MN"
  },
  {
      "label": "ULO",
      "city": "Ulaangom",
      "countryCode": "MN"
  },
  {
      "label": "ULP",
      "city": "Quilpie",
      "countryCode": "AU"
  },
  {
      "label": "ULQ",
      "city": "Tulua",
      "countryCode": "CO"
  },
  {
      "label": "ULS",
      "city": "Mulatos",
      "countryCode": "CO"
  },
  {
      "label": "ULU",
      "city": "Gulu",
      "countryCode": "UG"
  },
  {
      "label": "ULV",
      "city": "Ulyanovsk",
      "countryCode": "RU"
  },
  {
      "label": "ULX",
      "city": "Ulusaba",
      "countryCode": "ZA"
  },
  {
      "label": "ULY",
      "city": "Ulyanovsk",
      "countryCode": "RU"
  },
  {
      "label": "ULZ",
      "city": "Uliastai",
      "countryCode": "MN"
  },
  {
      "label": "UMA",
      "city": "Punta De Maisi",
      "countryCode": "CU"
  },
  {
      "label": "UMB",
      "city": "Umnak Island",
      "countryCode": "US"
  },
  {
      "label": "UMC",
      "city": "Umba",
      "countryCode": "PG"
  },
  {
      "label": "UMD",
      "city": "Uummannaq",
      "countryCode": "GL"
  },
  {
      "label": "UME",
      "city": "Umea",
      "countryCode": "SE"
  },
  {
      "label": "UMI",
      "city": "Quincemil",
      "countryCode": "PE"
  },
  {
      "label": "UMM",
      "city": "Summit",
      "countryCode": "US"
  },
  {
      "label": "UMR",
      "city": "Woomera",
      "countryCode": "AU"
  },
  {
      "label": "UMT",
      "city": "Umiat",
      "countryCode": "US"
  },
  {
      "label": "UMU",
      "city": "Umuarama",
      "countryCode": "BR"
  },
  {
      "label": "UMY",
      "city": "Sumy",
      "countryCode": "UA"
  },
  {
      "label": "UNA",
      "city": "Una",
      "countryCode": "BR"
  },
  {
      "label": "UNC",
      "city": "Unguia",
      "countryCode": "CO"
  },
  {
      "label": "UND",
      "city": "Kunduz",
      "countryCode": "AF"
  },
  {
      "label": "UNE",
      "city": "Qachas Nek",
      "countryCode": "LS"
  },
  {
      "label": "UNG",
      "city": "Kiunga",
      "countryCode": "PG"
  },
  {
      "label": "UNI",
      "city": "Union Island",
      "countryCode": "VC"
  },
  {
      "label": "UNK",
      "city": "Unalakleet",
      "countryCode": "US"
  },
  {
      "label": "UNN",
      "city": "Ranong",
      "countryCode": "TH"
  },
  {
      "label": "UNR",
      "city": "Underkhaan",
      "countryCode": "MN"
  },
  {
      "label": "UNT",
      "city": "Unst Shetland Is",
      "countryCode": "GB"
  },
  {
      "label": "UNU",
      "city": "Juneau",
      "countryCode": "US"
  },
  {
      "label": "UOL",
      "city": "Buol",
      "countryCode": "ID"
  },
  {
      "label": "UON",
      "city": "Muong Sai",
      "countryCode": "LA"
  },
  {
      "label": "UOS",
      "city": "Sewanee",
      "countryCode": "US"
  },
  {
      "label": "UOX",
      "city": "Oxford",
      "countryCode": "US"
  },
  {
      "label": "UPA",
      "city": "Punta Alegre",
      "countryCode": "CU"
  },
  {
      "label": "UPC",
      "city": "Puerto La Cruz",
      "countryCode": "ES"
  },
  {
      "label": "UPF",
      "city": "Pforzheim",
      "countryCode": "DE"
  },
  {
      "label": "UPG",
      "city": "Ujung Pandang",
      "countryCode": "ID"
  },
  {
      "label": "UPL",
      "city": "Upala",
      "countryCode": "CR"
  },
  {
      "label": "UPN",
      "city": "Uruapan",
      "countryCode": "MX"
  },
  {
      "label": "UPP",
      "city": "Upolu Point",
      "countryCode": "US"
  },
  {
      "label": "UPR",
      "city": "Upiara",
      "countryCode": "PG"
  },
  {
      "label": "UPV",
      "city": "Upavon",
      "countryCode": "GB"
  },
  {
      "label": "UQE",
      "city": "Queen",
      "countryCode": "US"
  },
  {
      "label": "URA",
      "city": "Uralsk",
      "countryCode": "KZ"
  },
  {
      "label": "URB",
      "city": "Urubupunga",
      "countryCode": "BR"
  },
  {
      "label": "URC",
      "city": "Urumqi",
      "countryCode": "CN"
  },
  {
      "label": "URD",
      "city": "Burg Feuerstein",
      "countryCode": "DE"
  },
  {
      "label": "URE",
      "city": "Kuressaare",
      "countryCode": "EE"
  },
  {
      "label": "URG",
      "city": "Uruguaiana",
      "countryCode": "BR"
  },
  {
      "label": "URI",
      "city": "Uribe",
      "countryCode": "CO"
  },
  {
      "label": "URJ",
      "city": "Uraj",
      "countryCode": "RU"
  },
  {
      "label": "URM",
      "city": "Uriman",
      "countryCode": "VE"
  },
  {
      "label": "URN",
      "city": "Urgoon",
      "countryCode": "AF"
  },
  {
      "label": "URO",
      "city": "Rouen",
      "countryCode": "FR"
  },
  {
      "label": "URR",
      "city": "Urrao",
      "countryCode": "CO"
  },
  {
      "label": "URS",
      "city": "Kursk",
      "countryCode": "RU"
  },
  {
      "label": "URT",
      "city": "Surat Thani",
      "countryCode": "TH"
  },
  {
      "label": "URU",
      "city": "Uroubi",
      "countryCode": "PG"
  },
  {
      "label": "URY",
      "city": "Gurayat",
      "countryCode": "SA"
  },
  {
      "label": "URZ",
      "city": "Uruzgan",
      "countryCode": "AF"
  },
  {
      "label": "USC",
      "city": "Union S Carolina",
      "countryCode": "US"
  },
  {
      "label": "USH",
      "city": "Ushuaia",
      "countryCode": "AR"
  },
  {
      "label": "USI",
      "city": "Mabaruma",
      "countryCode": "GY"
  },
  {
      "label": "USK",
      "city": "Usinsk",
      "countryCode": "RU"
  },
  {
      "label": "USL",
      "city": "Useless Loop",
      "countryCode": "AU"
  },
  {
      "label": "USM",
      "city": "Koh Samui",
      "countryCode": "TH"
  },
  {
      "label": "USN",
      "city": "Ulsan",
      "countryCode": "KR"
  },
  {
      "label": "USO",
      "city": "Usino",
      "countryCode": "PG"
  },
  {
      "label": "USQ",
      "city": "Usak",
      "countryCode": "TR"
  },
  {
      "label": "USS",
      "city": "Sancti Spiritus",
      "countryCode": "CU"
  },
  {
      "label": "UST",
      "city": "St Augustine",
      "countryCode": "US"
  },
  {
      "label": "USU",
      "city": "Busuanga",
      "countryCode": "PH"
  },
  {
      "label": "UTA",
      "city": "Mutare",
      "countryCode": "ZW"
  },
  {
      "label": "UTB",
      "city": "Muttaburra",
      "countryCode": "AU"
  },
  {
      "label": "UTC",
      "city": "Utrecht",
      "countryCode": "NL"
  },
  {
      "label": "UTD",
      "city": "Nutwood Downs",
      "countryCode": "AU"
  },
  {
      "label": "UTE",
      "city": "Butterworth",
      "countryCode": "ZA"
  },
  {
      "label": "UTG",
      "city": "Quthing",
      "countryCode": "LS"
  },
  {
      "label": "UTH",
      "city": "Udon Thani",
      "countryCode": "TH"
  },
  {
      "label": "UTI",
      "city": "Kouvola",
      "countryCode": "FI"
  },
  {
      "label": "UTK",
      "city": "Utirik Island",
      "countryCode": "MH"
  },
  {
      "label": "UTL",
      "city": "Torremolinos",
      "countryCode": "ES"
  },
  {
      "label": "UTM",
      "city": "Tunica",
      "countryCode": "US"
  },
  {
      "label": "UTN",
      "city": "Upington",
      "countryCode": "ZA"
  },
  {
      "label": "UTP",
      "city": "Pattaya",
      "countryCode": "TH"
  },
  {
      "label": "UTR",
      "city": "Uttaradit",
      "countryCode": "TH"
  },
  {
      "label": "UTT",
      "city": "Umtata",
      "countryCode": "ZA"
  },
  {
      "label": "UTU",
      "city": "Ustupo",
      "countryCode": "PA"
  },
  {
      "label": "UTW",
      "city": "Queenstown",
      "countryCode": "ZA"
  },
  {
      "label": "UUA",
      "city": "Bugulma",
      "countryCode": "RU"
  },
  {
      "label": "UUD",
      "city": "Ulan Ude",
      "countryCode": "RU"
  },
  {
      "label": "UUK",
      "city": "Kuparuk",
      "countryCode": "US"
  },
  {
      "label": "UUN",
      "city": "Baruun Urt",
      "countryCode": "MN"
  },
  {
      "label": "UUS",
      "city": "Yuzhno Sakhalinsk",
      "countryCode": "RU"
  },
  {
      "label": "UUU",
      "city": "Manumu",
      "countryCode": "PG"
  },
  {
      "label": "UVA",
      "city": "Uvalde",
      "countryCode": "US"
  },
  {
      "label": "UVE",
      "city": "Ouvea",
      "countryCode": "NC"
  },
  {
      "label": "UVL",
      "city": "Kharga",
      "countryCode": "EG"
  },
  {
      "label": "UVO",
      "city": "Uvol",
      "countryCode": "PG"
  },
  {
      "label": "UWA",
      "city": "Ware",
      "countryCode": "US"
  },
  {
      "label": "UWE",
      "city": "Wiesbaden",
      "countryCode": "DE"
  },
  {
      "label": "UWP",
      "city": "Wuppertal",
      "countryCode": "DE"
  },
  {
      "label": "UYL",
      "city": "Nyala",
      "countryCode": "SD"
  },
  {
      "label": "UYN",
      "city": "Yulin",
      "countryCode": "CN"
  },
  {
      "label": "UYU",
      "city": "Uyuni",
      "countryCode": "BO"
  },
  {
      "label": "UZC",
      "city": "Uzice",
      "countryCode": "YU"
  },
  {
      "label": "UZH",
      "city": "Unayzah",
      "countryCode": "SA"
  },
  {
      "label": "UZU",
      "city": "Curuzu Cuatia",
      "countryCode": "AR"
  },
  {
      "label": "VAA",
      "city": "Vaasa",
      "countryCode": "FI"
  },
  {
      "label": "VAB",
      "city": "Yavarate",
      "countryCode": "CO"
  },
  {
      "label": "VAC",
      "city": "Varrelbusch",
      "countryCode": "DE"
  },
  {
      "label": "VAF",
      "city": "Valence",
      "countryCode": "FR"
  },
  {
      "label": "VAG",
      "city": "Varginha",
      "countryCode": "BR"
  },
  {
      "label": "VAH",
      "city": "Vallegrande",
      "countryCode": "BO"
  },
  {
      "label": "VAI",
      "city": "Vanimo",
      "countryCode": "PG"
  },
  {
      "label": "VAK",
      "city": "Chevak",
      "countryCode": "US"
  },
  {
      "label": "VAL",
      "city": "Valenca",
      "countryCode": "BR"
  },
  {
      "label": "VAN",
      "city": "Van",
      "countryCode": "TR"
  },
  {
      "label": "VAO",
      "city": "Suavanao",
      "countryCode": "SB"
  },
  {
      "label": "VAP",
      "city": "Valparaiso",
      "countryCode": "CL"
  },
  {
      "label": "VAR",
      "city": "Varna",
      "countryCode": "BG"
  },
  {
      "label": "VAS",
      "city": "Sivas",
      "countryCode": "TR"
  },
  {
      "label": "VAT",
      "city": "Vatomandry",
      "countryCode": "MG"
  },
  {
      "label": "VAU",
      "city": "Vatukoula",
      "countryCode": "FJ"
  },
  {
      "label": "VAV",
      "city": "Vava'u",
      "countryCode": "TO"
  },
  {
      "label": "VAW",
      "city": "Vardoe",
      "countryCode": "NO"
  },
  {
      "label": "VAZ",
      "city": "Val D'Isere",
      "countryCode": "FR"
  },
  {
      "label": "VBS",
      "city": "Brescia",
      "countryCode": "IT"
  },
  {
      "label": "VBV",
      "city": "Vanuabalavu",
      "countryCode": "FJ"
  },
  {
      "label": "VBY",
      "city": "Visby",
      "countryCode": "SE"
  },
  {
      "label": "VCA",
      "city": "Can Tho",
      "countryCode": "VN"
  },
  {
      "label": "VCB",
      "city": "View Cove",
      "countryCode": "US"
  },
  {
      "label": "VCC",
      "city": "Limbe",
      "countryCode": "CM"
  },
  {
      "label": "VCD",
      "city": "Victoria River Do",
      "countryCode": "AU"
  },
  {
      "label": "VCE",
      "city": "Venice",
      "countryCode": "IT"
  },
  {
      "label": "VCF",
      "city": "Valcheta",
      "countryCode": "AR"
  },
  {
      "label": "VCH",
      "city": "Vichadero",
      "countryCode": "UY"
  },
  {
      "label": "VCL",
      "city": "Tam Ky",
      "countryCode": "VN"
  },
  {
      "label": "VCR",
      "city": "Carora",
      "countryCode": "VE"
  },
  {
      "label": "VCT",
      "city": "Victoria",
      "countryCode": "US"
  },
  {
      "label": "VDA",
      "city": "Ovda",
      "countryCode": "IL"
  },
  {
      "label": "VDB",
      "city": "Fagernes",
      "countryCode": "NO"
  },
  {
      "label": "VDC",
      "city": "Vitoria Da Cnquis",
      "countryCode": "BR"
  },
  {
      "label": "VDE",
      "city": "Valverde",
      "countryCode": "ES"
  },
  {
      "label": "VDH",
      "city": "Hai Phong",
      "countryCode": "VN"
  },
  {
      "label": "VDI",
      "city": "Vidalia",
      "countryCode": "US"
  },
  {
      "label": "VDM",
      "city": "Viedma",
      "countryCode": "AR"
  },
  {
      "label": "VDP",
      "city": "Valle De Pascua",
      "countryCode": "VE"
  },
  {
      "label": "VDR",
      "city": "Villa Dolores",
      "countryCode": "AR"
  },
  {
      "label": "VDS",
      "city": "Vadso",
      "countryCode": "NO"
  },
  {
      "label": "VDZ",
      "city": "Valdez",
      "countryCode": "US"
  },
  {
      "label": "VEE",
      "city": "Venetie",
      "countryCode": "US"
  },
  {
      "label": "VEG",
      "city": "Maikwak",
      "countryCode": "GY"
  },
  {
      "label": "VEJ",
      "city": "Vejle",
      "countryCode": "DK"
  },
  {
      "label": "VEL",
      "city": "Vernal",
      "countryCode": "US"
  },
  {
      "label": "VER",
      "city": "Veracruz",
      "countryCode": "MX"
  },
  {
      "label": "VEV",
      "city": "Barakoma",
      "countryCode": "SB"
  },
  {
      "label": "VEX",
      "city": "Tioga",
      "countryCode": "US"
  },
  {
      "label": "VEY",
      "city": "Vestmannaeyjar",
      "countryCode": "IS"
  },
  {
      "label": "VFA",
      "city": "Victoria Falls",
      "countryCode": "ZW"
  },
  {
      "label": "VGD",
      "city": "Vologda",
      "countryCode": "RU"
  },
  {
      "label": "VGG",
      "city": "Vangrieng",
      "countryCode": "LA"
  },
  {
      "label": "VGO",
      "city": "Vigo",
      "countryCode": "ES"
  },
  {
      "label": "VGS",
      "city": "General Villegas",
      "countryCode": "AR"
  },
  {
      "label": "VGZ",
      "city": "Villagarzon",
      "countryCode": "CO"
  },
  {
      "label": "VHC",
      "city": "Saurimo",
      "countryCode": "AO"
  },
  {
      "label": "VHF",
      "city": "Isola France",
      "countryCode": "FR"
  },
  {
      "label": "VHM",
      "city": "Vilhelmina",
      "countryCode": "SE"
  },
  {
      "label": "VHN",
      "city": "Van Horn",
      "countryCode": "US"
  },
  {
      "label": "VHY",
      "city": "Vichy",
      "countryCode": "FR"
  },
  {
      "label": "VHZ",
      "city": "Vahitahi",
      "countryCode": "PF"
  },
  {
      "label": "VIA",
      "city": "Videira",
      "countryCode": "BR"
  },
  {
      "label": "VIB",
      "city": "Villa Constitucion",
      "countryCode": "MX"
  },
  {
      "label": "VIC",
      "city": "Vicenza",
      "countryCode": "IT"
  },
  {
      "label": "VID",
      "city": "Vidin",
      "countryCode": "BG"
  },
  {
      "label": "VIE",
      "city": "Vienna",
      "countryCode": "AT"
  },
  {
      "label": "VIG",
      "city": "El Vigia",
      "countryCode": "VE"
  },
  {
      "label": "VIH",
      "city": "Vichy",
      "countryCode": "US"
  },
  {
      "label": "VII",
      "city": "Vinh City",
      "countryCode": "VN"
  },
  {
      "label": "VIJ",
      "city": "Virgin Gorda",
      "countryCode": "VG"
  },
  {
      "label": "VIK",
      "city": "Kavik",
      "countryCode": "US"
  },
  {
      "label": "VIL",
      "city": "Dakhla",
      "countryCode": "MA"
  },
  {
      "label": "VIN",
      "city": "Vinnica",
      "countryCode": "UA"
  },
  {
      "label": "VIQ",
      "city": "Viqueque",
      "countryCode": "ID"
  },
  {
      "label": "VIS",
      "city": "Visalia",
      "countryCode": "US"
  },
  {
      "label": "VIT",
      "city": "Vitoria",
      "countryCode": "ES"
  },
  {
      "label": "VIU",
      "city": "Viru",
      "countryCode": "SB"
  },
  {
      "label": "VIV",
      "city": "Vivigani",
      "countryCode": "PG"
  },
  {
      "label": "VIX",
      "city": "Vitoria",
      "countryCode": "BR"
  },
  {
      "label": "VJB",
      "city": "Xai Xai",
      "countryCode": "MZ"
  },
  {
      "label": "VJI",
      "city": "Abingdon",
      "countryCode": "US"
  },
  {
      "label": "VJQ",
      "city": "Gurue",
      "countryCode": "MZ"
  },
  {
      "label": "VKB",
      "city": "Merano Italy",
      "countryCode": "IT"
  },
  {
      "label": "VKG",
      "city": "Rach Gia",
      "countryCode": "VN"
  },
  {
      "label": "VKS",
      "city": "Vicksburg",
      "countryCode": "US"
  },
  {
      "label": "VKT",
      "city": "Vorkuta",
      "countryCode": "RU"
  },
  {
      "label": "VKW",
      "city": "West Kavik",
      "countryCode": "US"
  },
  {
      "label": "VLA",
      "city": "Vandalia",
      "countryCode": "US"
  },
  {
      "label": "VLC",
      "city": "Valencia",
      "countryCode": "ES"
  },
  {
      "label": "VLD",
      "city": "Valdosta",
      "countryCode": "US"
  },
  {
      "label": "VLE",
      "city": "Valle",
      "countryCode": "US"
  },
  {
      "label": "VLF",
      "city": "Newcastle Under Lyme",
      "countryCode": "GB"
  },
  {
      "label": "VLG",
      "city": "Villa Gesell",
      "countryCode": "AR"
  },
  {
      "label": "VLI",
      "city": "Port Vila",
      "countryCode": "VU"
  },
  {
      "label": "VLK",
      "city": "Volgodonsk",
      "countryCode": "RU"
  },
  {
      "label": "VLL",
      "city": "Valladolid",
      "countryCode": "ES"
  },
  {
      "label": "VLM",
      "city": "Villamontes",
      "countryCode": "BO"
  },
  {
      "label": "VLN",
      "city": "Valencia",
      "countryCode": "VE"
  },
  {
      "label": "VLO",
      "city": "Vallejo",
      "countryCode": "US"
  },
  {
      "label": "VLP",
      "city": "Vila Rica",
      "countryCode": "BR"
  },
  {
      "label": "VLR",
      "city": "Vallenar",
      "countryCode": "CL"
  },
  {
      "label": "VLS",
      "city": "Valesdir",
      "countryCode": "VU"
  },
  {
      "label": "VLU",
      "city": "Velikiye Luki",
      "countryCode": "RU"
  },
  {
      "label": "VLV",
      "city": "Valera",
      "countryCode": "VE"
  },
  {
      "label": "VLY",
      "city": "Anglesey",
      "countryCode": "GB"
  },
  {
      "label": "VME",
      "city": "Villa Mercedes",
      "countryCode": "AR"
  },
  {
      "label": "VMI",
      "city": "Vallemi",
      "countryCode": "PY"
  },
  {
      "label": "VMU",
      "city": "Baimuru",
      "countryCode": "PG"
  },
  {
      "label": "VNA",
      "city": "Saravane",
      "countryCode": "LA"
  },
  {
      "label": "VNC",
      "city": "Venice",
      "countryCode": "US"
  },
  {
      "label": "VND",
      "city": "Vangaindrano",
      "countryCode": "MG"
  },
  {
      "label": "VNE",
      "city": "Vannes",
      "countryCode": "FR"
  },
  {
      "label": "VNG",
      "city": "Viengxay",
      "countryCode": "LA"
  },
  {
      "label": "VNO",
      "city": "Vilnius",
      "countryCode": "LT"
  },
  {
      "label": "VNR",
      "city": "Vanrook",
      "countryCode": "AU"
  },
  {
      "label": "VNX",
      "city": "Vilanculos",
      "countryCode": "MZ"
  },
  {
      "label": "VOG",
      "city": "Volgograd",
      "countryCode": "RU"
  },
  {
      "label": "VOH",
      "city": "Vohemar",
      "countryCode": "MG"
  },
  {
      "label": "VOI",
      "city": "Voinjama",
      "countryCode": "LR"
  },
  {
      "label": "VOK",
      "city": "Camp Douglas",
      "countryCode": "US"
  },
  {
      "label": "VOL",
      "city": "Volos",
      "countryCode": "GR"
  },
  {
      "label": "VOT",
      "city": "Votuporanga",
      "countryCode": "BR"
  },
  {
      "label": "VOZ",
      "city": "Voronezh",
      "countryCode": "RU"
  },
  {
      "label": "VPE",
      "city": "Ongiva",
      "countryCode": "AO"
  },
  {
      "label": "VPN",
      "city": "Vopnafjordur",
      "countryCode": "IS"
  },
  {
      "label": "VPS",
      "city": "Valparaiso",
      "countryCode": "US"
  },
  {
      "label": "VPY",
      "city": "Chimoio",
      "countryCode": "MZ"
  },
  {
      "label": "VPZ",
      "city": "Valparaiso",
      "countryCode": "US"
  },
  {
      "label": "VQS",
      "city": "Vieques",
      "countryCode": "PR"
  },
  {
      "label": "VRA",
      "city": "Varadero",
      "countryCode": "CU"
  },
  {
      "label": "VRB",
      "city": "Vero Beach",
      "countryCode": "US"
  },
  {
      "label": "VRC",
      "city": "Virac",
      "countryCode": "PH"
  },
  {
      "label": "VRE",
      "city": "Vredendal",
      "countryCode": "ZA"
  },
  {
      "label": "VRK",
      "city": "Varkaus",
      "countryCode": "FI"
  },
  {
      "label": "VRL",
      "city": "Vila Real",
      "countryCode": "PT"
  },
  {
      "label": "VRN",
      "city": "Verona",
      "countryCode": "IT"
  },
  {
      "label": "VRS",
      "city": "Versailles",
      "countryCode": "US"
  },
  {
      "label": "VRU",
      "city": "Vryburg",
      "countryCode": "ZA"
  },
  {
      "label": "VRY",
      "city": "Vaeroy",
      "countryCode": "NO"
  },
  {
      "label": "VSA",
      "city": "Villahermosa",
      "countryCode": "MX"
  },
  {
      "label": "VSE",
      "city": "Viseu",
      "countryCode": "PT"
  },
  {
      "label": "VSF",
      "city": "Springfield",
      "countryCode": "US"
  },
  {
      "label": "VSG",
      "city": "Lugansk",
      "countryCode": "UA"
  },
  {
      "label": "VSO",
      "city": "Phuoclong",
      "countryCode": "VN"
  },
  {
      "label": "VST",
      "city": "Vasteras",
      "countryCode": "SE"
  },
  {
      "label": "VTA",
      "city": "Victoria",
      "countryCode": "HN"
  },
  {
      "label": "VTB",
      "city": "Vitebsk",
      "countryCode": "BY"
  },
  {
      "label": "VTE",
      "city": "Vientiane",
      "countryCode": "LA"
  },
  {
      "label": "VTF",
      "city": "Vatulele",
      "countryCode": "FJ"
  },
  {
      "label": "VTG",
      "city": "Vung Tau",
      "countryCode": "VN"
  },
  {
      "label": "VTI",
      "city": "Vitoria",
      "countryCode": "ES"
  },
  {
      "label": "VTL",
      "city": "Vittel",
      "countryCode": "FR"
  },
  {
      "label": "VTN",
      "city": "Valentine",
      "countryCode": "US"
  },
  {
      "label": "VTU",
      "city": "Las Tunas",
      "countryCode": "CU"
  },
  {
      "label": "VUP",
      "city": "Valledupar",
      "countryCode": "CO"
  },
  {
      "label": "VUS",
      "city": "Velikij Ustyug",
      "countryCode": "RU"
  },
  {
      "label": "VVB",
      "city": "Mahanoro",
      "countryCode": "MG"
  },
  {
      "label": "VVC",
      "city": "Villavicencio",
      "countryCode": "CO"
  },
  {
      "label": "VVK",
      "city": "Vastervik",
      "countryCode": "SE"
  },
  {
      "label": "VVO",
      "city": "Vladivostok",
      "countryCode": "RU"
  },
  {
      "label": "VVZ",
      "city": "Illizi",
      "countryCode": "DZ"
  },
  {
      "label": "VXC",
      "city": "Lichinga",
      "countryCode": "MZ"
  },
  {
      "label": "VXE",
      "city": "Sao Vicente",
      "countryCode": "CV"
  },
  {
      "label": "VXO",
      "city": "Vaxjo",
      "countryCode": "SE"
  },
  {
      "label": "VYD",
      "city": "Vryheid",
      "countryCode": "ZA"
  },
  {
      "label": "VYS",
      "city": "Peru",
      "countryCode": "US"
  },
  {
      "label": "WAA",
      "city": "Wales",
      "countryCode": "US"
  },
  {
      "label": "WAB",
      "city": "Wabag",
      "countryCode": "PG"
  },
  {
      "label": "WAC",
      "city": "Waca",
      "countryCode": "ET"
  },
  {
      "label": "WAD",
      "city": "Andriamena",
      "countryCode": "MG"
  },
  {
      "label": "WAE",
      "city": "Wadi Ad Dawasir",
      "countryCode": "SA"
  },
  {
      "label": "WAF",
      "city": "Wana",
      "countryCode": "PK"
  },
  {
      "label": "WAG",
      "city": "Wanganui",
      "countryCode": "NZ"
  },
  {
      "label": "WAH",
      "city": "Wahpeton",
      "countryCode": "US"
  },
  {
      "label": "WAI",
      "city": "Antsohihy",
      "countryCode": "MG"
  },
  {
      "label": "WAJ",
      "city": "Wawoi Falls",
      "countryCode": "PG"
  },
  {
      "label": "WAK",
      "city": "Ankazoabo",
      "countryCode": "MG"
  },
  {
      "label": "WAL",
      "city": "Chincoteague",
      "countryCode": "US"
  },
  {
      "label": "WAM",
      "city": "Ambatondrazaka",
      "countryCode": "MG"
  },
  {
      "label": "WAN",
      "city": "Waverney",
      "countryCode": "AU"
  },
  {
      "label": "WAO",
      "city": "Wabo",
      "countryCode": "PG"
  },
  {
      "label": "WAP",
      "city": "Alto Palena",
      "countryCode": "CL"
  },
  {
      "label": "WAQ",
      "city": "Antsalova",
      "countryCode": "MG"
  },
  {
      "label": "WAR",
      "city": "Waris",
      "countryCode": "ID"
  },
  {
      "label": "WAS",
      "city": "Washington",
      "countryCode": "US"
  },
  {
      "label": "WAT",
      "city": "Waterford",
      "countryCode": "IE"
  },
  {
      "label": "WAU",
      "city": "Wauchope",
      "countryCode": "AU"
  },
  {
      "label": "WAV",
      "city": "Wave Hill",
      "countryCode": "AU"
  },
  {
      "label": "WAW",
      "city": "Warsaw",
      "countryCode": "PL"
  },
  {
      "label": "WAY",
      "city": "Waynesburg",
      "countryCode": "US"
  },
  {
      "label": "WAZ",
      "city": "Warwick",
      "countryCode": "AU"
  },
  {
      "label": "WBA",
      "city": "Wahai Maluku",
      "countryCode": "ID"
  },
  {
      "label": "WBB",
      "city": "Stebbins",
      "countryCode": "US"
  },
  {
      "label": "WBC",
      "city": "Wapolu",
      "countryCode": "PG"
  },
  {
      "label": "WBD",
      "city": "Befandriana",
      "countryCode": "MG"
  },
  {
      "label": "WBE",
      "city": "Bealanana",
      "countryCode": "MG"
  },
  {
      "label": "WBG",
      "city": "Schleswig Jagel",
      "countryCode": "DE"
  },
  {
      "label": "WBJ",
      "city": "Won Ju",
      "countryCode": "KR"
  },
  {
      "label": "WBM",
      "city": "Wapenamanda",
      "countryCode": "PG"
  },
  {
      "label": "WBN",
      "city": "Woburn",
      "countryCode": "US"
  },
  {
      "label": "WBO",
      "city": "Beroroha",
      "countryCode": "MG"
  },
  {
      "label": "WBQ",
      "city": "Beaver",
      "countryCode": "US"
  },
  {
      "label": "WBR",
      "city": "Big Rapids",
      "countryCode": "US"
  },
  {
      "label": "WBU",
      "city": "Boulder",
      "countryCode": "US"
  },
  {
      "label": "WCA",
      "city": "Castro",
      "countryCode": "CL"
  },
  {
      "label": "WCH",
      "city": "Chaiten",
      "countryCode": "CL"
  },
  {
      "label": "WCR",
      "city": "Chandalar",
      "countryCode": "US"
  },
  {
      "label": "WDA",
      "city": "Wadi Ain",
      "countryCode": "YE"
  },
  {
      "label": "WDB",
      "city": "Deep Bay",
      "countryCode": "US"
  },
  {
      "label": "WDG",
      "city": "Enid",
      "countryCode": "US"
  },
  {
      "label": "WDH",
      "city": "Windhoek",
      "countryCode": "NA"
  },
  {
      "label": "WDI",
      "city": "Wondai",
      "countryCode": "AU"
  },
  {
      "label": "WDN",
      "city": "Waldron Island",
      "countryCode": "US"
  },
  {
      "label": "WDR",
      "city": "Winder",
      "countryCode": "US"
  },
  {
      "label": "WEA",
      "city": "Weatherford",
      "countryCode": "US"
  },
  {
      "label": "WED",
      "city": "Wedau",
      "countryCode": "PG"
  },
  {
      "label": "WEF",
      "city": "Weifang",
      "countryCode": "CN"
  },
  {
      "label": "WEH",
      "city": "Weihai",
      "countryCode": "CN"
  },
  {
      "label": "WEI",
      "city": "Weipa",
      "countryCode": "AU"
  },
  {
      "label": "WEL",
      "city": "Welkom",
      "countryCode": "ZA"
  },
  {
      "label": "WEM",
      "city": "West Malling",
      "countryCode": "GB"
  },
  {
      "label": "WEP",
      "city": "Weam",
      "countryCode": "PG"
  },
  {
      "label": "WES",
      "city": "Weasua",
      "countryCode": "LR"
  },
  {
      "label": "WET",
      "city": "Wagethe",
      "countryCode": "ID"
  },
  {
      "label": "WEW",
      "city": "Wee Waa",
      "countryCode": "AU"
  },
  {
      "label": "WEX",
      "city": "Wexford",
      "countryCode": "IE"
  },
  {
      "label": "WFI",
      "city": "Fianarantsoa",
      "countryCode": "MG"
  },
  {
      "label": "WFK",
      "city": "Frenchville",
      "countryCode": "US"
  },
  {
      "label": "WGA",
      "city": "Wagga Wagga",
      "countryCode": "AU"
  },
  {
      "label": "WGB",
      "city": "Bahawalnagar",
      "countryCode": "PK"
  },
  {
      "label": "WGE",
      "city": "Walgett",
      "countryCode": "AU"
  },
  {
      "label": "WGL",
      "city": "Isle Baltra",
      "countryCode": "EC"
  },
  {
      "label": "WGN",
      "city": "Waitangi",
      "countryCode": "NZ"
  },
  {
      "label": "WGO",
      "city": "Winchester",
      "countryCode": "US"
  },
  {
      "label": "WGP",
      "city": "Waingapu",
      "countryCode": "ID"
  },
  {
      "label": "WGT",
      "city": "Wangaratta",
      "countryCode": "AU"
  },
  {
      "label": "WGU",
      "city": "Wagau",
      "countryCode": "PG"
  },
  {
      "label": "WGY",
      "city": "Wagny",
      "countryCode": "GA"
  },
  {
      "label": "WHF",
      "city": "Wadi Halfa",
      "countryCode": "SD"
  },
  {
      "label": "WHK",
      "city": "Whakatane",
      "countryCode": "NZ"
  },
  {
      "label": "WHL",
      "city": "Welshpool",
      "countryCode": "AU"
  },
  {
      "label": "WHO",
      "city": "Franz Josef",
      "countryCode": "NZ"
  },
  {
      "label": "WHS",
      "city": "Whalsay",
      "countryCode": "GB"
  },
  {
      "label": "WHT",
      "city": "Wharton",
      "countryCode": "US"
  },
  {
      "label": "WHU",
      "city": "Lianshulu",
      "countryCode": "CN"
  },
  {
      "label": "WIC",
      "city": "Wick",
      "countryCode": "GB"
  },
  {
      "label": "WID",
      "city": "Wildenrath",
      "countryCode": "DE"
  },
  {
      "label": "WIK",
      "city": "Surfdale",
      "countryCode": "NZ"
  },
  {
      "label": "WIN",
      "city": "Winton",
      "countryCode": "AU"
  },
  {
      "label": "WIO",
      "city": "Wilcannia",
      "countryCode": "AU"
  },
  {
      "label": "WIR",
      "city": "Wairoa",
      "countryCode": "NZ"
  },
  {
      "label": "WIS",
      "city": "Vienna",
      "countryCode": "AT"
  },
  {
      "label": "WIT",
      "city": "Wittenoom",
      "countryCode": "AU"
  },
  {
      "label": "WIU",
      "city": "Witu",
      "countryCode": "PG"
  },
  {
      "label": "WJA",
      "city": "Woja",
      "countryCode": "MH"
  },
  {
      "label": "WJF",
      "city": "Lancaster",
      "countryCode": "US"
  },
  {
      "label": "WJR",
      "city": "Wajir",
      "countryCode": "KE"
  },
  {
      "label": "WKA",
      "city": "Wanaka",
      "countryCode": "NZ"
  },
  {
      "label": "WKB",
      "city": "Warracknabeal",
      "countryCode": "AU"
  },
  {
      "label": "WKI",
      "city": "Hwange",
      "countryCode": "ZW"
  },
  {
      "label": "WKJ",
      "city": "Wakkanai",
      "countryCode": "JP"
  },
  {
      "label": "WKK",
      "city": "Aleknagik",
      "countryCode": "US"
  },
  {
      "label": "WKL",
      "city": "Waikoloa",
      "countryCode": "US"
  },
  {
      "label": "WKM",
      "city": "Wankie Rhodesia",
      "countryCode": "ZW"
  },
  {
      "label": "WKN",
      "city": "Wakunai",
      "countryCode": "PG"
  },
  {
      "label": "WKR",
      "city": "Walker's Cay",
      "countryCode": "BS"
  },
  {
      "label": "WLA",
      "city": "Wallal",
      "countryCode": "AU"
  },
  {
      "label": "WLB",
      "city": "Labouchere Bay",
      "countryCode": "US"
  },
  {
      "label": "WLC",
      "city": "Walcha",
      "countryCode": "AU"
  },
  {
      "label": "WLD",
      "city": "Winfield",
      "countryCode": "US"
  },
  {
      "label": "WLG",
      "city": "Wellington",
      "countryCode": "NZ"
  },
  {
      "label": "WLH",
      "city": "Walaha",
      "countryCode": "VU"
  },
  {
      "label": "WLK",
      "city": "Selawik",
      "countryCode": "US"
  },
  {
      "label": "WLL",
      "city": "Wollogorang",
      "countryCode": "AU"
  },
  {
      "label": "WLM",
      "city": "Waltham",
      "countryCode": "US"
  },
  {
      "label": "WLN",
      "city": "Little Naukati",
      "countryCode": "US"
  },
  {
      "label": "WLO",
      "city": "Waterloo",
      "countryCode": "AU"
  },
  {
      "label": "WLR",
      "city": "Loring",
      "countryCode": "US"
  },
  {
      "label": "WLS",
      "city": "Wallis Island",
      "countryCode": "WF"
  },
  {
      "label": "WLW",
      "city": "Willows",
      "countryCode": "US"
  },
  {
      "label": "WMA",
      "city": "Mandritsara",
      "countryCode": "MG"
  },
  {
      "label": "WMB",
      "city": "Warrnambool",
      "countryCode": "AU"
  },
  {
      "label": "WMC",
      "city": "Winnemucca",
      "countryCode": "US"
  },
  {
      "label": "WMD",
      "city": "Mandabe",
      "countryCode": "MG"
  },
  {
      "label": "WME",
      "city": "Mount Keith",
      "countryCode": "AU"
  },
  {
      "label": "WMH",
      "city": "Mountain Home",
      "countryCode": "US"
  },
  {
      "label": "WMI",
      "city": "Nowy Dwor Mazowiecki",
      "countryCode": "PL"
  },
  {
      "label": "WML",
      "city": "Malaimbandy",
      "countryCode": "MG"
  },
  {
      "label": "WMN",
      "city": "Maroantsetra",
      "countryCode": "MG"
  },
  {
      "label": "WMO",
      "city": "White Mountain",
      "countryCode": "US"
  },
  {
      "label": "WMP",
      "city": "Mampikony",
      "countryCode": "MG"
  },
  {
      "label": "WMR",
      "city": "Mananara",
      "countryCode": "MG"
  },
  {
      "label": "WMV",
      "city": "Madirovalo",
      "countryCode": "MG"
  },
  {
      "label": "WMX",
      "city": "Wamena",
      "countryCode": "ID"
  },
  {
      "label": "WND",
      "city": "Windarra",
      "countryCode": "AU"
  },
  {
      "label": "WNE",
      "city": "Wora Na Ye",
      "countryCode": "GA"
  },
  {
      "label": "WNN",
      "city": "Wunnummin Lake",
      "countryCode": "CA"
  },
  {
      "label": "WNP",
      "city": "Naga",
      "countryCode": "PH"
  },
  {
      "label": "WNR",
      "city": "Windorah",
      "countryCode": "AU"
  },
  {
      "label": "WNS",
      "city": "Nawabshah",
      "countryCode": "PK"
  },
  {
      "label": "WNU",
      "city": "Wanuma",
      "countryCode": "PG"
  },
  {
      "label": "WNZ",
      "city": "Wenzhou",
      "countryCode": "CN"
  },
  {
      "label": "WOA",
      "city": "Wonenara",
      "countryCode": "PG"
  },
  {
      "label": "WOB",
      "city": "Suttonheath",
      "countryCode": "GB"
  },
  {
      "label": "WOD",
      "city": "Wood River",
      "countryCode": "US"
  },
  {
      "label": "WOE",
      "city": "Woensdrecht",
      "countryCode": "NL"
  },
  {
      "label": "WOG",
      "city": "Woodgreen",
      "countryCode": "AU"
  },
  {
      "label": "WOI",
      "city": "Wologissi",
      "countryCode": "LR"
  },
  {
      "label": "WOK",
      "city": "Wonken",
      "countryCode": "VE"
  },
  {
      "label": "WOL",
      "city": "Wollongong",
      "countryCode": "AU"
  },
  {
      "label": "WON",
      "city": "Wondoola",
      "countryCode": "AU"
  },
  {
      "label": "WOO",
      "city": "Woodchopper",
      "countryCode": "US"
  },
  {
      "label": "WOT",
      "city": "Wonan",
      "countryCode": "TW"
  },
  {
      "label": "WOW",
      "city": "Willow",
      "countryCode": "US"
  },
  {
      "label": "WPA",
      "city": "Puerto Aisen",
      "countryCode": "CL"
  },
  {
      "label": "WPB",
      "city": "Port Berge",
      "countryCode": "MG"
  },
  {
      "label": "WPC",
      "city": "Pincher Creek",
      "countryCode": "CA"
  },
  {
      "label": "WPK",
      "city": "Wrotham Park",
      "countryCode": "AU"
  },
  {
      "label": "WPL",
      "city": "Powell Lake",
      "countryCode": "CA"
  },
  {
      "label": "WPM",
      "city": "Wipim",
      "countryCode": "PG"
  },
  {
      "label": "WPO",
      "city": "Paonia",
      "countryCode": "US"
  },
  {
      "label": "WPR",
      "city": "Porvenir",
      "countryCode": "CL"
  },
  {
      "label": "WPS",
      "city": "Persepolis",
      "countryCode": "IR"
  },
  {
      "label": "WPU",
      "city": "Puerto Williams",
      "countryCode": "CL"
  },
  {
      "label": "WRA",
      "city": "Warder",
      "countryCode": "ET"
  },
  {
      "label": "WRE",
      "city": "Whangarei",
      "countryCode": "NZ"
  },
  {
      "label": "WRH",
      "city": "Wrench Creek",
      "countryCode": "US"
  },
  {
      "label": "WRL",
      "city": "Worland",
      "countryCode": "US"
  },
  {
      "label": "WRO",
      "city": "Wroclaw",
      "countryCode": "PL"
  },
  {
      "label": "WRR",
      "city": "Warner Robins Georgia",
      "countryCode": "US"
  },
  {
      "label": "WRW",
      "city": "Warrawagine",
      "countryCode": "AU"
  },
  {
      "label": "WRY",
      "city": "Westray",
      "countryCode": "GB"
  },
  {
      "label": "WSA",
      "city": "Wasua",
      "countryCode": "PG"
  },
  {
      "label": "WSD",
      "city": "White Sands",
      "countryCode": "US"
  },
  {
      "label": "WSE",
      "city": "Santa Cecilia",
      "countryCode": "EC"
  },
  {
      "label": "WSF",
      "city": "Sarichef",
      "countryCode": "US"
  },
  {
      "label": "WSG",
      "city": "Washington",
      "countryCode": "US"
  },
  {
      "label": "WSH",
      "city": "Shirley",
      "countryCode": "US"
  },
  {
      "label": "WSM",
      "city": "Wiseman",
      "countryCode": "US"
  },
  {
      "label": "WSN",
      "city": "South Naknek",
      "countryCode": "US"
  },
  {
      "label": "WSO",
      "city": "Washabo",
      "countryCode": "SR"
  },
  {
      "label": "WSP",
      "city": "Waspam",
      "countryCode": "NI"
  },
  {
      "label": "WSR",
      "city": "Wasior",
      "countryCode": "ID"
  },
  {
      "label": "WST",
      "city": "Westerly",
      "countryCode": "US"
  },
  {
      "label": "WSU",
      "city": "Wasu",
      "countryCode": "PG"
  },
  {
      "label": "WSX",
      "city": "Westsound",
      "countryCode": "US"
  },
  {
      "label": "WSY",
      "city": "Airlie Beach",
      "countryCode": "AU"
  },
  {
      "label": "WSZ",
      "city": "Westport",
      "countryCode": "NZ"
  },
  {
      "label": "WTA",
      "city": "Tambohorano",
      "countryCode": "MG"
  },
  {
      "label": "WTD",
      "city": "West End",
      "countryCode": "BS"
  },
  {
      "label": "WTE",
      "city": "Wotje Island",
      "countryCode": "MH"
  },
  {
      "label": "WTK",
      "city": "Noatak",
      "countryCode": "US"
  },
  {
      "label": "WTL",
      "city": "Tuntutuliak",
      "countryCode": "US"
  },
  {
      "label": "WTO",
      "city": "Wotho Island",
      "countryCode": "MH"
  },
  {
      "label": "WTP",
      "city": "Woitape",
      "countryCode": "PG"
  },
  {
      "label": "WTR",
      "city": "White River",
      "countryCode": "US"
  },
  {
      "label": "WTS",
      "city": "Tsiroanomandidy",
      "countryCode": "MG"
  },
  {
      "label": "WTT",
      "city": "Wantoat",
      "countryCode": "PG"
  },
  {
      "label": "WTZ",
      "city": "Whitianga",
      "countryCode": "NZ"
  },
  {
      "label": "WUD",
      "city": "Wudinna",
      "countryCode": "AU"
  },
  {
      "label": "WUG",
      "city": "Wau",
      "countryCode": "PG"
  },
  {
      "label": "WUH",
      "city": "Wuhan",
      "countryCode": "CN"
  },
  {
      "label": "WUM",
      "city": "Wasum",
      "countryCode": "PG"
  },
  {
      "label": "WUN",
      "city": "Wiluna",
      "countryCode": "AU"
  },
  {
      "label": "WUS",
      "city": "Wuyishan",
      "countryCode": "CN"
  },
  {
      "label": "WUU",
      "city": "Wau",
      "countryCode": "SD"
  },
  {
      "label": "WUV",
      "city": "Wuvulu Island",
      "countryCode": "PG"
  },
  {
      "label": "WUX",
      "city": "Wuxi",
      "countryCode": "CN"
  },
  {
      "label": "WUZ",
      "city": "Wuzhou",
      "countryCode": "CN"
  },
  {
      "label": "WVB",
      "city": "Walvis Bay",
      "countryCode": "NA"
  },
  {
      "label": "WVI",
      "city": "Watsonville",
      "countryCode": "US"
  },
  {
      "label": "WVK",
      "city": "Manakara",
      "countryCode": "MG"
  },
  {
      "label": "WVL",
      "city": "Waterville",
      "countryCode": "US"
  },
  {
      "label": "WVN",
      "city": "Wilhelmshaven",
      "countryCode": "DE"
  },
  {
      "label": "WWA",
      "city": "Wasilla",
      "countryCode": "US"
  },
  {
      "label": "WWD",
      "city": "Wildwood",
      "countryCode": "US"
  },
  {
      "label": "WWK",
      "city": "Wewak",
      "countryCode": "PG"
  },
  {
      "label": "WWP",
      "city": "Whale Pass",
      "countryCode": "US"
  },
  {
      "label": "WWR",
      "city": "Woodward",
      "countryCode": "US"
  },
  {
      "label": "WWT",
      "city": "Newtok",
      "countryCode": "US"
  },
  {
      "label": "WWY",
      "city": "West Wyalong",
      "countryCode": "AU"
  },
  {
      "label": "WXN",
      "city": "Wanxian",
      "countryCode": "CN"
  },
  {
      "label": "WYA",
      "city": "Whyalla",
      "countryCode": "AU"
  },
  {
      "label": "WYE",
      "city": "Yengema",
      "countryCode": "SL"
  },
  {
      "label": "WYN",
      "city": "Wyndham",
      "countryCode": "AU"
  },
  {
      "label": "WYS",
      "city": "West Yellowstone",
      "countryCode": "US"
  },
  {
      "label": "XAB",
      "city": "Abbeville",
      "countryCode": "FR"
  },
  {
      "label": "XAC",
      "city": "Arcachon",
      "countryCode": "FR"
  },
  {
      "label": "XAG",
      "city": "Agde",
      "countryCode": "FR"
  },
  {
      "label": "XAH",
      "city": "Silkeborg",
      "countryCode": "DK"
  },
  {
      "label": "XAI",
      "city": "Aix Les Bains",
      "countryCode": "FR"
  },
  {
      "label": "XAJ",
      "city": "Hirtshals",
      "countryCode": "DK"
  },
  {
      "label": "XAK",
      "city": "Herning",
      "countryCode": "DK"
  },
  {
      "label": "XAL",
      "city": "Alamos",
      "countryCode": "MX"
  },
  {
      "label": "XAM",
      "city": "Amboise",
      "countryCode": "FR"
  },
  {
      "label": "XAN",
      "city": "Alencon",
      "countryCode": "FR"
  },
  {
      "label": "XAP",
      "city": "Chapeco",
      "countryCode": "BR"
  },
  {
      "label": "XAQ",
      "city": "Broenderslev",
      "countryCode": "DK"
  },
  {
      "label": "XAR",
      "city": "Aribinda",
      "countryCode": "BF"
  },
  {
      "label": "XAS",
      "city": "Ales",
      "countryCode": "FR"
  },
  {
      "label": "XAT",
      "city": "Antibes",
      "countryCode": "FR"
  },
  {
      "label": "XAU",
      "city": "Saul",
      "countryCode": "GF"
  },
  {
      "label": "XAV",
      "city": "Albertville",
      "countryCode": "FR"
  },
  {
      "label": "XAW",
      "city": "Capreol",
      "countryCode": "CA"
  },
  {
      "label": "XAY",
      "city": "Xayabury",
      "countryCode": "LA"
  },
  {
      "label": "XBA",
      "city": "Bareges",
      "countryCode": "FR"
  },
  {
      "label": "XBB",
      "city": "Blubber Bay",
      "countryCode": "CA"
  },
  {
      "label": "XBC",
      "city": "Briancon",
      "countryCode": "FR"
  },
  {
      "label": "XBD",
      "city": "Bar Le Duc",
      "countryCode": "FR"
  },
  {
      "label": "XBE",
      "city": "Bearskin Lake",
      "countryCode": "CA"
  },
  {
      "label": "XBF",
      "city": "Bellegarde",
      "countryCode": "FR"
  },
  {
      "label": "XBG",
      "city": "Bogande",
      "countryCode": "BF"
  },
  {
      "label": "XBH",
      "city": "Bethune",
      "countryCode": "FR"
  },
  {
      "label": "XBI",
      "city": "Bourg D'Oisans",
      "countryCode": "FR"
  },
  {
      "label": "XBJ",
      "city": "Birjand",
      "countryCode": "IR"
  },
  {
      "label": "XBK",
      "city": "Bourg En Bresse",
      "countryCode": "FR"
  },
  {
      "label": "XBL",
      "city": "Buno Bedelle",
      "countryCode": "ET"
  },
  {
      "label": "XBM",
      "city": "Beaulieu Sur Mer",
      "countryCode": "FR"
  },
  {
      "label": "XBN",
      "city": "Biniguni",
      "countryCode": "PG"
  },
  {
      "label": "XBO",
      "city": "Boulsa",
      "countryCode": "BF"
  },
  {
      "label": "XBP",
      "city": "La Baule Les Pins",
      "countryCode": "FR"
  },
  {
      "label": "XBQ",
      "city": "Blois",
      "countryCode": "FR"
  },
  {
      "label": "XBR",
      "city": "Brockville",
      "countryCode": "CA"
  },
  {
      "label": "XBS",
      "city": "Boulogne Sur Mer",
      "countryCode": "FR"
  },
  {
      "label": "XBT",
      "city": "Boulogne Bill",
      "countryCode": "FR"
  },
  {
      "label": "XBU",
      "city": "Banyuls Sur Mer",
      "countryCode": "FR"
  },
  {
      "label": "XBV",
      "city": "Beaune",
      "countryCode": "FR"
  },
  {
      "label": "XBW",
      "city": "Killineq",
      "countryCode": "CA"
  },
  {
      "label": "XBX",
      "city": "Bernay",
      "countryCode": "FR"
  },
  {
      "label": "XBY",
      "city": "Bayonne",
      "countryCode": "FR"
  },
  {
      "label": "XBZ",
      "city": "Bandol",
      "countryCode": "FR"
  },
  {
      "label": "XCA",
      "city": "Campbellton",
      "countryCode": "CA"
  },
  {
      "label": "XCB",
      "city": "Cambrai",
      "countryCode": "FR"
  },
  {
      "label": "XCC",
      "city": "Creusot Montceau",
      "countryCode": "FR"
  },
  {
      "label": "XCD",
      "city": "Chalon Sur Saone",
      "countryCode": "FR"
  },
  {
      "label": "XCE",
      "city": "Cerbere",
      "countryCode": "FR"
  },
  {
      "label": "XCF",
      "city": "Chamonix Mont Blanc",
      "countryCode": "FR"
  },
  {
      "label": "XCG",
      "city": "Cagnes Sur Mer",
      "countryCode": "FR"
  },
  {
      "label": "XCH",
      "city": "Christmas Island",
      "countryCode": "CX"
  },
  {
      "label": "XCI",
      "city": "Chambord",
      "countryCode": "CA"
  },
  {
      "label": "XCL",
      "city": "Cluff Lake",
      "countryCode": "CA"
  },
  {
      "label": "XCM",
      "city": "Chatham",
      "countryCode": "CA"
  },
  {
      "label": "XCN",
      "city": "Coron",
      "countryCode": "PH"
  },
  {
      "label": "XCO",
      "city": "Colac",
      "countryCode": "AU"
  },
  {
      "label": "XCP",
      "city": "Compiegne",
      "countryCode": "FR"
  },
  {
      "label": "XCQ",
      "city": "Chamrousse",
      "countryCode": "FR"
  },
  {
      "label": "XCR",
      "city": "Chalons en Champagne",
      "countryCode": "FR"
  },
  {
      "label": "XCS",
      "city": "Caussade",
      "countryCode": "FR"
  },
  {
      "label": "XCT",
      "city": "La Ciotat",
      "countryCode": "FR"
  },
  {
      "label": "XCU",
      "city": "Collioure",
      "countryCode": "FR"
  },
  {
      "label": "XCV",
      "city": "Chantilly",
      "countryCode": "FR"
  },
  {
      "label": "XCW",
      "city": "Chaumont",
      "countryCode": "FR"
  },
  {
      "label": "XCX",
      "city": "Chatellerault",
      "countryCode": "FR"
  },
  {
      "label": "XCY",
      "city": "Chateau Thierry",
      "countryCode": "FR"
  },
  {
      "label": "XCZ",
      "city": "Charleville Mezie",
      "countryCode": "FR"
  },
  {
      "label": "XDA",
      "city": "Dax",
      "countryCode": "FR"
  },
  {
      "label": "XDC",
      "city": "Dives Cabourg",
      "countryCode": "FR"
  },
  {
      "label": "XDE",
      "city": "Diebougou",
      "countryCode": "BF"
  },
  {
      "label": "XDI",
      "city": "Digne",
      "countryCode": "FR"
  },
  {
      "label": "XDJ",
      "city": "Djibo",
      "countryCode": "BF"
  },
  {
      "label": "XDK",
      "city": "Dunkerque",
      "countryCode": "FR"
  },
  {
      "label": "XDL",
      "city": "Chandler",
      "countryCode": "CA"
  },
  {
      "label": "XDM",
      "city": "Drummondville",
      "countryCode": "CA"
  },
  {
      "label": "XDN",
      "city": "Douai",
      "countryCode": "FR"
  },
  {
      "label": "XDO",
      "city": "Grande Riviere",
      "countryCode": "CA"
  },
  {
      "label": "XDR",
      "city": "Dreux",
      "countryCode": "FR"
  },
  {
      "label": "XDU",
      "city": "Hervey",
      "countryCode": "CA"
  },
  {
      "label": "XEB",
      "city": "Evian Les Bains",
      "countryCode": "FR"
  },
  {
      "label": "XEE",
      "city": "Lac Edouard",
      "countryCode": "CA"
  },
  {
      "label": "XEH",
      "city": "Ladysmith",
      "countryCode": "CA"
  },
  {
      "label": "XEI",
      "city": "Tsukuba",
      "countryCode": "JP"
  },
  {
      "label": "XEJ",
      "city": "Langford",
      "countryCode": "CA"
  },
  {
      "label": "XEK",
      "city": "Melville",
      "countryCode": "CA"
  },
  {
      "label": "XEL",
      "city": "New Carlisle",
      "countryCode": "CA"
  },
  {
      "label": "XEM",
      "city": "New Richmond",
      "countryCode": "CA"
  },
  {
      "label": "XEN",
      "city": "Xingcheng",
      "countryCode": "CN"
  },
  {
      "label": "XEO",
      "city": "Oqatsut Harbour",
      "countryCode": "GL"
  },
  {
      "label": "XEP",
      "city": "Epernay",
      "countryCode": "FR"
  },
  {
      "label": "XEQ",
      "city": "Tasiuasaq Harbour",
      "countryCode": "GL"
  },
  {
      "label": "XER",
      "city": "Strasbourg",
      "countryCode": "FR"
  },
  {
      "label": "XES",
      "city": "Lake Geneva",
      "countryCode": "US"
  },
  {
      "label": "XEU",
      "city": "Arlanda",
      "countryCode": "SE"
  },
  {
      "label": "XEY",
      "city": "Miramichi",
      "countryCode": "CA"
  },
  {
      "label": "XFA",
      "city": "Lille Flandres",
      "countryCode": "FR"
  },
  {
      "label": "XFB",
      "city": "Fontainebleau",
      "countryCode": "FR"
  },
  {
      "label": "XFC",
      "city": "Fredericton Junc",
      "countryCode": "CA"
  },
  {
      "label": "XFD",
      "city": "Stratford",
      "countryCode": "CA"
  },
  {
      "label": "XFE",
      "city": "Parent",
      "countryCode": "CA"
  },
  {
      "label": "XFG",
      "city": "Perce",
      "countryCode": "CA"
  },
  {
      "label": "XFH",
      "city": "Strangnas",
      "countryCode": "SE"
  },
  {
      "label": "XFI",
      "city": "Port Daniel",
      "countryCode": "CA"
  },
  {
      "label": "XFK",
      "city": "Senneterre",
      "countryCode": "CA"
  },
  {
      "label": "XFL",
      "city": "Shawinigan",
      "countryCode": "CA"
  },
  {
      "label": "XFM",
      "city": "Shawnigan",
      "countryCode": "CA"
  },
  {
      "label": "XFN",
      "city": "Xiangfan",
      "countryCode": "CN"
  },
  {
      "label": "XFO",
      "city": "Taschereau",
      "countryCode": "CA"
  },
  {
      "label": "XFQ",
      "city": "Weymont",
      "countryCode": "CA"
  },
  {
      "label": "XFR",
      "city": "Svagertorp",
      "countryCode": "SE"
  },
  {
      "label": "XFS",
      "city": "Alexandria",
      "countryCode": "CA"
  },
  {
      "label": "XFU",
      "city": "Tierp",
      "countryCode": "SE"
  },
  {
      "label": "XFV",
      "city": "Brantford",
      "countryCode": "CA"
  },
  {
      "label": "XFW",
      "city": "Finkenwerder",
      "countryCode": "DE"
  },
  {
      "label": "XFX",
      "city": "Foix",
      "countryCode": "FR"
  },
  {
      "label": "XGA",
      "city": "Gaoua",
      "countryCode": "BF"
  },
  {
      "label": "XGC",
      "city": "Lund",
      "countryCode": "SE"
  },
  {
      "label": "XGF",
      "city": "St Gervais Le Fay",
      "countryCode": "FR"
  },
  {
      "label": "XGG",
      "city": "Gorom Gorom",
      "countryCode": "BF"
  },
  {
      "label": "XGJ",
      "city": "Cobourg",
      "countryCode": "CA"
  },
  {
      "label": "XGK",
      "city": "Coteau",
      "countryCode": "CA"
  },
  {
      "label": "XGL",
      "city": "Granville Lake",
      "countryCode": "CA"
  },
  {
      "label": "XGM",
      "city": "Grantham",
      "countryCode": "GB"
  },
  {
      "label": "XGN",
      "city": "Xangongo",
      "countryCode": "AO"
  },
  {
      "label": "XGO",
      "city": "Santiago",
      "countryCode": "BR"
  },
  {
      "label": "XGR",
      "city": "Kangiqsualujjuaq",
      "countryCode": "CA"
  },
  {
      "label": "XGS",
      "city": "Gjerstad",
      "countryCode": "NO"
  },
  {
      "label": "XGT",
      "city": "Gueret",
      "countryCode": "FR"
  },
  {
      "label": "XGV",
      "city": "St Gilles Croix D",
      "countryCode": "FR"
  },
  {
      "label": "XGW",
      "city": "Gananoque",
      "countryCode": "CA"
  },
  {
      "label": "XGY",
      "city": "Grimsby",
      "countryCode": "CA"
  },
  {
      "label": "XHE",
      "city": "Hyeres",
      "countryCode": "FR"
  },
  {
      "label": "XHM",
      "city": "Georgetown",
      "countryCode": "CA"
  },
  {
      "label": "XHQ",
      "city": "Hopa",
      "countryCode": "TR"
  },
  {
      "label": "XHR",
      "city": "Timbo",
      "countryCode": "BR"
  },
  {
      "label": "XHS",
      "city": "Chemainus",
      "countryCode": "CA"
  },
  {
      "label": "XHU",
      "city": "Huntingdon",
      "countryCode": "GB"
  },
  {
      "label": "XHY",
      "city": "Hendaye",
      "countryCode": "FR"
  },
  {
      "label": "XIA",
      "city": "Guelph",
      "countryCode": "CA"
  },
  {
      "label": "XIB",
      "city": "Ingersoll",
      "countryCode": "CA"
  },
  {
      "label": "XIC",
      "city": "Xichang",
      "countryCode": "CN"
  },
  {
      "label": "XID",
      "city": "Maxville",
      "countryCode": "CA"
  },
  {
      "label": "XIE",
      "city": "Xienglom",
      "countryCode": "LA"
  },
  {
      "label": "XIF",
      "city": "Napanee",
      "countryCode": "CA"
  },
  {
      "label": "XIG",
      "city": "Xinguera",
      "countryCode": "BR"
  },
  {
      "label": "XII",
      "city": "Prescott",
      "countryCode": "CA"
  },
  {
      "label": "XIL",
      "city": "Xilinhot",
      "countryCode": "CN"
  },
  {
      "label": "XIM",
      "city": "St Hyacinthe",
      "countryCode": "CA"
  },
  {
      "label": "XIN",
      "city": "Xingning",
      "countryCode": "CN"
  },
  {
      "label": "XIO",
      "city": "St Marys",
      "countryCode": "CA"
  },
  {
      "label": "XIP",
      "city": "Woodstock",
      "countryCode": "CA"
  },
  {
      "label": "XIQ",
      "city": "Ilimanaq Harbour",
      "countryCode": "GL"
  },
  {
      "label": "XIS",
      "city": "Dionisio Cerqueira",
      "countryCode": "BR"
  },
  {
      "label": "XIT",
      "city": "Leipzig",
      "countryCode": "DE"
  },
  {
      "label": "XJL",
      "city": "Joliette",
      "countryCode": "CA"
  },
  {
      "label": "XJN",
      "city": "Valladolid BusStation",
      "countryCode": "ES"
  },
  {
      "label": "XJQ",
      "city": "Jonquiere",
      "countryCode": "CA"
  },
  {
      "label": "XJZ",
      "city": "St Jean De Luz",
      "countryCode": "FR"
  },
  {
      "label": "XKA",
      "city": "Kantchari",
      "countryCode": "BF"
  },
  {
      "label": "XKB",
      "city": "Kongsberg",
      "countryCode": "NO"
  },
  {
      "label": "XKH",
      "city": "Xieng Khouang",
      "countryCode": "LA"
  },
  {
      "label": "XKO",
      "city": "Kemano",
      "countryCode": "CA"
  },
  {
      "label": "XKR",
      "city": "Kristiansand",
      "countryCode": "NO"
  },
  {
      "label": "XKS",
      "city": "Kasabonika",
      "countryCode": "CA"
  },
  {
      "label": "XKT",
      "city": "Kennedy Town",
      "countryCode": "HK"
  },
  {
      "label": "XKU",
      "city": "Kusadasi",
      "countryCode": "TR"
  },
  {
      "label": "XKV",
      "city": "Sackville",
      "countryCode": "CA"
  },
  {
      "label": "XKY",
      "city": "Kaya",
      "countryCode": "BF"
  },
  {
      "label": "XLA",
      "city": "La Bastide",
      "countryCode": "FR"
  },
  {
      "label": "XLB",
      "city": "Lac Brochet",
      "countryCode": "CA"
  },
  {
      "label": "XLD",
      "city": "Landerneau",
      "countryCode": "FR"
  },
  {
      "label": "XLE",
      "city": "Lens",
      "countryCode": "FR"
  },
  {
      "label": "XLF",
      "city": "Leaf Bay",
      "countryCode": "CA"
  },
  {
      "label": "XLG",
      "city": "Lognes",
      "countryCode": "FR"
  },
  {
      "label": "XLH",
      "city": "Luchon",
      "countryCode": "FR"
  },
  {
      "label": "XLI",
      "city": "St Louis",
      "countryCode": "FR"
  },
  {
      "label": "XLL",
      "city": "Lons Le Saunier",
      "countryCode": "FR"
  },
  {
      "label": "XLM",
      "city": "Saint Lambert",
      "countryCode": "CA"
  },
  {
      "label": "XLN",
      "city": "Laon",
      "countryCode": "FR"
  },
  {
      "label": "XLO",
      "city": "Long Xuyen",
      "countryCode": "VN"
  },
  {
      "label": "XLP",
      "city": "Matapedia",
      "countryCode": "CA"
  },
  {
      "label": "XLQ",
      "city": "Guildwood",
      "countryCode": "CA"
  },
  {
      "label": "XLR",
      "city": "Libourne",
      "countryCode": "FR"
  },
  {
      "label": "XLS",
      "city": "St Louis",
      "countryCode": "SN"
  },
  {
      "label": "XLT",
      "city": "Ax Les Thermes",
      "countryCode": "FR"
  },
  {
      "label": "XLU",
      "city": "Leo",
      "countryCode": "BF"
  },
  {
      "label": "XLV",
      "city": "Niagara Falls",
      "countryCode": "CA"
  },
  {
      "label": "XLW",
      "city": "Lemwerder",
      "countryCode": "DE"
  },
  {
      "label": "XLX",
      "city": "Lisieux",
      "countryCode": "FR"
  },
  {
      "label": "XLY",
      "city": "Aldershot",
      "countryCode": "CA"
  },
  {
      "label": "XLZ",
      "city": "Truro",
      "countryCode": "CA"
  },
  {
      "label": "XMA",
      "city": "Maramag",
      "countryCode": "PH"
  },
  {
      "label": "XMB",
      "city": "M'Bahiakro",
      "countryCode": "CI"
  },
  {
      "label": "XMC",
      "city": "Mallacoota",
      "countryCode": "AU"
  },
  {
      "label": "XMD",
      "city": "Madison",
      "countryCode": "US"
  },
  {
      "label": "XME",
      "city": "Maubeuge",
      "countryCode": "FR"
  },
  {
      "label": "XMF",
      "city": "Montbeliard",
      "countryCode": "FR"
  },
  {
      "label": "XMG",
      "city": "Mahendranagar",
      "countryCode": "NP"
  },
  {
      "label": "XMH",
      "city": "Manihi",
      "countryCode": "PF"
  },
  {
      "label": "XMI",
      "city": "Masasi",
      "countryCode": "TZ"
  },
  {
      "label": "XMJ",
      "city": "Mont De Marsan",
      "countryCode": "FR"
  },
  {
      "label": "XMK",
      "city": "Montelimar",
      "countryCode": "FR"
  },
  {
      "label": "XML",
      "city": "Minlaton",
      "countryCode": "AU"
  },
  {
      "label": "XMM",
      "city": "Monaco Monte Carlo",
      "countryCode": "MC"
  },
  {
      "label": "XMN",
      "city": "Xiamen",
      "countryCode": "CN"
  },
  {
      "label": "XMO",
      "city": "Modane",
      "countryCode": "FR"
  },
  {
      "label": "XMP",
      "city": "Macmillan Pass",
      "countryCode": "CA"
  },
  {
      "label": "XMQ",
      "city": "Morzine",
      "countryCode": "FR"
  },
  {
      "label": "XMR",
      "city": "Marmande",
      "countryCode": "FR"
  },
  {
      "label": "XMS",
      "city": "Macas",
      "countryCode": "EC"
  },
  {
      "label": "XMT",
      "city": "Menton",
      "countryCode": "FR"
  },
  {
      "label": "XMU",
      "city": "Moulin Sur Allier",
      "countryCode": "FR"
  },
  {
      "label": "XMV",
      "city": "Pichanal",
      "countryCode": "AR"
  },
  {
      "label": "XMW",
      "city": "Montauban",
      "countryCode": "FR"
  },
  {
      "label": "XMX",
      "city": "Ledesma",
      "countryCode": "AR"
  },
  {
      "label": "XMY",
      "city": "Yam Island",
      "countryCode": "AU"
  },
  {
      "label": "XMZ",
      "city": "Macclesfield",
      "countryCode": "GB"
  },
  {
      "label": "xna",
      "city": "NW Arkansas",
      "countryCode": "US"
  },
  {
      "label": "XND",
      "city": "Drammen",
      "countryCode": "NO"
  },
  {
      "label": "XNG",
      "city": "Quang Ngai",
      "countryCode": "VN"
  },
  {
      "label": "XNM",
      "city": "Nottingham",
      "countryCode": "GB"
  },
  {
      "label": "XNN",
      "city": "Xining",
      "countryCode": "CN"
  },
  {
      "label": "XNO",
      "city": "Northallerton",
      "countryCode": "GB"
  },
  {
      "label": "XNR",
      "city": "Aabenraa",
      "countryCode": "DK"
  },
  {
      "label": "XNS",
      "city": "Ansan",
      "countryCode": "KW"
  },
  {
      "label": "XNT",
      "city": "Xingtai",
      "countryCode": "CN"
  },
  {
      "label": "XNU",
      "city": "Nouna",
      "countryCode": "BF"
  },
  {
      "label": "XNW",
      "city": "Nuneaton",
      "countryCode": "GB"
  },
  {
      "label": "XOC",
      "city": "Madrid",
      "countryCode": "ES"
  },
  {
      "label": "XOE",
      "city": "Sao Jose",
      "countryCode": "BR"
  },
  {
      "label": "XOG",
      "city": "Orange",
      "countryCode": "FR"
  },
  {
      "label": "XOK",
      "city": "Oakville",
      "countryCode": "CA"
  },
  {
      "label": "XON",
      "city": "Carleton",
      "countryCode": "CA"
  },
  {
      "label": "XOS",
      "city": "Mosconi",
      "countryCode": "AR"
  },
  {
      "label": "XOT",
      "city": "Marigot",
      "countryCode": "GP"
  },
  {
      "label": "XOX",
      "city": "Cheonan",
      "countryCode": "KW"
  },
  {
      "label": "XOY",
      "city": "Aulnoye",
      "countryCode": "FR"
  },
  {
      "label": "XPA",
      "city": "Pama",
      "countryCode": "BF"
  },
  {
      "label": "XPB",
      "city": "Parksville",
      "countryCode": "CA"
  },
  {
      "label": "XPD",
      "city": "San Pedro",
      "countryCode": "AR"
  },
  {
      "label": "XPF",
      "city": "Penrith",
      "countryCode": "GB"
  },
  {
      "label": "XPH",
      "city": "Port Hope",
      "countryCode": "CA"
  },
  {
      "label": "XPK",
      "city": "Pukatawagan",
      "countryCode": "CA"
  },
  {
      "label": "XPL",
      "city": "Comayagua",
      "countryCode": "HN"
  },
  {
      "label": "XPM",
      "city": "Pontorson Mt St Michel",
      "countryCode": "FR"
  },
  {
      "label": "XPN",
      "city": "Brampton",
      "countryCode": "CA"
  },
  {
      "label": "XPP",
      "city": "Poplar River",
      "countryCode": "CA"
  },
  {
      "label": "XPR",
      "city": "Pine Ridge",
      "countryCode": "US"
  },
  {
      "label": "XPS",
      "city": "Provins",
      "countryCode": "FR"
  },
  {
      "label": "XPT",
      "city": "Preston",
      "countryCode": "GB"
  },
  {
      "label": "XPU",
      "city": "West Kuparuk",
      "countryCode": "US"
  },
  {
      "label": "XPV",
      "city": "Port Vendres",
      "countryCode": "FR"
  },
  {
      "label": "XPW",
      "city": "Didcot Parkway",
      "countryCode": "GB"
  },
  {
      "label": "XPX",
      "city": "Point Aux Tremble",
      "countryCode": "CA"
  },
  {
      "label": "XQA",
      "city": "SEVILLA",
      "countryCode": "FR"
  },
  {
      "label": "XQB",
      "city": "Basingstoke",
      "countryCode": "GB"
  },
  {
      "label": "XQD",
      "city": "Bedford",
      "countryCode": "GB"
  },
  {
      "label": "XQG",
      "city": "Berwick U Tweed",
      "countryCode": "GB"
  },
  {
      "label": "XQI",
      "city": "Loughborough",
      "countryCode": "GB"
  },
  {
      "label": "XQL",
      "city": "Lancaster",
      "countryCode": "GB"
  },
  {
      "label": "XQM",
      "city": "Market Harborough",
      "countryCode": "GB"
  },
  {
      "label": "XQP",
      "city": "Quepos",
      "countryCode": "CR"
  },
  {
      "label": "XQT",
      "city": "Lichfield",
      "countryCode": "GB"
  },
  {
      "label": "XQU",
      "city": "Qualicum",
      "countryCode": "CA"
  },
  {
      "label": "XQW",
      "city": "Motherwell",
      "countryCode": "GB"
  },
  {
      "label": "XQY",
      "city": "St Quentin En Yve",
      "countryCode": "FR"
  },
  {
      "label": "XRA",
      "city": "Graasten",
      "countryCode": "DK"
  },
  {
      "label": "XRB",
      "city": "Ararangua",
      "countryCode": "BR"
  },
  {
      "label": "XRC",
      "city": "Runcorn",
      "countryCode": "GB"
  },
  {
      "label": "XRE",
      "city": "Reading",
      "countryCode": "GB"
  },
  {
      "label": "XRG",
      "city": "Rugeley Tv",
      "countryCode": "GB"
  },
  {
      "label": "XRI",
      "city": "Riom",
      "countryCode": "FR"
  },
  {
      "label": "XRM",
      "city": "Armentieres",
      "countryCode": "FR"
  },
  {
      "label": "XRN",
      "city": "Redon",
      "countryCode": "FR"
  },
  {
      "label": "XRO",
      "city": "La Roche Sur Yon",
      "countryCode": "FR"
  },
  {
      "label": "XRP",
      "city": "Riviere A Pierre",
      "countryCode": "CA"
  },
  {
      "label": "XRR",
      "city": "Ross River",
      "countryCode": "CA"
  },
  {
      "label": "XRS",
      "city": "Les Arcs",
      "countryCode": "FR"
  },
  {
      "label": "XRT",
      "city": "Rambouillet",
      "countryCode": "FR"
  },
  {
      "label": "XRU",
      "city": "Rugby",
      "countryCode": "GB"
  },
  {
      "label": "XRX",
      "city": "Roubaix",
      "countryCode": "FR"
  },
  {
      "label": "XRY",
      "city": "Jerez",
      "countryCode": "ES"
  },
  {
      "label": "XSB",
      "city": "St Malo",
      "countryCode": "FR"
  },
  {
      "label": "XSC",
      "city": "South Caicos",
      "countryCode": "TC"
  },
  {
      "label": "XSE",
      "city": "Sebba",
      "countryCode": "BF"
  },
  {
      "label": "XSF",
      "city": "Sens",
      "countryCode": "FR"
  },
  {
      "label": "XSG",
      "city": "St Omer",
      "countryCode": "FR"
  },
  {
      "label": "XSI",
      "city": "South Indian Lake",
      "countryCode": "CA"
  },
  {
      "label": "XSJ",
      "city": "St Quentin",
      "countryCode": "FR"
  },
  {
      "label": "XSK",
      "city": "St Raphael",
      "countryCode": "FR"
  },
  {
      "label": "XSL",
      "city": "Sarlat",
      "countryCode": "FR"
  },
  {
      "label": "XSM",
      "city": "St Marys",
      "countryCode": "US"
  },
  {
      "label": "XSN",
      "city": "Sallanches",
      "countryCode": "FR"
  },
  {
      "label": "XSO",
      "city": "Siocon",
      "countryCode": "PH"
  },
  {
      "label": "XSQ",
      "city": "Selestat",
      "countryCode": "FR"
  },
  {
      "label": "XSR",
      "city": "Salisbury",
      "countryCode": "GB"
  },
  {
      "label": "XSS",
      "city": "Soissons",
      "countryCode": "FR"
  },
  {
      "label": "XST",
      "city": "Saintes",
      "countryCode": "FR"
  },
  {
      "label": "XSU",
      "city": "Saumur",
      "countryCode": "FR"
  },
  {
      "label": "XSV",
      "city": "Senlis",
      "countryCode": "FR"
  },
  {
      "label": "XSW",
      "city": "Sedan",
      "countryCode": "FR"
  },
  {
      "label": "XSX",
      "city": "Seclin",
      "countryCode": "FR"
  },
  {
      "label": "XSY",
      "city": "Sete",
      "countryCode": "FR"
  },
  {
      "label": "XSZ",
      "city": "Setubal",
      "countryCode": "PT"
  },
  {
      "label": "XTB",
      "city": "Tarbes",
      "countryCode": "FR"
  },
  {
      "label": "XTC",
      "city": "St Claude",
      "countryCode": "FR"
  },
  {
      "label": "XTD",
      "city": "St Die",
      "countryCode": "FR"
  },
  {
      "label": "XTE",
      "city": "La Tour De Carol",
      "countryCode": "FR"
  },
  {
      "label": "XTG",
      "city": "Thargomindah",
      "countryCode": "AU"
  },
  {
      "label": "XTH",
      "city": "Thionville",
      "countryCode": "FR"
  },
  {
      "label": "XTK",
      "city": "Thirsk",
      "countryCode": "GB"
  },
  {
      "label": "XTL",
      "city": "Tadoule Lake",
      "countryCode": "CA"
  },
  {
      "label": "XTN",
      "city": "Tourcoing",
      "countryCode": "FR"
  },
  {
      "label": "XTO",
      "city": "Taroom",
      "countryCode": "AU"
  },
  {
      "label": "XTR",
      "city": "Tara",
      "countryCode": "AU"
  },
  {
      "label": "XTS",
      "city": "Thonon Les Bains",
      "countryCode": "FR"
  },
  {
      "label": "XTU",
      "city": "Tulle",
      "countryCode": "FR"
  },
  {
      "label": "XTY",
      "city": "Strathroy",
      "countryCode": "CA"
  },
  {
      "label": "XUY",
      "city": "Auray",
      "countryCode": "FR"
  },
  {
      "label": "XUZ",
      "city": "Xuzhou",
      "countryCode": "CN"
  },
  {
      "label": "XVA",
      "city": "Stockport",
      "countryCode": "GB"
  },
  {
      "label": "XVB",
      "city": "Stafford",
      "countryCode": "GB"
  },
  {
      "label": "XVC",
      "city": "Crewe",
      "countryCode": "GB"
  },
  {
      "label": "XVD",
      "city": "Vendome",
      "countryCode": "FR"
  },
  {
      "label": "XVE",
      "city": "Versailles",
      "countryCode": "FR"
  },
  {
      "label": "XVF",
      "city": "Villefranche Sur Saone",
      "countryCode": "FR"
  },
  {
      "label": "XVG",
      "city": "Darlington",
      "countryCode": "GB"
  },
  {
      "label": "XVH",
      "city": "Peterborough",
      "countryCode": "GB"
  },
  {
      "label": "XVI",
      "city": "Vienne",
      "countryCode": "FR"
  },
  {
      "label": "XVJ",
      "city": "Stevenage",
      "countryCode": "GB"
  },
  {
      "label": "XVL",
      "city": "Vinh Long",
      "countryCode": "VN"
  },
  {
      "label": "XVN",
      "city": "Verdun",
      "countryCode": "FR"
  },
  {
      "label": "XVO",
      "city": "Vesoul",
      "countryCode": "FR"
  },
  {
      "label": "XVP",
      "city": "Villepinte",
      "countryCode": "FR"
  },
  {
      "label": "XVR",
      "city": "Valloire",
      "countryCode": "FR"
  },
  {
      "label": "XVT",
      "city": "Vitre",
      "countryCode": "FR"
  },
  {
      "label": "XVU",
      "city": "Durham",
      "countryCode": "GB"
  },
  {
      "label": "XVV",
      "city": "Belleville",
      "countryCode": "CA"
  },
  {
      "label": "XVW",
      "city": "Wolverhampton",
      "countryCode": "GB"
  },
  {
      "label": "XVY",
      "city": "Venice",
      "countryCode": "IT"
  },
  {
      "label": "XVZ",
      "city": "Vierzon",
      "countryCode": "FR"
  },
  {
      "label": "XWA",
      "city": "Watford",
      "countryCode": "CA"
  },
  {
      "label": "XWB",
      "city": "Stirling",
      "countryCode": "GB"
  },
  {
      "label": "XWD",
      "city": "Wakefield Westgate",
      "countryCode": "GB"
  },
  {
      "label": "XWE",
      "city": "Wellingborough",
      "countryCode": "GB"
  },
  {
      "label": "XWG",
      "city": "Strasbourg",
      "countryCode": "FR"
  },
  {
      "label": "XWH",
      "city": "Stoke On Trent",
      "countryCode": "GB"
  },
  {
      "label": "XWI",
      "city": "Wigan Nw",
      "countryCode": "GB"
  },
  {
      "label": "XWN",
      "city": "Warrington",
      "countryCode": "GB"
  },
  {
      "label": "XWO",
      "city": "Woking",
      "countryCode": "GB"
  },
  {
      "label": "XWY",
      "city": "Wyoming",
      "countryCode": "CA"
  },
  {
      "label": "XXC",
      "city": "Cascais",
      "countryCode": "PT"
  },
  {
      "label": "XXF",
      "city": "Scenic Flight",
      "countryCode": "NZ"
  },
  {
      "label": "XXP",
      "city": "Potsdam",
      "countryCode": "DE"
  },
  {
      "label": "XXS",
      "city": "Scenic Flight",
      "countryCode": "NZ"
  },
  {
      "label": "XYA",
      "city": "Yandina",
      "countryCode": "SB"
  },
  {
      "label": "XYE",
      "city": "Ye",
      "countryCode": "MM"
  },
  {
      "label": "XYR",
      "city": "Yellow River",
      "countryCode": "PG"
  },
  {
      "label": "XZA",
      "city": "Zabre",
      "countryCode": "BF"
  },
  {
      "label": "XZB",
      "city": "Casselman",
      "countryCode": "CA"
  },
  {
      "label": "XZC",
      "city": "Glencoe",
      "countryCode": "CA"
  },
  {
      "label": "XZK",
      "city": "Amherst",
      "countryCode": "CA"
  },
  {
      "label": "XZN",
      "city": "Avignon",
      "countryCode": "FR"
  },
  {
      "label": "XZO",
      "city": "Oslo",
      "countryCode": "NO"
  },
  {
      "label": "XZP",
      "city": "Pass",
      "countryCode": "CA"
  },
  {
      "label": "XZR",
      "city": "Rail",
      "countryCode": "CA"
  },
  {
      "label": "XZV",
      "city": "Toulon",
      "countryCode": "FR"
  },
  {
      "label": "XZY",
      "city": "Alzey",
      "countryCode": "DE"
  },
  {
      "label": "YAA",
      "city": "Anahim Lake",
      "countryCode": "CA"
  },
  {
      "label": "YAB",
      "city": "Arctic Bay",
      "countryCode": "CA"
  },
  {
      "label": "YAC",
      "city": "Cat Lake",
      "countryCode": "CA"
  },
  {
      "label": "YAD",
      "city": "Moose Lake",
      "countryCode": "CA"
  },
  {
      "label": "YAE",
      "city": "Alta Lake",
      "countryCode": "CA"
  },
  {
      "label": "YAF",
      "city": "Asbestos Hill",
      "countryCode": "CA"
  },
  {
      "label": "YAG",
      "city": "Fort Frances",
      "countryCode": "CA"
  },
  {
      "label": "YAH",
      "city": "Lagrande 4",
      "countryCode": "CA"
  },
  {
      "label": "YAI",
      "city": "Chillan",
      "countryCode": "CL"
  },
  {
      "label": "YAJ",
      "city": "Lyall Harbour",
      "countryCode": "CA"
  },
  {
      "label": "YAK",
      "city": "Yakutat",
      "countryCode": "US"
  },
  {
      "label": "YAL",
      "city": "Alert Bay",
      "countryCode": "CA"
  },
  {
      "label": "YAM",
      "city": "Sault Ste Marie",
      "countryCode": "CA"
  },
  {
      "label": "YAN",
      "city": "Yangambi",
      "countryCode": "CD"
  },
  {
      "label": "YAO",
      "city": "Yaounde",
      "countryCode": "CM"
  },
  {
      "label": "YAP",
      "city": "Yap",
      "countryCode": "FM"
  },
  {
      "label": "YAQ",
      "city": "Maple Bay",
      "countryCode": "CA"
  },
  {
      "label": "YAR",
      "city": "Lagrande 3",
      "countryCode": "CA"
  },
  {
      "label": "YAS",
      "city": "Yasawa",
      "countryCode": "FJ"
  },
  {
      "label": "YAT",
      "city": "Attawapiskat",
      "countryCode": "CA"
  },
  {
      "label": "YAU",
      "city": "Kattiniq",
      "countryCode": "CA"
  },
  {
      "label": "YAV",
      "city": "Miners Bay",
      "countryCode": "CA"
  },
  {
      "label": "YAX",
      "city": "Angling Lake",
      "countryCode": "CA"
  },
  {
      "label": "YAY",
      "city": "St Anthony",
      "countryCode": "CA"
  },
  {
      "label": "YAZ",
      "city": "Tofino",
      "countryCode": "CA"
  },
  {
      "label": "YBA",
      "city": "Banff",
      "countryCode": "CA"
  },
  {
      "label": "YBC",
      "city": "Baie Comeau",
      "countryCode": "CA"
  },
  {
      "label": "YBD",
      "city": "New Westminister",
      "countryCode": "CA"
  },
  {
      "label": "YBE",
      "city": "Uranium City",
      "countryCode": "CA"
  },
  {
      "label": "YBF",
      "city": "Bamfield",
      "countryCode": "CA"
  },
  {
      "label": "YBG",
      "city": "Bagotville",
      "countryCode": "CA"
  },
  {
      "label": "YBH",
      "city": "Bull Harbour",
      "countryCode": "CA"
  },
  {
      "label": "YBI",
      "city": "Black Tickle",
      "countryCode": "CA"
  },
  {
      "label": "YBJ",
      "city": "Baie Johan Beetz",
      "countryCode": "CA"
  },
  {
      "label": "YBK",
      "city": "Baker Lake",
      "countryCode": "CA"
  },
  {
      "label": "YBL",
      "city": "Campbell River",
      "countryCode": "CA"
  },
  {
      "label": "YBM",
      "city": "Bronson Creek",
      "countryCode": "CA"
  },
  {
      "label": "YBN",
      "city": "Borden",
      "countryCode": "CA"
  },
  {
      "label": "YBO",
      "city": "Bobquinn Lake",
      "countryCode": "CA"
  },
  {
      "label": "YBP",
      "city": "Yibin",
      "countryCode": "CN"
  },
  {
      "label": "YBQ",
      "city": "Telegraph Harbour",
      "countryCode": "CA"
  },
  {
      "label": "YBR",
      "city": "Brandon",
      "countryCode": "CA"
  },
  {
      "label": "YBS",
      "city": "Apapamiska Lake",
      "countryCode": "CA"
  },
  {
      "label": "YBT",
      "city": "Brochet",
      "countryCode": "CA"
  },
  {
      "label": "YBU",
      "city": "Obre Lake",
      "countryCode": "CA"
  },
  {
      "label": "YBV",
      "city": "Berens River",
      "countryCode": "CA"
  },
  {
      "label": "YBW",
      "city": "Bedwell Harbor",
      "countryCode": "CA"
  },
  {
      "label": "YBX",
      "city": "Blanc Sablon",
      "countryCode": "CA"
  },
  {
      "label": "YBY",
      "city": "Bonnyville",
      "countryCode": "CA"
  },
  {
      "label": "YCA",
      "city": "Courtenay",
      "countryCode": "CA"
  },
  {
      "label": "YCB",
      "city": "Cambridge Bay",
      "countryCode": "CA"
  },
  {
      "label": "YCC",
      "city": "Cornwall",
      "countryCode": "CA"
  },
  {
      "label": "YCD",
      "city": "Nanaimo",
      "countryCode": "CA"
  },
  {
      "label": "YCE",
      "city": "Centralia",
      "countryCode": "CA"
  },
  {
      "label": "YCF",
      "city": "Cortes Bay",
      "countryCode": "CA"
  },
  {
      "label": "YCG",
      "city": "Castlegar",
      "countryCode": "CA"
  },
  {
      "label": "YCH",
      "city": "Miramichi",
      "countryCode": "CA"
  },
  {
      "label": "YCI",
      "city": "Caribou Island",
      "countryCode": "CA"
  },
  {
      "label": "YCJ",
      "city": "Cape St James",
      "countryCode": "CA"
  },
  {
      "label": "YCK",
      "city": "Colville Lake",
      "countryCode": "CA"
  },
  {
      "label": "YCL",
      "city": "Charlo",
      "countryCode": "CA"
  },
  {
      "label": "YCM",
      "city": "St Catharines",
      "countryCode": "CA"
  },
  {
      "label": "YCN",
      "city": "Cochrane",
      "countryCode": "CA"
  },
  {
      "label": "YCO",
      "city": "Coppermine",
      "countryCode": "CA"
  },
  {
      "label": "YCP",
      "city": "Co Op Point",
      "countryCode": "CA"
  },
  {
      "label": "YCQ",
      "city": "Chetwynd",
      "countryCode": "CA"
  },
  {
      "label": "YCR",
      "city": "Cross Lake",
      "countryCode": "CA"
  },
  {
      "label": "YCS",
      "city": "Chesterfield Inle",
      "countryCode": "CA"
  },
  {
      "label": "YCT",
      "city": "Coronation",
      "countryCode": "CA"
  },
  {
      "label": "YCU",
      "city": "Cullaton Lake",
      "countryCode": "CA"
  },
  {
      "label": "YCV",
      "city": "Cartierville",
      "countryCode": "CA"
  },
  {
      "label": "YCW",
      "city": "Chilliwack",
      "countryCode": "CA"
  },
  {
      "label": "YCX",
      "city": "Gagetown",
      "countryCode": "CA"
  },
  {
      "label": "YCY",
      "city": "Clyde River",
      "countryCode": "CA"
  },
  {
      "label": "YCZ",
      "city": "Fairmount Springs",
      "countryCode": "CA"
  },
  {
      "label": "YDA",
      "city": "Dawson City",
      "countryCode": "CA"
  },
  {
      "label": "YDB",
      "city": "Burwash Landings",
      "countryCode": "CA"
  },
  {
      "label": "YDC",
      "city": "Drayton Valley",
      "countryCode": "CA"
  },
  {
      "label": "YDE",
      "city": "Paradise River",
      "countryCode": "CA"
  },
  {
      "label": "YDF",
      "city": "Deer Lake",
      "countryCode": "CA"
  },
  {
      "label": "YDG",
      "city": "Digby",
      "countryCode": "CA"
  },
  {
      "label": "YDH",
      "city": "Daniels Harbour",
      "countryCode": "CA"
  },
  {
      "label": "YDI",
      "city": "Davis Inlet",
      "countryCode": "CA"
  },
  {
      "label": "YDJ",
      "city": "Hatchet Lake",
      "countryCode": "CA"
  },
  {
      "label": "YDK",
      "city": "Main Duck Island",
      "countryCode": "CA"
  },
  {
      "label": "YDL",
      "city": "Dease Lake",
      "countryCode": "CA"
  },
  {
      "label": "YDN",
      "city": "Dauphin",
      "countryCode": "CA"
  },
  {
      "label": "YDO",
      "city": "Dolbeau",
      "countryCode": "CA"
  },
  {
      "label": "YDP",
      "city": "Nain",
      "countryCode": "CA"
  },
  {
      "label": "YDQ",
      "city": "Dawson Creek",
      "countryCode": "CA"
  },
  {
      "label": "YDR",
      "city": "Broadview",
      "countryCode": "CA"
  },
  {
      "label": "YDS",
      "city": "Desolation Sound",
      "countryCode": "CA"
  },
  {
      "label": "YDU",
      "city": "Kasba Lake",
      "countryCode": "CA"
  },
  {
      "label": "YDV",
      "city": "Bloodvein",
      "countryCode": "CA"
  },
  {
      "label": "YDX",
      "city": "Doc Creek",
      "countryCode": "CA"
  },
  {
      "label": "YEA",
      "city": "Edmonton",
      "countryCode": "CA"
  },
  {
      "label": "YEC",
      "city": "Yechon",
      "countryCode": "KR"
  },
  {
      "label": "YEI",
      "city": "Ennadai Lake",
      "countryCode": "CA"
  },
  {
      "label": "YEK",
      "city": "Eskimo Point",
      "countryCode": "CA"
  },
  {
      "label": "YEL",
      "city": "Elliot Lake",
      "countryCode": "CA"
  },
  {
      "label": "YEM",
      "city": "Manitowaning",
      "countryCode": "CA"
  },
  {
      "label": "YEN",
      "city": "Estevan",
      "countryCode": "CA"
  },
  {
      "label": "YEO",
      "city": "Yeovilton",
      "countryCode": "GB"
  },
  {
      "label": "YEP",
      "city": "Estevan Point",
      "countryCode": "CA"
  },
  {
      "label": "YEQ",
      "city": "Yenkis",
      "countryCode": "PG"
  },
  {
      "label": "YER",
      "city": "Fort Severn",
      "countryCode": "CA"
  },
  {
      "label": "YET",
      "city": "Edson",
      "countryCode": "CA"
  },
  {
      "label": "YEU",
      "city": "Eureka",
      "countryCode": "CA"
  },
  {
      "label": "YEV",
      "city": "Inuvik",
      "countryCode": "CA"
  },
  {
      "label": "YEY",
      "city": "Amos",
      "countryCode": "CA"
  },
  {
      "label": "YFA",
      "city": "Fort Albany",
      "countryCode": "CA"
  },
  {
      "label": "YFB",
      "city": "Iqaluit",
      "countryCode": "CA"
  },
  {
      "label": "YFC",
      "city": "Fredericton",
      "countryCode": "CA"
  },
  {
      "label": "YFE",
      "city": "Forestville",
      "countryCode": "CA"
  },
  {
      "label": "YFG",
      "city": "Fontanges",
      "countryCode": "CA"
  },
  {
      "label": "YFH",
      "city": "Fort Hope",
      "countryCode": "CA"
  },
  {
      "label": "YFL",
      "city": "Fort Reliance",
      "countryCode": "CA"
  },
  {
      "label": "YFO",
      "city": "Flin Flon",
      "countryCode": "CA"
  },
  {
      "label": "YFR",
      "city": "Fort Resolution",
      "countryCode": "CA"
  },
  {
      "label": "YFS",
      "city": "Fort Simpson",
      "countryCode": "CA"
  },
  {
      "label": "YFX",
      "city": "Fox Harbour",
      "countryCode": "CA"
  },
  {
      "label": "YGA",
      "city": "Gagnon",
      "countryCode": "CA"
  },
  {
      "label": "YGB",
      "city": "Gillies Bay",
      "countryCode": "CA"
  },
  {
      "label": "YGC",
      "city": "Grande Cache",
      "countryCode": "CA"
  },
  {
      "label": "YGE",
      "city": "Gorge Harbor",
      "countryCode": "CA"
  },
  {
      "label": "YGG",
      "city": "Ganges Harbor",
      "countryCode": "CA"
  },
  {
      "label": "YGH",
      "city": "Fort Good Hope",
      "countryCode": "CA"
  },
  {
      "label": "YGJ",
      "city": "Yonago",
      "countryCode": "JP"
  },
  {
      "label": "YGK",
      "city": "Kingston",
      "countryCode": "CA"
  },
  {
      "label": "YGL",
      "city": "La Grande",
      "countryCode": "CA"
  },
  {
      "label": "YGM",
      "city": "Gimli",
      "countryCode": "CA"
  },
  {
      "label": "YGN",
      "city": "Greenway Sound",
      "countryCode": "CA"
  },
  {
      "label": "YGO",
      "city": "Gods Narrows",
      "countryCode": "CA"
  },
  {
      "label": "YGP",
      "city": "Gaspe",
      "countryCode": "CA"
  },
  {
      "label": "YGQ",
      "city": "Geraldton",
      "countryCode": "CA"
  },
  {
      "label": "YGR",
      "city": "Iles De La Madele",
      "countryCode": "CA"
  },
  {
      "label": "YGS",
      "city": "Germansen",
      "countryCode": "CA"
  },
  {
      "label": "YGT",
      "city": "Igloolik",
      "countryCode": "CA"
  },
  {
      "label": "YGV",
      "city": "Havre St Pierre",
      "countryCode": "CA"
  },
  {
      "label": "YGW",
      "city": "Kuujjuarapik",
      "countryCode": "CA"
  },
  {
      "label": "YGX",
      "city": "Gillam",
      "countryCode": "CA"
  },
  {
      "label": "YGY",
      "city": "Deception",
      "countryCode": "CA"
  },
  {
      "label": "YGZ",
      "city": "Grise Fiord",
      "countryCode": "CA"
  },
  {
      "label": "YHA",
      "city": "Port Hope Simpson",
      "countryCode": "CA"
  },
  {
      "label": "YHB",
      "city": "Hudson Bay",
      "countryCode": "CA"
  },
  {
      "label": "YHC",
      "city": "Hakai Pass",
      "countryCode": "CA"
  },
  {
      "label": "YHD",
      "city": "Dryden",
      "countryCode": "CA"
  },
  {
      "label": "YHE",
      "city": "Hope",
      "countryCode": "CA"
  },
  {
      "label": "YHF",
      "city": "Hearst",
      "countryCode": "CA"
  },
  {
      "label": "YHG",
      "city": "Charlottetown",
      "countryCode": "CA"
  },
  {
      "label": "YHI",
      "city": "Holman",
      "countryCode": "CA"
  },
  {
      "label": "YHK",
      "city": "Gjoa Haven",
      "countryCode": "CA"
  },
  {
      "label": "YHM",
      "city": "Hamilton",
      "countryCode": "CA"
  },
  {
      "label": "YHN",
      "city": "Hornepayne",
      "countryCode": "CA"
  },
  {
      "label": "YHO",
      "city": "Hopedale",
      "countryCode": "CA"
  },
  {
      "label": "YHP",
      "city": "Poplar Hill",
      "countryCode": "CA"
  },
  {
      "label": "YHR",
      "city": "Chevery",
      "countryCode": "CA"
  },
  {
      "label": "YHS",
      "city": "Sechelt",
      "countryCode": "CA"
  },
  {
      "label": "YHT",
      "city": "Haines Junction",
      "countryCode": "CA"
  },
  {
      "label": "YHY",
      "city": "Hay River",
      "countryCode": "CA"
  },
  {
      "label": "YHZ",
      "city": "Halifax",
      "countryCode": "CA"
  },
  {
      "label": "YIB",
      "city": "Atikokan",
      "countryCode": "CA"
  },
  {
      "label": "YIC",
      "city": "Isachsen",
      "countryCode": "CA"
  },
  {
      "label": "YIF",
      "city": "Pakuashipi",
      "countryCode": "CA"
  },
  {
      "label": "YIG",
      "city": "Big Bay Marina",
      "countryCode": "CA"
  },
  {
      "label": "YIH",
      "city": "Yichang",
      "countryCode": "CN"
  },
  {
      "label": "YIK",
      "city": "Ivujivik",
      "countryCode": "CA"
  },
  {
      "label": "YIN",
      "city": "Yining",
      "countryCode": "CN"
  },
  {
      "label": "YIO",
      "city": "Pond Inlet",
      "countryCode": "CA"
  },
  {
      "label": "YIV",
      "city": "Island Lk Garden",
      "countryCode": "CA"
  },
  {
      "label": "YIW",
      "city": "Yiwu",
      "countryCode": "CN"
  },
  {
      "label": "YIX",
      "city": "Port Radium",
      "countryCode": "CA"
  },
  {
      "label": "YJA",
      "city": "Jasper",
      "countryCode": "CA"
  },
  {
      "label": "YJB",
      "city": "Barcelona",
      "countryCode": "ES"
  },
  {
      "label": "YJF",
      "city": "Fort Liard",
      "countryCode": "CA"
  },
  {
      "label": "YJN",
      "city": "St Jean",
      "countryCode": "CA"
  },
  {
      "label": "YJO",
      "city": "Johnny Mountain",
      "countryCode": "CA"
  },
  {
      "label": "YJP",
      "city": "Jasper Hinton",
      "countryCode": "CA"
  },
  {
      "label": "YJT",
      "city": "Stephenville",
      "countryCode": "CA"
  },
  {
      "label": "YKA",
      "city": "Kamloops",
      "countryCode": "CA"
  },
  {
      "label": "YKC",
      "city": "Collins Bay",
      "countryCode": "CA"
  },
  {
      "label": "YKD",
      "city": "Kincardine",
      "countryCode": "CA"
  },
  {
      "label": "YKE",
      "city": "Knee Lake",
      "countryCode": "CA"
  },
  {
      "label": "YKF",
      "city": "Kitchener",
      "countryCode": "CA"
  },
  {
      "label": "YKG",
      "city": "Kangirsuk",
      "countryCode": "CA"
  },
  {
      "label": "YKI",
      "city": "Kennosao Lake",
      "countryCode": "CA"
  },
  {
      "label": "YKJ",
      "city": "Key Lake",
      "countryCode": "CA"
  },
  {
      "label": "YKK",
      "city": "Kitkatia",
      "countryCode": "CA"
  },
  {
      "label": "YKL",
      "city": "Schefferville",
      "countryCode": "CA"
  },
  {
      "label": "YKM",
      "city": "Yakima",
      "countryCode": "US"
  },
  {
      "label": "YKN",
      "city": "Yankton",
      "countryCode": "US"
  },
  {
      "label": "YKO",
      "city": "Yuksekova",
      "countryCode": "TR"
  },
  {
      "label": "YKQ",
      "city": "Waskaganish",
      "countryCode": "CA"
  },
  {
      "label": "YKS",
      "city": "Yakutsk",
      "countryCode": "RU"
  },
  {
      "label": "YKT",
      "city": "Klemtu",
      "countryCode": "CA"
  },
  {
      "label": "YKU",
      "city": "Chisasibi",
      "countryCode": "CA"
  },
  {
      "label": "YKX",
      "city": "Kirkland Lake",
      "countryCode": "CA"
  },
  {
      "label": "YKY",
      "city": "Kindersley",
      "countryCode": "CA"
  },
  {
      "label": "YLA",
      "city": "Langara",
      "countryCode": "CA"
  },
  {
      "label": "YLB",
      "city": "Lac Biche",
      "countryCode": "CA"
  },
  {
      "label": "YLC",
      "city": "Lake Harbour",
      "countryCode": "CA"
  },
  {
      "label": "YLD",
      "city": "Chapleau",
      "countryCode": "CA"
  },
  {
      "label": "YLE",
      "city": "Lac La Martre",
      "countryCode": "CA"
  },
  {
      "label": "YLF",
      "city": "Laforges",
      "countryCode": "CA"
  },
  {
      "label": "YLG",
      "city": "Yalgoo",
      "countryCode": "AU"
  },
  {
      "label": "YLH",
      "city": "Lansdowne House",
      "countryCode": "CA"
  },
  {
      "label": "YLI",
      "city": "Ylivieska",
      "countryCode": "FI"
  },
  {
      "label": "YLJ",
      "city": "Meadow Lake",
      "countryCode": "CA"
  },
  {
      "label": "YLL",
      "city": "Lloydminster",
      "countryCode": "CA"
  },
  {
      "label": "YLM",
      "city": "Clinton Creek",
      "countryCode": "CA"
  },
  {
      "label": "YLN",
      "city": "Yilan",
      "countryCode": "CN"
  },
  {
      "label": "YLO",
      "city": "Shilo",
      "countryCode": "CA"
  },
  {
      "label": "YLP",
      "city": "Mingan",
      "countryCode": "CA"
  },
  {
      "label": "YLQ",
      "city": "La Tuque",
      "countryCode": "CA"
  },
  {
      "label": "YLR",
      "city": "Leaf Rapids",
      "countryCode": "CA"
  },
  {
      "label": "YLS",
      "city": "Lebel Sur Quevillon",
      "countryCode": "CA"
  },
  {
      "label": "YLT",
      "city": "Alert",
      "countryCode": "CA"
  },
  {
      "label": "YLW",
      "city": "Kelowna",
      "countryCode": "CA"
  },
  {
      "label": "YLX",
      "city": "Long Point",
      "countryCode": "CA"
  },
  {
      "label": "YLY",
      "city": "Lytton",
      "countryCode": "CA"
  },
  {
      "label": "YMA",
      "city": "Mayo",
      "countryCode": "CA"
  },
  {
      "label": "YMB",
      "city": "Merritt",
      "countryCode": "CA"
  },
  {
      "label": "YMC",
      "city": "Maricourt Airstrip",
      "countryCode": "CA"
  },
  {
      "label": "YMD",
      "city": "Mould Bay",
      "countryCode": "CA"
  },
  {
      "label": "YME",
      "city": "Matane",
      "countryCode": "CA"
  },
  {
      "label": "YMF",
      "city": "Montagne Harbor",
      "countryCode": "CA"
  },
  {
      "label": "YMG",
      "city": "Manitouwadge",
      "countryCode": "CA"
  },
  {
      "label": "YMH",
      "city": "Mary's Harbour",
      "countryCode": "CA"
  },
  {
      "label": "YMI",
      "city": "Minaki",
      "countryCode": "CA"
  },
  {
      "label": "YMJ",
      "city": "Moose Jaw",
      "countryCode": "CA"
  },
  {
      "label": "YML",
      "city": "Murray Bay",
      "countryCode": "CA"
  },
  {
      "label": "YMM",
      "city": "Fort Mcmurray",
      "countryCode": "CA"
  },
  {
      "label": "YMN",
      "city": "Makkovik",
      "countryCode": "CA"
  },
  {
      "label": "YMO",
      "city": "Moosonee",
      "countryCode": "CA"
  },
  {
      "label": "YMP",
      "city": "Port Mcneil",
      "countryCode": "CA"
  },
  {
      "label": "YMQ",
      "city": "Montreal",
      "countryCode": "CA"
  },
  {
      "label": "YMR",
      "city": "Merry Island",
      "countryCode": "CA"
  },
  {
      "label": "YMS",
      "city": "Yurimaguas",
      "countryCode": "PE"
  },
  {
      "label": "YMT",
      "city": "Chibougamau",
      "countryCode": "CA"
  },
  {
      "label": "YMW",
      "city": "Maniwaki",
      "countryCode": "CA"
  },
  {
      "label": "YNA",
      "city": "Natashquan",
      "countryCode": "CA"
  },
  {
      "label": "YNB",
      "city": "Yanbo",
      "countryCode": "SA"
  },
  {
      "label": "YNC",
      "city": "Wemindji",
      "countryCode": "CA"
  },
  {
      "label": "YND",
      "city": "Gatineau",
      "countryCode": "CA"
  },
  {
      "label": "YNE",
      "city": "Norway House",
      "countryCode": "CA"
  },
  {
      "label": "YNF",
      "city": "Corner Brook",
      "countryCode": "CA"
  },
  {
      "label": "YNG",
      "city": "Youngstown Warren",
      "countryCode": "US"
  },
  {
      "label": "YNH",
      "city": "Hudson Hope",
      "countryCode": "CA"
  },
  {
      "label": "YNI",
      "city": "Nitchequon",
      "countryCode": "CA"
  },
  {
      "label": "YNJ",
      "city": "Yanji",
      "countryCode": "CN"
  },
  {
      "label": "YNK",
      "city": "Nootka Sound",
      "countryCode": "CA"
  },
  {
      "label": "YNL",
      "city": "Points North Land",
      "countryCode": "CA"
  },
  {
      "label": "YNM",
      "city": "Matagami",
      "countryCode": "CA"
  },
  {
      "label": "YNO",
      "city": "North Spirit Lake",
      "countryCode": "CA"
  },
  {
      "label": "YNR",
      "city": "Arnes",
      "countryCode": "CA"
  },
  {
      "label": "YNS",
      "city": "Nemiscau",
      "countryCode": "CA"
  },
  {
      "label": "YNT",
      "city": "Yantai",
      "countryCode": "CN"
  },
  {
      "label": "YNZ",
      "city": "Yancheng",
      "countryCode": "CN"
  },
  {
      "label": "YOA",
      "city": "Ekati",
      "countryCode": "CA"
  },
  {
      "label": "YOC",
      "city": "Old Crow",
      "countryCode": "CA"
  },
  {
      "label": "YOD",
      "city": "Cold Lake",
      "countryCode": "CA"
  },
  {
      "label": "YOE",
      "city": "Falher",
      "countryCode": "CA"
  },
  {
      "label": "YOG",
      "city": "Ogoki",
      "countryCode": "CA"
  },
  {
      "label": "YOH",
      "city": "Oxford House",
      "countryCode": "CA"
  },
  {
      "label": "YOJ",
      "city": "High Level",
      "countryCode": "CA"
  },
  {
      "label": "YOK",
      "city": "Yokohama",
      "countryCode": "JP"
  },
  {
      "label": "YOL",
      "city": "Yola",
      "countryCode": "NG"
  },
  {
      "label": "YON",
      "city": "Trashigang",
      "countryCode": "BT"
  },
  {
      "label": "YOO",
      "city": "Oshawa",
      "countryCode": "CA"
  },
  {
      "label": "YOP",
      "city": "Rainbow Lake",
      "countryCode": "CA"
  },
  {
      "label": "YOS",
      "city": "Owen Sound",
      "countryCode": "CA"
  },
  {
      "label": "YOW",
      "city": "Ottawa",
      "countryCode": "CA"
  },
  {
      "label": "YOY",
      "city": "Valcartier",
      "countryCode": "CA"
  },
  {
      "label": "YPA",
      "city": "Prince Albert",
      "countryCode": "CA"
  },
  {
      "label": "YPB",
      "city": "Port Alberni",
      "countryCode": "CA"
  },
  {
      "label": "YPC",
      "city": "Paulatuk",
      "countryCode": "CA"
  },
  {
      "label": "YPD",
      "city": "Parry Sound",
      "countryCode": "CA"
  },
  {
      "label": "YPE",
      "city": "Peace River",
      "countryCode": "CA"
  },
  {
      "label": "YPF",
      "city": "Esquimalt",
      "countryCode": "CA"
  },
  {
      "label": "YPG",
      "city": "Portage La Prairie",
      "countryCode": "CA"
  },
  {
      "label": "YPH",
      "city": "Inukjuak",
      "countryCode": "CA"
  },
  {
      "label": "YPI",
      "city": "Port Simpson",
      "countryCode": "CA"
  },
  {
      "label": "YPJ",
      "city": "Aupauluk",
      "countryCode": "CA"
  },
  {
      "label": "YPL",
      "city": "Pickle Lake",
      "countryCode": "CA"
  },
  {
      "label": "YPM",
      "city": "Pikangikum",
      "countryCode": "CA"
  },
  {
      "label": "YPN",
      "city": "Port Menier",
      "countryCode": "CA"
  },
  {
      "label": "YPO",
      "city": "Peawanuck",
      "countryCode": "CA"
  },
  {
      "label": "YPP",
      "city": "Pine Point",
      "countryCode": "CA"
  },
  {
      "label": "YPQ",
      "city": "Peterborough",
      "countryCode": "CA"
  },
  {
      "label": "YPR",
      "city": "Prince Rupert",
      "countryCode": "CA"
  },
  {
      "label": "YPS",
      "city": "Port Hawkesbury",
      "countryCode": "CA"
  },
  {
      "label": "YPT",
      "city": "Pender Harbor",
      "countryCode": "CA"
  },
  {
      "label": "YPW",
      "city": "Powell River",
      "countryCode": "CA"
  },
  {
      "label": "YPX",
      "city": "Povungnituk",
      "countryCode": "CA"
  },
  {
      "label": "YPY",
      "city": "Fort Chipewyan",
      "countryCode": "CA"
  },
  {
      "label": "YPZ",
      "city": "Burns Lake",
      "countryCode": "CA"
  },
  {
      "label": "YQA",
      "city": "Muskoka",
      "countryCode": "CA"
  },
  {
      "label": "YQB",
      "city": "Quebec",
      "countryCode": "CA"
  },
  {
      "label": "YQC",
      "city": "Quaqtaq",
      "countryCode": "CA"
  },
  {
      "label": "YQD",
      "city": "The Pas",
      "countryCode": "CA"
  },
  {
      "label": "YQE",
      "city": "Kimberley",
      "countryCode": "CA"
  },
  {
      "label": "YQF",
      "city": "Red Deer",
      "countryCode": "CA"
  },
  {
      "label": "YQG",
      "city": "Windsor",
      "countryCode": "CA"
  },
  {
      "label": "YQH",
      "city": "Watson Lake",
      "countryCode": "CA"
  },
  {
      "label": "YQI",
      "city": "Yarmouth",
      "countryCode": "CA"
  },
  {
      "label": "YQK",
      "city": "Kenora",
      "countryCode": "CA"
  },
  {
      "label": "YQL",
      "city": "Lethbridge",
      "countryCode": "CA"
  },
  {
      "label": "YQM",
      "city": "Moncton",
      "countryCode": "CA"
  },
  {
      "label": "YQN",
      "city": "Nakina",
      "countryCode": "CA"
  },
  {
      "label": "YQQ",
      "city": "Comox",
      "countryCode": "CA"
  },
  {
      "label": "YQR",
      "city": "Regina",
      "countryCode": "CA"
  },
  {
      "label": "YQS",
      "city": "St Thomas",
      "countryCode": "CA"
  },
  {
      "label": "YQT",
      "city": "Thunder Bay",
      "countryCode": "CA"
  },
  {
      "label": "YQU",
      "city": "Grande Prairie",
      "countryCode": "CA"
  },
  {
      "label": "YQV",
      "city": "Yorkton",
      "countryCode": "CA"
  },
  {
      "label": "YQW",
      "city": "North Battleford",
      "countryCode": "CA"
  },
  {
      "label": "YQX",
      "city": "Gander",
      "countryCode": "CA"
  },
  {
      "label": "YQY",
      "city": "Sydney",
      "countryCode": "CA"
  },
  {
      "label": "YQZ",
      "city": "Quesnel",
      "countryCode": "CA"
  },
  {
      "label": "YRA",
      "city": "Rae Lakes",
      "countryCode": "CA"
  },
  {
      "label": "YRB",
      "city": "Resolute",
      "countryCode": "CA"
  },
  {
      "label": "YRD",
      "city": "Dean River",
      "countryCode": "CA"
  },
  {
      "label": "YRE",
      "city": "Resolution Island",
      "countryCode": "CA"
  },
  {
      "label": "YRF",
      "city": "Cartwright",
      "countryCode": "CA"
  },
  {
      "label": "YRG",
      "city": "Rigolet",
      "countryCode": "CA"
  },
  {
      "label": "YRI",
      "city": "Riviere Du Loup",
      "countryCode": "CA"
  },
  {
      "label": "YRJ",
      "city": "Roberval",
      "countryCode": "CA"
  },
  {
      "label": "YRL",
      "city": "Red Lake",
      "countryCode": "CA"
  },
  {
      "label": "YRM",
      "city": "Rocky Mountain Ho",
      "countryCode": "CA"
  },
  {
      "label": "YRN",
      "city": "Rivers Inlet",
      "countryCode": "CA"
  },
  {
      "label": "YRQ",
      "city": "Trois Rivieres",
      "countryCode": "CA"
  },
  {
      "label": "YRR",
      "city": "Stuart Island",
      "countryCode": "CA"
  },
  {
      "label": "YRS",
      "city": "Red Sucker Lake",
      "countryCode": "CA"
  },
  {
      "label": "YRT",
      "city": "Rankin Inlet",
      "countryCode": "CA"
  },
  {
      "label": "YRV",
      "city": "Revelstoke",
      "countryCode": "CA"
  },
  {
      "label": "YSA",
      "city": "Sable Island",
      "countryCode": "CA"
  },
  {
      "label": "YSB",
      "city": "Sudbury",
      "countryCode": "CA"
  },
  {
      "label": "YSC",
      "city": "Sherbrooke",
      "countryCode": "CA"
  },
  {
      "label": "YSD",
      "city": "Suffield",
      "countryCode": "CA"
  },
  {
      "label": "YSE",
      "city": "Squamish",
      "countryCode": "CA"
  },
  {
      "label": "YSF",
      "city": "Stony Rapids",
      "countryCode": "CA"
  },
  {
      "label": "YSG",
      "city": "Snowdrift",
      "countryCode": "CA"
  },
  {
      "label": "YSH",
      "city": "Smith Falls",
      "countryCode": "CA"
  },
  {
      "label": "YSI",
      "city": "Sans Souci",
      "countryCode": "CA"
  },
  {
      "label": "YSJ",
      "city": "Saint John",
      "countryCode": "CA"
  },
  {
      "label": "YSK",
      "city": "Sanikiluaq",
      "countryCode": "CA"
  },
  {
      "label": "YSL",
      "city": "Edmunston",
      "countryCode": "CA"
  },
  {
      "label": "YSM",
      "city": "Fort Smith",
      "countryCode": "CA"
  },
  {
      "label": "YSN",
      "city": "Salmon Arm",
      "countryCode": "CA"
  },
  {
      "label": "YSO",
      "city": "Postville",
      "countryCode": "CA"
  },
  {
      "label": "YSP",
      "city": "Marathon",
      "countryCode": "CA"
  },
  {
      "label": "YSQ",
      "city": "Spring Island",
      "countryCode": "CA"
  },
  {
      "label": "YSR",
      "city": "Nanisivik",
      "countryCode": "CA"
  },
  {
      "label": "YSS",
      "city": "Slate Island",
      "countryCode": "CA"
  },
  {
      "label": "YST",
      "city": "Ste Therese Point",
      "countryCode": "CA"
  },
  {
      "label": "YSU",
      "city": "Summerside",
      "countryCode": "CA"
  },
  {
      "label": "YSV",
      "city": "Saglek",
      "countryCode": "CA"
  },
  {
      "label": "YSW",
      "city": "Salluit",
      "countryCode": "CA"
  },
  {
      "label": "YSX",
      "city": "Shearwater",
      "countryCode": "CA"
  },
  {
      "label": "YSY",
      "city": "Sachs Harbour",
      "countryCode": "CA"
  },
  {
      "label": "YSZ",
      "city": "Squirrel Cove",
      "countryCode": "CA"
  },
  {
      "label": "YTA",
      "city": "Pembroke",
      "countryCode": "CA"
  },
  {
      "label": "YTB",
      "city": "Hartley Bay",
      "countryCode": "CA"
  },
  {
      "label": "YTC",
      "city": "Sturdee",
      "countryCode": "CA"
  },
  {
      "label": "YTD",
      "city": "Thicket Portage",
      "countryCode": "CA"
  },
  {
      "label": "YTE",
      "city": "Cape Dorset",
      "countryCode": "CA"
  },
  {
      "label": "YTF",
      "city": "Alma",
      "countryCode": "CA"
  },
  {
      "label": "YTG",
      "city": "Sullivan Bay",
      "countryCode": "CA"
  },
  {
      "label": "YTH",
      "city": "Thompson",
      "countryCode": "CA"
  },
  {
      "label": "YTI",
      "city": "Triple Island",
      "countryCode": "CA"
  },
  {
      "label": "YTJ",
      "city": "Terrace Bay",
      "countryCode": "CA"
  },
  {
      "label": "YTK",
      "city": "Tulugak",
      "countryCode": "CA"
  },
  {
      "label": "YTL",
      "city": "Big Trout",
      "countryCode": "CA"
  },
  {
      "label": "YTM",
      "city": "Mont Tremblant",
      "countryCode": "CA"
  },
  {
      "label": "YTN",
      "city": "Riviere Au Tonner",
      "countryCode": "CA"
  },
  {
      "label": "YTO",
      "city": "Toronto",
      "countryCode": "CA"
  },
  {
      "label": "YTQ",
      "city": "Tasiujuaq",
      "countryCode": "CA"
  },
  {
      "label": "YTR",
      "city": "Trenton",
      "countryCode": "CA"
  },
  {
      "label": "YTS",
      "city": "Timmins",
      "countryCode": "CA"
  },
  {
      "label": "YTT",
      "city": "Tisdale",
      "countryCode": "CA"
  },
  {
      "label": "YTU",
      "city": "Tasu",
      "countryCode": "CA"
  },
  {
      "label": "YTX",
      "city": "Telegraph Creek",
      "countryCode": "CA"
  },
  {
      "label": "YUA",
      "city": "Yuanmou",
      "countryCode": "CN"
  },
  {
      "label": "YUB",
      "city": "Tuktoyaktuk",
      "countryCode": "CA"
  },
  {
      "label": "YUD",
      "city": "Umiujaq",
      "countryCode": "CA"
  },
  {
      "label": "YUE",
      "city": "Yuendumu",
      "countryCode": "AU"
  },
  {
      "label": "YUF",
      "city": "Pelly Bay",
      "countryCode": "CA"
  },
  {
      "label": "YUJ",
      "city": "Lady Franklin",
      "countryCode": "CA"
  },
  {
      "label": "YUM",
      "city": "Yuma",
      "countryCode": "US"
  },
  {
      "label": "YUN",
      "city": "Johnson Point",
      "countryCode": "CA"
  },
  {
      "label": "YUT",
      "city": "Repulse Bay",
      "countryCode": "CA"
  },
  {
      "label": "YUX",
      "city": "Hall Beach",
      "countryCode": "CA"
  },
  {
      "label": "YUY",
      "city": "Rouyn",
      "countryCode": "CA"
  },
  {
      "label": "YVA",
      "city": "Moroni",
      "countryCode": "KM"
  },
  {
      "label": "YVB",
      "city": "Bonaventure",
      "countryCode": "CA"
  },
  {
      "label": "YVC",
      "city": "La Ronge",
      "countryCode": "CA"
  },
  {
      "label": "YVD",
      "city": "Yeva",
      "countryCode": "PG"
  },
  {
      "label": "YVE",
      "city": "Vernon",
      "countryCode": "CA"
  },
  {
      "label": "YVG",
      "city": "Vermilion",
      "countryCode": "CA"
  },
  {
      "label": "YVM",
      "city": "Broughton Island",
      "countryCode": "CA"
  },
  {
      "label": "YVN",
      "city": "Cape Dyer",
      "countryCode": "CA"
  },
  {
      "label": "YVO",
      "city": "Val D'Or",
      "countryCode": "CA"
  },
  {
      "label": "YVP",
      "city": "Kuujjuaq",
      "countryCode": "CA"
  },
  {
      "label": "YVQ",
      "city": "Norman Wells",
      "countryCode": "CA"
  },
  {
      "label": "YVR",
      "city": "Vancouver",
      "countryCode": "CA"
  },
  {
      "label": "YVT",
      "city": "Buffalo Narrows",
      "countryCode": "CA"
  },
  {
      "label": "YVV",
      "city": "Wiarton",
      "countryCode": "CA"
  },
  {
      "label": "YVZ",
      "city": "Deer Lake",
      "countryCode": "CA"
  },
  {
      "label": "YWA",
      "city": "Petawawa",
      "countryCode": "CA"
  },
  {
      "label": "YWB",
      "city": "Kangiqsujuaq",
      "countryCode": "CA"
  },
  {
      "label": "YWG",
      "city": "Winnipeg",
      "countryCode": "CA"
  },
  {
      "label": "YWJ",
      "city": "Fort Franklin",
      "countryCode": "CA"
  },
  {
      "label": "YWK",
      "city": "Wabush",
      "countryCode": "CA"
  },
  {
      "label": "YWL",
      "city": "Williams Lake",
      "countryCode": "CA"
  },
  {
      "label": "YWM",
      "city": "Williams Harbour",
      "countryCode": "CA"
  },
  {
      "label": "YWN",
      "city": "Winisk",
      "countryCode": "CA"
  },
  {
      "label": "YWO",
      "city": "Lupin",
      "countryCode": "CA"
  },
  {
      "label": "YWP",
      "city": "Webequie",
      "countryCode": "CA"
  },
  {
      "label": "YWQ",
      "city": "Chute-des-Passes",
      "countryCode": "CA"
  },
  {
      "label": "YWR",
      "city": "White River",
      "countryCode": "CA"
  },
  {
      "label": "YWS",
      "city": "Whistler",
      "countryCode": "CA"
  },
  {
      "label": "YWY",
      "city": "Wrigley",
      "countryCode": "CA"
  },
  {
      "label": "YXC",
      "city": "Cranbrook",
      "countryCode": "CA"
  },
  {
      "label": "YXE",
      "city": "Saskatoon",
      "countryCode": "CA"
  },
  {
      "label": "YXF",
      "city": "Snake River",
      "countryCode": "CA"
  },
  {
      "label": "YXH",
      "city": "Medicine Hat",
      "countryCode": "CA"
  },
  {
      "label": "YXI",
      "city": "Killaloe",
      "countryCode": "CA"
  },
  {
      "label": "YXJ",
      "city": "Fort St John",
      "countryCode": "CA"
  },
  {
      "label": "YXK",
      "city": "Rimouski",
      "countryCode": "CA"
  },
  {
      "label": "YXL",
      "city": "Sioux Lookout",
      "countryCode": "CA"
  },
  {
      "label": "YXN",
      "city": "Whale Cove",
      "countryCode": "CA"
  },
  {
      "label": "YXP",
      "city": "Pangnirtung",
      "countryCode": "CA"
  },
  {
      "label": "YXQ",
      "city": "Beaver Creek",
      "countryCode": "CA"
  },
  {
      "label": "YXR",
      "city": "Earlton",
      "countryCode": "CA"
  },
  {
      "label": "YXS",
      "city": "Prince George",
      "countryCode": "CA"
  },
  {
      "label": "YXT",
      "city": "Terrace",
      "countryCode": "CA"
  },
  {
      "label": "YXU",
      "city": "London",
      "countryCode": "CA"
  },
  {
      "label": "YXX",
      "city": "Abbotsford",
      "countryCode": "CA"
  },
  {
      "label": "YXY",
      "city": "Whitehorse",
      "countryCode": "CA"
  },
  {
      "label": "YXZ",
      "city": "Wawa",
      "countryCode": "CA"
  },
  {
      "label": "YYA",
      "city": "Big Bay Yacht Club",
      "countryCode": "CA"
  },
  {
      "label": "YYB",
      "city": "North Bay",
      "countryCode": "CA"
  },
  {
      "label": "YYC",
      "city": "Calgary",
      "countryCode": "CA"
  },
  {
      "label": "YYD",
      "city": "Smithers",
      "countryCode": "CA"
  },
  {
      "label": "YYE",
      "city": "Fort Nelson",
      "countryCode": "CA"
  },
  {
      "label": "YYF",
      "city": "Penticton",
      "countryCode": "CA"
  },
  {
      "label": "YYG",
      "city": "Charlottetown",
      "countryCode": "CA"
  },
  {
      "label": "YYH",
      "city": "Taloyoak",
      "countryCode": "CA"
  },
  {
      "label": "YYI",
      "city": "Rivers",
      "countryCode": "CA"
  },
  {
      "label": "YYJ",
      "city": "Victoria",
      "countryCode": "CA"
  },
  {
      "label": "YYL",
      "city": "Lynn Lake",
      "countryCode": "CA"
  },
  {
      "label": "YYM",
      "city": "Cowley",
      "countryCode": "CA"
  },
  {
      "label": "YYN",
      "city": "Swift Current",
      "countryCode": "CA"
  },
  {
      "label": "YYQ",
      "city": "Churchill",
      "countryCode": "CA"
  },
  {
      "label": "YYR",
      "city": "Goose Bay",
      "countryCode": "CA"
  },
  {
      "label": "YYT",
      "city": "St Johns",
      "countryCode": "CA"
  },
  {
      "label": "YYU",
      "city": "Kapuskasing",
      "countryCode": "CA"
  },
  {
      "label": "YYW",
      "city": "Armstrong",
      "countryCode": "CA"
  },
  {
      "label": "YYY",
      "city": "Mont Joli",
      "countryCode": "CA"
  },
  {
      "label": "YZA",
      "city": "Ashcroft",
      "countryCode": "CA"
  },
  {
      "label": "YZC",
      "city": "Beatton River",
      "countryCode": "CA"
  },
  {
      "label": "YZE",
      "city": "Gore Bay",
      "countryCode": "CA"
  },
  {
      "label": "YZF",
      "city": "Yellowknife",
      "countryCode": "CA"
  },
  {
      "label": "YZG",
      "city": "Salluit",
      "countryCode": "CA"
  },
  {
      "label": "YZH",
      "city": "Slave Lake",
      "countryCode": "CA"
  },
  {
      "label": "YZL",
      "city": "Liard River",
      "countryCode": "CA"
  },
  {
      "label": "YZM",
      "city": "Buchans",
      "countryCode": "CA"
  },
  {
      "label": "YZP",
      "city": "Sandspit",
      "countryCode": "CA"
  },
  {
      "label": "YZR",
      "city": "Sarnia",
      "countryCode": "CA"
  },
  {
      "label": "YZS",
      "city": "Coral Harbour",
      "countryCode": "CA"
  },
  {
      "label": "YZT",
      "city": "Port Hardy",
      "countryCode": "CA"
  },
  {
      "label": "YZU",
      "city": "Whitecourt",
      "countryCode": "CA"
  },
  {
      "label": "YZV",
      "city": "Sept Iles",
      "countryCode": "CA"
  },
  {
      "label": "YZW",
      "city": "Teslin",
      "countryCode": "CA"
  },
  {
      "label": "YZX",
      "city": "Greenwood",
      "countryCode": "CA"
  },
  {
      "label": "ZAA",
      "city": "Alice Arm",
      "countryCode": "CA"
  },
  {
      "label": "ZAB",
      "city": "Boukadir",
      "countryCode": "DZ"
  },
  {
      "label": "ZAC",
      "city": "York Landing",
      "countryCode": "CA"
  },
  {
      "label": "ZAD",
      "city": "Zadar",
      "countryCode": "HR"
  },
  {
      "label": "ZAE",
      "city": "El Eulma",
      "countryCode": "DZ"
  },
  {
      "label": "ZAF",
      "city": "Arles",
      "countryCode": "FR"
  },
  {
      "label": "ZAG",
      "city": "Zagreb",
      "countryCode": "HR"
  },
  {
      "label": "ZAH",
      "city": "Zahedan",
      "countryCode": "IR"
  },
  {
      "label": "ZAI",
      "city": "Embarcacion",
      "countryCode": "AR"
  },
  {
      "label": "ZAJ",
      "city": "Zaranj",
      "countryCode": "AF"
  },
  {
      "label": "ZAK",
      "city": "Chiusa Klausen",
      "countryCode": "IT"
  },
  {
      "label": "ZAL",
      "city": "Valdivia",
      "countryCode": "CL"
  },
  {
      "label": "ZAM",
      "city": "Zamboanga",
      "countryCode": "PH"
  },
  {
      "label": "ZAN",
      "city": "Aghios Nicolaos",
      "countryCode": "GR"
  },
  {
      "label": "ZAO",
      "city": "Cahors",
      "countryCode": "FR"
  },
  {
      "label": "ZAP",
      "city": "Appenzell",
      "countryCode": "CH"
  },
  {
      "label": "ZAQ",
      "city": "Nurnberg",
      "countryCode": "DE"
  },
  {
      "label": "ZAR",
      "city": "Zaria",
      "countryCode": "NG"
  },
  {
      "label": "ZAS",
      "city": "Arenshausen",
      "countryCode": "DE"
  },
  {
      "label": "ZAT",
      "city": "Zhaotong",
      "countryCode": "CN"
  },
  {
      "label": "ZAU",
      "city": "Aue",
      "countryCode": "DE"
  },
  {
      "label": "ZAV",
      "city": "Aveiro",
      "countryCode": "PT"
  },
  {
      "label": "ZAW",
      "city": "Nykobing Mors",
      "countryCode": "DK"
  },
  {
      "label": "ZAX",
      "city": "Angermuende",
      "countryCode": "DE"
  },
  {
      "label": "ZAZ",
      "city": "Zaragoza",
      "countryCode": "ES"
  },
  {
      "label": "ZBC",
      "city": "Birmingham",
      "countryCode": "GB"
  },
  {
      "label": "ZBD",
      "city": "Bad Brambach",
      "countryCode": "DE"
  },
  {
      "label": "ZBE",
      "city": "Zabreh",
      "countryCode": "CZ"
  },
  {
      "label": "ZBF",
      "city": "Bathurst",
      "countryCode": "CA"
  },
  {
      "label": "ZBG",
      "city": "Elblag",
      "countryCode": "PL"
  },
  {
      "label": "ZBH",
      "city": "Severac Lechateau",
      "countryCode": "FR"
  },
  {
      "label": "ZBJ",
      "city": "Fyn Train",
      "countryCode": "DK"
  },
  {
      "label": "ZBK",
      "city": "Zabljak",
      "countryCode": "YU"
  },
  {
      "label": "ZBL",
      "city": "Biloela",
      "countryCode": "AU"
  },
  {
      "label": "ZBM",
      "city": "Bromont",
      "countryCode": "CA"
  },
  {
      "label": "ZBN",
      "city": "Bozen",
      "countryCode": "IT"
  },
  {
      "label": "ZBO",
      "city": "Bowen",
      "countryCode": "AU"
  },
  {
      "label": "ZBR",
      "city": "Chah Bahar",
      "countryCode": "IR"
  },
  {
      "label": "ZBT",
      "city": "Jylland Train",
      "countryCode": "DK"
  },
  {
      "label": "ZBU",
      "city": "Aarhus Limo",
      "countryCode": "DK"
  },
  {
      "label": "ZBV",
      "city": "Beaver Creek",
      "countryCode": "US"
  },
  {
      "label": "ZBW",
      "city": "Atibaia",
      "countryCode": "BR"
  },
  {
      "label": "ZBX",
      "city": "Szombathely",
      "countryCode": "US"
  },
  {
      "label": "ZBY",
      "city": "Sayaboury",
      "countryCode": "LA"
  },
  {
      "label": "ZBZ",
      "city": "Bad Salzungen",
      "countryCode": "DE"
  },
  {
      "label": "ZCA",
      "city": "Arnsberg",
      "countryCode": "DE"
  },
  {
      "label": "ZCB",
      "city": "Aschaffenburg",
      "countryCode": "DE"
  },
  {
      "label": "ZCC",
      "city": "Baden Baden",
      "countryCode": "DE"
  },
  {
      "label": "ZCD",
      "city": "Bamberg",
      "countryCode": "DE"
  },
  {
      "label": "ZCE",
      "city": "Berchtesgaden",
      "countryCode": "DE"
  },
  {
      "label": "ZCF",
      "city": "Bergheim",
      "countryCode": "DE"
  },
  {
      "label": "ZCG",
      "city": "Bergisch Gladbach",
      "countryCode": "DE"
  },
  {
      "label": "ZCH",
      "city": "Bergkamen",
      "countryCode": "DE"
  },
  {
      "label": "ZCI",
      "city": "Bocholt",
      "countryCode": "DE"
  },
  {
      "label": "ZCJ",
      "city": "Bottrop",
      "countryCode": "DE"
  },
  {
      "label": "ZCK",
      "city": "Bruehl",
      "countryCode": "DE"
  },
  {
      "label": "ZCL",
      "city": "Zacatecas",
      "countryCode": "MX"
  },
  {
      "label": "ZCM",
      "city": "Castrop Rauxel",
      "countryCode": "DE"
  },
  {
      "label": "ZCN",
      "city": "Celle",
      "countryCode": "DE"
  },
  {
      "label": "ZCO",
      "city": "Temuco",
      "countryCode": "CL"
  },
  {
      "label": "ZCP",
      "city": "Coburg",
      "countryCode": "DE"
  },
  {
      "label": "ZCQ",
      "city": "Curico",
      "countryCode": "CL"
  },
  {
      "label": "ZCR",
      "city": "Dachau",
      "countryCode": "DE"
  },
  {
      "label": "ZCS",
      "city": "Darmstadt",
      "countryCode": "DE"
  },
  {
      "label": "ZCT",
      "city": "Delmenhorst",
      "countryCode": "DE"
  },
  {
      "label": "ZCU",
      "city": "Detmold",
      "countryCode": "DE"
  },
  {
      "label": "ZCV",
      "city": "Dinslaken",
      "countryCode": "DE"
  },
  {
      "label": "ZCW",
      "city": "Dormagen",
      "countryCode": "DE"
  },
  {
      "label": "ZCX",
      "city": "Dorsten",
      "countryCode": "DE"
  },
  {
      "label": "ZCY",
      "city": "Dueren",
      "countryCode": "DE"
  },
  {
      "label": "ZCZ",
      "city": "Erlangen",
      "countryCode": "DE"
  },
  {
      "label": "ZDA",
      "city": "Aarau",
      "countryCode": "CH"
  },
  {
      "label": "ZDB",
      "city": "Adelboden",
      "countryCode": "CH"
  },
  {
      "label": "ZDC",
      "city": "Aigle",
      "countryCode": "CH"
  },
  {
      "label": "ZDD",
      "city": "Arbon",
      "countryCode": "CH"
  },
  {
      "label": "ZDE",
      "city": "Arosa",
      "countryCode": "CH"
  },
  {
      "label": "ZDF",
      "city": "Nablus",
      "countryCode": "IL"
  },
  {
      "label": "ZDG",
      "city": "Baden",
      "countryCode": "CH"
  },
  {
      "label": "ZDI",
      "city": "Bellinzona",
      "countryCode": "CH"
  },
  {
      "label": "ZDK",
      "city": "Biel",
      "countryCode": "CH"
  },
  {
      "label": "ZDL",
      "city": "Brig",
      "countryCode": "CH"
  },
  {
      "label": "ZDM",
      "city": "Ramallah",
      "countryCode": "IL"
  },
  {
      "label": "ZDO",
      "city": "Buchs Sg",
      "countryCode": "CH"
  },
  {
      "label": "ZDP",
      "city": "Burgdorf",
      "countryCode": "CH"
  },
  {
      "label": "ZDQ",
      "city": "Champery",
      "countryCode": "CH"
  },
  {
      "label": "ZDR",
      "city": "Chateau D Oex",
      "countryCode": "CH"
  },
  {
      "label": "ZDS",
      "city": "Chiasso",
      "countryCode": "CH"
  },
  {
      "label": "ZDT",
      "city": "Chur",
      "countryCode": "CH"
  },
  {
      "label": "ZDV",
      "city": "Davos",
      "countryCode": "CH"
  },
  {
      "label": "ZDW",
      "city": "Delemont",
      "countryCode": "CH"
  },
  {
      "label": "ZDX",
      "city": "Dietikon",
      "countryCode": "CH"
  },
  {
      "label": "ZDY",
      "city": "Gaza",
      "countryCode": "IL"
  },
  {
      "label": "ZDZ",
      "city": "Einsiedeln",
      "countryCode": "CH"
  },
  {
      "label": "ZEA",
      "city": "Eschweiler",
      "countryCode": "DE"
  },
  {
      "label": "ZEB",
      "city": "Esslingen",
      "countryCode": "DE"
  },
  {
      "label": "ZEC",
      "city": "Secunda",
      "countryCode": "ZA"
  },
  {
      "label": "ZED",
      "city": "Euskirchen",
      "countryCode": "DE"
  },
  {
      "label": "ZEE",
      "city": "Fulda",
      "countryCode": "DE"
  },
  {
      "label": "ZEF",
      "city": "Fuerth",
      "countryCode": "DE"
  },
  {
      "label": "ZEG",
      "city": "Senggo",
      "countryCode": "ID"
  },
  {
      "label": "ZEH",
      "city": "Garbsen",
      "countryCode": "DE"
  },
  {
      "label": "ZEI",
      "city": "Garmisch Partenkirchen",
      "countryCode": "DE"
  },
  {
      "label": "ZEJ",
      "city": "Gelsenkirchen",
      "countryCode": "DE"
  },
  {
      "label": "ZEK",
      "city": "Gladbeck",
      "countryCode": "DE"
  },
  {
      "label": "ZEN",
      "city": "Zenag",
      "countryCode": "PG"
  },
  {
      "label": "ZEO",
      "city": "Savi Ragha",
      "countryCode": "PK"
  },
  {
      "label": "ZEQ",
      "city": "Dewsbury",
      "countryCode": "GB"
  },
  {
      "label": "ZES",
      "city": "Goeppingen",
      "countryCode": "DE"
  },
  {
      "label": "ZET",
      "city": "Goslar",
      "countryCode": "DE"
  },
  {
      "label": "ZEU",
      "city": "Goettingen",
      "countryCode": "DE"
  },
  {
      "label": "ZEV",
      "city": "Grevenbroich",
      "countryCode": "DE"
  },
  {
      "label": "ZEW",
      "city": "Gummersbach",
      "countryCode": "DE"
  },
  {
      "label": "ZEX",
      "city": "Guetersloh",
      "countryCode": "DE"
  },
  {
      "label": "ZEY",
      "city": "Hagen",
      "countryCode": "DE"
  },
  {
      "label": "ZEZ",
      "city": "Hameln",
      "countryCode": "DE"
  },
  {
      "label": "ZFB",
      "city": "Old Fort Bay",
      "countryCode": "CA"
  },
  {
      "label": "ZFD",
      "city": "Fond Du Lac",
      "countryCode": "CA"
  },
  {
      "label": "ZFE",
      "city": "Beltsville",
      "countryCode": "US"
  },
  {
      "label": "ZFI",
      "city": "Chesterfield",
      "countryCode": "GB"
  },
  {
      "label": "ZFK",
      "city": "Guderup",
      "countryCode": "DK"
  },
  {
      "label": "ZFL",
      "city": "South Trout Lake",
      "countryCode": "CA"
  },
  {
      "label": "ZFM",
      "city": "Fort Mcpherson",
      "countryCode": "CA"
  },
  {
      "label": "ZFN",
      "city": "Fort Norman",
      "countryCode": "CA"
  },
  {
      "label": "ZFO",
      "city": "Franconia",
      "countryCode": "US"
  },
  {
      "label": "ZFP",
      "city": "Veszprem",
      "countryCode": "HU"
  },
  {
      "label": "ZFR",
      "city": "Frankfurt Oder",
      "countryCode": "DE"
  },
  {
      "label": "ZFW",
      "city": "Fairview",
      "countryCode": "CA"
  },
  {
      "label": "ZGA",
      "city": "Gera",
      "countryCode": "DE"
  },
  {
      "label": "ZGC",
      "city": "Zagreb",
      "countryCode": "HR"
  },
  {
      "label": "ZGE",
      "city": "Goerlitz",
      "countryCode": "DE"
  },
  {
      "label": "ZGF",
      "city": "Grand Forks",
      "countryCode": "CA"
  },
  {
      "label": "ZGG",
      "city": "Glasgow",
      "countryCode": "GB"
  },
  {
      "label": "ZGI",
      "city": "Gods River",
      "countryCode": "CA"
  },
  {
      "label": "ZGJ",
      "city": "Brugge",
      "countryCode": "BE"
  },
  {
      "label": "ZGK",
      "city": "Leuven",
      "countryCode": "BE"
  },
  {
      "label": "ZGL",
      "city": "South Galway",
      "countryCode": "AU"
  },
  {
      "label": "ZGM",
      "city": "Ngoma",
      "countryCode": "ZM"
  },
  {
      "label": "ZGN",
      "city": "Gutenfuerst",
      "countryCode": "DE"
  },
  {
      "label": "ZGO",
      "city": "Gotha",
      "countryCode": "DE"
  },
  {
      "label": "ZGP",
      "city": "Mechelen",
      "countryCode": "BE"
  },
  {
      "label": "ZGQ",
      "city": "Tournai",
      "countryCode": "BE"
  },
  {
      "label": "ZGR",
      "city": "Little Grand Rapids",
      "countryCode": "CA"
  },
  {
      "label": "ZGS",
      "city": "Gethsemani",
      "countryCode": "CA"
  },
  {
      "label": "ZGT",
      "city": "Gerstungen",
      "countryCode": "DE"
  },
  {
      "label": "ZGU",
      "city": "Gaua",
      "countryCode": "VU"
  },
  {
      "label": "ZGV",
      "city": "Wavre",
      "countryCode": "BE"
  },
  {
      "label": "ZGW",
      "city": "Greifswald",
      "countryCode": "DE"
  },
  {
      "label": "ZGX",
      "city": "Viborg",
      "countryCode": "DK"
  },
  {
      "label": "ZGZ",
      "city": "Fictitious Point",
      "countryCode": "DE"
  },
  {
      "label": "ZHA",
      "city": "Zhanjiang",
      "countryCode": "CN"
  },
  {
      "label": "ZHB",
      "city": "Engelberg",
      "countryCode": "CH"
  },
  {
      "label": "ZHC",
      "city": "Philadelphia",
      "countryCode": "US"
  },
  {
      "label": "ZHD",
      "city": "Fluelen",
      "countryCode": "CH"
  },
  {
      "label": "ZHE",
      "city": "Frauenfeld",
      "countryCode": "CH"
  },
  {
      "label": "ZHF",
      "city": "Fribourg",
      "countryCode": "CH"
  },
  {
      "label": "ZHG",
      "city": "Glarus",
      "countryCode": "CH"
  },
  {
      "label": "ZHH",
      "city": "Gossau Sg",
      "countryCode": "CH"
  },
  {
      "label": "ZHI",
      "city": "Grenchen Sued",
      "countryCode": "CH"
  },
  {
      "label": "ZHJ",
      "city": "Grindelwald",
      "countryCode": "CH"
  },
  {
      "label": "ZHK",
      "city": "Gstaad",
      "countryCode": "CH"
  },
  {
      "label": "ZHL",
      "city": "Heerbrugg",
      "countryCode": "CH"
  },
  {
      "label": "ZHM",
      "city": "Shamshernagar",
      "countryCode": "BD"
  },
  {
      "label": "ZHN",
      "city": "Herzogenbuchsee",
      "countryCode": "CH"
  },
  {
      "label": "ZHO",
      "city": "Houston",
      "countryCode": "CA"
  },
  {
      "label": "ZHP",
      "city": "High Prairie",
      "countryCode": "CA"
  },
  {
      "label": "ZHQ",
      "city": "Halberstadt",
      "countryCode": "DE"
  },
  {
      "label": "ZHR",
      "city": "Kandersteg",
      "countryCode": "CH"
  },
  {
      "label": "ZHS",
      "city": "Klosters",
      "countryCode": "CH"
  },
  {
      "label": "ZHT",
      "city": "Geneva Cornavin",
      "countryCode": "CH"
  },
  {
      "label": "ZHU",
      "city": "Kreuzlingen",
      "countryCode": "CH"
  },
  {
      "label": "ZHV",
      "city": "La Chaux De Fonds",
      "countryCode": "CH"
  },
  {
      "label": "ZHW",
      "city": "Langenthal",
      "countryCode": "CH"
  },
  {
      "label": "ZHX",
      "city": "Tubarao",
      "countryCode": "BR"
  },
  {
      "label": "ZHY",
      "city": "Geneva Aeroport",
      "countryCode": "CH"
  },
  {
      "label": "ZHZ",
      "city": "Halle",
      "countryCode": "DE"
  },
  {
      "label": "ZIA",
      "city": "Trento",
      "countryCode": "IT"
  },
  {
      "label": "ZIB",
      "city": "Nyborg",
      "countryCode": "DK"
  },
  {
      "label": "ZIC",
      "city": "Victoria",
      "countryCode": "CL"
  },
  {
      "label": "ZIG",
      "city": "Ziguinchor",
      "countryCode": "SN"
  },
  {
      "label": "ZIH",
      "city": "Ixtapa",
      "countryCode": "MX"
  },
  {
      "label": "ZIJ",
      "city": "Sjaelland",
      "countryCode": "DK"
  },
  {
      "label": "ZIN",
      "city": "Interlaken Ost",
      "countryCode": "CH"
  },
  {
      "label": "ZIO",
      "city": "Solingen Ohligs",
      "countryCode": "DE"
  },
  {
      "label": "ZIR",
      "city": "Randers",
      "countryCode": "DK"
  },
  {
      "label": "ZIS",
      "city": "Zhongshan",
      "countryCode": "CN"
  },
  {
      "label": "ZIT",
      "city": "Zittau",
      "countryCode": "DE"
  },
  {
      "label": "ZJA",
      "city": "Le Locle",
      "countryCode": "CH"
  },
  {
      "label": "ZJC",
      "city": "Lenzburg",
      "countryCode": "CH"
  },
  {
      "label": "ZJD",
      "city": "Lenzerheide Lai",
      "countryCode": "CH"
  },
  {
      "label": "ZJG",
      "city": "Jenpeg",
      "countryCode": "CA"
  },
  {
      "label": "ZJI",
      "city": "Locarno",
      "countryCode": "CH"
  },
  {
      "label": "ZJL",
      "city": "Lyss",
      "countryCode": "CH"
  },
  {
      "label": "ZJM",
      "city": "Martigny",
      "countryCode": "CH"
  },
  {
      "label": "ZJN",
      "city": "Swan River",
      "countryCode": "CA"
  },
  {
      "label": "ZJP",
      "city": "Montreux",
      "countryCode": "CH"
  },
  {
      "label": "ZJQ",
      "city": "Morges",
      "countryCode": "CH"
  },
  {
      "label": "ZJS",
      "city": "Jena",
      "countryCode": "DE"
  },
  {
      "label": "ZJU",
      "city": "Olten",
      "countryCode": "CH"
  },
  {
      "label": "ZJV",
      "city": "Pontresina",
      "countryCode": "CH"
  },
  {
      "label": "ZJW",
      "city": "Rapperswil",
      "countryCode": "CH"
  },
  {
      "label": "ZJZ",
      "city": "Rorschach",
      "countryCode": "CH"
  },
  {
      "label": "ZKA",
      "city": "Sargans",
      "countryCode": "CH"
  },
  {
      "label": "ZKB",
      "city": "Kasaba Bay",
      "countryCode": "ZM"
  },
  {
      "label": "ZKC",
      "city": "Sarnen",
      "countryCode": "CH"
  },
  {
      "label": "ZKE",
      "city": "Kaschechewan",
      "countryCode": "CA"
  },
  {
      "label": "ZKF",
      "city": "St Margrethen",
      "countryCode": "CH"
  },
  {
      "label": "ZKG",
      "city": "Kegaska",
      "countryCode": "CA"
  },
  {
      "label": "ZKH",
      "city": "St Moritz",
      "countryCode": "CH"
  },
  {
      "label": "ZKI",
      "city": "Saas Fee",
      "countryCode": "CH"
  },
  {
      "label": "ZKJ",
      "city": "Schaffhausen",
      "countryCode": "CH"
  },
  {
      "label": "ZKK",
      "city": "Schwyz",
      "countryCode": "CH"
  },
  {
      "label": "ZKL",
      "city": "Steenkool",
      "countryCode": "ID"
  },
  {
      "label": "ZKM",
      "city": "Sette Cama",
      "countryCode": "GA"
  },
  {
      "label": "ZKO",
      "city": "Sierre",
      "countryCode": "CH"
  },
  {
      "label": "ZKP",
      "city": "Kasompe",
      "countryCode": "ZM"
  },
  {
      "label": "ZKQ",
      "city": "Kotor",
      "countryCode": "YU"
  },
  {
      "label": "ZKS",
      "city": "Solothurn",
      "countryCode": "CH"
  },
  {
      "label": "ZKT",
      "city": "Komotini",
      "countryCode": "GR"
  },
  {
      "label": "ZKU",
      "city": "Sursee",
      "countryCode": "CH"
  },
  {
      "label": "ZKV",
      "city": "Thalwil",
      "countryCode": "CH"
  },
  {
      "label": "ZKW",
      "city": "Wetzikon",
      "countryCode": "CH"
  },
  {
      "label": "ZKX",
      "city": "Uzwil",
      "countryCode": "CH"
  },
  {
      "label": "ZKY",
      "city": "Verbier",
      "countryCode": "CH"
  },
  {
      "label": "ZKZ",
      "city": "Vevey Bvb",
      "countryCode": "CH"
  },
  {
      "label": "ZLA",
      "city": "Villars Bvb",
      "countryCode": "CH"
  },
  {
      "label": "ZLB",
      "city": "Visp",
      "countryCode": "CH"
  },
  {
      "label": "ZLC",
      "city": "Waedenswil",
      "countryCode": "CH"
  },
  {
      "label": "ZLD",
      "city": "Weinfelden",
      "countryCode": "CH"
  },
  {
      "label": "ZLE",
      "city": "Wengen",
      "countryCode": "CH"
  },
  {
      "label": "ZLF",
      "city": "Wettingen",
      "countryCode": "CH"
  },
  {
      "label": "ZLG",
      "city": "El Gouera",
      "countryCode": "MR"
  },
  {
      "label": "ZLH",
      "city": "Wil",
      "countryCode": "CH"
  },
  {
      "label": "ZLI",
      "city": "Winterthur",
      "countryCode": "CH"
  },
  {
      "label": "ZLJ",
      "city": "Yverdon",
      "countryCode": "CH"
  },
  {
      "label": "ZLL",
      "city": "Zofingen",
      "countryCode": "CH"
  },
  {
      "label": "ZLM",
      "city": "Zug",
      "countryCode": "CH"
  },
  {
      "label": "ZLO",
      "city": "Manzanillo",
      "countryCode": "MX"
  },
  {
      "label": "ZLR",
      "city": "Linares",
      "countryCode": "CL"
  },
  {
      "label": "ZLS",
      "city": "Liverpool Street",
      "countryCode": "GB"
  },
  {
      "label": "ZLT",
      "city": "La Tabatiere",
      "countryCode": "CA"
  },
  {
      "label": "ZLU",
      "city": "Ludwigslust",
      "countryCode": "DE"
  },
  {
      "label": "ZLZ",
      "city": "Leeds",
      "countryCode": "GB"
  },
  {
      "label": "ZMA",
      "city": "Mansfield",
      "countryCode": "GB"
  },
  {
      "label": "ZMB",
      "city": "Hamburg Hbf",
      "countryCode": "DE"
  },
  {
      "label": "ZMD",
      "city": "Sena Madureira",
      "countryCode": "BR"
  },
  {
      "label": "ZMG",
      "city": "Magdeburg",
      "countryCode": "DE"
  },
  {
      "label": "ZMH",
      "city": "Mile Ranch 108",
      "countryCode": "CA"
  },
  {
      "label": "ZMM",
      "city": "Zamora",
      "countryCode": "MX"
  },
  {
      "label": "ZMO",
      "city": "Modena",
      "countryCode": "IT"
  },
  {
      "label": "ZMR",
      "city": "Meran",
      "countryCode": "IT"
  },
  {
      "label": "ZMT",
      "city": "Masset",
      "countryCode": "CA"
  },
  {
      "label": "ZMV",
      "city": "Melville",
      "countryCode": "US"
  },
  {
      "label": "ZNB",
      "city": "Hamm",
      "countryCode": "DE"
  },
  {
      "label": "ZNC",
      "city": "Nyac",
      "countryCode": "US"
  },
  {
      "label": "ZND",
      "city": "Zinder",
      "countryCode": "NE"
  },
  {
      "label": "ZNE",
      "city": "Newman",
      "countryCode": "AU"
  },
  {
      "label": "ZNF",
      "city": "Hanau",
      "countryCode": "DE"
  },
  {
      "label": "ZNG",
      "city": "Negginan",
      "countryCode": "CA"
  },
  {
      "label": "ZNH",
      "city": "Hettlingen",
      "countryCode": "DE"
  },
  {
      "label": "ZNI",
      "city": "Heidenheim",
      "countryCode": "DE"
  },
  {
      "label": "ZNJ",
      "city": "Heilbronn",
      "countryCode": "DE"
  },
  {
      "label": "ZNK",
      "city": "Herford",
      "countryCode": "DE"
  },
  {
      "label": "ZNL",
      "city": "Herne",
      "countryCode": "DE"
  },
  {
      "label": "ZNM",
      "city": "Herten",
      "countryCode": "DE"
  },
  {
      "label": "ZNN",
      "city": "Hilden",
      "countryCode": "DE"
  },
  {
      "label": "ZNO",
      "city": "Hildesheim",
      "countryCode": "DE"
  },
  {
      "label": "ZNP",
      "city": "Huerth",
      "countryCode": "DE"
  },
  {
      "label": "ZNQ",
      "city": "Ingolstadt",
      "countryCode": "DE"
  },
  {
      "label": "ZNR",
      "city": "Iserlohn",
      "countryCode": "DE"
  },
  {
      "label": "ZNS",
      "city": "Kempten",
      "countryCode": "DE"
  },
  {
      "label": "ZNT",
      "city": "Kerpen",
      "countryCode": "DE"
  },
  {
      "label": "ZNU",
      "city": "Namu",
      "countryCode": "CA"
  },
  {
      "label": "ZNV",
      "city": "Koblenz",
      "countryCode": "DE"
  },
  {
      "label": "ZNW",
      "city": "Limburg",
      "countryCode": "DE"
  },
  {
      "label": "ZNX",
      "city": "Lagenfeld",
      "countryCode": "DE"
  },
  {
      "label": "ZNY",
      "city": "Langenhagen",
      "countryCode": "DE"
  },
  {
      "label": "ZNZ",
      "city": "Zanzibar",
      "countryCode": "TZ"
  },
  {
      "label": "ZOA",
      "city": "Leverkusen",
      "countryCode": "DE"
  },
  {
      "label": "ZOB",
      "city": "Lippstadt",
      "countryCode": "DE"
  },
  {
      "label": "ZOC",
      "city": "Luedenscheid",
      "countryCode": "DE"
  },
  {
      "label": "ZOD",
      "city": "Ludwigsburg",
      "countryCode": "DE"
  },
  {
      "label": "ZOE",
      "city": "Ludwigshafen",
      "countryCode": "DE"
  },
  {
      "label": "ZOF",
      "city": "Ocean Falls",
      "countryCode": "CA"
  },
  {
      "label": "ZOG",
      "city": "Lueneburg",
      "countryCode": "DE"
  },
  {
      "label": "ZOH",
      "city": "Luenen",
      "countryCode": "DE"
  },
  {
      "label": "ZOI",
      "city": "Marburg An Der Lahn",
      "countryCode": "DE"
  },
  {
      "label": "ZOJ",
      "city": "Marl",
      "countryCode": "DE"
  },
  {
      "label": "ZOK",
      "city": "Meerbusch",
      "countryCode": "DE"
  },
  {
      "label": "ZOL",
      "city": "Menden",
      "countryCode": "DE"
  },
  {
      "label": "ZOM",
      "city": "Minden",
      "countryCode": "DE"
  },
  {
      "label": "ZON",
      "city": "Moers",
      "countryCode": "DE"
  },
  {
      "label": "ZOO",
      "city": "Muelheim An Der Ruhr",
      "countryCode": "DE"
  },
  {
      "label": "ZOP",
      "city": "Neunkirchen",
      "countryCode": "DE"
  },
  {
      "label": "ZOQ",
      "city": "Neuss",
      "countryCode": "DE"
  },
  {
      "label": "ZOR",
      "city": "Neustadt Weinstrasse",
      "countryCode": "DE"
  },
  {
      "label": "ZOS",
      "city": "Osorno",
      "countryCode": "CL"
  },
  {
      "label": "ZOT",
      "city": "Neu Ulm",
      "countryCode": "DE"
  },
  {
      "label": "ZOU",
      "city": "Neuwied",
      "countryCode": "DE"
  },
  {
      "label": "ZOV",
      "city": "Norderstedt",
      "countryCode": "DE"
  },
  {
      "label": "ZOW",
      "city": "Nordhorn",
      "countryCode": "DE"
  },
  {
      "label": "ZOX",
      "city": "Oberammergau",
      "countryCode": "DE"
  },
  {
      "label": "ZOY",
      "city": "Oberhausen",
      "countryCode": "DE"
  },
  {
      "label": "ZOZ",
      "city": "Offenbach",
      "countryCode": "DE"
  },
  {
      "label": "ZPA",
      "city": "Offenburg",
      "countryCode": "DE"
  },
  {
      "label": "ZPB",
      "city": "Sachigo Lake",
      "countryCode": "CA"
  },
  {
      "label": "ZPC",
      "city": "Pucon",
      "countryCode": "CL"
  },
  {
      "label": "ZPD",
      "city": "Oldenburg",
      "countryCode": "DE"
  },
  {
      "label": "ZPE",
      "city": "Osnabrueck",
      "countryCode": "DE"
  },
  {
      "label": "ZPF",
      "city": "Passau",
      "countryCode": "DE"
  },
  {
      "label": "ZPG",
      "city": "Peine",
      "countryCode": "DE"
  },
  {
      "label": "ZPH",
      "city": "Zephyrhills",
      "countryCode": "US"
  },
  {
      "label": "ZPI",
      "city": "Pirmasens",
      "countryCode": "DE"
  },
  {
      "label": "ZPJ",
      "city": "Ratingen",
      "countryCode": "DE"
  },
  {
      "label": "ZPK",
      "city": "Ravensburg",
      "countryCode": "DE"
  },
  {
      "label": "ZPL",
      "city": "Recklinghauseb",
      "countryCode": "DE"
  },
  {
      "label": "ZPM",
      "city": "Regensburg",
      "countryCode": "DE"
  },
  {
      "label": "ZPN",
      "city": "Remscheid",
      "countryCode": "DE"
  },
  {
      "label": "ZPO",
      "city": "Pine House",
      "countryCode": "CA"
  },
  {
      "label": "ZPP",
      "city": "Reutlingen",
      "countryCode": "DE"
  },
  {
      "label": "ZPQ",
      "city": "Rheine",
      "countryCode": "DE"
  },
  {
      "label": "ZPR",
      "city": "Rosenheim",
      "countryCode": "DE"
  },
  {
      "label": "ZPS",
      "city": "Ruesselsheim",
      "countryCode": "DE"
  },
  {
      "label": "ZPT",
      "city": "Saarlouis",
      "countryCode": "DE"
  },
  {
      "label": "ZPU",
      "city": "Salzgitter",
      "countryCode": "DE"
  },
  {
      "label": "ZPV",
      "city": "Schwaebisch Gmuen",
      "countryCode": "DE"
  },
  {
      "label": "ZPW",
      "city": "Schweinfurt",
      "countryCode": "DE"
  },
  {
      "label": "ZPX",
      "city": "Schwerte",
      "countryCode": "DE"
  },
  {
      "label": "ZPY",
      "city": "Siegburg",
      "countryCode": "DE"
  },
  {
      "label": "ZPZ",
      "city": "Sindelfingen",
      "countryCode": "DE"
  },
  {
      "label": "ZQA",
      "city": "Singen",
      "countryCode": "DE"
  },
  {
      "label": "ZQB",
      "city": "Solingen",
      "countryCode": "DE"
  },
  {
      "label": "ZQC",
      "city": "Speyer",
      "countryCode": "DE"
  },
  {
      "label": "ZQD",
      "city": "Stade",
      "countryCode": "DE"
  },
  {
      "label": "ZQE",
      "city": "Stolberg",
      "countryCode": "DE"
  },
  {
      "label": "ZQG",
      "city": "Troisdorf",
      "countryCode": "DE"
  },
  {
      "label": "ZQH",
      "city": "Tuebingen",
      "countryCode": "DE"
  },
  {
      "label": "ZQI",
      "city": "Unna",
      "countryCode": "DE"
  },
  {
      "label": "ZQJ",
      "city": "Velbert",
      "countryCode": "DE"
  },
  {
      "label": "ZQK",
      "city": "Viersen",
      "countryCode": "DE"
  },
  {
      "label": "ZQL",
      "city": "Villingen Schwenningen",
      "countryCode": "DE"
  },
  {
      "label": "ZQM",
      "city": "Voelklingen",
      "countryCode": "DE"
  },
  {
      "label": "ZQN",
      "city": "Queenstown",
      "countryCode": "NZ"
  },
  {
      "label": "ZQO",
      "city": "Waiblingen",
      "countryCode": "DE"
  },
  {
      "label": "ZQP",
      "city": "Wesel",
      "countryCode": "DE"
  },
  {
      "label": "ZQQ",
      "city": "Wetzlar",
      "countryCode": "DE"
  },
  {
      "label": "ZQR",
      "city": "Witten",
      "countryCode": "DE"
  },
  {
      "label": "ZQS",
      "city": "Queen Charlotte Is",
      "countryCode": "CA"
  },
  {
      "label": "ZQT",
      "city": "Wolfenbuettel",
      "countryCode": "DE"
  },
  {
      "label": "ZQU",
      "city": "Wolfsburg",
      "countryCode": "DE"
  },
  {
      "label": "ZQV",
      "city": "Worms",
      "countryCode": "DE"
  },
  {
      "label": "ZQW",
      "city": "Zweibruecken",
      "countryCode": "DE"
  },
  {
      "label": "ZQX",
      "city": "Nias",
      "countryCode": "ID"
  },
  {
      "label": "ZRC",
      "city": "San Pedro Alcantara",
      "countryCode": "ES"
  },
  {
      "label": "ZRE",
      "city": "Rethymno",
      "countryCode": "GR"
  },
  {
      "label": "ZRH",
      "city": "Zurich",
      "countryCode": "CH"
  },
  {
      "label": "ZRI",
      "city": "Serui",
      "countryCode": "ID"
  },
  {
      "label": "ZRJ",
      "city": "Round Lake",
      "countryCode": "CA"
  },
  {
      "label": "ZRM",
      "city": "Sarmi",
      "countryCode": "ID"
  },
  {
      "label": "ZRN",
      "city": "Nyon",
      "countryCode": "CH"
  },
  {
      "label": "ZRO",
      "city": "Reggio Nell Emilia",
      "countryCode": "IT"
  },
  {
      "label": "ZRR",
      "city": "Arctic Red River",
      "countryCode": "CA"
  },
  {
      "label": "ZRX",
      "city": "Riesa",
      "countryCode": "DE"
  },
  {
      "label": "ZSA",
      "city": "San Salvador",
      "countryCode": "BS"
  },
  {
      "label": "ZSB",
      "city": "Salzburg",
      "countryCode": "AT"
  },
  {
      "label": "ZSC",
      "city": "Schoena",
      "countryCode": "DE"
  },
  {
      "label": "ZSD",
      "city": "Schwanheide",
      "countryCode": "DE"
  },
  {
      "label": "ZSE",
      "city": "St Pierre De La Reunion",
      "countryCode": "RE"
  },
  {
      "label": "ZSG",
      "city": "Sonneberg",
      "countryCode": "DE"
  },
  {
      "label": "ZSH",
      "city": "Santa Fe",
      "countryCode": "US"
  },
  {
      "label": "ZSI",
      "city": "Sassnitz",
      "countryCode": "DE"
  },
  {
      "label": "ZSJ",
      "city": "Sandy Lake",
      "countryCode": "CA"
  },
  {
      "label": "ZSK",
      "city": "Pasewalk",
      "countryCode": "DE"
  },
  {
      "label": "ZSL",
      "city": "Sligo",
      "countryCode": "IE"
  },
  {
      "label": "ZSM",
      "city": "Santa Clara",
      "countryCode": "US"
  },
  {
      "label": "ZSN",
      "city": "Stendal",
      "countryCode": "DE"
  },
  {
      "label": "ZSO",
      "city": "Suhl",
      "countryCode": "DE"
  },
  {
      "label": "ZSP",
      "city": "St Paul",
      "countryCode": "CA"
  },
  {
      "label": "ZSQ",
      "city": "Salzwedel",
      "countryCode": "DE"
  },
  {
      "label": "ZSS",
      "city": "Sassandra",
      "countryCode": "CI"
  },
  {
      "label": "ZST",
      "city": "Stewart",
      "countryCode": "CA"
  },
  {
      "label": "ZSU",
      "city": "Dessau",
      "countryCode": "DE"
  },
  {
      "label": "ZSX",
      "city": "Stralsund",
      "countryCode": "DE"
  },
  {
      "label": "ZSY",
      "city": "Scottsdale",
      "countryCode": "US"
  },
  {
      "label": "ZSZ",
      "city": "Swakopmund",
      "countryCode": "NA"
  },
  {
      "label": "ZTA",
      "city": "Tureira",
      "countryCode": "PF"
  },
  {
      "label": "ZTB",
      "city": "Tete A La Baleine",
      "countryCode": "CA"
  },
  {
      "label": "ZTC",
      "city": "Turin Bus Service",
      "countryCode": "IT"
  },
  {
      "label": "ZTH",
      "city": "Zakinthos Island",
      "countryCode": "GR"
  },
  {
      "label": "ZTK",
      "city": "Thun",
      "countryCode": "CH"
  },
  {
      "label": "ZTL",
      "city": "Telluride",
      "countryCode": "US"
  },
  {
      "label": "ZTM",
      "city": "Shamattawa",
      "countryCode": "CA"
  },
  {
      "label": "ZTP",
      "city": "Itapetininga",
      "countryCode": "BR"
  },
  {
      "label": "ZTR",
      "city": "Zhitomir",
      "countryCode": "UA"
  },
  {
      "label": "ZTS",
      "city": "Tahsis",
      "countryCode": "CA"
  },
  {
      "label": "ZTT",
      "city": "Cottbus",
      "countryCode": "DE"
  },
  {
      "label": "ZTW",
      "city": "Tsuen Wan",
      "countryCode": "HK"
  },
  {
      "label": "ZTZ",
      "city": "Chemnitz",
      "countryCode": "DE"
  },
  {
      "label": "ZUA",
      "city": "Mystery Flights",
      "countryCode": "NZ"
  },
  {
      "label": "ZUC",
      "city": "Ignace",
      "countryCode": "CA"
  },
  {
      "label": "ZUD",
      "city": "Ancud",
      "countryCode": "CL"
  },
  {
      "label": "ZUE",
      "city": "Zuenoula",
      "countryCode": "CI"
  },
  {
      "label": "ZUF",
      "city": "Mystery Explorer",
      "countryCode": "NZ"
  },
  {
      "label": "ZUG",
      "city": "Mystery Indulgence",
      "countryCode": "NZ"
  },
  {
      "label": "ZUH",
      "city": "Zhuhai",
      "countryCode": "CN"
  },
  {
      "label": "ZUI",
      "city": "GUANGDONG",
      "countryCode": "CN"
  },
  {
      "label": "ZUL",
      "city": "Zilfi",
      "countryCode": "SA"
  },
  {
      "label": "ZUM",
      "city": "Churchill Falls",
      "countryCode": "CA"
  },
  {
      "label": "ZUO",
      "city": "Dutch Rail Z 16",
      "countryCode": "NL"
  },
  {
      "label": "ZUP",
      "city": "Dutch Rail Z 17",
      "countryCode": "NL"
  },
  {
      "label": "ZUQ",
      "city": "Dutch Rail Z 18",
      "countryCode": "NL"
  },
  {
      "label": "ZUR",
      "city": "Dutch Rail Z 19",
      "countryCode": "NL"
  },
  {
      "label": "ZUS",
      "city": "Dutch Rail",
      "countryCode": "NL"
  },
  {
      "label": "ZUU",
      "city": "Dutch Rail Z 22",
      "countryCode": "NL"
  },
  {
      "label": "ZUV",
      "city": "Dutch Rail Z 23",
      "countryCode": "NL"
  },
  {
      "label": "ZUW",
      "city": "Dutch Rail Z 24",
      "countryCode": "NL"
  },
  {
      "label": "ZUX",
      "city": "Dutch Rail Z 25",
      "countryCode": "NL"
  },
  {
      "label": "ZUY",
      "city": "Dutch Rail Z 26",
      "countryCode": "NL"
  },
  {
      "label": "ZUZ",
      "city": "Dutch Rail Z 27",
      "countryCode": "NL"
  },
  {
      "label": "ZVA",
      "city": "Miandrivazo",
      "countryCode": "MG"
  },
  {
      "label": "ZVG",
      "city": "Springvale",
      "countryCode": "AU"
  },
  {
      "label": "ZVH",
      "city": "Veldoven",
      "countryCode": "NL"
  },
  {
      "label": "ZVK",
      "city": "Savannakhet",
      "countryCode": "LA"
  },
  {
      "label": "ZVL",
      "city": "Dutch Rail Z 01",
      "countryCode": "NL"
  },
  {
      "label": "ZVM",
      "city": "Hanover Messe",
      "countryCode": "DE"
  },
  {
      "label": "ZVN",
      "city": "Dutch Rail Z 03",
      "countryCode": "NL"
  },
  {
      "label": "ZVO",
      "city": "Dutch Rail Z 04",
      "countryCode": "NL"
  },
  {
      "label": "ZVP",
      "city": "Dutch Rail Z 05",
      "countryCode": "NL"
  },
  {
      "label": "ZVQ",
      "city": "Dutch Rail Z 06",
      "countryCode": "NL"
  },
  {
      "label": "ZVR",
      "city": "Hanover Hbf",
      "countryCode": "DE"
  },
  {
      "label": "ZVS",
      "city": "Dutch Rail Z 08",
      "countryCode": "NL"
  },
  {
      "label": "ZVT",
      "city": "Dutch Rail Z 09",
      "countryCode": "NL"
  },
  {
      "label": "ZVU",
      "city": "Dutch Rail Z 10",
      "countryCode": "NL"
  },
  {
      "label": "ZVV",
      "city": "Dutch Rail Z 11",
      "countryCode": "NL"
  },
  {
      "label": "ZVW",
      "city": "Dutch Rail Z 12",
      "countryCode": "NL"
  },
  {
      "label": "ZVX",
      "city": "Dutch Rail Z 13",
      "countryCode": "NL"
  },
  {
      "label": "ZVY",
      "city": "Dutch Rail Z 14",
      "countryCode": "NL"
  },
  {
      "label": "ZVZ",
      "city": "Dutch Rail Z 15",
      "countryCode": "NL"
  },
  {
      "label": "ZWA",
      "city": "Andapa",
      "countryCode": "MG"
  },
  {
      "label": "ZWD",
      "city": "Warnemuende",
      "countryCode": "DE"
  },
  {
      "label": "ZWG",
      "city": "Weingarten",
      "countryCode": "DE"
  },
  {
      "label": "ZWK",
      "city": "Suwalki",
      "countryCode": "PL"
  },
  {
      "label": "ZWL",
      "city": "Wollaston Lake",
      "countryCode": "CA"
  },
  {
      "label": "ZWM",
      "city": "Wismar",
      "countryCode": "DE"
  },
  {
      "label": "ZWN",
      "city": "Wittenberge",
      "countryCode": "DE"
  },
  {
      "label": "ZWO",
      "city": "Dutch Rail Z 02",
      "countryCode": "NL"
  },
  {
      "label": "ZWQ",
      "city": "Dutch Rail Z 07",
      "countryCode": "NL"
  },
  {
      "label": "ZWT",
      "city": "Wittenberg",
      "countryCode": "DE"
  },
  {
      "label": "ZWX",
      "city": "Dutch Rail Z 28",
      "countryCode": "NL"
  },
  {
      "label": "ZWY",
      "city": "Dutch Rail Z 29",
      "countryCode": "NL"
  },
  {
      "label": "ZWZ",
      "city": "Dutch Rail Z 30",
      "countryCode": "NL"
  },
  {
      "label": "ZXB",
      "city": "Jan Mayen",
      "countryCode": "NO"
  },
  {
      "label": "ZXC",
      "city": "Bangsund",
      "countryCode": "NO"
  },
  {
      "label": "ZXD",
      "city": "Vikna",
      "countryCode": "NO"
  },
  {
      "label": "ZXE",
      "city": "Edinburgh",
      "countryCode": "GB"
  },
  {
      "label": "ZXF",
      "city": "Roervik",
      "countryCode": "NO"
  },
  {
      "label": "ZXG",
      "city": "Gravik",
      "countryCode": "NO"
  },
  {
      "label": "ZXH",
      "city": "Soerfjord",
      "countryCode": "NO"
  },
  {
      "label": "ZXI",
      "city": "Roeddey",
      "countryCode": "NO"
  },
  {
      "label": "ZXJ",
      "city": "Fore",
      "countryCode": "NO"
  },
  {
      "label": "ZXK",
      "city": "Baasmo",
      "countryCode": "NO"
  },
  {
      "label": "ZXL",
      "city": "Skjerstad",
      "countryCode": "NO"
  },
  {
      "label": "ZXM",
      "city": "Rognan",
      "countryCode": "NO"
  },
  {
      "label": "ZXN",
      "city": "Leka",
      "countryCode": "NO"
  },
  {
      "label": "ZXO",
      "city": "Fauske",
      "countryCode": "NO"
  },
  {
      "label": "ZXQ",
      "city": "Solstad",
      "countryCode": "NO"
  },
  {
      "label": "ZXR",
      "city": "Hemnes",
      "countryCode": "NO"
  },
  {
      "label": "ZYA",
      "city": "Amsterdam",
      "countryCode": "NL"
  },
  {
      "label": "ZYC",
      "city": "Gizycko",
      "countryCode": "PL"
  },
  {
      "label": "ZYE",
      "city": "Eindhoven",
      "countryCode": "NL"
  },
  {
      "label": "ZYH",
      "city": "The Hague",
      "countryCode": "NL"
  },
  {
      "label": "ZYI",
      "city": "Zunyi",
      "countryCode": "CN"
  },
  {
      "label": "ZYL",
      "city": "Sylhet",
      "countryCode": "BD"
  },
  {
      "label": "ZYM",
      "city": "Arnhem",
      "countryCode": "NL"
  },
  {
      "label": "ZYN",
      "city": "Nimes",
      "countryCode": "FR"
  },
  {
      "label": "ZYO",
      "city": "Roosendaal",
      "countryCode": "NL"
  },
  {
      "label": "ZYU",
      "city": "Utrecht",
      "countryCode": "NL"
  },
  {
      "label": "ZZA",
      "city": "Azzazga",
      "countryCode": "DZ"
  },
  {
      "label": "ZZB",
      "city": "Barika",
      "countryCode": "DZ"
  },
  {
      "label": "ZZC",
      "city": "Cherchell",
      "countryCode": "DZ"
  },
  {
      "label": "ZZD",
      "city": "Dra El Mizan",
      "countryCode": "DZ"
  },
  {
      "label": "ZZE",
      "city": "Uzice",
      "countryCode": "YU"
  },
  {
      "label": "ZZF",
      "city": "Mystery Flight",
      "countryCode": "AU"
  },
  {
      "label": "ZZG",
      "city": "Fictitious Point",
      "countryCode": "DE"
  },
  {
      "label": "ZZH",
      "city": "Cranzahl",
      "countryCode": "DE"
  },
  {
      "label": "ZZI",
      "city": "Elite Mystery Night",
      "countryCode": "AU"
  },
  {
      "label": "ZZJ",
      "city": "Mystery Night",
      "countryCode": "AU"
  },
  {
      "label": "ZZK",
      "city": "Khemis Miliana",
      "countryCode": "DZ"
  },
  {
      "label": "ZZL",
      "city": "Larba Nath Iraten",
      "countryCode": "DZ"
  },
  {
      "label": "ZZM",
      "city": "Bordj Menaiel",
      "countryCode": "DZ"
  },
  {
      "label": "ZZP",
      "city": "Pozarevac",
      "countryCode": "YU"
  },
  {
      "label": "ZZQ",
      "city": "Cheung Sha Wan",
      "countryCode": "HK"
  },
  {
      "label": "ZZR",
      "city": "Kherrata",
      "countryCode": "DZ"
  },
  {
      "label": "ZZS",
      "city": "M Sila",
      "countryCode": "DZ"
  },
  {
      "label": "ZZT",
      "city": "Taher",
      "countryCode": "DZ"
  },
  {
      "label": "ZZU",
      "city": "Mzuzu",
      "countryCode": "MW"
  },
  {
      "label": "ZZV",
      "city": "Zanesville",
      "countryCode": "US"
  },
  {
      "label": "ZZW",
      "city": "Day Trip Mystery",
      "countryCode": "AU"
  },
  {
      "label": "ZZZ",
      "city": "Xanadu",
      "countryCode": "US"
  }
];

export default AutoFillInputFlightList;