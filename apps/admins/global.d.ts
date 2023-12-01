export {}


declare global {
  interface ClinicProgram  {
    name: string;
    description: string;
    steps: ClinicProgramStep[];
  };
  
  interface ClinicProgramStep  {
    name: string;
    description: string;
    questions: ClinicProgramQuestion[];
  };

  interface Options {
    value: string;
    label: string;
  }
  
  interface ClinicProgramQuestion  {
    label: string;
  type: 'text' | 'textarea' | 'checkbox' | 'select' | 'radio';
  options?: Options[];
  required: boolean;
  name: string;
  };
  interface FormCheckboxProps  {
    label: string;
    name: string;
    value: string;
    required?: boolean;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id:string;
  };
  interface FormInputProps  {
    label: string;
    name: string;
    value?: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
  id:string;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  interface FormSelectProps  {
    label: string;
    name: string;
    value?: string;
    placeholder?: string;
    options: { value: string; label: string }[];
    required?: boolean;
    handleChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  id:string;
  };
  interface  FormRadioProps  {
    label: string;
    name: string;
    value: string;
    checked: boolean;
    handleChecked: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id:string;
  
  };
  interface FormTextareaProps  {
  id:string;
    label: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    handleChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  };
 interface ClinicProgramFormBuilderProps  {
    program: ClinicProgram;
  };

  interface stepTrackerProps {
    id: string;
  }

  interface Treatment {
    
    name: string;
    description: string;
    categories: TreatmentCategory[];
    
  }

  interface TreatmentCategory {
    
    name: string;
    description: string;
    steps: IntakeStep[];
    medications?: Medication[];
  }



  interface IntakeStep{
   
    title: string;
    description?: string;
    type:  'text' | 'textarea' | 'checkbox' | 'select' | 'radio';
    options?: Options[];
    value?: string;
  }

  interface Medication{
    name: string;
    description: string;
    treatment: Treatment;
    Category: TreatmentCategory;
    howToUse: string;
    sideEffects: string;
    precautions: string;
  }

  interface Lab {
    testName: string;
    alsoKnownAs: string;
    category: LabCategory.name;
    purpose: string;
    measures: string;
    whoShouldTake: string;
    results: string[];
  }

  interface LabCategory {
    name: 'ALLERGY TESTING'|'AUTOIMMUNE DISORDER TESTS'|'CANCER SCREENING TESTS'|'DIABETES BLOOD TESTS'|'DIGESTIVE SYSTEM BLOOD TESTS'|'DRUGS AND ALCOHOL TESTS'|'FERTILITY TESTS'|'GENERAL HEALTH & WELLNESS TESTS'|'HEART HEALTH BLOOD TESTS'|'HEAVY METAL TESTING'|'HORMONE TESTING'|'INFECTIOUS DISEASE TESTS'|'KIDNEY FUNCTION TESTS'|'LIVER FUNCTION TESTS'|'MEN’S HEALTH TESTS'|'STD TESTS'|'THYROID FUNCTION TESTS'|'VITAMIN AND NUTRITION TESTS'|'WEIGHT MANAGEMENT TESTS'|'WOMEN’S HEALTH TESTS'
  }



  
}
