import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    websites: <T = Website[]>(args: { where?: WebsiteWhereInput, orderBy?: WebsiteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    designers: <T = Designer[]>(args: { where?: DesignerWhereInput, orderBy?: DesignerOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    typefaces: <T = Typeface[]>(args: { where?: TypefaceWhereInput, orderBy?: TypefaceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    foundries: <T = Foundry[]>(args: { where?: FoundryWhereInput, orderBy?: FoundryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    files: <T = File[]>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    imageses: <T = Images[]>(args: { where?: ImagesWhereInput, orderBy?: ImagesOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    website: <T = Website>(args: { where: WebsiteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    designer: <T = Designer>(args: { where: DesignerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    typeface: <T = Typeface>(args: { where: TypefaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    foundry: <T = Foundry>(args: { where: FoundryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    file: <T = File>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    user: <T = User>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    websitesConnection: <T = WebsiteConnection>(args: { where?: WebsiteWhereInput, orderBy?: WebsiteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    designersConnection: <T = DesignerConnection>(args: { where?: DesignerWhereInput, orderBy?: DesignerOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    typefacesConnection: <T = TypefaceConnection>(args: { where?: TypefaceWhereInput, orderBy?: TypefaceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    foundriesConnection: <T = FoundryConnection>(args: { where?: FoundryWhereInput, orderBy?: FoundryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    filesConnection: <T = FileConnection>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    imagesesConnection: <T = ImagesConnection>(args: { where?: ImagesWhereInput, orderBy?: ImagesOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createWebsite: <T = Website>(args: { data: WebsiteCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createDesigner: <T = Designer>(args: { data: DesignerCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTypeface: <T = Typeface>(args: { data: TypefaceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFoundry: <T = Foundry>(args: { data: FoundryCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFile: <T = File>(args: { data: FileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createImages: <T = Images>(args: { data: ImagesCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateWebsite: <T = Website>(args: { data: WebsiteUpdateInput, where: WebsiteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateDesigner: <T = Designer>(args: { data: DesignerUpdateInput, where: DesignerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateTypeface: <T = Typeface>(args: { data: TypefaceUpdateInput, where: TypefaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateFoundry: <T = Foundry>(args: { data: FoundryUpdateInput, where: FoundryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateFile: <T = File>(args: { data: FileUpdateInput, where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateUser: <T = User>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteWebsite: <T = Website>(args: { where: WebsiteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteDesigner: <T = Designer>(args: { where: DesignerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteTypeface: <T = Typeface>(args: { where: TypefaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteFoundry: <T = Foundry>(args: { where: FoundryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteFile: <T = File>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertWebsite: <T = Website>(args: { where: WebsiteWhereUniqueInput, create: WebsiteCreateInput, update: WebsiteUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertDesigner: <T = Designer>(args: { where: DesignerWhereUniqueInput, create: DesignerCreateInput, update: DesignerUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTypeface: <T = Typeface>(args: { where: TypefaceWhereUniqueInput, create: TypefaceCreateInput, update: TypefaceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFoundry: <T = Foundry>(args: { where: FoundryWhereUniqueInput, create: FoundryCreateInput, update: FoundryUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFile: <T = File>(args: { where: FileWhereUniqueInput, create: FileCreateInput, update: FileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyWebsites: <T = BatchPayload>(args: { data: WebsiteUpdateManyMutationInput, where?: WebsiteWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyDesigners: <T = BatchPayload>(args: { data: DesignerUpdateManyMutationInput, where?: DesignerWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTypefaces: <T = BatchPayload>(args: { data: TypefaceUpdateManyMutationInput, where?: TypefaceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFoundries: <T = BatchPayload>(args: { data: FoundryUpdateManyMutationInput, where?: FoundryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFiles: <T = BatchPayload>(args: { data: FileUpdateManyMutationInput, where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyWebsites: <T = BatchPayload>(args: { where?: WebsiteWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyDesigners: <T = BatchPayload>(args: { where?: DesignerWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTypefaces: <T = BatchPayload>(args: { where?: TypefaceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFoundries: <T = BatchPayload>(args: { where?: FoundryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFiles: <T = BatchPayload>(args: { where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyImageses: <T = BatchPayload>(args: { where?: ImagesWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    website: <T = WebsiteSubscriptionPayload>(args: { where?: WebsiteSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    designer: <T = DesignerSubscriptionPayload>(args: { where?: DesignerSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    typeface: <T = TypefaceSubscriptionPayload>(args: { where?: TypefaceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    foundry: <T = FoundrySubscriptionPayload>(args: { where?: FoundrySubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    file: <T = FileSubscriptionPayload>(args: { where?: FileSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    user: <T = UserSubscriptionPayload>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    images: <T = ImagesSubscriptionPayload>(args: { where?: ImagesSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  Website: (where?: WebsiteWhereInput) => Promise<boolean>
  Designer: (where?: DesignerWhereInput) => Promise<boolean>
  Typeface: (where?: TypefaceWhereInput) => Promise<boolean>
  Foundry: (where?: FoundryWhereInput) => Promise<boolean>
  File: (where?: FileWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  Images: (where?: ImagesWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateDesigner {
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
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

type Designer implements Node {
  id: ID!
  name: String!
  url: String!
  typefaces(where: TypefaceWhereInput, orderBy: TypefaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Typeface!]
  addedBy: User!
}

"""A connection to a list of items."""
type DesignerConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type DesignerEdge {
  """The item at the end of the edge."""
  node: Designer!

  """A cursor for use in pagination."""
  cursor: String!
}

enum DesignerOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  url_ASC
  url_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type DesignerPreviousValues {
  id: ID!
  name: String!
  url: String!
}

input DesignerScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [DesignerScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [DesignerScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DesignerScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
}

type DesignerSubscriptionPayload {
  mutation: MutationType!
  node: Designer
  updatedFields: [String!]
  previousValues: DesignerPreviousValues
}

input DesignerSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [DesignerSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [DesignerSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DesignerSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: DesignerWhereInput
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
  connect: [DesignerWhereUniqueInput!]
  disconnect: [DesignerWhereUniqueInput!]
  delete: [DesignerWhereUniqueInput!]
  update: [DesignerUpdateWithWhereUniqueWithoutTypefacesInput!]
  updateMany: [DesignerUpdateManyWithWhereNestedInput!]
  deleteMany: [DesignerScalarWhereInput!]
  upsert: [DesignerUpsertWithWhereUniqueWithoutTypefacesInput!]
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
  """Logical AND on all given filters."""
  AND: [DesignerWhereInput!]

  """Logical OR on all given filters."""
  OR: [DesignerWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DesignerWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  typefaces_every: TypefaceWhereInput
  typefaces_some: TypefaceWhereInput
  typefaces_none: TypefaceWhereInput
  addedBy: UserWhereInput
}

input DesignerWhereUniqueInput {
  id: ID
  name: String
}

type File implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  filename: String!
  mimetype: String!
  encoding: String!
  url: String!
}

"""A connection to a list of items."""
type FileConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type FileEdge {
  """The item at the end of the edge."""
  node: File!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [FileSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: FileWhereInput
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
  connect: FileWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: FileUpdateDataInput
  upsert: FileUpsertNestedInput
}

input FileUpsertNestedInput {
  update: FileUpdateDataInput!
  create: FileCreateInput!
}

input FileWhereInput {
  """Logical AND on all given filters."""
  AND: [FileWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  filename: String

  """All values that are not equal to given value."""
  filename_not: String

  """All values that are contained in given list."""
  filename_in: [String!]

  """All values that are not contained in given list."""
  filename_not_in: [String!]

  """All values less than the given value."""
  filename_lt: String

  """All values less than or equal the given value."""
  filename_lte: String

  """All values greater than the given value."""
  filename_gt: String

  """All values greater than or equal the given value."""
  filename_gte: String

  """All values containing the given string."""
  filename_contains: String

  """All values not containing the given string."""
  filename_not_contains: String

  """All values starting with the given string."""
  filename_starts_with: String

  """All values not starting with the given string."""
  filename_not_starts_with: String

  """All values ending with the given string."""
  filename_ends_with: String

  """All values not ending with the given string."""
  filename_not_ends_with: String
  mimetype: String

  """All values that are not equal to given value."""
  mimetype_not: String

  """All values that are contained in given list."""
  mimetype_in: [String!]

  """All values that are not contained in given list."""
  mimetype_not_in: [String!]

  """All values less than the given value."""
  mimetype_lt: String

  """All values less than or equal the given value."""
  mimetype_lte: String

  """All values greater than the given value."""
  mimetype_gt: String

  """All values greater than or equal the given value."""
  mimetype_gte: String

  """All values containing the given string."""
  mimetype_contains: String

  """All values not containing the given string."""
  mimetype_not_contains: String

  """All values starting with the given string."""
  mimetype_starts_with: String

  """All values not starting with the given string."""
  mimetype_not_starts_with: String

  """All values ending with the given string."""
  mimetype_ends_with: String

  """All values not ending with the given string."""
  mimetype_not_ends_with: String
  encoding: String

  """All values that are not equal to given value."""
  encoding_not: String

  """All values that are contained in given list."""
  encoding_in: [String!]

  """All values that are not contained in given list."""
  encoding_not_in: [String!]

  """All values less than the given value."""
  encoding_lt: String

  """All values less than or equal the given value."""
  encoding_lte: String

  """All values greater than the given value."""
  encoding_gt: String

  """All values greater than or equal the given value."""
  encoding_gte: String

  """All values containing the given string."""
  encoding_contains: String

  """All values not containing the given string."""
  encoding_not_contains: String

  """All values starting with the given string."""
  encoding_starts_with: String

  """All values not starting with the given string."""
  encoding_not_starts_with: String

  """All values ending with the given string."""
  encoding_ends_with: String

  """All values not ending with the given string."""
  encoding_not_ends_with: String
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
}

input FileWhereUniqueInput {
  id: ID
  url: String
}

type Foundry implements Node {
  id: ID!
  name: String!
  url: String!
  typefaces(where: TypefaceWhereInput, orderBy: TypefaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Typeface!]
  addedBy: User!
}

"""A connection to a list of items."""
type FoundryConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [FoundryEdge]!
  aggregate: AggregateFoundry!
}

input FoundryCreateInput {
  name: String!
  url: String!
  typefaces: TypefaceCreateManyWithoutFoundryInput
  addedBy: UserCreateOneInput!
}

input FoundryCreateOneWithoutTypefacesInput {
  create: FoundryCreateWithoutTypefacesInput
  connect: FoundryWhereUniqueInput
}

input FoundryCreateWithoutTypefacesInput {
  name: String!
  url: String!
  addedBy: UserCreateOneInput!
}

"""An edge in a connection."""
type FoundryEdge {
  """The item at the end of the edge."""
  node: Foundry!

  """A cursor for use in pagination."""
  cursor: String!
}

enum FoundryOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  url_ASC
  url_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type FoundryPreviousValues {
  id: ID!
  name: String!
  url: String!
}

type FoundrySubscriptionPayload {
  mutation: MutationType!
  node: Foundry
  updatedFields: [String!]
  previousValues: FoundryPreviousValues
}

input FoundrySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [FoundrySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [FoundrySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FoundrySubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: FoundryWhereInput
}

input FoundryUpdateInput {
  name: String
  url: String
  typefaces: TypefaceUpdateManyWithoutFoundryInput
  addedBy: UserUpdateOneRequiredInput
}

input FoundryUpdateManyMutationInput {
  name: String
  url: String
}

input FoundryUpdateOneWithoutTypefacesInput {
  create: FoundryCreateWithoutTypefacesInput
  connect: FoundryWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: FoundryUpdateWithoutTypefacesDataInput
  upsert: FoundryUpsertWithoutTypefacesInput
}

input FoundryUpdateWithoutTypefacesDataInput {
  name: String
  url: String
  addedBy: UserUpdateOneRequiredInput
}

input FoundryUpsertWithoutTypefacesInput {
  update: FoundryUpdateWithoutTypefacesDataInput!
  create: FoundryCreateWithoutTypefacesInput!
}

input FoundryWhereInput {
  """Logical AND on all given filters."""
  AND: [FoundryWhereInput!]

  """Logical OR on all given filters."""
  OR: [FoundryWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FoundryWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  typefaces_every: TypefaceWhereInput
  typefaces_some: TypefaceWhereInput
  typefaces_none: TypefaceWhereInput
  addedBy: UserWhereInput
}

input FoundryWhereUniqueInput {
  id: ID
  name: String
}

type Images {
  thumbnail: File
  full: File
}

"""A connection to a list of items."""
type ImagesConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ImagesEdge]!
  aggregate: AggregateImages!
}

input ImagesCreateInput {
  thumbnail: FileCreateOneInput
  full: FileCreateOneInput
}

input ImagesCreateOneInput {
  create: ImagesCreateInput
}

"""An edge in a connection."""
type ImagesEdge {
  """The item at the end of the edge."""
  node: Images!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ImagesOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ImagesSubscriptionPayload {
  mutation: MutationType!
  node: Images
  updatedFields: [String!]
}

input ImagesSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ImagesSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ImagesSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ImagesSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ImagesWhereInput
}

input ImagesUpdateDataInput {
  thumbnail: FileUpdateOneInput
  full: FileUpdateOneInput
}

input ImagesUpdateOneInput {
  create: ImagesCreateInput
  disconnect: Boolean
  delete: Boolean
  update: ImagesUpdateDataInput
  upsert: ImagesUpsertNestedInput
}

input ImagesUpsertNestedInput {
  update: ImagesUpdateDataInput!
  create: ImagesCreateInput!
}

input ImagesWhereInput {
  """Logical AND on all given filters."""
  AND: [ImagesWhereInput!]

  """Logical OR on all given filters."""
  OR: [ImagesWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ImagesWhereInput!]
  thumbnail: FileWhereInput
  full: FileWhereInput
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createWebsite(data: WebsiteCreateInput!): Website!
  createDesigner(data: DesignerCreateInput!): Designer!
  createTypeface(data: TypefaceCreateInput!): Typeface!
  createFoundry(data: FoundryCreateInput!): Foundry!
  createFile(data: FileCreateInput!): File!
  createUser(data: UserCreateInput!): User!
  createImages(data: ImagesCreateInput!): Images!
  updateWebsite(data: WebsiteUpdateInput!, where: WebsiteWhereUniqueInput!): Website
  updateDesigner(data: DesignerUpdateInput!, where: DesignerWhereUniqueInput!): Designer
  updateTypeface(data: TypefaceUpdateInput!, where: TypefaceWhereUniqueInput!): Typeface
  updateFoundry(data: FoundryUpdateInput!, where: FoundryWhereUniqueInput!): Foundry
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deleteWebsite(where: WebsiteWhereUniqueInput!): Website
  deleteDesigner(where: DesignerWhereUniqueInput!): Designer
  deleteTypeface(where: TypefaceWhereUniqueInput!): Typeface
  deleteFoundry(where: FoundryWhereUniqueInput!): Foundry
  deleteFile(where: FileWhereUniqueInput!): File
  deleteUser(where: UserWhereUniqueInput!): User
  upsertWebsite(where: WebsiteWhereUniqueInput!, create: WebsiteCreateInput!, update: WebsiteUpdateInput!): Website!
  upsertDesigner(where: DesignerWhereUniqueInput!, create: DesignerCreateInput!, update: DesignerUpdateInput!): Designer!
  upsertTypeface(where: TypefaceWhereUniqueInput!, create: TypefaceCreateInput!, update: TypefaceUpdateInput!): Typeface!
  upsertFoundry(where: FoundryWhereUniqueInput!, create: FoundryCreateInput!, update: FoundryUpdateInput!): Foundry!
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyWebsites(data: WebsiteUpdateManyMutationInput!, where: WebsiteWhereInput): BatchPayload!
  updateManyDesigners(data: DesignerUpdateManyMutationInput!, where: DesignerWhereInput): BatchPayload!
  updateManyTypefaces(data: TypefaceUpdateManyMutationInput!, where: TypefaceWhereInput): BatchPayload!
  updateManyFoundries(data: FoundryUpdateManyMutationInput!, where: FoundryWhereInput): BatchPayload!
  updateManyFiles(data: FileUpdateManyMutationInput!, where: FileWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  deleteManyWebsites(where: WebsiteWhereInput): BatchPayload!
  deleteManyDesigners(where: DesignerWhereInput): BatchPayload!
  deleteManyTypefaces(where: TypefaceWhereInput): BatchPayload!
  deleteManyFoundries(where: FoundryWhereInput): BatchPayload!
  deleteManyFiles(where: FileWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyImageses(where: ImagesWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  websites(where: WebsiteWhereInput, orderBy: WebsiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Website]!
  designers(where: DesignerWhereInput, orderBy: DesignerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Designer]!
  typefaces(where: TypefaceWhereInput, orderBy: TypefaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Typeface]!
  foundries(where: FoundryWhereInput, orderBy: FoundryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Foundry]!
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  imageses(where: ImagesWhereInput, orderBy: ImagesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Images]!
  website(where: WebsiteWhereUniqueInput!): Website
  designer(where: DesignerWhereUniqueInput!): Designer
  typeface(where: TypefaceWhereUniqueInput!): Typeface
  foundry(where: FoundryWhereUniqueInput!): Foundry
  file(where: FileWhereUniqueInput!): File
  user(where: UserWhereUniqueInput!): User
  websitesConnection(where: WebsiteWhereInput, orderBy: WebsiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WebsiteConnection!
  designersConnection(where: DesignerWhereInput, orderBy: DesignerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DesignerConnection!
  typefacesConnection(where: TypefaceWhereInput, orderBy: TypefaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TypefaceConnection!
  foundriesConnection(where: FoundryWhereInput, orderBy: FoundryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FoundryConnection!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  imagesesConnection(where: ImagesWhereInput, orderBy: ImagesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ImagesConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

enum Role {
  ADMIN
  SUBSCRIBER
}

type Subscription {
  website(where: WebsiteSubscriptionWhereInput): WebsiteSubscriptionPayload
  designer(where: DesignerSubscriptionWhereInput): DesignerSubscriptionPayload
  typeface(where: TypefaceSubscriptionWhereInput): TypefaceSubscriptionPayload
  foundry(where: FoundrySubscriptionWhereInput): FoundrySubscriptionPayload
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  images(where: ImagesSubscriptionWhereInput): ImagesSubscriptionPayload
}

type Typeface implements Node {
  id: ID!
  name: String!
  downloadUrl: String!
  description: String
  slug: String!
  usedBy(where: WebsiteWhereInput, orderBy: WebsiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Website!]
  addedBy: User!
  foundry: Foundry
  designers(where: DesignerWhereInput, orderBy: DesignerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Designer!]
}

"""A connection to a list of items."""
type TypefaceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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
  foundry: FoundryCreateOneWithoutTypefacesInput
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

input TypefaceCreateManyWithoutFoundryInput {
  create: [TypefaceCreateWithoutFoundryInput!]
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
  foundry: FoundryCreateOneWithoutTypefacesInput
  designers: DesignerCreateManyWithoutTypefacesInput
}

input TypefaceCreateWithoutDesignersInput {
  name: String!
  downloadUrl: String!
  description: String
  slug: String!
  usedBy: WebsiteCreateManyWithoutTypefacesInput
  addedBy: UserCreateOneWithoutTypefacesInput!
  foundry: FoundryCreateOneWithoutTypefacesInput
}

input TypefaceCreateWithoutFoundryInput {
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
  foundry: FoundryCreateOneWithoutTypefacesInput
  designers: DesignerCreateManyWithoutTypefacesInput
}

"""An edge in a connection."""
type TypefaceEdge {
  """The item at the end of the edge."""
  node: Typeface!

  """A cursor for use in pagination."""
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
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type TypefacePreviousValues {
  id: ID!
  name: String!
  downloadUrl: String!
  description: String
  slug: String!
}

input TypefaceScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [TypefaceScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [TypefaceScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TypefaceScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  downloadUrl: String

  """All values that are not equal to given value."""
  downloadUrl_not: String

  """All values that are contained in given list."""
  downloadUrl_in: [String!]

  """All values that are not contained in given list."""
  downloadUrl_not_in: [String!]

  """All values less than the given value."""
  downloadUrl_lt: String

  """All values less than or equal the given value."""
  downloadUrl_lte: String

  """All values greater than the given value."""
  downloadUrl_gt: String

  """All values greater than or equal the given value."""
  downloadUrl_gte: String

  """All values containing the given string."""
  downloadUrl_contains: String

  """All values not containing the given string."""
  downloadUrl_not_contains: String

  """All values starting with the given string."""
  downloadUrl_starts_with: String

  """All values not starting with the given string."""
  downloadUrl_not_starts_with: String

  """All values ending with the given string."""
  downloadUrl_ends_with: String

  """All values not ending with the given string."""
  downloadUrl_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
}

type TypefaceSubscriptionPayload {
  mutation: MutationType!
  node: Typeface
  updatedFields: [String!]
  previousValues: TypefacePreviousValues
}

input TypefaceSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TypefaceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TypefaceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TypefaceSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: TypefaceWhereInput
}

input TypefaceUpdateInput {
  name: String
  downloadUrl: String
  description: String
  slug: String
  usedBy: WebsiteUpdateManyWithoutTypefacesInput
  addedBy: UserUpdateOneRequiredWithoutTypefacesInput
  foundry: FoundryUpdateOneWithoutTypefacesInput
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
  connect: [TypefaceWhereUniqueInput!]
  disconnect: [TypefaceWhereUniqueInput!]
  delete: [TypefaceWhereUniqueInput!]
  update: [TypefaceUpdateWithWhereUniqueWithoutAddedByInput!]
  updateMany: [TypefaceUpdateManyWithWhereNestedInput!]
  deleteMany: [TypefaceScalarWhereInput!]
  upsert: [TypefaceUpsertWithWhereUniqueWithoutAddedByInput!]
}

input TypefaceUpdateManyWithoutDesignersInput {
  create: [TypefaceCreateWithoutDesignersInput!]
  connect: [TypefaceWhereUniqueInput!]
  disconnect: [TypefaceWhereUniqueInput!]
  delete: [TypefaceWhereUniqueInput!]
  update: [TypefaceUpdateWithWhereUniqueWithoutDesignersInput!]
  updateMany: [TypefaceUpdateManyWithWhereNestedInput!]
  deleteMany: [TypefaceScalarWhereInput!]
  upsert: [TypefaceUpsertWithWhereUniqueWithoutDesignersInput!]
}

input TypefaceUpdateManyWithoutFoundryInput {
  create: [TypefaceCreateWithoutFoundryInput!]
  connect: [TypefaceWhereUniqueInput!]
  disconnect: [TypefaceWhereUniqueInput!]
  delete: [TypefaceWhereUniqueInput!]
  update: [TypefaceUpdateWithWhereUniqueWithoutFoundryInput!]
  updateMany: [TypefaceUpdateManyWithWhereNestedInput!]
  deleteMany: [TypefaceScalarWhereInput!]
  upsert: [TypefaceUpsertWithWhereUniqueWithoutFoundryInput!]
}

input TypefaceUpdateManyWithoutUsedByInput {
  create: [TypefaceCreateWithoutUsedByInput!]
  connect: [TypefaceWhereUniqueInput!]
  disconnect: [TypefaceWhereUniqueInput!]
  delete: [TypefaceWhereUniqueInput!]
  update: [TypefaceUpdateWithWhereUniqueWithoutUsedByInput!]
  updateMany: [TypefaceUpdateManyWithWhereNestedInput!]
  deleteMany: [TypefaceScalarWhereInput!]
  upsert: [TypefaceUpsertWithWhereUniqueWithoutUsedByInput!]
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
  foundry: FoundryUpdateOneWithoutTypefacesInput
  designers: DesignerUpdateManyWithoutTypefacesInput
}

input TypefaceUpdateWithoutDesignersDataInput {
  name: String
  downloadUrl: String
  description: String
  slug: String
  usedBy: WebsiteUpdateManyWithoutTypefacesInput
  addedBy: UserUpdateOneRequiredWithoutTypefacesInput
  foundry: FoundryUpdateOneWithoutTypefacesInput
}

input TypefaceUpdateWithoutFoundryDataInput {
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
  foundry: FoundryUpdateOneWithoutTypefacesInput
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

input TypefaceUpdateWithWhereUniqueWithoutFoundryInput {
  where: TypefaceWhereUniqueInput!
  data: TypefaceUpdateWithoutFoundryDataInput!
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

input TypefaceUpsertWithWhereUniqueWithoutFoundryInput {
  where: TypefaceWhereUniqueInput!
  update: TypefaceUpdateWithoutFoundryDataInput!
  create: TypefaceCreateWithoutFoundryInput!
}

input TypefaceUpsertWithWhereUniqueWithoutUsedByInput {
  where: TypefaceWhereUniqueInput!
  update: TypefaceUpdateWithoutUsedByDataInput!
  create: TypefaceCreateWithoutUsedByInput!
}

input TypefaceWhereInput {
  """Logical AND on all given filters."""
  AND: [TypefaceWhereInput!]

  """Logical OR on all given filters."""
  OR: [TypefaceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TypefaceWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  downloadUrl: String

  """All values that are not equal to given value."""
  downloadUrl_not: String

  """All values that are contained in given list."""
  downloadUrl_in: [String!]

  """All values that are not contained in given list."""
  downloadUrl_not_in: [String!]

  """All values less than the given value."""
  downloadUrl_lt: String

  """All values less than or equal the given value."""
  downloadUrl_lte: String

  """All values greater than the given value."""
  downloadUrl_gt: String

  """All values greater than or equal the given value."""
  downloadUrl_gte: String

  """All values containing the given string."""
  downloadUrl_contains: String

  """All values not containing the given string."""
  downloadUrl_not_contains: String

  """All values starting with the given string."""
  downloadUrl_starts_with: String

  """All values not starting with the given string."""
  downloadUrl_not_starts_with: String

  """All values ending with the given string."""
  downloadUrl_ends_with: String

  """All values not ending with the given string."""
  downloadUrl_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
  usedBy_every: WebsiteWhereInput
  usedBy_some: WebsiteWhereInput
  usedBy_none: WebsiteWhereInput
  addedBy: UserWhereInput
  foundry: FoundryWhereInput
  designers_every: DesignerWhereInput
  designers_some: DesignerWhereInput
  designers_none: DesignerWhereInput
}

input TypefaceWhereUniqueInput {
  id: ID
  name: String
}

type User implements Node {
  id: ID!
  email: String!
  password: String!
  name: String!
  role: Role!
  websites(where: WebsiteWhereInput, orderBy: WebsiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Website!]
  typefaces(where: TypefaceWhereInput, orderBy: TypefaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Typeface!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
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
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
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
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
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
  connect: UserWhereUniqueInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneRequiredWithoutTypefacesInput {
  create: UserCreateWithoutTypefacesInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutTypefacesDataInput
  upsert: UserUpsertWithoutTypefacesInput
}

input UserUpdateOneRequiredWithoutWebsitesInput {
  create: UserCreateWithoutWebsitesInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutWebsitesDataInput
  upsert: UserUpsertWithoutWebsitesInput
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
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  role: Role

  """All values that are not equal to given value."""
  role_not: Role

  """All values that are contained in given list."""
  role_in: [Role!]

  """All values that are not contained in given list."""
  role_not_in: [Role!]
  websites_every: WebsiteWhereInput
  websites_some: WebsiteWhereInput
  websites_none: WebsiteWhereInput
  typefaces_every: TypefaceWhereInput
  typefaces_some: TypefaceWhereInput
  typefaces_none: TypefaceWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Website implements Node {
  id: ID!
  isPublished: Boolean!
  title: String!
  images: Images
  slug: String
  url: String!
  addedBy: User!
  typefaces(where: TypefaceWhereInput, orderBy: TypefaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Typeface!]
  featured: Boolean!
}

"""A connection to a list of items."""
type WebsiteConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [WebsiteEdge]!
  aggregate: AggregateWebsite!
}

input WebsiteCreateInput {
  isPublished: Boolean
  title: String!
  slug: String
  url: String!
  featured: Boolean
  images: ImagesCreateOneInput
  addedBy: UserCreateOneWithoutWebsitesInput!
  typefaces: TypefaceCreateManyWithoutUsedByInput
}

input WebsiteCreateManyWithoutAddedByInput {
  create: [WebsiteCreateWithoutAddedByInput!]
  connect: [WebsiteWhereUniqueInput!]
}

input WebsiteCreateManyWithoutTypefacesInput {
  create: [WebsiteCreateWithoutTypefacesInput!]
  connect: [WebsiteWhereUniqueInput!]
}

input WebsiteCreateWithoutAddedByInput {
  isPublished: Boolean
  title: String!
  slug: String
  url: String!
  featured: Boolean
  images: ImagesCreateOneInput
  typefaces: TypefaceCreateManyWithoutUsedByInput
}

input WebsiteCreateWithoutTypefacesInput {
  isPublished: Boolean
  title: String!
  slug: String
  url: String!
  featured: Boolean
  images: ImagesCreateOneInput
  addedBy: UserCreateOneWithoutWebsitesInput!
}

"""An edge in a connection."""
type WebsiteEdge {
  """The item at the end of the edge."""
  node: Website!

  """A cursor for use in pagination."""
  cursor: String!
}

enum WebsiteOrderByInput {
  id_ASC
  id_DESC
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
  createdAt_ASC
  createdAt_DESC
}

type WebsitePreviousValues {
  id: ID!
  isPublished: Boolean!
  title: String!
  slug: String
  url: String!
  featured: Boolean!
}

input WebsiteScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [WebsiteScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [WebsiteScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [WebsiteScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  isPublished: Boolean

  """All values that are not equal to given value."""
  isPublished_not: Boolean
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  featured: Boolean

  """All values that are not equal to given value."""
  featured_not: Boolean
}

type WebsiteSubscriptionPayload {
  mutation: MutationType!
  node: Website
  updatedFields: [String!]
  previousValues: WebsitePreviousValues
}

input WebsiteSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [WebsiteSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [WebsiteSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [WebsiteSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: WebsiteWhereInput
}

input WebsiteUpdateInput {
  isPublished: Boolean
  title: String
  slug: String
  url: String
  featured: Boolean
  images: ImagesUpdateOneInput
  addedBy: UserUpdateOneRequiredWithoutWebsitesInput
  typefaces: TypefaceUpdateManyWithoutUsedByInput
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
  connect: [WebsiteWhereUniqueInput!]
  disconnect: [WebsiteWhereUniqueInput!]
  delete: [WebsiteWhereUniqueInput!]
  update: [WebsiteUpdateWithWhereUniqueWithoutAddedByInput!]
  updateMany: [WebsiteUpdateManyWithWhereNestedInput!]
  deleteMany: [WebsiteScalarWhereInput!]
  upsert: [WebsiteUpsertWithWhereUniqueWithoutAddedByInput!]
}

input WebsiteUpdateManyWithoutTypefacesInput {
  create: [WebsiteCreateWithoutTypefacesInput!]
  connect: [WebsiteWhereUniqueInput!]
  disconnect: [WebsiteWhereUniqueInput!]
  delete: [WebsiteWhereUniqueInput!]
  update: [WebsiteUpdateWithWhereUniqueWithoutTypefacesInput!]
  updateMany: [WebsiteUpdateManyWithWhereNestedInput!]
  deleteMany: [WebsiteScalarWhereInput!]
  upsert: [WebsiteUpsertWithWhereUniqueWithoutTypefacesInput!]
}

input WebsiteUpdateManyWithWhereNestedInput {
  where: WebsiteScalarWhereInput!
  data: WebsiteUpdateManyDataInput!
}

input WebsiteUpdateWithoutAddedByDataInput {
  isPublished: Boolean
  title: String
  slug: String
  url: String
  featured: Boolean
  images: ImagesUpdateOneInput
  typefaces: TypefaceUpdateManyWithoutUsedByInput
}

input WebsiteUpdateWithoutTypefacesDataInput {
  isPublished: Boolean
  title: String
  slug: String
  url: String
  featured: Boolean
  images: ImagesUpdateOneInput
  addedBy: UserUpdateOneRequiredWithoutWebsitesInput
}

input WebsiteUpdateWithWhereUniqueWithoutAddedByInput {
  where: WebsiteWhereUniqueInput!
  data: WebsiteUpdateWithoutAddedByDataInput!
}

input WebsiteUpdateWithWhereUniqueWithoutTypefacesInput {
  where: WebsiteWhereUniqueInput!
  data: WebsiteUpdateWithoutTypefacesDataInput!
}

input WebsiteUpsertWithWhereUniqueWithoutAddedByInput {
  where: WebsiteWhereUniqueInput!
  update: WebsiteUpdateWithoutAddedByDataInput!
  create: WebsiteCreateWithoutAddedByInput!
}

input WebsiteUpsertWithWhereUniqueWithoutTypefacesInput {
  where: WebsiteWhereUniqueInput!
  update: WebsiteUpdateWithoutTypefacesDataInput!
  create: WebsiteCreateWithoutTypefacesInput!
}

input WebsiteWhereInput {
  """Logical AND on all given filters."""
  AND: [WebsiteWhereInput!]

  """Logical OR on all given filters."""
  OR: [WebsiteWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [WebsiteWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  isPublished: Boolean

  """All values that are not equal to given value."""
  isPublished_not: Boolean
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  featured: Boolean

  """All values that are not equal to given value."""
  featured_not: Boolean
  images: ImagesWhereInput
  addedBy: UserWhereInput
  typefaces_every: TypefaceWhereInput
  typefaces_some: TypefaceWhereInput
  typefaces_none: TypefaceWhereInput
}

input WebsiteWhereUniqueInput {
  id: ID
  title: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type DesignerOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'url_ASC' |
  'url_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type FileOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'filename_ASC' |
  'filename_DESC' |
  'mimetype_ASC' |
  'mimetype_DESC' |
  'encoding_ASC' |
  'encoding_DESC' |
  'url_ASC' |
  'url_DESC'

export type FoundryOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'url_ASC' |
  'url_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ImagesOrderByInput =   'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type Role =   'ADMIN' |
  'SUBSCRIBER'

export type TypefaceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'downloadUrl_ASC' |
  'downloadUrl_DESC' |
  'description_ASC' |
  'description_DESC' |
  'slug_ASC' |
  'slug_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'name_ASC' |
  'name_DESC' |
  'role_ASC' |
  'role_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type WebsiteOrderByInput =   'id_ASC' |
  'id_DESC' |
  'isPublished_ASC' |
  'isPublished_DESC' |
  'title_ASC' |
  'title_DESC' |
  'slug_ASC' |
  'slug_DESC' |
  'url_ASC' |
  'url_DESC' |
  'featured_ASC' |
  'featured_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export interface DesignerCreateInput {
  name: String
  url: String
  typefaces?: TypefaceCreateManyWithoutDesignersInput
  addedBy: UserCreateOneInput
}

export interface DesignerCreateManyWithoutTypefacesInput {
  create?: DesignerCreateWithoutTypefacesInput[] | DesignerCreateWithoutTypefacesInput
  connect?: DesignerWhereUniqueInput[] | DesignerWhereUniqueInput
}

export interface DesignerCreateWithoutTypefacesInput {
  name: String
  url: String
  addedBy: UserCreateOneInput
}

export interface DesignerScalarWhereInput {
  AND?: DesignerScalarWhereInput[] | DesignerScalarWhereInput
  OR?: DesignerScalarWhereInput[] | DesignerScalarWhereInput
  NOT?: DesignerScalarWhereInput[] | DesignerScalarWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
}

export interface DesignerSubscriptionWhereInput {
  AND?: DesignerSubscriptionWhereInput[] | DesignerSubscriptionWhereInput
  OR?: DesignerSubscriptionWhereInput[] | DesignerSubscriptionWhereInput
  NOT?: DesignerSubscriptionWhereInput[] | DesignerSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: DesignerWhereInput
}

export interface DesignerUpdateInput {
  name?: String
  url?: String
  typefaces?: TypefaceUpdateManyWithoutDesignersInput
  addedBy?: UserUpdateOneRequiredInput
}

export interface DesignerUpdateManyDataInput {
  name?: String
  url?: String
}

export interface DesignerUpdateManyMutationInput {
  name?: String
  url?: String
}

export interface DesignerUpdateManyWithoutTypefacesInput {
  create?: DesignerCreateWithoutTypefacesInput[] | DesignerCreateWithoutTypefacesInput
  connect?: DesignerWhereUniqueInput[] | DesignerWhereUniqueInput
  disconnect?: DesignerWhereUniqueInput[] | DesignerWhereUniqueInput
  delete?: DesignerWhereUniqueInput[] | DesignerWhereUniqueInput
  update?: DesignerUpdateWithWhereUniqueWithoutTypefacesInput[] | DesignerUpdateWithWhereUniqueWithoutTypefacesInput
  updateMany?: DesignerUpdateManyWithWhereNestedInput[] | DesignerUpdateManyWithWhereNestedInput
  deleteMany?: DesignerScalarWhereInput[] | DesignerScalarWhereInput
  upsert?: DesignerUpsertWithWhereUniqueWithoutTypefacesInput[] | DesignerUpsertWithWhereUniqueWithoutTypefacesInput
}

export interface DesignerUpdateManyWithWhereNestedInput {
  where: DesignerScalarWhereInput
  data: DesignerUpdateManyDataInput
}

export interface DesignerUpdateWithoutTypefacesDataInput {
  name?: String
  url?: String
  addedBy?: UserUpdateOneRequiredInput
}

export interface DesignerUpdateWithWhereUniqueWithoutTypefacesInput {
  where: DesignerWhereUniqueInput
  data: DesignerUpdateWithoutTypefacesDataInput
}

export interface DesignerUpsertWithWhereUniqueWithoutTypefacesInput {
  where: DesignerWhereUniqueInput
  update: DesignerUpdateWithoutTypefacesDataInput
  create: DesignerCreateWithoutTypefacesInput
}

export interface DesignerWhereInput {
  AND?: DesignerWhereInput[] | DesignerWhereInput
  OR?: DesignerWhereInput[] | DesignerWhereInput
  NOT?: DesignerWhereInput[] | DesignerWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
  typefaces_every?: TypefaceWhereInput
  typefaces_some?: TypefaceWhereInput
  typefaces_none?: TypefaceWhereInput
  addedBy?: UserWhereInput
}

export interface DesignerWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface FileCreateInput {
  filename: String
  mimetype: String
  encoding: String
  url: String
}

export interface FileCreateOneInput {
  create?: FileCreateInput
  connect?: FileWhereUniqueInput
}

export interface FileSubscriptionWhereInput {
  AND?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  OR?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  NOT?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: FileWhereInput
}

export interface FileUpdateDataInput {
  filename?: String
  mimetype?: String
  encoding?: String
  url?: String
}

export interface FileUpdateInput {
  filename?: String
  mimetype?: String
  encoding?: String
  url?: String
}

export interface FileUpdateManyMutationInput {
  filename?: String
  mimetype?: String
  encoding?: String
  url?: String
}

export interface FileUpdateOneInput {
  create?: FileCreateInput
  connect?: FileWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: FileUpdateDataInput
  upsert?: FileUpsertNestedInput
}

export interface FileUpsertNestedInput {
  update: FileUpdateDataInput
  create: FileCreateInput
}

export interface FileWhereInput {
  AND?: FileWhereInput[] | FileWhereInput
  OR?: FileWhereInput[] | FileWhereInput
  NOT?: FileWhereInput[] | FileWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  filename?: String
  filename_not?: String
  filename_in?: String[] | String
  filename_not_in?: String[] | String
  filename_lt?: String
  filename_lte?: String
  filename_gt?: String
  filename_gte?: String
  filename_contains?: String
  filename_not_contains?: String
  filename_starts_with?: String
  filename_not_starts_with?: String
  filename_ends_with?: String
  filename_not_ends_with?: String
  mimetype?: String
  mimetype_not?: String
  mimetype_in?: String[] | String
  mimetype_not_in?: String[] | String
  mimetype_lt?: String
  mimetype_lte?: String
  mimetype_gt?: String
  mimetype_gte?: String
  mimetype_contains?: String
  mimetype_not_contains?: String
  mimetype_starts_with?: String
  mimetype_not_starts_with?: String
  mimetype_ends_with?: String
  mimetype_not_ends_with?: String
  encoding?: String
  encoding_not?: String
  encoding_in?: String[] | String
  encoding_not_in?: String[] | String
  encoding_lt?: String
  encoding_lte?: String
  encoding_gt?: String
  encoding_gte?: String
  encoding_contains?: String
  encoding_not_contains?: String
  encoding_starts_with?: String
  encoding_not_starts_with?: String
  encoding_ends_with?: String
  encoding_not_ends_with?: String
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
}

export interface FileWhereUniqueInput {
  id?: ID_Input
  url?: String
}

export interface FoundryCreateInput {
  name: String
  url: String
  typefaces?: TypefaceCreateManyWithoutFoundryInput
  addedBy: UserCreateOneInput
}

export interface FoundryCreateOneWithoutTypefacesInput {
  create?: FoundryCreateWithoutTypefacesInput
  connect?: FoundryWhereUniqueInput
}

export interface FoundryCreateWithoutTypefacesInput {
  name: String
  url: String
  addedBy: UserCreateOneInput
}

export interface FoundrySubscriptionWhereInput {
  AND?: FoundrySubscriptionWhereInput[] | FoundrySubscriptionWhereInput
  OR?: FoundrySubscriptionWhereInput[] | FoundrySubscriptionWhereInput
  NOT?: FoundrySubscriptionWhereInput[] | FoundrySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: FoundryWhereInput
}

export interface FoundryUpdateInput {
  name?: String
  url?: String
  typefaces?: TypefaceUpdateManyWithoutFoundryInput
  addedBy?: UserUpdateOneRequiredInput
}

export interface FoundryUpdateManyMutationInput {
  name?: String
  url?: String
}

export interface FoundryUpdateOneWithoutTypefacesInput {
  create?: FoundryCreateWithoutTypefacesInput
  connect?: FoundryWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: FoundryUpdateWithoutTypefacesDataInput
  upsert?: FoundryUpsertWithoutTypefacesInput
}

export interface FoundryUpdateWithoutTypefacesDataInput {
  name?: String
  url?: String
  addedBy?: UserUpdateOneRequiredInput
}

export interface FoundryUpsertWithoutTypefacesInput {
  update: FoundryUpdateWithoutTypefacesDataInput
  create: FoundryCreateWithoutTypefacesInput
}

export interface FoundryWhereInput {
  AND?: FoundryWhereInput[] | FoundryWhereInput
  OR?: FoundryWhereInput[] | FoundryWhereInput
  NOT?: FoundryWhereInput[] | FoundryWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
  typefaces_every?: TypefaceWhereInput
  typefaces_some?: TypefaceWhereInput
  typefaces_none?: TypefaceWhereInput
  addedBy?: UserWhereInput
}

export interface FoundryWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface ImagesCreateInput {
  thumbnail?: FileCreateOneInput
  full?: FileCreateOneInput
}

export interface ImagesCreateOneInput {
  create?: ImagesCreateInput
}

export interface ImagesSubscriptionWhereInput {
  AND?: ImagesSubscriptionWhereInput[] | ImagesSubscriptionWhereInput
  OR?: ImagesSubscriptionWhereInput[] | ImagesSubscriptionWhereInput
  NOT?: ImagesSubscriptionWhereInput[] | ImagesSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ImagesWhereInput
}

export interface ImagesUpdateDataInput {
  thumbnail?: FileUpdateOneInput
  full?: FileUpdateOneInput
}

export interface ImagesUpdateOneInput {
  create?: ImagesCreateInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ImagesUpdateDataInput
  upsert?: ImagesUpsertNestedInput
}

export interface ImagesUpsertNestedInput {
  update: ImagesUpdateDataInput
  create: ImagesCreateInput
}

export interface ImagesWhereInput {
  AND?: ImagesWhereInput[] | ImagesWhereInput
  OR?: ImagesWhereInput[] | ImagesWhereInput
  NOT?: ImagesWhereInput[] | ImagesWhereInput
  thumbnail?: FileWhereInput
  full?: FileWhereInput
}

export interface TypefaceCreateInput {
  name: String
  downloadUrl: String
  description?: String
  slug: String
  usedBy?: WebsiteCreateManyWithoutTypefacesInput
  addedBy: UserCreateOneWithoutTypefacesInput
  foundry?: FoundryCreateOneWithoutTypefacesInput
  designers?: DesignerCreateManyWithoutTypefacesInput
}

export interface TypefaceCreateManyWithoutAddedByInput {
  create?: TypefaceCreateWithoutAddedByInput[] | TypefaceCreateWithoutAddedByInput
  connect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput
}

export interface TypefaceCreateManyWithoutDesignersInput {
  create?: TypefaceCreateWithoutDesignersInput[] | TypefaceCreateWithoutDesignersInput
  connect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput
}

export interface TypefaceCreateManyWithoutFoundryInput {
  create?: TypefaceCreateWithoutFoundryInput[] | TypefaceCreateWithoutFoundryInput
  connect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput
}

export interface TypefaceCreateManyWithoutUsedByInput {
  create?: TypefaceCreateWithoutUsedByInput[] | TypefaceCreateWithoutUsedByInput
  connect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput
}

export interface TypefaceCreateWithoutAddedByInput {
  name: String
  downloadUrl: String
  description?: String
  slug: String
  usedBy?: WebsiteCreateManyWithoutTypefacesInput
  foundry?: FoundryCreateOneWithoutTypefacesInput
  designers?: DesignerCreateManyWithoutTypefacesInput
}

export interface TypefaceCreateWithoutDesignersInput {
  name: String
  downloadUrl: String
  description?: String
  slug: String
  usedBy?: WebsiteCreateManyWithoutTypefacesInput
  addedBy: UserCreateOneWithoutTypefacesInput
  foundry?: FoundryCreateOneWithoutTypefacesInput
}

export interface TypefaceCreateWithoutFoundryInput {
  name: String
  downloadUrl: String
  description?: String
  slug: String
  usedBy?: WebsiteCreateManyWithoutTypefacesInput
  addedBy: UserCreateOneWithoutTypefacesInput
  designers?: DesignerCreateManyWithoutTypefacesInput
}

export interface TypefaceCreateWithoutUsedByInput {
  name: String
  downloadUrl: String
  description?: String
  slug: String
  addedBy: UserCreateOneWithoutTypefacesInput
  foundry?: FoundryCreateOneWithoutTypefacesInput
  designers?: DesignerCreateManyWithoutTypefacesInput
}

export interface TypefaceScalarWhereInput {
  AND?: TypefaceScalarWhereInput[] | TypefaceScalarWhereInput
  OR?: TypefaceScalarWhereInput[] | TypefaceScalarWhereInput
  NOT?: TypefaceScalarWhereInput[] | TypefaceScalarWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  downloadUrl?: String
  downloadUrl_not?: String
  downloadUrl_in?: String[] | String
  downloadUrl_not_in?: String[] | String
  downloadUrl_lt?: String
  downloadUrl_lte?: String
  downloadUrl_gt?: String
  downloadUrl_gte?: String
  downloadUrl_contains?: String
  downloadUrl_not_contains?: String
  downloadUrl_starts_with?: String
  downloadUrl_not_starts_with?: String
  downloadUrl_ends_with?: String
  downloadUrl_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  slug?: String
  slug_not?: String
  slug_in?: String[] | String
  slug_not_in?: String[] | String
  slug_lt?: String
  slug_lte?: String
  slug_gt?: String
  slug_gte?: String
  slug_contains?: String
  slug_not_contains?: String
  slug_starts_with?: String
  slug_not_starts_with?: String
  slug_ends_with?: String
  slug_not_ends_with?: String
}

export interface TypefaceSubscriptionWhereInput {
  AND?: TypefaceSubscriptionWhereInput[] | TypefaceSubscriptionWhereInput
  OR?: TypefaceSubscriptionWhereInput[] | TypefaceSubscriptionWhereInput
  NOT?: TypefaceSubscriptionWhereInput[] | TypefaceSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: TypefaceWhereInput
}

export interface TypefaceUpdateInput {
  name?: String
  downloadUrl?: String
  description?: String
  slug?: String
  usedBy?: WebsiteUpdateManyWithoutTypefacesInput
  addedBy?: UserUpdateOneRequiredWithoutTypefacesInput
  foundry?: FoundryUpdateOneWithoutTypefacesInput
  designers?: DesignerUpdateManyWithoutTypefacesInput
}

export interface TypefaceUpdateManyDataInput {
  name?: String
  downloadUrl?: String
  description?: String
  slug?: String
}

export interface TypefaceUpdateManyMutationInput {
  name?: String
  downloadUrl?: String
  description?: String
  slug?: String
}

export interface TypefaceUpdateManyWithoutAddedByInput {
  create?: TypefaceCreateWithoutAddedByInput[] | TypefaceCreateWithoutAddedByInput
  connect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput
  disconnect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput
  delete?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput
  update?: TypefaceUpdateWithWhereUniqueWithoutAddedByInput[] | TypefaceUpdateWithWhereUniqueWithoutAddedByInput
  updateMany?: TypefaceUpdateManyWithWhereNestedInput[] | TypefaceUpdateManyWithWhereNestedInput
  deleteMany?: TypefaceScalarWhereInput[] | TypefaceScalarWhereInput
  upsert?: TypefaceUpsertWithWhereUniqueWithoutAddedByInput[] | TypefaceUpsertWithWhereUniqueWithoutAddedByInput
}

export interface TypefaceUpdateManyWithoutDesignersInput {
  create?: TypefaceCreateWithoutDesignersInput[] | TypefaceCreateWithoutDesignersInput
  connect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput
  disconnect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput
  delete?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput
  update?: TypefaceUpdateWithWhereUniqueWithoutDesignersInput[] | TypefaceUpdateWithWhereUniqueWithoutDesignersInput
  updateMany?: TypefaceUpdateManyWithWhereNestedInput[] | TypefaceUpdateManyWithWhereNestedInput
  deleteMany?: TypefaceScalarWhereInput[] | TypefaceScalarWhereInput
  upsert?: TypefaceUpsertWithWhereUniqueWithoutDesignersInput[] | TypefaceUpsertWithWhereUniqueWithoutDesignersInput
}

export interface TypefaceUpdateManyWithoutFoundryInput {
  create?: TypefaceCreateWithoutFoundryInput[] | TypefaceCreateWithoutFoundryInput
  connect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput
  disconnect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput
  delete?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput
  update?: TypefaceUpdateWithWhereUniqueWithoutFoundryInput[] | TypefaceUpdateWithWhereUniqueWithoutFoundryInput
  updateMany?: TypefaceUpdateManyWithWhereNestedInput[] | TypefaceUpdateManyWithWhereNestedInput
  deleteMany?: TypefaceScalarWhereInput[] | TypefaceScalarWhereInput
  upsert?: TypefaceUpsertWithWhereUniqueWithoutFoundryInput[] | TypefaceUpsertWithWhereUniqueWithoutFoundryInput
}

export interface TypefaceUpdateManyWithoutUsedByInput {
  create?: TypefaceCreateWithoutUsedByInput[] | TypefaceCreateWithoutUsedByInput
  connect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput
  disconnect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput
  delete?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput
  update?: TypefaceUpdateWithWhereUniqueWithoutUsedByInput[] | TypefaceUpdateWithWhereUniqueWithoutUsedByInput
  updateMany?: TypefaceUpdateManyWithWhereNestedInput[] | TypefaceUpdateManyWithWhereNestedInput
  deleteMany?: TypefaceScalarWhereInput[] | TypefaceScalarWhereInput
  upsert?: TypefaceUpsertWithWhereUniqueWithoutUsedByInput[] | TypefaceUpsertWithWhereUniqueWithoutUsedByInput
}

export interface TypefaceUpdateManyWithWhereNestedInput {
  where: TypefaceScalarWhereInput
  data: TypefaceUpdateManyDataInput
}

export interface TypefaceUpdateWithoutAddedByDataInput {
  name?: String
  downloadUrl?: String
  description?: String
  slug?: String
  usedBy?: WebsiteUpdateManyWithoutTypefacesInput
  foundry?: FoundryUpdateOneWithoutTypefacesInput
  designers?: DesignerUpdateManyWithoutTypefacesInput
}

export interface TypefaceUpdateWithoutDesignersDataInput {
  name?: String
  downloadUrl?: String
  description?: String
  slug?: String
  usedBy?: WebsiteUpdateManyWithoutTypefacesInput
  addedBy?: UserUpdateOneRequiredWithoutTypefacesInput
  foundry?: FoundryUpdateOneWithoutTypefacesInput
}

export interface TypefaceUpdateWithoutFoundryDataInput {
  name?: String
  downloadUrl?: String
  description?: String
  slug?: String
  usedBy?: WebsiteUpdateManyWithoutTypefacesInput
  addedBy?: UserUpdateOneRequiredWithoutTypefacesInput
  designers?: DesignerUpdateManyWithoutTypefacesInput
}

export interface TypefaceUpdateWithoutUsedByDataInput {
  name?: String
  downloadUrl?: String
  description?: String
  slug?: String
  addedBy?: UserUpdateOneRequiredWithoutTypefacesInput
  foundry?: FoundryUpdateOneWithoutTypefacesInput
  designers?: DesignerUpdateManyWithoutTypefacesInput
}

export interface TypefaceUpdateWithWhereUniqueWithoutAddedByInput {
  where: TypefaceWhereUniqueInput
  data: TypefaceUpdateWithoutAddedByDataInput
}

export interface TypefaceUpdateWithWhereUniqueWithoutDesignersInput {
  where: TypefaceWhereUniqueInput
  data: TypefaceUpdateWithoutDesignersDataInput
}

export interface TypefaceUpdateWithWhereUniqueWithoutFoundryInput {
  where: TypefaceWhereUniqueInput
  data: TypefaceUpdateWithoutFoundryDataInput
}

export interface TypefaceUpdateWithWhereUniqueWithoutUsedByInput {
  where: TypefaceWhereUniqueInput
  data: TypefaceUpdateWithoutUsedByDataInput
}

export interface TypefaceUpsertWithWhereUniqueWithoutAddedByInput {
  where: TypefaceWhereUniqueInput
  update: TypefaceUpdateWithoutAddedByDataInput
  create: TypefaceCreateWithoutAddedByInput
}

export interface TypefaceUpsertWithWhereUniqueWithoutDesignersInput {
  where: TypefaceWhereUniqueInput
  update: TypefaceUpdateWithoutDesignersDataInput
  create: TypefaceCreateWithoutDesignersInput
}

export interface TypefaceUpsertWithWhereUniqueWithoutFoundryInput {
  where: TypefaceWhereUniqueInput
  update: TypefaceUpdateWithoutFoundryDataInput
  create: TypefaceCreateWithoutFoundryInput
}

export interface TypefaceUpsertWithWhereUniqueWithoutUsedByInput {
  where: TypefaceWhereUniqueInput
  update: TypefaceUpdateWithoutUsedByDataInput
  create: TypefaceCreateWithoutUsedByInput
}

export interface TypefaceWhereInput {
  AND?: TypefaceWhereInput[] | TypefaceWhereInput
  OR?: TypefaceWhereInput[] | TypefaceWhereInput
  NOT?: TypefaceWhereInput[] | TypefaceWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  downloadUrl?: String
  downloadUrl_not?: String
  downloadUrl_in?: String[] | String
  downloadUrl_not_in?: String[] | String
  downloadUrl_lt?: String
  downloadUrl_lte?: String
  downloadUrl_gt?: String
  downloadUrl_gte?: String
  downloadUrl_contains?: String
  downloadUrl_not_contains?: String
  downloadUrl_starts_with?: String
  downloadUrl_not_starts_with?: String
  downloadUrl_ends_with?: String
  downloadUrl_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  slug?: String
  slug_not?: String
  slug_in?: String[] | String
  slug_not_in?: String[] | String
  slug_lt?: String
  slug_lte?: String
  slug_gt?: String
  slug_gte?: String
  slug_contains?: String
  slug_not_contains?: String
  slug_starts_with?: String
  slug_not_starts_with?: String
  slug_ends_with?: String
  slug_not_ends_with?: String
  usedBy_every?: WebsiteWhereInput
  usedBy_some?: WebsiteWhereInput
  usedBy_none?: WebsiteWhereInput
  addedBy?: UserWhereInput
  foundry?: FoundryWhereInput
  designers_every?: DesignerWhereInput
  designers_some?: DesignerWhereInput
  designers_none?: DesignerWhereInput
}

export interface TypefaceWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface UserCreateInput {
  email: String
  password: String
  name: String
  role?: Role
  websites?: WebsiteCreateManyWithoutAddedByInput
  typefaces?: TypefaceCreateManyWithoutAddedByInput
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface UserCreateOneWithoutTypefacesInput {
  create?: UserCreateWithoutTypefacesInput
  connect?: UserWhereUniqueInput
}

export interface UserCreateOneWithoutWebsitesInput {
  create?: UserCreateWithoutWebsitesInput
  connect?: UserWhereUniqueInput
}

export interface UserCreateWithoutTypefacesInput {
  email: String
  password: String
  name: String
  role?: Role
  websites?: WebsiteCreateManyWithoutAddedByInput
}

export interface UserCreateWithoutWebsitesInput {
  email: String
  password: String
  name: String
  role?: Role
  typefaces?: TypefaceCreateManyWithoutAddedByInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface UserUpdateDataInput {
  email?: String
  password?: String
  name?: String
  role?: Role
  websites?: WebsiteUpdateManyWithoutAddedByInput
  typefaces?: TypefaceUpdateManyWithoutAddedByInput
}

export interface UserUpdateInput {
  email?: String
  password?: String
  name?: String
  role?: Role
  websites?: WebsiteUpdateManyWithoutAddedByInput
  typefaces?: TypefaceUpdateManyWithoutAddedByInput
}

export interface UserUpdateManyMutationInput {
  email?: String
  password?: String
  name?: String
  role?: Role
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface UserUpdateOneRequiredWithoutTypefacesInput {
  create?: UserCreateWithoutTypefacesInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutTypefacesDataInput
  upsert?: UserUpsertWithoutTypefacesInput
}

export interface UserUpdateOneRequiredWithoutWebsitesInput {
  create?: UserCreateWithoutWebsitesInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutWebsitesDataInput
  upsert?: UserUpsertWithoutWebsitesInput
}

export interface UserUpdateWithoutTypefacesDataInput {
  email?: String
  password?: String
  name?: String
  role?: Role
  websites?: WebsiteUpdateManyWithoutAddedByInput
}

export interface UserUpdateWithoutWebsitesDataInput {
  email?: String
  password?: String
  name?: String
  role?: Role
  typefaces?: TypefaceUpdateManyWithoutAddedByInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserUpsertWithoutTypefacesInput {
  update: UserUpdateWithoutTypefacesDataInput
  create: UserCreateWithoutTypefacesInput
}

export interface UserUpsertWithoutWebsitesInput {
  update: UserUpdateWithoutWebsitesDataInput
  create: UserCreateWithoutWebsitesInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  role?: Role
  role_not?: Role
  role_in?: Role[] | Role
  role_not_in?: Role[] | Role
  websites_every?: WebsiteWhereInput
  websites_some?: WebsiteWhereInput
  websites_none?: WebsiteWhereInput
  typefaces_every?: TypefaceWhereInput
  typefaces_some?: TypefaceWhereInput
  typefaces_none?: TypefaceWhereInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface WebsiteCreateInput {
  isPublished?: Boolean
  title: String
  slug?: String
  url: String
  featured?: Boolean
  images?: ImagesCreateOneInput
  addedBy: UserCreateOneWithoutWebsitesInput
  typefaces?: TypefaceCreateManyWithoutUsedByInput
}

export interface WebsiteCreateManyWithoutAddedByInput {
  create?: WebsiteCreateWithoutAddedByInput[] | WebsiteCreateWithoutAddedByInput
  connect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput
}

export interface WebsiteCreateManyWithoutTypefacesInput {
  create?: WebsiteCreateWithoutTypefacesInput[] | WebsiteCreateWithoutTypefacesInput
  connect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput
}

export interface WebsiteCreateWithoutAddedByInput {
  isPublished?: Boolean
  title: String
  slug?: String
  url: String
  featured?: Boolean
  images?: ImagesCreateOneInput
  typefaces?: TypefaceCreateManyWithoutUsedByInput
}

export interface WebsiteCreateWithoutTypefacesInput {
  isPublished?: Boolean
  title: String
  slug?: String
  url: String
  featured?: Boolean
  images?: ImagesCreateOneInput
  addedBy: UserCreateOneWithoutWebsitesInput
}

export interface WebsiteScalarWhereInput {
  AND?: WebsiteScalarWhereInput[] | WebsiteScalarWhereInput
  OR?: WebsiteScalarWhereInput[] | WebsiteScalarWhereInput
  NOT?: WebsiteScalarWhereInput[] | WebsiteScalarWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  isPublished?: Boolean
  isPublished_not?: Boolean
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  slug?: String
  slug_not?: String
  slug_in?: String[] | String
  slug_not_in?: String[] | String
  slug_lt?: String
  slug_lte?: String
  slug_gt?: String
  slug_gte?: String
  slug_contains?: String
  slug_not_contains?: String
  slug_starts_with?: String
  slug_not_starts_with?: String
  slug_ends_with?: String
  slug_not_ends_with?: String
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
  featured?: Boolean
  featured_not?: Boolean
}

export interface WebsiteSubscriptionWhereInput {
  AND?: WebsiteSubscriptionWhereInput[] | WebsiteSubscriptionWhereInput
  OR?: WebsiteSubscriptionWhereInput[] | WebsiteSubscriptionWhereInput
  NOT?: WebsiteSubscriptionWhereInput[] | WebsiteSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: WebsiteWhereInput
}

export interface WebsiteUpdateInput {
  isPublished?: Boolean
  title?: String
  slug?: String
  url?: String
  featured?: Boolean
  images?: ImagesUpdateOneInput
  addedBy?: UserUpdateOneRequiredWithoutWebsitesInput
  typefaces?: TypefaceUpdateManyWithoutUsedByInput
}

export interface WebsiteUpdateManyDataInput {
  isPublished?: Boolean
  title?: String
  slug?: String
  url?: String
  featured?: Boolean
}

export interface WebsiteUpdateManyMutationInput {
  isPublished?: Boolean
  title?: String
  slug?: String
  url?: String
  featured?: Boolean
}

export interface WebsiteUpdateManyWithoutAddedByInput {
  create?: WebsiteCreateWithoutAddedByInput[] | WebsiteCreateWithoutAddedByInput
  connect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput
  disconnect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput
  delete?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput
  update?: WebsiteUpdateWithWhereUniqueWithoutAddedByInput[] | WebsiteUpdateWithWhereUniqueWithoutAddedByInput
  updateMany?: WebsiteUpdateManyWithWhereNestedInput[] | WebsiteUpdateManyWithWhereNestedInput
  deleteMany?: WebsiteScalarWhereInput[] | WebsiteScalarWhereInput
  upsert?: WebsiteUpsertWithWhereUniqueWithoutAddedByInput[] | WebsiteUpsertWithWhereUniqueWithoutAddedByInput
}

export interface WebsiteUpdateManyWithoutTypefacesInput {
  create?: WebsiteCreateWithoutTypefacesInput[] | WebsiteCreateWithoutTypefacesInput
  connect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput
  disconnect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput
  delete?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput
  update?: WebsiteUpdateWithWhereUniqueWithoutTypefacesInput[] | WebsiteUpdateWithWhereUniqueWithoutTypefacesInput
  updateMany?: WebsiteUpdateManyWithWhereNestedInput[] | WebsiteUpdateManyWithWhereNestedInput
  deleteMany?: WebsiteScalarWhereInput[] | WebsiteScalarWhereInput
  upsert?: WebsiteUpsertWithWhereUniqueWithoutTypefacesInput[] | WebsiteUpsertWithWhereUniqueWithoutTypefacesInput
}

export interface WebsiteUpdateManyWithWhereNestedInput {
  where: WebsiteScalarWhereInput
  data: WebsiteUpdateManyDataInput
}

export interface WebsiteUpdateWithoutAddedByDataInput {
  isPublished?: Boolean
  title?: String
  slug?: String
  url?: String
  featured?: Boolean
  images?: ImagesUpdateOneInput
  typefaces?: TypefaceUpdateManyWithoutUsedByInput
}

export interface WebsiteUpdateWithoutTypefacesDataInput {
  isPublished?: Boolean
  title?: String
  slug?: String
  url?: String
  featured?: Boolean
  images?: ImagesUpdateOneInput
  addedBy?: UserUpdateOneRequiredWithoutWebsitesInput
}

export interface WebsiteUpdateWithWhereUniqueWithoutAddedByInput {
  where: WebsiteWhereUniqueInput
  data: WebsiteUpdateWithoutAddedByDataInput
}

export interface WebsiteUpdateWithWhereUniqueWithoutTypefacesInput {
  where: WebsiteWhereUniqueInput
  data: WebsiteUpdateWithoutTypefacesDataInput
}

export interface WebsiteUpsertWithWhereUniqueWithoutAddedByInput {
  where: WebsiteWhereUniqueInput
  update: WebsiteUpdateWithoutAddedByDataInput
  create: WebsiteCreateWithoutAddedByInput
}

export interface WebsiteUpsertWithWhereUniqueWithoutTypefacesInput {
  where: WebsiteWhereUniqueInput
  update: WebsiteUpdateWithoutTypefacesDataInput
  create: WebsiteCreateWithoutTypefacesInput
}

export interface WebsiteWhereInput {
  AND?: WebsiteWhereInput[] | WebsiteWhereInput
  OR?: WebsiteWhereInput[] | WebsiteWhereInput
  NOT?: WebsiteWhereInput[] | WebsiteWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  isPublished?: Boolean
  isPublished_not?: Boolean
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  slug?: String
  slug_not?: String
  slug_in?: String[] | String
  slug_not_in?: String[] | String
  slug_lt?: String
  slug_lte?: String
  slug_gt?: String
  slug_gte?: String
  slug_contains?: String
  slug_not_contains?: String
  slug_starts_with?: String
  slug_not_starts_with?: String
  slug_ends_with?: String
  slug_not_ends_with?: String
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
  featured?: Boolean
  featured_not?: Boolean
  images?: ImagesWhereInput
  addedBy?: UserWhereInput
  typefaces_every?: TypefaceWhereInput
  typefaces_some?: TypefaceWhereInput
  typefaces_none?: TypefaceWhereInput
}

export interface WebsiteWhereUniqueInput {
  id?: ID_Input
  title?: String
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateDesigner {
  count: Int
}

export interface AggregateFile {
  count: Int
}

export interface AggregateFoundry {
  count: Int
}

export interface AggregateImages {
  count: Int
}

export interface AggregateTypeface {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface AggregateWebsite {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface Designer extends Node {
  id: ID_Output
  name: String
  url: String
  typefaces?: Typeface[]
  addedBy: User
}

/*
 * A connection to a list of items.

 */
export interface DesignerConnection {
  pageInfo: PageInfo
  edges: DesignerEdge[]
  aggregate: AggregateDesigner
}

/*
 * An edge in a connection.

 */
export interface DesignerEdge {
  node: Designer
  cursor: String
}

export interface DesignerPreviousValues {
  id: ID_Output
  name: String
  url: String
}

export interface DesignerSubscriptionPayload {
  mutation: MutationType
  node?: Designer
  updatedFields?: String[]
  previousValues?: DesignerPreviousValues
}

export interface File extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  filename: String
  mimetype: String
  encoding: String
  url: String
}

/*
 * A connection to a list of items.

 */
export interface FileConnection {
  pageInfo: PageInfo
  edges: FileEdge[]
  aggregate: AggregateFile
}

/*
 * An edge in a connection.

 */
export interface FileEdge {
  node: File
  cursor: String
}

export interface FilePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  filename: String
  mimetype: String
  encoding: String
  url: String
}

export interface FileSubscriptionPayload {
  mutation: MutationType
  node?: File
  updatedFields?: String[]
  previousValues?: FilePreviousValues
}

export interface Foundry extends Node {
  id: ID_Output
  name: String
  url: String
  typefaces?: Typeface[]
  addedBy: User
}

/*
 * A connection to a list of items.

 */
export interface FoundryConnection {
  pageInfo: PageInfo
  edges: FoundryEdge[]
  aggregate: AggregateFoundry
}

/*
 * An edge in a connection.

 */
export interface FoundryEdge {
  node: Foundry
  cursor: String
}

export interface FoundryPreviousValues {
  id: ID_Output
  name: String
  url: String
}

export interface FoundrySubscriptionPayload {
  mutation: MutationType
  node?: Foundry
  updatedFields?: String[]
  previousValues?: FoundryPreviousValues
}

export interface Images {
  thumbnail?: File
  full?: File
}

/*
 * A connection to a list of items.

 */
export interface ImagesConnection {
  pageInfo: PageInfo
  edges: ImagesEdge[]
  aggregate: AggregateImages
}

/*
 * An edge in a connection.

 */
export interface ImagesEdge {
  node: Images
  cursor: String
}

export interface ImagesSubscriptionPayload {
  mutation: MutationType
  node?: Images
  updatedFields?: String[]
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface Typeface extends Node {
  id: ID_Output
  name: String
  downloadUrl: String
  description?: String
  slug: String
  usedBy?: Website[]
  addedBy: User
  foundry?: Foundry
  designers?: Designer[]
}

/*
 * A connection to a list of items.

 */
export interface TypefaceConnection {
  pageInfo: PageInfo
  edges: TypefaceEdge[]
  aggregate: AggregateTypeface
}

/*
 * An edge in a connection.

 */
export interface TypefaceEdge {
  node: Typeface
  cursor: String
}

export interface TypefacePreviousValues {
  id: ID_Output
  name: String
  downloadUrl: String
  description?: String
  slug: String
}

export interface TypefaceSubscriptionPayload {
  mutation: MutationType
  node?: Typeface
  updatedFields?: String[]
  previousValues?: TypefacePreviousValues
}

export interface User extends Node {
  id: ID_Output
  email: String
  password: String
  name: String
  role: Role
  websites?: Website[]
  typefaces?: Typeface[]
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  password: String
  name: String
  role: Role
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface Website extends Node {
  id: ID_Output
  isPublished: Boolean
  title: String
  images?: Images
  slug?: String
  url: String
  addedBy: User
  typefaces?: Typeface[]
  featured: Boolean
}

/*
 * A connection to a list of items.

 */
export interface WebsiteConnection {
  pageInfo: PageInfo
  edges: WebsiteEdge[]
  aggregate: AggregateWebsite
}

/*
 * An edge in a connection.

 */
export interface WebsiteEdge {
  node: Website
  cursor: String
}

export interface WebsitePreviousValues {
  id: ID_Output
  isPublished: Boolean
  title: String
  slug?: String
  url: String
  featured: Boolean
}

export interface WebsiteSubscriptionPayload {
  mutation: MutationType
  node?: Website
  updatedFields?: String[]
  previousValues?: WebsitePreviousValues
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string