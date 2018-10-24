import * as React from 'react';
import styled from 'sc';

import Downshift, { ControllerStateAndHelpers, GetItemPropsOptions } from 'downshift';

import { InputBase, InputWrapper, Label } from '../Input';

import { ListItem, ListItemProps, ListWrapper } from './styles';

const Input = styled(InputBase)``;

export interface AutocompleteProps {}

export interface AutocompleteState {}

const items = [
  { value: 'apple' },
  { value: 'pear' },
  { value: 'orange' },
  { value: 'grape' },
  { value: 'banana' },
];

type ItemWithExtraProps = GetItemPropsOptions<ListItemProps>;

export default class Autocomplete extends React.Component<
  AutocompleteProps,
  AutocompleteState
> {
  constructor(props: AutocompleteProps) {
    super(props);

    this.state = {};
  }

  private handleOnchange = (selection: unknown) => {
    console.log('You selected', selection);
  }

  public render() {
    return (
      <Downshift onChange={this.handleOnchange} itemToString={item => item.value}>
        {({
          getRootProps,
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem,
        }: ControllerStateAndHelpers<ListItemProps>) => (
          <InputWrapper
            {...getRootProps({
              refKey: 'innerRef',
            })}
          >
            <Label {...getLabelProps()}>Enter a fruit</Label>
            <Input {...getInputProps()} />
            <ListWrapper {...getMenuProps()}>
              {isOpen
                ? items
                    .filter(item => !inputValue || item.value.includes(inputValue))
                    .map((item, index) => (
                      <ListItem
                        {...getItemProps({
                          index,
                          isActive: index === highlightedIndex,
                          item,
                          key: item.value,
                          //   style: {
                          //     backgroundColor:
                          //       highlightedIndex === index ? 'lightgray' : undefined,
                          //     fontWeight: selectedItem === item ? 'bold' : 'normal',
                          //   },
                        } as any)}
                      >
                        {item.value}
                      </ListItem>
                    ))
                : null}
            </ListWrapper>
          </InputWrapper>
        )}
      </Downshift>
    );
  }
}
