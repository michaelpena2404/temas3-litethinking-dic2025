# SauceDemo Login Test Plan

## Application Overview

This test plan covers the login functionality of the SauceDemo web application (https://www.saucedemo.com/). It includes happy path, negative, and edge case scenarios for all provided test users, as well as validation and error handling.

## Test Scenarios

### 1. Login Functionality

**Seed:** `tests/seed.spec.ts`

#### 1.1. Login page elements visibility

**File:** `tests/test-pom/login-sauce.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
  2. Verify that the username input is visible
  3. Verify that the password input is visible
  4. Verify that the login button is visible

**Expected Results:**
  - All login page elements are visible

#### 1.2. Login with empty credentials

**File:** `tests/test-pom/login-sauce.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
  2. Click the login button without entering any credentials

**Expected Results:**
  - Error message 'Epic sadface: Username is required' is displayed

#### 1.3. Login with valid username and empty password

**File:** `tests/test-pom/login-sauce.spec.ts`

**Steps:**
  1. Enter 'standard_user' in the username field
  2. Leave the password field empty
  3. Click the login button

**Expected Results:**
  - Error message 'Epic sadface: Password is required' is displayed

#### 1.4. Login with valid password and empty username

**File:** `tests/test-pom/login-sauce.spec.ts`

**Steps:**
  1. Leave the username field empty
  2. Enter 'secret_sauce' in the password field
  3. Click the login button

**Expected Results:**
  - Error message 'Epic sadface: Username is required' is displayed

#### 1.5. Login with locked_out_user credentials

**File:** `tests/test-pom/login-sauce.spec.ts`

**Steps:**
  1. Enter 'locked_out_user' in the username field
  2. Enter 'secret_sauce' in the password field
  3. Click the login button

**Expected Results:**
  - Error message 'Epic sadface: Sorry, this user has been locked out.' is displayed

#### 1.6. Login with problem_user credentials

**File:** `tests/test-pom/login-sauce.spec.ts`

**Steps:**
  1. Enter 'problem_user' in the username field
  2. Enter 'secret_sauce' in the password field
  3. Click the login button

**Expected Results:**
  - User is redirected to the inventory page. (Note: UI issues may be present for this user)

#### 1.7. Login with performance_glitch_user credentials

**File:** `tests/test-pom/login-sauce.spec.ts`

**Steps:**
  1. Enter 'performance_glitch_user' in the username field
  2. Enter 'secret_sauce' in the password field
  3. Click the login button

**Expected Results:**
  - User is redirected to the inventory page. (Note: Login may be slower for this user)

#### 1.8. Login with error_user credentials

**File:** `tests/test-pom/login-sauce.spec.ts`

**Steps:**
  1. Enter 'error_user' in the username field
  2. Enter 'secret_sauce' in the password field
  3. Click the login button

**Expected Results:**
  - User is redirected to the inventory page. (Note: UI errors may be present for this user)

#### 1.9. Login with visual_user credentials

**File:** `tests/test-pom/login-sauce.spec.ts`

**Steps:**
  1. Enter 'visual_user' in the username field
  2. Enter 'secret_sauce' in the password field
  3. Click the login button

**Expected Results:**
  - User is redirected to the inventory page. (Note: Visual differences may be present for this user)

#### 1.10. Login with standard_user credentials (happy path)

**File:** `tests/test-pom/login-sauce.spec.ts`

**Steps:**
  1. Enter 'standard_user' in the username field
  2. Enter 'secret_sauce' in the password field
  3. Click the login button

**Expected Results:**
  - User is redirected to the inventory page and sees the product list
