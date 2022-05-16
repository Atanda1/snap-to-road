import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

const ALL_FIELDS = gql`
  query AllFields {
    projectedPoints {
        type,
        geometry {
            type,
            coordinates
        }
        ,
        properties {
            routeIndex
        }
    }
    ,
    route {
        type,
        geometry {
            type,
            coordinates
        }
        ,
        properties {
            id,
            speedRestrictions {
                maximumSpeed {
                    value,
                    unit
                }
            }
        }
    }
}
`;

function TheFields() {
  //const initialCount = 0;
  const fields = useQuery(ALL_FIELDS);

    const fieldDetails = () => {
      console.log(fields);
    };

  return (
    <div>
      <div onClick={fieldDetails}>Click me</div>
    </div>
  );
}

export default TheFields;
