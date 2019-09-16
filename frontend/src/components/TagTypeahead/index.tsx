import * as React from 'react';

import { Field, FieldProps } from 'formik';
import { ChildProps, graphql } from 'react-apollo';

import Autocomplete from '../../components/Autocomplete';

import { FindTag, FindTag_findTags, FindTagVariables } from './__generated__/FindTag';
import { SEARCH_TAG } from './queries';

export class TagTypeahead<InputValues> extends React.PureComponent<
  ChildProps<{}, FindTag, FindTagVariables>,
  any
> {
  public handleSearch = async (search: string | null) => {
    if (this.props.data) {
      await this.props.data.refetch({
        search: search || '',
      });
    }
  };
  public render() {
    return (
      <Field
        name="tags"
        render={(fieldProps: FieldProps<InputValues>) => {
          console.log(fieldProps);
          return (
            <Autocomplete<FindTag_findTags>
              items={(this.props.data && this.props.data.findTags) || []}
              value={fieldProps.field.value}
              label="Tags(s)"
              handleSearch={this.handleSearch}
              handleOnChange={selection =>
                fieldProps.form.setFieldValue('tags', selection)
              }
              itemToString={item => (item && item.name) || ''}
            />
          );
        }}
      />
    );
  }
}

export default graphql<any, FindTag, FindTagVariables>(SEARCH_TAG, {
  options: {
    variables: {
      search: '',
    },
  },
})(TagTypeahead);
