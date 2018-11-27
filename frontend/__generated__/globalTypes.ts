/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum Role {
  ADMIN = "ADMIN",
  SUBSCRIBER = "SUBSCRIBER",
}

export interface DesignerCreateManyWithoutTypefacesInput {
  create?: DesignerCreateWithoutTypefacesInput[] | null;
  connect?: DesignerWhereUniqueInput[] | null;
}

export interface DesignerCreateWithoutTypefacesInput {
  name: string;
  url: string;
}

export interface DesignerWhereUniqueInput {
  id?: string | null;
  name?: string | null;
}

export interface FoundryCreateOneWithoutFontsInput {
  create?: FoundryCreateWithoutFontsInput | null;
  connect?: FoundryWhereUniqueInput | null;
}

export interface FoundryCreateWithoutFontsInput {
  name: string;
  url: string;
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
  foundry?: FoundryCreateOneWithoutFontsInput | null;
  designers?: DesignerCreateManyWithoutTypefacesInput | null;
}

export interface TypefaceCreateManyWithoutAddedByInput {
  create?: TypefaceCreateWithoutAddedByInput[] | null;
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
  foundry?: FoundryCreateOneWithoutFontsInput | null;
  designers?: DesignerCreateManyWithoutTypefacesInput | null;
}

export interface TypefaceCreateWithoutUsedByInput {
  name: string;
  downloadUrl: string;
  description?: string | null;
  slug: string;
  addedBy: UserCreateOneWithoutTypefacesInput;
  foundry?: FoundryCreateOneWithoutFontsInput | null;
  designers?: DesignerCreateManyWithoutTypefacesInput | null;
}

export interface TypefaceWhereUniqueInput {
  id?: string | null;
  name?: string | null;
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
