/* Categories */
INSERT INTO category (id, category_name)
VALUES ('e3b02e86-0d2b-4757-ba41-bc5c27126d74' , 'Guitars');

INSERT INTO category (id, category_name, parent_id)
VALUES ('7d705cfe-4bff-414d-b451-6f873d35df82', 'Electric Guitars', 'e3b02e86-0d2b-4757-ba41-bc5c27126d74');
INSERT INTO category (id, category_name, parent_id)
VALUES ('aa879dbd-52be-461a-8d8d-7b1060db10ac', '6 String', '7d705cfe-4bff-414d-b451-6f873d35df82');
INSERT INTO category (id, category_name, parent_id)
VALUES ('583faba1-de9b-4818-a622-17e9e7e7528f', '7 String', '7d705cfe-4bff-414d-b451-6f873d35df82');
INSERT INTO category (id, category_name, parent_id)
VALUES ('ed4f6d5d-b590-4222-8820-9d77b2cc5b97', '12 String', '7d705cfe-4bff-414d-b451-6f873d35df82');
INSERT INTO category (id, category_name, parent_id)
VALUES ('35758bc8-8cba-462a-b7cd-223435a1cadb', 'Baritone', '7d705cfe-4bff-414d-b451-6f873d35df82');
INSERT INTO category (id, category_name, parent_id)
VALUES ('249ab291-7bf2-439a-8dcb-01bb6a13f442', 'Extended Range', '7d705cfe-4bff-414d-b451-6f873d35df82');
INSERT INTO category (id, category_name, parent_id)
VALUES ('c2dbe1c0-140a-11ea-aaef-0800200c9a66', 'Acoustic Electric Hybrid', '7d705cfe-4bff-414d-b451-6f873d35df82');
INSERT INTO category (id, category_name, parent_id)
VALUES ('1c98be56-a2be-49a8-81fe-cda09c39e2f6', 'Guitar Packages', '7d705cfe-4bff-414d-b451-6f873d35df82');
INSERT INTO category (id, category_name, parent_id)
VALUES ('0adbe04f-12b0-44f0-adff-4bfc5a5b791f', 'Hollow Body', '7d705cfe-4bff-414d-b451-6f873d35df82');

INSERT INTO category (id, category_name, parent_id)
VALUES ('61d58012-ce72-4aab-ae50-545a035a3c64', 'Acoustic Guitars', 'e3b02e86-0d2b-4757-ba41-bc5c27126d74');
INSERT INTO category (id, category_name, parent_id)
VALUES ('ec50b607-13c6-4448-89f0-264ce2cb72c7', 'Classical', '61d58012-ce72-4aab-ae50-545a035a3c64');
INSERT INTO category (id, category_name, parent_id)
VALUES ('b9841ee9-4416-4638-8e91-f2fcb5eb73fe', 'Steel String', '61d58012-ce72-4aab-ae50-545a035a3c64');
INSERT INTO category (id, category_name, parent_id)
VALUES ('9e46aa18-a536-4005-98d3-bf9bc7c6d8cf', 'Dreadnought', '61d58012-ce72-4aab-ae50-545a035a3c64');
INSERT INTO category (id, category_name, parent_id)
VALUES ('843a0de2-70b4-4f25-ac21-6ee71f7f4be5', 'Jumbo', '61d58012-ce72-4aab-ae50-545a035a3c64');
INSERT INTO category (id, category_name, parent_id)
VALUES ('00aca361-d81c-485d-8856-006b535f467c', '12 String', '61d58012-ce72-4aab-ae50-545a035a3c64');
INSERT INTO category (id, category_name, parent_id)
VALUES ('be3500e0-1408-11ea-aaef-0800200c9a66', 'Acoustic Electric', '61d58012-ce72-4aab-ae50-545a035a3c64');

INSERT INTO category (id, category_name)
VALUES ('c4931990-1408-11ea-aaef-0800200c9a66', 'Amplifiers');

INSERT INTO category (id, category_name, parent_id)
VALUES ('ca6dd170-1408-11ea-aaef-0800200c9a66', 'Guitar Amplifiers', 'c4931990-1408-11ea-aaef-0800200c9a66');
INSERT INTO category (id, category_name, parent_id)
VALUES ('d0f459b0-1408-11ea-aaef-0800200c9a66', 'Tube', 'c4931990-1408-11ea-aaef-0800200c9a66');
INSERT INTO category (id, category_name, parent_id)
VALUES ('d5d5e480-1408-11ea-aaef-0800200c9a66', 'Solid State', 'c4931990-1408-11ea-aaef-0800200c9a66');
INSERT INTO category (id, category_name, parent_id)
VALUES ('db3f3cf0-1408-11ea-aaef-0800200c9a66', 'Heads', 'c4931990-1408-11ea-aaef-0800200c9a66');
INSERT INTO category (id, category_name, parent_id)
VALUES ('dff5c020-1408-11ea-aaef-0800200c9a66', 'Cabinets', 'c4931990-1408-11ea-aaef-0800200c9a66');

INSERT INTO category (id, category_name, parent_id)
VALUES ('e47b6f50-1408-11ea-aaef-0800200c9a66', 'Bass Amplifiers', 'c4931990-1408-11ea-aaef-0800200c9a66');
INSERT INTO category (id, category_name, parent_id)
VALUES ('e93a08d0-1408-11ea-aaef-0800200c9a66', 'Combos', 'e47b6f50-1408-11ea-aaef-0800200c9a66');
INSERT INTO category (id, category_name, parent_id)
VALUES ('ee26b730-1408-11ea-aaef-0800200c9a66', 'Heads', 'e47b6f50-1408-11ea-aaef-0800200c9a66');
INSERT INTO category (id, category_name, parent_id)
VALUES ('f2cf7ec0-1408-11ea-aaef-0800200c9a66', 'Cabinets', 'e47b6f50-1408-11ea-aaef-0800200c9a66');

INSERT INTO category (id, category_name, parent_id)
VALUES ('f8a70250-1408-11ea-aaef-0800200c9a66', 'Bass Guitars', 'e3b02e86-0d2b-4757-ba41-bc5c27126d74');

INSERT INTO category (id, category_name, parent_id)
VALUES ('fda081f0-1408-11ea-aaef-0800200c9a66', 'Electric Bass Guitars', 'f8a70250-1408-11ea-aaef-0800200c9a66');
INSERT INTO category (id, category_name, parent_id)
VALUES ('036d3010-1409-11ea-aaef-0800200c9a66', 'Acoustic Bass Guitars', 'f8a70250-1408-11ea-aaef-0800200c9a66');

/* Brands */
INSERT INTO brand (id, brand_name)
VALUES ('085f35a0-1409-11ea-aaef-0800200c9a66', 'Fender');
INSERT INTO brand (id, brand_name)
VALUES ('0d952200-1409-11ea-aaef-0800200c9a66', 'Gibson');

/* Products and Categories */
INSERT INTO product (id, product_name, price, brand_id, listed, description)
VALUES ('31768c70-140b-11ea-aaef-0800200c9a66', 'Stratocaster', 699.98, '085f35a0-1409-11ea-aaef-0800200c9a66', true, 'Description Text');
INSERT INTO product_category (category_id, product_id)
VALUES ('7d705cfe-4bff-414d-b451-6f873d35df82', '31768c70-140b-11ea-aaef-0800200c9a66');
INSERT INTO product_category (category_id, product_id)
VALUES ('aa879dbd-52be-461a-8d8d-7b1060db10ac', '31768c70-140b-11ea-aaef-0800200c9a66');
INSERT INTO product_category (category_id, product_id)
VALUES ('e3b02e86-0d2b-4757-ba41-bc5c27126d74', '31768c70-140b-11ea-aaef-0800200c9a66');

INSERT INTO product (id, product_name, price, brand_id, listed, description)
VALUES ('22ff4f80-1409-11ea-aaef-0800200c9a66', 'Telecaster', 699.98, '085f35a0-1409-11ea-aaef-0800200c9a66', true, 'Description Text');
INSERT INTO product_category (category_id, product_id)
VALUES ('7d705cfe-4bff-414d-b451-6f873d35df82', '22ff4f80-1409-11ea-aaef-0800200c9a66');
INSERT INTO product_category (category_id, product_id)
VALUES ('aa879dbd-52be-461a-8d8d-7b1060db10ac', '22ff4f80-1409-11ea-aaef-0800200c9a66');
INSERT INTO product_category (category_id, product_id)
VALUES ('e3b02e86-0d2b-4757-ba41-bc5c27126d74', '22ff4f80-1409-11ea-aaef-0800200c9a66');

INSERT INTO product (id, product_name, price, brand_id, listed, description)
VALUES ('36403460-1409-11ea-aaef-0800200c9a66', 'Les Paul', 1399.98, '0d952200-1409-11ea-aaef-0800200c9a66', true, 'Description Text');
INSERT INTO product_category (category_id, product_id)
VALUES ('7d705cfe-4bff-414d-b451-6f873d35df82', '36403460-1409-11ea-aaef-0800200c9a66');
INSERT INTO product_category (category_id, product_id)
VALUES ('aa879dbd-52be-461a-8d8d-7b1060db10ac', '36403460-1409-11ea-aaef-0800200c9a66');
INSERT INTO product_category (category_id, product_id)
VALUES ('e3b02e86-0d2b-4757-ba41-bc5c27126d74', '36403460-1409-11ea-aaef-0800200c9a66');

INSERT INTO product (id, product_name, price, brand_id, listed, description)
VALUES ('4be0b420-1409-11ea-aaef-0800200c9a66', 'AC3518ANNH', 2599.00, '0d952200-1409-11ea-aaef-0800200c9a66', true, 'Description Text');
INSERT INTO product_category (category_id, product_id)
VALUES ('e3b02e86-0d2b-4757-ba41-bc5c27126d74', '4be0b420-1409-11ea-aaef-0800200c9a66');
INSERT INTO product_category (category_id, product_id)
VALUES ('61d58012-ce72-4aab-ae50-545a035a3c64', '4be0b420-1409-11ea-aaef-0800200c9a66');
INSERT INTO product_category (category_id, product_id)
VALUES ('b9841ee9-4416-4638-8e91-f2fcb5eb73fe', '4be0b420-1409-11ea-aaef-0800200c9a66');

INSERT INTO user_account (id, first_name, last_name, password, user_type, email)
VALUES ('6b10b660-1409-11ea-aaef-0800200c9a66', 'Colin', 'strong', 'password', 'a', 'colin@email.com');