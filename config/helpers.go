package helpers

import (
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"net/http"
	"strings"
)

func parseJSONBody(r *http.Request, target interface{}) error {
	if r.Header.Get("Content-Type") != "application/json" {
		return errors.New("invalid content type, expected application/json")
	}

	decoder := json.NewDecoder(r.Body)
	decoder.DisallowUnknownFields()

	if err := decoder.Decode(target); err != nil {
		return fmt.Errorf("failed to decode JSON body: %w", err)
	}

	return nil
}

func logError(err error) {
	log.Printf("error: %v", err)
}

func validateString(s string) bool {
	return strings.TrimSpace(s) != ""
}

func getHeaderValue(r *http.Request, key string) string {
	return r.Header.Get(key)
}

func parseQueryString(r *http.Request, key string) (string, error) {
	values := r.URL.Query()
	value := values.Get(key)

	if !validateString(value) {
		return "", errors.New("query string value is empty")
	}

	return value, nil
}