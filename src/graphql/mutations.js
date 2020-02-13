/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMovie = /* GraphQL */ `
  mutation CreateMovie(
    $input: CreateMovieInput!
    $condition: ModelMovieConditionInput
  ) {
    createMovie(input: $input, condition: $condition) {
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
export const updateMovie = /* GraphQL */ `
  mutation UpdateMovie(
    $input: UpdateMovieInput!
    $condition: ModelMovieConditionInput
  ) {
    updateMovie(input: $input, condition: $condition) {
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
export const deleteMovie = /* GraphQL */ `
  mutation DeleteMovie(
    $input: DeleteMovieInput!
    $condition: ModelMovieConditionInput
  ) {
    deleteMovie(input: $input, condition: $condition) {
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
export const createCharacter = /* GraphQL */ `
  mutation CreateCharacter(
    $input: CreateCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    createCharacter(input: $input, condition: $condition) {
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
export const updateCharacter = /* GraphQL */ `
  mutation UpdateCharacter(
    $input: UpdateCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    updateCharacter(input: $input, condition: $condition) {
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
export const deleteCharacter = /* GraphQL */ `
  mutation DeleteCharacter(
    $input: DeleteCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    deleteCharacter(input: $input, condition: $condition) {
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
export const createActor = /* GraphQL */ `
  mutation CreateActor(
    $input: CreateActorInput!
    $condition: ModelActorConditionInput
  ) {
    createActor(input: $input, condition: $condition) {
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
export const updateActor = /* GraphQL */ `
  mutation UpdateActor(
    $input: UpdateActorInput!
    $condition: ModelActorConditionInput
  ) {
    updateActor(input: $input, condition: $condition) {
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
export const deleteActor = /* GraphQL */ `
  mutation DeleteActor(
    $input: DeleteActorInput!
    $condition: ModelActorConditionInput
  ) {
    deleteActor(input: $input, condition: $condition) {
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
export const createCrewMember = /* GraphQL */ `
  mutation CreateCrewMember(
    $input: CreateCrewMemberInput!
    $condition: ModelCrewMemberConditionInput
  ) {
    createCrewMember(input: $input, condition: $condition) {
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
export const updateCrewMember = /* GraphQL */ `
  mutation UpdateCrewMember(
    $input: UpdateCrewMemberInput!
    $condition: ModelCrewMemberConditionInput
  ) {
    updateCrewMember(input: $input, condition: $condition) {
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
export const deleteCrewMember = /* GraphQL */ `
  mutation DeleteCrewMember(
    $input: DeleteCrewMemberInput!
    $condition: ModelCrewMemberConditionInput
  ) {
    deleteCrewMember(input: $input, condition: $condition) {
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
export const createRole = /* GraphQL */ `
  mutation CreateRole(
    $input: CreateRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    createRole(input: $input, condition: $condition) {
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
export const updateRole = /* GraphQL */ `
  mutation UpdateRole(
    $input: UpdateRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    updateRole(input: $input, condition: $condition) {
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
export const deleteRole = /* GraphQL */ `
  mutation DeleteRole(
    $input: DeleteRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    deleteRole(input: $input, condition: $condition) {
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
export const createCrewJob = /* GraphQL */ `
  mutation CreateCrewJob(
    $input: CreateCrewJobInput!
    $condition: ModelCrewJobConditionInput
  ) {
    createCrewJob(input: $input, condition: $condition) {
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
export const updateCrewJob = /* GraphQL */ `
  mutation UpdateCrewJob(
    $input: UpdateCrewJobInput!
    $condition: ModelCrewJobConditionInput
  ) {
    updateCrewJob(input: $input, condition: $condition) {
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
export const deleteCrewJob = /* GraphQL */ `
  mutation DeleteCrewJob(
    $input: DeleteCrewJobInput!
    $condition: ModelCrewJobConditionInput
  ) {
    deleteCrewJob(input: $input, condition: $condition) {
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
