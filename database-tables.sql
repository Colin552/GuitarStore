

CREATE TABLE brand (
    id UUID NOT NULL,
    brand_name varchar(255) NOT NULL,
    PRIMARY KEY (id) 
);

CREATE TABLE product (
    id UUID NOT NULL,
    product_name varchar(255) NOT NULL,
    price decimal(8,2) NOT NULL,
    brand_id UUID NOT NULL,
    listed boolean NOT NULL,
    description text,
    PRIMARY KEY (id),
    FOREIGN KEY (brand_id) REFERENCES brand(id)
);

CREATE TABLE product_image (
    id UUID NOT NULL,
    product_id UUID NOT NULL,
	picture_name text NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES product(id)
);

CREATE TABLE category (
    id UUID NOT NULL,
    category_name varchar(255) NOT NULL,
    parent_id UUID,
    PRIMARY KEY (id),
    FOREIGN KEY (parent_id) REFERENCES category(id)
);

CREATE TABLE product_category (
    category_id UUID NOT NULL,
    product_id UUID NOT NULL,
    PRIMARY KEY (category_id, product_id),
    FOREIGN KEY (category_id) REFERENCES category(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
);

CREATE TABLE user_account (
    id UUID NOT NULL,
    first_name varchar(50),
    last_name varchar(50),
    password varchar(128) NOT NULL,
    user_type CHAR NOT NULL,
    email varchar(128) UNIQUE NOT NULL,
    billing_address text,
    shipping_address text,
    PRIMARY KEY (id)
);

CREATE TABLE user_order (
    id UUID NOT NULL,
    user_id UUID NOT NULL,
    order_date TIMESTAMP,
    recieved_date TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user_account(id),
    PRIMARY KEY (id)
);

CREATE TABLE order_product (
    product_id UUID NOT NULL,
    order_id UUID NOT NULL,
    quantity int NOT NULL,
    price decimal(8,2) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES product(id),
    FOREIGN KEY (order_id) REFERENCES user_order(id),
    PRIMARY KEY (product_id, order_id)
);

CREATE TABLE cart_product (
    user_id UUID NOT NULL,
    product_id UUID NOT NULL,
    quantity int NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user_account(id),
    FOREIGN KEY (product_id) REFERENCES product(id),
    PRIMARY KEY (user_id, product_id)
);

CREATE TABLE sale (
    id UUID NOT NULL,
    product_id UUID NOT NULL,
    regular_price decimal(8,2) NOT NULL,
    new_price decimal(8,2) NOT NULL,
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP
);