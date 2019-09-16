import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    websites: <T = Array<Website | null>>(args: { where?: WebsiteWhereInput | null, orderBy?: WebsiteOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    imageses: <T = Array<Images | null>>(args: { where?: ImagesWhereInput | null, orderBy?: ImagesOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tags: <T = Array<Tag | null>>(args: { where?: TagWhereInput | null, orderBy?: TagOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    designers: <T = Array<Designer | null>>(args: { where?: DesignerWhereInput | null, orderBy?: DesignerOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    typefaces: <T = Array<Typeface | null>>(args: { where?: TypefaceWhereInput | null, orderBy?: TypefaceOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    foundries: <T = Array<Foundry | null>>(args: { where?: FoundryWhereInput | null, orderBy?: FoundryOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    files: <T = Array<File | null>>(args: { where?: FileWhereInput | null, orderBy?: FileOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    website: <T = Website | null>(args: { where: WebsiteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    images: <T = Images | null>(args: { where: ImagesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    tag: <T = Tag | null>(args: { where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    designer: <T = Designer | null>(args: { where: DesignerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    typeface: <T = Typeface | null>(args: { where: TypefaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    foundry: <T = Foundry | null>(args: { where: FoundryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    file: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    websitesConnection: <T = WebsiteConnection>(args: { where?: WebsiteWhereInput | null, orderBy?: WebsiteOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    imagesesConnection: <T = ImagesConnection>(args: { where?: ImagesWhereInput | null, orderBy?: ImagesOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tagsConnection: <T = TagConnection>(args: { where?: TagWhereInput | null, orderBy?: TagOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    designersConnection: <T = DesignerConnection>(args: { where?: DesignerWhereInput | null, orderBy?: DesignerOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    typefacesConnection: <T = TypefaceConnection>(args: { where?: TypefaceWhereInput | null, orderBy?: TypefaceOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    foundriesConnection: <T = FoundryConnection>(args: { where?: FoundryWhereInput | null, orderBy?: FoundryOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    filesConnection: <T = FileConnection>(args: { where?: FileWhereInput | null, orderBy?: FileOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createWebsite: <T = Website>(args: { data: WebsiteCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createImages: <T = Images>(args: { data: ImagesCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTag: <T = Tag>(args: { data: TagCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createDesigner: <T = Designer>(args: { data: DesignerCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTypeface: <T = Typeface>(args: { data: TypefaceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFoundry: <T = Foundry>(args: { data: FoundryCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFile: <T = File>(args: { data: FileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateWebsite: <T = Website | null>(args: { data: WebsiteUpdateInput, where: WebsiteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateImages: <T = Images | null>(args: { data: ImagesUpdateInput, where: ImagesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateTag: <T = Tag | null>(args: { data: TagUpdateInput, where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateDesigner: <T = Designer | null>(args: { data: DesignerUpdateInput, where: DesignerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateTypeface: <T = Typeface | null>(args: { data: TypefaceUpdateInput, where: TypefaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateFoundry: <T = Foundry | null>(args: { data: FoundryUpdateInput, where: FoundryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateFile: <T = File | null>(args: { data: FileUpdateInput, where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteWebsite: <T = Website | null>(args: { where: WebsiteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteImages: <T = Images | null>(args: { where: ImagesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteTag: <T = Tag | null>(args: { where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteDesigner: <T = Designer | null>(args: { where: DesignerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteTypeface: <T = Typeface | null>(args: { where: TypefaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteFoundry: <T = Foundry | null>(args: { where: FoundryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteFile: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertWebsite: <T = Website>(args: { where: WebsiteWhereUniqueInput, create: WebsiteCreateInput, update: WebsiteUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertImages: <T = Images>(args: { where: ImagesWhereUniqueInput, create: ImagesCreateInput, update: ImagesUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTag: <T = Tag>(args: { where: TagWhereUniqueInput, create: TagCreateInput, update: TagUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertDesigner: <T = Designer>(args: { where: DesignerWhereUniqueInput, create: DesignerCreateInput, update: DesignerUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTypeface: <T = Typeface>(args: { where: TypefaceWhereUniqueInput, create: TypefaceCreateInput, update: TypefaceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFoundry: <T = Foundry>(args: { where: FoundryWhereUniqueInput, create: FoundryCreateInput, update: FoundryUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFile: <T = File>(args: { where: FileWhereUniqueInput, create: FileCreateInput, update: FileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyWebsites: <T = BatchPayload>(args: { data: WebsiteUpdateManyMutationInput, where?: WebsiteWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTags: <T = BatchPayload>(args: { data: TagUpdateManyMutationInput, where?: TagWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyDesigners: <T = BatchPayload>(args: { data: DesignerUpdateManyMutationInput, where?: DesignerWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTypefaces: <T = BatchPayload>(args: { data: TypefaceUpdateManyMutationInput, where?: TypefaceWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFoundries: <T = BatchPayload>(args: { data: FoundryUpdateManyMutationInput, where?: FoundryWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFiles: <T = BatchPayload>(args: { data: FileUpdateManyMutationInput, where?: FileWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyWebsites: <T = BatchPayload>(args: { where?: WebsiteWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyImageses: <T = BatchPayload>(args: { where?: ImagesWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTags: <T = BatchPayload>(args: { where?: TagWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyDesigners: <T = BatchPayload>(args: { where?: DesignerWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTypefaces: <T = BatchPayload>(args: { where?: TypefaceWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFoundries: <T = BatchPayload>(args: { where?: FoundryWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFiles: <T = BatchPayload>(args: { where?: FileWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    website: <T = WebsiteSubscriptionPayload | null>(args: { where?: WebsiteSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    images: <T = ImagesSubscriptionPayload | null>(args: { where?: ImagesSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    tag: <T = TagSubscriptionPayload | null>(args: { where?: TagSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    designer: <T = DesignerSubscriptionPayload | null>(args: { where?: DesignerSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    typeface: <T = TypefaceSubscriptionPayload | null>(args: { where?: TypefaceSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    foundry: <T = FoundrySubscriptionPayload | null>(args: { where?: FoundrySubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    file: <T = FileSubscriptionPayload | null>(args: { where?: FileSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  Website: (where?: WebsiteWhereInput) => Promise<boolean>
  Images: (where?: ImagesWhereInput) => Promise<boolean>
  Tag: (where?: TagWhereInput) => Promise<boolean>
  Designer: (where?: DesignerWhereInput) => Promise<boolean>
  Typeface: (where?: TypefaceWhereInput) => Promise<boolean>
  Foundry: (where?: FoundryWhereInput) => Promise<boolean>
  File: (where?: FileWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
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
  set: [DesignerWhereUniqueInput!]
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

input FoundryScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [FoundryScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [FoundryScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FoundryScalarWhereInput!]
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
  connect: [FoundryWhereUniqueInput!]
  set: [FoundryWhereUniqueInput!]
  disconnect: [FoundryWhereUniqueInput!]
  delete: [FoundryWhereUniqueInput!]
  update: [FoundryUpdateWithWhereUniqueWithoutTypefacesInput!]
  updateMany: [FoundryUpdateManyWithWhereNestedInput!]
  deleteMany: [FoundryScalarWhereInput!]
  upsert: [FoundryUpsertWithWhereUniqueWithoutTypefacesInput!]
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

type Images implements Node {
  id: ID!
  website: Website
  thumbnail: File
  full: File
  typeface: Typeface
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
  website: WebsiteCreateOneWithoutImagesInput
  thumbnail: FileCreateOneInput
  full: FileCreateOneInput
  typeface: TypefaceCreateOneWithoutImagesInput
}

input ImagesCreateOneWithoutTypefaceInput {
  create: ImagesCreateWithoutTypefaceInput
  connect: ImagesWhereUniqueInput
}

input ImagesCreateOneWithoutWebsiteInput {
  create: ImagesCreateWithoutWebsiteInput
  connect: ImagesWhereUniqueInput
}

input ImagesCreateWithoutTypefaceInput {
  website: WebsiteCreateOneWithoutImagesInput
  thumbnail: FileCreateOneInput
  full: FileCreateOneInput
}

input ImagesCreateWithoutWebsiteInput {
  thumbnail: FileCreateOneInput
  full: FileCreateOneInput
  typeface: TypefaceCreateOneWithoutImagesInput
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

input ImagesUpdateInput {
  website: WebsiteUpdateOneWithoutImagesInput
  thumbnail: FileUpdateOneInput
  full: FileUpdateOneInput
  typeface: TypefaceUpdateOneWithoutImagesInput
}

input ImagesUpdateOneWithoutTypefaceInput {
  create: ImagesCreateWithoutTypefaceInput
  connect: ImagesWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ImagesUpdateWithoutTypefaceDataInput
  upsert: ImagesUpsertWithoutTypefaceInput
}

input ImagesUpdateOneWithoutWebsiteInput {
  create: ImagesCreateWithoutWebsiteInput
  connect: ImagesWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ImagesUpdateWithoutWebsiteDataInput
  upsert: ImagesUpsertWithoutWebsiteInput
}

input ImagesUpdateWithoutTypefaceDataInput {
  website: WebsiteUpdateOneWithoutImagesInput
  thumbnail: FileUpdateOneInput
  full: FileUpdateOneInput
}

input ImagesUpdateWithoutWebsiteDataInput {
  thumbnail: FileUpdateOneInput
  full: FileUpdateOneInput
  typeface: TypefaceUpdateOneWithoutImagesInput
}

input ImagesUpsertWithoutTypefaceInput {
  update: ImagesUpdateWithoutTypefaceDataInput!
  create: ImagesCreateWithoutTypefaceInput!
}

input ImagesUpsertWithoutWebsiteInput {
  update: ImagesUpdateWithoutWebsiteDataInput!
  create: ImagesCreateWithoutWebsiteInput!
}

input ImagesWhereInput {
  """Logical AND on all given filters."""
  AND: [ImagesWhereInput!]

  """Logical OR on all given filters."""
  OR: [ImagesWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ImagesWhereInput!]
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
  website: WebsiteWhereInput
  thumbnail: FileWhereInput
  full: FileWhereInput
  typeface: TypefaceWhereInput
}

input ImagesWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createWebsite(data: WebsiteCreateInput!): Website!
  createImages(data: ImagesCreateInput!): Images!
  createTag(data: TagCreateInput!): Tag!
  createDesigner(data: DesignerCreateInput!): Designer!
  createTypeface(data: TypefaceCreateInput!): Typeface!
  createFoundry(data: FoundryCreateInput!): Foundry!
  createFile(data: FileCreateInput!): File!
  createUser(data: UserCreateInput!): User!
  updateWebsite(data: WebsiteUpdateInput!, where: WebsiteWhereUniqueInput!): Website
  updateImages(data: ImagesUpdateInput!, where: ImagesWhereUniqueInput!): Images
  updateTag(data: TagUpdateInput!, where: TagWhereUniqueInput!): Tag
  updateDesigner(data: DesignerUpdateInput!, where: DesignerWhereUniqueInput!): Designer
  updateTypeface(data: TypefaceUpdateInput!, where: TypefaceWhereUniqueInput!): Typeface
  updateFoundry(data: FoundryUpdateInput!, where: FoundryWhereUniqueInput!): Foundry
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deleteWebsite(where: WebsiteWhereUniqueInput!): Website
  deleteImages(where: ImagesWhereUniqueInput!): Images
  deleteTag(where: TagWhereUniqueInput!): Tag
  deleteDesigner(where: DesignerWhereUniqueInput!): Designer
  deleteTypeface(where: TypefaceWhereUniqueInput!): Typeface
  deleteFoundry(where: FoundryWhereUniqueInput!): Foundry
  deleteFile(where: FileWhereUniqueInput!): File
  deleteUser(where: UserWhereUniqueInput!): User
  upsertWebsite(where: WebsiteWhereUniqueInput!, create: WebsiteCreateInput!, update: WebsiteUpdateInput!): Website!
  upsertImages(where: ImagesWhereUniqueInput!, create: ImagesCreateInput!, update: ImagesUpdateInput!): Images!
  upsertTag(where: TagWhereUniqueInput!, create: TagCreateInput!, update: TagUpdateInput!): Tag!
  upsertDesigner(where: DesignerWhereUniqueInput!, create: DesignerCreateInput!, update: DesignerUpdateInput!): Designer!
  upsertTypeface(where: TypefaceWhereUniqueInput!, create: TypefaceCreateInput!, update: TypefaceUpdateInput!): Typeface!
  upsertFoundry(where: FoundryWhereUniqueInput!, create: FoundryCreateInput!, update: FoundryUpdateInput!): Foundry!
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyWebsites(data: WebsiteUpdateManyMutationInput!, where: WebsiteWhereInput): BatchPayload!
  updateManyTags(data: TagUpdateManyMutationInput!, where: TagWhereInput): BatchPayload!
  updateManyDesigners(data: DesignerUpdateManyMutationInput!, where: DesignerWhereInput): BatchPayload!
  updateManyTypefaces(data: TypefaceUpdateManyMutationInput!, where: TypefaceWhereInput): BatchPayload!
  updateManyFoundries(data: FoundryUpdateManyMutationInput!, where: FoundryWhereInput): BatchPayload!
  updateManyFiles(data: FileUpdateManyMutationInput!, where: FileWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  deleteManyWebsites(where: WebsiteWhereInput): BatchPayload!
  deleteManyImageses(where: ImagesWhereInput): BatchPayload!
  deleteManyTags(where: TagWhereInput): BatchPayload!
  deleteManyDesigners(where: DesignerWhereInput): BatchPayload!
  deleteManyTypefaces(where: TypefaceWhereInput): BatchPayload!
  deleteManyFoundries(where: FoundryWhereInput): BatchPayload!
  deleteManyFiles(where: FileWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
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
  imageses(where: ImagesWhereInput, orderBy: ImagesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Images]!
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag]!
  designers(where: DesignerWhereInput, orderBy: DesignerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Designer]!
  typefaces(where: TypefaceWhereInput, orderBy: TypefaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Typeface]!
  foundries(where: FoundryWhereInput, orderBy: FoundryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Foundry]!
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  website(where: WebsiteWhereUniqueInput!): Website
  images(where: ImagesWhereUniqueInput!): Images
  tag(where: TagWhereUniqueInput!): Tag
  designer(where: DesignerWhereUniqueInput!): Designer
  typeface(where: TypefaceWhereUniqueInput!): Typeface
  foundry(where: FoundryWhereUniqueInput!): Foundry
  file(where: FileWhereUniqueInput!): File
  user(where: UserWhereUniqueInput!): User
  websitesConnection(where: WebsiteWhereInput, orderBy: WebsiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WebsiteConnection!
  imagesesConnection(where: ImagesWhereInput, orderBy: ImagesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ImagesConnection!
  tagsConnection(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TagConnection!
  designersConnection(where: DesignerWhereInput, orderBy: DesignerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DesignerConnection!
  typefacesConnection(where: TypefaceWhereInput, orderBy: TypefaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TypefaceConnection!
  foundriesConnection(where: FoundryWhereInput, orderBy: FoundryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FoundryConnection!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!

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
  images(where: ImagesSubscriptionWhereInput): ImagesSubscriptionPayload
  tag(where: TagSubscriptionWhereInput): TagSubscriptionPayload
  designer(where: DesignerSubscriptionWhereInput): DesignerSubscriptionPayload
  typeface(where: TypefaceSubscriptionWhereInput): TypefaceSubscriptionPayload
  foundry(where: FoundrySubscriptionWhereInput): FoundrySubscriptionPayload
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Tag implements Node {
  id: ID!
  name: String!
  website(where: WebsiteWhereInput, orderBy: WebsiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Website!]
  typeface(where: TypefaceWhereInput, orderBy: TypefaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Typeface!]
}

"""A connection to a list of items."""
type TagConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TagEdge]!
  aggregate: AggregateTag!
}

input TagCreateInput {
  name: String!
  website: WebsiteCreateManyWithoutTagsInput
  typeface: TypefaceCreateManyWithoutTagsInput
}

input TagCreateManyWithoutTypefaceInput {
  create: [TagCreateWithoutTypefaceInput!]
  connect: [TagWhereUniqueInput!]
}

input TagCreateManyWithoutWebsiteInput {
  create: [TagCreateWithoutWebsiteInput!]
  connect: [TagWhereUniqueInput!]
}

input TagCreateWithoutTypefaceInput {
  name: String!
  website: WebsiteCreateManyWithoutTagsInput
}

input TagCreateWithoutWebsiteInput {
  name: String!
  typeface: TypefaceCreateManyWithoutTagsInput
}

"""An edge in a connection."""
type TagEdge {
  """The item at the end of the edge."""
  node: Tag!

  """A cursor for use in pagination."""
  cursor: String!
}

enum TagOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type TagPreviousValues {
  id: ID!
  name: String!
}

input TagScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [TagScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [TagScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TagScalarWhereInput!]
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
}

type TagSubscriptionPayload {
  mutation: MutationType!
  node: Tag
  updatedFields: [String!]
  previousValues: TagPreviousValues
}

input TagSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TagSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TagSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TagSubscriptionWhereInput!]

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
  node: TagWhereInput
}

input TagUpdateInput {
  name: String
  website: WebsiteUpdateManyWithoutTagsInput
  typeface: TypefaceUpdateManyWithoutTagsInput
}

input TagUpdateManyDataInput {
  name: String
}

input TagUpdateManyMutationInput {
  name: String
}

input TagUpdateManyWithoutTypefaceInput {
  create: [TagCreateWithoutTypefaceInput!]
  connect: [TagWhereUniqueInput!]
  set: [TagWhereUniqueInput!]
  disconnect: [TagWhereUniqueInput!]
  delete: [TagWhereUniqueInput!]
  update: [TagUpdateWithWhereUniqueWithoutTypefaceInput!]
  updateMany: [TagUpdateManyWithWhereNestedInput!]
  deleteMany: [TagScalarWhereInput!]
  upsert: [TagUpsertWithWhereUniqueWithoutTypefaceInput!]
}

input TagUpdateManyWithoutWebsiteInput {
  create: [TagCreateWithoutWebsiteInput!]
  connect: [TagWhereUniqueInput!]
  set: [TagWhereUniqueInput!]
  disconnect: [TagWhereUniqueInput!]
  delete: [TagWhereUniqueInput!]
  update: [TagUpdateWithWhereUniqueWithoutWebsiteInput!]
  updateMany: [TagUpdateManyWithWhereNestedInput!]
  deleteMany: [TagScalarWhereInput!]
  upsert: [TagUpsertWithWhereUniqueWithoutWebsiteInput!]
}

input TagUpdateManyWithWhereNestedInput {
  where: TagScalarWhereInput!
  data: TagUpdateManyDataInput!
}

input TagUpdateWithoutTypefaceDataInput {
  name: String
  website: WebsiteUpdateManyWithoutTagsInput
}

input TagUpdateWithoutWebsiteDataInput {
  name: String
  typeface: TypefaceUpdateManyWithoutTagsInput
}

input TagUpdateWithWhereUniqueWithoutTypefaceInput {
  where: TagWhereUniqueInput!
  data: TagUpdateWithoutTypefaceDataInput!
}

input TagUpdateWithWhereUniqueWithoutWebsiteInput {
  where: TagWhereUniqueInput!
  data: TagUpdateWithoutWebsiteDataInput!
}

input TagUpsertWithWhereUniqueWithoutTypefaceInput {
  where: TagWhereUniqueInput!
  update: TagUpdateWithoutTypefaceDataInput!
  create: TagCreateWithoutTypefaceInput!
}

input TagUpsertWithWhereUniqueWithoutWebsiteInput {
  where: TagWhereUniqueInput!
  update: TagUpdateWithoutWebsiteDataInput!
  create: TagCreateWithoutWebsiteInput!
}

input TagWhereInput {
  """Logical AND on all given filters."""
  AND: [TagWhereInput!]

  """Logical OR on all given filters."""
  OR: [TagWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TagWhereInput!]
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
  website_every: WebsiteWhereInput
  website_some: WebsiteWhereInput
  website_none: WebsiteWhereInput
  typeface_every: TypefaceWhereInput
  typeface_some: TypefaceWhereInput
  typeface_none: TypefaceWhereInput
}

input TagWhereUniqueInput {
  id: ID
}

type Typeface implements Node {
  id: ID!
  name: String!
  downloadUrl: String!
  description: String
  slug: String!
  usedBy(where: WebsiteWhereInput, orderBy: WebsiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Website!]
  addedBy: User!
  foundries(where: FoundryWhereInput, orderBy: FoundryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Foundry!]
  designers(where: DesignerWhereInput, orderBy: DesignerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Designer!]
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
  images: Images
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
  foundries: FoundryCreateManyWithoutTypefacesInput
  designers: DesignerCreateManyWithoutTypefacesInput
  tags: TagCreateManyWithoutTypefaceInput
  images: ImagesCreateOneWithoutTypefaceInput
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

input TypefaceCreateManyWithoutTagsInput {
  create: [TypefaceCreateWithoutTagsInput!]
  connect: [TypefaceWhereUniqueInput!]
}

input TypefaceCreateManyWithoutUsedByInput {
  create: [TypefaceCreateWithoutUsedByInput!]
  connect: [TypefaceWhereUniqueInput!]
}

input TypefaceCreateOneWithoutImagesInput {
  create: TypefaceCreateWithoutImagesInput
  connect: TypefaceWhereUniqueInput
}

input TypefaceCreateWithoutAddedByInput {
  name: String!
  downloadUrl: String!
  description: String
  slug: String!
  usedBy: WebsiteCreateManyWithoutTypefacesInput
  foundries: FoundryCreateManyWithoutTypefacesInput
  designers: DesignerCreateManyWithoutTypefacesInput
  tags: TagCreateManyWithoutTypefaceInput
  images: ImagesCreateOneWithoutTypefaceInput
}

input TypefaceCreateWithoutDesignersInput {
  name: String!
  downloadUrl: String!
  description: String
  slug: String!
  usedBy: WebsiteCreateManyWithoutTypefacesInput
  addedBy: UserCreateOneWithoutTypefacesInput!
  foundries: FoundryCreateManyWithoutTypefacesInput
  tags: TagCreateManyWithoutTypefaceInput
  images: ImagesCreateOneWithoutTypefaceInput
}

input TypefaceCreateWithoutFoundriesInput {
  name: String!
  downloadUrl: String!
  description: String
  slug: String!
  usedBy: WebsiteCreateManyWithoutTypefacesInput
  addedBy: UserCreateOneWithoutTypefacesInput!
  designers: DesignerCreateManyWithoutTypefacesInput
  tags: TagCreateManyWithoutTypefaceInput
  images: ImagesCreateOneWithoutTypefaceInput
}

input TypefaceCreateWithoutImagesInput {
  name: String!
  downloadUrl: String!
  description: String
  slug: String!
  usedBy: WebsiteCreateManyWithoutTypefacesInput
  addedBy: UserCreateOneWithoutTypefacesInput!
  foundries: FoundryCreateManyWithoutTypefacesInput
  designers: DesignerCreateManyWithoutTypefacesInput
  tags: TagCreateManyWithoutTypefaceInput
}

input TypefaceCreateWithoutTagsInput {
  name: String!
  downloadUrl: String!
  description: String
  slug: String!
  usedBy: WebsiteCreateManyWithoutTypefacesInput
  addedBy: UserCreateOneWithoutTypefacesInput!
  foundries: FoundryCreateManyWithoutTypefacesInput
  designers: DesignerCreateManyWithoutTypefacesInput
  images: ImagesCreateOneWithoutTypefaceInput
}

input TypefaceCreateWithoutUsedByInput {
  name: String!
  downloadUrl: String!
  description: String
  slug: String!
  addedBy: UserCreateOneWithoutTypefacesInput!
  foundries: FoundryCreateManyWithoutTypefacesInput
  designers: DesignerCreateManyWithoutTypefacesInput
  tags: TagCreateManyWithoutTypefaceInput
  images: ImagesCreateOneWithoutTypefaceInput
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
  foundries: FoundryUpdateManyWithoutTypefacesInput
  designers: DesignerUpdateManyWithoutTypefacesInput
  tags: TagUpdateManyWithoutTypefaceInput
  images: ImagesUpdateOneWithoutTypefaceInput
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
  set: [TypefaceWhereUniqueInput!]
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
  set: [TypefaceWhereUniqueInput!]
  disconnect: [TypefaceWhereUniqueInput!]
  delete: [TypefaceWhereUniqueInput!]
  update: [TypefaceUpdateWithWhereUniqueWithoutDesignersInput!]
  updateMany: [TypefaceUpdateManyWithWhereNestedInput!]
  deleteMany: [TypefaceScalarWhereInput!]
  upsert: [TypefaceUpsertWithWhereUniqueWithoutDesignersInput!]
}

input TypefaceUpdateManyWithoutFoundriesInput {
  create: [TypefaceCreateWithoutFoundriesInput!]
  connect: [TypefaceWhereUniqueInput!]
  set: [TypefaceWhereUniqueInput!]
  disconnect: [TypefaceWhereUniqueInput!]
  delete: [TypefaceWhereUniqueInput!]
  update: [TypefaceUpdateWithWhereUniqueWithoutFoundriesInput!]
  updateMany: [TypefaceUpdateManyWithWhereNestedInput!]
  deleteMany: [TypefaceScalarWhereInput!]
  upsert: [TypefaceUpsertWithWhereUniqueWithoutFoundriesInput!]
}

input TypefaceUpdateManyWithoutTagsInput {
  create: [TypefaceCreateWithoutTagsInput!]
  connect: [TypefaceWhereUniqueInput!]
  set: [TypefaceWhereUniqueInput!]
  disconnect: [TypefaceWhereUniqueInput!]
  delete: [TypefaceWhereUniqueInput!]
  update: [TypefaceUpdateWithWhereUniqueWithoutTagsInput!]
  updateMany: [TypefaceUpdateManyWithWhereNestedInput!]
  deleteMany: [TypefaceScalarWhereInput!]
  upsert: [TypefaceUpsertWithWhereUniqueWithoutTagsInput!]
}

input TypefaceUpdateManyWithoutUsedByInput {
  create: [TypefaceCreateWithoutUsedByInput!]
  connect: [TypefaceWhereUniqueInput!]
  set: [TypefaceWhereUniqueInput!]
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

input TypefaceUpdateOneWithoutImagesInput {
  create: TypefaceCreateWithoutImagesInput
  connect: TypefaceWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: TypefaceUpdateWithoutImagesDataInput
  upsert: TypefaceUpsertWithoutImagesInput
}

input TypefaceUpdateWithoutAddedByDataInput {
  name: String
  downloadUrl: String
  description: String
  slug: String
  usedBy: WebsiteUpdateManyWithoutTypefacesInput
  foundries: FoundryUpdateManyWithoutTypefacesInput
  designers: DesignerUpdateManyWithoutTypefacesInput
  tags: TagUpdateManyWithoutTypefaceInput
  images: ImagesUpdateOneWithoutTypefaceInput
}

input TypefaceUpdateWithoutDesignersDataInput {
  name: String
  downloadUrl: String
  description: String
  slug: String
  usedBy: WebsiteUpdateManyWithoutTypefacesInput
  addedBy: UserUpdateOneRequiredWithoutTypefacesInput
  foundries: FoundryUpdateManyWithoutTypefacesInput
  tags: TagUpdateManyWithoutTypefaceInput
  images: ImagesUpdateOneWithoutTypefaceInput
}

input TypefaceUpdateWithoutFoundriesDataInput {
  name: String
  downloadUrl: String
  description: String
  slug: String
  usedBy: WebsiteUpdateManyWithoutTypefacesInput
  addedBy: UserUpdateOneRequiredWithoutTypefacesInput
  designers: DesignerUpdateManyWithoutTypefacesInput
  tags: TagUpdateManyWithoutTypefaceInput
  images: ImagesUpdateOneWithoutTypefaceInput
}

input TypefaceUpdateWithoutImagesDataInput {
  name: String
  downloadUrl: String
  description: String
  slug: String
  usedBy: WebsiteUpdateManyWithoutTypefacesInput
  addedBy: UserUpdateOneRequiredWithoutTypefacesInput
  foundries: FoundryUpdateManyWithoutTypefacesInput
  designers: DesignerUpdateManyWithoutTypefacesInput
  tags: TagUpdateManyWithoutTypefaceInput
}

input TypefaceUpdateWithoutTagsDataInput {
  name: String
  downloadUrl: String
  description: String
  slug: String
  usedBy: WebsiteUpdateManyWithoutTypefacesInput
  addedBy: UserUpdateOneRequiredWithoutTypefacesInput
  foundries: FoundryUpdateManyWithoutTypefacesInput
  designers: DesignerUpdateManyWithoutTypefacesInput
  images: ImagesUpdateOneWithoutTypefaceInput
}

input TypefaceUpdateWithoutUsedByDataInput {
  name: String
  downloadUrl: String
  description: String
  slug: String
  addedBy: UserUpdateOneRequiredWithoutTypefacesInput
  foundries: FoundryUpdateManyWithoutTypefacesInput
  designers: DesignerUpdateManyWithoutTypefacesInput
  tags: TagUpdateManyWithoutTypefaceInput
  images: ImagesUpdateOneWithoutTypefaceInput
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

input TypefaceUpdateWithWhereUniqueWithoutTagsInput {
  where: TypefaceWhereUniqueInput!
  data: TypefaceUpdateWithoutTagsDataInput!
}

input TypefaceUpdateWithWhereUniqueWithoutUsedByInput {
  where: TypefaceWhereUniqueInput!
  data: TypefaceUpdateWithoutUsedByDataInput!
}

input TypefaceUpsertWithoutImagesInput {
  update: TypefaceUpdateWithoutImagesDataInput!
  create: TypefaceCreateWithoutImagesInput!
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

input TypefaceUpsertWithWhereUniqueWithoutTagsInput {
  where: TypefaceWhereUniqueInput!
  update: TypefaceUpdateWithoutTagsDataInput!
  create: TypefaceCreateWithoutTagsInput!
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
  foundries_every: FoundryWhereInput
  foundries_some: FoundryWhereInput
  foundries_none: FoundryWhereInput
  designers_every: DesignerWhereInput
  designers_some: DesignerWhereInput
  designers_none: DesignerWhereInput
  tags_every: TagWhereInput
  tags_some: TagWhereInput
  tags_none: TagWhereInput
  images: ImagesWhereInput
}

input TypefaceWhereUniqueInput {
  id: ID
  name: String
  slug: String
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
  images: ImagesCreateOneWithoutWebsiteInput
  addedBy: UserCreateOneWithoutWebsitesInput!
  typefaces: TypefaceCreateManyWithoutUsedByInput
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
  slug: String
  url: String!
  featured: Boolean
  images: ImagesCreateOneWithoutWebsiteInput
  typefaces: TypefaceCreateManyWithoutUsedByInput
  tags: TagCreateManyWithoutWebsiteInput
}

input WebsiteCreateWithoutImagesInput {
  isPublished: Boolean
  title: String!
  slug: String
  url: String!
  featured: Boolean
  addedBy: UserCreateOneWithoutWebsitesInput!
  typefaces: TypefaceCreateManyWithoutUsedByInput
  tags: TagCreateManyWithoutWebsiteInput
}

input WebsiteCreateWithoutTagsInput {
  isPublished: Boolean
  title: String!
  slug: String
  url: String!
  featured: Boolean
  images: ImagesCreateOneWithoutWebsiteInput
  addedBy: UserCreateOneWithoutWebsitesInput!
  typefaces: TypefaceCreateManyWithoutUsedByInput
}

input WebsiteCreateWithoutTypefacesInput {
  isPublished: Boolean
  title: String!
  slug: String
  url: String!
  featured: Boolean
  images: ImagesCreateOneWithoutWebsiteInput
  addedBy: UserCreateOneWithoutWebsitesInput!
  tags: TagCreateManyWithoutWebsiteInput
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
  images: ImagesUpdateOneWithoutWebsiteInput
  addedBy: UserUpdateOneRequiredWithoutWebsitesInput
  typefaces: TypefaceUpdateManyWithoutUsedByInput
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
  connect: [WebsiteWhereUniqueInput!]
  set: [WebsiteWhereUniqueInput!]
  disconnect: [WebsiteWhereUniqueInput!]
  delete: [WebsiteWhereUniqueInput!]
  update: [WebsiteUpdateWithWhereUniqueWithoutAddedByInput!]
  updateMany: [WebsiteUpdateManyWithWhereNestedInput!]
  deleteMany: [WebsiteScalarWhereInput!]
  upsert: [WebsiteUpsertWithWhereUniqueWithoutAddedByInput!]
}

input WebsiteUpdateManyWithoutTagsInput {
  create: [WebsiteCreateWithoutTagsInput!]
  connect: [WebsiteWhereUniqueInput!]
  set: [WebsiteWhereUniqueInput!]
  disconnect: [WebsiteWhereUniqueInput!]
  delete: [WebsiteWhereUniqueInput!]
  update: [WebsiteUpdateWithWhereUniqueWithoutTagsInput!]
  updateMany: [WebsiteUpdateManyWithWhereNestedInput!]
  deleteMany: [WebsiteScalarWhereInput!]
  upsert: [WebsiteUpsertWithWhereUniqueWithoutTagsInput!]
}

input WebsiteUpdateManyWithoutTypefacesInput {
  create: [WebsiteCreateWithoutTypefacesInput!]
  connect: [WebsiteWhereUniqueInput!]
  set: [WebsiteWhereUniqueInput!]
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

input WebsiteUpdateOneWithoutImagesInput {
  create: WebsiteCreateWithoutImagesInput
  connect: WebsiteWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: WebsiteUpdateWithoutImagesDataInput
  upsert: WebsiteUpsertWithoutImagesInput
}

input WebsiteUpdateWithoutAddedByDataInput {
  isPublished: Boolean
  title: String
  slug: String
  url: String
  featured: Boolean
  images: ImagesUpdateOneWithoutWebsiteInput
  typefaces: TypefaceUpdateManyWithoutUsedByInput
  tags: TagUpdateManyWithoutWebsiteInput
}

input WebsiteUpdateWithoutImagesDataInput {
  isPublished: Boolean
  title: String
  slug: String
  url: String
  featured: Boolean
  addedBy: UserUpdateOneRequiredWithoutWebsitesInput
  typefaces: TypefaceUpdateManyWithoutUsedByInput
  tags: TagUpdateManyWithoutWebsiteInput
}

input WebsiteUpdateWithoutTagsDataInput {
  isPublished: Boolean
  title: String
  slug: String
  url: String
  featured: Boolean
  images: ImagesUpdateOneWithoutWebsiteInput
  addedBy: UserUpdateOneRequiredWithoutWebsitesInput
  typefaces: TypefaceUpdateManyWithoutUsedByInput
}

input WebsiteUpdateWithoutTypefacesDataInput {
  isPublished: Boolean
  title: String
  slug: String
  url: String
  featured: Boolean
  images: ImagesUpdateOneWithoutWebsiteInput
  addedBy: UserUpdateOneRequiredWithoutWebsitesInput
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
  tags_every: TagWhereInput
  tags_some: TagWhereInput
  tags_none: TagWhereInput
}

input WebsiteWhereUniqueInput {
  id: ID
  title: String
  slug: String
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

export type TagOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

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
  'createdAt_ASC' |
  'createdAt_DESC' |
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
  'updatedAt_DESC'

export interface DesignerCreateInput {
  name: String
  url: String
  typefaces?: TypefaceCreateManyWithoutDesignersInput | null
  addedBy: UserCreateOneInput
}

export interface DesignerCreateManyWithoutTypefacesInput {
  create?: DesignerCreateWithoutTypefacesInput[] | DesignerCreateWithoutTypefacesInput | null
  connect?: DesignerWhereUniqueInput[] | DesignerWhereUniqueInput | null
}

export interface DesignerCreateWithoutTypefacesInput {
  name: String
  url: String
  addedBy: UserCreateOneInput
}

export interface DesignerScalarWhereInput {
  AND?: DesignerScalarWhereInput[] | DesignerScalarWhereInput | null
  OR?: DesignerScalarWhereInput[] | DesignerScalarWhereInput | null
  NOT?: DesignerScalarWhereInput[] | DesignerScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  url?: String | null
  url_not?: String | null
  url_in?: String[] | String | null
  url_not_in?: String[] | String | null
  url_lt?: String | null
  url_lte?: String | null
  url_gt?: String | null
  url_gte?: String | null
  url_contains?: String | null
  url_not_contains?: String | null
  url_starts_with?: String | null
  url_not_starts_with?: String | null
  url_ends_with?: String | null
  url_not_ends_with?: String | null
}

export interface DesignerSubscriptionWhereInput {
  AND?: DesignerSubscriptionWhereInput[] | DesignerSubscriptionWhereInput | null
  OR?: DesignerSubscriptionWhereInput[] | DesignerSubscriptionWhereInput | null
  NOT?: DesignerSubscriptionWhereInput[] | DesignerSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: DesignerWhereInput | null
}

export interface DesignerUpdateInput {
  name?: String | null
  url?: String | null
  typefaces?: TypefaceUpdateManyWithoutDesignersInput | null
  addedBy?: UserUpdateOneRequiredInput | null
}

export interface DesignerUpdateManyDataInput {
  name?: String | null
  url?: String | null
}

export interface DesignerUpdateManyMutationInput {
  name?: String | null
  url?: String | null
}

export interface DesignerUpdateManyWithoutTypefacesInput {
  create?: DesignerCreateWithoutTypefacesInput[] | DesignerCreateWithoutTypefacesInput | null
  connect?: DesignerWhereUniqueInput[] | DesignerWhereUniqueInput | null
  set?: DesignerWhereUniqueInput[] | DesignerWhereUniqueInput | null
  disconnect?: DesignerWhereUniqueInput[] | DesignerWhereUniqueInput | null
  delete?: DesignerWhereUniqueInput[] | DesignerWhereUniqueInput | null
  update?: DesignerUpdateWithWhereUniqueWithoutTypefacesInput[] | DesignerUpdateWithWhereUniqueWithoutTypefacesInput | null
  updateMany?: DesignerUpdateManyWithWhereNestedInput[] | DesignerUpdateManyWithWhereNestedInput | null
  deleteMany?: DesignerScalarWhereInput[] | DesignerScalarWhereInput | null
  upsert?: DesignerUpsertWithWhereUniqueWithoutTypefacesInput[] | DesignerUpsertWithWhereUniqueWithoutTypefacesInput | null
}

export interface DesignerUpdateManyWithWhereNestedInput {
  where: DesignerScalarWhereInput
  data: DesignerUpdateManyDataInput
}

export interface DesignerUpdateWithoutTypefacesDataInput {
  name?: String | null
  url?: String | null
  addedBy?: UserUpdateOneRequiredInput | null
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
  AND?: DesignerWhereInput[] | DesignerWhereInput | null
  OR?: DesignerWhereInput[] | DesignerWhereInput | null
  NOT?: DesignerWhereInput[] | DesignerWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  url?: String | null
  url_not?: String | null
  url_in?: String[] | String | null
  url_not_in?: String[] | String | null
  url_lt?: String | null
  url_lte?: String | null
  url_gt?: String | null
  url_gte?: String | null
  url_contains?: String | null
  url_not_contains?: String | null
  url_starts_with?: String | null
  url_not_starts_with?: String | null
  url_ends_with?: String | null
  url_not_ends_with?: String | null
  typefaces_every?: TypefaceWhereInput | null
  typefaces_some?: TypefaceWhereInput | null
  typefaces_none?: TypefaceWhereInput | null
  addedBy?: UserWhereInput | null
}

export interface DesignerWhereUniqueInput {
  id?: ID_Input | null
  name?: String | null
}

export interface FileCreateInput {
  filename: String
  mimetype: String
  encoding: String
  url: String
}

export interface FileCreateOneInput {
  create?: FileCreateInput | null
  connect?: FileWhereUniqueInput | null
}

export interface FileSubscriptionWhereInput {
  AND?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput | null
  OR?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput | null
  NOT?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: FileWhereInput | null
}

export interface FileUpdateDataInput {
  filename?: String | null
  mimetype?: String | null
  encoding?: String | null
  url?: String | null
}

export interface FileUpdateInput {
  filename?: String | null
  mimetype?: String | null
  encoding?: String | null
  url?: String | null
}

export interface FileUpdateManyMutationInput {
  filename?: String | null
  mimetype?: String | null
  encoding?: String | null
  url?: String | null
}

export interface FileUpdateOneInput {
  create?: FileCreateInput | null
  connect?: FileWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: FileUpdateDataInput | null
  upsert?: FileUpsertNestedInput | null
}

export interface FileUpsertNestedInput {
  update: FileUpdateDataInput
  create: FileCreateInput
}

export interface FileWhereInput {
  AND?: FileWhereInput[] | FileWhereInput | null
  OR?: FileWhereInput[] | FileWhereInput | null
  NOT?: FileWhereInput[] | FileWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  filename?: String | null
  filename_not?: String | null
  filename_in?: String[] | String | null
  filename_not_in?: String[] | String | null
  filename_lt?: String | null
  filename_lte?: String | null
  filename_gt?: String | null
  filename_gte?: String | null
  filename_contains?: String | null
  filename_not_contains?: String | null
  filename_starts_with?: String | null
  filename_not_starts_with?: String | null
  filename_ends_with?: String | null
  filename_not_ends_with?: String | null
  mimetype?: String | null
  mimetype_not?: String | null
  mimetype_in?: String[] | String | null
  mimetype_not_in?: String[] | String | null
  mimetype_lt?: String | null
  mimetype_lte?: String | null
  mimetype_gt?: String | null
  mimetype_gte?: String | null
  mimetype_contains?: String | null
  mimetype_not_contains?: String | null
  mimetype_starts_with?: String | null
  mimetype_not_starts_with?: String | null
  mimetype_ends_with?: String | null
  mimetype_not_ends_with?: String | null
  encoding?: String | null
  encoding_not?: String | null
  encoding_in?: String[] | String | null
  encoding_not_in?: String[] | String | null
  encoding_lt?: String | null
  encoding_lte?: String | null
  encoding_gt?: String | null
  encoding_gte?: String | null
  encoding_contains?: String | null
  encoding_not_contains?: String | null
  encoding_starts_with?: String | null
  encoding_not_starts_with?: String | null
  encoding_ends_with?: String | null
  encoding_not_ends_with?: String | null
  url?: String | null
  url_not?: String | null
  url_in?: String[] | String | null
  url_not_in?: String[] | String | null
  url_lt?: String | null
  url_lte?: String | null
  url_gt?: String | null
  url_gte?: String | null
  url_contains?: String | null
  url_not_contains?: String | null
  url_starts_with?: String | null
  url_not_starts_with?: String | null
  url_ends_with?: String | null
  url_not_ends_with?: String | null
}

export interface FileWhereUniqueInput {
  id?: ID_Input | null
  url?: String | null
}

export interface FoundryCreateInput {
  name: String
  url: String
  typefaces?: TypefaceCreateManyWithoutFoundriesInput | null
  addedBy: UserCreateOneInput
}

export interface FoundryCreateManyWithoutTypefacesInput {
  create?: FoundryCreateWithoutTypefacesInput[] | FoundryCreateWithoutTypefacesInput | null
  connect?: FoundryWhereUniqueInput[] | FoundryWhereUniqueInput | null
}

export interface FoundryCreateWithoutTypefacesInput {
  name: String
  url: String
  addedBy: UserCreateOneInput
}

export interface FoundryScalarWhereInput {
  AND?: FoundryScalarWhereInput[] | FoundryScalarWhereInput | null
  OR?: FoundryScalarWhereInput[] | FoundryScalarWhereInput | null
  NOT?: FoundryScalarWhereInput[] | FoundryScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  url?: String | null
  url_not?: String | null
  url_in?: String[] | String | null
  url_not_in?: String[] | String | null
  url_lt?: String | null
  url_lte?: String | null
  url_gt?: String | null
  url_gte?: String | null
  url_contains?: String | null
  url_not_contains?: String | null
  url_starts_with?: String | null
  url_not_starts_with?: String | null
  url_ends_with?: String | null
  url_not_ends_with?: String | null
}

export interface FoundrySubscriptionWhereInput {
  AND?: FoundrySubscriptionWhereInput[] | FoundrySubscriptionWhereInput | null
  OR?: FoundrySubscriptionWhereInput[] | FoundrySubscriptionWhereInput | null
  NOT?: FoundrySubscriptionWhereInput[] | FoundrySubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: FoundryWhereInput | null
}

export interface FoundryUpdateInput {
  name?: String | null
  url?: String | null
  typefaces?: TypefaceUpdateManyWithoutFoundriesInput | null
  addedBy?: UserUpdateOneRequiredInput | null
}

export interface FoundryUpdateManyDataInput {
  name?: String | null
  url?: String | null
}

export interface FoundryUpdateManyMutationInput {
  name?: String | null
  url?: String | null
}

export interface FoundryUpdateManyWithoutTypefacesInput {
  create?: FoundryCreateWithoutTypefacesInput[] | FoundryCreateWithoutTypefacesInput | null
  connect?: FoundryWhereUniqueInput[] | FoundryWhereUniqueInput | null
  set?: FoundryWhereUniqueInput[] | FoundryWhereUniqueInput | null
  disconnect?: FoundryWhereUniqueInput[] | FoundryWhereUniqueInput | null
  delete?: FoundryWhereUniqueInput[] | FoundryWhereUniqueInput | null
  update?: FoundryUpdateWithWhereUniqueWithoutTypefacesInput[] | FoundryUpdateWithWhereUniqueWithoutTypefacesInput | null
  updateMany?: FoundryUpdateManyWithWhereNestedInput[] | FoundryUpdateManyWithWhereNestedInput | null
  deleteMany?: FoundryScalarWhereInput[] | FoundryScalarWhereInput | null
  upsert?: FoundryUpsertWithWhereUniqueWithoutTypefacesInput[] | FoundryUpsertWithWhereUniqueWithoutTypefacesInput | null
}

export interface FoundryUpdateManyWithWhereNestedInput {
  where: FoundryScalarWhereInput
  data: FoundryUpdateManyDataInput
}

export interface FoundryUpdateWithoutTypefacesDataInput {
  name?: String | null
  url?: String | null
  addedBy?: UserUpdateOneRequiredInput | null
}

export interface FoundryUpdateWithWhereUniqueWithoutTypefacesInput {
  where: FoundryWhereUniqueInput
  data: FoundryUpdateWithoutTypefacesDataInput
}

export interface FoundryUpsertWithWhereUniqueWithoutTypefacesInput {
  where: FoundryWhereUniqueInput
  update: FoundryUpdateWithoutTypefacesDataInput
  create: FoundryCreateWithoutTypefacesInput
}

export interface FoundryWhereInput {
  AND?: FoundryWhereInput[] | FoundryWhereInput | null
  OR?: FoundryWhereInput[] | FoundryWhereInput | null
  NOT?: FoundryWhereInput[] | FoundryWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  url?: String | null
  url_not?: String | null
  url_in?: String[] | String | null
  url_not_in?: String[] | String | null
  url_lt?: String | null
  url_lte?: String | null
  url_gt?: String | null
  url_gte?: String | null
  url_contains?: String | null
  url_not_contains?: String | null
  url_starts_with?: String | null
  url_not_starts_with?: String | null
  url_ends_with?: String | null
  url_not_ends_with?: String | null
  typefaces_every?: TypefaceWhereInput | null
  typefaces_some?: TypefaceWhereInput | null
  typefaces_none?: TypefaceWhereInput | null
  addedBy?: UserWhereInput | null
}

export interface FoundryWhereUniqueInput {
  id?: ID_Input | null
  name?: String | null
}

export interface ImagesCreateInput {
  website?: WebsiteCreateOneWithoutImagesInput | null
  thumbnail?: FileCreateOneInput | null
  full?: FileCreateOneInput | null
  typeface?: TypefaceCreateOneWithoutImagesInput | null
}

export interface ImagesCreateOneWithoutTypefaceInput {
  create?: ImagesCreateWithoutTypefaceInput | null
  connect?: ImagesWhereUniqueInput | null
}

export interface ImagesCreateOneWithoutWebsiteInput {
  create?: ImagesCreateWithoutWebsiteInput | null
  connect?: ImagesWhereUniqueInput | null
}

export interface ImagesCreateWithoutTypefaceInput {
  website?: WebsiteCreateOneWithoutImagesInput | null
  thumbnail?: FileCreateOneInput | null
  full?: FileCreateOneInput | null
}

export interface ImagesCreateWithoutWebsiteInput {
  thumbnail?: FileCreateOneInput | null
  full?: FileCreateOneInput | null
  typeface?: TypefaceCreateOneWithoutImagesInput | null
}

export interface ImagesSubscriptionWhereInput {
  AND?: ImagesSubscriptionWhereInput[] | ImagesSubscriptionWhereInput | null
  OR?: ImagesSubscriptionWhereInput[] | ImagesSubscriptionWhereInput | null
  NOT?: ImagesSubscriptionWhereInput[] | ImagesSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ImagesWhereInput | null
}

export interface ImagesUpdateInput {
  website?: WebsiteUpdateOneWithoutImagesInput | null
  thumbnail?: FileUpdateOneInput | null
  full?: FileUpdateOneInput | null
  typeface?: TypefaceUpdateOneWithoutImagesInput | null
}

export interface ImagesUpdateOneWithoutTypefaceInput {
  create?: ImagesCreateWithoutTypefaceInput | null
  connect?: ImagesWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: ImagesUpdateWithoutTypefaceDataInput | null
  upsert?: ImagesUpsertWithoutTypefaceInput | null
}

export interface ImagesUpdateOneWithoutWebsiteInput {
  create?: ImagesCreateWithoutWebsiteInput | null
  connect?: ImagesWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: ImagesUpdateWithoutWebsiteDataInput | null
  upsert?: ImagesUpsertWithoutWebsiteInput | null
}

export interface ImagesUpdateWithoutTypefaceDataInput {
  website?: WebsiteUpdateOneWithoutImagesInput | null
  thumbnail?: FileUpdateOneInput | null
  full?: FileUpdateOneInput | null
}

export interface ImagesUpdateWithoutWebsiteDataInput {
  thumbnail?: FileUpdateOneInput | null
  full?: FileUpdateOneInput | null
  typeface?: TypefaceUpdateOneWithoutImagesInput | null
}

export interface ImagesUpsertWithoutTypefaceInput {
  update: ImagesUpdateWithoutTypefaceDataInput
  create: ImagesCreateWithoutTypefaceInput
}

export interface ImagesUpsertWithoutWebsiteInput {
  update: ImagesUpdateWithoutWebsiteDataInput
  create: ImagesCreateWithoutWebsiteInput
}

export interface ImagesWhereInput {
  AND?: ImagesWhereInput[] | ImagesWhereInput | null
  OR?: ImagesWhereInput[] | ImagesWhereInput | null
  NOT?: ImagesWhereInput[] | ImagesWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  website?: WebsiteWhereInput | null
  thumbnail?: FileWhereInput | null
  full?: FileWhereInput | null
  typeface?: TypefaceWhereInput | null
}

export interface ImagesWhereUniqueInput {
  id?: ID_Input | null
}

export interface TagCreateInput {
  name: String
  website?: WebsiteCreateManyWithoutTagsInput | null
  typeface?: TypefaceCreateManyWithoutTagsInput | null
}

export interface TagCreateManyWithoutTypefaceInput {
  create?: TagCreateWithoutTypefaceInput[] | TagCreateWithoutTypefaceInput | null
  connect?: TagWhereUniqueInput[] | TagWhereUniqueInput | null
}

export interface TagCreateManyWithoutWebsiteInput {
  create?: TagCreateWithoutWebsiteInput[] | TagCreateWithoutWebsiteInput | null
  connect?: TagWhereUniqueInput[] | TagWhereUniqueInput | null
}

export interface TagCreateWithoutTypefaceInput {
  name: String
  website?: WebsiteCreateManyWithoutTagsInput | null
}

export interface TagCreateWithoutWebsiteInput {
  name: String
  typeface?: TypefaceCreateManyWithoutTagsInput | null
}

export interface TagScalarWhereInput {
  AND?: TagScalarWhereInput[] | TagScalarWhereInput | null
  OR?: TagScalarWhereInput[] | TagScalarWhereInput | null
  NOT?: TagScalarWhereInput[] | TagScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
}

export interface TagSubscriptionWhereInput {
  AND?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput | null
  OR?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput | null
  NOT?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: TagWhereInput | null
}

export interface TagUpdateInput {
  name?: String | null
  website?: WebsiteUpdateManyWithoutTagsInput | null
  typeface?: TypefaceUpdateManyWithoutTagsInput | null
}

export interface TagUpdateManyDataInput {
  name?: String | null
}

export interface TagUpdateManyMutationInput {
  name?: String | null
}

export interface TagUpdateManyWithoutTypefaceInput {
  create?: TagCreateWithoutTypefaceInput[] | TagCreateWithoutTypefaceInput | null
  connect?: TagWhereUniqueInput[] | TagWhereUniqueInput | null
  set?: TagWhereUniqueInput[] | TagWhereUniqueInput | null
  disconnect?: TagWhereUniqueInput[] | TagWhereUniqueInput | null
  delete?: TagWhereUniqueInput[] | TagWhereUniqueInput | null
  update?: TagUpdateWithWhereUniqueWithoutTypefaceInput[] | TagUpdateWithWhereUniqueWithoutTypefaceInput | null
  updateMany?: TagUpdateManyWithWhereNestedInput[] | TagUpdateManyWithWhereNestedInput | null
  deleteMany?: TagScalarWhereInput[] | TagScalarWhereInput | null
  upsert?: TagUpsertWithWhereUniqueWithoutTypefaceInput[] | TagUpsertWithWhereUniqueWithoutTypefaceInput | null
}

export interface TagUpdateManyWithoutWebsiteInput {
  create?: TagCreateWithoutWebsiteInput[] | TagCreateWithoutWebsiteInput | null
  connect?: TagWhereUniqueInput[] | TagWhereUniqueInput | null
  set?: TagWhereUniqueInput[] | TagWhereUniqueInput | null
  disconnect?: TagWhereUniqueInput[] | TagWhereUniqueInput | null
  delete?: TagWhereUniqueInput[] | TagWhereUniqueInput | null
  update?: TagUpdateWithWhereUniqueWithoutWebsiteInput[] | TagUpdateWithWhereUniqueWithoutWebsiteInput | null
  updateMany?: TagUpdateManyWithWhereNestedInput[] | TagUpdateManyWithWhereNestedInput | null
  deleteMany?: TagScalarWhereInput[] | TagScalarWhereInput | null
  upsert?: TagUpsertWithWhereUniqueWithoutWebsiteInput[] | TagUpsertWithWhereUniqueWithoutWebsiteInput | null
}

export interface TagUpdateManyWithWhereNestedInput {
  where: TagScalarWhereInput
  data: TagUpdateManyDataInput
}

export interface TagUpdateWithoutTypefaceDataInput {
  name?: String | null
  website?: WebsiteUpdateManyWithoutTagsInput | null
}

export interface TagUpdateWithoutWebsiteDataInput {
  name?: String | null
  typeface?: TypefaceUpdateManyWithoutTagsInput | null
}

export interface TagUpdateWithWhereUniqueWithoutTypefaceInput {
  where: TagWhereUniqueInput
  data: TagUpdateWithoutTypefaceDataInput
}

export interface TagUpdateWithWhereUniqueWithoutWebsiteInput {
  where: TagWhereUniqueInput
  data: TagUpdateWithoutWebsiteDataInput
}

export interface TagUpsertWithWhereUniqueWithoutTypefaceInput {
  where: TagWhereUniqueInput
  update: TagUpdateWithoutTypefaceDataInput
  create: TagCreateWithoutTypefaceInput
}

export interface TagUpsertWithWhereUniqueWithoutWebsiteInput {
  where: TagWhereUniqueInput
  update: TagUpdateWithoutWebsiteDataInput
  create: TagCreateWithoutWebsiteInput
}

export interface TagWhereInput {
  AND?: TagWhereInput[] | TagWhereInput | null
  OR?: TagWhereInput[] | TagWhereInput | null
  NOT?: TagWhereInput[] | TagWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  website_every?: WebsiteWhereInput | null
  website_some?: WebsiteWhereInput | null
  website_none?: WebsiteWhereInput | null
  typeface_every?: TypefaceWhereInput | null
  typeface_some?: TypefaceWhereInput | null
  typeface_none?: TypefaceWhereInput | null
}

export interface TagWhereUniqueInput {
  id?: ID_Input | null
}

export interface TypefaceCreateInput {
  name: String
  downloadUrl: String
  description?: String | null
  slug: String
  usedBy?: WebsiteCreateManyWithoutTypefacesInput | null
  addedBy: UserCreateOneWithoutTypefacesInput
  foundries?: FoundryCreateManyWithoutTypefacesInput | null
  designers?: DesignerCreateManyWithoutTypefacesInput | null
  tags?: TagCreateManyWithoutTypefaceInput | null
  images?: ImagesCreateOneWithoutTypefaceInput | null
}

export interface TypefaceCreateManyWithoutAddedByInput {
  create?: TypefaceCreateWithoutAddedByInput[] | TypefaceCreateWithoutAddedByInput | null
  connect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput | null
}

export interface TypefaceCreateManyWithoutDesignersInput {
  create?: TypefaceCreateWithoutDesignersInput[] | TypefaceCreateWithoutDesignersInput | null
  connect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput | null
}

export interface TypefaceCreateManyWithoutFoundriesInput {
  create?: TypefaceCreateWithoutFoundriesInput[] | TypefaceCreateWithoutFoundriesInput | null
  connect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput | null
}

export interface TypefaceCreateManyWithoutTagsInput {
  create?: TypefaceCreateWithoutTagsInput[] | TypefaceCreateWithoutTagsInput | null
  connect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput | null
}

export interface TypefaceCreateManyWithoutUsedByInput {
  create?: TypefaceCreateWithoutUsedByInput[] | TypefaceCreateWithoutUsedByInput | null
  connect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput | null
}

export interface TypefaceCreateOneWithoutImagesInput {
  create?: TypefaceCreateWithoutImagesInput | null
  connect?: TypefaceWhereUniqueInput | null
}

export interface TypefaceCreateWithoutAddedByInput {
  name: String
  downloadUrl: String
  description?: String | null
  slug: String
  usedBy?: WebsiteCreateManyWithoutTypefacesInput | null
  foundries?: FoundryCreateManyWithoutTypefacesInput | null
  designers?: DesignerCreateManyWithoutTypefacesInput | null
  tags?: TagCreateManyWithoutTypefaceInput | null
  images?: ImagesCreateOneWithoutTypefaceInput | null
}

export interface TypefaceCreateWithoutDesignersInput {
  name: String
  downloadUrl: String
  description?: String | null
  slug: String
  usedBy?: WebsiteCreateManyWithoutTypefacesInput | null
  addedBy: UserCreateOneWithoutTypefacesInput
  foundries?: FoundryCreateManyWithoutTypefacesInput | null
  tags?: TagCreateManyWithoutTypefaceInput | null
  images?: ImagesCreateOneWithoutTypefaceInput | null
}

export interface TypefaceCreateWithoutFoundriesInput {
  name: String
  downloadUrl: String
  description?: String | null
  slug: String
  usedBy?: WebsiteCreateManyWithoutTypefacesInput | null
  addedBy: UserCreateOneWithoutTypefacesInput
  designers?: DesignerCreateManyWithoutTypefacesInput | null
  tags?: TagCreateManyWithoutTypefaceInput | null
  images?: ImagesCreateOneWithoutTypefaceInput | null
}

export interface TypefaceCreateWithoutImagesInput {
  name: String
  downloadUrl: String
  description?: String | null
  slug: String
  usedBy?: WebsiteCreateManyWithoutTypefacesInput | null
  addedBy: UserCreateOneWithoutTypefacesInput
  foundries?: FoundryCreateManyWithoutTypefacesInput | null
  designers?: DesignerCreateManyWithoutTypefacesInput | null
  tags?: TagCreateManyWithoutTypefaceInput | null
}

export interface TypefaceCreateWithoutTagsInput {
  name: String
  downloadUrl: String
  description?: String | null
  slug: String
  usedBy?: WebsiteCreateManyWithoutTypefacesInput | null
  addedBy: UserCreateOneWithoutTypefacesInput
  foundries?: FoundryCreateManyWithoutTypefacesInput | null
  designers?: DesignerCreateManyWithoutTypefacesInput | null
  images?: ImagesCreateOneWithoutTypefaceInput | null
}

export interface TypefaceCreateWithoutUsedByInput {
  name: String
  downloadUrl: String
  description?: String | null
  slug: String
  addedBy: UserCreateOneWithoutTypefacesInput
  foundries?: FoundryCreateManyWithoutTypefacesInput | null
  designers?: DesignerCreateManyWithoutTypefacesInput | null
  tags?: TagCreateManyWithoutTypefaceInput | null
  images?: ImagesCreateOneWithoutTypefaceInput | null
}

export interface TypefaceScalarWhereInput {
  AND?: TypefaceScalarWhereInput[] | TypefaceScalarWhereInput | null
  OR?: TypefaceScalarWhereInput[] | TypefaceScalarWhereInput | null
  NOT?: TypefaceScalarWhereInput[] | TypefaceScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  downloadUrl?: String | null
  downloadUrl_not?: String | null
  downloadUrl_in?: String[] | String | null
  downloadUrl_not_in?: String[] | String | null
  downloadUrl_lt?: String | null
  downloadUrl_lte?: String | null
  downloadUrl_gt?: String | null
  downloadUrl_gte?: String | null
  downloadUrl_contains?: String | null
  downloadUrl_not_contains?: String | null
  downloadUrl_starts_with?: String | null
  downloadUrl_not_starts_with?: String | null
  downloadUrl_ends_with?: String | null
  downloadUrl_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  slug?: String | null
  slug_not?: String | null
  slug_in?: String[] | String | null
  slug_not_in?: String[] | String | null
  slug_lt?: String | null
  slug_lte?: String | null
  slug_gt?: String | null
  slug_gte?: String | null
  slug_contains?: String | null
  slug_not_contains?: String | null
  slug_starts_with?: String | null
  slug_not_starts_with?: String | null
  slug_ends_with?: String | null
  slug_not_ends_with?: String | null
}

export interface TypefaceSubscriptionWhereInput {
  AND?: TypefaceSubscriptionWhereInput[] | TypefaceSubscriptionWhereInput | null
  OR?: TypefaceSubscriptionWhereInput[] | TypefaceSubscriptionWhereInput | null
  NOT?: TypefaceSubscriptionWhereInput[] | TypefaceSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: TypefaceWhereInput | null
}

export interface TypefaceUpdateInput {
  name?: String | null
  downloadUrl?: String | null
  description?: String | null
  slug?: String | null
  usedBy?: WebsiteUpdateManyWithoutTypefacesInput | null
  addedBy?: UserUpdateOneRequiredWithoutTypefacesInput | null
  foundries?: FoundryUpdateManyWithoutTypefacesInput | null
  designers?: DesignerUpdateManyWithoutTypefacesInput | null
  tags?: TagUpdateManyWithoutTypefaceInput | null
  images?: ImagesUpdateOneWithoutTypefaceInput | null
}

export interface TypefaceUpdateManyDataInput {
  name?: String | null
  downloadUrl?: String | null
  description?: String | null
  slug?: String | null
}

export interface TypefaceUpdateManyMutationInput {
  name?: String | null
  downloadUrl?: String | null
  description?: String | null
  slug?: String | null
}

export interface TypefaceUpdateManyWithoutAddedByInput {
  create?: TypefaceCreateWithoutAddedByInput[] | TypefaceCreateWithoutAddedByInput | null
  connect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput | null
  set?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput | null
  disconnect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput | null
  delete?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput | null
  update?: TypefaceUpdateWithWhereUniqueWithoutAddedByInput[] | TypefaceUpdateWithWhereUniqueWithoutAddedByInput | null
  updateMany?: TypefaceUpdateManyWithWhereNestedInput[] | TypefaceUpdateManyWithWhereNestedInput | null
  deleteMany?: TypefaceScalarWhereInput[] | TypefaceScalarWhereInput | null
  upsert?: TypefaceUpsertWithWhereUniqueWithoutAddedByInput[] | TypefaceUpsertWithWhereUniqueWithoutAddedByInput | null
}

export interface TypefaceUpdateManyWithoutDesignersInput {
  create?: TypefaceCreateWithoutDesignersInput[] | TypefaceCreateWithoutDesignersInput | null
  connect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput | null
  set?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput | null
  disconnect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput | null
  delete?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput | null
  update?: TypefaceUpdateWithWhereUniqueWithoutDesignersInput[] | TypefaceUpdateWithWhereUniqueWithoutDesignersInput | null
  updateMany?: TypefaceUpdateManyWithWhereNestedInput[] | TypefaceUpdateManyWithWhereNestedInput | null
  deleteMany?: TypefaceScalarWhereInput[] | TypefaceScalarWhereInput | null
  upsert?: TypefaceUpsertWithWhereUniqueWithoutDesignersInput[] | TypefaceUpsertWithWhereUniqueWithoutDesignersInput | null
}

export interface TypefaceUpdateManyWithoutFoundriesInput {
  create?: TypefaceCreateWithoutFoundriesInput[] | TypefaceCreateWithoutFoundriesInput | null
  connect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput | null
  set?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput | null
  disconnect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput | null
  delete?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput | null
  update?: TypefaceUpdateWithWhereUniqueWithoutFoundriesInput[] | TypefaceUpdateWithWhereUniqueWithoutFoundriesInput | null
  updateMany?: TypefaceUpdateManyWithWhereNestedInput[] | TypefaceUpdateManyWithWhereNestedInput | null
  deleteMany?: TypefaceScalarWhereInput[] | TypefaceScalarWhereInput | null
  upsert?: TypefaceUpsertWithWhereUniqueWithoutFoundriesInput[] | TypefaceUpsertWithWhereUniqueWithoutFoundriesInput | null
}

export interface TypefaceUpdateManyWithoutTagsInput {
  create?: TypefaceCreateWithoutTagsInput[] | TypefaceCreateWithoutTagsInput | null
  connect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput | null
  set?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput | null
  disconnect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput | null
  delete?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput | null
  update?: TypefaceUpdateWithWhereUniqueWithoutTagsInput[] | TypefaceUpdateWithWhereUniqueWithoutTagsInput | null
  updateMany?: TypefaceUpdateManyWithWhereNestedInput[] | TypefaceUpdateManyWithWhereNestedInput | null
  deleteMany?: TypefaceScalarWhereInput[] | TypefaceScalarWhereInput | null
  upsert?: TypefaceUpsertWithWhereUniqueWithoutTagsInput[] | TypefaceUpsertWithWhereUniqueWithoutTagsInput | null
}

export interface TypefaceUpdateManyWithoutUsedByInput {
  create?: TypefaceCreateWithoutUsedByInput[] | TypefaceCreateWithoutUsedByInput | null
  connect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput | null
  set?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput | null
  disconnect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput | null
  delete?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput | null
  update?: TypefaceUpdateWithWhereUniqueWithoutUsedByInput[] | TypefaceUpdateWithWhereUniqueWithoutUsedByInput | null
  updateMany?: TypefaceUpdateManyWithWhereNestedInput[] | TypefaceUpdateManyWithWhereNestedInput | null
  deleteMany?: TypefaceScalarWhereInput[] | TypefaceScalarWhereInput | null
  upsert?: TypefaceUpsertWithWhereUniqueWithoutUsedByInput[] | TypefaceUpsertWithWhereUniqueWithoutUsedByInput | null
}

export interface TypefaceUpdateManyWithWhereNestedInput {
  where: TypefaceScalarWhereInput
  data: TypefaceUpdateManyDataInput
}

export interface TypefaceUpdateOneWithoutImagesInput {
  create?: TypefaceCreateWithoutImagesInput | null
  connect?: TypefaceWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: TypefaceUpdateWithoutImagesDataInput | null
  upsert?: TypefaceUpsertWithoutImagesInput | null
}

export interface TypefaceUpdateWithoutAddedByDataInput {
  name?: String | null
  downloadUrl?: String | null
  description?: String | null
  slug?: String | null
  usedBy?: WebsiteUpdateManyWithoutTypefacesInput | null
  foundries?: FoundryUpdateManyWithoutTypefacesInput | null
  designers?: DesignerUpdateManyWithoutTypefacesInput | null
  tags?: TagUpdateManyWithoutTypefaceInput | null
  images?: ImagesUpdateOneWithoutTypefaceInput | null
}

export interface TypefaceUpdateWithoutDesignersDataInput {
  name?: String | null
  downloadUrl?: String | null
  description?: String | null
  slug?: String | null
  usedBy?: WebsiteUpdateManyWithoutTypefacesInput | null
  addedBy?: UserUpdateOneRequiredWithoutTypefacesInput | null
  foundries?: FoundryUpdateManyWithoutTypefacesInput | null
  tags?: TagUpdateManyWithoutTypefaceInput | null
  images?: ImagesUpdateOneWithoutTypefaceInput | null
}

export interface TypefaceUpdateWithoutFoundriesDataInput {
  name?: String | null
  downloadUrl?: String | null
  description?: String | null
  slug?: String | null
  usedBy?: WebsiteUpdateManyWithoutTypefacesInput | null
  addedBy?: UserUpdateOneRequiredWithoutTypefacesInput | null
  designers?: DesignerUpdateManyWithoutTypefacesInput | null
  tags?: TagUpdateManyWithoutTypefaceInput | null
  images?: ImagesUpdateOneWithoutTypefaceInput | null
}

export interface TypefaceUpdateWithoutImagesDataInput {
  name?: String | null
  downloadUrl?: String | null
  description?: String | null
  slug?: String | null
  usedBy?: WebsiteUpdateManyWithoutTypefacesInput | null
  addedBy?: UserUpdateOneRequiredWithoutTypefacesInput | null
  foundries?: FoundryUpdateManyWithoutTypefacesInput | null
  designers?: DesignerUpdateManyWithoutTypefacesInput | null
  tags?: TagUpdateManyWithoutTypefaceInput | null
}

export interface TypefaceUpdateWithoutTagsDataInput {
  name?: String | null
  downloadUrl?: String | null
  description?: String | null
  slug?: String | null
  usedBy?: WebsiteUpdateManyWithoutTypefacesInput | null
  addedBy?: UserUpdateOneRequiredWithoutTypefacesInput | null
  foundries?: FoundryUpdateManyWithoutTypefacesInput | null
  designers?: DesignerUpdateManyWithoutTypefacesInput | null
  images?: ImagesUpdateOneWithoutTypefaceInput | null
}

export interface TypefaceUpdateWithoutUsedByDataInput {
  name?: String | null
  downloadUrl?: String | null
  description?: String | null
  slug?: String | null
  addedBy?: UserUpdateOneRequiredWithoutTypefacesInput | null
  foundries?: FoundryUpdateManyWithoutTypefacesInput | null
  designers?: DesignerUpdateManyWithoutTypefacesInput | null
  tags?: TagUpdateManyWithoutTypefaceInput | null
  images?: ImagesUpdateOneWithoutTypefaceInput | null
}

export interface TypefaceUpdateWithWhereUniqueWithoutAddedByInput {
  where: TypefaceWhereUniqueInput
  data: TypefaceUpdateWithoutAddedByDataInput
}

export interface TypefaceUpdateWithWhereUniqueWithoutDesignersInput {
  where: TypefaceWhereUniqueInput
  data: TypefaceUpdateWithoutDesignersDataInput
}

export interface TypefaceUpdateWithWhereUniqueWithoutFoundriesInput {
  where: TypefaceWhereUniqueInput
  data: TypefaceUpdateWithoutFoundriesDataInput
}

export interface TypefaceUpdateWithWhereUniqueWithoutTagsInput {
  where: TypefaceWhereUniqueInput
  data: TypefaceUpdateWithoutTagsDataInput
}

export interface TypefaceUpdateWithWhereUniqueWithoutUsedByInput {
  where: TypefaceWhereUniqueInput
  data: TypefaceUpdateWithoutUsedByDataInput
}

export interface TypefaceUpsertWithoutImagesInput {
  update: TypefaceUpdateWithoutImagesDataInput
  create: TypefaceCreateWithoutImagesInput
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

export interface TypefaceUpsertWithWhereUniqueWithoutFoundriesInput {
  where: TypefaceWhereUniqueInput
  update: TypefaceUpdateWithoutFoundriesDataInput
  create: TypefaceCreateWithoutFoundriesInput
}

export interface TypefaceUpsertWithWhereUniqueWithoutTagsInput {
  where: TypefaceWhereUniqueInput
  update: TypefaceUpdateWithoutTagsDataInput
  create: TypefaceCreateWithoutTagsInput
}

export interface TypefaceUpsertWithWhereUniqueWithoutUsedByInput {
  where: TypefaceWhereUniqueInput
  update: TypefaceUpdateWithoutUsedByDataInput
  create: TypefaceCreateWithoutUsedByInput
}

export interface TypefaceWhereInput {
  AND?: TypefaceWhereInput[] | TypefaceWhereInput | null
  OR?: TypefaceWhereInput[] | TypefaceWhereInput | null
  NOT?: TypefaceWhereInput[] | TypefaceWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  downloadUrl?: String | null
  downloadUrl_not?: String | null
  downloadUrl_in?: String[] | String | null
  downloadUrl_not_in?: String[] | String | null
  downloadUrl_lt?: String | null
  downloadUrl_lte?: String | null
  downloadUrl_gt?: String | null
  downloadUrl_gte?: String | null
  downloadUrl_contains?: String | null
  downloadUrl_not_contains?: String | null
  downloadUrl_starts_with?: String | null
  downloadUrl_not_starts_with?: String | null
  downloadUrl_ends_with?: String | null
  downloadUrl_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  slug?: String | null
  slug_not?: String | null
  slug_in?: String[] | String | null
  slug_not_in?: String[] | String | null
  slug_lt?: String | null
  slug_lte?: String | null
  slug_gt?: String | null
  slug_gte?: String | null
  slug_contains?: String | null
  slug_not_contains?: String | null
  slug_starts_with?: String | null
  slug_not_starts_with?: String | null
  slug_ends_with?: String | null
  slug_not_ends_with?: String | null
  usedBy_every?: WebsiteWhereInput | null
  usedBy_some?: WebsiteWhereInput | null
  usedBy_none?: WebsiteWhereInput | null
  addedBy?: UserWhereInput | null
  foundries_every?: FoundryWhereInput | null
  foundries_some?: FoundryWhereInput | null
  foundries_none?: FoundryWhereInput | null
  designers_every?: DesignerWhereInput | null
  designers_some?: DesignerWhereInput | null
  designers_none?: DesignerWhereInput | null
  tags_every?: TagWhereInput | null
  tags_some?: TagWhereInput | null
  tags_none?: TagWhereInput | null
  images?: ImagesWhereInput | null
}

export interface TypefaceWhereUniqueInput {
  id?: ID_Input | null
  name?: String | null
  slug?: String | null
}

export interface UserCreateInput {
  email: String
  password: String
  name: String
  role?: Role | null
  websites?: WebsiteCreateManyWithoutAddedByInput | null
  typefaces?: TypefaceCreateManyWithoutAddedByInput | null
}

export interface UserCreateOneInput {
  create?: UserCreateInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutTypefacesInput {
  create?: UserCreateWithoutTypefacesInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutWebsitesInput {
  create?: UserCreateWithoutWebsitesInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutTypefacesInput {
  email: String
  password: String
  name: String
  role?: Role | null
  websites?: WebsiteCreateManyWithoutAddedByInput | null
}

export interface UserCreateWithoutWebsitesInput {
  email: String
  password: String
  name: String
  role?: Role | null
  typefaces?: TypefaceCreateManyWithoutAddedByInput | null
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateDataInput {
  email?: String | null
  password?: String | null
  name?: String | null
  role?: Role | null
  websites?: WebsiteUpdateManyWithoutAddedByInput | null
  typefaces?: TypefaceUpdateManyWithoutAddedByInput | null
}

export interface UserUpdateInput {
  email?: String | null
  password?: String | null
  name?: String | null
  role?: Role | null
  websites?: WebsiteUpdateManyWithoutAddedByInput | null
  typefaces?: TypefaceUpdateManyWithoutAddedByInput | null
}

export interface UserUpdateManyMutationInput {
  email?: String | null
  password?: String | null
  name?: String | null
  role?: Role | null
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateDataInput | null
  upsert?: UserUpsertNestedInput | null
}

export interface UserUpdateOneRequiredWithoutTypefacesInput {
  create?: UserCreateWithoutTypefacesInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutTypefacesDataInput | null
  upsert?: UserUpsertWithoutTypefacesInput | null
}

export interface UserUpdateOneRequiredWithoutWebsitesInput {
  create?: UserCreateWithoutWebsitesInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutWebsitesDataInput | null
  upsert?: UserUpsertWithoutWebsitesInput | null
}

export interface UserUpdateWithoutTypefacesDataInput {
  email?: String | null
  password?: String | null
  name?: String | null
  role?: Role | null
  websites?: WebsiteUpdateManyWithoutAddedByInput | null
}

export interface UserUpdateWithoutWebsitesDataInput {
  email?: String | null
  password?: String | null
  name?: String | null
  role?: Role | null
  typefaces?: TypefaceUpdateManyWithoutAddedByInput | null
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
  AND?: UserWhereInput[] | UserWhereInput | null
  OR?: UserWhereInput[] | UserWhereInput | null
  NOT?: UserWhereInput[] | UserWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  password?: String | null
  password_not?: String | null
  password_in?: String[] | String | null
  password_not_in?: String[] | String | null
  password_lt?: String | null
  password_lte?: String | null
  password_gt?: String | null
  password_gte?: String | null
  password_contains?: String | null
  password_not_contains?: String | null
  password_starts_with?: String | null
  password_not_starts_with?: String | null
  password_ends_with?: String | null
  password_not_ends_with?: String | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  role?: Role | null
  role_not?: Role | null
  role_in?: Role[] | Role | null
  role_not_in?: Role[] | Role | null
  websites_every?: WebsiteWhereInput | null
  websites_some?: WebsiteWhereInput | null
  websites_none?: WebsiteWhereInput | null
  typefaces_every?: TypefaceWhereInput | null
  typefaces_some?: TypefaceWhereInput | null
  typefaces_none?: TypefaceWhereInput | null
}

export interface UserWhereUniqueInput {
  id?: ID_Input | null
  email?: String | null
}

export interface WebsiteCreateInput {
  isPublished?: Boolean | null
  title: String
  slug?: String | null
  url: String
  featured?: Boolean | null
  images?: ImagesCreateOneWithoutWebsiteInput | null
  addedBy: UserCreateOneWithoutWebsitesInput
  typefaces?: TypefaceCreateManyWithoutUsedByInput | null
  tags?: TagCreateManyWithoutWebsiteInput | null
}

export interface WebsiteCreateManyWithoutAddedByInput {
  create?: WebsiteCreateWithoutAddedByInput[] | WebsiteCreateWithoutAddedByInput | null
  connect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
}

export interface WebsiteCreateManyWithoutTagsInput {
  create?: WebsiteCreateWithoutTagsInput[] | WebsiteCreateWithoutTagsInput | null
  connect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
}

export interface WebsiteCreateManyWithoutTypefacesInput {
  create?: WebsiteCreateWithoutTypefacesInput[] | WebsiteCreateWithoutTypefacesInput | null
  connect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
}

export interface WebsiteCreateOneWithoutImagesInput {
  create?: WebsiteCreateWithoutImagesInput | null
  connect?: WebsiteWhereUniqueInput | null
}

export interface WebsiteCreateWithoutAddedByInput {
  isPublished?: Boolean | null
  title: String
  slug?: String | null
  url: String
  featured?: Boolean | null
  images?: ImagesCreateOneWithoutWebsiteInput | null
  typefaces?: TypefaceCreateManyWithoutUsedByInput | null
  tags?: TagCreateManyWithoutWebsiteInput | null
}

export interface WebsiteCreateWithoutImagesInput {
  isPublished?: Boolean | null
  title: String
  slug?: String | null
  url: String
  featured?: Boolean | null
  addedBy: UserCreateOneWithoutWebsitesInput
  typefaces?: TypefaceCreateManyWithoutUsedByInput | null
  tags?: TagCreateManyWithoutWebsiteInput | null
}

export interface WebsiteCreateWithoutTagsInput {
  isPublished?: Boolean | null
  title: String
  slug?: String | null
  url: String
  featured?: Boolean | null
  images?: ImagesCreateOneWithoutWebsiteInput | null
  addedBy: UserCreateOneWithoutWebsitesInput
  typefaces?: TypefaceCreateManyWithoutUsedByInput | null
}

export interface WebsiteCreateWithoutTypefacesInput {
  isPublished?: Boolean | null
  title: String
  slug?: String | null
  url: String
  featured?: Boolean | null
  images?: ImagesCreateOneWithoutWebsiteInput | null
  addedBy: UserCreateOneWithoutWebsitesInput
  tags?: TagCreateManyWithoutWebsiteInput | null
}

export interface WebsiteScalarWhereInput {
  AND?: WebsiteScalarWhereInput[] | WebsiteScalarWhereInput | null
  OR?: WebsiteScalarWhereInput[] | WebsiteScalarWhereInput | null
  NOT?: WebsiteScalarWhereInput[] | WebsiteScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  isPublished?: Boolean | null
  isPublished_not?: Boolean | null
  title?: String | null
  title_not?: String | null
  title_in?: String[] | String | null
  title_not_in?: String[] | String | null
  title_lt?: String | null
  title_lte?: String | null
  title_gt?: String | null
  title_gte?: String | null
  title_contains?: String | null
  title_not_contains?: String | null
  title_starts_with?: String | null
  title_not_starts_with?: String | null
  title_ends_with?: String | null
  title_not_ends_with?: String | null
  slug?: String | null
  slug_not?: String | null
  slug_in?: String[] | String | null
  slug_not_in?: String[] | String | null
  slug_lt?: String | null
  slug_lte?: String | null
  slug_gt?: String | null
  slug_gte?: String | null
  slug_contains?: String | null
  slug_not_contains?: String | null
  slug_starts_with?: String | null
  slug_not_starts_with?: String | null
  slug_ends_with?: String | null
  slug_not_ends_with?: String | null
  url?: String | null
  url_not?: String | null
  url_in?: String[] | String | null
  url_not_in?: String[] | String | null
  url_lt?: String | null
  url_lte?: String | null
  url_gt?: String | null
  url_gte?: String | null
  url_contains?: String | null
  url_not_contains?: String | null
  url_starts_with?: String | null
  url_not_starts_with?: String | null
  url_ends_with?: String | null
  url_not_ends_with?: String | null
  featured?: Boolean | null
  featured_not?: Boolean | null
}

export interface WebsiteSubscriptionWhereInput {
  AND?: WebsiteSubscriptionWhereInput[] | WebsiteSubscriptionWhereInput | null
  OR?: WebsiteSubscriptionWhereInput[] | WebsiteSubscriptionWhereInput | null
  NOT?: WebsiteSubscriptionWhereInput[] | WebsiteSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: WebsiteWhereInput | null
}

export interface WebsiteUpdateInput {
  isPublished?: Boolean | null
  title?: String | null
  slug?: String | null
  url?: String | null
  featured?: Boolean | null
  images?: ImagesUpdateOneWithoutWebsiteInput | null
  addedBy?: UserUpdateOneRequiredWithoutWebsitesInput | null
  typefaces?: TypefaceUpdateManyWithoutUsedByInput | null
  tags?: TagUpdateManyWithoutWebsiteInput | null
}

export interface WebsiteUpdateManyDataInput {
  isPublished?: Boolean | null
  title?: String | null
  slug?: String | null
  url?: String | null
  featured?: Boolean | null
}

export interface WebsiteUpdateManyMutationInput {
  isPublished?: Boolean | null
  title?: String | null
  slug?: String | null
  url?: String | null
  featured?: Boolean | null
}

export interface WebsiteUpdateManyWithoutAddedByInput {
  create?: WebsiteCreateWithoutAddedByInput[] | WebsiteCreateWithoutAddedByInput | null
  connect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
  set?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
  disconnect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
  delete?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
  update?: WebsiteUpdateWithWhereUniqueWithoutAddedByInput[] | WebsiteUpdateWithWhereUniqueWithoutAddedByInput | null
  updateMany?: WebsiteUpdateManyWithWhereNestedInput[] | WebsiteUpdateManyWithWhereNestedInput | null
  deleteMany?: WebsiteScalarWhereInput[] | WebsiteScalarWhereInput | null
  upsert?: WebsiteUpsertWithWhereUniqueWithoutAddedByInput[] | WebsiteUpsertWithWhereUniqueWithoutAddedByInput | null
}

export interface WebsiteUpdateManyWithoutTagsInput {
  create?: WebsiteCreateWithoutTagsInput[] | WebsiteCreateWithoutTagsInput | null
  connect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
  set?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
  disconnect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
  delete?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
  update?: WebsiteUpdateWithWhereUniqueWithoutTagsInput[] | WebsiteUpdateWithWhereUniqueWithoutTagsInput | null
  updateMany?: WebsiteUpdateManyWithWhereNestedInput[] | WebsiteUpdateManyWithWhereNestedInput | null
  deleteMany?: WebsiteScalarWhereInput[] | WebsiteScalarWhereInput | null
  upsert?: WebsiteUpsertWithWhereUniqueWithoutTagsInput[] | WebsiteUpsertWithWhereUniqueWithoutTagsInput | null
}

export interface WebsiteUpdateManyWithoutTypefacesInput {
  create?: WebsiteCreateWithoutTypefacesInput[] | WebsiteCreateWithoutTypefacesInput | null
  connect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
  set?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
  disconnect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
  delete?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
  update?: WebsiteUpdateWithWhereUniqueWithoutTypefacesInput[] | WebsiteUpdateWithWhereUniqueWithoutTypefacesInput | null
  updateMany?: WebsiteUpdateManyWithWhereNestedInput[] | WebsiteUpdateManyWithWhereNestedInput | null
  deleteMany?: WebsiteScalarWhereInput[] | WebsiteScalarWhereInput | null
  upsert?: WebsiteUpsertWithWhereUniqueWithoutTypefacesInput[] | WebsiteUpsertWithWhereUniqueWithoutTypefacesInput | null
}

export interface WebsiteUpdateManyWithWhereNestedInput {
  where: WebsiteScalarWhereInput
  data: WebsiteUpdateManyDataInput
}

export interface WebsiteUpdateOneWithoutImagesInput {
  create?: WebsiteCreateWithoutImagesInput | null
  connect?: WebsiteWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: WebsiteUpdateWithoutImagesDataInput | null
  upsert?: WebsiteUpsertWithoutImagesInput | null
}

export interface WebsiteUpdateWithoutAddedByDataInput {
  isPublished?: Boolean | null
  title?: String | null
  slug?: String | null
  url?: String | null
  featured?: Boolean | null
  images?: ImagesUpdateOneWithoutWebsiteInput | null
  typefaces?: TypefaceUpdateManyWithoutUsedByInput | null
  tags?: TagUpdateManyWithoutWebsiteInput | null
}

export interface WebsiteUpdateWithoutImagesDataInput {
  isPublished?: Boolean | null
  title?: String | null
  slug?: String | null
  url?: String | null
  featured?: Boolean | null
  addedBy?: UserUpdateOneRequiredWithoutWebsitesInput | null
  typefaces?: TypefaceUpdateManyWithoutUsedByInput | null
  tags?: TagUpdateManyWithoutWebsiteInput | null
}

export interface WebsiteUpdateWithoutTagsDataInput {
  isPublished?: Boolean | null
  title?: String | null
  slug?: String | null
  url?: String | null
  featured?: Boolean | null
  images?: ImagesUpdateOneWithoutWebsiteInput | null
  addedBy?: UserUpdateOneRequiredWithoutWebsitesInput | null
  typefaces?: TypefaceUpdateManyWithoutUsedByInput | null
}

export interface WebsiteUpdateWithoutTypefacesDataInput {
  isPublished?: Boolean | null
  title?: String | null
  slug?: String | null
  url?: String | null
  featured?: Boolean | null
  images?: ImagesUpdateOneWithoutWebsiteInput | null
  addedBy?: UserUpdateOneRequiredWithoutWebsitesInput | null
  tags?: TagUpdateManyWithoutWebsiteInput | null
}

export interface WebsiteUpdateWithWhereUniqueWithoutAddedByInput {
  where: WebsiteWhereUniqueInput
  data: WebsiteUpdateWithoutAddedByDataInput
}

export interface WebsiteUpdateWithWhereUniqueWithoutTagsInput {
  where: WebsiteWhereUniqueInput
  data: WebsiteUpdateWithoutTagsDataInput
}

export interface WebsiteUpdateWithWhereUniqueWithoutTypefacesInput {
  where: WebsiteWhereUniqueInput
  data: WebsiteUpdateWithoutTypefacesDataInput
}

export interface WebsiteUpsertWithoutImagesInput {
  update: WebsiteUpdateWithoutImagesDataInput
  create: WebsiteCreateWithoutImagesInput
}

export interface WebsiteUpsertWithWhereUniqueWithoutAddedByInput {
  where: WebsiteWhereUniqueInput
  update: WebsiteUpdateWithoutAddedByDataInput
  create: WebsiteCreateWithoutAddedByInput
}

export interface WebsiteUpsertWithWhereUniqueWithoutTagsInput {
  where: WebsiteWhereUniqueInput
  update: WebsiteUpdateWithoutTagsDataInput
  create: WebsiteCreateWithoutTagsInput
}

export interface WebsiteUpsertWithWhereUniqueWithoutTypefacesInput {
  where: WebsiteWhereUniqueInput
  update: WebsiteUpdateWithoutTypefacesDataInput
  create: WebsiteCreateWithoutTypefacesInput
}

export interface WebsiteWhereInput {
  AND?: WebsiteWhereInput[] | WebsiteWhereInput | null
  OR?: WebsiteWhereInput[] | WebsiteWhereInput | null
  NOT?: WebsiteWhereInput[] | WebsiteWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  isPublished?: Boolean | null
  isPublished_not?: Boolean | null
  title?: String | null
  title_not?: String | null
  title_in?: String[] | String | null
  title_not_in?: String[] | String | null
  title_lt?: String | null
  title_lte?: String | null
  title_gt?: String | null
  title_gte?: String | null
  title_contains?: String | null
  title_not_contains?: String | null
  title_starts_with?: String | null
  title_not_starts_with?: String | null
  title_ends_with?: String | null
  title_not_ends_with?: String | null
  slug?: String | null
  slug_not?: String | null
  slug_in?: String[] | String | null
  slug_not_in?: String[] | String | null
  slug_lt?: String | null
  slug_lte?: String | null
  slug_gt?: String | null
  slug_gte?: String | null
  slug_contains?: String | null
  slug_not_contains?: String | null
  slug_starts_with?: String | null
  slug_not_starts_with?: String | null
  slug_ends_with?: String | null
  slug_not_ends_with?: String | null
  url?: String | null
  url_not?: String | null
  url_in?: String[] | String | null
  url_not_in?: String[] | String | null
  url_lt?: String | null
  url_lte?: String | null
  url_gt?: String | null
  url_gte?: String | null
  url_contains?: String | null
  url_not_contains?: String | null
  url_starts_with?: String | null
  url_not_starts_with?: String | null
  url_ends_with?: String | null
  url_not_ends_with?: String | null
  featured?: Boolean | null
  featured_not?: Boolean | null
  images?: ImagesWhereInput | null
  addedBy?: UserWhereInput | null
  typefaces_every?: TypefaceWhereInput | null
  typefaces_some?: TypefaceWhereInput | null
  typefaces_none?: TypefaceWhereInput | null
  tags_every?: TagWhereInput | null
  tags_some?: TagWhereInput | null
  tags_none?: TagWhereInput | null
}

export interface WebsiteWhereUniqueInput {
  id?: ID_Input | null
  title?: String | null
  slug?: String | null
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

export interface AggregateTag {
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
  typefaces?: Array<Typeface> | null
  addedBy: User
}

/*
 * A connection to a list of items.

 */
export interface DesignerConnection {
  pageInfo: PageInfo
  edges: Array<DesignerEdge | null>
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
  node?: Designer | null
  updatedFields?: Array<String> | null
  previousValues?: DesignerPreviousValues | null
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
  edges: Array<FileEdge | null>
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
  node?: File | null
  updatedFields?: Array<String> | null
  previousValues?: FilePreviousValues | null
}

export interface Foundry extends Node {
  id: ID_Output
  name: String
  url: String
  typefaces?: Array<Typeface> | null
  addedBy: User
}

/*
 * A connection to a list of items.

 */
export interface FoundryConnection {
  pageInfo: PageInfo
  edges: Array<FoundryEdge | null>
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
  node?: Foundry | null
  updatedFields?: Array<String> | null
  previousValues?: FoundryPreviousValues | null
}

export interface Images extends Node {
  id: ID_Output
  website?: Website | null
  thumbnail?: File | null
  full?: File | null
  typeface?: Typeface | null
}

/*
 * A connection to a list of items.

 */
export interface ImagesConnection {
  pageInfo: PageInfo
  edges: Array<ImagesEdge | null>
  aggregate: AggregateImages
}

/*
 * An edge in a connection.

 */
export interface ImagesEdge {
  node: Images
  cursor: String
}

export interface ImagesPreviousValues {
  id: ID_Output
}

export interface ImagesSubscriptionPayload {
  mutation: MutationType
  node?: Images | null
  updatedFields?: Array<String> | null
  previousValues?: ImagesPreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface Tag extends Node {
  id: ID_Output
  name: String
  website?: Array<Website> | null
  typeface?: Array<Typeface> | null
}

/*
 * A connection to a list of items.

 */
export interface TagConnection {
  pageInfo: PageInfo
  edges: Array<TagEdge | null>
  aggregate: AggregateTag
}

/*
 * An edge in a connection.

 */
export interface TagEdge {
  node: Tag
  cursor: String
}

export interface TagPreviousValues {
  id: ID_Output
  name: String
}

export interface TagSubscriptionPayload {
  mutation: MutationType
  node?: Tag | null
  updatedFields?: Array<String> | null
  previousValues?: TagPreviousValues | null
}

export interface Typeface extends Node {
  id: ID_Output
  name: String
  downloadUrl: String
  description?: String | null
  slug: String
  usedBy?: Array<Website> | null
  addedBy: User
  foundries?: Array<Foundry> | null
  designers?: Array<Designer> | null
  tags?: Array<Tag> | null
  images?: Images | null
}

/*
 * A connection to a list of items.

 */
export interface TypefaceConnection {
  pageInfo: PageInfo
  edges: Array<TypefaceEdge | null>
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
  description?: String | null
  slug: String
}

export interface TypefaceSubscriptionPayload {
  mutation: MutationType
  node?: Typeface | null
  updatedFields?: Array<String> | null
  previousValues?: TypefacePreviousValues | null
}

export interface User extends Node {
  id: ID_Output
  email: String
  password: String
  name: String
  role: Role
  websites?: Array<Website> | null
  typefaces?: Array<Typeface> | null
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
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
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

export interface Website extends Node {
  id: ID_Output
  createdAt: DateTime
  isPublished: Boolean
  title: String
  images?: Images | null
  slug?: String | null
  url: String
  addedBy: User
  typefaces?: Array<Typeface> | null
  featured: Boolean
  tags?: Array<Tag> | null
}

/*
 * A connection to a list of items.

 */
export interface WebsiteConnection {
  pageInfo: PageInfo
  edges: Array<WebsiteEdge | null>
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
  createdAt: DateTime
  isPublished: Boolean
  title: String
  slug?: String | null
  url: String
  featured: Boolean
}

export interface WebsiteSubscriptionPayload {
  mutation: MutationType
  node?: Website | null
  updatedFields?: Array<String> | null
  previousValues?: WebsitePreviousValues | null
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