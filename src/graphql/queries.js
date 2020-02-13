/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMovie = /* GraphQL */ `
  query GetMovie($id: ID!) {
    getMovie(id: $id) {
      id
      title
      description
      rating
      Cast {
        items {
          id
          movieID
          characterID
          actorID
        }
        nextToken
      }
      Crew {
        items {
          id
          movieID
          crewMemberID
          function
        }
        nextToken
      }
    }
  }
`;
export const listMovies = /* GraphQL */ `
  query ListMovies(
    $filter: ModelMovieFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMovies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        rating
        Cast {
          nextToken
        }
        Crew {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getCharacter = /* GraphQL */ `
  query GetCharacter($id: ID!) {
    getCharacter(id: $id) {
      id
      name
      description
      roles {
        items {
          id
          movieID
          characterID
          actorID
        }
        nextToken
      }
    }
  }
`;
export const listCharacters = /* GraphQL */ `
  query ListCharacters(
    $filter: ModelCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCharacters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        roles {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getActor = /* GraphQL */ `
  query GetActor($id: ID!) {
    getActor(id: $id) {
      id
      name
      dateOfBirth
      dateOfDeath
      gender
      roles {
        items {
          id
          movieID
          characterID
          actorID
        }
        nextToken
      }
    }
  }
`;
export const listActors = /* GraphQL */ `
  query ListActors(
    $filter: ModelActorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        dateOfBirth
        dateOfDeath
        gender
        roles {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getCrewMember = /* GraphQL */ `
  query GetCrewMember($id: ID!) {
    getCrewMember(id: $id) {
      id
      name
      dateOfBirth
      dateOfDeath
      gender
      jobs {
        items {
          id
          movieID
          crewMemberID
          function
        }
        nextToken
      }
    }
  }
`;
export const listCrewMembers = /* GraphQL */ `
  query ListCrewMembers(
    $filter: ModelCrewMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCrewMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        dateOfBirth
        dateOfDeath
        gender
        jobs {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getRole = /* GraphQL */ `
  query GetRole($id: ID!) {
    getRole(id: $id) {
      id
      movieID
      characterID
      actorID
      movie {
        id
        title
        description
        rating
        Cast {
          nextToken
        }
        Crew {
          nextToken
        }
      }
      character {
        id
        name
        description
        roles {
          nextToken
        }
      }
      actor {
        id
        name
        dateOfBirth
        dateOfDeath
        gender
        roles {
          nextToken
        }
      }
    }
  }
`;
export const listRoles = /* GraphQL */ `
  query ListRoles(
    $filter: ModelRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        movieID
        characterID
        actorID
        movie {
          id
          title
          description
          rating
        }
        character {
          id
          name
          description
        }
        actor {
          id
          name
          dateOfBirth
          dateOfDeath
          gender
        }
      }
      nextToken
    }
  }
`;
export const getCrewJob = /* GraphQL */ `
  query GetCrewJob($id: ID!) {
    getCrewJob(id: $id) {
      id
      movieID
      crewMemberID
      function
      movie {
        id
        title
        description
        rating
        Cast {
          nextToken
        }
        Crew {
          nextToken
        }
      }
      actor {
        id
        name
        dateOfBirth
        dateOfDeath
        gender
        jobs {
          nextToken
        }
      }
    }
  }
`;
export const listCrewJobs = /* GraphQL */ `
  query ListCrewJobs(
    $filter: ModelCrewJobFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCrewJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        movieID
        crewMemberID
        function
        movie {
          id
          title
          description
          rating
        }
        actor {
          id
          name
          dateOfBirth
          dateOfDeath
          gender
        }
      }
      nextToken
    }
  }
`;
