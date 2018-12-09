import * as React from 'react';

import { Field, FieldProps } from 'formik';
import { ChildProps, graphql } from 'react-apollo';

import Autocomplete from '../../components/Autocomplete';
import {
  FindTypeface,
  FindTypeface_findTypefaces,
  FindTypefaceVariables,
} from './__generated__/FindTypeface';
import { InputValues } from './Form';
import { SEARCH_TYPEFACE } from './queries';

export class TypefaceTypeahead extends React.PureComponent<
  ChildProps<{}, FindTypeface, FindTypefaceVariables>,
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
        name="typefaces"
        render={(fieldProps: FieldProps<InputValues>) => {
          return (
            <Autocomplete<FindTypeface_findTypefaces>
              items={(this.props.data && this.props.data.findTypefaces) || []}
              value={fieldProps.field.value}
              label="Typeface(s)"
              handleSearch={this.handleSearch}
              handleOnChange={selection =>
                fieldProps.form.setFieldValue('typefaces', selection)
              }
              itemToString={item => (item && item.name) || ''}
            />
          );
        }}
      />
    );
  }
}

export default graphql<any, FindTypeface, FindTypefaceVariables>(SEARCH_TYPEFACE, {
  options: {
    variables: {
      search: '',
    },
  },
})(TypefaceTypeahead);
