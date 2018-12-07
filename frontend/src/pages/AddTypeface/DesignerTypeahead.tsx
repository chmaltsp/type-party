import * as React from 'react';

import { Field, FieldProps } from 'formik';
import { ChildProps, graphql } from 'react-apollo';

import Autocomplete from '../../components/Autocomplete';
import { FindDesigner, FindDesignerVariables } from './__generated__/FindDesigner';
import { InputValues } from './Form';
import { SEARCH_DESIGNER } from './queries';

export class DesignerTypeahead extends React.PureComponent<
  ChildProps<{}, FindDesigner, FindDesignerVariables>,
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
    console.log(this.props);
    return (
      <Field
        name="designers"
        render={(fieldProps: FieldProps<InputValues>) => {
          return (
            <Autocomplete<{ name?: string; id: string; value: string }>
              items={
                (this.props.data &&
                  this.props.data.findDesigners &&
                  this.props.data.findDesigners.map(designer => ({
                    ...designer,
                    value: designer.name,
                  }))) ||
                []
              }
              value={fieldProps.field.value}
              label="Designer(s)"
              handleSearch={this.handleSearch}
              handleOnChange={selection =>
                fieldProps.form.setFieldValue('designers', selection)
              }
              itemToString={item => (item && item.name) || ''}
            />
          );
        }}
      />
    );
  }
}

export default graphql<any, FindDesigner, FindDesignerVariables>(SEARCH_DESIGNER, {
  options: {
    variables: {
      search: '',
    },
  },
})(DesignerTypeahead);
