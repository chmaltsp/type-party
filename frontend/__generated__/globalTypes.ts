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

export interface AddTypefaceInput {
  name: string;
  downloadUrl: string;
  description?: string | null;
  slug: string;
  foundries: string[];
  designers: string[];
  tags: string[];
  full: any;
}

export interface AddWebsiteInput {
  full: any;
  thumbnail: any;
  title: string;
  url: string;
  slug: string;
  typefaces: string[];
  tags: string[];
  featured: boolean;
}

export interface DesignerCreateInput {
  id?: string | null;
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
  id?: string | null;
  name: string;
  url: string;
  addedBy: UserCreateOneInput;
}

export interface DesignerWhereUniqueInput {
  id?: string | null;
  name?: string | null;
}

export interface FileCreateInput {
  id?: string | null;
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
  id?: string | null;
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
  id?: string | null;
  name: string;
  url: string;
  addedBy: UserCreateOneInput;
}

export interface FoundryWhereUniqueInput {
  id?: string | null;
  name?: string | null;
}

export interface ImagesCreateOneWithoutTypefaceInput {
  create?: ImagesCreateWithoutTypefaceInput | null;
  connect?: ImagesWhereUniqueInput | null;
}

export interface ImagesCreateOneWithoutWebsiteInput {
  create?: ImagesCreateWithoutWebsiteInput | null;
  connect?: ImagesWhereUniqueInput | null;
}

export interface ImagesCreateWithoutTypefaceInput {
  id?: string | null;
  website?: WebsiteCreateOneWithoutImagesInput | null;
  thumbnail?: FileCreateOneInput | null;
  full?: FileCreateOneInput | null;
}

export interface ImagesCreateWithoutWebsiteInput {
  id?: string | null;
  thumbnail?: FileCreateOneInput | null;
  full?: FileCreateOneInput | null;
  typeface?: TypefaceCreateOneWithoutImagesInput | null;
}

export interface ImagesWhereUniqueInput {
  id?: string | null;
}

export interface TagCreateInput {
  id?: string | null;
  name: string;
  website?: WebsiteCreateManyWithoutTagsInput | null;
  typeface?: TypefaceCreateManyWithoutTagsInput | null;
}

export interface TagCreateManyWithoutTypefaceInput {
  create?: TagCreateWithoutTypefaceInput[] | null;
  connect?: TagWhereUniqueInput[] | null;
}

export interface TagCreateManyWithoutWebsiteInput {
  create?: TagCreateWithoutWebsiteInput[] | null;
  connect?: TagWhereUniqueInput[] | null;
}

export interface TagCreateWithoutTypefaceInput {
  id?: string | null;
  name: string;
  website?: WebsiteCreateManyWithoutTagsInput | null;
}

export interface TagCreateWithoutWebsiteInput {
  id?: string | null;
  name: string;
  typeface?: TypefaceCreateManyWithoutTagsInput | null;
}

export interface TagWhereUniqueInput {
  id?: string | null;
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

export interface TypefaceCreateManyWithoutTagsInput {
  create?: TypefaceCreateWithoutTagsInput[] | null;
  connect?: TypefaceWhereUniqueInput[] | null;
}

export interface TypefaceCreateManyWithoutUsedByInput {
  create?: TypefaceCreateWithoutUsedByInput[] | null;
  connect?: TypefaceWhereUniqueInput[] | null;
}

export interface TypefaceCreateOneWithoutImagesInput {
  create?: TypefaceCreateWithoutImagesInput | null;
  connect?: TypefaceWhereUniqueInput | null;
}

export interface TypefaceCreateWithoutAddedByInput {
  id?: string | null;
  name: string;
  downloadUrl: string;
  description?: string | null;
  slug: string;
  usedBy?: WebsiteCreateManyWithoutTypefacesInput | null;
  foundries?: FoundryCreateManyWithoutTypefacesInput | null;
  designers?: DesignerCreateManyWithoutTypefacesInput | null;
  tags?: TagCreateManyWithoutTypefaceInput | null;
  images?: ImagesCreateOneWithoutTypefaceInput | null;
}

export interface TypefaceCreateWithoutDesignersInput {
  id?: string | null;
  name: string;
  downloadUrl: string;
  description?: string | null;
  slug: string;
  usedBy?: WebsiteCreateManyWithoutTypefacesInput | null;
  addedBy: UserCreateOneWithoutTypefacesInput;
  foundries?: FoundryCreateManyWithoutTypefacesInput | null;
  tags?: TagCreateManyWithoutTypefaceInput | null;
  images?: ImagesCreateOneWithoutTypefaceInput | null;
}

export interface TypefaceCreateWithoutFoundriesInput {
  id?: string | null;
  name: string;
  downloadUrl: string;
  description?: string | null;
  slug: string;
  usedBy?: WebsiteCreateManyWithoutTypefacesInput | null;
  addedBy: UserCreateOneWithoutTypefacesInput;
  designers?: DesignerCreateManyWithoutTypefacesInput | null;
  tags?: TagCreateManyWithoutTypefaceInput | null;
  images?: ImagesCreateOneWithoutTypefaceInput | null;
}

export interface TypefaceCreateWithoutImagesInput {
  id?: string | null;
  name: string;
  downloadUrl: string;
  description?: string | null;
  slug: string;
  usedBy?: WebsiteCreateManyWithoutTypefacesInput | null;
  addedBy: UserCreateOneWithoutTypefacesInput;
  foundries?: FoundryCreateManyWithoutTypefacesInput | null;
  designers?: DesignerCreateManyWithoutTypefacesInput | null;
  tags?: TagCreateManyWithoutTypefaceInput | null;
}

export interface TypefaceCreateWithoutTagsInput {
  id?: string | null;
  name: string;
  downloadUrl: string;
  description?: string | null;
  slug: string;
  usedBy?: WebsiteCreateManyWithoutTypefacesInput | null;
  addedBy: UserCreateOneWithoutTypefacesInput;
  foundries?: FoundryCreateManyWithoutTypefacesInput | null;
  designers?: DesignerCreateManyWithoutTypefacesInput | null;
  images?: ImagesCreateOneWithoutTypefaceInput | null;
}

export interface TypefaceCreateWithoutUsedByInput {
  id?: string | null;
  name: string;
  downloadUrl: string;
  description?: string | null;
  slug: string;
  addedBy: UserCreateOneWithoutTypefacesInput;
  foundries?: FoundryCreateManyWithoutTypefacesInput | null;
  designers?: DesignerCreateManyWithoutTypefacesInput | null;
  tags?: TagCreateManyWithoutTypefaceInput | null;
  images?: ImagesCreateOneWithoutTypefaceInput | null;
}

export interface TypefaceWhereUniqueInput {
  id?: string | null;
  name?: string | null;
  slug?: string | null;
}

export interface UpdateTypefaceInput {
  name: string;
  downloadUrl: string;
  description?: string | null;
  slug: string;
  foundries: string[];
  designers: string[];
  tags: string[];
  full: any;
}

export interface UpdateWebsiteInput {
  full?: any | null;
  thumbnail?: any | null;
  title: string;
  url: string;
  slug: string;
  typefaces: string[];
  tags: string[];
  featured: boolean;
}

export interface UserCreateInput {
  id?: string | null;
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
  id?: string | null;
  email: string;
  password: string;
  name: string;
  role?: Role | null;
  websites?: WebsiteCreateManyWithoutAddedByInput | null;
}

export interface UserCreateWithoutWebsitesInput {
  id?: string | null;
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

export interface WebsiteCreateOneWithoutImagesInput {
  create?: WebsiteCreateWithoutImagesInput | null;
  connect?: WebsiteWhereUniqueInput | null;
}

export interface WebsiteCreateWithoutAddedByInput {
  id?: string | null;
  isPublished?: boolean | null;
  title: string;
  images?: ImagesCreateOneWithoutWebsiteInput | null;
  slug?: string | null;
  url: string;
  typefaces?: TypefaceCreateManyWithoutUsedByInput | null;
  featured?: boolean | null;
  tags?: TagCreateManyWithoutWebsiteInput | null;
}

export interface WebsiteCreateWithoutImagesInput {
  id?: string | null;
  isPublished?: boolean | null;
  title: string;
  slug?: string | null;
  url: string;
  addedBy: UserCreateOneWithoutWebsitesInput;
  typefaces?: TypefaceCreateManyWithoutUsedByInput | null;
  featured?: boolean | null;
  tags?: TagCreateManyWithoutWebsiteInput | null;
}

export interface WebsiteCreateWithoutTagsInput {
  id?: string | null;
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
  id?: string | null;
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
