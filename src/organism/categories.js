import React from "react";
import { ListItem, ListHeader, List } from "semantic-ui-react";
const CategoryList = ({ categories, onCategoryClick }) => (
  <div style={{ borderTop: "1px solid #eee", paddingTop: 16 }}>
    <List>
      {categories?.map((category) => (
        <ListItem
          key={category.id}
          onClick={() => onCategoryClick(category.id)}
        >
          <ListHeader> {category.name}</ListHeader>
        </ListItem>
      ))}
    </List>
  </div>
);

export default CategoryList;
