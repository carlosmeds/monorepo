"use client";

import { Button } from "@repo/ui/button";
import styles from "./form.module.css";

interface FormProps {
  onSubmit: (formData: FormData) => void;
}

export const Form = ({ onSubmit }: FormProps) => {
  return (
    <form action={onSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Product"
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="price" className={styles.label}>
          Price
        </label>
        <input
          type="text"
          id="price"
          name="price"
          placeholder="$0.00"
          className={styles.input}
        />
      </div>
      <Button appName="web" className={styles.secondary}>
        Submit
      </Button>
    </form>
  );
};
