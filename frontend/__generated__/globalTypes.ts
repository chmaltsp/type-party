/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum Role {
  ADMIN = "ADMIN",
  SUBSCRIBER = "SUBSCRIBER",
}

export interface DesignerCreateInput {
  name: string;
  url: string;
  typefaces?: TypefaceCreateManyWithoutDesignersInput | null;
  addedBy: UserCreateOneInput;
}

export interface DesignerCreateManyWithoutTypefacesInput {
  create?: DesignerCreateWithoutTypefacesInput[] | null;
  connect?: DesignerWhereUniqueInput[] | null;
}

export interface DesignerCreateWithoutTypefacesInput {
  name: string;
  url: string;
  addedBy: UserCreateOneInput;
}

export interface DesignerWhereUniqueInput {
  id?: string | null;
  name?: string | null;
}

export interface FoundryCreateInput {
  name: string;
  url: string;
  typefaces?: TypefaceCreateManyWithoutFoundryInput | null;
  addedBy: UserCreateOneInput;
}

export interface FoundryCreateOneWithoutTypefacesInput {
  create?: FoundryCreateWithoutTypefacesInput | null;
  connect?: FoundryWhereUniqueInput | null;
}

export interface FoundryCreateWithoutTypefacesInput {
  name: string;
  url: string;
  addedBy: UserCreateOneInput;
}

export interface FoundryWhereUniqueInput {
  id?: string | null;
  name?: string | null;
}

export interface TypefaceCreateInput {
  name: string;
  downloadUrl: string;
  description?: string | null;
  slug: string;
  usedBy?: WebsiteCreateManyWithoutTypefacesInput | null;
  addedBy: UserCreateOneWithoutTypefacesInput;
  foundry?: FoundryCreateOneWithoutTypefacesInput | null;
  designers?: DesignerCreateManyWithoutTypefacesInput | null;
}

export interface TypefaceCreateManyWithoutAddedByInput {
  create?: TypefaceCreateWithoutAddedByInput[] | null;
  connect?: TypefaceWhereUniqueInput[] | null;
}

export interface TypefaceCreateManyWithoutDesignersInput {
  create?: TypefaceCreateWithoutDesignersInput[] | null;
  connect?: TypefaceWhereUniqueInput[] | null;
}

export interface TypefaceCreateManyWithoutFoundryInput {
  create?: TypefaceCreateWithoutFoundryInput[] | null;
  connect?: TypefaceWhereUniqueInput[] | null;
}

export interface TypefaceCreateManyWithoutUsedByInput {
  create?: TypefaceCreateWithoutUsedByInput[] | null;
  connect?: TypefaceWhereUniqueInput[] | null;
}

export interface TypefaceCreateWithoutAddedByInput {
  name: string;
  downloadUrl: string;
  description?: string | null;
  slug: string;
  usedBy?: WebsiteCreateManyWithoutTypefacesInput | null;
  foundry?: FoundryCreateOneWithoutTypefacesInput | null;
  designers?: DesignerCreateManyWithoutTypefacesInput | null;
}

export interface TypefaceCreateWithoutDesignersInput {
  name: string;
  downloadUrl: string;
  description?: string | null;
  slug: string;
  usedBy?: WebsiteCreateManyWithoutTypefacesInput | null;
  addedBy: UserCreateOneWithoutTypefacesInput;
  foundry?: FoundryCreateOneWithoutTypefacesInput | null;
}

export interface TypefaceCreateWithoutFoundryInput {
  name: string;
  downloadUrl: string;
  description?: string | null;
  slug: string;
  usedBy?: WebsiteCreateManyWithoutTypefacesInput | null;
  addedBy: UserCreateOneWithoutTypefacesInput;
  designers?: DesignerCreateManyWithoutTypefacesInput | null;
}

export interface TypefaceCreateWithoutUsedByInput {
  name: string;
  downloadUrl: string;
  description?: string | null;
  slug: string;
  addedBy: UserCreateOneWithoutTypefacesInput;
  foundry?: FoundryCreateOneWithoutTypefacesInput | null;
  designers?: DesignerCreateManyWithoutTypefacesInput | null;
}

export interface TypefaceWhereUniqueInput {
  id?: string | null;
  name?: string | null;
}

export interface UserCreateInput {
  email: string;
  password: string;
  name: string;
  role?: Role | null;
  websites?: WebsiteCreateManyWithoutAddedByInput | null;
  typefaces?: TypefaceCreateManyWithoutAddedByInput | null;
}

export interface UserCreateOneInput {
  create?: UserCreateInput | null;
  connect?: UserWhereUniqueInput | null;
}

export interface UserCreateOneWithoutTypefacesInput {
  create?: UserCreateWithoutTypefacesInput | null;
  connect?: UserWhereUniqueInput | null;
}

export interface UserCreateOneWithoutWebsitesInput {
  create?: UserCreateWithoutWebsitesInput | null;
  connect?: UserWhereUniqueInput | null;
}

export interface UserCreateWithoutTypefacesInput {
  email: string;
  password: string;
  name: string;
  role?: Role | null;
  websites?: WebsiteCreateManyWithoutAddedByInput | null;
}

export interface UserCreateWithoutWebsitesInput {
  email: string;
  password: string;
  name: string;
  role?: Role | null;
  typefaces?: TypefaceCreateManyWithoutAddedByInput | null;
}

export interface UserWhereUniqueInput {
  id?: string | null;
  email?: string | null;
}

export interface WebsiteCreateManyWithoutAddedByInput {
  create?: WebsiteCreateWithoutAddedByInput[] | null;
  connect?: WebsiteWhereUniqueInput[] | null;
}

export interface WebsiteCreateManyWithoutTypefacesInput {
  create?: WebsiteCreateWithoutTypefacesInput[] | null;
  connect?: WebsiteWhereUniqueInput[] | null;
}

export interface WebsiteCreateWithoutAddedByInput {
  isPublished?: boolean | null;
  title: string;
  thumbnail: string;
  slug?: string | null;
  url: string;
  image: string;
  typefaces?: TypefaceCreateManyWithoutUsedByInput | null;
  featured?: boolean | null;
}

export interface WebsiteCreateWithoutTypefacesInput {
  isPublished?: boolean | null;
  title: string;
  thumbnail: string;
  slug?: string | null;
  url: string;
  image: string;
  addedBy: UserCreateOneWithoutWebsitesInput;
  featured?: boolean | null;
}

export interface WebsiteWhereUniqueInput {
  id?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
