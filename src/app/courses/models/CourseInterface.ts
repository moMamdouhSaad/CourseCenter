export class CourseInterface {
  id!: number;
  name!: string;
  createdDate!: string;
  startDate!: string;
  endDate!: string;
}

export interface CourseRequestInterface {
  id: number;
  name: string;
  createdDate: string;
  startDate: string;
  endDate: string;
}

export interface CourseResponseInterface {
  id: number;
  name: string;
  createdDate: string;
  startDate: string;
  endDate: string;
}

export interface AddCourseStateInterface {
  isSubmitting: boolean;
}
