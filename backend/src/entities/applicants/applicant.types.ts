export enum EducationLevelEnum {
    NONE = "None",
    PRIMARY = "Primary",
    SECONDARY = "Secondary",
    HIGH_SCHOOL = "High School",
    ASSOCIATE = "Associate Degree",
    BACHELOR = "Bachelor's Degree",
    MASTER = "Master's Degree",
    DOCTORATE = "Doctorate",
    PROFESSIONAL = "Professional Certification",
    OTHER = "Other",
  }

  export enum DisabilityEnum {
    NONE = "None",
    VISUAL = "Visual Impairment",
    HEARING = "Hearing Impairment",
    PHYSICAL = "Physical Disability",
    COGNITIVE = "Cognitive Disability",
    LEARNING = "Learning Disability",
    SPEECH = "Speech Impairment",
    MENTAL_HEALTH = "Mental Health Condition",
    DEVELOPMENTAL = "Developmental Disability",
    CHRONIC_ILLNESS = "Chronic Illness",
    OTHER = "Other",
  }
  
  export interface IApplicantRequest{
    fullname:string, 
    email:string, 
    phone:string, 
    dob:string, 
    highest_education_level:string, 
    skils:{
      technical_skills:string[], 
      soft_skills:string[]
    },
    certifications: string[],
    physical_disabilities: string,
    job_opening:string
  }

  export interface IApplicant{
    _id:string, 
    fullname:string, 
    email:string, 
    phone:string, 
    dob:string, 
    highest_education_level:string, 
    skils:{
      technical_skills:string[], 
      soft_skills:string[]
    },
    certifications: string[],
    physical_disabilities: string,
    job_opening:string
  }