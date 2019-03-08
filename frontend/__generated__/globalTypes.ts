/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum Role {
  ADMIN = "ADMIN",
  SUBSCRIBER = "SUBSCRIBER",
}

export interface AddWebsiteInput {
  full: any;
  thumbnail: any;
  title: string;
  url: string;
  slug: string;
  typefaces: string[];
  tags: string[];
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

export interface FileCreateInput {
  filename: string;
  mimetype: string;
  encoding: string;
  url: string;
}

export interface FileCreateOneInput {
  create?: FileCreateInput | null;
  connect?: FileWhereUniqueInput | null;
}

export interface FileWhereUniqueInput {
  id?: string | null;
  url?: string | null;
}

export interface FoundryCreateInput {
  name: string;
  url: string;
  typefaces?: TypefaceCreateManyWithoutFoundriesInput | null;
  addedBy: UserCreateOneInput;
}

export interface FoundryCreateManyWithoutTypefacesInput {
  create?: FoundryCreateWithoutTypefacesInput[] | null;
  connect?: FoundryWhereUniqueInput[] | null;
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

export interface ImagesCreateOneWithoutWebsiteInput {
  create?: ImagesCreateWithoutWebsiteInput | null;
  connect?: ImagesWhereUniqueInput | null;
}

export interface ImagesCreateWithoutWebsiteInput {
  thumbnail?: FileCreateOneInput | null;
  full?: FileCreateOneInput | null;
}

export interface ImagesWhereUniqueInput {
  id?: string | null;
}

export interface TagCreateInput {
  name: string;
  website?: WebsiteCreateManyWithoutTagsInput | null;
}

export interface TagCreateManyWithoutWebsiteInput {
  create?: TagCreateWithoutWebsiteInput[] | null;
  connect?: TagWhereUniqueInput[] | null;
}

export interface TagCreateWithoutWebsiteInput {
  name: string;
}

export interface TagWhereUniqueInput {
  id?: string | null;
}

export interface TypefaceCreateInput {
  name: string;
  downloadUrl: string;
  description?: string | null;
  slug: string;
  usedBy?: WebsiteCreateManyWithoutTypefacesInput | null;
  addedBy: UserCreateOneWithoutTypefacesInput;
  foundries?: FoundryCreateManyWithoutTypefacesInput | null;
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

export interface TypefaceCreateManyWithoutFoundriesInput {
  create?: TypefaceCreateWithoutFoundriesInput[] | null;
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
  foundries?: FoundryCreateManyWithoutTypefacesInput | null;
  designers?: DesignerCreateManyWithoutTypefacesInput | null;
}

export interface TypefaceCreateWithoutDesignersInput {
  name: string;
  downloadUrl: string;
  description?: string | null;
  slug: string;
  usedBy?: WebsiteCreateManyWithoutTypefacesInput | null;
  addedBy: UserCreateOneWithoutTypefacesInput;
  foundries?: FoundryCreateManyWithoutTypefacesInput | null;
}

export interface TypefaceCreateWithoutFoundriesInput {
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
  foundries?: FoundryCreateManyWithoutTypefacesInput | null;
  designers?: DesignerCreateManyWithoutTypefacesInput | null;
}

export interface TypefaceWhereUniqueInput {
  id?: string | null;
  name?: string | null;
  slug?: string | null;
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

export interface WebsiteCreateManyWithoutTagsInput {
  create?: WebsiteCreateWithoutTagsInput[] | null;
  connect?: WebsiteWhereUniqueInput[] | null;
}

export interface WebsiteCreateManyWithoutTypefacesInput {
  create?: WebsiteCreateWithoutTypefacesInput[] | null;
  connect?: WebsiteWhereUniqueInput[] | null;
}

export interface WebsiteCreateWithoutAddedByInput {
  isPublished?: boolean | null;
  title: string;
  images?: ImagesCreateOneWithoutWebsiteInput | null;
  slug?: string | null;
  url: string;
  typefaces?: TypefaceCreateManyWithoutUsedByInput | null;
  featured?: boolean | null;
  tags?: TagCreateManyWithoutWebsiteInput | null;
}

export interface WebsiteCreateWithoutTagsInput {
  isPublished?: boolean | null;
  title: string;
  images?: ImagesCreateOneWithoutWebsiteInput | null;
  slug?: string | null;
  url: string;
  addedBy: UserCreateOneWithoutWebsitesInput;
  typefaces?: TypefaceCreateManyWithoutUsedByInput | null;
  featured?: boolean | null;
}

export interface WebsiteCreateWithoutTypefacesInput {
  isPublished?: boolean | null;
  title: string;
  images?: ImagesCreateOneWithoutWebsiteInput | null;
  slug?: string | null;
  url: string;
  addedBy: UserCreateOneWithoutWebsitesInput;
  featured?: boolean | null;
  tags?: TagCreateManyWithoutWebsiteInput | null;
}

export interface WebsiteWhereUniqueInput {
  id?: string | null;
  title?: string | null;
  slug?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
