const queryExamples: string[] = [
    '("Kaspersky" OR "Avast") AND "antivirus"',
    '"Kaspersky" AND "Norton "Security"" OR "Malwarebytes"',    
    '"Kaspersky "Premium" Edition" AND "Avast" OR "Norton "Security""',
    '(TI="Kaspersky" OR AB="Avast") AND NOT (DP="2021-21-17" OR URL="*.com")',    
    '(TI="Kaspersky" OR AB="Norton "Security"") AND NOT (DP="2023-11-08" OR URL="*.ru")',
    'Kaspersky OR Malware AND ("virus OR test" OR "lenta")',

]

export default queryExamples;
