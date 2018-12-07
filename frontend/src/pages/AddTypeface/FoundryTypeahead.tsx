import * as React from 'react';

import { Field, FieldProps } from 'formik';
import { ChildProps, graphql } from 'react-apollo';

import Autocomplete from '../../components/Autocomplete';
import { FindFoundry, FindFoundryVariables } from './__generated__/FindFoundry';
import { InputValues } from './Form';
import { SEARCH_FOUNDRY } from './queries';

export class FoundryTypeahead extends React.PureComponent<
  ChildProps<{}, FindFoundry, FindFoundryVariables>,
  any
> {
  public handleSearch = async (search: string | null) => {
    if (this.props.data) {
      await this.props.data.refetch({
        search: search || '',
      });
    }
  }
  public render() {
    return (
      <Field
        name="foundries"
        render={(fieldProps: FieldProps<InputValues>) => {
          return (
            <Autocomplete<{ name: string; value: string }>
              items={
                (this.props.data &&
                  this.props.data.findFoundries &&
                  this.props.data.findFoundries.map(foundry => ({
                    ...foundry,
                    value: foundry.name,
                  }))) ||
                []
              }
              value={fieldProps.field.value}
              label="Foundries(s)"
              handleSearch={this.handleSearch}
              handleOnChange={selection =>
                fieldProps.form.setFieldValue('foundries', selection)
              }
              itemToString={item => (item && item.name) || ''}
            />
          );
        }}
      />
    );
  }
}

export default graphql<any, FindFoundry, FindFoundryVariables>(SEARCH_FOUNDRY, {
  options: {
    variables: {
      search: '',
    },
  },
})(FoundryTypeahead);
