/* eslint-disable react/prop-types */
import InputFieldCreation from "./InputFieldCreation";
import { ErrorMessage, Field } from "formik";
import { AiFillFileImage } from "react-icons/ai";
import Button from "./Button";
import Resizer from "react-image-file-resizer";

const GroupCreation = ({ values, setFieldValue }) => {
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
    <div className="rounded-md bg-white p-5 shadow-md sm:p-5 md:p-10">
      <div
        className={`mb-5 flex flex-col  flex-wrap items-start gap-14 sm:flex-row lg:items-center`}
      >
        {/* Enter group input */}
        <InputFieldCreation
          name={`GroupData.group`}
          id={"group"}
          htmlFor={"group"}
          label={"Create Group"}
          placeholder={"Enter Group"}
        />

        <div className="md:translate-y-1/2 lg:translate-y-1/4">
          {/* Button for uploading Group image */}
          <Button
            type={"button"}
            btnclass={
              "border-2 rounded-md mb-2 min-w-max font-semibold text-lg px-6 py-2"
            }
            text={
              <>
                <label
                  htmlFor="grpimage"
                  className="flex cursor-pointer items-center gap-2"
                >
                  <AiFillFileImage className="text-blue-700" />
                  {values.GroupData.grpimage ? "Change" : "Upload"} Image
                  <Field
                    type="file"
                    id="grpimage"
                    name={`GroupData.grpimage`}
                    hidden
                    value=""
                    accept="image/*"
                    onChange={async (e) => {
                      const file = e.target.files[0];
                      const resizedImage = await resizeFile(file);
                      const reader = new FileReader();
                      reader.readAsDataURL(resizedImage);
                      reader.onload = () => {
                        setFieldValue("GroupData.grpimage", reader.result);
                      };
                    }}
                  />
                </label>
              </>
            }
          />
        </div>

        {values.GroupData.grpimage && (
          <>
            <div className="flex items-center gap-5">
              <img
                className="aspect-square w-20 rounded-md"
                src={values.GroupData.grpimage}
                alt="card_profile"
                loading="lazy"
              />

              <Button
                type="button"
                btnclass={"font-semibold text-blue-700 mt-5"}
                fn={() => setFieldValue("GroupData.grpimage", null)}
                text={"- Remove"}
                list
              />
            </div>
          </>
        )}
      </div>
      {/* Group description */}
      <div className="relative flex flex-col gap-2 sm:mt-14">
        <label htmlFor="groupdesc" className="font-semibold text-gray-500">
          Add Description
        </label>

        <Field
          as="textarea"
          name={`GroupData.groupdesc`}
          id="groupdesc"
          maxLength="500"
          placeholder="Write your description here ( Max length is 60 Characters )"
          className=" relative mb-16 h-36 resize-none rounded-md border-2 p-2 sm:mb-8 md:mb-4"
        />
        <ErrorMessage
          name="GroupData.groupdesc"
          component="span"
          className="absolute bottom-[-1rem] left-0 text-red-600 sm:bottom-[-0.2rem] md:bottom-[-1rem] "
        />
      </div>
    </div>
  );
};

export default GroupCreation;
