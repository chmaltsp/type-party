export const typeDefs = /* GraphQL */ `type AggregateDesigner {
  count: Int!
}

type AggregateFile {
  count: Int!
}

type AggregateFoundry {
  count: Int!
}

type AggregateImages {
  count: Int!
}

type AggregateTag {
  count: Int!
}

type AggregateTypeface {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateWebsite {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Designer {
  id: ID!
  name: String!
  url: String!
  typefaces(where: TypefaceWhereInput, orderBy: TypefaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Typeface!]
  addedBy: User!
}

type DesignerConnection {
  pageInfo: PageInfo!
  edges: [DesignerEdge]!
  aggregate: AggregateDesigner!
}

input DesignerCreateInput {
  name: String!
  url: String!
  typefaces: TypefaceCreateManyWithoutDesignersInput
  addedBy: UserCreateOneInput!
}

input DesignerCreateManyWithoutTypefacesInput {
  create: [DesignerCreateWithoutTypefacesInput!]
  connect: [DesignerWhereUniqueInput!]
}

input DesignerCreateWithoutTypefacesInput {
  name: String!
  url: String!
  addedBy: UserCreateOneInput!
}

type DesignerEdge {
  node: Designer!
  cursor: String!
}

enum DesignerOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  url_ASC
  url_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type DesignerPreviousValues {
  id: ID!
  name: String!
  url: String!
}

input DesignerScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [DesignerScalarWhereInput!]
  OR: [DesignerScalarWhereInput!]
  NOT: [DesignerScalarWhereInput!]
}

type DesignerSubscriptionPayload {
  mutation: MutationType!
  node: Designer
  updatedFields: [String!]
  previousValues: DesignerPreviousValues
}

input DesignerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DesignerWhereInput
  AND: [DesignerSubscriptionWhereInput!]
  OR: [DesignerSubscriptionWhereInput!]
  NOT: [DesignerSubscriptionWhereInput!]
}

input DesignerUpdateInput {
  name: String
  url: String
  typefaces: TypefaceUpdateManyWithoutDesignersInput
  addedBy: UserUpdateOneRequiredInput
}

input DesignerUpdateManyDataInput {
  name: String
  url: String
}

input DesignerUpdateManyMutationInput {
  name: String
  url: String
}

input DesignerUpdateManyWithoutTypefacesInput {
  create: [DesignerCreateWithoutTypefacesInput!]
  delete: [DesignerWhereUniqueInput!]
  connect: [DesignerWhereUniqueInput!]
  disconnect: [DesignerWhereUniqueInput!]
  update: [DesignerUpdateWithWhereUniqueWithoutTypefacesInput!]
  upsert: [DesignerUpsertWithWhereUniqueWithoutTypefacesInput!]
  deleteMany: [DesignerScalarWhereInput!]
  updateMany: [DesignerUpdateManyWithWhereNestedInput!]
}

input DesignerUpdateManyWithWhereNestedInput {
  where: DesignerScalarWhereInput!
  data: DesignerUpdateManyDataInput!
}

input DesignerUpdateWithoutTypefacesDataInput {
  name: String
  url: String
  addedBy: UserUpdateOneRequiredInput
}

input DesignerUpdateWithWhereUniqueWithoutTypefacesInput {
  where: DesignerWhereUniqueInput!
  data: DesignerUpdateWithoutTypefacesDataInput!
}

input DesignerUpsertWithWhereUniqueWithoutTypefacesInput {
  where: DesignerWhereUniqueInput!
  update: DesignerUpdateWithoutTypefacesDataInput!
  create: DesignerCreateWithoutTypefacesInput!
}

input DesignerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  typefaces_every: TypefaceWhereInput
  typefaces_some: TypefaceWhereInput
  typefaces_none: TypefaceWhereInput
  addedBy: UserWhereInput
  AND: [DesignerWhereInput!]
  OR: [DesignerWhereInput!]
  NOT: [DesignerWhereInput!]
}

input DesignerWhereUniqueInput {
  id: ID
  name: String
}

type File {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  filename: String!
  mimetype: String!
  encoding: String!
  url: String!
}

type FileConnection {
  pageInfo: PageInfo!
  edges: [FileEdge]!
  aggregate: AggregateFile!
}

input FileCreateInput {
  filename: String!
  mimetype: String!
  encoding: String!
  url: String!
}

input FileCreateOneInput {
  create: FileCreateInput
  connect: FileWhereUniqueInput
}

type FileEdge {
  node: File!
  cursor: String!
}

enum FileOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  filename_ASC
  filename_DESC
  mimetype_ASC
  mimetype_DESC
  encoding_ASC
  encoding_DESC
  url_ASC
  url_DESC
}

type FilePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  filename: String!
  mimetype: String!
  encoding: String!
  url: String!
}

type FileSubscriptionPayload {
  mutation: MutationType!
  node: File
  updatedFields: [String!]
  previousValues: FilePreviousValues
}

input FileSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FileWhereInput
  AND: [FileSubscriptionWhereInput!]
  OR: [FileSubscriptionWhereInput!]
  NOT: [FileSubscriptionWhereInput!]
}

input FileUpdateDataInput {
  filename: String
  mimetype: String
  encoding: String
  url: String
}

input FileUpdateInput {
  filename: String
  mimetype: String
  encoding: String
  url: String
}

input FileUpdateManyMutationInput {
  filename: String
  mimetype: String
  encoding: String
  url: String
}

input FileUpdateOneInput {
  create: FileCreateInput
  update: FileUpdateDataInput
  upsert: FileUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: FileWhereUniqueInput
}

input FileUpsertNestedInput {
  update: FileUpdateDataInput!
  create: FileCreateInput!
}

input FileWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  filename: String
  filename_not: String
  filename_in: [String!]
  filename_not_in: [String!]
  filename_lt: String
  filename_lte: String
  filename_gt: String
  filename_gte: String
  filename_contains: String
  filename_not_contains: String
  filename_starts_with: String
  filename_not_starts_with: String
  filename_ends_with: String
  filename_not_ends_with: String
  mimetype: String
  mimetype_not: String
  mimetype_in: [String!]
  mimetype_not_in: [String!]
  mimetype_lt: String
  mimetype_lte: String
  mimetype_gt: String
  mimetype_gte: String
  mimetype_contains: String
  mimetype_not_contains: String
  mimetype_starts_with: String
  mimetype_not_starts_with: String
  mimetype_ends_with: String
  mimetype_not_ends_with: String
  encoding: String
  encoding_not: String
  encoding_in: [String!]
  encoding_not_in: [String!]
  encoding_lt: String
  encoding_lte: String
  encoding_gt: String
  encoding_gte: String
  encoding_contains: String
  encoding_not_contains: String
  encoding_starts_with: String
  encoding_not_starts_with: String
  encoding_ends_with: String
  encoding_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [FileWhereInput!]
  OR: [FileWhereInput!]
  NOT: [FileWhereInput!]
}

input FileWhereUniqueInput {
  id: ID
  url: String
}

type Foundry {
  id: ID!
  name: String!
  url: String!
  typefaces(where: TypefaceWhereInput, orderBy: TypefaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Typeface!]
  addedBy: User!
}

type FoundryConnection {
  pageInfo: PageInfo!
  edges: [FoundryEdge]!
  aggregate: AggregateFoundry!
}

input FoundryCreateInput {
  name: String!
  url: String!
  typefaces: TypefaceCreateManyWithoutFoundriesInput
  addedBy: UserCreateOneInput!
}

input FoundryCreateManyWithoutTypefacesInput {
  create: [FoundryCreateWithoutTypefacesInput!]
  connect: [FoundryWhereUniqueInput!]
}

input FoundryCreateWithoutTypefacesInput {
  name: String!
  url: String!
  addedBy: UserCreateOneInput!
}

type FoundryEdge {
  node: Foundry!
  cursor: String!
}

enum FoundryOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  url_ASC
  url_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type FoundryPreviousValues {
  id: ID!
  name: String!
  url: String!
}

input FoundryScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [FoundryScalarWhereInput!]
  OR: [FoundryScalarWhereInput!]
  NOT: [FoundryScalarWhereInput!]
}

type FoundrySubscriptionPayload {
  mutation: MutationType!
  node: Foundry
  updatedFields: [String!]
  previousValues: FoundryPreviousValues
}

input FoundrySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FoundryWhereInput
  AND: [FoundrySubscriptionWhereInput!]
  OR: [FoundrySubscriptionWhereInput!]
  NOT: [FoundrySubscriptionWhereInput!]
}

input FoundryUpdateInput {
  name: String
  url: String
  typefaces: TypefaceUpdateManyWithoutFoundriesInput
  addedBy: UserUpdateOneRequiredInput
}

input FoundryUpdateManyDataInput {
  name: String
  url: String
}

input FoundryUpdateManyMutationInput {
  name: String
  url: String
}

input FoundryUpdateManyWithoutTypefacesInput {
  create: [FoundryCreateWithoutTypefacesInput!]
  delete: [FoundryWhereUniqueInput!]
  connect: [FoundryWhereUniqueInput!]
  disconnect: [FoundryWhereUniqueInput!]
  update: [FoundryUpdateWithWhereUniqueWithoutTypefacesInput!]
  upsert: [FoundryUpsertWithWhereUniqueWithoutTypefacesInput!]
  deleteMany: [FoundryScalarWhereInput!]
  updateMany: [FoundryUpdateManyWithWhereNestedInput!]
}

input FoundryUpdateManyWithWhereNestedInput {
  where: FoundryScalarWhereInput!
  data: FoundryUpdateManyDataInput!
}

input FoundryUpdateWithoutTypefacesDataInput {
  name: String
  url: String
  addedBy: UserUpdateOneRequiredInput
}

input FoundryUpdateWithWhereUniqueWithoutTypefacesInput {
  where: FoundryWhereUniqueInput!
  data: FoundryUpdateWithoutTypefacesDataInput!
}

input FoundryUpsertWithWhereUniqueWithoutTypefacesInput {
  where: FoundryWhereUniqueInput!
  update: FoundryUpdateWithoutTypefacesDataInput!
  create: FoundryCreateWithoutTypefacesInput!
}

input FoundryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  typefaces_every: TypefaceWhereInput
  typefaces_some: TypefaceWhereInput
  typefaces_none: TypefaceWhereInput
  addedBy: UserWhereInput
  AND: [FoundryWhereInput!]
  OR: [FoundryWhereInput!]
  NOT: [FoundryWhereInput!]
}

input FoundryWhereUniqueInput {
  id: ID
  name: String
}

type Images {
  id: ID!
  website: Website
  thumbnail: File
  full: File
}

type ImagesConnection {
  pageInfo: PageInfo!
  edges: [ImagesEdge]!
  aggregate: AggregateImages!
}

input ImagesCreateInput {
  website: WebsiteCreateOneWithoutImagesInput
  thumbnail: FileCreateOneInput
  full: FileCreateOneInput
}

input ImagesCreateOneWithoutWebsiteInput {
  create: ImagesCreateWithoutWebsiteInput
  connect: ImagesWhereUniqueInput
}

input ImagesCreateWithoutWebsiteInput {
  thumbnail: FileCreateOneInput
  full: FileCreateOneInput
}

type ImagesEdge {
  node: Images!
  cursor: String!
}

enum ImagesOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ImagesPreviousValues {
  id: ID!
}

type ImagesSubscriptionPayload {
  mutation: MutationType!
  node: Images
  updatedFields: [String!]
  previousValues: ImagesPreviousValues
}

input ImagesSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ImagesWhereInput
  AND: [ImagesSubscriptionWhereInput!]
  OR: [ImagesSubscriptionWhereInput!]
  NOT: [ImagesSubscriptionWhereInput!]
}

input ImagesUpdateInput {
  website: WebsiteUpdateOneWithoutImagesInput
  thumbnail: FileUpdateOneInput
  full: FileUpdateOneInput
}

input ImagesUpdateOneWithoutWebsiteInput {
  create: ImagesCreateWithoutWebsiteInput
  update: ImagesUpdateWithoutWebsiteDataInput
  upsert: ImagesUpsertWithoutWebsiteInput
  delete: Boolean
  disconnect: Boolean
  connect: ImagesWhereUniqueInput
}

input ImagesUpdateWithoutWebsiteDataInput {
  thumbnail: FileUpdateOneInput
  full: FileUpdateOneInput
}

input ImagesUpsertWithoutWebsiteInput {
  update: ImagesUpdateWithoutWebsiteDataInput!
  create: ImagesCreateWithoutWebsiteInput!
}

input ImagesWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  website: WebsiteWhereInput
  thumbnail: FileWhereInput
  full: FileWhereInput
  AND: [ImagesWhereInput!]
  OR: [ImagesWhereInput!]
  NOT: [ImagesWhereInput!]
}

input ImagesWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createDesigner(data: DesignerCreateInput!): Designer!
  updateDesigner(data: DesignerUpdateInput!, where: DesignerWhereUniqueInput!): Designer
  updateManyDesigners(data: DesignerUpdateManyMutationInput!, where: DesignerWhereInput): BatchPayload!
  upsertDesigner(where: DesignerWhereUniqueInput!, create: DesignerCreateInput!, update: DesignerUpdateInput!): Designer!
  deleteDesigner(where: DesignerWhereUniqueInput!): Designer
  deleteManyDesigners(where: DesignerWhereInput): BatchPayload!
  createFile(data: FileCreateInput!): File!
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  updateManyFiles(data: FileUpdateManyMutationInput!, where: FileWhereInput): BatchPayload!
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  deleteFile(where: FileWhereUniqueInput!): File
  deleteManyFiles(where: FileWhereInput): BatchPayload!
  createFoundry(data: FoundryCreateInput!): Foundry!
  updateFoundry(data: FoundryUpdateInput!, where: FoundryWhereUniqueInput!): Foundry
  updateManyFoundries(data: FoundryUpdateManyMutationInput!, where: FoundryWhereInput): BatchPayload!
  upsertFoundry(where: FoundryWhereUniqueInput!, create: FoundryCreateInput!, update: FoundryUpdateInput!): Foundry!
  deleteFoundry(where: FoundryWhereUniqueInput!): Foundry
  deleteManyFoundries(where: FoundryWhereInput): BatchPayload!
  createImages(data: ImagesCreateInput!): Images!
  updateImages(data: ImagesUpdateInput!, where: ImagesWhereUniqueInput!): Images
  upsertImages(where: ImagesWhereUniqueInput!, create: ImagesCreateInput!, update: ImagesUpdateInput!): Images!
  deleteImages(where: ImagesWhereUniqueInput!): Images
  deleteManyImageses(where: ImagesWhereInput): BatchPayload!
  createTag(data: TagCreateInput!): Tag!
  updateTag(data: TagUpdateInput!, where: TagWhereUniqueInput!): Tag
  updateManyTags(data: TagUpdateManyMutationInput!, where: TagWhereInput): BatchPayload!
  upsertTag(where: TagWhereUniqueInput!, create: TagCreateInput!, update: TagUpdateInput!): Tag!
  deleteTag(where: TagWhereUniqueInput!): Tag
  deleteManyTags(where: TagWhereInput): BatchPayload!
  createTypeface(data: TypefaceCreateInput!): Typeface!
  updateTypeface(data: TypefaceUpdateInput!, where: TypefaceWhereUniqueInput!): Typeface
  updateManyTypefaces(data: TypefaceUpdateManyMutationInput!, where: TypefaceWhereInput): BatchPayload!
  upsertTypeface(where: TypefaceWhereUniqueInput!, create: TypefaceCreateInput!, update: TypefaceUpdateInput!): Typeface!
  deleteTypeface(where: TypefaceWhereUniqueInput!): Typeface
  deleteManyTypefaces(where: TypefaceWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createWebsite(data: WebsiteCreateInput!): Website!
  updateWebsite(data: WebsiteUpdateInput!, where: WebsiteWhereUniqueInput!): Website
  updateManyWebsites(data: WebsiteUpdateManyMutationInput!, where: WebsiteWhereInput): BatchPayload!
  upsertWebsite(where: WebsiteWhereUniqueInput!, create: WebsiteCreateInput!, update: WebsiteUpdateInput!): Website!
  deleteWebsite(where: WebsiteWhereUniqueInput!): Website
  deleteManyWebsites(where: WebsiteWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  designer(where: DesignerWhereUniqueInput!): Designer
  designers(where: DesignerWhereInput, orderBy: DesignerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Designer]!
  designersConnection(where: DesignerWhereInput, orderBy: DesignerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DesignerConnection!
  file(where: FileWhereUniqueInput!): File
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!
  foundry(where: FoundryWhereUniqueInput!): Foundry
  foundries(where: FoundryWhereInput, orderBy: FoundryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Foundry]!
  foundriesConnection(where: FoundryWhereInput, orderBy: FoundryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FoundryConnection!
  images(where: ImagesWhereUniqueInput!): Images
  imageses(where: ImagesWhereInput, orderBy: ImagesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Images]!
  imagesesConnection(where: ImagesWhereInput, orderBy: ImagesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ImagesConnection!
  tag(where: TagWhereUniqueInput!): Tag
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag]!
  tagsConnection(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TagConnection!
  typeface(where: TypefaceWhereUniqueInput!): Typeface
  typefaces(where: TypefaceWhereInput, orderBy: TypefaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Typeface]!
  typefacesConnection(where: TypefaceWhereInput, orderBy: TypefaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TypefaceConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  website(where: WebsiteWhereUniqueInput!): Website
  websites(where: WebsiteWhereInput, orderBy: WebsiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Website]!
  websitesConnection(where: WebsiteWhereInput, orderBy: WebsiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WebsiteConnection!
  node(id: ID!): Node
}

enum Role {
  ADMIN
  SUBSCRIBER
}

type Subscription {
  designer(where: DesignerSubscriptionWhereInput): DesignerSubscriptionPayload
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
  foundry(where: FoundrySubscriptionWhereInput): FoundrySubscriptionPayload
  images(where: ImagesSubscriptionWhereInput): ImagesSubscriptionPayload
  tag(where: TagSubscriptionWhereInput): TagSubscriptionPayload
  typeface(where: TypefaceSubscriptionWhereInput): TypefaceSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  website(where: WebsiteSubscriptionWhereInput): WebsiteSubscriptionPayload
}

type Tag {
  id: ID!
  name: String!
  website(where: WebsiteWhereInput, orderBy: WebsiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Website!]
}

type TagConnection {
  pageInfo: PageInfo!
  edges: [TagEdge]!
  aggregate: AggregateTag!
}

input TagCreateInput {
  name: String!
  website: WebsiteCreateManyWithoutTagsInput
}

input TagCreateManyWithoutWebsiteInput {
  create: [TagCreateWithoutWebsiteInput!]
  connect: [TagWhereUniqueInput!]
}

input TagCreateWithoutWebsiteInput {
  name: String!
}

type TagEdge {
  node: Tag!
  cursor: String!
}

enum TagOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TagPreviousValues {
  id: ID!
  name: String!
}

input TagScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [TagScalarWhereInput!]
  OR: [TagScalarWhereInput!]
  NOT: [TagScalarWhereInput!]
}

type TagSubscriptionPayload {
  mutation: MutationType!
  node: Tag
  updatedFields: [String!]
  previousValues: TagPreviousValues
}

input TagSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TagWhereInput
  AND: [TagSubscriptionWhereInput!]
  OR: [TagSubscriptionWhereInput!]
  NOT: [TagSubscriptionWhereInput!]
}

input TagUpdateInput {
  name: String
  website: WebsiteUpdateManyWithoutTagsInput
}

input TagUpdateManyDataInput {
  name: String
}

input TagUpdateManyMutationInput {
  name: String
}

input TagUpdateManyWithoutWebsiteInput {
  create: [TagCreateWithoutWebsiteInput!]
  delete: [TagWhereUniqueInput!]
  connect: [TagWhereUniqueInput!]
  disconnect: [TagWhereUniqueInput!]
  update: [TagUpdateWithWhereUniqueWithoutWebsiteInput!]
  upsert: [TagUpsertWithWhereUniqueWithoutWebsiteInput!]
  deleteMany: [TagScalarWhereInput!]
  updateMany: [TagUpdateManyWithWhereNestedInput!]
}

input TagUpdateManyWithWhereNestedInput {
  where: TagScalarWhereInput!
  data: TagUpdateManyDataInput!
}

input TagUpdateWithoutWebsiteDataInput {
  name: String
}

input TagUpdateWithWhereUniqueWithoutWebsiteInput {
  where: TagWhereUniqueInput!
  data: TagUpdateWithoutWebsiteDataInput!
}

input TagUpsertWithWhereUniqueWithoutWebsiteInput {
  where: TagWhereUniqueInput!
  update: TagUpdateWithoutWebsiteDataInput!
  create: TagCreateWithoutWebsiteInput!
}

input TagWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  website_every: WebsiteWhereInput
  website_some: WebsiteWhereInput
  website_none: WebsiteWhereInput
  AND: [TagWhereInput!]
  OR: [TagWhereInput!]
  NOT: [TagWhereInput!]
}

input TagWhereUniqueInput {
  id: ID
}

type Typeface {
  id: ID!
  name: String!
  downloadUrl: String!
  description: String
  slug: String!
  usedBy(where: WebsiteWhereInput, orderBy: WebsiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Website!]
  addedBy: User!
  foundries(where: FoundryWhereInput, orderBy: FoundryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Foundry!]
  designers(where: DesignerWhereInput, orderBy: DesignerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Designer!]
}

type TypefaceConnection {
  pageInfo: PageInfo!
  edges: [TypefaceEdge]!
  aggregate: AggregateTypeface!
}

input TypefaceCreateInput {
  name: String!
  downloadUrl: String!
  description: String
  slug: String!
  usedBy: WebsiteCreateManyWithoutTypefacesInput
  addedBy: UserCreateOneWithoutTypefacesInput!
  foundries: FoundryCreateManyWithoutTypefacesInput
  designers: DesignerCreateManyWithoutTypefacesInput
}

input TypefaceCreateManyWithoutAddedByInput {
  create: [TypefaceCreateWithoutAddedByInput!]
  connect: [TypefaceWhereUniqueInput!]
}

input TypefaceCreateManyWithoutDesignersInput {
  create: [TypefaceCreateWithoutDesignersInput!]
  connect: [TypefaceWhereUniqueInput!]
}

input TypefaceCreateManyWithoutFoundriesInput {
  create: [TypefaceCreateWithoutFoundriesInput!]
  connect: [TypefaceWhereUniqueInput!]
}

input TypefaceCreateManyWithoutUsedByInput {
  create: [TypefaceCreateWithoutUsedByInput!]
  connect: [TypefaceWhereUniqueInput!]
}

input TypefaceCreateWithoutAddedByInput {
  name: String!
  downloadUrl: String!
  description: String
  slug: String!
  usedBy: WebsiteCreateManyWithoutTypefacesInput
  foundries: FoundryCreateManyWithoutTypefacesInput
  designers: DesignerCreateManyWithoutTypefacesInput
}

input TypefaceCreateWithoutDesignersInput {
  name: String!
  downloadUrl: String!
  description: String
  slug: String!
  usedBy: WebsiteCreateManyWithoutTypefacesInput
  addedBy: UserCreateOneWithoutTypefacesInput!
  foundries: FoundryCreateManyWithoutTypefacesInput
}

input TypefaceCreateWithoutFoundriesInput {
  name: String!
  downloadUrl: String!
  description: String
  slug: String!
  usedBy: WebsiteCreateManyWithoutTypefacesInput
  addedBy: UserCreateOneWithoutTypefacesInput!
  designers: DesignerCreateManyWithoutTypefacesInput
}

input TypefaceCreateWithoutUsedByInput {
  name: String!
  downloadUrl: String!
  description: String
  slug: String!
  addedBy: UserCreateOneWithoutTypefacesInput!
  foundries: FoundryCreateManyWithoutTypefacesInput
  designers: DesignerCreateManyWithoutTypefacesInput
}

type TypefaceEdge {
  node: Typeface!
  cursor: String!
}

enum TypefaceOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  downloadUrl_ASC
  downloadUrl_DESC
  description_ASC
  description_DESC
  slug_ASC
  slug_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TypefacePreviousValues {
  id: ID!
  name: String!
  downloadUrl: String!
  description: String
  slug: String!
}

input TypefaceScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  downloadUrl: String
  downloadUrl_not: String
  downloadUrl_in: [String!]
  downloadUrl_not_in: [String!]
  downloadUrl_lt: String
  downloadUrl_lte: String
  downloadUrl_gt: String
  downloadUrl_gte: String
  downloadUrl_contains: String
  downloadUrl_not_contains: String
  downloadUrl_starts_with: String
  downloadUrl_not_starts_with: String
  downloadUrl_ends_with: String
  downloadUrl_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  AND: [TypefaceScalarWhereInput!]
  OR: [TypefaceScalarWhereInput!]
  NOT: [TypefaceScalarWhereInput!]
}

type TypefaceSubscriptionPayload {
  mutation: MutationType!
  node: Typeface
  updatedFields: [String!]
  previousValues: TypefacePreviousValues
}

input TypefaceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TypefaceWhereInput
  AND: [TypefaceSubscriptionWhereInput!]
  OR: [TypefaceSubscriptionWhereInput!]
  NOT: [TypefaceSubscriptionWhereInput!]
}

input TypefaceUpdateInput {
  name: String
  downloadUrl: String
  description: String
  slug: String
  usedBy: WebsiteUpdateManyWithoutTypefacesInput
  addedBy: UserUpdateOneRequiredWithoutTypefacesInput
  foundries: FoundryUpdateManyWithoutTypefacesInput
  designers: DesignerUpdateManyWithoutTypefacesInput
}

input TypefaceUpdateManyDataInput {
  name: String
  downloadUrl: String
  description: String
  slug: String
}

input TypefaceUpdateManyMutationInput {
  name: String
  downloadUrl: String
  description: String
  slug: String
}

input TypefaceUpdateManyWithoutAddedByInput {
  create: [TypefaceCreateWithoutAddedByInput!]
  delete: [TypefaceWhereUniqueInput!]
  connect: [TypefaceWhereUniqueInput!]
  disconnect: [TypefaceWhereUniqueInput!]
  update: [TypefaceUpdateWithWhereUniqueWithoutAddedByInput!]
  upsert: [TypefaceUpsertWithWhereUniqueWithoutAddedByInput!]
  deleteMany: [TypefaceScalarWhereInput!]
  updateMany: [TypefaceUpdateManyWithWhereNestedInput!]
}

input TypefaceUpdateManyWithoutDesignersInput {
  create: [TypefaceCreateWithoutDesignersInput!]
  delete: [TypefaceWhereUniqueInput!]
  connect: [TypefaceWhereUniqueInput!]
  disconnect: [TypefaceWhereUniqueInput!]
  update: [TypefaceUpdateWithWhereUniqueWithoutDesignersInput!]
  upsert: [TypefaceUpsertWithWhereUniqueWithoutDesignersInput!]
  deleteMany: [TypefaceScalarWhereInput!]
  updateMany: [TypefaceUpdateManyWithWhereNestedInput!]
}

input TypefaceUpdateManyWithoutFoundriesInput {
  create: [TypefaceCreateWithoutFoundriesInput!]
  delete: [TypefaceWhereUniqueInput!]
  connect: [TypefaceWhereUniqueInput!]
  disconnect: [TypefaceWhereUniqueInput!]
  update: [TypefaceUpdateWithWhereUniqueWithoutFoundriesInput!]
  upsert: [TypefaceUpsertWithWhereUniqueWithoutFoundriesInput!]
  deleteMany: [TypefaceScalarWhereInput!]
  updateMany: [TypefaceUpdateManyWithWhereNestedInput!]
}

input TypefaceUpdateManyWithoutUsedByInput {
  create: [TypefaceCreateWithoutUsedByInput!]
  delete: [TypefaceWhereUniqueInput!]
  connect: [TypefaceWhereUniqueInput!]
  disconnect: [TypefaceWhereUniqueInput!]
  update: [TypefaceUpdateWithWhereUniqueWithoutUsedByInput!]
  upsert: [TypefaceUpsertWithWhereUniqueWithoutUsedByInput!]
  deleteMany: [TypefaceScalarWhereInput!]
  updateMany: [TypefaceUpdateManyWithWhereNestedInput!]
}

input TypefaceUpdateManyWithWhereNestedInput {
  where: TypefaceScalarWhereInput!
  data: TypefaceUpdateManyDataInput!
}

input TypefaceUpdateWithoutAddedByDataInput {
  name: String
  downloadUrl: String
  description: String
  slug: String
  usedBy: WebsiteUpdateManyWithoutTypefacesInput
  foundries: FoundryUpdateManyWithoutTypefacesInput
  designers: DesignerUpdateManyWithoutTypefacesInput
}

input TypefaceUpdateWithoutDesignersDataInput {
  name: String
  downloadUrl: String
  description: String
  slug: String
  usedBy: WebsiteUpdateManyWithoutTypefacesInput
  addedBy: UserUpdateOneRequiredWithoutTypefacesInput
  foundries: FoundryUpdateManyWithoutTypefacesInput
}

input TypefaceUpdateWithoutFoundriesDataInput {
  name: String
  downloadUrl: String
  description: String
  slug: String
  usedBy: WebsiteUpdateManyWithoutTypefacesInput
  addedBy: UserUpdateOneRequiredWithoutTypefacesInput
  designers: DesignerUpdateManyWithoutTypefacesInput
}

input TypefaceUpdateWithoutUsedByDataInput {
  name: String
  downloadUrl: String
  description: String
  slug: String
  addedBy: UserUpdateOneRequiredWithoutTypefacesInput
  foundries: FoundryUpdateManyWithoutTypefacesInput
  designers: DesignerUpdateManyWithoutTypefacesInput
}

input TypefaceUpdateWithWhereUniqueWithoutAddedByInput {
  where: TypefaceWhereUniqueInput!
  data: TypefaceUpdateWithoutAddedByDataInput!
}

input TypefaceUpdateWithWhereUniqueWithoutDesignersInput {
  where: TypefaceWhereUniqueInput!
  data: TypefaceUpdateWithoutDesignersDataInput!
}

input TypefaceUpdateWithWhereUniqueWithoutFoundriesInput {
  where: TypefaceWhereUniqueInput!
  data: TypefaceUpdateWithoutFoundriesDataInput!
}

input TypefaceUpdateWithWhereUniqueWithoutUsedByInput {
  where: TypefaceWhereUniqueInput!
  data: TypefaceUpdateWithoutUsedByDataInput!
}

input TypefaceUpsertWithWhereUniqueWithoutAddedByInput {
  where: TypefaceWhereUniqueInput!
  update: TypefaceUpdateWithoutAddedByDataInput!
  create: TypefaceCreateWithoutAddedByInput!
}

input TypefaceUpsertWithWhereUniqueWithoutDesignersInput {
  where: TypefaceWhereUniqueInput!
  update: TypefaceUpdateWithoutDesignersDataInput!
  create: TypefaceCreateWithoutDesignersInput!
}

input TypefaceUpsertWithWhereUniqueWithoutFoundriesInput {
  where: TypefaceWhereUniqueInput!
  update: TypefaceUpdateWithoutFoundriesDataInput!
  create: TypefaceCreateWithoutFoundriesInput!
}

input TypefaceUpsertWithWhereUniqueWithoutUsedByInput {
  where: TypefaceWhereUniqueInput!
  update: TypefaceUpdateWithoutUsedByDataInput!
  create: TypefaceCreateWithoutUsedByInput!
}

input TypefaceWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  downloadUrl: String
  downloadUrl_not: String
  downloadUrl_in: [String!]
  downloadUrl_not_in: [String!]
  downloadUrl_lt: String
  downloadUrl_lte: String
  downloadUrl_gt: String
  downloadUrl_gte: String
  downloadUrl_contains: String
  downloadUrl_not_contains: String
  downloadUrl_starts_with: String
  downloadUrl_not_starts_with: String
  downloadUrl_ends_with: String
  downloadUrl_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  usedBy_every: WebsiteWhereInput
  usedBy_some: WebsiteWhereInput
  usedBy_none: WebsiteWhereInput
  addedBy: UserWhereInput
  foundries_every: FoundryWhereInput
  foundries_some: FoundryWhereInput
  foundries_none: FoundryWhereInput
  designers_every: DesignerWhereInput
  designers_some: DesignerWhereInput
  designers_none: DesignerWhereInput
  AND: [TypefaceWhereInput!]
  OR: [TypefaceWhereInput!]
  NOT: [TypefaceWhereInput!]
}

input TypefaceWhereUniqueInput {
  id: ID
  name: String
  slug: String
}

type User {
  id: ID!
  email: String!
  password: String!
  name: String!
  role: Role!
  websites(where: WebsiteWhereInput, orderBy: WebsiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Website!]
  typefaces(where: TypefaceWhereInput, orderBy: TypefaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Typeface!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  role: Role
  websites: WebsiteCreateManyWithoutAddedByInput
  typefaces: TypefaceCreateManyWithoutAddedByInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutTypefacesInput {
  create: UserCreateWithoutTypefacesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutWebsitesInput {
  create: UserCreateWithoutWebsitesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutTypefacesInput {
  email: String!
  password: String!
  name: String!
  role: Role
  websites: WebsiteCreateManyWithoutAddedByInput
}

input UserCreateWithoutWebsitesInput {
  email: String!
  password: String!
  name: String!
  role: Role
  typefaces: TypefaceCreateManyWithoutAddedByInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  role_ASC
  role_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
  role: Role!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  email: String
  password: String
  name: String
  role: Role
  websites: WebsiteUpdateManyWithoutAddedByInput
  typefaces: TypefaceUpdateManyWithoutAddedByInput
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  role: Role
  websites: WebsiteUpdateManyWithoutAddedByInput
  typefaces: TypefaceUpdateManyWithoutAddedByInput
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  name: String
  role: Role
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutTypefacesInput {
  create: UserCreateWithoutTypefacesInput
  update: UserUpdateWithoutTypefacesDataInput
  upsert: UserUpsertWithoutTypefacesInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutWebsitesInput {
  create: UserCreateWithoutWebsitesInput
  update: UserUpdateWithoutWebsitesDataInput
  upsert: UserUpsertWithoutWebsitesInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutTypefacesDataInput {
  email: String
  password: String
  name: String
  role: Role
  websites: WebsiteUpdateManyWithoutAddedByInput
}

input UserUpdateWithoutWebsitesDataInput {
  email: String
  password: String
  name: String
  role: Role
  typefaces: TypefaceUpdateManyWithoutAddedByInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutTypefacesInput {
  update: UserUpdateWithoutTypefacesDataInput!
  create: UserCreateWithoutTypefacesInput!
}

input UserUpsertWithoutWebsitesInput {
  update: UserUpdateWithoutWebsitesDataInput!
  create: UserCreateWithoutWebsitesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  role: Role
  role_not: Role
  role_in: [Role!]
  role_not_in: [Role!]
  websites_every: WebsiteWhereInput
  websites_some: WebsiteWhereInput
  websites_none: WebsiteWhereInput
  typefaces_every: TypefaceWhereInput
  typefaces_some: TypefaceWhereInput
  typefaces_none: TypefaceWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Website {
  id: ID!
  createdAt: DateTime!
  isPublished: Boolean!
  title: String!
  images: Images
  slug: String
  url: String!
  addedBy: User!
  typefaces(where: TypefaceWhereInput, orderBy: TypefaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Typeface!]
  featured: Boolean!
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
}

type WebsiteConnection {
  pageInfo: PageInfo!
  edges: [WebsiteEdge]!
  aggregate: AggregateWebsite!
}

input WebsiteCreateInput {
  isPublished: Boolean
  title: String!
  images: ImagesCreateOneWithoutWebsiteInput
  slug: String
  url: String!
  addedBy: UserCreateOneWithoutWebsitesInput!
  typefaces: TypefaceCreateManyWithoutUsedByInput
  featured: Boolean
  tags: TagCreateManyWithoutWebsiteInput
}

input WebsiteCreateManyWithoutAddedByInput {
  create: [WebsiteCreateWithoutAddedByInput!]
  connect: [WebsiteWhereUniqueInput!]
}

input WebsiteCreateManyWithoutTagsInput {
  create: [WebsiteCreateWithoutTagsInput!]
  connect: [WebsiteWhereUniqueInput!]
}

input WebsiteCreateManyWithoutTypefacesInput {
  create: [WebsiteCreateWithoutTypefacesInput!]
  connect: [WebsiteWhereUniqueInput!]
}

input WebsiteCreateOneWithoutImagesInput {
  create: WebsiteCreateWithoutImagesInput
  connect: WebsiteWhereUniqueInput
}

input WebsiteCreateWithoutAddedByInput {
  isPublished: Boolean
  title: String!
  images: ImagesCreateOneWithoutWebsiteInput
  slug: String
  url: String!
  typefaces: TypefaceCreateManyWithoutUsedByInput
  featured: Boolean
  tags: TagCreateManyWithoutWebsiteInput
}

input WebsiteCreateWithoutImagesInput {
  isPublished: Boolean
  title: String!
  slug: String
  url: String!
  addedBy: UserCreateOneWithoutWebsitesInput!
  typefaces: TypefaceCreateManyWithoutUsedByInput
  featured: Boolean
  tags: TagCreateManyWithoutWebsiteInput
}

input WebsiteCreateWithoutTagsInput {
  isPublished: Boolean
  title: String!
  images: ImagesCreateOneWithoutWebsiteInput
  slug: String
  url: String!
  addedBy: UserCreateOneWithoutWebsitesInput!
  typefaces: TypefaceCreateManyWithoutUsedByInput
  featured: Boolean
}

input WebsiteCreateWithoutTypefacesInput {
  isPublished: Boolean
  title: String!
  images: ImagesCreateOneWithoutWebsiteInput
  slug: String
  url: String!
  addedBy: UserCreateOneWithoutWebsitesInput!
  featured: Boolean
  tags: TagCreateManyWithoutWebsiteInput
}

type WebsiteEdge {
  node: Website!
  cursor: String!
}

enum WebsiteOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  isPublished_ASC
  isPublished_DESC
  title_ASC
  title_DESC
  slug_ASC
  slug_DESC
  url_ASC
  url_DESC
  featured_ASC
  featured_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type WebsitePreviousValues {
  id: ID!
  createdAt: DateTime!
  isPublished: Boolean!
  title: String!
  slug: String
  url: String!
  featured: Boolean!
}

input WebsiteScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  isPublished: Boolean
  isPublished_not: Boolean
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  featured: Boolean
  featured_not: Boolean
  AND: [WebsiteScalarWhereInput!]
  OR: [WebsiteScalarWhereInput!]
  NOT: [WebsiteScalarWhereInput!]
}

type WebsiteSubscriptionPayload {
  mutation: MutationType!
  node: Website
  updatedFields: [String!]
  previousValues: WebsitePreviousValues
}

input WebsiteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: WebsiteWhereInput
  AND: [WebsiteSubscriptionWhereInput!]
  OR: [WebsiteSubscriptionWhereInput!]
  NOT: [WebsiteSubscriptionWhereInput!]
}

input WebsiteUpdateInput {
  isPublished: Boolean
  title: String
  images: ImagesUpdateOneWithoutWebsiteInput
  slug: String
  url: String
  addedBy: UserUpdateOneRequiredWithoutWebsitesInput
  typefaces: TypefaceUpdateManyWithoutUsedByInput
  featured: Boolean
  tags: TagUpdateManyWithoutWebsiteInput
}

input WebsiteUpdateManyDataInput {
  isPublished: Boolean
  title: String
  slug: String
  url: String
  featured: Boolean
}

input WebsiteUpdateManyMutationInput {
  isPublished: Boolean
  title: String
  slug: String
  url: String
  featured: Boolean
}

input WebsiteUpdateManyWithoutAddedByInput {
  create: [WebsiteCreateWithoutAddedByInput!]
  delete: [WebsiteWhereUniqueInput!]
  connect: [WebsiteWhereUniqueInput!]
  disconnect: [WebsiteWhereUniqueInput!]
  update: [WebsiteUpdateWithWhereUniqueWithoutAddedByInput!]
  upsert: [WebsiteUpsertWithWhereUniqueWithoutAddedByInput!]
  deleteMany: [WebsiteScalarWhereInput!]
  updateMany: [WebsiteUpdateManyWithWhereNestedInput!]
}

input WebsiteUpdateManyWithoutTagsInput {
  create: [WebsiteCreateWithoutTagsInput!]
  delete: [WebsiteWhereUniqueInput!]
  connect: [WebsiteWhereUniqueInput!]
  disconnect: [WebsiteWhereUniqueInput!]
  update: [WebsiteUpdateWithWhereUniqueWithoutTagsInput!]
  upsert: [WebsiteUpsertWithWhereUniqueWithoutTagsInput!]
  deleteMany: [WebsiteScalarWhereInput!]
  updateMany: [WebsiteUpdateManyWithWhereNestedInput!]
}

input WebsiteUpdateManyWithoutTypefacesInput {
  create: [WebsiteCreateWithoutTypefacesInput!]
  delete: [WebsiteWhereUniqueInput!]
  connect: [WebsiteWhereUniqueInput!]
  disconnect: [WebsiteWhereUniqueInput!]
  update: [WebsiteUpdateWithWhereUniqueWithoutTypefacesInput!]
  upsert: [WebsiteUpsertWithWhereUniqueWithoutTypefacesInput!]
  deleteMany: [WebsiteScalarWhereInput!]
  updateMany: [WebsiteUpdateManyWithWhereNestedInput!]
}

input WebsiteUpdateManyWithWhereNestedInput {
  where: WebsiteScalarWhereInput!
  data: WebsiteUpdateManyDataInput!
}

input WebsiteUpdateOneWithoutImagesInput {
  create: WebsiteCreateWithoutImagesInput
  update: WebsiteUpdateWithoutImagesDataInput
  upsert: WebsiteUpsertWithoutImagesInput
  delete: Boolean
  disconnect: Boolean
  connect: WebsiteWhereUniqueInput
}

input WebsiteUpdateWithoutAddedByDataInput {
  isPublished: Boolean
  title: String
  images: ImagesUpdateOneWithoutWebsiteInput
  slug: String
  url: String
  typefaces: TypefaceUpdateManyWithoutUsedByInput
  featured: Boolean
  tags: TagUpdateManyWithoutWebsiteInput
}

input WebsiteUpdateWithoutImagesDataInput {
  isPublished: Boolean
  title: String
  slug: String
  url: String
  addedBy: UserUpdateOneRequiredWithoutWebsitesInput
  typefaces: TypefaceUpdateManyWithoutUsedByInput
  featured: Boolean
  tags: TagUpdateManyWithoutWebsiteInput
}

input WebsiteUpdateWithoutTagsDataInput {
  isPublished: Boolean
  title: String
  images: ImagesUpdateOneWithoutWebsiteInput
  slug: String
  url: String
  addedBy: UserUpdateOneRequiredWithoutWebsitesInput
  typefaces: TypefaceUpdateManyWithoutUsedByInput
  featured: Boolean
}

input WebsiteUpdateWithoutTypefacesDataInput {
  isPublished: Boolean
  title: String
  images: ImagesUpdateOneWithoutWebsiteInput
  slug: String
  url: String
  addedBy: UserUpdateOneRequiredWithoutWebsitesInput
  featured: Boolean
  tags: TagUpdateManyWithoutWebsiteInput
}

input WebsiteUpdateWithWhereUniqueWithoutAddedByInput {
  where: WebsiteWhereUniqueInput!
  data: WebsiteUpdateWithoutAddedByDataInput!
}

input WebsiteUpdateWithWhereUniqueWithoutTagsInput {
  where: WebsiteWhereUniqueInput!
  data: WebsiteUpdateWithoutTagsDataInput!
}

input WebsiteUpdateWithWhereUniqueWithoutTypefacesInput {
  where: WebsiteWhereUniqueInput!
  data: WebsiteUpdateWithoutTypefacesDataInput!
}

input WebsiteUpsertWithoutImagesInput {
  update: WebsiteUpdateWithoutImagesDataInput!
  create: WebsiteCreateWithoutImagesInput!
}

input WebsiteUpsertWithWhereUniqueWithoutAddedByInput {
  where: WebsiteWhereUniqueInput!
  update: WebsiteUpdateWithoutAddedByDataInput!
  create: WebsiteCreateWithoutAddedByInput!
}

input WebsiteUpsertWithWhereUniqueWithoutTagsInput {
  where: WebsiteWhereUniqueInput!
  update: WebsiteUpdateWithoutTagsDataInput!
  create: WebsiteCreateWithoutTagsInput!
}

input WebsiteUpsertWithWhereUniqueWithoutTypefacesInput {
  where: WebsiteWhereUniqueInput!
  update: WebsiteUpdateWithoutTypefacesDataInput!
  create: WebsiteCreateWithoutTypefacesInput!
}

input WebsiteWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  isPublished: Boolean
  isPublished_not: Boolean
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  images: ImagesWhereInput
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  addedBy: UserWhereInput
  typefaces_every: TypefaceWhereInput
  typefaces_some: TypefaceWhereInput
  typefaces_none: TypefaceWhereInput
  featured: Boolean
  featured_not: Boolean
  tags_every: TagWhereInput
  tags_some: TagWhereInput
  tags_none: TagWhereInput
  AND: [WebsiteWhereInput!]
  OR: [WebsiteWhereInput!]
  NOT: [WebsiteWhereInput!]
}

input WebsiteWhereUniqueInput {
  id: ID
  title: String
  slug: String
}
`