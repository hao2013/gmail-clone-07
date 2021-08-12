import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { useForm } from "react-hook-form";
import { closeSendMessage } from "./features/mailSlice";
import { useDispatch } from "react-redux";
import firebase from "firebase";
import { db } from "./firebase";

function SendMail() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => {
    console.log(formData);

    //  firebaseのデータベースに保存
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // 送信ボタンを押すとメールボックスが閉じる;
    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>新規メッセージ</h3>
        <CloseIcon
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="宛先"
          {...register("to", { required: true })}
        />
        {errors.to && (
          <p className="sendMail__error">宛先を１つ以上指定してください</p>
        )}

        <input
          type="text"
          placeholder="件名"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail__error">件名を入力してください</p>
        )}

        <textarea
          type="text"
          className="sendMail__message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendMail__error">本文を入力してください</p>
        )}

        <div className="sendMail__options">
          <Button className="sendMail__send" variant="contained" type="submit">
            送信
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
