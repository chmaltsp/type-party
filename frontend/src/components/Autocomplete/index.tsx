import * as React from 'react';
import styled from 'sc';

import {
  ControllerStateAndHelpers,
  GetItemPropsOptions,
  StateChangeOptions,
  StateChangeTypes,
} from 'downshift';

import { InputBase, InputWrapper as AutoCompleteWrapper, Label } from '../Input';

import Flex from '../Flex';
import Tag from '../Tag';
import MultiDownshift, { RemoveButtonProps } from './MultiDownshift';
import { ListItem, ListItemProps, ListWrapper, TagSpacer } from './styles';

const Input = styled.input`
  flex: 1;
  border: none;
  &:focus {
    outline: none;
  }
`;

const InputWrapper = styled(Flex)`
  border: 1px solid ${({ theme }) => theme.colors.greyCCC};
  border-radius: ${({ theme }) => theme.borderRadius};
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.spacing.sm}px;
`;

interface ItemDefault {
  value: string;
}

export interface AutocompleteProps<Item> {
  label?: string;
  placeholder?: string;
  items: Item[];
  itemToString: (item: Item) => string;
  handleOnChange: (selection: Item[]) => void;
  handleSearch?: (search: string | null) => void;
  value: Item[];
}

interface MultiDownshiftProps {
  removeItem: any;
  getRemoveButtonProps: (item: any) => RemoveButtonProps;
  selectedItems: any;
}

type EqualByStringUtil = <T = {}>(
  itemA: T,
  itemB: T,
  itemToString: (item: T) => string
) => boolean;
export const equalByString: EqualByStringUtil = (itemA, itemB, itemToString) =>
  itemToString(itemA) === itemToString(itemB);
export default class Autocomplete<Item extends ItemDefault> extends React.Component<
  AutocompleteProps<Item>
> {
  constructor(props: AutocompleteProps<Item>) {
    super(props);

    this.state = {};
  }

  private handleOnchange = (selection: any) => {
    console.log('You selected', selection);
    this.props.handleOnChange(selection);
  }

  private handleOnInputEnter = (event: React.KeyboardEvent) => {
    // Callback on Enter only to add to list etc...
    if (event.which === 13) {
      console.log('ON ENTER', event.which);
      event.preventDefault();
    }
  }

  private onStateChange = (changes: StateChangeTypes, stateAndHelpers: any) => {
    console.log('CHANGES', changes, stateAndHelpers);
  }

  public render() {
    return (
      <MultiDownshift
        onChange={this.handleOnchange}
        itemToString={this.props.itemToString}
        selectedItem={this.props.value || []}
        onStateChange={this.onStateChange}
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
          selectedItem,
        }: ControllerStateAndHelpers<ListItemProps[]> & MultiDownshiftProps) => (
          <AutoCompleteWrapper
            {...getRootProps({
              refKey: 'innerRef',
            })}
          >
            <Label {...getLabelProps()}>{this.props.label}</Label>
            <InputWrapper>
              {(selectedItem as any).map((item: ListItemProps, index: number) => (
                <TagSpacer key={index}>
                  <Tag
                    name={item.value}
                    removeButtonProps={getRemoveButtonProps({ item })}
                    // removeButtonProps={getRemoveButtonProps({ item })}
                  />
                </TagSpacer>
              ))}
              <Input
                {...getInputProps({
                  onKeyDown: this.handleOnInputEnter,
                  onKeyUp: event => {
                    const currentSelection = selectedItem || [];
                    if (event.key === 'Backspace' && !inputValue) {
                      removeItem(currentSelection[currentSelection.length - 1]);
                    }
                    if (this.props.handleSearch) {
                      this.props.handleSearch(inputValue);
                    }
                  },
                })}
              />
            </InputWrapper>
            <ListWrapper {...getMenuProps()}>
              {isOpen
                ? this.props.items
                    .filter(
                      item =>
                        !inputValue ||
                        item.value.toLowerCase().includes(inputValue.toLowerCase())
                    )
                    .map((item, index) => (
                      <ListItem
                        {...getItemProps({
                          index,
                          isActive: index === highlightedIndex,
                          isSelected: (selectedItem as any).find((otherItem: any) =>
                            equalByString<Item>(otherItem, item, this.props.itemToString)
                          ),
                          item,
                          key: item.value,
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
