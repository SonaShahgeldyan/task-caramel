import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchData,
  updateCurrentPage,
} from "../../store/slices/websites/WebsiteSlice";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Pagination,
  useDisclosure,
} from "@nextui-org/react";
import WebsitesTable from "../../components/websiteTable";
import Input from "../../components/Input";
import { Field, Form, Formik } from "formik";
import InputField from "../../components/Input";
import { createWebsite } from "../../services/website.service";
import { websiteInitialValues } from "../../constants/websitesValues.constants";
import { IWebsiteData } from "../../types/websites.type";

function Websites(): JSX.Element {
  const websitesData = useSelector(
    (state: RootState) => state.websites.fetchedData
  );
  const loading = useSelector((state: RootState) => state.websites.loading);
  const error = useSelector((state: RootState) => state.websites.error);
  const currentPage = useSelector(
    (state: RootState) => state.websites.currentPage
  );
  const [page, setCurrentPage] = useState(1);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  console.log("currentPage", currentPage);
  const dispatch = useDispatch<AppDispatch>();

  console.log("data", websitesData);

  useEffect(() => {
    dispatch(fetchData(currentPage));
  }, [dispatch, currentPage]);

  const handleChange = (page: number) => {
    setCurrentPage(page);
    dispatch(updateCurrentPage(page));
  };

  const handleSubmit = async (data: IWebsiteData) => {
    return await createWebsite(data);
  };
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : websitesData ? (
        <>
          <WebsitesTable data={websitesData} />
          <Pagination total={5} initialPage={page} onChange={handleChange} />
          <Button onPress={onOpen} color="primary">
            Add website
          </Button>
          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="top-center"
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Website
                  </ModalHeader>
                  <ModalBody>
                    <Formik
                      onSubmit={handleSubmit}
                      initialValues={websiteInitialValues}
                      enableReinitialize
                    >
                      {(props) => (
                        <Form name="filters-1">
                          <Field
                            name="domain"
                            label="Domain"
                            variant="bordered"
                            placeholder="Enter Domain"
                            className="max-w-xs"
                            component={InputField}
                          />

                          <div>
                            <Button color="primary" type="submit">
                              Add
                            </Button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>
        </>
      ) : null}
    </div>
  );
}
export default Websites;
