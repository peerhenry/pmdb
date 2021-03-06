// const { gql } = require('apollo-server-express')

module.exports = `
  schema {
    query: Query
    mutation: Mutation
  }

  interface Professional {
    dateOfBirth: String
    dateOfDeath: String
    gender: Gender!
    id: ID!
    name: String!
  }

  type Actor implements Professional {
    dateOfBirth: String
    dateOfDeath: String
    gender: Gender!
    id: ID!
    name: String!
    roles(
      filter: ModelRoleFilterInput
      limit: Int
      nextToken: String
      sortDirection: ModelSortDirection
    ): ModelRoleConnection
  }

  type Character {
    description: String
    id: ID!
    name: String!
    roles(
      filter: ModelRoleFilterInput
      limit: Int
      nextToken: String
      sortDirection: ModelSortDirection
    ): ModelRoleConnection
  }

  type CrewJob {
    actor: CrewMember!
    crewMemberID: ID!
    function: CrewFunction!
    id: ID!
    movie: Movie!
    movieID: ID!
  }

  type CrewMember implements Professional {
    dateOfBirth: String
    dateOfDeath: String
    gender: Gender!
    id: ID!
    jobs(
      filter: ModelCrewJobFilterInput
      limit: Int
      nextToken: String
      sortDirection: ModelSortDirection
    ): ModelCrewJobConnection
    name: String!
  }

  type ModelActorConnection {
    items: [Actor]
    nextToken: String
  }

  type ModelCharacterConnection {
    items: [Character]
    nextToken: String
  }

  type ModelCrewJobConnection {
    items: [CrewJob]
    nextToken: String
  }

  type ModelCrewMemberConnection {
    items: [CrewMember]
    nextToken: String
  }

  type ModelMovieConnection {
    items: [Movie]
    nextToken: String
  }

  type ModelRoleConnection {
    items: [Role]
    nextToken: String
  }

  type Movie {
    Cast(
      filter: ModelRoleFilterInput
      limit: Int
      nextToken: String
      sortDirection: ModelSortDirection
    ): ModelRoleConnection
    Crew(
      filter: ModelCrewJobFilterInput
      limit: Int
      nextToken: String
      sortDirection: ModelSortDirection
    ): ModelCrewJobConnection
    description: String
    id: ID!
    rating: Int
    title: String!
  }

  type Mutation {
    createActor(
      condition: ModelActorConditionInput
      input: CreateActorInput!
    ): Actor
    createCharacter(
      condition: ModelCharacterConditionInput
      input: CreateCharacterInput!
    ): Character
    createCrewJob(
      condition: ModelCrewJobConditionInput
      input: CreateCrewJobInput!
    ): CrewJob
    createCrewMember(
      condition: ModelCrewMemberConditionInput
      input: CreateCrewMemberInput!
    ): CrewMember
    createMovie(
      condition: ModelMovieConditionInput
      input: CreateMovieInput!
    ): Movie
    createRole(
      condition: ModelRoleConditionInput
      input: CreateRoleInput!
    ): Role
    deleteActor(
      condition: ModelActorConditionInput
      input: DeleteActorInput!
    ): Actor
    deleteCharacter(
      condition: ModelCharacterConditionInput
      input: DeleteCharacterInput!
    ): Character
    deleteCrewJob(
      condition: ModelCrewJobConditionInput
      input: DeleteCrewJobInput!
    ): CrewJob
    deleteCrewMember(
      condition: ModelCrewMemberConditionInput
      input: DeleteCrewMemberInput!
    ): CrewMember
    deleteMovie(
      condition: ModelMovieConditionInput
      input: DeleteMovieInput!
    ): Movie
    deleteRole(
      condition: ModelRoleConditionInput
      input: DeleteRoleInput!
    ): Role
    updateActor(
      condition: ModelActorConditionInput
      input: UpdateActorInput!
    ): Actor
    updateCharacter(
      condition: ModelCharacterConditionInput
      input: UpdateCharacterInput!
    ): Character
    updateCrewJob(
      condition: ModelCrewJobConditionInput
      input: UpdateCrewJobInput!
    ): CrewJob
    updateCrewMember(
      condition: ModelCrewMemberConditionInput
      input: UpdateCrewMemberInput!
    ): CrewMember
    updateMovie(
      condition: ModelMovieConditionInput
      input: UpdateMovieInput!
    ): Movie
    updateRole(
      condition: ModelRoleConditionInput
      input: UpdateRoleInput!
    ): Role
  }

  type Query {
    getActor(id: ID!): Actor
    getCharacter(id: ID!): Character
    getCrewJob(id: ID!): CrewJob
    getCrewMember(id: ID!): CrewMember
    getMovie(id: ID!): Movie
    getRole(id: ID!): Role
    listActors(
      filter: ModelActorFilterInput
      limit: Int
      nextToken: String
    ): ModelActorConnection
    listCharacters(
      filter: ModelCharacterFilterInput
      limit: Int
      nextToken: String
    ): ModelCharacterConnection
    listCrewJobs(
      filter: ModelCrewJobFilterInput
      limit: Int
      nextToken: String
    ): ModelCrewJobConnection
    listCrewMembers(
      filter: ModelCrewMemberFilterInput
      limit: Int
      nextToken: String
    ): ModelCrewMemberConnection
    listMovies(
      filter: ModelMovieFilterInput
      limit: Int
      nextToken: String
    ): ModelMovieConnection
    listRoles(
      filter: ModelRoleFilterInput
      limit: Int
      nextToken: String
    ): ModelRoleConnection
  }

  type Role {
    actor: Actor!
    actorID: ID!
    character: Character!
    characterID: ID!
    id: ID!
    movie: Movie!
    movieID: ID!
  }

  enum CrewFunction {
    COMPOSER
    DIRECTOR
    PRODUCER
    WRITER
  }

  enum Gender {
    FEMALE
    MALE
  }

  enum ModelAttributeTypes {
    _null
    binary
    binarySet
    bool
    list
    map
    number
    numberSet
    string
    stringSet
  }

  enum ModelSortDirection {
    ASC
    DESC
  }

  input CreateActorInput {
    dateOfBirth: String
    dateOfDeath: String
    gender: Gender!
    id: ID
    name: String!
  }

  input CreateCharacterInput {
    description: String
    id: ID
    name: String!
  }

  input CreateCrewJobInput {
    crewMemberID: ID!
    function: CrewFunction!
    id: ID
    movieID: ID!
  }

  input CreateCrewMemberInput {
    dateOfBirth: String
    dateOfDeath: String
    gender: Gender!
    id: ID
    name: String!
  }

  input CreateMovieInput {
    description: String
    id: ID
    rating: Int
    title: String!
  }

  input CreateRoleInput {
    actorID: ID!
    characterID: ID!
    id: ID
    movieID: ID!
  }

  input DeleteActorInput {
    id: ID
  }

  input DeleteCharacterInput {
    id: ID
  }

  input DeleteCrewJobInput {
    id: ID
  }

  input DeleteCrewMemberInput {
    id: ID
  }

  input DeleteMovieInput {
    id: ID
  }

  input DeleteRoleInput {
    id: ID
  }

  input ModelActorConditionInput {
    and: [ModelActorConditionInput]
    dateOfBirth: ModelStringInput
    dateOfDeath: ModelStringInput
    gender: ModelGenderInput
    name: ModelStringInput
    not: ModelActorConditionInput
    or: [ModelActorConditionInput]
  }

  input ModelActorFilterInput {
    and: [ModelActorFilterInput]
    dateOfBirth: ModelStringInput
    dateOfDeath: ModelStringInput
    gender: ModelGenderInput
    id: ModelIDInput
    name: ModelStringInput
    not: ModelActorFilterInput
    or: [ModelActorFilterInput]
  }

  input ModelBooleanInput {
    attributeExists: Boolean
    attributeType: ModelAttributeTypes
    eq: Boolean
    ne: Boolean
  }

  input ModelCharacterConditionInput {
    and: [ModelCharacterConditionInput]
    description: ModelStringInput
    name: ModelStringInput
    not: ModelCharacterConditionInput
    or: [ModelCharacterConditionInput]
  }

  input ModelCharacterFilterInput {
    and: [ModelCharacterFilterInput]
    description: ModelStringInput
    id: ModelIDInput
    name: ModelStringInput
    not: ModelCharacterFilterInput
    or: [ModelCharacterFilterInput]
  }

  input ModelCrewFunctionInput {
    eq: CrewFunction
    ne: CrewFunction
  }

  input ModelCrewJobConditionInput {
    and: [ModelCrewJobConditionInput]
    crewMemberID: ModelIDInput
    function: ModelCrewFunctionInput
    movieID: ModelIDInput
    not: ModelCrewJobConditionInput
    or: [ModelCrewJobConditionInput]
  }

  input ModelCrewJobFilterInput {
    and: [ModelCrewJobFilterInput]
    crewMemberID: ModelIDInput
    function: ModelCrewFunctionInput
    id: ModelIDInput
    movieID: ModelIDInput
    not: ModelCrewJobFilterInput
    or: [ModelCrewJobFilterInput]
  }

  input ModelCrewMemberConditionInput {
    and: [ModelCrewMemberConditionInput]
    dateOfBirth: ModelStringInput
    dateOfDeath: ModelStringInput
    gender: ModelGenderInput
    name: ModelStringInput
    not: ModelCrewMemberConditionInput
    or: [ModelCrewMemberConditionInput]
  }

  input ModelCrewMemberFilterInput {
    and: [ModelCrewMemberFilterInput]
    dateOfBirth: ModelStringInput
    dateOfDeath: ModelStringInput
    gender: ModelGenderInput
    id: ModelIDInput
    name: ModelStringInput
    not: ModelCrewMemberFilterInput
    or: [ModelCrewMemberFilterInput]
  }

  input ModelFloatInput {
    attributeExists: Boolean
    attributeType: ModelAttributeTypes
    between: [Float]
    eq: Float
    ge: Float
    gt: Float
    le: Float
    lt: Float
    ne: Float
  }

  input ModelGenderInput {
    eq: Gender
    ne: Gender
  }

  input ModelIDInput {
    attributeExists: Boolean
    attributeType: ModelAttributeTypes
    beginsWith: ID
    between: [ID]
    contains: ID
    eq: ID
    ge: ID
    gt: ID
    le: ID
    lt: ID
    ne: ID
    notContains: ID
    size: ModelSizeInput
  }

  input ModelIntInput {
    attributeExists: Boolean
    attributeType: ModelAttributeTypes
    between: [Int]
    eq: Int
    ge: Int
    gt: Int
    le: Int
    lt: Int
    ne: Int
  }

  input ModelMovieConditionInput {
    and: [ModelMovieConditionInput]
    description: ModelStringInput
    not: ModelMovieConditionInput
    or: [ModelMovieConditionInput]
    rating: ModelIntInput
    title: ModelStringInput
  }

  input ModelMovieFilterInput {
    and: [ModelMovieFilterInput]
    description: ModelStringInput
    id: ModelIDInput
    not: ModelMovieFilterInput
    or: [ModelMovieFilterInput]
    rating: ModelIntInput
    title: ModelStringInput
  }

  input ModelRoleConditionInput {
    actorID: ModelIDInput
    and: [ModelRoleConditionInput]
    characterID: ModelIDInput
    movieID: ModelIDInput
    not: ModelRoleConditionInput
    or: [ModelRoleConditionInput]
  }

  input ModelRoleFilterInput {
    actorID: ModelIDInput
    and: [ModelRoleFilterInput]
    characterID: ModelIDInput
    id: ModelIDInput
    movieID: ModelIDInput
    not: ModelRoleFilterInput
    or: [ModelRoleFilterInput]
  }

  input ModelSizeInput {
    between: [Int]
    eq: Int
    ge: Int
    gt: Int
    le: Int
    lt: Int
    ne: Int
  }

  input ModelStringInput {
    attributeExists: Boolean
    attributeType: ModelAttributeTypes
    beginsWith: String
    between: [String]
    contains: String
    eq: String
    ge: String
    gt: String
    le: String
    lt: String
    ne: String
    notContains: String
    size: ModelSizeInput
  }

  input UpdateActorInput {
    dateOfBirth: String
    dateOfDeath: String
    gender: Gender
    id: ID!
    name: String
  }

  input UpdateCharacterInput {
    description: String
    id: ID!
    name: String
  }

  input UpdateCrewJobInput {
    crewMemberID: ID
    function: CrewFunction
    id: ID!
    movieID: ID
  }

  input UpdateCrewMemberInput {
    dateOfBirth: String
    dateOfDeath: String
    gender: Gender
    id: ID!
    name: String
  }

  input UpdateMovieInput {
    description: String
    id: ID!
    rating: Int
    title: String
  }

  input UpdateRoleInput {
    actorID: ID
    characterID: ID
    id: ID!
    movieID: ID
  }
`
