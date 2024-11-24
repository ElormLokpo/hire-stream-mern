
export interface IOrganization{
    _id?:string,
    organization_name:string, 
    location:{
        country: string, 
        organization_city?:string
    },
    organization_webiste:string, 
    organization_description:string,
    owner:any
}

export interface IOrganizationRequest{
    organization_name:string, 
    location:{
        country: string, 
        organization_city?:string
    },
    organization_webiste:string, 
    organization_description:string,
    owner:any
}