import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    posts: <T = Post[]>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    websites: <T = Website[]>(args: { where?: WebsiteWhereInput, orderBy?: WebsiteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    typefaces: <T = Typeface[]>(args: { where?: TypefaceWhereInput, orderBy?: TypefaceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    foundries: <T = Foundry[]>(args: { where?: FoundryWhereInput, orderBy?: FoundryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    files: <T = File[]>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    post: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    website: <T = Website | null>(args: { where: WebsiteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    typeface: <T = Typeface | null>(args: { where: TypefaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    foundry: <T = Foundry | null>(args: { where: FoundryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    file: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    postsConnection: <T = PostConnection>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    websitesConnection: <T = WebsiteConnection>(args: { where?: WebsiteWhereInput, orderBy?: WebsiteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    typefacesConnection: <T = TypefaceConnection>(args: { where?: TypefaceWhereInput, orderBy?: TypefaceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    foundriesConnection: <T = FoundryConnection>(args: { where?: FoundryWhereInput, orderBy?: FoundryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    filesConnection: <T = FileConnection>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createPost: <T = Post>(args: { data: PostCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createWebsite: <T = Website>(args: { data: WebsiteCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTypeface: <T = Typeface>(args: { data: TypefaceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFoundry: <T = Foundry>(args: { data: FoundryCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFile: <T = File>(args: { data: FileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePost: <T = Post | null>(args: { data: PostUpdateInput, where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateWebsite: <T = Website | null>(args: { data: WebsiteUpdateInput, where: WebsiteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTypeface: <T = Typeface | null>(args: { data: TypefaceUpdateInput, where: TypefaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateFoundry: <T = Foundry | null>(args: { data: FoundryUpdateInput, where: FoundryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateFile: <T = File | null>(args: { data: FileUpdateInput, where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePost: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteWebsite: <T = Website | null>(args: { where: WebsiteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteTypeface: <T = Typeface | null>(args: { where: TypefaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteFoundry: <T = Foundry | null>(args: { where: FoundryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteFile: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPost: <T = Post>(args: { where: PostWhereUniqueInput, create: PostCreateInput, update: PostUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertWebsite: <T = Website>(args: { where: WebsiteWhereUniqueInput, create: WebsiteCreateInput, update: WebsiteUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTypeface: <T = Typeface>(args: { where: TypefaceWhereUniqueInput, create: TypefaceCreateInput, update: TypefaceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFoundry: <T = Foundry>(args: { where: FoundryWhereUniqueInput, create: FoundryCreateInput, update: FoundryUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFile: <T = File>(args: { where: FileWhereUniqueInput, create: FileCreateInput, update: FileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPosts: <T = BatchPayload>(args: { data: PostUpdateInput, where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyWebsites: <T = BatchPayload>(args: { data: WebsiteUpdateInput, where?: WebsiteWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTypefaces: <T = BatchPayload>(args: { data: TypefaceUpdateInput, where?: TypefaceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFoundries: <T = BatchPayload>(args: { data: FoundryUpdateInput, where?: FoundryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFiles: <T = BatchPayload>(args: { data: FileUpdateInput, where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPosts: <T = BatchPayload>(args: { where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyWebsites: <T = BatchPayload>(args: { where?: WebsiteWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTypefaces: <T = BatchPayload>(args: { where?: TypefaceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFoundries: <T = BatchPayload>(args: { where?: FoundryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFiles: <T = BatchPayload>(args: { where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    post: <T = PostSubscriptionPayload | null>(args: { where?: PostSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    website: <T = WebsiteSubscriptionPayload | null>(args: { where?: WebsiteSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    typeface: <T = TypefaceSubscriptionPayload | null>(args: { where?: TypefaceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    foundry: <T = FoundrySubscriptionPayload | null>(args: { where?: FoundrySubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    file: <T = FileSubscriptionPayload | null>(args: { where?: FileSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Post: (where?: PostWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  Website: (where?: WebsiteWhereInput) => Promise<boolean>
  Typeface: (where?: TypefaceWhereInput) => Promise<boolean>
  Foundry: (where?: FoundryWhereInput) => Promise<boolean>
  File: (where?: FileWhereInput) => Promise<boolean>
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

const typeDefs = `type AggregateFile {
  count: Int!
}

type AggregateFoundry {
  count: Int!
}

type AggregatePost {
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

input FileUpdateInput {
  filename: String
  mimetype: String
  encoding: String
  url: String
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
  fonts(where: TypefaceWhereInput, orderBy: TypefaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Typeface!]
  url: String
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
  url: String
  fonts: TypefaceCreateManyWithoutFoundryInput
}

input FoundryCreateOneWithoutFontsInput {
  create: FoundryCreateWithoutFontsInput
  connect: FoundryWhereUniqueInput
}

input FoundryCreateWithoutFontsInput {
  name: String!
  url: String
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
  url: String
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
  fonts: TypefaceUpdateManyWithoutFoundryInput
}

input FoundryUpdateOneWithoutFontsInput {
  create: FoundryCreateWithoutFontsInput
  connect: FoundryWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: FoundryUpdateWithoutFontsDataInput
  upsert: FoundryUpsertWithoutFontsInput
}

input FoundryUpdateWithoutFontsDataInput {
  name: String
  url: String
}

input FoundryUpsertWithoutFontsInput {
  update: FoundryUpdateWithoutFontsDataInput!
  create: FoundryCreateWithoutFontsInput!
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
  fonts_every: TypefaceWhereInput
  fonts_some: TypefaceWhereInput
  fonts_none: TypefaceWhereInput
}

input FoundryWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createPost(data: PostCreateInput!): Post!
  createUser(data: UserCreateInput!): User!
  createWebsite(data: WebsiteCreateInput!): Website!
  createTypeface(data: TypefaceCreateInput!): Typeface!
  createFoundry(data: FoundryCreateInput!): Foundry!
  createFile(data: FileCreateInput!): File!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateWebsite(data: WebsiteUpdateInput!, where: WebsiteWhereUniqueInput!): Website
  updateTypeface(data: TypefaceUpdateInput!, where: TypefaceWhereUniqueInput!): Typeface
  updateFoundry(data: FoundryUpdateInput!, where: FoundryWhereUniqueInput!): Foundry
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  deletePost(where: PostWhereUniqueInput!): Post
  deleteUser(where: UserWhereUniqueInput!): User
  deleteWebsite(where: WebsiteWhereUniqueInput!): Website
  deleteTypeface(where: TypefaceWhereUniqueInput!): Typeface
  deleteFoundry(where: FoundryWhereUniqueInput!): Foundry
  deleteFile(where: FileWhereUniqueInput!): File
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertWebsite(where: WebsiteWhereUniqueInput!, create: WebsiteCreateInput!, update: WebsiteUpdateInput!): Website!
  upsertTypeface(where: TypefaceWhereUniqueInput!, create: TypefaceCreateInput!, update: TypefaceUpdateInput!): Typeface!
  upsertFoundry(where: FoundryWhereUniqueInput!, create: FoundryCreateInput!, update: FoundryUpdateInput!): Foundry!
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  updateManyPosts(data: PostUpdateInput!, where: PostWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyWebsites(data: WebsiteUpdateInput!, where: WebsiteWhereInput): BatchPayload!
  updateManyTypefaces(data: TypefaceUpdateInput!, where: TypefaceWhereInput): BatchPayload!
  updateManyFoundries(data: FoundryUpdateInput!, where: FoundryWhereInput): BatchPayload!
  updateManyFiles(data: FileUpdateInput!, where: FileWhereInput): BatchPayload!
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyWebsites(where: WebsiteWhereInput): BatchPayload!
  deleteManyTypefaces(where: TypefaceWhereInput): BatchPayload!
  deleteManyFoundries(where: FoundryWhereInput): BatchPayload!
  deleteManyFiles(where: FileWhereInput): BatchPayload!
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

type Post implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  title: String!
  text: String!
  author(where: UserWhereInput): User!
}

"""A connection to a list of items."""
type PostConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  isPublished: Boolean
  title: String!
  text: String!
  author: UserCreateOneWithoutPostsInput!
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutAuthorInput {
  isPublished: Boolean
  title: String!
  text: String!
}

"""An edge in a connection."""
type PostEdge {
  """The item at the end of the edge."""
  node: Post!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  isPublished_ASC
  isPublished_DESC
  title_ASC
  title_DESC
  text_ASC
  text_DESC
}

type PostPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  title: String!
  text: String!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PostSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostSubscriptionWhereInput!]

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
  node: PostWhereInput
}

input PostUpdateInput {
  isPublished: Boolean
  title: String
  text: String
  author: UserUpdateOneWithoutPostsInput
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  delete: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
}

input PostUpdateWithoutAuthorDataInput {
  isPublished: Boolean
  title: String
  text: String
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostWhereInput {
  """Logical AND on all given filters."""
  AND: [PostWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostWhereInput!]
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
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  author: UserWhereInput
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  websites(where: WebsiteWhereInput, orderBy: WebsiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Website]!
  typefaces(where: TypefaceWhereInput, orderBy: TypefaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Typeface]!
  foundries(where: FoundryWhereInput, orderBy: FoundryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Foundry]!
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  post(where: PostWhereUniqueInput!): Post
  user(where: UserWhereUniqueInput!): User
  website(where: WebsiteWhereUniqueInput!): Website
  typeface(where: TypefaceWhereUniqueInput!): Typeface
  foundry(where: FoundryWhereUniqueInput!): Foundry
  file(where: FileWhereUniqueInput!): File
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  websitesConnection(where: WebsiteWhereInput, orderBy: WebsiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WebsiteConnection!
  typefacesConnection(where: TypefaceWhereInput, orderBy: TypefaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TypefaceConnection!
  foundriesConnection(where: FoundryWhereInput, orderBy: FoundryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FoundryConnection!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  website(where: WebsiteSubscriptionWhereInput): WebsiteSubscriptionPayload
  typeface(where: TypefaceSubscriptionWhereInput): TypefaceSubscriptionPayload
  foundry(where: FoundrySubscriptionWhereInput): FoundrySubscriptionPayload
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
}

type Typeface implements Node {
  id: ID!
  name: String!
  usedBy(where: WebsiteWhereInput, orderBy: WebsiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Website!]
  imageUrl: String
  addedBy(where: UserWhereInput): User!
  foundry(where: FoundryWhereInput): Foundry
  designer: String
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
  imageUrl: String
  designer: String
  usedBy: WebsiteCreateManyWithoutTypefacesInput
  addedBy: UserCreateOneWithoutTypefacesInput!
  foundry: FoundryCreateOneWithoutFontsInput
}

input TypefaceCreateManyWithoutAddedByInput {
  create: [TypefaceCreateWithoutAddedByInput!]
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
  imageUrl: String
  designer: String
  usedBy: WebsiteCreateManyWithoutTypefacesInput
  foundry: FoundryCreateOneWithoutFontsInput
}

input TypefaceCreateWithoutFoundryInput {
  name: String!
  imageUrl: String
  designer: String
  usedBy: WebsiteCreateManyWithoutTypefacesInput
  addedBy: UserCreateOneWithoutTypefacesInput!
}

input TypefaceCreateWithoutUsedByInput {
  name: String!
  imageUrl: String
  designer: String
  addedBy: UserCreateOneWithoutTypefacesInput!
  foundry: FoundryCreateOneWithoutFontsInput
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
  imageUrl_ASC
  imageUrl_DESC
  designer_ASC
  designer_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type TypefacePreviousValues {
  id: ID!
  name: String!
  imageUrl: String
  designer: String
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
  imageUrl: String
  designer: String
  usedBy: WebsiteUpdateManyWithoutTypefacesInput
  addedBy: UserUpdateOneWithoutTypefacesInput
  foundry: FoundryUpdateOneWithoutFontsInput
}

input TypefaceUpdateManyWithoutAddedByInput {
  create: [TypefaceCreateWithoutAddedByInput!]
  connect: [TypefaceWhereUniqueInput!]
  disconnect: [TypefaceWhereUniqueInput!]
  delete: [TypefaceWhereUniqueInput!]
  update: [TypefaceUpdateWithWhereUniqueWithoutAddedByInput!]
  upsert: [TypefaceUpsertWithWhereUniqueWithoutAddedByInput!]
}

input TypefaceUpdateManyWithoutFoundryInput {
  create: [TypefaceCreateWithoutFoundryInput!]
  connect: [TypefaceWhereUniqueInput!]
  disconnect: [TypefaceWhereUniqueInput!]
  delete: [TypefaceWhereUniqueInput!]
  update: [TypefaceUpdateWithWhereUniqueWithoutFoundryInput!]
  upsert: [TypefaceUpsertWithWhereUniqueWithoutFoundryInput!]
}

input TypefaceUpdateManyWithoutUsedByInput {
  create: [TypefaceCreateWithoutUsedByInput!]
  connect: [TypefaceWhereUniqueInput!]
  disconnect: [TypefaceWhereUniqueInput!]
  delete: [TypefaceWhereUniqueInput!]
  update: [TypefaceUpdateWithWhereUniqueWithoutUsedByInput!]
  upsert: [TypefaceUpsertWithWhereUniqueWithoutUsedByInput!]
}

input TypefaceUpdateWithoutAddedByDataInput {
  name: String
  imageUrl: String
  designer: String
  usedBy: WebsiteUpdateManyWithoutTypefacesInput
  foundry: FoundryUpdateOneWithoutFontsInput
}

input TypefaceUpdateWithoutFoundryDataInput {
  name: String
  imageUrl: String
  designer: String
  usedBy: WebsiteUpdateManyWithoutTypefacesInput
  addedBy: UserUpdateOneWithoutTypefacesInput
}

input TypefaceUpdateWithoutUsedByDataInput {
  name: String
  imageUrl: String
  designer: String
  addedBy: UserUpdateOneWithoutTypefacesInput
  foundry: FoundryUpdateOneWithoutFontsInput
}

input TypefaceUpdateWithWhereUniqueWithoutAddedByInput {
  where: TypefaceWhereUniqueInput!
  data: TypefaceUpdateWithoutAddedByDataInput!
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
  imageUrl: String

  """All values that are not equal to given value."""
  imageUrl_not: String

  """All values that are contained in given list."""
  imageUrl_in: [String!]

  """All values that are not contained in given list."""
  imageUrl_not_in: [String!]

  """All values less than the given value."""
  imageUrl_lt: String

  """All values less than or equal the given value."""
  imageUrl_lte: String

  """All values greater than the given value."""
  imageUrl_gt: String

  """All values greater than or equal the given value."""
  imageUrl_gte: String

  """All values containing the given string."""
  imageUrl_contains: String

  """All values not containing the given string."""
  imageUrl_not_contains: String

  """All values starting with the given string."""
  imageUrl_starts_with: String

  """All values not starting with the given string."""
  imageUrl_not_starts_with: String

  """All values ending with the given string."""
  imageUrl_ends_with: String

  """All values not ending with the given string."""
  imageUrl_not_ends_with: String
  designer: String

  """All values that are not equal to given value."""
  designer_not: String

  """All values that are contained in given list."""
  designer_in: [String!]

  """All values that are not contained in given list."""
  designer_not_in: [String!]

  """All values less than the given value."""
  designer_lt: String

  """All values less than or equal the given value."""
  designer_lte: String

  """All values greater than the given value."""
  designer_gt: String

  """All values greater than or equal the given value."""
  designer_gte: String

  """All values containing the given string."""
  designer_contains: String

  """All values not containing the given string."""
  designer_not_contains: String

  """All values starting with the given string."""
  designer_starts_with: String

  """All values not starting with the given string."""
  designer_not_starts_with: String

  """All values ending with the given string."""
  designer_ends_with: String

  """All values not ending with the given string."""
  designer_not_ends_with: String
  usedBy_every: WebsiteWhereInput
  usedBy_some: WebsiteWhereInput
  usedBy_none: WebsiteWhereInput
  addedBy: UserWhereInput
  foundry: FoundryWhereInput
}

input TypefaceWhereUniqueInput {
  id: ID
}

type User implements Node {
  id: ID!
  email: String!
  password: String!
  name: String!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
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
  posts: PostCreateManyWithoutAuthorInput
  websites: WebsiteCreateManyWithoutAddedByInput
  typefaces: TypefaceCreateManyWithoutAddedByInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
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

input UserCreateWithoutPostsInput {
  email: String!
  password: String!
  name: String!
  websites: WebsiteCreateManyWithoutAddedByInput
  typefaces: TypefaceCreateManyWithoutAddedByInput
}

input UserCreateWithoutTypefacesInput {
  email: String!
  password: String!
  name: String!
  posts: PostCreateManyWithoutAuthorInput
  websites: WebsiteCreateManyWithoutAddedByInput
}

input UserCreateWithoutWebsitesInput {
  email: String!
  password: String!
  name: String!
  posts: PostCreateManyWithoutAuthorInput
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

input UserUpdateInput {
  email: String
  password: String
  name: String
  posts: PostUpdateManyWithoutAuthorInput
  websites: WebsiteUpdateManyWithoutAddedByInput
  typefaces: TypefaceUpdateManyWithoutAddedByInput
}

input UserUpdateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
}

input UserUpdateOneWithoutTypefacesInput {
  create: UserCreateWithoutTypefacesInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutTypefacesDataInput
  upsert: UserUpsertWithoutTypefacesInput
}

input UserUpdateOneWithoutWebsitesInput {
  create: UserCreateWithoutWebsitesInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutWebsitesDataInput
  upsert: UserUpsertWithoutWebsitesInput
}

input UserUpdateWithoutPostsDataInput {
  email: String
  password: String
  name: String
  websites: WebsiteUpdateManyWithoutAddedByInput
  typefaces: TypefaceUpdateManyWithoutAddedByInput
}

input UserUpdateWithoutTypefacesDataInput {
  email: String
  password: String
  name: String
  posts: PostUpdateManyWithoutAuthorInput
  websites: WebsiteUpdateManyWithoutAddedByInput
}

input UserUpdateWithoutWebsitesDataInput {
  email: String
  password: String
  name: String
  posts: PostUpdateManyWithoutAuthorInput
  typefaces: TypefaceUpdateManyWithoutAddedByInput
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
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
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
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
  thumbnail: String!
  url: String!
  image: String!
  addedBy(where: UserWhereInput): User!
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
  thumbnail: String!
  url: String!
  image: String!
  featured: Boolean
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
  thumbnail: String!
  url: String!
  image: String!
  featured: Boolean
  typefaces: TypefaceCreateManyWithoutUsedByInput
}

input WebsiteCreateWithoutTypefacesInput {
  isPublished: Boolean
  title: String!
  thumbnail: String!
  url: String!
  image: String!
  featured: Boolean
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
  thumbnail_ASC
  thumbnail_DESC
  url_ASC
  url_DESC
  image_ASC
  image_DESC
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
  thumbnail: String!
  url: String!
  image: String!
  featured: Boolean!
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
  thumbnail: String
  url: String
  image: String
  featured: Boolean
  addedBy: UserUpdateOneWithoutWebsitesInput
  typefaces: TypefaceUpdateManyWithoutUsedByInput
}

input WebsiteUpdateManyWithoutAddedByInput {
  create: [WebsiteCreateWithoutAddedByInput!]
  connect: [WebsiteWhereUniqueInput!]
  disconnect: [WebsiteWhereUniqueInput!]
  delete: [WebsiteWhereUniqueInput!]
  update: [WebsiteUpdateWithWhereUniqueWithoutAddedByInput!]
  upsert: [WebsiteUpsertWithWhereUniqueWithoutAddedByInput!]
}

input WebsiteUpdateManyWithoutTypefacesInput {
  create: [WebsiteCreateWithoutTypefacesInput!]
  connect: [WebsiteWhereUniqueInput!]
  disconnect: [WebsiteWhereUniqueInput!]
  delete: [WebsiteWhereUniqueInput!]
  update: [WebsiteUpdateWithWhereUniqueWithoutTypefacesInput!]
  upsert: [WebsiteUpsertWithWhereUniqueWithoutTypefacesInput!]
}

input WebsiteUpdateWithoutAddedByDataInput {
  isPublished: Boolean
  title: String
  thumbnail: String
  url: String
  image: String
  featured: Boolean
  typefaces: TypefaceUpdateManyWithoutUsedByInput
}

input WebsiteUpdateWithoutTypefacesDataInput {
  isPublished: Boolean
  title: String
  thumbnail: String
  url: String
  image: String
  featured: Boolean
  addedBy: UserUpdateOneWithoutWebsitesInput
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
  thumbnail: String

  """All values that are not equal to given value."""
  thumbnail_not: String

  """All values that are contained in given list."""
  thumbnail_in: [String!]

  """All values that are not contained in given list."""
  thumbnail_not_in: [String!]

  """All values less than the given value."""
  thumbnail_lt: String

  """All values less than or equal the given value."""
  thumbnail_lte: String

  """All values greater than the given value."""
  thumbnail_gt: String

  """All values greater than or equal the given value."""
  thumbnail_gte: String

  """All values containing the given string."""
  thumbnail_contains: String

  """All values not containing the given string."""
  thumbnail_not_contains: String

  """All values starting with the given string."""
  thumbnail_starts_with: String

  """All values not starting with the given string."""
  thumbnail_not_starts_with: String

  """All values ending with the given string."""
  thumbnail_ends_with: String

  """All values not ending with the given string."""
  thumbnail_not_ends_with: String
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
  image: String

  """All values that are not equal to given value."""
  image_not: String

  """All values that are contained in given list."""
  image_in: [String!]

  """All values that are not contained in given list."""
  image_not_in: [String!]

  """All values less than the given value."""
  image_lt: String

  """All values less than or equal the given value."""
  image_lte: String

  """All values greater than the given value."""
  image_gt: String

  """All values greater than or equal the given value."""
  image_gte: String

  """All values containing the given string."""
  image_contains: String

  """All values not containing the given string."""
  image_not_contains: String

  """All values starting with the given string."""
  image_starts_with: String

  """All values not starting with the given string."""
  image_not_starts_with: String

  """All values ending with the given string."""
  image_ends_with: String

  """All values not ending with the given string."""
  image_not_ends_with: String
  featured: Boolean

  """All values that are not equal to given value."""
  featured_not: Boolean
  addedBy: UserWhereInput
  typefaces_every: TypefaceWhereInput
  typefaces_some: TypefaceWhereInput
  typefaces_none: TypefaceWhereInput
}

input WebsiteWhereUniqueInput {
  id: ID
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type PostOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'isPublished_ASC' |
  'isPublished_DESC' |
  'title_ASC' |
  'title_DESC' |
  'text_ASC' |
  'text_DESC'

export type WebsiteOrderByInput =   'id_ASC' |
  'id_DESC' |
  'isPublished_ASC' |
  'isPublished_DESC' |
  'title_ASC' |
  'title_DESC' |
  'thumbnail_ASC' |
  'thumbnail_DESC' |
  'url_ASC' |
  'url_DESC' |
  'image_ASC' |
  'image_DESC' |
  'featured_ASC' |
  'featured_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type TypefaceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'imageUrl_ASC' |
  'imageUrl_DESC' |
  'designer_ASC' |
  'designer_DESC' |
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
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

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

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface WebsiteCreateInput {
  isPublished?: Boolean
  title: String
  thumbnail: String
  url: String
  image: String
  featured?: Boolean
  addedBy: UserCreateOneWithoutWebsitesInput
  typefaces?: TypefaceCreateManyWithoutUsedByInput
}

export interface PostWhereInput {
  AND?: PostWhereInput[] | PostWhereInput
  OR?: PostWhereInput[] | PostWhereInput
  NOT?: PostWhereInput[] | PostWhereInput
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
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  author?: UserWhereInput
}

export interface TypefaceCreateWithoutFoundryInput {
  name: String
  imageUrl?: String
  designer?: String
  usedBy?: WebsiteCreateManyWithoutTypefacesInput
  addedBy: UserCreateOneWithoutTypefacesInput
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
  fonts_every?: TypefaceWhereInput
  fonts_some?: TypefaceWhereInput
  fonts_none?: TypefaceWhereInput
}

export interface WebsiteCreateWithoutAddedByInput {
  isPublished?: Boolean
  title: String
  thumbnail: String
  url: String
  image: String
  featured?: Boolean
  typefaces?: TypefaceCreateManyWithoutUsedByInput
}

export interface TypefaceUpsertWithWhereUniqueWithoutUsedByInput {
  where: TypefaceWhereUniqueInput
  update: TypefaceUpdateWithoutUsedByDataInput
  create: TypefaceCreateWithoutUsedByInput
}

export interface TypefaceCreateManyWithoutUsedByInput {
  create?: TypefaceCreateWithoutUsedByInput[] | TypefaceCreateWithoutUsedByInput
  connect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput
}

export interface FileCreateInput {
  filename: String
  mimetype: String
  encoding: String
  url: String
}

export interface TypefaceCreateWithoutUsedByInput {
  name: String
  imageUrl?: String
  designer?: String
  addedBy: UserCreateOneWithoutTypefacesInput
  foundry?: FoundryCreateOneWithoutFontsInput
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
  imageUrl?: String
  imageUrl_not?: String
  imageUrl_in?: String[] | String
  imageUrl_not_in?: String[] | String
  imageUrl_lt?: String
  imageUrl_lte?: String
  imageUrl_gt?: String
  imageUrl_gte?: String
  imageUrl_contains?: String
  imageUrl_not_contains?: String
  imageUrl_starts_with?: String
  imageUrl_not_starts_with?: String
  imageUrl_ends_with?: String
  imageUrl_not_ends_with?: String
  designer?: String
  designer_not?: String
  designer_in?: String[] | String
  designer_not_in?: String[] | String
  designer_lt?: String
  designer_lte?: String
  designer_gt?: String
  designer_gte?: String
  designer_contains?: String
  designer_not_contains?: String
  designer_starts_with?: String
  designer_not_starts_with?: String
  designer_ends_with?: String
  designer_not_ends_with?: String
  usedBy_every?: WebsiteWhereInput
  usedBy_some?: WebsiteWhereInput
  usedBy_none?: WebsiteWhereInput
  addedBy?: UserWhereInput
  foundry?: FoundryWhereInput
}

export interface UserCreateOneWithoutTypefacesInput {
  create?: UserCreateWithoutTypefacesInput
  connect?: UserWhereUniqueInput
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
  thumbnail?: String
  thumbnail_not?: String
  thumbnail_in?: String[] | String
  thumbnail_not_in?: String[] | String
  thumbnail_lt?: String
  thumbnail_lte?: String
  thumbnail_gt?: String
  thumbnail_gte?: String
  thumbnail_contains?: String
  thumbnail_not_contains?: String
  thumbnail_starts_with?: String
  thumbnail_not_starts_with?: String
  thumbnail_ends_with?: String
  thumbnail_not_ends_with?: String
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
  image?: String
  image_not?: String
  image_in?: String[] | String
  image_not_in?: String[] | String
  image_lt?: String
  image_lte?: String
  image_gt?: String
  image_gte?: String
  image_contains?: String
  image_not_contains?: String
  image_starts_with?: String
  image_not_starts_with?: String
  image_ends_with?: String
  image_not_ends_with?: String
  featured?: Boolean
  featured_not?: Boolean
  addedBy?: UserWhereInput
  typefaces_every?: TypefaceWhereInput
  typefaces_some?: TypefaceWhereInput
  typefaces_none?: TypefaceWhereInput
}

export interface UserCreateWithoutTypefacesInput {
  email: String
  password: String
  name: String
  posts?: PostCreateManyWithoutAuthorInput
  websites?: WebsiteCreateManyWithoutAddedByInput
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

export interface PostCreateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
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

export interface PostCreateWithoutAuthorInput {
  isPublished?: Boolean
  title: String
  text: String
}

export interface PostSubscriptionWhereInput {
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PostWhereInput
}

export interface FoundryCreateOneWithoutFontsInput {
  create?: FoundryCreateWithoutFontsInput
  connect?: FoundryWhereUniqueInput
}

export interface PostWhereUniqueInput {
  id?: ID_Input
}

export interface FoundryCreateWithoutFontsInput {
  name: String
  url?: String
}

export interface WebsiteWhereUniqueInput {
  id?: ID_Input
}

export interface TypefaceCreateManyWithoutAddedByInput {
  create?: TypefaceCreateWithoutAddedByInput[] | TypefaceCreateWithoutAddedByInput
  connect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput
}

export interface FoundryWhereUniqueInput {
  id?: ID_Input
}

export interface TypefaceCreateWithoutAddedByInput {
  name: String
  imageUrl?: String
  designer?: String
  usedBy?: WebsiteCreateManyWithoutTypefacesInput
  foundry?: FoundryCreateOneWithoutFontsInput
}

export interface TypefaceUpsertWithWhereUniqueWithoutFoundryInput {
  where: TypefaceWhereUniqueInput
  update: TypefaceUpdateWithoutFoundryDataInput
  create: TypefaceCreateWithoutFoundryInput
}

export interface WebsiteCreateManyWithoutTypefacesInput {
  create?: WebsiteCreateWithoutTypefacesInput[] | WebsiteCreateWithoutTypefacesInput
  connect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput
}

export interface TypefaceUpdateWithWhereUniqueWithoutFoundryInput {
  where: TypefaceWhereUniqueInput
  data: TypefaceUpdateWithoutFoundryDataInput
}

export interface WebsiteCreateWithoutTypefacesInput {
  isPublished?: Boolean
  title: String
  thumbnail: String
  url: String
  image: String
  featured?: Boolean
  addedBy: UserCreateOneWithoutWebsitesInput
}

export interface FoundryUpdateInput {
  name?: String
  url?: String
  fonts?: TypefaceUpdateManyWithoutFoundryInput
}

export interface UserCreateOneWithoutWebsitesInput {
  create?: UserCreateWithoutWebsitesInput
  connect?: UserWhereUniqueInput
}

export interface WebsiteUpdateInput {
  isPublished?: Boolean
  title?: String
  thumbnail?: String
  url?: String
  image?: String
  featured?: Boolean
  addedBy?: UserUpdateOneWithoutWebsitesInput
  typefaces?: TypefaceUpdateManyWithoutUsedByInput
}

export interface UserCreateWithoutWebsitesInput {
  email: String
  password: String
  name: String
  posts?: PostCreateManyWithoutAuthorInput
  typefaces?: TypefaceCreateManyWithoutAddedByInput
}

export interface UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput
  create: UserCreateWithoutPostsInput
}

export interface UserCreateInput {
  email: String
  password: String
  name: String
  posts?: PostCreateManyWithoutAuthorInput
  websites?: WebsiteCreateManyWithoutAddedByInput
  typefaces?: TypefaceCreateManyWithoutAddedByInput
}

export interface WebsiteUpsertWithWhereUniqueWithoutTypefacesInput {
  where: WebsiteWhereUniqueInput
  update: WebsiteUpdateWithoutTypefacesDataInput
  create: WebsiteCreateWithoutTypefacesInput
}

export interface TypefaceUpdateManyWithoutAddedByInput {
  create?: TypefaceCreateWithoutAddedByInput[] | TypefaceCreateWithoutAddedByInput
  connect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput
  disconnect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput
  delete?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput
  update?: TypefaceUpdateWithWhereUniqueWithoutAddedByInput[] | TypefaceUpdateWithWhereUniqueWithoutAddedByInput
  upsert?: TypefaceUpsertWithWhereUniqueWithoutAddedByInput[] | TypefaceUpsertWithWhereUniqueWithoutAddedByInput
}

export interface UserUpdateWithoutWebsitesDataInput {
  email?: String
  password?: String
  name?: String
  posts?: PostUpdateManyWithoutAuthorInput
  typefaces?: TypefaceUpdateManyWithoutAddedByInput
}

export interface TypefaceCreateInput {
  name: String
  imageUrl?: String
  designer?: String
  usedBy?: WebsiteCreateManyWithoutTypefacesInput
  addedBy: UserCreateOneWithoutTypefacesInput
  foundry?: FoundryCreateOneWithoutFontsInput
}

export interface WebsiteUpdateWithoutTypefacesDataInput {
  isPublished?: Boolean
  title?: String
  thumbnail?: String
  url?: String
  image?: String
  featured?: Boolean
  addedBy?: UserUpdateOneWithoutWebsitesInput
}

export interface FoundryCreateInput {
  name: String
  url?: String
  fonts?: TypefaceCreateManyWithoutFoundryInput
}

export interface WebsiteUpdateManyWithoutTypefacesInput {
  create?: WebsiteCreateWithoutTypefacesInput[] | WebsiteCreateWithoutTypefacesInput
  connect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput
  disconnect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput
  delete?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput
  update?: WebsiteUpdateWithWhereUniqueWithoutTypefacesInput[] | WebsiteUpdateWithWhereUniqueWithoutTypefacesInput
  upsert?: WebsiteUpsertWithWhereUniqueWithoutTypefacesInput[] | WebsiteUpsertWithWhereUniqueWithoutTypefacesInput
}

export interface TypefaceCreateManyWithoutFoundryInput {
  create?: TypefaceCreateWithoutFoundryInput[] | TypefaceCreateWithoutFoundryInput
  connect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput
}

export interface TypefaceUpdateWithWhereUniqueWithoutAddedByInput {
  where: TypefaceWhereUniqueInput
  data: TypefaceUpdateWithoutAddedByDataInput
}

export interface WebsiteUpsertWithWhereUniqueWithoutAddedByInput {
  where: WebsiteWhereUniqueInput
  update: WebsiteUpdateWithoutAddedByDataInput
  create: WebsiteCreateWithoutAddedByInput
}

export interface UserCreateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput
  connect?: UserWhereUniqueInput
}

export interface WebsiteCreateManyWithoutAddedByInput {
  create?: WebsiteCreateWithoutAddedByInput[] | WebsiteCreateWithoutAddedByInput
  connect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput
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

export interface PostUpdateInput {
  isPublished?: Boolean
  title?: String
  text?: String
  author?: UserUpdateOneWithoutPostsInput
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
  posts_every?: PostWhereInput
  posts_some?: PostWhereInput
  posts_none?: PostWhereInput
  websites_every?: WebsiteWhereInput
  websites_some?: WebsiteWhereInput
  websites_none?: WebsiteWhereInput
  typefaces_every?: TypefaceWhereInput
  typefaces_some?: TypefaceWhereInput
  typefaces_none?: TypefaceWhereInput
}

export interface UserUpdateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutPostsDataInput
  upsert?: UserUpsertWithoutPostsInput
}

export interface FileUpdateInput {
  filename?: String
  mimetype?: String
  encoding?: String
  url?: String
}

export interface UserUpdateWithoutPostsDataInput {
  email?: String
  password?: String
  name?: String
  websites?: WebsiteUpdateManyWithoutAddedByInput
  typefaces?: TypefaceUpdateManyWithoutAddedByInput
}

export interface TypefaceWhereUniqueInput {
  id?: ID_Input
}

export interface WebsiteUpdateManyWithoutAddedByInput {
  create?: WebsiteCreateWithoutAddedByInput[] | WebsiteCreateWithoutAddedByInput
  connect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput
  disconnect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput
  delete?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput
  update?: WebsiteUpdateWithWhereUniqueWithoutAddedByInput[] | WebsiteUpdateWithWhereUniqueWithoutAddedByInput
  upsert?: WebsiteUpsertWithWhereUniqueWithoutAddedByInput[] | WebsiteUpsertWithWhereUniqueWithoutAddedByInput
}

export interface TypefaceUpdateWithoutFoundryDataInput {
  name?: String
  imageUrl?: String
  designer?: String
  usedBy?: WebsiteUpdateManyWithoutTypefacesInput
  addedBy?: UserUpdateOneWithoutTypefacesInput
}

export interface WebsiteUpdateWithWhereUniqueWithoutAddedByInput {
  where: WebsiteWhereUniqueInput
  data: WebsiteUpdateWithoutAddedByDataInput
}

export interface TypefaceUpdateInput {
  name?: String
  imageUrl?: String
  designer?: String
  usedBy?: WebsiteUpdateManyWithoutTypefacesInput
  addedBy?: UserUpdateOneWithoutTypefacesInput
  foundry?: FoundryUpdateOneWithoutFontsInput
}

export interface WebsiteUpdateWithoutAddedByDataInput {
  isPublished?: Boolean
  title?: String
  thumbnail?: String
  url?: String
  image?: String
  featured?: Boolean
  typefaces?: TypefaceUpdateManyWithoutUsedByInput
}

export interface TypefaceUpsertWithWhereUniqueWithoutAddedByInput {
  where: TypefaceWhereUniqueInput
  update: TypefaceUpdateWithoutAddedByDataInput
  create: TypefaceCreateWithoutAddedByInput
}

export interface TypefaceUpdateManyWithoutUsedByInput {
  create?: TypefaceCreateWithoutUsedByInput[] | TypefaceCreateWithoutUsedByInput
  connect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput
  disconnect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput
  delete?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput
  update?: TypefaceUpdateWithWhereUniqueWithoutUsedByInput[] | TypefaceUpdateWithWhereUniqueWithoutUsedByInput
  upsert?: TypefaceUpsertWithWhereUniqueWithoutUsedByInput[] | TypefaceUpsertWithWhereUniqueWithoutUsedByInput
}

export interface UserUpdateOneWithoutWebsitesInput {
  create?: UserCreateWithoutWebsitesInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutWebsitesDataInput
  upsert?: UserUpsertWithoutWebsitesInput
}

export interface TypefaceUpdateWithWhereUniqueWithoutUsedByInput {
  where: TypefaceWhereUniqueInput
  data: TypefaceUpdateWithoutUsedByDataInput
}

export interface TypefaceUpdateWithoutAddedByDataInput {
  name?: String
  imageUrl?: String
  designer?: String
  usedBy?: WebsiteUpdateManyWithoutTypefacesInput
  foundry?: FoundryUpdateOneWithoutFontsInput
}

export interface TypefaceUpdateWithoutUsedByDataInput {
  name?: String
  imageUrl?: String
  designer?: String
  addedBy?: UserUpdateOneWithoutTypefacesInput
  foundry?: FoundryUpdateOneWithoutFontsInput
}

export interface UserCreateWithoutPostsInput {
  email: String
  password: String
  name: String
  websites?: WebsiteCreateManyWithoutAddedByInput
  typefaces?: TypefaceCreateManyWithoutAddedByInput
}

export interface UserUpdateOneWithoutTypefacesInput {
  create?: UserCreateWithoutTypefacesInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutTypefacesDataInput
  upsert?: UserUpsertWithoutTypefacesInput
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

export interface UserUpdateWithoutTypefacesDataInput {
  email?: String
  password?: String
  name?: String
  posts?: PostUpdateManyWithoutAuthorInput
  websites?: WebsiteUpdateManyWithoutAddedByInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface PostUpdateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  disconnect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  delete?: PostWhereUniqueInput[] | PostWhereUniqueInput
  update?: PostUpdateWithWhereUniqueWithoutAuthorInput[] | PostUpdateWithWhereUniqueWithoutAuthorInput
  upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[] | PostUpsertWithWhereUniqueWithoutAuthorInput
}

export interface TypefaceUpdateManyWithoutFoundryInput {
  create?: TypefaceCreateWithoutFoundryInput[] | TypefaceCreateWithoutFoundryInput
  connect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput
  disconnect?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput
  delete?: TypefaceWhereUniqueInput[] | TypefaceWhereUniqueInput
  update?: TypefaceUpdateWithWhereUniqueWithoutFoundryInput[] | TypefaceUpdateWithWhereUniqueWithoutFoundryInput
  upsert?: TypefaceUpsertWithWhereUniqueWithoutFoundryInput[] | TypefaceUpsertWithWhereUniqueWithoutFoundryInput
}

export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  data: PostUpdateWithoutAuthorDataInput
}

export interface UserUpsertWithoutWebsitesInput {
  update: UserUpdateWithoutWebsitesDataInput
  create: UserCreateWithoutWebsitesInput
}

export interface PostUpdateWithoutAuthorDataInput {
  isPublished?: Boolean
  title?: String
  text?: String
}

export interface PostCreateInput {
  isPublished?: Boolean
  title: String
  text: String
  author: UserCreateOneWithoutPostsInput
}

export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  update: PostUpdateWithoutAuthorDataInput
  create: PostCreateWithoutAuthorInput
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

export interface FoundryUpsertWithoutFontsInput {
  update: FoundryUpdateWithoutFontsDataInput
  create: FoundryCreateWithoutFontsInput
}

export interface FoundryUpdateWithoutFontsDataInput {
  name?: String
  url?: String
}

export interface FoundryUpdateOneWithoutFontsInput {
  create?: FoundryCreateWithoutFontsInput
  connect?: FoundryWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: FoundryUpdateWithoutFontsDataInput
  upsert?: FoundryUpsertWithoutFontsInput
}

export interface UserUpsertWithoutTypefacesInput {
  update: UserUpdateWithoutTypefacesDataInput
  create: UserCreateWithoutTypefacesInput
}

export interface FileWhereUniqueInput {
  id?: ID_Input
  url?: String
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

export interface WebsiteUpdateWithWhereUniqueWithoutTypefacesInput {
  where: WebsiteWhereUniqueInput
  data: WebsiteUpdateWithoutTypefacesDataInput
}

export interface UserUpdateInput {
  email?: String
  password?: String
  name?: String
  posts?: PostUpdateManyWithoutAuthorInput
  websites?: WebsiteUpdateManyWithoutAddedByInput
  typefaces?: TypefaceUpdateManyWithoutAddedByInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
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

export interface File extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  filename: String
  mimetype: String
  encoding: String
  url: String
}

export interface Post extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  isPublished: Boolean
  title: String
  text: String
  author: User
}

export interface BatchPayload {
  count: Long
}

export interface AggregateFile {
  count: Int
}

export interface FileSubscriptionPayload {
  mutation: MutationType
  node?: File
  updatedFields?: String[]
  previousValues?: FilePreviousValues
}

export interface Website extends Node {
  id: ID_Output
  isPublished: Boolean
  title: String
  thumbnail: String
  url: String
  image: String
  addedBy: User
  typefaces?: Typeface[]
  featured: Boolean
}

/*
 * An edge in a connection.

 */
export interface FileEdge {
  node: File
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface FileConnection {
  pageInfo: PageInfo
  edges: FileEdge[]
  aggregate: AggregateFile
}

export interface AggregateFoundry {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface FoundryConnection {
  pageInfo: PageInfo
  edges: FoundryEdge[]
  aggregate: AggregateFoundry
}

export interface User extends Node {
  id: ID_Output
  email: String
  password: String
  name: String
  posts?: Post[]
  websites?: Website[]
  typefaces?: Typeface[]
}

/*
 * An edge in a connection.

 */
export interface TypefaceEdge {
  node: Typeface
  cursor: String
}

export interface FoundryPreviousValues {
  id: ID_Output
  name: String
  url?: String
}

export interface AggregateWebsite {
  count: Int
}

export interface PostSubscriptionPayload {
  mutation: MutationType
  node?: Post
  updatedFields?: String[]
  previousValues?: PostPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface WebsiteConnection {
  pageInfo: PageInfo
  edges: WebsiteEdge[]
  aggregate: AggregateWebsite
}

export interface PostPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  isPublished: Boolean
  title: String
  text: String
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface FoundrySubscriptionPayload {
  mutation: MutationType
  node?: Foundry
  updatedFields?: String[]
  previousValues?: FoundryPreviousValues
}

export interface AggregatePost {
  count: Int
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
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

export interface UserPreviousValues {
  id: ID_Output
  email: String
  password: String
  name: String
}

/*
 * An edge in a connection.

 */
export interface FoundryEdge {
  node: Foundry
  cursor: String
}

export interface Foundry extends Node {
  id: ID_Output
  name: String
  fonts?: Typeface[]
  url?: String
}

/*
 * A connection to a list of items.

 */
export interface TypefaceConnection {
  pageInfo: PageInfo
  edges: TypefaceEdge[]
  aggregate: AggregateTypeface
}

export interface WebsiteSubscriptionPayload {
  mutation: MutationType
  node?: Website
  updatedFields?: String[]
  previousValues?: WebsitePreviousValues
}

export interface AggregateUser {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface PostEdge {
  node: Post
  cursor: String
}

export interface TypefacePreviousValues {
  id: ID_Output
  name: String
  imageUrl?: String
  designer?: String
}

export interface TypefaceSubscriptionPayload {
  mutation: MutationType
  node?: Typeface
  updatedFields?: String[]
  previousValues?: TypefacePreviousValues
}

export interface Typeface extends Node {
  id: ID_Output
  name: String
  usedBy?: Website[]
  imageUrl?: String
  addedBy: User
  foundry?: Foundry
  designer?: String
}

export interface WebsitePreviousValues {
  id: ID_Output
  isPublished: Boolean
  title: String
  thumbnail: String
  url: String
  image: String
  featured: Boolean
}

/*
 * A connection to a list of items.

 */
export interface PostConnection {
  pageInfo: PageInfo
  edges: PostEdge[]
  aggregate: AggregatePost
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
export interface WebsiteEdge {
  node: Website
  cursor: String
}

export interface AggregateTypeface {
  count: Int
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string