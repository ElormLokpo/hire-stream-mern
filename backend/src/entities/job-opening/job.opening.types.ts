

export enum JobTypeEnum{
    PART_TIME = "PART_TIME",
    FULL_TIME = "FULL_TIME",
    CONTRACT = "CONTRACT",
    INTERNSHIP = "INTERNSHIP",
    OTHER = "OTHER"
}

export enum RemoteStateEnum{
    REMOTE = "REMOTE",
    IN_OFFICE = "IN_OFFICE",
    BOTH = "BOTH"
}

export interface IJobOpeningRequest{
    organizaiton:string, 
    job_requirements:{
        job_title:string, 
        job_overview:string, 
        job_location:{
            job_country:string, 
            job_city:string
        },
        salary_currency:string,
        salary_range: string, 
        qualifications: string[],
        responsibilities:string[],
        job_type:string, 
        remote_state:string
    },
    applicantform_requirements: {
        fullname:boolean,
        email:boolean,
        phone:boolean,
        dob:boolean,
        education_level:boolean,
        experience:boolean,
        skills:boolean,
        certifications:boolean,
        physical_disabilities:boolean,
        cv:boolean 
    },
    email_template:{
        acceptance_email: string, 
        rejection_email:string
    },
    deadline: Date
}

export interface IJobOpening{
    _id:string, 
    organizaiton:string, 
    job_requirements:{
        job_title:string, 
        job_overview:string, 
        job_location:{
            job_country:string, 
            job_city:string
        },
        salary_currency:string,
        salary_range: string, 
        qualifications: string[],
        responsibilities:string[],
        job_type:string, 
        remote_state:string
    },
    applicantform_requirements: {
        fullname:boolean,
        email:boolean,
        phone:boolean,
        dob:boolean,
        education_level:boolean,
        experience:boolean,
        skills:boolean,
        certifications:boolean,
        physical_disabilities:boolean,
        cv:boolean 
    },
    email_template:{
        acceptance_email: string, 
        rejection_email:string
    },
    deadline: Date
}