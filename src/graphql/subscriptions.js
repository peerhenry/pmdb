/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRole = /* GraphQL */ `
  subscription OnCreateRole {
    onCreateRole {
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
export const onUpdateRole = /* GraphQL */ `
  subscription OnUpdateRole {
    onUpdateRole {
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
export const onDeleteRole = /* GraphQL */ `
  subscription OnDeleteRole {
    onDeleteRole {
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
export const onCreateCrewJob = /* GraphQL */ `
  subscription OnCreateCrewJob {
    onCreateCrewJob {
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
export const onUpdateCrewJob = /* GraphQL */ `
  subscription OnUpdateCrewJob {
    onUpdateCrewJob {
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
export const onDeleteCrewJob = /* GraphQL */ `
  subscription OnDeleteCrewJob {
    onDeleteCrewJob {
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
