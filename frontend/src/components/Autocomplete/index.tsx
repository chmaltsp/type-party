import * as React from 'react';
import styled from 'sc';

import { ControllerStateAndHelpers, GetItemPropsOptions } from 'downshift';

import { InputBase, InputWrapper as AutoCompleteWrapper, Label } from '../Input';

import Flex from '../Flex';
import Tag from '../Tag';
import MultiDownshift from './MultiDownshift';
import { ListItem, ListItemProps, ListWrapper } from './styles';

const Input = styled.input`
  flex: 1;
`;

const InputWrapper = styled(Flex)`
  border: 1px solid ${({ theme }) => theme.colors.greyCCC};
  border-radius: ${({ theme }) => theme.borderRadius};
  flex-wrap: wrap;
`;

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

interface MultiDownshiftProps {
  removeItem: any;
  getRemoveButtonProps: any;
  selectedItems: any;
}
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

  private handleOnInputEnter = (event: React.KeyboardEvent) => {
    // Callback on Enter only to add to list etc...
    console.log('KEYPRESS', event.which);
    if (event.which === 13) {
      console.log('ON ENTER', event.which);
      event.preventDefault();
    }
  }

  public render() {
    return (
      <MultiDownshift
        onChange={this.handleOnchange}
        itemToString={(item: any) => (item ? item.value : '')}
      >
        {({
          getRootProps,
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          getRemoveButtonProps,
          removeItem,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItems,
        }: ControllerStateAndHelpers<ListItemProps> & MultiDownshiftProps) => (
          <AutoCompleteWrapper
            {...getRootProps({
              refKey: 'innerRef',
            })}
          >
            <Label {...getLabelProps()}>Enter a fruit</Label>
            <InputWrapper>
              {selectedItems.map((selectedItem: ListItemProps, index: number) => (
                <Tag
                  name={selectedItem.value}
                  removeButtonProps={getRemoveButtonProps({ item: selectedItem })}
                />
              ))}
              <Input
                {...getInputProps({
                  onKeyDown: this.handleOnInputEnter,
                })}
              />
            </InputWrapper>
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
          </AutoCompleteWrapper>
        )}
      </MultiDownshift>
    );
  }
}
