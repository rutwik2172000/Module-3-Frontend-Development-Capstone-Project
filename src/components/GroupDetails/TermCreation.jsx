/* eslint-disable react/prop-types */
import { FieldArray } from "formik";
import InputFieldCreation from "./InputFieldCreation";
import Button from "./Button";
import { AiFillFileImage } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { TbTrashX } from "react-icons/tb";
import Resizer from "react-image-file-resizer";
const TermCreation = ({ values, setFieldValue }) => {
  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        300,
        300,
        "PNG",
        50,
        0,
        (uri) => {
          resolve(uri);
        },
        "blob",
      );
    });
  return (
    <div>
      <FieldArray
        name="TermsData"
        render={(fieldArrayProps) => (
          <ul className="flex flex-col  gap-8 rounded-md bg-white p-5 shadow-md sm:p-5 md:p-10 ">
            {/* Using map to multiple Ui forms for the given add more option */}
            {values.TermsData.map((item, index) => (
              <li
                key={index}
                className="flex flex-col items-center gap-14 sm:w-full sm:flex-col md:flex-row"
              >
                <span className="translate-y-[30%] rounded-full bg-red-200 px-4 py-2 text-xl font-bold">
                  {index + 1}
                </span>
                <div className="flex w-full flex-col flex-wrap items-start  gap-14 sm:flex-col md:flex-row  lg:items-center">
                  {/* this is child component from where UI is fetched */}
                  <InputFieldCreation
                    name={`TermsData.${index}.term`}
                    htmlFor={`term${index}`}
                    label={"Enter Term"}
                    id={`term${index}`}
                    placeholder={"Enter the term"}
                  />

                  <InputFieldCreation
                    name={`TermsData.${index}.definition`}
                    htmlFor={`definition${index}`}
                    label={"Enter Definition"}
                    id={`defination${index}`}
                    placeholder={"Enter the definition"}
                  />
                  {!item.image && (
                    <div className="lg:translate-y-1/4">
                      <Button
                        type={"button"}
                        btnclass={
                          "border-2 rounded-md  min-w-max font-semibold text-lg px-6 py-2"
                        }
                        text={
                          <>
                            <label
                              htmlFor={`cardImage-${index}`}
                              className="flex cursor-pointer items-center"
                            >
                              <AiFillFileImage className="text-blue-700 " />
                              Upload Image
                              <input
                                type="file"
                                id={`cardImage-${index}`}
                                hidden
                                accept="image/*"
                                onChange={async (e) => {
                                  const file = e.target.files[0];
                                  const resizedImage = await resizeFile(file);
                                  const reader = new FileReader();
                                  reader.readAsDataURL(resizedImage);
                                  reader.onload = () => {
                                    const imageUrl = reader.result;
                                    fieldArrayProps.replace(index, {
                                      ...item,
                                      image: imageUrl,
                                    });
                                  };
                                }}
                              />
                            </label>
                          </>
                        }
                      />
                    </div>
                  )}
                  {item.image && (
                    <div className="flex items-center gap-5">
                      <div>
                        <img
                          className="aspect-square w-20 rounded-md"
                          src={item.image}
                          alt="term_image"
                          loading="lazy"
                        />
                      </div>

                      {
                        <div className="flex flex-col gap-5">
                          <Button
                            type={"button"}
                            text={
                              <TbTrashX className="text-3xl text-red-500 " />
                            }
                            fn={() =>
                              setFieldValue(`TermsData.${index}.image`, "")
                            }
                          />

                          <Button
                            type={"button"}
                            text={
                              <label
                                htmlFor={`cardImage-${index}`}
                                className="flex cursor-pointer items-center"
                              >
                                <BiEdit className="cursor-pointer text-3xl text-blue-700" />
                                <input
                                  type="file"
                                  id={`cardImage-${index}`}
                                  hidden
                                  accept="image/*"
                                  onChange={async (e) => {
                                    console.log("hello");
                                    const file = e.target.files[0];
                                    const reader = new FileReader();
                                    const resizedImage = await resizeFile(file);
                                    reader.readAsDataURL(resizedImage);

                                    reader.onload = () => {
                                      const imageUrl = reader.result;
                                      fieldArrayProps.replace(index, {
                                        ...item,
                                        image: imageUrl,
                                      });
                                    };
                                  }}
                                />
                              </label>
                            }
                          />
                        </div>
                      }
                    </div>
                  )}
                  {index !== 0 && (
                    <div>
                      <Button
                        type="button"
                        btnclass={"font-semibold text-blue-700 mt-5"}
                        fn={() => fieldArrayProps.remove(index)}
                        text={"- Remove"}
                        list
                      />
                    </div>
                  )}
                </div>
              </li>
            ))}

            <li className="text-center md:text-left">
              <Button
                type="button"
                fn={() =>
                  fieldArrayProps.push({ term: "", definition: "", image: "" })
                }
                btnclass={"font-semibold text-blue-700 mt-5"}
                text={"+ Add more"}
              />
            </li>
          </ul>
        )}
      ></FieldArray>
    </div>
  );
};

export default TermCreation;
